
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
   chrome.extension.sendRequest(
      { getTriples: true, id: id},
      function(response) { current.setTriples(response.triples) }
   );
}

Viewer.prototype.setTriples = function(triples) {
   this.triples = triples;
   this.update();
}

Viewer.prototype.update = function() {
   for (var i=0; i<this.triples.length; i++) {
      this.addTriple(this.triples[i]);
   }
}

Viewer.prototype.addTriple = function(triple) {
   var row = document.createElement("tr");
   var subjectCell = document.createElement("td");
   row.appendChild(subjectCell);
   var predicateCell = document.createElement("td");
   row.appendChild(predicateCell);
   var valueCell = document.createElement("td");
   row.appendChild(valueCell);
   subjectCell.appendChild(document.createTextNode("<"+triple.subject+">"));
   predicateCell.appendChild(document.createTextNode("<"+triple.predicate+">"));
   
   if (triple.object.type==this.PlainLiteralURI) {
      var literal = '"'+triple.object.value+'"';
      if (triple.object.language) {
         literal += '@'+triple.object.language;
      }
      valueCell.appendChild(document.createTextNode(literal));
   } else if (triple.object.type==this.XMLLiteralURI) {
      var serializer = new XMLSerializer();
      var value = "";
      for (var i=0; i<triple.object.value.length; i++) {
         if (triple.object.value[i].nodeType==Node.ELEMENT_NODE) {
            value += serializer.serializeToString(triple.object.value[i]);
         } else if (triple.object.value[i].nodeType==Node.TEXT_NODE) {
            value += triple.object.value[i].nodeValue;
         }
      } 
      valueCell.appendChild(document.createTextNode(value));
   } else if (triple.object.type==this.objectURI) {
      valueCell.appendChild(document.createTextNode("<"+triple.object.value+">"));
   } else {
      valueCell.appendChild(document.createTextNode('"'+triple.object.value+'"^^<'+triple.object.type+'>'));
   }
   this.table.appendChild(row);
}

var viewer = new Viewer();

chrome.extension.onRequest.addListener(
   function(request, sender, sendResponse) {
      if (request.viewerInit) {
         viewer.init(request.url,request.id);
      }
   }
);

