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
   var thisObj = this;
   this.finishedHandlers.push(function(node) {
      for (var subject in thisObj.target.graph.subjects) {
         var snode = thisObj.target.graph.subjects[subject];
         if (thisObj.getObjectSize(snode.predicates)==0) {
            delete thisObj.target.graph.subjects[subject];
         }
      }
   });
}

GraphRDFaProcessor.prototype.newSubjectOrigin = function(origin,subject) {
   var snode = this.newSubject(null,subject);
   for (var i=0; i<snode.origins.length; i++) {
      if (snode.origins[i]===origin) {
         return;
      }
   }
   snode.origins.push(origin);
   if (!origin.data) {
      Object.defineProperty(origin,"data", {
            value: snode,
            writable: false,
            configurable: true,
            enumerable: true
         });
   }
}

GraphRDFaProcessor.prototype.newSubject = function(origin,subject) {
   var snode = this.target.graph.subjects[subject];
   if (!snode) {
      snode = new RDFaSubject(this.target,subject);
      this.target.graph.subjects[subject] = snode;
   }
   return snode;
}


GraphRDFaProcessor.prototype.addTriple = function(origin,subject,predicate,object) {
   var snode = this.newSubject(origin,subject);
   var pnode = snode.predicates[predicate];
   if (!pnode) {
      pnode = new RDFaPredicate(predicate);
      snode.predicates[predicate] = pnode;
   }

   for (var i=0; i<pnode.objects.length; i++) {
      if (pnode.objects[i].type==object.type && pnode.objects[i].value==object.value) {
         if (pnode.objects[i].origin!==origin) {
            if (!Array.isArray(pnode.objects[i].origin)) {
               var origins = [];
               origins.push(pnode.objects[i].origin);
               pnode.objects[i].origin = origins;
            }
            pnode.objects[i].origin.push(origin);
         }
         return;
      }
   }
   this.target.tripleCount++;
   pnode.objects.push(object);   
   object.origin = origin;
   if (predicate==RDFaProcessor.typeURI) {
      snode.types.push(object.value);
   }
}

