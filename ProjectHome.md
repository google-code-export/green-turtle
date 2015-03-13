# This project has transitioned to [github](https://github.com/alexmilowski/green-turtle). #

Green Turtle is an implementation of RDFa 1.1 for browsers.  By simply including a bit of Javascript, the DOM is extended to include the RDFa API and an RDFa 1.1 processor is available to process any ancillary documents to harvest triples.  For more information on the API, see [RDFa API](http://www.w3.org/TR/rdfa-api/) Working Draft at the W3C.



## 1. How to Use ##

You can use this [Document API](MicroAPI.md) or  [Full API](API.md) one of two ways:

  1. Just include the Javascript library into your webpage.
  1. Install the [Chrome Extension](https://chrome.google.com/webstore/detail/loggcajcfkpdeoaeihclldihfefijjam).

The Chrome Extension will give you two things:

  * the RDFa API on every page,
  * a triples viewer.

Any page that has triples will show a green turtle in the address location bar.  If you click on that green turtle, you'll see a visualization of the triples graph and a table of the triples.  You can click on nodes and highlight the related triples.

## 2. What's New ##

### Released Version 1.2 ###

There is new support for Microdata, script injection in the extension, bug fixes and cleanup.  Read more [here](http://www.milowski.com/journal/entry/2013-07-26T15:25:04.782Z/).

### Released Version 1.1 ###

In this version:

  * The shorten/expand methods are now available on the graph.
  * The shorten() method allows you to track which prefixes are actually used.
  * Turtle output now optionally shortens URIs according to the prefixes available.
  * bug fix: URI encoding of 'src' and 'href' attributes is now properly handled.
  * bug fix: data.getSubject() now returns null just as it did before.

In the Chrome extension:

  * Turtle output is available via the toolbar.
  * URIs are shortened according to prefixes.
  * Prefixes used are displayed below the table of triples.

### 1.0 Released! ###

Version 1.0 now passes all of the RDFa and Turtle W3C conformance tests.  In addition, Turtle has been integrated to allow the same API to access Turtle embedded as scripts.   Embedded Turtle will now automatically be processed and merged.

For example, Green Turtle will recognize and merge the triples in this script tag into the document's data:

```
<script type="text/turtle">
<![CDATA[
@base <http://example.org/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix rel: <http://www.perceive.net/schemas/relationship/> .

<#green-goblin>
    rel:enemyOf <#spiderman> ;
    a foaf:Person ;    # in the context of the Marvel universe
    foaf:name "Green Goblin" .

<#spiderman>
    rel:enemyOf <#green-goblin> ;
    a foaf:Person ;
    foaf:name "Spiderman", "Человек-паук"@ru .
]]>
</script>
```

See [Turtle, Appendix A: Embedding Turtle in HTML documents](http://www.w3.org/TR/turtle/#in-html) for more information.

Changes in 1.0:

  * RDFa.attach is now GreenTurtle.attach
  * Most implementation features have been moved to document.data.implementation
  * The implementation is accessible at GreenTurtle.implementation
  * Processors for other encodings (e.g. Turtle) are registered on the implementation by media type
  * Turtle can be directly parsed into a triples graph and can be merged into any document's data.
  * Embedded Turtle is now automatically processed.

## 3. Invocation ##

When you include the RDFa.js code, by default it will attempt to attach itself to the document when the document load has completed.  If you need to update the RDFa properties, you need to call:

```
   document.data.implementation.attach((document)
```

or alternatively:

```
GreenTurtle.attach(document)
```


In general, you can process any document with `GreenTurtle.attach(document)`.

While all the code is packaged into one Javascript file and scoped within the RDFa symbol, there is a whole [api and set of classes](API.md) available for other uses.  Specifically, you can invoke the processor directly and received the triples via methods rather than build a whole in-memory graph.

## 4. Extensions ##

### 4.1 Invocation ###

The main invocation:

> GreenTurtle.attach(document or node)

### 4.2 Element "data" property ###

Every element which generates a subject has a `data` property.  The value return is an object with two properties:

  * `id` - the subject URI,
  * `types` - an array of types associated with the subject.

For example, you can use this `data` property in conjunction with type-based element retrieval:

```
   document.getElementsByType("http://example.org/mytype")[0].data.id
```


This retrieves the first element by type and then gets the subject URI from the local data property.

### 4.3 Element.getElementsByType ###

The types are associated at the element level via the `data` property. An additional function is available to access this within the descendants of a particular element by calling `getElementsByType()`.  This allows selection of typed elements from a particular starting point in a document.

For example, if you wanted to find links of a particular type within a `div` element:

```
var links = div.getElementsByType("http://example.org/link");
```
The `links` variable now has an array of elements typed as `http://example.org/link` that only occur within the subtree starting with `div`.

### 4.4 DocumentData.getSubject ###

There is an additional method on `document.data` (DocumentData class) that allows retrieval of all relations for a particular subject:

```

document.data.getSubject(subject)

```

The `subject` argument is the subject URI to match.

The return value is an object with properties:

  * `subject` - the subject URI,
  * `predicates` - an associative list of predicates.

The value return by accessing a predicate is another object with properties:

  * `predicate` - the predicate URI,
  * `objects` - an array of values.

Each object has the following, possible empty, properties:

  * `value` - the literal value or node,
  * `language` - the language associated with the value,
  * `type` - the datatype associated with the value.

Calling toObject() on the subject object will generate a version that can be serialized to JSON.

### 4.5 Loaded Event ###

Finally, sometimes you want to know when the RDFa document processing is complete.  You can listen for an event called `rdfa.loaded`:

```
   document.addEventListener(
      "rdfa.loaded",
      function() {
         // your stuff here
      },
      false
    );
```


## 5. Including the Javascript ##

You can download the source from the "Featured Downloads" on the left.

There are now two versions of the source packaged for different uses:

  * RDFa.js - the API and RDFa processor packaged together.
  * RDFaProcessor.js - just the RDFa processor and supporting classes.

Each of these has a minimized variant as well.

## 6. Building from Source ##

Just check out the source from subversion and use ant to build the RDFa.js file and the extension.  It will also generate an identical copy of RDFa.js with a version label in the filename.

The various javascript codes for RDFa.js are in separate source files.  In theory, they can be recombined or used directly.  As they are currently packaged, they hide most of the classes internally.

## 7. History ##

### 0.21.0 ###

  * implemented the new [Micro API](MicroAPI.md)
  * fixed a bug in Firefox related to base URIs that contain fragment identiifers
  * fixed type origin bug for multiple origins for the same typed subject
  * fixed an invocation bug in the Chrome Extension where fast loading pages didn't indicate triples are available

The [MicroAPI](MicroAPI.md) is a completely compatible extension to the RDFa API and is experimental.  It is a first step towards something that might be easier to understand, use, and more compact.

### 0.20.1 ###

The version 0.20.1 of the Chrome Extension has a number of improvements to get along with websites that already provide the RDFa API.  It also works better with document that have large numbers of triples.

Here's a short list of new features:

  * cleaned up the viewer layout,
  * added incremental loading of subjects,
  * added progressive display of subject triples,
  * added stop/continue feature for large triple sets,
  * cleaned up communication between extension, page, and viewer,
  * made the extension work with in-page RDFa API implementations,
  * removed injection of scripts to support RDFa for pages that do not have the RDFa API loaded.