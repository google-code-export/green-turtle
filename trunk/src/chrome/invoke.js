document.greenTurtleInvoked = false;

function getTransferSubject(subjects,subject) {
   var snode = subjects[subject];
   var tsnode = { subject: subject, predicates: {} };
   for (var predicate in snode.predicates) {
      var pnode = snode.predicates[predicate];
      var tpnode = { predicate: predicate, objects: [] };
      tsnode.predicates[predicate] = tpnode;
      for (var i=0; i<pnode.objects.length; i++) {
         var object = pnode.objects[i];
         if (object.type==RDFaProcessor.XMLLiteralURI || object.type==RDFaProcessor.HTMLLiteralURI) {
            var serializer = new XMLSerializer();
            var value = "";
            for (var x=0; x<object.value.length; x++) {
               if (object.value[x].nodeType==Node.ELEMENT_NODE) {
                  value += serializer.serializeToString(object.value[x]);
               } else if (object.value[x].nodeType==Node.TEXT_NODE) {
                  value += object.value[x].nodeValue;
               }
            } 
            tpnode.objects.push({ type: object.type, value: value});
         } else {
            tpnode.objects.push({ type: object.type, value: object.value});
         }
      }
   }
   return tsnode;
}

function log(msg) {
   console.log("Green Turtle: "+msg);
}

function detectGreenTurtle() {
   var current = document.head.firstElementChild;
   while (current) {
      if (current.localName=="meta" && current.getAttribute("name")=="green-turtle-rdfa-message") {
         log("Green Turtle implementation detected.");
         return current;
      }
      current = current.nextElementSibling;
   }
   return null;
}

function setupDocumentTransfer(meta) {
   var makeEvent = function() {
      var event = document.createEvent("Event");
      event.initEvent("green-turtle-rdfa-document",true,true);
      return event;
   };
   meta.addEventListener("green-turtle-rdfa-extension",function(event) {
      var message = JSON.parse(meta.getAttribute("content"));
      if (message.type=="status") {
         if (message.count) {
            chrome.extension.sendRequest({ harvestedTriples: true });
         }
         log("Found "+message.count+" triples");
      }
   },false);

   var checkEvent= makeEvent();
   meta.setAttribute("content",'{ "type": "status"}');
   meta.dispatchEvent(checkEvent);
   var transferStatus = {};
   chrome.extension.onRequest.addListener(
      function(request,sender,sendResponse) {
         if (request.getSubjects) {
            meta.setAttribute("content",JSON.stringify({ type: "get-subjects"}));
            var event = makeEvent();
            meta.dispatchEvent(event);
            var handleResponse = function(event) {
               meta.removeEventListener("green-turtle-rdfa-extension",handleResponse,false);
               var message = JSON.parse(meta.getAttribute("content"));
               if (message.type!="subjects") {
                  return;
               }
               sendResponse({ setSubjects: true, subjects: message.subjects});
            }
            meta.addEventListener("green-turtle-rdfa-extension",handleResponse,false);
            meta.setAttribute("content",JSON.stringify({ type: "get-subjects"}));
            var event = makeEvent();
            meta.dispatchEvent(event);
         } else if (request.getSubject) {
            log("Getting subject "+request.subject);
            var handleResponse = function(event) {
               meta.removeEventListener("green-turtle-rdfa-extension",handleResponse,false);
               var message = JSON.parse(meta.getAttribute("content"));
               if (message.type!="subject") {
                  return;
               }
               sendResponse({ setSubject: true, subject: message.triples});
            }
            meta.addEventListener("green-turtle-rdfa-extension",handleResponse,false);
            meta.setAttribute("content",JSON.stringify({ type: "get-subject", subject: request.subject}));
            var event = makeEvent();
            meta.dispatchEvent(event);
         }
      }
   );
}

function injectGreenTurtle() {
   chrome.extension.sendRequest({method: "getMicrodataEnabled"}, function(response) {
      var options = "window.GreenTurtleOptions = { microdataEnabled: "+response.enabled+" };"
      var optionsURL = "data:text/javascript;base64,"+btoa(options);
      log("Injecting Green Turtle RDFa ...");
      var optionsScript = document.createElement("script");
      optionsScript.setAttribute("type","text/javascript");
      optionsScript.setAttribute("src",optionsURL);
      document.head.appendChild(optionsScript);
      var scriptURL = chrome.extension.getURL("RDFa.js");
      var script = document.createElement("script");
      script.setAttribute("type","text/javascript");
      script.setAttribute("src",scriptURL);
      document.head.appendChild(script);
   });
}

function manualTransfer() {
   var rdfaProcessor = new GraphRDFaProcessor({ graph: new RDFaGraph()});
   chrome.extension.onRequest.addListener(
      function(request,sender,sendResponse) {
         if (request.getSubjects) {
            var subjects = [];
            for (var subject in rdfaProcessor.target.graph.subjects) {
               subjects.push(subject);
            }
            sendResponse({ setSubjects: true, subjects: subjects });
         } else if (request.getSubject) {
            sendResponse({ setSubject: true, subject: getTransferSubject(rdfaProcessor.target.graph.subjects,request.subject) });
         }
      });
   rdfaProcessor.process(document.documentElement);
   var count = rdfaProcessor.target.graph.tripleCount;
   if (count>0) {
      chrome.extension.sendRequest({ harvestedTriples: true });
      log("Found "+count+" triples.");
   } else {
      log("No triples found.");
   }
}

function findImplementation() {
   var meta = detectGreenTurtle();
   if (!meta) {
      injectGreenTurtle();
   } else if (!document.greenTurtleInvoked) {
      document.greenTurtleInvoked = true;
      setupDocumentTransfer(meta);
   }
}
var treeSource = document.getElementById("webkit-xml-viewer-source-xml");
if (!treeSource && document.head) {
   document.addEventListener("rdfa.loaded",function() {
      document.ignoreLoad = true;    
      var meta = detectGreenTurtle();
      if (meta) {
         if (!document.greenTurtleInvoked) {
            document.greenTurtleInvoked = true;
            setupDocumentTransfer(meta);
         }
      } else {
         manualTransfer();
      }
   },false);
   document.addEventListener("non-green-turtle-rdfa",function() {
      manualTransfer();
   },false);
   if (document.readyState=="complete") {
      findImplementation();
   } else {
      window.addEventListener("load",function() {
         if (!document.ignoreLoad) {
            findImplementation();
         }
      },false);
   }

} else {
   manualTransfer();
}
