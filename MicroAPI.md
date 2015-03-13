# Introduction #

This is an attempt to document a usable subset of the RDFa API and extensions that could simplify use and is completely compatible with the [RDFa API](http://www.w3.org/TR/rdfa-api/) as specified.  It is a subset of the [full API](API.md) of Green Turtle.


# Summary #

Document level operations:

| `document.getElementsByType(uri)` | Returns a list of elements who are typed with the given URI |
|:----------------------------------|:------------------------------------------------------------|
| `document.getElementsBySubject(uri)` | Returns a list of elements that originate a given subject URI |
| `document.data.getSubjects()` | Returns a list of subjects within the document. |
| `document.data.getSubject(uri)` | Returns a subject object (extension) |
| `document.data.graph` | Returns the triples graph |
| `document.data.merge(graph,options)` | Merges graphs into this document data's graph. |
| `document.data.implementation` | Returns the RDFa implementation |
| `document.data.implementation.attach(doc)` | Attaches the RDFa API to a document. |
| `document.data.implementation.parse(text,mediaType,options)` | Parses representations into graphs |

Element operations (extension):

| `element.data` | The subject object for an element, if any. |
|:---------------|:-------------------------------------------|
| `element.data.id` | The subject URI. |
| `element.data.types` | The list of types associated with the subject. |
| `element.data.getValues(curieOrTerm ...)` | Returns a list of property values that matches the CURIE or TERM arguments. |

House keeping:

| `document.data.prefixes` | An array of prefixes currently defined (extension). |
|:-------------------------|:----------------------------------------------------|
| `document.data.getMapping(prefix)` | Returns the prefix mapping, if any (extension). |
| `document.data.setMapping(prefix,uri)` | Sets a prefix mapping. |
| `document.data.expand(curieOrTerm)` | Expands a CURIE or Term to a URI  (extension). |
| `document.data.shorten(URI)` | Shortens a URI to a CURIE or Term (extension). |

# Examples #

Get the people by type and list their names:

```
document.data.setMapping("s","http://schema.org");
var people = document.getElementsByType("s:Person");
for (var i=0; i<people.length; i++) {
   var name = people[i].data.getValues("s:name")[0];
}
```

# Parsing Turtle or Other Representations and Merging Graphs #

The API allows parsing of other representations, such as Turtle, into graphs that can be merged into a document's data.  The parser is directly accessible via the RDFa implementation.

You invoke the parser as follows:

```
var graph = document.data.implementation.parse("...", "text/turtle");
```

The returned object has the properties:

  * `subjects` - a map of subject URIs to subject node instances.
  * `prefixes` - a map of prefixes to URIs.
  * `terms` - a list of recognized terms.
  * `base` - the base URI of the representation.

The graph can be merged into any `document.data` instance via the `merge(graph,options)` method:

```
   document.data.merge(graph.subjects)
```

The `options` argument can specify how the graph is to be merged:

  * `mergeBlankNodes` - a boolean that indicates whether blank nodes should be kept verbatim.  A value of false is the default and will ensure that blank nodes being merged are unique and do not conflict with existing nodes.
  * `prefixes` - a map of prefixes mappings to add.  Any existing prefix will be preserved causing the new prefix mapping to be ignored.

# Subject Node Objects #

## data.getValues() ##
The `getValues()` method of the subject returns the object values for specific properties.  The method takes a list of URI, CURIE, or terms for predicates and will return any object values associated.  Object values may be literals or other DOM nodes (i.e. XML Literals).

## Properties ##

The subject object also provides full access to the triples for the subject via the properties.  The keys for properties are full URIs and `document.data.expand()` should be used to convert CURIE or Term values into URIs.

The `toString()` method returns Turtle representations for both subjects and predicates.

The subject object has the following properties:

| `id` | The subject URI |
|:-----|:----------------|
| `types` | An array of type associated with the subject |
| `origins` | An array of elements that are the subject's origin. |
| `predicates` | A associative array, keyed by URI, of the properties of the subject. |

Each predicate returns an object with the following properties:

| `id` | The predicate URI |
|:-----|:------------------|
| `objects` | The object values of the predicate. |

Each object is a simple object with the following properties:

| `value` | The value which may be a literal or DOM node |
|:--------|:---------------------------------------------|
| `type` | The type of the value. |
| `language` | The language associated with the value. |
| `origin` | A element in the document that originated the value. |


# Element Descendant Operations #

There are plenty of subtree operations that can be useful.  For example, finding the first descendant that has a particular subject:

```
var subject = "http://www.example.com/id";
var filter = { 
   acceptNode: function(e) {
        return e.data && e.data.id==id ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
   }        
}
var walker = document.createTreeWalker(parent,NodeFilter.SHOW_ELEMENT,filter,false);
var descendant = walker.nextNode() ? walker.currentNode : null;
```

As such, these probably don't need to be added to the API.