function RDFaSubject(context,subject) {
   this.context = context;
   // TODO: subject or id?
   this.subject = subject
   this.id = subject;
   this.predicates =  {};
   this.origins = [];
   this.types = [];
}

RDFaSubject.prototype.toString = function() {
   var s = "<" + this.subject + ">";
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
      var property = this.context.curieParser.parse(arguments[i],true)
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
      if (this.objects[i].type=="http://www.w3.org/1999/02/22-rdf-syntax-ns#object") {
         s += "<" + this.objects[i].value+">";
      } else if (this.objects[i].type=="http://www.w3.org/2001/XMLSchema#integer" ||
                 this.objects[i].type=="http://www.w3.org/2001/XMLSchema#decimal" ||
                 this.objects[i].type=="http://www.w3.org/2001/XMLSchema#double" ||
                 this.objects[i].type=="http://www.w3.org/2001/XMLSchema#boolean") {
         s += this.objects[i].value;
      } else {
         s += '"' + this.objects[i].value.split('"').join('\"') + '"';
         if (this.objects[i].type!="http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral") {
             s += "^^<"+this.objects[i].type+">";
         }
         if (this.objects[i].language) {
             s += "@"+this.objects[i].language;
         }
      }
   }
   return s;
}
