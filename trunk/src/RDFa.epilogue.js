
var hasFeature = document.implementation.hasFeature;
document.implementation.hasFeature = function(feature,version) {
   if (feature=="RDFaAPI" && version=="1.1") { return true; }
   return hasFeature(feature,version);
}

var loaded = document.data ? true : false;
if (document.head) {
   var meta = document.createElement("meta");
   meta.setAttribute("name","green-turtle-rdfa-message");
   document.head.appendChild(meta);
   var makeEvent = function() {
      var event = document.createEvent("Event");
      event.initEvent("green-turtle-rdfa-extension",true,true);
      return event;
   }
   meta.addEventListener("green-turtle-rdfa-document",function(event) {
      var message = JSON.parse(meta.getAttribute("content"));
      if (message.type=="status") {
         var doneEvent = makeEvent();
         meta.setAttribute("content",'{ "type": "status", "loaded": '+loaded+', "count": '+document.data._data_.tripleCount+' }');
         setTimeout(function() { meta.dispatchEvent(doneEvent); },1);
      } else if (message.type=="get-subjects") {
         var subjects = document.data.getSubjects();
         meta.setAttribute("content",'{ "type": "subjects", "subjects": '+JSON.stringify(subjects)+' }');
         var event = makeEvent();
         setTimeout(function() { meta.dispatchEvent(event); },1);
      } else if (message.type=="get-subject") {
         var triples = null;
         if (document.data.getSubjectTriples) {
            // Use the Green Turtle triples extension
            triples = document.data.getSubjectTriples(message.subject);
         } else {
            // Do it the hard way!
            var subjects = {};
            var subjectList = document.data.getSubjects();
            for (var i=0; i<subjectList.length; i++) {
               subjects[subjectList[i]] = true;
            }
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
         var event = makeEvent();
         setTimeout(function() { meta.dispatchEvent(event); },1);
      }
   },false);
}

if (update || !document.data) {
   if (!update) {
      DocumentData.attach(document);
   }

   var processor = new RDFaProcessor(document.data._data_);
   processor.process(document.documentElement);
   loaded = true;
}

};

if (document.readyState=="loading") {
   window.addEventListener("load",function() {
      RDFa.attach(document);
   },false);
} else {
   RDFa.attach(document);
}