
function DocumentData (uri) {
   this.triples = [];
   this.origins = [];
   this.prefixes = {};
   this.curieParser = new CurieParser();
   this.baseURI = new URI(uri);
}

DocumentData.prototype.getProjection = function(subject, template) {
   if (!subject) { return null }

   subject = this.curieParser.parseCURIEOrURI(subject,this.prefixes,this.baseURI);
   
   return null;
};

DocumentData.prototype.getProjections = function(property, value, template) {
   if (typeof property == "undefined" && typeof value == "undefined") {
      template = property;
   }
   return null;
};

DocumentData.prototype.getProperties = function(subject) {
   if (subject) {
      subject = this.curieParser.parseCURIEOrURI(subject,this.prefixes,this.baseURI);
   }
   var uniqueProperties = {};
   for (var i=0; i<this.triples.length; i++) {
      if (!subject || this.triples[i].subject) {
         uniqueProperties[this.triples[i].predicate] = true;
      }
   }
   var properties = [];
   for (u in uniqueProperties) {
      properties.push(u);
   }
   return properties;
};

DocumentData.prototype.getSubjects = function(property,value) {
   if (property) {
      property = this.curieParser.parseCURIEOrURI(property,this.prefixes,this.baseURI);
   }
   var uniqueSubjects = {};
   for (var i=0; i<this.triples.length; i++) {
      if (!property || (this.triples[i].predicate==property && (!value || this.triples[i].object.value==value))) {
         uniqueSubjects[this.triples[i].subject] = true;
      }
   }
   var subjects = [];
   for (u in uniqueSubjects) {
      subjects.push(u);
   }
   return subjects;
};

DocumentData.prototype.getValues = function(subject,property) {
   if (subject) {
      subject = this.curieParser.parseCURIEOrURI(subject,this.prefixes,this.baseURI);
   }
   if (property) {
      property = this.curieParser.parseCURIEOrURI(property,this.prefixes,this.baseURI);
   }
   var values = [];
   for (var i=0; i<this.triples.length; i++) {
      if ((!subject || this.triples[i].subject==subject) &&
          (!property || this.triples[i].predicate==property)) {
         values.push(this.triples[i].object.value);
      }
   }
   return values;
};

DocumentData.prototype.setMapping = function(prefix,uri) {
   this.prefix[prefix] = uri;
};

Document.prototype.getElementsByType = function(type) {
   var nodes = [];
   nodes.item = function(index) {
      return this[index];
   };
   if (this.data) {
      type = this.data.curieParser.parseCURIEOrURI(type,this.data.prefixes,this.data.baseURI);
      for (var i=0; i<this.data.triples.length; i++) {
         if (this.data.triples[i].predicate=="http://www.w3.org/1999/02/22-rdf-syntax-ns#type" && this.data.triples[i].object.value==type) {
            nodes.push(this.data.origins[i]);
         }
      }
   }
   return nodes;
};

Document.prototype.getElementsBySubject = function(subject) {
   var nodes = [];
   nodes.item = function(index) {
      return this[index];
   };
   if (this.data) {
      subject = this.data.curieParser.parseCURIEOrURI(subject,this.data.prefixes,this.data.baseURI);
      for (var i=0; i<this.data.triples.length; i++) {
         if (this.data.triples[i].subject==subject) {
            nodes.push(this.data.origins[i]);
         }
      }
   }
   return nodes;
};

Document.prototype.getElementsByProperty = function(property,value) {
   var nodes = [];
   nodes.item = function(index) {
      return this[index];
   };
   if (this.data) {
      var noValue = typeof value == "undefined";
      property = this.data.curieParser.parseCURIEOrURI(property,this.data.prefixes,this.data.baseURI);
      for (var i=0; i<this.data.triples.length; i++) {
         if (this.data.triples[i].predicate==property && (noValue || this.data.triples[i].object.value==value)) {
            nodes.push(this.data.origin[i]);
         }
      }
   }
   return nodes;
};

var hasFeature = document.implementation.hasFeature;
document.implementation.hasFeature = function(feature,version) {
   if (feature=="RDFaAPI" && version="1.1") { return true; }
   return hasFeature(feature,version);
}
