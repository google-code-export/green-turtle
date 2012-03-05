
   var hasFeature = document.implementation.hasFeature;
   document.implementation.hasFeature = function(feature,version) {
      if (feature=="RDFaAPI" && version="1.1") { return true; }
      return hasFeature(feature,version);
   }

   Object.defineProperty(document,"data", {
      value: new DocumentData(document.baseURI),
      writable: false,
      configurable: false,
      enumerable: true
   });

   var processor = new RDFaProcessor(document.data);
   
   processor.process(document.documentElement);

};

window.addEventListener("load",function() {
   RDFa.attach(document);
},false);