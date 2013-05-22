var RDFa = RDFa || {};

RDFa.trackChanges = function(flag) {
   if (flag) {
      if (RDFa.observer) { return; }
      var observerConstructor = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      if (RDFa.trackChanges && observerConstructor) {
         var changeObserved = function(mutations) {
            console.log("document changed.");
         };
         RDFa.observer = observerConstructor(changeObserved);
         RDFa.observer.observe(document.documentElement,{childList: true,attributes:true,characterData: true,subtree:true,
            attributeFilter: ["typeof","rel","property","content","resource","href"] });
      }
   } else if (RDFa.observer) {
      RDFa.observer.disconnect();
      RDFa.observer = false;
   }

}

RDFa.attach = function(document,options) {

