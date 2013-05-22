function RDFaGraph()
{
   var dataContext = this;
   this.curieParser = {
      trim: function(str) {
         return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      },
      parse: function(value,resolve) {
         value = this.trim(value);
         if (value.charAt(0)=='[' && value.charAt(value.length-1)==']') {
            value = value.substring(1,value.length-1);
         }
         var colon = value.indexOf(":");
         if (colon>=0) {
            var prefix = value.substring(0,colon);
            if (prefix=="") {
               // default prefix
               var uri = dataContext.prefixes[""];
               return uri ? uri+value.substring(colon+1) : null;
            } else if (prefix=="_") {
               // blank node
               return "_:"+value.substring(colon+1);
            } else if (DocumentData.NCNAME.test(prefix)) {
               var uri = dataContext.prefixes[prefix];
               if (uri) {
                  return uri+value.substring(colon+1);
               }
            }
         }

         return resolve ? dataContext.baseURI.resolve(value) : value;
      }
   };
   this.subjects = {};
   this.prefixes = {};
   this.terms = {};
   this.base =  null;
   this.toString = function(baseURI) {
      var s = baseURI ? "@base <"+baseURI+"> .\n" : "";
      for (var subject in this.subjects) {
         var snode = this.subjects[subject];
         s += snode.toString();
         s += "\n";
      }
      return s;
   };
}

function RDFaSubject(graph,subject) {
   this.graph = graph;
   // TODO: subject or id?
   this.subject = subject
   this.id = subject;
   this.predicates =  {};
   this.origins = [];
   this.types = [];
}

RDFaSubject.prototype.toString = function() {
   var s = this.subject.substring(0,2)=="_:" ? this.subject+"" : "<" + this.subject + ">";
   var first = true;
   for (var predicate in this.predicates) {
      if (!first) {
         s += ";\n";
      } else {
         first = false;
      }
      s += " " + this.predicates[predicate];
   }
   s += " .";
   return s;
}

RDFaSubject.prototype.toObject = function() {
   var o = { subject: this.subject, predicates: {} };
   for (var predicate in this.predicates) {
      var pnode = this.predicates[predicate];
      var p = { predicate: predicate, objects: [] };
      o.predicates[predicate] = p;
      for (var i=0; i<pnode.objects.length; i++) {
         var object = pnode.objects[i];
         if (object.type==RDFaProcessor.XMLLiteralURI) {
            var serializer = new XMLSerializer();
            var value = "";
            for (var x=0; x<object.value.length; x++) {
               if (object.value[x].nodeType==Node.ELEMENT_NODE) {
                  value += serializer.serializeToString(object.value[x]);
               } else if (object.value[x].nodeType==Node.TEXT_NODE) {
                  value += object.value[x].nodeValue;
               }
            } 
            p.objects.push({ type: object.type, value: value, language: object.language });
         } else {
            p.objects.push({ type: object.type, value: object.value, language: object.language });
         }
      }
   }
   return o;
   
}

RDFaSubject.prototype.getValues = function() {
   var values = [];
   for (var i=0; i<arguments.length; i++) {
      var property = this.graph.curieParser.parse(arguments[i],true)
      var pnode = this.predicates[property];
      if (pnode) {
         for (var j=0; j<pnode.objects.length; j++) {
            values.push(pnode.objects[j].value);
         }
      }
   }
   return values;
}

function RDFaPredicate(predicate) {
   this.id = predicate;
   this.predicate = predicate;
   this.objects = [];
}

RDFaPredicate.prototype.toString = function() {
   var s = "<" + this.predicate + "> ";
   for (var i=0; i<this.objects.length; i++) {
      if (i>0) {
         s += ", ";
      }
      // TODO: handle HTML literal
      if (this.objects[i].type=="http://www.w3.org/1999/02/22-rdf-syntax-ns#object") {
         if (this.objects[i].value.substring(0,2)=="_:") {
            s += this.objects[i].value;
         } else {
            s += "<" + this.objects[i].value+">";
         }
      } else if (this.objects[i].type=="http://www.w3.org/2001/XMLSchema#integer" ||
                 this.objects[i].type=="http://www.w3.org/2001/XMLSchema#decimal" ||
                 this.objects[i].type=="http://www.w3.org/2001/XMLSchema#double" ||
                 this.objects[i].type=="http://www.w3.org/2001/XMLSchema#boolean") {
         s += this.objects[i].value;
      } else if (this.objects[i].type=="http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral") {
         var serializer = new XMLSerializer();
         var value = "";
         for (var x=0; x<this.objects[i].value.length; x++) {
            if (this.objects[i].value[x].nodeType==Node.ELEMENT_NODE) {
               value += serializer.serializeToString(this.objects[i].value[x]);
            } else if (this.objects[i].value[x].nodeType==Node.TEXT_NODE) {
               value += this.objects[i].value[x].nodeValue;
            }
         }
         s += '"""'+value.replace(/"""/,"\\\"\\\"\\\"")+'"""^^<http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral>';
      } else {
         var l = this.objects[i].value;
         if (l.indexOf("\n")>=0 || l.indexOf("\r")>=0) {
            s += '"""' + l.replace(/"""/,"\\\"\\\"\\\"") + '"""';
         } else {
            s += '"' + l.replace(/"/,"\\\"") + '"';
         }
         if (this.objects[i].type!="http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral") {
             s += "^^<"+this.objects[i].type+">";
         } else if (this.objects[i].language) {
             s += "@"+this.objects[i].language;
         }
      }
   }
   return s;
}
