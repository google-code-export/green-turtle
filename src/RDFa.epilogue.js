var implementation = {

   attach: function(document,options) {
      var hasFeature = document.implementation.hasFeature;
      document.implementation.hasFeature = function(feature,version) {
         if (feature=="RDFaAPI" && version=="1.1") { return true; }
         return hasFeature.apply(this,arguments);
      }
      
      var loaded = document.data ? true : false;
      if (document.head) {
         var meta = null;
         var current = document.head.firstElementChild;
         while (!meta && current) {
            if (current.localName=="meta" && current.getAttribute("name")=="green-turtle-rdfa-message") {
               meta = current;
            }
            current = current.nextElementSibling;
         }
         if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name","green-turtle-rdfa-message");
            document.head.appendChild(meta);
         }
         var makeEvent = function() {
            var event = document.createEvent("Event");
            event.initEvent("green-turtle-rdfa-extension",true,true);
            return event;
         }
         meta.addEventListener("green-turtle-rdfa-document",function(event) {
            var message = JSON.parse(meta.getAttribute("content"));
            if (message.type=="status") {
               var doneEvent = makeEvent();
               meta.setAttribute("content",'{ "type": "status", "loaded": '+loaded+', "count": '+document.data.graph.tripleCount+' }');
               setTimeout(function() { meta.dispatchEvent(doneEvent); },1);
            } else if (message.type=="get-subjects") {
               var subjects = document.data.getSubjects();
               meta.setAttribute("content",'{ "type": "subjects", "subjects": '+JSON.stringify(subjects)+' }');
               var getSubjectsEvent = makeEvent();
               setTimeout(function() { meta.dispatchEvent(getSubjectsEvent); },1);
            } else if (message.type=="get-subject") {
               var triples = null;
               if (document.data.getSubject) {
                  // Use the Green Turtle triples extension
                  triples = document.data.getSubject(message.subject).toObject();
               } else {
                  // Do it the hard way!
                  triples = { subject: message.subject, predicates: {} };
                  var projection = document.data.getProjection(message.subject);
                  var properties = projection.getProperties();
                  for (var i=0; i<properties.length; i++) {
                     var objects = [];
                     triples.predicates[properties[i]] = { predicate: predicate, objects: objects };
                     var values = projection.getAll(properties[i]);
                     for (var j=0; j<values.length; j++) {
                        if (subjects[values[j]]) {
                           objects.push({type: "http://www.w3.org/1999/02/22-rdf-syntax-ns#object",value: values[j]});
                        } else {
                           objects.push({ type:  "http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral", value: values[j]});
                        }
                     }
                  }
               }
               var response = { type: "subject", subject: message.subject, triples: triples };
               meta.setAttribute("content",JSON.stringify(response));
               var getSubjectEvent = makeEvent();
               setTimeout(function() { meta.dispatchEvent(getSubjectEvent); },1);
            }
         },false);
      }
      
      
      if (!document.data) {
         DocumentData.attach(document,options);
      } else if (document.data._data_) {
         document.data._data_.graph.clear();
      }
      
      var processDoc = function() {
         var processor = new GraphRDFaProcessor(document.data._data_);
         // Note: This handler MUST execute before the rdfa.loaded event is sent
         processor.finishedHandlers.push(function(node) {
            for (var mediaType in implementation.processors) {
               var processor = implementation.processors[mediaType];
               processor.process(document,options);
            }
         });
         processor.finishedHandlers.push(function(node) {
            if (node.ownerDocument) {
               var event = node.ownerDocument.createEvent("HTMLEvents");
               event.initEvent("rdfa.loaded",true,true);
               node.ownerDocument.dispatchEvent(event);
            }
         });
         processor.process(document.documentElement,options);
         loaded = true;
         
      }
      
      if (document.readyState=="loading") {
         window.addEventListener("load",function() {
            processDoc();
         },false);
      } else {
         processDoc();
      }
      
   },

   parse: function(text,mediaType,options) {
      var parserFactory = this.processors[mediaType];
      if (!parserFactory) {
         throw "Unsupported media type "+mediaType;
      }
      var parser = parserFactory.createParser();
      if (options && options.errorHandler) {
         parser.onError = options.errorHandler;
      }
      var base = options ? options.baseURI : null;
      parser.parse(text,base);
      if (parser.errorCount>0) {
         throw base ? "Errors during parsing "+base+" of type "+mediaType : "Errors during parsing of type "+mediaType;
      }
      return parser.context;
   },
   
   createDocumentData: function(baseURI) {
      return new DocumentData(baseURI ? baseURI : window ? window.location.href : "about:blank");
   }
   
};

Object.defineProperty(implementation,"processors", {
   value: {},
   writable: false,
   configurable: false,
   enumerable: true
});

implementation.processors["text/turtle"] = {
   createParser: function() {
      return new TurtleParser();
   },
   process: function(node,options) {
      if (!this.enabled) {
         return;
      }
      var owner = node.nodeType==Node.DOCUMENT_NODE ? node : node.ownerDocument;
      if (!owner.data) {
         return;
      }
      var success = true;
      var scripts = owner.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","script");
      for (var i=0; i<scripts.length; i++) {
         if (scripts[i].getAttribute("type")!="text/turtle") {
            continue;
         }
         var parser = this.createParser();
         if (options && options.errorHandler) {
            parser.onError = options.errorHandler;
         }
         var base = options ? options.baseURI : null;
         parser.parse(scripts[i].textContent,base);
         if (parser.errorCount>0) {
            success = false;
         } else {
            owner.data.merge(parser.context.subjects,{ prefixes: parser.context.prefixes});
         }
      }
      return success;
   },
   enabled: true
};

implementation.processors["microdata"] = {
   process: function(node,options) {
      if (!this.enabled) {
         return;
      }
      var owner = node.nodeType==Node.DOCUMENT_NODE ? node : node.ownerDocument;
      if (!owner.data) {
         return false;
      }
      var processor = new GraphMicrodataProcessor(owner.data.graph);
      processor.process(node);
      return true;
   },
   enabled: false
};

Object.defineProperty(env,"implementation", {
   value: implementation,
   writable: false,
   configurable: false,
   enumerable: true
});

env.attach = function(document,options) {
   implementation.attach(document,options);
};

return env;

})();


}



