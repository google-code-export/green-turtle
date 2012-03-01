function URIResolver() {
}
URIResolver.SCHEME = new RegExp("^[A-Za-z][A-Za-z0-9\+\-\.]*\:");

URIResolver.prototype.parseURI = function(uri) {
   var match = URIResolver.SCHEME.exec(uri);
   if (!match) {
      throw "Bad URI value, no scheme: "+uri;
   }
   var parsed = { spec: uri };
   parsed.scheme = match[0].substring(0,match[0].length-1);
   parsed.schemeSpecificPart = parsed.spec.substring(match[0].length);
   if (parsed.schemeSpecificPart.charAt(0)=='/' && parsed.schemeSpecificPart.charAt(1)=='/') {
      this.parseGeneric(parsed);
   } else {
      parsed.isGeneric = false;
   }
   parsed.resolve = function(href) {
      if (!href) {
         return this.spec;
      }
      if (!this.isGeneric) {
         throw "Cannot resolve uri against non-generic URI: "+this.spec;
      }
      var colon = href.indexOf(':');
      if (href.charAt(0)=='/') {
         return this.scheme+"://"+this.authority+href;
      } else if (href.charAt(0)=='.' && href.charAt(1)=='/') {
         if (this.path.charAt(this.path.length-1)=='/') {
            return this.scheme+"://"+this.authority+this.path+href.substring(2);
         } else {
            var last = this.path.lastIndexOf('/');
            return this.scheme+"://"+this.authority+this.path.substring(0,last)+href.substring(1);
         }
      } else if (URIResolver.SCHEME.test(href)) {
         return href;
      } else {
         if (this.path.charAt(this.path.length-1)=='/') {
            return this.scheme+"://"+this.authority+this.path+href;
         } else {
            var last = this.path.lastIndexOf('/');
            return this.scheme+"://"+this.authority+this.path.substring(0,last+1)+href;
         }
      }
   };
   parsed.relativeTo = function(otherURI) {
      if (otherURI.scheme!=this.scheme) {
         return this.spec;
      }
      if (!this.isGeneric) {
         throw "A non generic URI cannot be made relative: "+this.spec;
      }
      if (!otherURI.isGeneric) {
         throw "Cannot make a relative URI against a non-generic URI: "+otherURI.spec;
      }
      if (otherURI.authority!=this.authority) {
         return this.spec;
      }
      var i=0;
      for (; i<this.segments.length && i<otherURI.segments.length; i++) {
         if (this.segments[i]!=otherURI.segments[i]) {
            //alert(this.path+" different from "+otherURI.path+" at '"+this.segments[i]+"' vs '"+otherURI.segments[i]+"'");
            var relative = "";
            for (var j=i; j<otherURI.segments.length; j++) {
               relative += "../";
            }
            for (var j=i; j<this.segments.length; j++) {
               relative += this.segments[j];
               if ((j+1)<this.segments.length) {
                  relative += "/";
               }
            }
            if (this.path.charAt(this.path.length-1)=='/') {
               relative += "/";
            }
            return relative;
         }
      }
      if (this.segments.length==otherURI.segments.length) {
         return this.hash ? this.hash : (this.query ? this.query : "");
      } else if (i<this.segments.length) {
         var relative = "";
         for (var j=i; j<this.segments.length; j++) {
            relative += this.segments[j];
            if ((j+1)<this.segments.length) {
               relative += "/";
            }
         }
         if (this.path.charAt(this.path.length-1)=='/') {
            relative += "/";
         }
         return relative;
      } else {
         throw "Cannot calculate a relative URI for "+this.spec+" against "+otherURI.spec;
      } 
   };
   return parsed;
}

URIResolver.prototype.parseGeneric = function(parsed) {
   if (parsed.schemeSpecificPart.charAt(0)!='/' || parsed.schemeSpecificPart.charAt(1)!='/') {
      throw "Generic URI values should start with '//':"+parsed.spec;
   }
  
   var work = parsed.schemeSpecificPart.substring(2);
   var pathStart = work.indexOf("/");
   parsed.authority = pathStart<0 ? work : work.substring(0,pathStart);
   parsed.path = pathStart<0 ? "" : work.substring(pathStart);
   var hash = parsed.path.indexOf('#');
   if (hash>=0) {
      parsed.fragment = parsed.path.substring(hash+1);
      parsed.path = parsed.path.substring(0,hash);
   }
   var questionMark = parsed.path.indexOf('?');
   if (questionMark>=0) {
      parsed.query = parsed.path.substring(questionMark+1);
      parsed.path = parsed.path.substring(0,questionMark);
   }
   if (parsed.path=="/" || parsed.path=="") {
      parsed.segments = [];
   } else {
      parsed.segments = parsed.path.split(/\//);
      if (parsed.segments.length>0 && parsed.segments[0]=='' && parsed.path.length>1 && parsed.path.charAt(1)!='/') {
         // empty segment at the start, remove it
         parsed.segments.shift();
      }
      if (parsed.segments.length>0 && parsed.path.length>0 && parsed.path.charAt(parsed.path.length-1)=='/' && parsed.segments[parsed.segments.length-1]=='') {
         // we may have an empty the end
         // check to see if it is legimate
         if (parsed.path.length>1 && parsed.path.charAt(parsed.path.length-2)!='/') {
            parsed.segments.pop();
         }
      }
   }
   parsed.isGeneric = true;
}
