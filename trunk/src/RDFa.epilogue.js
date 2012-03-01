
   var hasFeature = document.implementation.hasFeature;
   document.implementation.hasFeature = function(feature,version) {
      if (feature=="RDFaAPI" && version="1.1") { return true; }
      return hasFeature(feature,version);
   }

   document.data = new DocumentData(document.baseURI);
   var processor = new RDFaProcessor(document.data);
   
   processor.process(document.documentElement);

};

window.addEventListener("load",function() {
   RDFa.attach(document);
},false);