
function getTransferSubject(triplesGraph,subject) {
   var snode = triplesGraph[subject];
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

function setupDocumentTransfer() {
   var meta = null;
   var current = document.head.firstChild;
   while (!meta && current) {
      if (current.localName=="meta" && current.getAttribute("name")=="green-turtle-rdfa-message") {
         meta = current;
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
                  console.log("Found "+message.count+" triples");
               }
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
                  console.log("Getting subject "+request.subject);
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
            });
      }
      current = current.nextSibling;
   }
   if (meta==null) {
      console.log("Cannot initialize transfer from existing RDFa implementation.  Manually transfering triples.");
      manualTransfer();
   }
}

function manualTransfer() {
   var startTime = new Date();
   var rdfaProcessor = new GraphRDFaProcessor({});
   chrome.extension.onRequest.addListener(
      function(request,sender,sendResponse) {
         if (request.getSubjects) {
            var subjects = [];
            for (var subject in rdfaProcessor.target.triplesGraph) {
               subjects.push(subject);
            }
            sendResponse({ setSubjects: true, subjects: subjects });
         } else if (request.getSubject) {
            sendResponse({ setSubject: true, subject: getTransferSubject(rdfaProcessor.target.triplesGraph,request.subject) });
         }
      });
   rdfaProcessor.process(document.documentElement);
   if (rdfaProcessor.target.tripleCount>0) {
      var endTime = new Date();
      chrome.extension.sendRequest({ harvestedTriples: true });
      console.log("Found "+rdfaProcessor.target.tripleCount+" triples, elapsed "+(endTime.getTime()-startTime.getTime())+"ms");
   }
}

var treeSource = document.getElementById("webkit-xml-viewer-source-xml");
if (!treeSource && document.head) {
   if (document.readyState=="complete") {
      setupDocumentTransfer();
   } else {
      document.addEventListener("rdfa.loaded",function() {
         //console.log("RDFa loaded!");
         if (checkTimer.timer) {
            //console.log("Clearing checkTimer");
            clearTimeout(checkTimer.timer);
         }
         console.log("Attempting to use browser/document RDFa implementation.");
         setupDocumentTransfer();
      },false);
      var checkTimer = {
         count: 0,
         timer: null,
         check: function() {
            var current = document.head.firstChild;
            while (current) {
               if (current.localName=="meta" && current.getAttribute("name")=="green-turtle-rdfa-message") {
                  console.log("Green Turtle detected, document.readyState="+document.readyState);
                  return;
               }
               current = current.nextSibling;
            }
            if (this.count>5) {
               console.log("No load RDFa implementation found.  Manually transfering triples.");
               manualTransfer();
            } else {
               console.log("Waiting for RDFa implementation: "+this.count);
               this.timer = setTimeout(function() { checkTimer.check() },500);
            }
            this.count++;
         }
      };
      try {
         checkTimer.check();
      } catch (ex) {
         console.log(ex);
      }
      
   }

} else {
   manualTransfer();
}
