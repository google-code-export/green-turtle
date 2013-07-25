if (document.data === undefined) {
   GreenTurtle.implementation.processors["microdata"].enabled = true;
   GreenTurtle.attach(document);
} else {

   var meta = null;
   var current = document.head.firstElementChild;
   while (!meta && current) {
      if (current.localName=="meta" && current.getAttribute("name")=="green-turtle-rdfa-message") {
         meta = current;
      }
      current = current.nextElementSibling;
   }
   
   if (meta === null) {
      console.log("Green Turtle: Other RDFa implementation has been detected.");
      var event = document.createEvent("HTMLEvents");
      event.initEvent("non-green-turtle-rdfa",true,true);
      document.dispatchEvent(event);
   }
}