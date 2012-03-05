Object.size = function(obj) {
   var size = 0;
   for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
         size++;
      }
   }
   return size;
};

RDFaProcessor.prototype = new URIResolver();
RDFaProcessor.prototype.constructor=RDFaProcessor;
function RDFaProcessor(targetObject) {
   this.target = targetObject;
   this.target.tripleCount = 0;
   this.target.triplesGraph = {};
   this.target.prefixes = {};
   this.target.terms = {};
   this.language = null;
   this.vocabulary = null;
   this.typeURI = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
   this.objectURI = "http://www.w3.org/1999/02/22-rdf-syntax-ns#object";
   this.XMLLiteralURI = "http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral"; 
   this.PlainLiteralURI = "http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral";
   this.blankCounter = 0;
}

RDFaProcessor.nameChar = '[-A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u10000-\uEFFFF\.0-9\u00B7\u0300-\u036F\u203F-\u2040]';
RDFaProcessor.nameStartChar = '[\u0041-\u005A\u0061-\u007A\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u0131\u0134-\u013E\u0141-\u0148\u014A-\u017E\u0180-\u01C3\u01CD-\u01F0\u01F4-\u01F5\u01FA-\u0217\u0250-\u02A8\u02BB-\u02C1\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03CE\u03D0-\u03D6\u03DA\u03DC\u03DE\u03E0\u03E2-\u03F3\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E-\u0481\u0490-\u04C4\u04C7-\u04C8\u04CB-\u04CC\u04D0-\u04EB\u04EE-\u04F5\u04F8-\u04F9\u0531-\u0556\u0559\u0561-\u0586\u05D0-\u05EA\u05F0-\u05F2\u0621-\u063A\u0641-\u064A\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D3\u06D5\u06E5-\u06E6\u0905-\u0939\u093D\u0958-\u0961\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09DC-\u09DD\u09DF-\u09E1\u09F0-\u09F1\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33\u0A35-\u0A36\u0A38-\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8B\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0AE0\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B36-\u0B39\u0B3D\u0B5C-\u0B5D\u0B5F-\u0B61\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB5\u0BB7-\u0BB9\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C60-\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CDE\u0CE0-\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D60-\u0D61\u0E01-\u0E2E\u0E30\u0E32-\u0E33\u0E40-\u0E45\u0E81-\u0E82\u0E84\u0E87-\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA-\u0EAB\u0EAD-\u0EAE\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0F40-\u0F47\u0F49-\u0F69\u10A0-\u10C5\u10D0-\u10F6\u1100\u1102-\u1103\u1105-\u1107\u1109\u110B-\u110C\u110E-\u1112\u113C\u113E\u1140\u114C\u114E\u1150\u1154-\u1155\u1159\u115F-\u1161\u1163\u1165\u1167\u1169\u116D-\u116E\u1172-\u1173\u1175\u119E\u11A8\u11AB\u11AE-\u11AF\u11B7-\u11B8\u11BA\u11BC-\u11C2\u11EB\u11F0\u11F9\u1E00-\u1E9B\u1EA0-\u1EF9\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2126\u212A-\u212B\u212E\u2180-\u2182\u3041-\u3094\u30A1-\u30FA\u3105-\u312C\uAC00-\uD7A3\u4E00-\u9FA5\u3007\u3021-\u3029_]';
RDFaProcessor.NCNAME = new RegExp('^' + RDFaProcessor.nameStartChar + RDFaProcessor.nameChar + '*$');

RDFaProcessor.prototype.trim = function(str) {
   return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

RDFaProcessor.prototype.tokenize = function(str) {
   return this.trim(str).split(/\s+/);
}


RDFaProcessor.prototype.parseCURIEOrURI = function(value,prefixes,base) {
   value = this.trim(value);
   if (value.charAt(0)=='[' && value.charAt(value.length-1)==']') {
      value = value.substring(1,value.length-1);
   }
   var colon = value.indexOf(":");
   if (colon>=0) {
      var prefix = value.substring(0,colon);
      if (prefix=="") {
         // default prefix
         var uri = prefixes[""];
         return uri ? uri+value.substring(colon+1) : null;
      } else if (prefix=="_") {
         // blank node
         return "_:"+value.substring(colon+1);
      } else if (RDFaProcessor.NCNAME.test(prefix)) {
         var uri = prefixes[prefix];
         if (uri) {
            return uri+value.substring(colon+1);
         }
      }
   }
   return base.resolve(value);
}

RDFaProcessor.prototype.parseTermOrCURIEOrURI = function(value,terms,prefixes,base) {
   value = this.trim(value);
   if (value.charAt(0)=='[' && value.charAt(value.length-1)==']') {
      value = value.substring(1,value.length-1);
   }
   var term = terms[value];
   if (term) {
      return term;
   }
   var colon = value.indexOf(":");
   if (colon>=0) {
      var prefix = value.substring(0,colon);
      if (prefix=="") {
         // default prefix
         var uri = prefixes[""];
         return uri ? uri+value.substring(colon+1) : null;
      } else if (prefix=="_") {
         // blank node
         return "_:"+value.substring(colon+1);
      } else if (RDFaProcessor.NCNAME.test(prefix)) {
         var uri = prefixes[prefix];
         if (uri) {
            return uri+value.substring(colon+1);
         }
      }
   }
   return base.resolve(value);
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

   this.target.prefixes[""] = "http://www.w3.org/1999/xhtml/vocab#";

   // From http://www.w3.org/profile/rdfa-1.1
   this.target.prefixes["grddl"] = "http://www.w3.org/2003/g/data-view#";
   this.target.prefixes["owl"] = "http://www.w3.org/2002/07/owl#";
   this.target.prefixes["rdf"] = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
   this.target.prefixes["rdfa"] = "http://www.w3.org/ns/rdfa#";
   this.target.prefixes["rdfs"] = "http://www.w3.org/2000/01/rdf-schema#";
   this.target.prefixes["rif"] = "http://www.w3.org/2007/rif#";
   this.target.prefixes["skos"] = "http://www.w3.org/2004/02/skos/core#";
   this.target.prefixes["skosxl"] = "http://www.w3.org/2008/05/skos-xl#";
   this.target.prefixes["wdr"] = "http://www.w3.org/2007/05/powder#";
   this.target.prefixes["void"] = "http://rdfs.org/ns/void#";
   this.target.prefixes["wdrs"] = "http://www.w3.org/2007/05/powder-s#";
   this.target.prefixes["xhv"] = "http://www.w3.org/1999/xhtml/vocab#";
   this.target.prefixes["xml"] = "http://www.w3.org/XML/1998/namespace";
   this.target.prefixes["xmlns"] = "http://www.w3.org/2000/xmlns/";
   this.target.prefixes["xsd"] = "http://www.w3.org/2001/XMLSchema#";
   this.target.prefixes["sd"] = "http://www.w3.org/ns/sparql-service-description#";
   this.target.prefixes["cnt"] = "http://www.w3.org/2008/content#";
   this.target.prefixes["earl"] = "http://www.w3.org/ns/earl#";
   this.target.prefixes["ht"] = "http://www.w3.org/2006/http#";
   this.target.prefixes["ma"] = "http://www.w3.org/ns/ma-ont#";
   this.target.prefixes["ptr"] = "http://www.w3.org/2009/pointers#";
   this.target.prefixes["cc"] = "http://creativecommons.org/ns#";
   this.target.prefixes["ctag"] = "http://commontag.org/ns#";
   this.target.prefixes["dc"] = "http://purl.org/dc/terms/";
   this.target.prefixes["foaf"] = "http://xmlns.com/foaf/0.1/";
   this.target.prefixes["gr"] = "http://purl.org/goodrelations/v1#";
   this.target.prefixes["ical"] = "http://www.w3.org/2002/12/cal/icaltzd#";
   this.target.prefixes["og"] = "http://ogp.me/ns#";
   this.target.prefixes["rev"] = "http://purl.org/stuff/rev#";
   this.target.prefixes["sioc"] = "http://rdfs.org/sioc/ns#";
   this.target.prefixes["v"] = "http://rdf.data-vocabulary.org/#";
   this.target.prefixes["vcard"] = "http://www.w3.org/2006/vcard/ns#";

   this.target.terms["describedby"] = "http://www.w3.org/2007/05/powder-s#describedby";

   // From http://www.w3.org/profile/html-rdfa-1.1
   this.target.terms["alternate"] = "http://www.w3.org/1999/xhtml/vocab#alternate";
   this.target.terms["appendix"] = "http://www.w3.org/1999/xhtml/vocab#appendix";
   this.target.terms["bookmark"] = "http://www.w3.org/1999/xhtml/vocab#bookmark";
   this.target.terms["cite"] = "http://www.w3.org/1999/xhtml/vocab#cite"
   this.target.terms["chapter"] = "http://www.w3.org/1999/xhtml/vocab#chapter";
   this.target.terms["contents"] = "http://www.w3.org/1999/xhtml/vocab#contents";
   this.target.terms["copyright"] = "http://www.w3.org/1999/xhtml/vocab#copyright";
   this.target.terms["first"] = "http://www.w3.org/1999/xhtml/vocab#first";
   this.target.terms["glossary"] = "http://www.w3.org/1999/xhtml/vocab#glossary";
   this.target.terms["help"] = "http://www.w3.org/1999/xhtml/vocab#help";
   this.target.terms["icon"] = "http://www.w3.org/1999/xhtml/vocab#icon";
   this.target.terms["index"] = "http://www.w3.org/1999/xhtml/vocab#index";
   this.target.terms["last"] = "http://www.w3.org/1999/xhtml/vocab#last";
   this.target.terms["license"] = "http://www.w3.org/1999/xhtml/vocab#license";
   this.target.terms["meta"] = "http://www.w3.org/1999/xhtml/vocab#meta";
   this.target.terms["next"] = "http://www.w3.org/1999/xhtml/vocab#next";
   this.target.terms["prev"] = "http://www.w3.org/1999/xhtml/vocab#prev";
   this.target.terms["previous"] = "http://www.w3.org/1999/xhtml/vocab#prev";
   this.target.terms["related"] = "http://www.w3.org/1999/xhtml/vocab#related";
   this.target.terms["section"] = "http://www.w3.org/1999/xhtml/vocab#section";
   this.target.terms["stylesheet"] = "http://www.w3.org/1999/xhtml/vocab#stylesheet";
   this.target.terms["subsection"] = "http://www.w3.org/1999/xhtml/vocab#subsection";
   this.target.terms["start"] = "http://www.w3.org/1999/xhtml/vocab#start";
   this.target.terms["top"] = "http://www.w3.org/1999/xhtml/vocab#top";
   this.target.terms["up"] = "http://www.w3.org/1999/xhtml/vocab#up";

   this.target.terms["itsRules"] = "http://www.w3.org/1999/xhtml/vocab#itsRules";
   this.target.terms["p3pv1"] = "http://www.w3.org/1999/xhtml/vocab#p3pv1";
   this.target.terms["role"] = "http://www.w3.org/1999/xhtml/vocab#role";
   this.target.terms["transformation"] = "http://www.w3.org/1999/xhtml/vocab#transformation";
}

RDFaProcessor.prototype.getTransferGraph = function() {
   var graph = {};
   for (var subject in this.target.triplesGraph) {
      var snode = this.target.triplesGraph[subject];
      var tsnode = { subject: subject, predicates: {} };
      graph[subject] = tsnode;
      for (var predicate in snode.predicates) {
         var pnode = snode.predicates[predicate];
         var tpnode = { predicate: predicate, objects: [] };
         tsnode.predicates[predicate] = tpnode;
         for (var i=0; i<pnode.objects.length; i++) {
            var object = pnode.objects[i];
            if (object.type==this.XMLLiteralURI) {
               var serializer = new XMLSerializer();
               var value = "";
               for (var x=0; x<object.value.length; x++) {
                  if (object.value[x].nodeType==Node.ELEMENT_NODE) {
                     value += serializer.serializeToString(object.value[x]);
                  } else if (object.value[x].nodeType==Node.TEXT_NODE) {
                     value += object.value[x].nodeValue;
                  }
               } 
               tpnode.objects.push({ type: object.type, value: value});
            } else {
               tpnode.objects.push({ type: object.type, value: object.value});
            }
         }
      }
   }
   return graph;
}

RDFaProcessor.prototype.newSubject = function(data,origin,subject) {
   var snode = data.triplesGraph[subject];
   if (!snode) {
      snode = { subject: subject, predicates: {}, origins: [] };
      data.triplesGraph[subject] = snode;
   }
   for (var i=0; i<snode.origins.length; i++) {
      if (snode.origins[i]==origin) {
         return snode;
      }
   }
   snode.origins.push(origin);
   return snode;
}

RDFaProcessor.prototype.addTriple = function(data,origin,subject,predicate,object) {
   var graph = data.triplesGraph;
   var snode = this.newSubject(data,origin,subject);
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
   object.origin = origin;
   //console.log("Added triple.");
}

RDFaProcessor.prototype.process = function(node) {

   if (node.parentNode.nodeType==Node.DOCUMENT_NODE) {
      this.checkForKnownProfiles(node);
   }
   var queue = [];
   queue.push({ current: node, context: this.push(null,node.baseURI)});
   while (queue.length>0) {
      var item = queue.shift();
      var current = item.current;
      var context = item.context;
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

      var base = this.parseURI(current.baseURI);
      //console.log("Processing: "+this.ancestorPath(current)+", "+base.spec);

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
            newSubject = this.parseCURIEOrURI(aboutAtt.value,prefixes,base);
         } else {
            var srcAtt = current.getAttributeNode("src");
            if (srcAtt) {
               newSubject = base.resolve(srcAtt.value);
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
            currentObjectResource = this.parseCURIEOrURI(resourceAtt.value,prefixes,base);
         } else {
            var hrefAtt = current.getAttributeNode("href");
            if (hrefAtt) {
               currentObjectResource = base.resolve(hrefAtt.value);
            }
         }
      } else {
         // establish new subject
         var aboutAtt = current.getAttributeNode("about");
         if (aboutAtt) {
            newSubject = this.parseCURIEOrURI(aboutAtt.value,prefixes,base);
         } else {
            var srcAtt = current.getAttributeNode("src");
            if (srcAtt) {
               newSubject = base.resolve(srcAtt.value);
            } else {
               var resourceAtt = current.getAttributeNode("resource");
               if (resourceAtt) {
                  newSubject = this.parseCURIEOrURI(resourceAtt.value,prefixes,base);
               } else {
                  var hrefAtt = current.getAttributeNode("href");
                  if (hrefAtt) {
                     newSubject = base.resolve(hrefAtt.value);
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

      //console.log(current.tagName+": newSubject="+newSubject+", currentObjectResource="+currentObjectResource+", skip="+skip);

      if (newSubject) {
         this.newSubject(this.target,current,newSubject);
      }

      // generate type triple
      if (newSubject && typeofAtt) {
         var values = this.tokenize(typeofAtt.value);
         for (var i=0; i<values.length; i++) {
            var object = this.parseTermOrCURIEOrURI(values[i],terms,prefixes,base);
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
               var predicate = this.parseTermOrCURIEOrURI(values[i],terms,prefixes,base);
               if (predicate) {
                  this.addTriple(this.target,current,newSubject,predicate,{ type: this.objectURI, value: currentObjectResource});
               }
            }
         }
         if (revAtt) {
            var values = this.tokenize(revAtt.value);
            for (var i=0; i<values.length; i++) {
               var predicate = this.parseTermOrCURIEOrURI(values[i],terms,prefixes,base);
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
               var predicate = this.parseTermOrCURIEOrURI(values[i],terms,prefixes,base);
               if (predicate) {
                  incomplete.push({ predicate: predicate, forward: true });
               }
         
            }
         }
         if (revAtt) {
            var values = this.tokenize(revAtt.value);
            for (var i=0; i<values.length; i++) {
               var predicate = this.parseTermOrCURIEOrURI(values[i],terms,prefixes,base);
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
            datatype = this.parseTermOrCURIEOrURI(datatypeAtt.value,terms,prefixes,base);
         }
         var values = this.tokenize(propertyAtt.value);
         var content = datatype==this.XMLLiteralURI ? null : (contentAtt ? contentAtt.value : current.textContent); 
         for (var i=0; i<values.length; i++) {
            var predicate = this.parseTermOrCURIEOrURI(values[i],terms,prefixes,base);
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
         childContext = this.push(context,context.subject);
         // TODO: should the entObject be passed along?  If not, then intermediary children will keep properties from being associated with incomplete triples.
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
         childContext = this.push(context,newSubject);
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
   for (var subject in this.target.triplesGraph) {
      var snode = this.target.triplesGraph[subject];
      if (Object.size(snode.predicates)==0) {
         delete this.target.triplesGraph[subject];
      }
   }
}


RDFaProcessor.prototype.push = function(parent,subject) {
   return {
      parent: parent,
      subject: subject ? subject : (parent ? parent.subject : null),
      parentObject: null,
      incomplete: [],
      language: parent ? parent.language : this.language,
      prefixes: parent ? parent.prefixes : this.target.prefixes,
      terms: parent ? parent.terms : this.target.terms,
      vocabulary: parent ? parent.voabulary : this.vocabulary
   };
};

