function test(entry) {
   var requester = new XMLHttpRequest();
   requester.open("GET",entry.action,false);
   requester.send(null);
   try {
      entry.output = document.data.parse(requester.responseText,"text/turtle",{ baseURI: entry.action});
      entry.parsed = true;
   } catch (ex) {
      entry.parsed = false;
   }
}
window.addEventListener("load",function() {
   var table = document.getElementById("output");
   var child = document.head.firstElementChild;
   while (child && child.localName!="link") {
      child = child.nextElementSibling;
   }
   var manifestURI = child.href;
   console.log("Loading manifest from: "+manifestURI);
   var requester = new XMLHttpRequest();
   requester.open("GET",manifestURI,false);
   requester.send(null);
   var turtle = document.data.parse(requester.responseText,"text/turtle",{ baseURI: manifestURI});
   document.data.merge(turtle.graph,turtle.prefixes);
   var manifestSubject = document.data.getSubjects("rdf:type","mf:Manifest")[0];
   //console.log("Manifest subject: "+manifestSubject);
   var currentSubject = document.data.getValues(manifestSubject,"mf:entries")[0];
   var entries = [];
   while (currentSubject!="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil") {
      //console.log("Item subject: "+currentSubject);
      var entrySubject = document.data.getValues(currentSubject,"rdf:first")[0];
      //console.log("Entry: "+entrySubject);
      var entry = {
         subject: entrySubject,
         action: document.data.getValues(entrySubject,"mf:action")[0],
         type: document.data.getValues(entrySubject,"rdf:type")[0],
         name: document.data.getValues(entrySubject,"mf:name")[0],
         comment: document.data.getValues(entrySubject,"rdfs:comment")[0]
      };
      var results = document.data.getValues(entrySubject,"mf:result");
      if (results.length>0) {
         entry.result = results[0];
      }
      entries.push(entry);
      currentSubject = document.data.getValues(currentSubject,"rdf:rest")[0];
   }
   for (var i=0; i<entries.length; i++) {
      var entry = entries[i];
      console.log("Testing: "+entry.name+", "+entry.comment);
      test(entry);
      var row = document.createElement("tr");
      table.appendChild(row);
      var shortType = entry.type.substring(entry.type.indexOf("#")+1);
      row.innerHTML = "<td><a target=\"new\" href=\"parser.xhtml?"+entry.action+"\">"+entry.name+"</a></td><td>"+shortType+"</td><td class=\"parsed-"+entry.parsed+"\">"+entry.parsed+"</td><td></td>";
   }
},false);