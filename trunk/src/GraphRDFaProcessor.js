GraphRDFaProcessor.prototype = new RDFaProcessor();
GraphRDFaProcessor.prototype.constructor=RDFaProcessor;
function GraphRDFaProcessor(target) {
   RDFaProcessor.call(this,target);
}

GraphRDFaProcessor.prototype.getObjectSize = function(obj) {
   var size = 0;
   for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
         size++;
      }
   }
   return size;
};


GraphRDFaProcessor.prototype.init = function() {
   this.target.tripleCount = 0;
   this.target.triplesGraph = {};
   var thisObj = this;
   this.finishedHandlers.push(function(node) {
      for (var subject in thisObj.target.triplesGraph) {
         var snode = thisObj.target.triplesGraph[subject];
         if (thisObj.getObjectSize(snode.predicates)==0) {
            delete thisObj.target.triplesGraph[subject];
         }
      }
   });
}

GraphRDFaProcessor.prototype.newSubjectOrigin = function(origin,subject) {
   var snode = this.newSubject(null,subject);
   for (var i=0; i<snode.origins.length; i++) {
      if (snode.origins[i]==origin) {
         return;
      }
   }
   snode.origins.push(origin);
}

GraphRDFaProcessor.prototype.newSubject = function(origin,subject) {
   var snode = this.target.triplesGraph[subject];
   if (!snode) {
      snode = { subject: subject, predicates: {}, origins: [] };
      this.target.triplesGraph[subject] = snode;
   }
   return snode;
}


GraphRDFaProcessor.prototype.addTriple = function(origin,subject,predicate,object) {
   var graph = this.target.triplesGraph;
   var snode = this.newSubject(origin,subject);
   var pnode = snode.predicates[predicate];
   if (!pnode) {
      pnode = { predicate: predicate, objects: [] };
      snode.predicates[predicate] = pnode;
   }

   for (var i=0; i<pnode.objects.length; i++) {
      if (pnode.objects[i].type==object.type && pnode.objects[i].value==object.value) {
         return;
      }
   }
   this.target.tripleCount++;
   pnode.objects.push(object);
   object.origin = origin;
}

