

# Including Scripts #

If you want to use the RDFa API, just include the built RDF.js script.

If you want to use just the RDFa processor, just include the built RDFaProcessor.js script.

If you are not using the packaged all-in-one script or want to use the internal classes, you need to include the separate source files or package them together.

There are four main scripts:

  * `URI.js` - provides the URIResolver base class for RDFaProcessor
  * `RDFaProcessor.js` - provides the RDFaProcessor class
  * `GraphRDFaProcessor.js` - provides the GraphRDFaProcessor class
  * `RDFaGraph.js` - provides the RDFaGraph class

# RDFa API #

## `GreenTurtle.attach()` ##

```
GreenTurtle.attach(node,options)
```

The `GreenTurtle.attach()` function is an instance-less function that is used to run the RDFa processor on a node and added the RDFa API to the document.  The `node` argument is the node to be processed and typically is the document.

The `options` argument is an object used to control processing

  * `baseURI` - a alternate baseURI to use for the initial processing context (e.g. for manually constructed documents).
  * `baseURIMap` - a function for mapping base URIs during processing. The value must be a function that takes a single URI as an argument and returns the mapped URI.

## `GreenTurtle.implementation` ##

Returns the common implementation object that has the following properties and methods:

  * attach(document,options) - the same as GreenTurtle.attach()
  * parse(text,mediaType,options) - parses a media type (e.g. "text/turtle") into a graph.
  * createDocumentData(baseURI) - creates a DocumentData instance using the optional base URI.

The implementation is always available on `DocumentData` instance (e.g. `document.data.implementation`).

### `GreenTurtle.implementation.attach()` ###

See `GreenTurtle.attach()`.

### `GreenTurtle.implentation.parse()` ###

`parse(text,mediaType,options)`

Parses the text into a graph.  The options argument can be used to specify:

  * `baseURI` - the base URI to use to process the text
  * `errorHandler` - a function to receive error messages from the parser.

The returned value is an object with the following properties:

  * `subjects` - a map of subject URIs to RDFaSubject instances.
  * `prefixes` - a map of prefixes to URIs.
  * `terms` - a list of recognized terms.
  * `base` - the base URI of the representation.

### `GreenTurtle.implentation.createDocumentData()` ###

`createDocumentData(baseURI)`

If no base URI is specified, the current window location will be used.  In the absence of any location, "about:blank" will be used as the base URI.

Returns an instance of the class `DocumentData`.


# Classes #

## `DocumentData` ##

### Constructing ###

```
   new DocumentData(baseURI);
```

Constructs a DocumentData instance with the associated base URI.  A subsequent call to `attach()` must be made to associate the instance with a document.

### `DocumentData.attach()` ###

```
   attach(target,options)
```

where:

  * target - the target document
  * options - an options object (optional or may be null).

The options object may contain a "baseURI" property that specifies the base URI of the document to use instead of that found on the target document.

### `DocumentData.expand()` ###

```
   expand(curie);
```

Expands a CURIE.

### `DocumentData.getMapping()` ###

```
   getMapping(prefix)
```

### `DocumentData.getProperties()` ###

```
   getProperties(subject)
```

### `DocumentData.getSubject()` ###

```
   getSubject(subject);
```

### `DocumentData.getSubjects() ` ###

```
   getSubjects(property,value)
```

### `DocumentData.getValueOrigins()` ###

```
   getValueOrigins(subject,property);
```

Returns a set of value origin objects for matching objects within triples.

The `subject` and `property` parameters are either a URI or CURIE that will be expanded into a URI.  All parameters are optional and have the following effect:

  * if both the subject and property are specified, all the object values on the subject for the property are returned.
  * if only the subject is specified, all the property object values are returned.
  * if only the property is specified, all the matching property object values for all subjects are returned.
  * if no arguments are specified, all object values are returned.

The return is an array of object value objects with the following properties:

  * `origin` - the element origin of the object value.
  * `value` - the object value of the associated triple.

### `DocumentData.getValues()` ###

```
   getValues(subject,property);
```

### `DocumentData.merge()` ###
```
   merge(graph,options);
```
### `DocumentData.setMapping()` ###
```
   setMapping(prefix,uri);
```

### `DocumentData.shorten()` ###

```
   shorten(uri);
```

Shortens a URI via the defined prefixes into a CURIE.


## RDFaProcessor ##

The `RDFaProcessor` class is the main implementation of the [RDFa 1.1 Sequence Algorithm](http://www.w3.org/TR/rdfa-core/#s_sequence).  It provides the ability to process any DOM node into a set of triples (subject, predicate, and object).

The default implementation of the `init()`, `newSubjectOrigin()`, and `addTriple()` methods do not do anything.  This class must be subclassed to receive the RDFa triples.

For example, a callback handler could be implemented by:

```

CallbackProcessor.prototype = new RDFaProcessor();
CallbackProcessor.prototype.constructor=RDFaProcessor;
function CallbackProcessor() {
   RDFaProcessor.call(this);
}

CallbackProcessor.prototype.addTriple = function(origin,subject,predicate,object) {
   console.log("New triple: "+subject+", predicate "+predicate+", object "+object.value+", "+object.language+", "+object.type);
   // call the handler here...
}
```

A simple use of this class:

```

var processor = new RDFaProcessor();
processor.finishedHandlers.push(
   function(node) {
      alert("Done!");
   }
);
processor.process(document);
```

### Constructing ###

```
new RDFaProcessor(targetObject)
```

The `targetObject` parameter is an optional object use to store data (e.g. prefixes, terms, triples) during the processing of the document.  This object is typically used by subclasses and may be omitted.  If omitted, an object will be created for use by the instance.  This target object is available via the "target" property on the instance.

Processor instances may be reused but, depending on the subclass, the target object may need to be reset.

### RDFaProcessor.finishedHandlers ###

An instance property that is an array of handlers to call upon completion of processing a node.  The handlers  are a function whose only argument is the node that was processed.

### RDFaProcessor.process ###

```
process(node)
```

Performs the [RDFa 1.1 Sequence algorithm](http://www.w3.org/TR/rdfa-core/#s_sequence) to harvest triples from the given node.

Upon completion, a set of handlers are called with the node passed as the argument to the method.

### RDFaProcessor.init ###

```
init()
```

Called after construction for further customization.  The default implementation does nothing.  Subclasses may override this method to further initialize the target object.

### RDFaProcessor.newSubjectOrigin ###

```
newSubjectOrigin(origin,subject)
```

A method called to notify when a new subject is generated from a particular node.  The `origin` argument is the node from the document which generated the subject.

### RDFaProcessor.addTriple ###

```
addTriple(origin,subject,predicate,object)
```

A method called to notify when a new triple is generated.

  * `origin` - the node that generated the triple (node)
  * `subject` - the subject URI (string)
  * `predicate` - the predicate URI (string)
  * `object` - the object value (an object)

The object value is a object with three, possibly empty, properties:

  * `value` - the string value or node
  * `type` - the datatype (string)
  * `language` - the language (string)


## GraphRDFaProcessor ##

The GraphRDFaProcess is a subclass of RDFaProcessor that constructs a graph of the triples.  Any subclass of GraphRDFaProcessor must preserve the semantics of the `init()`, `newSubjectOrigin()`, and `addTriple()` methods implemented on this class.

This class also adds a finished handler that must be preserved.  You may add your own handlers as well as long as you do not remove the one added by this class during the `init()` method call.

By default, this class adds triples to an instance of RDFaGraph contained in `target.graph`.  The minimal contract is an object with three associate arrays:

```
   var graph = {
       subjects: {},
       prefixes: {}.
       terms: {}
   };
```


### Constructing ###

```
new GraphRDFaProcessor(targetObject)
```

The `targetObject` parameter is an optional object use to store data (i.e. the graph) during the processing of the document.  This parameter may be omitted and an instance will be created for you.

When target is not supplied, this is equivalent to the invocation:

```
new GraphRDFaProcessor({
    graph: {
        subjects: {},
        prefixes: {},
        terms: {}
     }
});

```

When the target is specified, the target object must have  a property called `graph` which has an associative array for each of the `subjects`, `prefixes`, and `terms` property:

```
   target.graph = {
        subjects: {},
        prefixes: {},
        terms: {}
   }
```

Alternatively, you can construct an `RDFaGraph` instance:

```
   target.graph = new RDFaGraph();
```

As a convenience, this processor will also set the `tripleCount` property on the target to the number of triples created.

## RDFaGraph ##

This class is an implementation of the contract between the `GraphRDFaProcessor` and the receiving object for the triples.

Each subject is keyed by the subject URI and the receiving object has the following properties:

  * `subject` - the subject URI,
  * `predicates` - an associative list of predicates.

The value return by accessing a predicate is another object with properties:

  * `predicate` - the predicate URI,
  * `objects` - an array of object values.

Each object has the following, possible empty, properties:

  * `value` - the literal value or node,
  * `language` - the language associated with the value,
  * `type` - the datatype associated with the value.

### Constructing ###

```
   new RDFaGraph()
```

### RDFaGraph.toString ###

Generates a [Turtle](http://www.w3.org/TR/turtle/) representation of the complete graph.

### RDFaGraph.subjects ###

An associative array of subjects keyed by the subject URI.  Each entry is a subject object (an instance of RDFaSubject).

### RDFaGraph.prefixes ###

An associative array of prefix definitions, keyed by prefix and whose entry is the URI mapping.

### RDFaGraph.terms ###

An associative array of term definitions, keyed by term and whose entry is the term URI.

### RDFaGraph.curieParser ###

A CURIE parser that will use the terms and prefixes of the graph to expand the CURIE into a full URI.

## RDFaSubject ##

An object that represents a set of subject triples.

### Constructing ###

```
   new RDFaSubject(owningGraph, subject);
```

### RDFaSubject.subject / RDFaSubject.id ###

The subject URI.

### RDFaSubject.predicates ###

An associative array of predicates keyed by the predicate URI with target of the predicate object representation (an instance of RDFaPredicate).

### RDFaSubject.origins ###

An array of subject origins (element nodes).

### RDFaSubject.types ###

A list of type URIs associated with the subject.

### RDFaSubject.toString ###

Generates a [Turtle](http://www.w3.org/TR/turtle/) representation of the subject subgraph.

### RDFaSubject.toObject ###

Generates a object representation of the subject suitable for JSON serialization.

### RDFaSubject.getValues(predicate) ###

Returns the object values as an array for a particular predicate.

## RDFaPredicate ##

Represents a predicate and its objects.

### RDFaPredicate.id ###

The predicate URI.

### RDFaPredicate.objects ###

An array of object values.  Each object value has properties:

  * `value` - the literal value or node,
  * `language` - the language associated with the value,
  * `type` - the datatype associated with the value.

### RDFaPredicate.toString ###

Generates a [Turtle](http://www.w3.org/TR/turtle/) predicate object list representation.

=== RDFaPredicate

## URIResolver ##

The `URIResolver` class provides the ability to parse URI values into an object.  That object can then be used normalize, resolve relative URIs, or turn the URI into a relative value.

### Constructing ###

```
new URIResolver()
```

### URIResolver.SCHEME ###

A regular expression for testing for a URI scheme at the start of a string.

### URIResolver.parseURI ###

```
parseURI(uri)
```

Parses a URI string value into a URI object.

## URI Objects ##

### scheme ###

A property containing the URI's scheme.

### schemeSpecificPart ###

A property containing the URI's scheme specific part (that which is after the colon).

### isGeneric ###

A flag indicating whether the URI is a generic URI.

### normalize() ###

A method that will normalize a generic URI and remove redundant path components, slashes, etc.

### resolve(href) ###

Resolves the `href` string argument against the URI as a base URI.

### relativeTo(URI) ###

Returns a string value of the URI relative to another URI object.