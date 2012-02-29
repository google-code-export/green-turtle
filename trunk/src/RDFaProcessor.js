
function RDFaProcessor(targetObject) {
   this.target = targetObject;
   this.target.triplesGraph = {};
   this.target.subjectOrigins = {};
   this.prefixes = {};
   this.terms = {};
   this.language = null;
   this.vocabulary = null;
   this.typeURI = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
   this.objectURI = "http://www.w3.org/1999/02/22-rdf-syntax-ns#object";
   this.XMLLiteralURI = "http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral"; 
   this.PlainLiteralURI = "http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral";
   this.blankCounter = 0;
   this.curieParser = new CurieParser();
}

RDFaProcessor.prototype.trim = function(str) {
   return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

RDFaProcessor.prototype.tokenize = function(str) {
   return this.trim(str).split(/\s+/);
}

RDFaProcessor.prototype.parsePrefixMappings = function(str,target) {
   var values = this.tokenize(str);
   var prefix = null;
   var uri = null;
   for (var i=0; i<values.length; i++) {
      if (values[i][values[i].length-1]==':') {
         prefix = values[i].substring(0,values[i].length-1);
      } else if (prefix) {
         target[prefix] = values[i];
         prefix = null;
      }
   }
}

RDFaProcessor.prototype.copyMappings = function(mappings) {
   var newMappings = {};
   for (var k in mappings) {
      newMappings[k] = mappings[k];
   }
   return newMappings;
}

RDFaProcessor.prototype.mergeMappings = function(target,source) {
   for (var k in source) {
      target[k] = source[k];
   }
}

RDFaProcessor.prototype.ancestorPath = function(node) {
   var path = "";
   while (node && node.nodeType!=Node.DOCUMENT_NODE) {
      path = "/"+node.localName+path;
      node = node.parentNode;
   }
   return path;
}

RDFaProcessor.prototype.checkForKnownProfiles = function(node) {
   // We only recognized XHTML
   if (node.namespaceURI!="http://www.w3.org/1999/xhtml") {
      return;
   }

   this.prefixes[""] = "http://www.w3.org/1999/xhtml/vocab#";

   // From http://www.w3.org/profile/rdfa-1.1
   this.prefixes["grddl"] = "http://www.w3.org/2003/g/data-view#";
   this.prefixes["owl"] = "http://www.w3.org/2002/07/owl#";
   this.prefixes["rdf"] = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
   this.prefixes["rdfa"] = "http://www.w3.org/ns/rdfa#";
   this.prefixes["rdfs"] = "http://www.w3.org/2000/01/rdf-schema#";
   this.prefixes["rif"] = "http://www.w3.org/2007/rif#";
   this.prefixes["skos"] = "http://www.w3.org/2004/02/skos/core#";
   this.prefixes["skosxl"] = "http://www.w3.org/2008/05/skos-xl#";
   this.prefixes["wdr"] = "http://www.w3.org/2007/05/powder#";
   this.prefixes["void"] = "http://rdfs.org/ns/void#";
   this.prefixes["wdrs"] = "http://www.w3.org/2007/05/powder-s#";
   this.prefixes["xhv"] = "http://www.w3.org/1999/xhtml/vocab#";
   this.prefixes["xml"] = "http://www.w3.org/XML/1998/namespace";
   this.prefixes["xmlns"] = "http://www.w3.org/2000/xmlns/";
   this.prefixes["xsd"] = "http://www.w3.org/2001/XMLSchema#";
   this.prefixes["sd"] = "http://www.w3.org/ns/sparql-service-description#";
   this.prefixes["cnt"] = "http://www.w3.org/2008/content#";
   this.prefixes["earl"] = "http://www.w3.org/ns/earl#";
   this.prefixes["ht"] = "http://www.w3.org/2006/http#";
   this.prefixes["ma"] = "http://www.w3.org/ns/ma-ont#";
   this.prefixes["ptr"] = "http://www.w3.org/2009/pointers#";
   this.prefixes["cc"] = "http://creativecommons.org/ns#";
   this.prefixes["ctag"] = "http://commontag.org/ns#";
   this.prefixes["dc"] = "http://purl.org/dc/terms/";
   this.prefixes["foaf"] = "http://xmlns.com/foaf/0.1/";
   this.prefixes["gr"] = "http://purl.org/goodrelations/v1#";
   this.prefixes["ical"] = "http://www.w3.org/2002/12/cal/icaltzd#";
   this.prefixes["og"] = "http://ogp.me/ns#";
   this.prefixes["rev"] = "http://purl.org/stuff/rev#";
   this.prefixes["sioc"] = "http://rdfs.org/sioc/ns#";
   this.prefixes["v"] = "http://rdf.data-vocabulary.org/#";
   this.prefixes["vcard"] = "http://www.w3.org/2006/vcard/ns#";

   this.terms["describedby"] = "http://www.w3.org/2007/05/powder-s#describedby";

   // From http://www.w3.org/profile/html-rdfa-1.1
   this.terms["alternate"] = "http://www.w3.org/1999/xhtml/vocab#alternate";
   this.terms["appendix"] = "http://www.w3.org/1999/xhtml/vocab#appendix";
   this.terms["bookmark"] = "http://www.w3.org/1999/xhtml/vocab#bookmark";
   this.terms["cite"] = "http://www.w3.org/1999/xhtml/vocab#cite"
   this.terms["chapter"] = "http://www.w3.org/1999/xhtml/vocab#chapter";
   this.terms["contents"] = "http://www.w3.org/1999/xhtml/vocab#contents";
   this.terms["copyright"] = "http://www.w3.org/1999/xhtml/vocab#copyright";
   this.terms["first"] = "http://www.w3.org/1999/xhtml/vocab#first";
   this.terms["glossary"] = "http://www.w3.org/1999/xhtml/vocab#glossary";
   this.terms["help"] = "http://www.w3.org/1999/xhtml/vocab#help";
   this.terms["icon"] = "http://www.w3.org/1999/xhtml/vocab#icon";
   this.terms["index"] = "http://www.w3.org/1999/xhtml/vocab#index";
   this.terms["last"] = "http://www.w3.org/1999/xhtml/vocab#last";
   this.terms["license"] = "http://www.w3.org/1999/xhtml/vocab#license";
   this.terms["meta"] = "http://www.w3.org/1999/xhtml/vocab#meta";
   this.terms["next"] = "http://www.w3.org/1999/xhtml/vocab#next";
   this.terms["prev"] = "http://www.w3.org/1999/xhtml/vocab#prev";
   this.terms["previous"] = "http://www.w3.org/1999/xhtml/vocab#prev";
   this.terms["related"] = "http://www.w3.org/1999/xhtml/vocab#related";
   this.terms["section"] = "http://www.w3.org/1999/xhtml/vocab#section";
   this.terms["stylesheet"] = "http://www.w3.org/1999/xhtml/vocab#stylesheet";
   this.terms["subsection"] = "http://www.w3.org/1999/xhtml/vocab#subsection";
   this.terms["start"] = "http://www.w3.org/1999/xhtml/vocab#start";
   this.terms["top"] = "http://www.w3.org/1999/xhtml/vocab#top";
   this.terms["up"] = "http://www.w3.org/1999/xhtml/vocab#up";

   this.terms["itsRules"] = "http://www.w3.org/1999/xhtml/vocab#itsRules";
   this.terms["p3pv1"] = "http://www.w3.org/1999/xhtml/vocab#p3pv1";
   this.terms["role"] = "http://www.w3.org/1999/xhtml/vocab#role";
   this.terms["transformation"] = "http://www.w3.org/1999/xhtml/vocab#transformation";
}

RDFaProcessor.prototype.addTriple = function(data,origin,subject,predicate,object) {
   var graph = data.triplesGraph;
   var snode = graph[subject];
   if (!snode) {
      snode = { subject: subject, predicates: {} };
      graph[subject] = snode;
   }
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
   data.tripleCount++;
   pnode.objects.push(object);
}

RDFaProcessor.prototype.process = function(node) {

   if (node.parentNode.nodeType==Node.DOCUMENT_NODE) {
      this.checkForKnownProfiles(node);
   }
   var queue = [];
   queue.push({ current: node, context: this.push(null,new URI(node.baseURI),node.baseURI)});
   while (queue.length>0) {
      var item = queue.shift();
      var current = item.current;
      var context = item.context;
      //console.log("Processing: "+this.ancestorPath(current));
      var skip = false;
      var newSubject = null;
      var currentObjectResource = null;
      var prefixes = context.prefixes;
      var prefixesCopied = false;
      var incomplete = [];
      var language = context.language;
      var terms = context.terms;
      var termsCopied = false;
      var vocabulary = context.vocabulary;

      var base = new URI(current.baseURI);

      // handle loading profiles (@profile)
      var profileAtt = current.getAttributeNode("profile");
      if (profileAtt) {
      }
      
      // handle setting the default vocabulary (@vocab)
      var vocabAtt = current.getAttributeNode("vocab");
      if (vocabAtt) {
         var value = this.trim(vocabAtt.value);
         if (value.length>0) {
            vocabulary = value;
         } else {
            vocabulary = this.vocabulary;
         }
      }

      // Handle prefix mappings (@prefix)
      var prefixAtt = current.getAttributeNode("prefix");
      if (prefixAtt) {
         if (!prefixesCopied) {
            prefixes = this.copyMappings(prefixes);
            prefixesCopied = true;
         }
         this.parsePrefixMappings(prefixAtt.value,prefixes);
      }

      // handle xmlns attributes
      for (var i=0; i<current.attributes.length; i++) {
         var att = current.attributes[i];
         //if (att.namespaceURI=="http://www.w3.org/2000/xmlns/") {
         if (att.nodeName.charAt(0)=="x" && att.nodeName.indexOf("xmlns:")==0) {
            if (!prefixesCopied) {
               prefixes = this.copyMappings(prefixes);
               prefixesCopied = true;
            }
            var prefix = att.nodeName.substring(6);
            // TODO: resolve relative?
            prefixes[prefix] = this.trim(att.value);
         }
      }

      // handle @xml:lang
      var xmlLangAtt = current.getAttributeNodeNS("http://www.w3.org/XML/1998/namespace","lang");
      if (xmlLangAtt) {
         var value = this.trim(xmlLangAtt.value);
         if (value.length>0) {
            language = value;
         }
      }

      var relAtt = current.getAttributeNode("rel");
      var revAtt = current.getAttributeNode("rev");
      var typeofAtt = current.getAttributeNode("typeof");
      var propertyAtt = current.getAttributeNode("property");

      if (relAtt || revAtt) {
         // establish new subject and value
         var aboutAtt = current.getAttributeNode("about");
         if (aboutAtt) {
            newSubject = this.curieParser.parseCURIEOrURI(aboutAtt.value,prefixes,base);
         } else {
            var srcAtt = current.getAttributeNode("src");
            if (srcAtt) {
               newSubject = base.resolve(srcAtt.value).spec;
            }
         }
         if (!newSubject) {
            if (current.parentNode.nodeType==Node.DOCUMENT_NODE) {
               newSubject = current.baseURI;
            } else {
               if (typeofAtt) {
                  this.blankCounter++;
                  newSubject = "_:"+this.blankCounter;
               } else if (context.parentObject) {
                  // TODO: Verify: If the xml:base has been set and the parentObject is the baseURI of the parent, then the subject needs to be the new base URI
                  newSubject = current.parentNode.baseURI==context.parentObject ? current.baseURI : context.parentObject;
               }
            }
         }
         var resourceAtt = current.getAttributeNode("resource");
         if (resourceAtt) {
            currentObjectResource = this.curieParser.parseCURIEOrURI(resourceAtt.value,prefixes,base);
         } else {
            var hrefAtt = current.getAttributeNode("href");
            if (hrefAtt) {
               currentObjectResource = base.resolve(hrefAtt.value).spec;
            }
         }
      } else {
         // establish new subject
         var aboutAtt = current.getAttributeNode("about");
         if (aboutAtt) {
            newSubject = this.curieParser.parseCURIEOrURI(aboutAtt.value,prefixes,base);
         } else {
            var srcAtt = current.getAttributeNode("src");
            if (srcAtt) {
               newSubject = base.resolve(srcAtt.value).spec;
            } else {
               var resourceAtt = current.getAttributeNode("resource");
               if (resourceAtt) {
                  newSubject = this.curieParser.parseCURIEOrURI(resourceAtt.value,prefixes,base);
               } else {
                  var hrefAtt = current.getAttributeNode("href");
                  if (hrefAtt) {
                     newSubject = base.resolve(hrefAtt.value).spec;
                  }
               }
            }
         }
         if (!newSubject) {
            if (current.parentNode.nodeType==Node.DOCUMENT_NODE) {
               newSubject = current.baseURI;
            } else {
               if (typeofAtt) {
                  this.blankCounter++;
                  newSubject = "_:"+this.blankCounter;
               } else if (context.parentObject) {
                  //alert(context.parentObject+" "+current.parentNode.baseURI+" "+current.baseURI);
                  // TODO: Verify: If the xml:base has been set and the parentObject is the baseURI of the parent, then the subject needs to be the new base URI
                  newSubject = current.parentNode.baseURI==context.parentObject ? current.baseURI : context.parentObject;
                  if (!propertyAtt) {
                     skip = true;
                  }
               }
            }
         }
      }

      //alert(current.tagName+": newSubject="+newSubject+", currentObjectResource="+currentObjectResource+", skip="+skip);

      if (newSubject) {
         var origins = this.target.subjectOrigins[newSubject];
         if (typeof origins == "undefined") {
            origins = [];
            this.target.subjectOrigins[newSubject] = origins;
         }
         origins.push(current);
      }

      // generate type triple
      if (newSubject && typeofAtt) {
         var values = this.tokenize(typeofAtt.value);
         for (var i=0; i<values.length; i++) {
            var object = this.curieParser.parseTermOrCURIEOrURI(values[i],terms,prefixes,base);
            if (object) {
               this.addTriple(this.target,current,newSubject,this.typeURI,{ type: this.objectURI , value: object});
            }
         }
      }

      // generate object triple
      if (newSubject && currentObjectResource) {
         if (relAtt) {
            var values = this.tokenize(relAtt.value);
            //alert(newSubject+" "+relAtt.value+" "+currentObjectResource+" "+values.length);
            for (var i=0; i<values.length; i++) {
               var predicate = this.curieParser.parseTermOrCURIEOrURI(values[i],terms,prefixes,base);
               if (predicate) {
                  this.addTriple(this.target,current,newSubject,predicate,{ type: this.objectURI, value: currentObjectResource});
               }
            }
         }
         if (revAtt) {
            var values = this.tokenize(revAtt.value);
            for (var i=0; i<values.length; i++) {
               var predicate = this.curieParser.parseTermOrCURIEOrURI(values[i],terms,prefixes,base);
               if (predicate) {
                  this.addTriple(this.target,current,currentObjectResource, predicate, { type: this.objectURI, value: newSubject});
               }
            }
         }
      } else {
         // TODO: Step 10 of the sequence algorithm shouldn't allow generation of a new bnode if the newSubject is already a bnode
         if (newSubject && newSubject.indexOf("_:")!=0 && !currentObjectResource && (relAtt || revAtt)) {
            this.blankCounter++;
            currentObjectResource = "_:"+this.blankCounter;
            //alert(current.tagName+": generated blank node, newSubject="+newSubject+" currentObjectResource="+currentObjectResource);
         }
         if (relAtt) {
            var values = this.tokenize(relAtt.value);
            for (var i=0; i<values.length; i++) {
               var predicate = this.curieParser.parseTermOrCURIEOrURI(values[i],terms,prefixes,base);
               if (predicate) {
                  incomplete.push({ predicate: predicate, forward: true });
               }
         
            }
         }
         if (revAtt) {
            var values = this.tokenize(revAtt.value);
            for (var i=0; i<values.length; i++) {
               var predicate = this.curieParser.parseTermOrCURIEOrURI(values[i],terms,prefixes,base);
               if (predicate) {
                  incomplete.push({ predicate: predicate, forward: false });
               }
            }
         }
      }

      if (newSubject && propertyAtt) {
         //alert(current.baseURI+" "+newSubject+" "+propertyAtt.value);
         var datatypeAtt = current.getAttributeNode("datatype");
         var contentAtt = current.getAttributeNode("content");
         var datatype = null;
         if (datatypeAtt) {
            datatype = this.curieParser.parseTermOrCURIEOrURI(datatypeAtt.value,terms,prefixes,base);
         }
         var values = this.tokenize(propertyAtt.value);
         var content = datatype==this.XMLLiteralURI ? null : (contentAtt ? contentAtt.value : current.textContent); 
         for (var i=0; i<values.length; i++) {
            var predicate = this.curieParser.parseTermOrCURIEOrURI(values[i],terms,prefixes,base);
            if (predicate) {
               if (datatype==this.XMLLiteralURI) {
                  this.addTriple(this.target,current,newSubject,predicate,{ type: this.XMLLiteralURI, value: current.childNodes});
               } else {
                  this.addTriple(this.target,current,newSubject,predicate,{ type: datatype ? datatype : this.PlainLiteralURI, value: content, language: language});
               }
               //alert(this.triples[this.triples.length-1].predicate+"="+this.triples[this.triples.length-1].object.value);
            }
         }
      }

      var childContext = null;
      if (skip) {
         // TODO: should subject be null?
         childContext = this.push(context,base,context.subject);
         // TODO: should the parentObject be passed along?  If not, then intermediary children will keep properties from being associated with incomplete triples.
         // TODO: Verify: if the current baseURI has changed and the parentObject is the parent's base URI, then the baseURI should change
         childContext.parentObject = current.parentNode.baseURI==context.parentObject ? current.baseURI : context.parentObject;
         childContext.language = language;
         childContext.prefixes = prefixes;
      } else {
         if (newSubject) {
            // complete contents incomplete
            //alert(current.tagName+": completing triples "+context.incomplete.length);
            for (var i=0; i<context.incomplete.length; i++) {
               if (context.incomplete[i].forward) {
                  //alert(current.tagName+": completing forward triple with object="+context.subject);
                  this.addTriple(this.target,current,context.subject,context.incomplete[i].predicate, { type: this.objectURI, value: newSubject});
               } else {
                  //alert(current.tagName+": completing reverse triple with object="+context.subject);
                  this.addTriple(this.target,current,newSubject,context.incomplete[i].predicate,{ type: this.objectURI, value: context.subject});
               }
            }
         }
         childContext = this.push(context,base,newSubject);
         childContext.parentObject = currentObjectResource ? currentObjectResource : (newSubject ? newSubject : context.subject);
         childContext.prefixes = prefixes;
         childContext.incomplete = incomplete;
         childContext.language = language;
         childContext.terms = terms;
         childContext.vocabulary = vocabulary;
      }
      for (var child = current.firstChild; child; child = child.nextSibling) {
         if (child.nodeType==Node.ELEMENT_NODE) {
            queue.push({ current: child, context: childContext});
         }
      }
   }
}


RDFaProcessor.prototype.push = function(parent,base,subject) {
   return {
      parent: parent,
      base: base ? base : (parent ? parent.base : null),
      subject: subject ? subject : (parent ? parent.subject : null),
      parentObject: null,
      incomplete: [],
      language: parent ? parent.language : this.language,
      prefixes: parent ? parent.prefixes : this.prefixes,
      terms: parent ? parent.terms : this.terms,
      vocabulary: parent ? parent.voabulary : this.vocabulary
   };
};

