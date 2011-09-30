
function URI(spec) {
   this.spec = spec;
   this.parse();
}

URI.SCHEME = new RegExp("^[A-Za-z][A-Za-z0-9\+\-\.]*\:");

URI.prototype.parse = function() {
   var match = URI.SCHEME.exec(this.spec);
   if (!match) {
      throw "Bad URI value, no scheme: "+this.spec;
   }
   this.scheme = match[0].substring(0,match[0].length-1);
   this.schemeSpecificPart = this.spec.substring(match[0].length);
   if (this.schemeSpecificPart.charAt(0)=='/' && this.schemeSpecificPart.charAt(1)=='/') {
      this.parseGeneric();
   }
}

URI.prototype.parseGeneric = function() {
   if (this.schemeSpecificPart.charAt(0)!='/' || this.schemeSpecificPart.charAt(1)!='/') {
      throw "Generic URI values should start with '//':"+this.spec;
   }
  
   var work = this.schemeSpecificPart.substring(2);
   var pathStart = work.indexOf("/");
   this.authority = pathStart<0 ? work : work.substring(0,pathStart);
   this.path = pathStart<0 ? "" : work.substring(pathStart);
   var hash = this.path.indexOf('#');
   if (hash>=0) {
      this.fragment = this.path.substring(hash+1);
      this.path = this.path.substring(0,hash);
   }
   var questionMark = this.path.indexOf('?');
   if (questionMark>=0) {
      this.query = this.path.substring(questionMark+1);
      this.path = this.path.substring(0,questionMark);
   }
   if (this.path=="/" || this.path=="") {
      this.segments = [];
   } else {
      this.segments = this.path.split(/\//);
      if (this.segments.length>0 && this.segments[0]=='' && this.path.length>1 && this.path.charAt(1)!='/') {
         // empty segment at the start, remove it
         this.segments.shift();
      }
      if (this.segments.length>0 && this.path.length>0 && this.path.charAt(this.path.length-1)=='/' && this.segments[this.segments.length-1]=='') {
         // we may have an empty the end
         // check to see if it is legimate
         if (this.path.length>1 && this.path.charAt(this.path.length-2)!='/') {
            this.segments.pop();
         }
      }
   }
   this.isGeneric = true;
}
  
URI.prototype.resolve = function(href) {
   if (!href) {
      return new URI(this.spec);
   }
   if (!this.isGeneric) {
      throw "Cannot resolve uri against non-generic URI: "+this.spec;
   }
   var colon = href.indexOf(':');
   if (href.charAt(0)=='/') {
      return new URI(this.scheme+"://"+this.authority+href);
   } else if (href.charAt(0)=='.' && href.charAt(1)=='/') {
      if (this.path.charAt(this.path.length-1)=='/') {
         return new URI(this.scheme+"://"+this.authority+this.path+href.substring(2));
      } else {
         var last = this.path.lastIndexOf('/');
         return new URI(this.scheme+"://"+this.authority+this.path.substring(0,last)+href.substring(1));
      }
   } else if (URI.SCHEME.test(href)) {
      return new URI(href);
   } else {
      if (this.path.charAt(this.path.length-1)=='/') {
         return new URI(this.scheme+"://"+this.authority+this.path+href);
      } else {
         var last = this.path.lastIndexOf('/');
         return new URI(this.scheme+"://"+this.authority+this.path.substring(0,last+1)+href);
      }
   }
}

URI.prototype.relativeTo = function(otherURI) {
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
}


