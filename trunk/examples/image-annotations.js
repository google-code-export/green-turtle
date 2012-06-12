function ImageAnnotator() {
   this.documents = {};
}

ImageAnnotator.prototype._findPos = function(obj) {
   var curleft = curtop = 0;
   for (var node = obj; node; node=node.offsetParent) { 
      curleft += node.offsetLeft;
      curtop += node.offsetTop;
   }
   return [curleft,curtop];
}
ImageAnnotator.prototype.process = function(doc,baseURI) {
   var context = {};
   context.document = doc;
   this.documents[baseURI ? baseURI : doc.baseURI] = context;
   this.update(context);
}

ImageAnnotator.prototype.update = function(context) {
   context.targets = context.document.getElementsByType("http://www.milowski.com/O/annotated");
   context.annotatedSubjects = {};
   for (var i=0; i<context.targets.length; i++) {
      var target = context.targets[i];
      if (target.localName!="img") {
         continue;
      }
      this.updateImage(context,target,target.subject);
   }
}

ImageAnnotator.prototype.updateImage = function(context,img,subject) {
   var annotatedSubject = context.annotatedSubjects[subject];
   if (!annotatedSubject) {
      annotatedSubject = {}
      annotatedSubject.canvas = context.document.createElement("canvas");
      annotatedSubject.canvas.setAttribute("height",img.height);
      annotatedSubject.canvas.setAttribute("width",img.width);
      annotatedSubject.img = img;
      var imgPos = this._findPos(img);
      img.parentNode.insertBefore(annotatedSubject.canvas,img);
      annotatedSubject.c2d = annotatedSubject.canvas.getContext("2d");
      annotatedSubject.canvas.style.position = "absolute";
      annotatedSubject.canvas.style.left = imgPos[0];
      annotatedSubject.canvas.style.top = imgPos[1];
      context.annotatedSubjects[subject] = annotatedSubject;
   }
   var annotations = context.document.data.getValues(subject,"http://www.milowski.com/O/annotation");
   for (var i=0; i<annotations.length; i++) {
      var annotation = context.document.data.getProjection(annotations[i]);
      var type = annotation.get("rdf:type");
      if (type=="http://www.milowski.com/O/box") {
         console.log("Annotation: "+type+", "+annotation.get("http://www.milowski.com/O/description"));
         this.applyBoxImageAnnotation(annotatedSubject,annotation);
      } else {
         console.log("Unknown annotation type: "+type);
      }
   }
}

ImageAnnotator.prototype.applyBoxImageAnnotation = function(annotatedSubject,annotation) {
   var x = parseInt(annotation.get("http://www.milowski.com/O/x"));
   var y = parseInt(annotation.get("http://www.milowski.com/O/y"));
   var width = parseInt(annotation.get("http://www.milowski.com/O/width"));
   var height = parseInt(annotation.get("http://www.milowski.com/O/height"));
   var lineColor = annotation.get("http://www.milowski.com/O/line-color");
   var lineWidth = parseInt(annotation.get("http://www.milowski.com/O/line-width"));
   annotatedSubject.c2d.strokeStyle = lineColor;
   annotatedSubject.c2d.lineWidth = lineWidth;
   annotatedSubject.c2d.beginPath();
   annotatedSubject.c2d.moveTo(x,y);
   annotatedSubject.c2d.lineTo(x+width,y);
   annotatedSubject.c2d.lineTo(x+width,y+height);
   annotatedSubject.c2d.lineTo(x,y+height);
   annotatedSubject.c2d.lineTo(x,y);
   annotatedSubject.c2d.stroke();
   var description = annotation.get("http://www.milowski.com/O/description");
   if (description) {
       this.addToolTip(annotatedSubject.canvas,description,x,y,width,height);
   }
   var link = annotation.get("http://www.milowski.com/O/link");
   if (link) {
      this.addLink(annotatedSubject.canvas,link,x,y,width,height);
   }
}

ImageAnnotator.prototype.addToolTip = function(element,description,x,y,width,height) {
   console.log("Adding tip: "+description);
   var region = {
      left: element.offsetLeft+x, right: element.offsetLeft+x+width,
      top: element.offsetTop+y, bottom: element.offsetTop+y+height
   };
   var timer = null;
   var tooltip = element.ownerDocument.createElement("div");
   var textContainer = element.ownerDocument.createElement("span");
   tooltip.appendChild(textContainer);
   textContainer.appendChild(element.ownerDocument.createTextNode(description));
   element.parentNode.insertBefore(tooltip,element);
   tooltip.className = "tooltip";
   tooltip.style.display = "none";
   tooltip.style.position = "absolute";
   var app = this;
   element.addEventListener("mousemove",function(e) {
      if (timer) {
         tooltip.style.display = "none";
         clearTimeout(timer);
         timer = null;
      }
      //console.log(e.pageX+","+region.left+","+region.right);
      //console.log(e.pageY+","+region.top+","+region.bottom);
      if (e.pageX>=region.left && e.pageX<=region.right && e.pageY>=region.top && e.pageY<=region.bottom) {
         timer = setTimeout(function() {
            //console.log("Displaying tip: "+description);
            tooltip.style.display = "block";
            var elementPos = app._findPos(element);
            tooltip.style.left = (elementPos[0]+x)+"px";
            tooltip.style.top = (elementPos[1]+y-tooltip.clientHeight-3)+"px";
         },1000);
      }
   },false);
}

ImageAnnotator.prototype.addLink = function(element,link,x,y,width,height) {
   console.log("Adding link: "+link);
   var region = {
      left: element.offsetLeft+x, right: element.offsetLeft+x+width,
      top: element.offsetTop+y, bottom: element.offsetTop+y+height
   };
   element.addEventListener("mousemove",function(e) {
      if (e.pageX>=region.left && e.pageX<=region.right && e.pageY>=region.top && e.pageY<=region.bottom) {
         element.style.cursor = "pointer";
      } else {
         element.style.cursor = "auto";
      }
   },false);
   element.addEventListener("click",function(e) {
      if (e.pageX>=region.left && e.pageX<=region.right && e.pageY>=region.top && e.pageY<=region.bottom) {
         window.open(link);
      }
   },false);
}

var imageAnnotator = new ImageAnnotator();
if (document.readyState=="complete") {
   imageAnnotator.process(document);
} else {
    window.addEventListener("load",function() {
       imageAnnotator.process(document);
    },false);
}