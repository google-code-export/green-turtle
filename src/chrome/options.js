var enableMicrodata = null;
window.addEventListener("load",function() {
   enableMicrodata = document.getElementById("microdata");
   var microdataEnabled = localStorage["microdata.enabled"];
   console.log(microdataEnabled);
   if (microdataEnabled === undefined || microdataEnabled == "false") {
      enableMicrodata.checked = false;
   } else if (microdataEnabled == "true") {
      enableMicrodata.checked = true;
   }
   document.getElementById("save").onclick = function() {
      localStorage["microdata.enabled"] = enableMicrodata.checked ? "true" : "false";
   }
},false);