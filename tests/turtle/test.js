var positiveSyntaxTest = "http://www.w3.org/ns/rdftest#TestTurtlePositiveSyntax";
var negativeSyntaxTest = "http://www.w3.org/ns/rdftest#TestTurtleNegativeSyntax";
var positiveEvalTest = "http://www.w3.org/ns/rdftest#TestTurtleEval";
var negativeEvalTest = "http://www.w3.org/ns/rdftest#TestTurtleNegativeEval";

function compareGraph(A,B,map)
{
   for (var subject in B) {
      if (!A[map.applyReverse(subject)]) {
         return false;
      }
   }
   for (var subject in A) {
      var snodeA = A[subject];
      var snodeB = B[map.applyForward(subject)];
      if (!snodeB) {
         return false;
      }
      for (var predicate in snodeB.predicates) {
         if (!snodeA.predicates[predicate]) {
            return false;
         }
      }
      for (var predicate in snodeA.predicates) {
         var predicateA = snodeA.predicates[predicate];
         var predicateB = snodeB.predicates[predicate];
         if (!predicateB) {
            return false;
         }
         if (predicateA.objects.length!=predicateB.objects.length) {
            return false;
         }
         for (var i=0; i<predicateA.objects.length; i++) {
            var value = predicateA.objects[i].value;
            if (predicateA.objects[i].type=="http://www.w3.org/1999/02/22-rdf-syntax-ns#object") {
               value = map.applyForward(value);
            }
            if (value!=predicateB.objects[i].value) {
               return false;
            }
            if ((predicateA.objects[i].type || predicateB.objects[i].type) && predicateA.objects[i].type!=predicateB.objects[i].type) {
               return false;
            }
            if ((predicateA.objects[i].language || predicateB.objects[i].language) && predicateA.objects[i].language!=predicateB.objects[i].language) {
               return false;
            }
         }
      }
   }
   return true;
}

function dumpGraph(graph) {
   var s = "";
   var subjects = [];
   for (var subject in graph) {
      subjects.push(subject);
   }
   subjects.sort();
   for (var i=0; i<subjects.length; i++) {
      var snode = graph[subjects[i]];
      var predicates = [];
      var subjectStr = subjects[i].substring(0,2)=="_:" ? subjects[i]+"" : "<"+subjects[i]+">";
      for (var predicate in snode.predicates) {
         predicates.push(predicate);
      }
      predicates.sort();
      for (var j=0; j<predicates.length; j++) {
         var pnode = snode.predicates[predicates[j]];
         s += subjectStr+" "+pnode+" .\n";
      }
   }
   return s;
}

function test(entry) {
   var requester = new XMLHttpRequest();
   requester.open("GET",entry.action,false);
   requester.send(null);
   entry.shouldParse = entry.type!=negativeSyntaxTest;
   entry.passed = false;
   try {
      entry.output = document.data.parse(requester.responseText,"text/turtle",{ baseURI: entry.action});
      entry.parsed = true;
      if (entry.type==positiveSyntaxTest) {
         entry.passed = true;
      } if (entry.type==positiveEvalTest) {
         requester = new XMLHttpRequest();
         requester.open("GET",entry.result,false);
         requester.send(null);
         var expected = document.data.parse(requester.responseText,"text/turtle",{ baseURI: entry.action});
         try {
            entry.passed = compareGraph(entry.output.graph,expected.graph,entry.subjectMap);
         } catch (ex) {
            console.log(ex.toString());
         }
         if (!entry.passed) {
            entry.output.expected = requester.responseText;
            entry.output.text = dumpGraph(entry.output.graph);
         }
      }
   } catch (ex) {
      entry.parsed = false;
      if (entry.type==negativeSyntaxTest) {
         entry.passed = true;
      } 
   }
}
window.addEventListener("load",function() {
   var table = document.getElementById("output");
   var child = document.head.firstElementChild;
   var manifestURI = null;
   var mappingsURI = null;
   while (child) {
      if (child.rel=="manifest") {
         manifestURI = child.href;
      } else if (child.rel=="mappings") {
         mappingsURI = child.href;
      }
      child = child.nextElementSibling;
   }
   console.log("Loading manifest from: "+manifestURI);
   var requester = new XMLHttpRequest();
   requester.open("GET",manifestURI,false);
   requester.send(null);
   var turtle = document.data.parse(requester.responseText,"text/turtle",{ baseURI: manifestURI});
   document.data.merge(turtle.graph,turtle.prefixes);
   var manifestSubject = document.data.getSubjects("rdf:type","mf:Manifest")[0];
   //console.log("Manifest subject: "+manifestSubject);
   var currentSubject = document.data.getValues(manifestSubject,"mf:entries")[0];
   var entries = [];
   while (currentSubject!="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil") {
      //console.log("Item subject: "+currentSubject);
      var entrySubject = document.data.getValues(currentSubject,"rdf:first")[0];
      //console.log("Entry: "+entrySubject);
      var entry = {
         subject: entrySubject,
         action: document.data.getValues(entrySubject,"mf:action")[0],
         type: document.data.getValues(entrySubject,"rdf:type")[0],
         name: document.data.getValues(entrySubject,"mf:name")[0],
         comment: document.data.getValues(entrySubject,"rdfs:comment")[0]
      };
      var results = document.data.getValues(entrySubject,"mf:result");
      if (results.length>0) {
         entry.result = results[0];
      }
      entries.push(entry);
      currentSubject = document.data.getValues(currentSubject,"rdf:rest")[0];
   }
   
   console.log("Loading mappings from "+mappingsURI);
   
   var requester = new XMLHttpRequest();
   requester.open("GET",mappingsURI,false);
   requester.send(null);
   var turtle = document.data.parse(requester.responseText,"text/turtle",{ baseURI: manifestURI});
   var mapDoc = document.implementation.createDocument("http://www.w3.org/1999/xhtml","html");
   mapDoc.documentElement.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:base",window.location.href);
   RDFa.attach(mapDoc);
   mapDoc.data.merge(turtle.graph);
   for (var i=0; i<entries.length; i++) {
      var entry = entries[i];
      entry.subjectMap = { forward: {}, reverse: {} ,
         applyForward: function(s) {
            var mapped = this.forward[s];
            return mapped ? mapped : s;
         },
         applyReverse: function(s) {
            var mapped = this.reverse[s];
            return mapped ? mapped : s;
         }
      };
      var fromSubjects = mapDoc.data.getValues(entry.subject,"http://www.milowski.com/testing/from");
      var toSubjects = mapDoc.data.getValues(entry.subject,"http://www.milowski.com/testing/to");
      if (fromSubjects.length==0) {
         continue;
      }
      console.log("Loading subject map for "+entry.subject);
      var currentFromSubject = fromSubjects[0];
      var currentToSubject = toSubjects[0];
      while (currentFromSubject!="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil") {
         var from = mapDoc.data.getValues(currentFromSubject,"rdf:first")[0];
         var to = mapDoc.data.getValues(currentToSubject,"rdf:first")[0];
         entry.subjectMap.forward[from] = to;
         entry.subjectMap.reverse[to] = from;
         console.log(from+" -> "+to);
         currentFromSubject = mapDoc.data.getValues(currentFromSubject,"rdf:rest")[0];
         currentToSubject = mapDoc.data.getValues(currentToSubject,"rdf:rest")[0];
      }
   }
   
   for (var i=0; i<entries.length; i++) {
      var entry = entries[i];
      console.log("Testing: "+entry.name+", "+entry.comment);
      test(entry);
      var row = document.createElement("tr");
      table.appendChild(row);
      var shortType = entry.type.substring(entry.type.indexOf("#")+1);
      row.innerHTML = "<td><a target=\"new\" href=\"parser.xhtml?"+entry.action+"\">"+entry.name+"</a></td><td>"+shortType+"</td><td class=\""+(entry.shouldParse ? entry.parsed ? "pass" : "fail" : entry.parsed ? "fail" : "pass")+"\">"+entry.parsed+"</td><td class=\""+(entry.passed ? "pass" : "fail")+"\">"+(entry.passed ? "pass" : "fail")+"</td><td></td>";
      if (entry.output && entry.output.expected) {
         var cell = row.cells[4];
         cell.innerHTML = "<pre/><p>versus</p><pre/>";
         cell.firstChild.appendChild(document.createTextNode(entry.output.text));
         cell.lastChild.appendChild(document.createTextNode(entry.output.expected));
      }
   }
},false);