var Log = {
   elem: false,
   write: function(text){
      if (!this.elem) 
	 this.elem = document.getElementById('log');
      this.elem.innerHTML = text;
   },
   hide: function() {
      this.elem.style.display = "none";
   }
};

function Viewer() {
   this.typeURI = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
   this.objectURI = "http://www.w3.org/1999/02/22-rdf-syntax-ns#object";
   this.XMLLiteralURI = "http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral"; 
   this.PlainLiteralURI = "http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral";
}

Viewer.prototype.init = function(url,id) {
   this.url = url;
   this.id = id;
   this.table = document.getElementById('triples');
   var current = this;
   document.title = "RDFa: "+url;   
   document.getElementById("s1").onclick = function() {
      current.visualization.canvas.resize(800,300);
      document.getElementById("visualization").style.height="300px";
   };
   document.getElementById("s2").onclick = function() {
      current.visualization.canvas.resize(800,500);
      document.getElementById("visualization").style.height="500px";
   };
   document.getElementById("s3").onclick = function() {
      current.visualization.canvas.resize(800,800);
      document.getElementById("visualization").style.height="800px";
   };
   document.getElementById("visualize").onclick = function() {
      document.getElementById("graphviz").style.display = "block";
      document.getElementById("no-graphviz").style.display = "none";
      setTimeout(function() {
         current.renderGraph()
      },10);
   };
   
   var stopButton = document.getElementById("stop");
   stopButton.onclick = function() {
      if (current.inprogressGraph) {
         if (stopButton.textContent=="Stop") {
            current.inprogressGraph.continueLoading = false;
            stopButton.innerHTML = "Continue";
         } else {
            current.inprogressGraph.continueLoading = true;
            stopButton.innerHTML = "Stop";
            current.loadSubjects();
         }
      }
   }

   chrome.tabs.sendRequest(id,{getSubjects: true, id: this.id},function(response) {
      if (response.setSubjects) {
         current.loadSubjects(response.subjects);
      } 
   });
}

Viewer.prototype.clear = function(parent) {
   while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
   }
}

Viewer.prototype.loadSubjects = function(subjects) {
   if (subjects) {
      this.inprogressGraph = {
         continueLoading: true,
         index: 0,
         subjects: subjects,
         graph: {}
      };
   }
   var current = this;
   var getSubject = function() {
      document.getElementById("wait").innerHTML = "Getting subject "+(current.inprogressGraph.index+1)+" of "+current.inprogressGraph.subjects.length+" "+current.inprogressGraph.subjects[current.inprogressGraph.index];
      document.getElementById("inspector").style.display = "block";
      chrome.tabs.sendRequest(current.id,{getSubject: true, subject: current.inprogressGraph.subjects[current.inprogressGraph.index]},function(response) {
         if (response.setSubject) {
            current.inprogressGraph.graph[response.subject.subject] = response.subject;
            current.addTriplesToTable(response.subject);
            current.inprogressGraph.index++;
            if (current.inprogressGraph.index<current.inprogressGraph.subjects.length) {
               if (current.inprogressGraph.continueLoading) {
                  getSubject();
               }
            } else {
               current.triplesGraph = current.inprogressGraph.graph;
               current.inprogressGraph = null;
               document.getElementById("status").style.display = "none";
               setTimeout(function() {
                  current.updateGraph();
               },1);
            }
         }
      });
   }
   getSubject();
   
}

Viewer.prototype.addTriplesToTable = function(snode) {
   for (var predicate in snode.predicates) {
      var pnode = snode.predicates[predicate];
      for (var i=0; i<pnode.objects.length; i++) {
         var object = pnode.objects[i];
         this.addTriple(snode,pnode,object);
      }
   }
}

Viewer.prototype.setTriples = function(graph,doneHandler) {
   this.triplesGraph = graph;
   var app = this;
   setTimeout(function() { app.update(); if (doneHandler) doneHandler(); },1);
}

Viewer.prototype.constructGraph = function() {
   var map = {};
   var graph = [];
   var p = 0;
   for (var subject in this.triplesGraph) {
      var snode = this.triplesGraph[subject];
      var subjectNode = map[subject];
      if (!subjectNode) {
         subjectNode = {
            "id": subject,
            "name": subject,
            "data": {
               "$color": "rgb(255,0,0)",
               "$type": "circle",
               "$dim": 5,
               subject: subject
            },
            "adjacencies": [ ]
	 };
         map[subject] = subjectNode;
         graph.push(subjectNode);
      }
      for (var predicate in snode.predicates) {
         var pnode = snode.predicates[predicate];
         for (var i=0; i<pnode.objects.length; i++) {
            var object = pnode.objects[i];
            p++;
	    var predicateNode = {
               "id": "predicate-"+p,
               "name": predicate,
               "data": {
		  "$color": "rgb(0,255,0)",
		  "$type": "circle",
		  "$dim": 5,
                  triple: [ subjectNode.data.subject, predicate, object ],
		  predicate: predicate
               },
               "adjacencies": [ ]
	    };
	    graph.push(predicateNode);
            if (object.type==this.objectURI) {
               var objectNode = map[object.value];
	       if (!objectNode) {
		  objectNode = {
		     "id": object.value,
		     "name": object.value,
		     "data": {
			"$color": "rgb(255,0,0)",
			"$type": "circle",
			"$dim": 5,
			subject: object.value
		     },
		     "adjacencies": [ ]
		  };
		  map[object.value] = objectNode;
		  graph.push(objectNode);
	       }
               subjectNode.adjacencies.push(predicateNode.id);
               predicateNode.adjacencies.push(objectNode.id);
	    } else {
               var literalNode = {
		  "id": "literal-"+p+"-"+i,
		  "name": object.value,
		  "data": {
		     "$color": "rgb(200,200,200)",
		     "$type": "square",
		     "$dim": 5,
                     triple: [ subjectNode.data.subject, predicateNode.data.predicate, object ],
		     object: object
		  },
		  "adjacencies": [ ]
	       };
               graph.push(literalNode);
               subjectNode.adjacencies.push(predicateNode.id);
               predicateNode.adjacencies.push(literalNode.id);
	    }            
         }
      }
   }
   return graph;
}

Viewer.prototype.updateGraph = function() {
   var graphVizDiv = document.getElementById("graphviz");
   var nographVizDiv = document.getElementById("no-graphviz");
   if (this.table.childNodes.length>100) {
      graphVizDiv.style.display = "none";
      nographVizDiv.style.display = "block";
   } else {
      Log.write("Constructing graph...");
      this.graph = this.constructGraph();
      graphVizDiv.style.display = "block";
      nographVizDiv.style.display = "none";
      this.renderGraph();
   }

}

Viewer.prototype.renderGraph = function() {
   var infoDiv = document.getElementById("info");
   var app = this;
   Log.write("Constructing graph renderer...");
   var fd = new $jit.ForceDirected({
      //id of the visualization container
      injectInto: 'visualization',
      //Enable zooming and panning
      //by scrolling and DnD
      Navigation: {
	 enable: true,
	 //Enable panning events only if we're dragging the empty
	 //canvas (and not a node).
	 panning: 'avoid nodes',
	 zooming: 10 //zoom speed. higher is more sensible
      },
      // Change node and edge styles such as
      // color and width.
      // These properties are also set per node
      // with dollar prefixed data-properties in the
      // JSON structure.
      Node: {
	 overridable: true
      },
      Edge: {
	 overridable: true,
	 color: '#23A4FF',
	 lineWidth: 0.4
      },
      // Add node events
      Events: {
	 enable: true,
	 //Change cursor style when hovering a node
	 onMouseEnter: function() {
            fd.canvas.getElement().style.cursor = 'move';
	 },
	 onMouseLeave: function() {
            fd.canvas.getElement().style.cursor = '';
	 },
	 //Update node positions when dragged
	 onDragMove: function(node, eventInfo, e) {
            var pos = eventInfo.getPos();
            node.pos.setc(pos.x, pos.y);
            fd.plot();
	 },
	 //Implement the same handler for touchscreens
	 onTouchMove: function(node, eventInfo, e) {
            $jit.util.event.stop(e); //stop default touchmove event
            this.onDragMove(node, eventInfo, e);
	 },
	 //Add also a click handler to nodes
	 onClick: function(node) {
            if(!node) return;
            var markup = "";
            var postProcess = null;
            if (node.data.subject) {
               app.selectSubject(node.data.subject);
               markup = "<p>Subject: &lt;"+node.data.subject+"></p>";
            } else if (node.data.predicate) {
               //app.selectPredicate(node.data.predicate);
               app.selectObject(node.data.triple[0],node.data.triple[1],node.data.triple[2]);
               markup = "<p>Predicate: &lt;"+node.data.predicate+"> <a href='#'>select all</a></p>";
               var doSelectAll = true;
               postProcess = function() {
                  var a = infoDiv.getElementsByTagName("a").item(0);
                  a.onclick = function() {
                     if (doSelectAll) {
			app.selectPredicate(node.data.predicate);
                        a.innerHTML = "select triple";
                        doSelectAll = false;
                     } else {
                        app.selectObject(node.data.triple[0],node.data.triple[1],node.data.triple[2]);
                        a.innerHTML = "select all";
                        doSelectAll = true;
                     }
                     return false;
                  }
               }
            } else if (node.data.object) {
               app.selectObject(node.data.triple[0],node.data.triple[1],node.data.object);
               markup = "<p>Object \""+node.data.object.value+"\"</p>";
            } else if (node.data.triple) {
               markup = "<h2>Triple</h2><p>&lt;"+node.data.triple.subject+"></p><p>&lt;"+node.data.triple.predicate+"></p>";
               if (node.data.triple.object.type==app.objectURI) {
                  markup += "<p>&lt;"+node.data.triple.object.value+"></p>";
               } else {
                  markup += "<p>\""+node.data.triple.object.value+"\"</p>";
               }
            }
            infoDiv.innerHTML = markup;
            if (postProcess) {
	       postProcess();
	    }
	 }
      },
      //Number of iterations for the FD algorithm  
      iterations: 100,
      //Edge length  
      levelDistance: 5
   });
   Log.write("Loading graph...");
   fd.loadJSON(this.graph);
   // compute positions incrementally and animate.
   Log.write("Rendering graph...");
   fd.computeIncremental({
      iter: 40,
      property: 'end',
      onStep: function(perc){
	 Log.write(perc + '% loaded...');
      },
      onComplete: function(){
         Log.hide();
	 fd.animate({
            modes: ['linear'],
            transition: $jit.Trans.Elastic.easeOut,
            duration: 2500
	 });
      }
   });
   this.visualization = fd;

}

Viewer.prototype.clearSelection = function() {
   if (this.selection) {
      var row = null;
      while ((row = this.selection.pop())) {
         if (row.className.indexOf("even")>=0) {
            row.className = "even";
         } else {
            row.className = "odd";
	 }
      }
   }
   this.selection = [];
}

Viewer.prototype.selectSubject = function(subject) {
   this.clearSelection();
   var row = this.table.firstChild;
   while (row) {
      if (row.firstChild.getAttribute("content")==subject || row.firstChild.nextSibling.nextSibling.getAttribute("content")==subject) {
         this.selection.push(row);
         row.className += " selected";
      }
      row = row.nextSibling;
   }
}

Viewer.prototype.selectPredicate = function(predicate) {
   this.clearSelection();
   var row = this.table.firstChild;
   while (row) {
      if (row.firstChild.nextSibling.getAttribute("content")==predicate) {
         this.selection.push(row);
         row.className += " selected";
      }
      row = row.nextSibling;
   }
}

Viewer.prototype.selectObject = function(subject,predicate,object) {
   this.clearSelection();
   var row = this.table.firstChild;
   while (row) {
      if (row.firstChild.getAttribute("content")==subject &&
          row.firstChild.nextSibling.getAttribute("content")==predicate &&
          row.firstChild.nextSibling.nextSibling.getAttribute("content")==object.value) {
         this.selection.push(row);
         row.className += " selected";
      }
      row = row.nextSibling;
   }
}

Viewer.prototype.addTriple = function(snode,pnode,object) {
   var row = document.createElement("tr");
   var markup = "<td>&lt;"+snode.subject+"></td><td>&lt;"+pnode.predicate+"></td><td>";
   if (object.type==this.PlainLiteralURI) {
      var literal = '"'+object.value+'"';
      if (object.language) {
         literal += '@'+object.language;
      }
      markup += literal;
   } else if (object.type==this.XMLLiteralURI) {
      markup += object.value;
   } else if (object.type==this.objectURI) {
      markup += "&lt;"+object.value+">";
   } else {
      markup += '"'+object.value+'"^^&lt;'+object.type+'>';
   }
   markup += "</td>";
   row.innerHTML = markup;
   this.table.appendChild(row);
   var odd = this.table.childNodes.length % 2;
   if (odd) {
      row.className = "odd";
   } else {
      row.className = "even";
   }
   row.firstChild.setAttribute("content",snode.subject);
   row.firstChild.nextSibling.setAttribute("content",pnode.predicate);
   row.firstChild.nextSibling.nextSibling.setAttribute("content",object.value);
}

var viewer = new Viewer();

window.addEventListener(
   "load",
   function() {
      chrome.extension.onRequest.addListener(
         function(request, sender, sendResponse) {
            if (request.viewerInit) {
               viewer.init(request.url,request.id);
            }
         }
      );
   },
   false
);

