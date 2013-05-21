function TestHarness() {
   
}

TestHarness.prototype.init = function(iframe)
{
   this.htmlLoader = iframe;
   this.index = 0;
}

TestHarness.prototype.nextTest = function() {
   if (this.index>=this.entries.length) {
      this.generateReport();
      return;
   }
   var entry = this.entries[this.index];
   this.index++;
   var app = this;
   if (this.type.indexOf("html")==0) {
      // html, use loader
      this.htmlLoader.onload = function() {
         setTimeout(function() {
            app.test(entry,app.htmlLoader.contentDocument,function() {
               app.nextTest()
            });
         },1);
      }
      this.htmlLoader.src = entry.data;
   } else {
      HTTP("GET",entry.data,{
         returnHeaders: true,
         onSuccess: function(status,doc,text,headers) {
            if (!doc) {
               var contentType = headers["Content-Type"];
               var semicolon = contentType.indexOf(";");
               if (semicolon>0) {
                  contentType = contentType.substring(0,semicolon);
               }
               contentType = app.trim(contentType);
               console.log("Unsupported content type: "+contentType);
               return;
            }
            setTimeout(function() {
               app.test(entry,doc,function() {
                  app.nextTest()
               });
            },1);
         },
         onFailure: function(status,doc,text) {
            console.log("failed to retrieve document , status "+status);
         }
      });
   }
   
}

TestHarness.prototype.test = function(entry,dataDoc,oncomplete)
{
   console.log("Processing "+entry.name);
   RDFa.attach(dataDoc);
   HTTP("GET",entry.query,{
      synchronizedRequest: true,
      onSuccess: function(status,doc,text) {
         console.log(text);
         if (oncomplete) {
            oncomplete();
         }
      },
      onFailure: function(status,doc,text) {
         console.log("Could not retrieve "+entry.query+", status "+status);
         return;
      }
   });
}

TestHarness.prototype.generateReport = function() {
   
}

TestHarness.sourceBase = "http://rdfa.info/test-suite/test-cases/rdfa1.1/";
TestHarness.prototype.mapURI = function(uri) {
   if (uri.indexOf(TestHarness.sourceBase)==0) {
      uri = window.location.origin+"/tests/cache/"+uri.substring(TestHarness.sourceBase.length);
   }
   return uri;
}

TestHarness.prototype.generate = function(manifestURI)
{
   var pos = manifestURI.lastIndexOf("/");
   for (pos--; pos>=0 && manifestURI.charAt(pos)!="/"; pos--);
   this.baseURI = "http://rdfa.info/test-suite/rdfa1.1"+manifestURI.substring(pos);
   this.type = manifestURI.substring(pos).substring(1);
   this.type = this.type.substring(0,this.type.indexOf("/"));
   
   // load manifest
   console.log("Loading manifest from: "+manifestURI+", base: "+this.baseURI+", type: "+this.type);
   var requester = new XMLHttpRequest();
   requester.open("GET",manifestURI,false);
   requester.send(null);
   console.log("Parsing manifest...");
   var turtle = document.data.parse(requester.responseText,"text/turtle",{ baseURI: this.baseURI});
   //console.log(turtle.toString());
   var dataDoc = document.implementation.createDocument("http://www.w3.org/1999/xhtml","html",null);
   dataDoc.documentElement.setAttributeNS("http://www.w3.org/XML/1998/namespace","base",window.location.href);
   RDFa.attach(dataDoc);
   console.log("Merging ...");
   dataDoc.data.merge(turtle.graph,turtle.prefixes);
   console.log("Processing ...");

   // load entries
   var manifestSubject = dataDoc.data.getSubjects("rdf:type","mf:Manifest")[0];
   var currentSubject = dataDoc.data.getValues(manifestSubject,"mf:entries")[0];
   this.entries = [];
   while (currentSubject!="http://www.w3.org/1999/02/22-rdf-syntax-ns#nil") {
      var entrySubject = dataDoc.data.getValues(currentSubject,"rdf:first")[0];
      pos = entrySubject.lastIndexOf("/");
      var file = entrySubject.substring(pos+1);
      var entry = {
         subject: "http://rdfa.info/test-suite/test-cases/rdfa1.1/"+this.type+"/manifest#"+file.substring(0,file.indexOf("."))
      };
      entry.name = dataDoc.data.getValues(entry.subject,"mf:name")[0];
      entry.comment = dataDoc.data.getValues(entry.subject,"rdfs:comment")[0];
      entry.classification = dataDoc.data.getValues(entry.subject,"test:classification")[0];
      entry.result = "true"==dataDoc.data.getValues(entry.subject,"mf:result")[0];
      
      var actionSubject = dataDoc.data.getValues(entry.subject,"mf:action")[0];
      entry.data = this.mapURI(dataDoc.data.getValues(actionSubject,"qt:data")[0]);
      entry.query = this.mapURI(dataDoc.data.getValues(actionSubject,"qt:query")[0]);
      
      this.entries.push(entry);
      
      currentSubject = dataDoc.data.getValues(currentSubject,"rdf:rest")[0];
   }
   console.log(this.entries.length+" tests");

   this.index = 0;
   this.nextTest();
}

var testHarness = new TestHarness();

window.addEventListener("load",function() {
   
   testHarness.init(document.getElementById("loader"));
   var go = document.getElementById("go").onclick = function() {
      testHarness.generate(document.getElementById("source").value);
   };
   
},false);