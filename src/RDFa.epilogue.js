
   var hasFeature = document.implementation.hasFeature;
   document.implementation.hasFeature = function(feature,version) {
      if (feature=="RDFaAPI" && version="1.1") { return true; }
      return hasFeature(feature,version);
   }

   DocumentData.attach(document);

   var processor = new RDFaProcessor(document.data._data_);
   
   processor.process(document.documentElement);

};

window.addEventListener("load",function() {
   RDFa.attach(document);
},false);