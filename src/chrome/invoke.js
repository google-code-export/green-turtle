var treeSource = document.getElementById("webkit-xml-viewer-source-xml");
if (!treeSource && document.head) {
   var script = null;
   if (!document.data) {
      script = document.createElement("script");
      script.setAttribute("type","text/javascript");
      script.setAttribute("src",(document.location.protocol=="https:" ? "https:" : "http:")+"//"+rdfaHostPath);
      document.head.appendChild(script);
   }

   var start = (new Date()).getTime();
   var meta = null;
   var searchForMeta = function() {
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
            chrome.extension.onRequest.addListener(
               function(request,sender,sendResponse) {
                  if (request.getTriples) {
                     var graph = {};
                     var handler = function(event) {
                        var message = JSON.parse(meta.getAttribute("content"));
                        if (message.type=="subjects") {
                           for (var i=0; i<message.subjects.lengthl; i++) {
                              subjects[message.subjects[i]] = { subject: message.subjects[i] };
                           }
                           this.index = 0;
                           this.subjects = message.subjects;
                           console.log("Getting subject "+(this.index+1)+" of "+this.subjects.length); 
                           meta.setAttribute("content",JSON.stringify({ type: "get-subject", subject: this.subjects[this.index]}));
                           var event = makeEvent();
                           meta.dispatchEvent(event);
                        } else if (message.type=="subject") {
                           graph[message.subject] = message.triples;
                           this.index++;
                           if (this.index<this.subjects.length) {
                              console.log("Getting subject "+(this.index+1)+" of "+this.subjects.length); 
                              meta.setAttribute("content",JSON.stringify({ type: "get-subject", subject: this.subjects[this.index]}));
                              var event = makeEvent();
                              meta.dispatchEvent(event);
                           } else {
                              console.log("Finished getting subjects, sending to viewer.");
                              sendResponse({ setTriples: true, triples: graph });
                              meta.removeEventListener("green-turtle-rdfa-extension",handler,false);
                           }
                        }
                     };
                     meta.addEventListener("green-turtle-rdfa-extension",handler,false);
                     meta.setAttribute("content",JSON.stringify({ type: "get-subjects"}));
                     var event = makeEvent();
                     meta.dispatchEvent(event);
                  }
               });
         }
         current = current.nextSibling;
      }
      var elapsed = (new Date()).getTime()-start;
      if (!meta && elapsed < 10000) {
         setTimeout(searchForMeta,500);
      } else if (!meta && elapsed >= 10000) {
         // script load failed (probably offline)
         console.log("Green turtle script load failed, harvesting for extension only (i.e. no document.data)");
         document.head.removeChild(script);
         var rdfaProcessor = new RDFaProcessor(document.documentElement);
         chrome.extension.onRequest.addListener(
            function(request,sender,sendResponse) {
               if (request.getTriples) {
                  sendResponse({ setTriples: true, triples: rdfaProcessor.getTransferGraph() });
               }
            });
         rdfaProcessor.process(document.documentElement);
         if (rdfaProcessor.target.tripleCount>0) {
            chrome.extension.sendRequest({ harvestedTriples: true });
            console.log("Found "+rdfaProcessor.target.tripleCount+" triples");
         }
      }
   }
   searchForMeta();
} else if (treeSource) {
   console.log("Extracting data from XML embedded in rendered tree view...");
   var rdfaProcessor = new RDFaProcessor({});
   chrome.extension.onRequest.addListener(
      function(request,sender,sendResponse) {
         if (request.getTriples) {
            sendResponse({ setTriples: true, triples: rdfaProcessor.getTransferGraph() });
         }
      });
   rdfaProcessor.process(treeSource.firstChild);
   if (rdfaProcessor.target.tripleCount>0) {
      chrome.extension.sendRequest({ harvestedTriples: true });
      console.log("Found "+rdfaProcessor.target.tripleCount+" triples");
   }
} else {
   var rdfaProcessor = new RDFaProcessor({});
   chrome.extension.onRequest.addListener(
      function(request,sender,sendResponse) {
         if (request.getTriples) {
            sendResponse({ setTriples: true, triples: rdfaProcessor.getTransferGraph() });
         }
      });
   rdfaProcessor.process(document.documentElement);
   if (rdfaProcessor.target.tripleCount>0) {
      chrome.extension.sendRequest({ harvestedTriples: true });
      console.log("Found "+rdfaProcessor.target.tripleCount+" triples");
   }
}

