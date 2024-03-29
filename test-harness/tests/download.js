var manifest = {
  "@context": "http://rdfa.info/contexts/rdfa-test.jsonld",
  "@graph": [
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0001",
      "@type": "test:TestCase",
      "num": "0001",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Predicate establishment with @property",
      "input": "http://rdfa.info/test-suite/test-cases/0001.html",
      "purpose": "Tests @property to establish the predicate; literal object is in the content of the element.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0001.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0006",
      "@type": "test:TestCase",
      "num": "0006",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rel and @rev",
      "input": "http://rdfa.info/test-suite/test-cases/0006.html",
      "purpose": "Tests @rev and @rel together, with the object being specified by @href, ignoring content",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0006.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0007",
      "@type": "test:TestCase",
      "num": "0007",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rel, @rev, @property, @content",
      "input": "http://rdfa.info/test-suite/test-cases/0007.html",
      "purpose": "Tests @rel, @rev, @property, and @content together to generate several RDF triples.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0007.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0008",
      "@type": "test:TestCase",
      "num": "0008",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "empty string @about",
      "input": "http://rdfa.info/test-suite/test-cases/0008.html",
      "purpose": "Tests empty @about.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0008.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0009",
      "@type": "test:TestCase",
      "num": "0009",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rev",
      "input": "http://rdfa.info/test-suite/test-cases/0009.html",
      "purpose": "Tests @rev.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0009.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0010",
      "@type": "test:TestCase",
      "num": "0010",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rel, @rev, @href",
      "input": "http://rdfa.info/test-suite/test-cases/0010.html",
      "purpose": "Tests @rel, @rev, and @href to generate two RDF triples.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0010.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0012",
      "@type": "test:TestCase",
      "num": "0012",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@xml:lang",
      "input": "http://rdfa.info/test-suite/test-cases/0012.html",
      "purpose": "Tests @xml:lang",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0012.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0013",
      "@type": "test:TestCase",
      "num": "0013",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@xml:lang inheritance",
      "input": "http://rdfa.info/test-suite/test-cases/0013.html",
      "purpose": "Tests @xml:lang inheritance",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0013.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0014",
      "@type": "test:TestCase",
      "num": "0014",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@datatype, xsd:integer",
      "input": "http://rdfa.info/test-suite/test-cases/0014.html",
      "purpose": "Tests setting the @datatype to xsd:integer",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0014.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0015",
      "@type": "test:TestCase",
      "num": "0015",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "meta and link",
      "input": "http://rdfa.info/test-suite/test-cases/0015.html",
      "purpose": "Tests meta and link with no parent @about",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0015.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0017",
      "@type": "test:TestCase",
      "num": "0017",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Related blanknodes",
      "input": "http://rdfa.info/test-suite/test-cases/0017.html",
      "purpose": "Tests creation of statements involving explicitly created blank nodes.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0017.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0018",
      "@type": "test:TestCase",
      "num": "0018",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rel for predicate",
      "input": "http://rdfa.info/test-suite/test-cases/0018.html",
      "purpose": "Tests @rel to establish predicate.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0018.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0019",
      "@type": "test:TestCase",
      "num": "0019",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@about for subject",
      "input": "http://rdfa.info/test-suite/test-cases/0019.html",
      "purpose": "Tests @about to establish subject.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0019.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0020",
      "@type": "test:TestCase",
      "num": "0020",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Inheriting @about for subject",
      "input": "http://rdfa.info/test-suite/test-cases/0020.html",
      "purpose": "Tests @about inheritance to establish subject.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0020.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0021",
      "@type": "test:TestCase",
      "num": "0021",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Subject inheritance with no @about",
      "input": "http://rdfa.info/test-suite/test-cases/0021.html",
      "purpose": "Tests inheritance of subject when no @about can be found",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0021.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0023",
      "@type": "test:TestCase",
      "num": "0023",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@id does not generate subjects",
      "input": "http://rdfa.info/test-suite/test-cases/0023.html",
      "purpose": "Tests that @id does not generate subjects",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0023.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0025",
      "@type": "test:TestCase",
      "num": "0025",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "simple chaining test",
      "input": "http://rdfa.info/test-suite/test-cases/0025.html",
      "purpose": "Tests simple chaining with cascade of @resource and @property",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0025.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0026",
      "@type": "test:TestCase",
      "num": "0026",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@content",
      "input": "http://rdfa.info/test-suite/test-cases/0026.html",
      "purpose": "Tests @content for literal object",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0026.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0027",
      "@type": "test:TestCase",
      "num": "0027",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@content, ignore element content",
      "input": "http://rdfa.info/test-suite/test-cases/0027.html",
      "purpose": "Tests @content for literal object, overriding element content.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0027.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0029",
      "@type": "test:TestCase",
      "num": "0029",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "markup stripping with @datatype",
      "input": "http://rdfa.info/test-suite/test-cases/0029.html",
      "purpose": "Tests markup stripping from a span element with @datatype=xsd:string",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0029.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0030",
      "@type": "test:TestCase",
      "num": "0030",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "omitted @about",
      "input": "http://rdfa.info/test-suite/test-cases/0030.html",
      "purpose": "Tests omitted @about.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0030.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0031",
      "@type": "test:TestCase",
      "num": "0031",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "simple @resource",
      "input": "http://rdfa.info/test-suite/test-cases/0031.html",
      "purpose": "Tests if @resource sets URIref object correct.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0031.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0032",
      "@type": "test:TestCase",
      "num": "0032",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@resource overrides @href",
      "input": "http://rdfa.info/test-suite/test-cases/0032.html",
      "purpose": "Tests if @resource overrides @href to set the URIref object.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0032.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0033",
      "@type": "test:TestCase",
      "num": "0033",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "simple chaining test with bNode",
      "input": "http://rdfa.info/test-suite/test-cases/0033.html",
      "purpose": "Tests simple chaining with cascade of bNode and @property",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0033.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0034",
      "@type": "test:TestCase",
      "num": "0034",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "simple img[@src] test",
      "input": "http://rdfa.info/test-suite/test-cases/0034.html",
      "purpose": "Tests if a @src (in img element) correctly sets the URIref object",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0034.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0035",
      "@type": "test:TestCase",
      "num": "0035",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@src/@href test",
      "input": "http://rdfa.info/test-suite/test-cases/0035.html",
      "purpose": "Tests if @href overwrites @src",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0035.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0036",
      "@type": "test:TestCase",
      "num": "0036",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@src/@resource test",
      "input": "http://rdfa.info/test-suite/test-cases/0036.html",
      "purpose": "Tests if @resource overwrites @src",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0036.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0037",
      "@type": "test:TestCase",
      "num": "0037",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@src/@href/@resource test",
      "input": "http://rdfa.info/test-suite/test-cases/0037.html",
      "purpose": "Tests if @resource overwrites both @href and @src",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0037.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0038",
      "@type": "test:TestCase",
      "num": "0038",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rev - img[@src] test",
      "input": "http://rdfa.info/test-suite/test-cases/0038.html",
      "purpose": "Tests if a @src (in img element) correctly sets the URIref subject (due to @rev)",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0038.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0039",
      "@type": "test:TestCase",
      "num": "0039",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rev - @src/@href test",
      "input": "http://rdfa.info/test-suite/test-cases/0039.html",
      "purpose": "Tests if @href overwrites @src correctly to set the URIref subject (due to @rev)",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0039.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0040",
      "@type": "test:TestCase",
      "num": "0040",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rev - @src/@resource test",
      "input": "http://rdfa.info/test-suite/test-cases/0040.html",
      "purpose": "Tests if @resource overwrites @src correctly to set the URIref subject (due to @rev)",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0040.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "xhtml1"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0041",
      "@type": "test:TestCase",
      "num": "0041",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rev - @src/@href/@resource test",
      "input": "http://rdfa.info/test-suite/test-cases/0041.html",
      "purpose": "Tests if @resource overwrites both @href and @src correctly to set the URIref subject (due to @rev)",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0041.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0042",
      "@type": "test:TestCase",
      "num": "0042",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "img[@src] test with omitted @about",
      "input": "http://rdfa.info/test-suite/test-cases/0042.html",
      "purpose": "Tests if a @src (in img element) correctly sets the URIref object (with omitted @about)",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0042.sparql",
      "expectedResults": false,
      "hostLanguages": [
        "html4",
        "xhtml1",
        "xml"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0046",
      "@type": "test:TestCase",
      "num": "0046",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@typeof with @rel present, no @href, @resource, or @about",
      "input": "http://rdfa.info/test-suite/test-cases/0046.html",
      "purpose": "Tests @typeof with @rel present, no @href, @resource, or @about",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0046.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1",
        "xml"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0047",
      "@type": "test:TestCase",
      "num": "0047",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@typeof with @rel and @resource present, no @about",
      "input": "http://rdfa.info/test-suite/test-cases/0047.html",
      "purpose": "Tests @typeof with @rel and @resource present, no @about",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0047.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1",
        "xml"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0048",
      "@type": "test:TestCase",
      "num": "0048",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@typeof with @about and @rel present, no @resource",
      "input": "http://rdfa.info/test-suite/test-cases/0048.html",
      "purpose": "Tests @typeof with @about and @rel present, no @resource",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0048.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0049",
      "@type": "test:TestCase",
      "num": "0049",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@typeof with @about, no @rel or @resource",
      "input": "http://rdfa.info/test-suite/test-cases/0049.html",
      "purpose": "Tests @typeof with @about, no @rel or @resource",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0049.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0050",
      "@type": "test:TestCase",
      "num": "0050",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@typeof without anything else",
      "input": "http://rdfa.info/test-suite/test-cases/0050.html",
      "purpose": "Tests @typeof without anything else",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0050.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0051",
      "@type": "test:TestCase",
      "num": "0051",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@typeof with a single @property",
      "input": "http://rdfa.info/test-suite/test-cases/0051.html",
      "purpose": "Tests @typeof with a single @property",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0051.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0052",
      "@type": "test:TestCase",
      "num": "0052",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@typeof with @resource and nothing else",
      "input": "http://rdfa.info/test-suite/test-cases/0052.html",
      "purpose": "Tests to ensure that @typeof does not apply to @resource",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0052.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0053",
      "@type": "test:TestCase",
      "num": "0053",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@typeof with @resource and nothing else, with a subelement",
      "input": "http://rdfa.info/test-suite/test-cases/0053.html",
      "purpose": "Tests to make sure that @typeof does not apply to @resource, but @resource sets the subject for the next triple to be generated",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0053.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0054",
      "@type": "test:TestCase",
      "num": "0054",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "multiple @property",
      "input": "http://rdfa.info/test-suite/test-cases/0054.html",
      "purpose": "Tests multiple @property separated by white spaces",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0054.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0055",
      "@type": "test:TestCase",
      "num": "0055",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "multiple @rel",
      "input": "http://rdfa.info/test-suite/test-cases/0055.html",
      "purpose": "Tests multiple @rel separated by white spaces",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0055.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0056",
      "@type": "test:TestCase",
      "num": "0056",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@typeof applies to @about on same element with hanging rel",
      "input": "http://rdfa.info/test-suite/test-cases/0056.html",
      "purpose": "Tests if @typeof applies to @about on same element with hanging @rel",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0056.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0057",
      "@type": "test:TestCase",
      "num": "0057",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "hanging @rel creates multiple triples",
      "input": "http://rdfa.info/test-suite/test-cases/0057.html",
      "purpose": "Tests if hanging @rel creates multiple triples",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0057.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0058",
      "@type": "test:TestCase",
      "num": "0058",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "hanging @rel creates multiple triples, @typeof permutation; RDFa 1.0 version",
      "input": "http://rdfa.info/test-suite/test-cases/0058.html",
      "purpose": "Tests if hanging @rel creates multiple triples with @typeof permutation",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0058.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0059",
      "@type": "test:TestCase",
      "num": "0059",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "multiple hanging @rels with multiple children",
      "input": "http://rdfa.info/test-suite/test-cases/0059.html",
      "purpose": "Tests multiple hanging @rels with multiple children",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0059.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0060",
      "@type": "test:TestCase",
      "num": "0060",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "UTF-8 conformance",
      "input": "http://rdfa.info/test-suite/test-cases/0060.html",
      "purpose": "Tests conformance with UTF-8 encoding",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0060.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0061",
      "@type": "test:TestCase",
      "num": "0061",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rel in head using reserved, non-prefixed XHTML value",
      "input": "http://rdfa.info/test-suite/test-cases/0061.html",
      "purpose": "Tests @rel in head using reserved, non-prefixed XHTML value",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0061.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0062",
      "@type": "test:TestCase",
      "num": "0062",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rev in head using reserved, non-prefixed XHTML value",
      "input": "http://rdfa.info/test-suite/test-cases/0062.html",
      "purpose": "Tests @rev in head using reserved, non-prefixed XHTML value",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0062.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0063",
      "@type": "test:TestCase",
      "num": "0063",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rel in head using reserved XHTML value and empty-prefix CURIE syntax",
      "input": "http://rdfa.info/test-suite/test-cases/0063.html",
      "purpose": "Tests @rel in head using reserved XHTML value and empty-prefix CURIE syntax",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0063.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0064",
      "@type": "test:TestCase",
      "num": "0064",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@about with safe CURIE",
      "input": "http://rdfa.info/test-suite/test-cases/0064.html",
      "purpose": "Tests if @about generates a proper triple when a safe CURIE is used",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0064.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0065",
      "@type": "test:TestCase",
      "num": "0065",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@rel with safe CURIE",
      "input": "http://rdfa.info/test-suite/test-cases/0065.html",
      "purpose": "Tests if @rel properly connects triples generated when safe CURIEs are used",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0065.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0066",
      "@type": "test:TestCase",
      "num": "0066",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@about with @typeof in the head",
      "input": "http://rdfa.info/test-suite/test-cases/0066.html",
      "purpose": "Test to make sure that @about (with current document) is implied in the head, and the proper triples are generated using @typeof",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0066.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0067",
      "@type": "test:TestCase",
      "num": "0067",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@property in the head",
      "input": "http://rdfa.info/test-suite/test-cases/0067.html",
      "purpose": "Test to make sure that @property in head uses the implied current document as the subject if no other subject is specified",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0067.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0068",
      "@type": "test:TestCase",
      "num": "0068",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Relative URI in @about",
      "input": "http://rdfa.info/test-suite/test-cases/0068.html",
      "purpose": "Tests to ensure that relative URI is resolved correctly when used in @about",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0068.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0069",
      "@type": "test:TestCase",
      "num": "0069",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Relative URI in @href",
      "input": "http://rdfa.info/test-suite/test-cases/0069.html",
      "purpose": "Tests to ensure that relative URI is resolved correctly when used in @href",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0069.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0070",
      "@type": "test:TestCase",
      "num": "0070",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Relative URI in @resource",
      "input": "http://rdfa.info/test-suite/test-cases/0070.html",
      "purpose": "Tests to ensure that relative URI is resolved correctly when used in @resource",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0070.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0071",
      "@type": "test:TestCase",
      "num": "0071",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "No explicit @about",
      "input": "http://rdfa.info/test-suite/test-cases/0071.html",
      "purpose": "Tests to ensure that a triple is generated even if @typeof and @about is not specified anywhere in the document",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0071.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0072",
      "@type": "test:TestCase",
      "num": "0072",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Relative URI in @about (with XHTML base in head)",
      "input": "http://rdfa.info/test-suite/test-cases/0072.html",
      "purpose": "Tests to ensure that relative URIs are resolved correctly when used in @about with XHTML base set in head",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0072.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0073",
      "@type": "test:TestCase",
      "num": "0073",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Relative URI in @resource (with XHTML base in head)",
      "input": "http://rdfa.info/test-suite/test-cases/0073.html",
      "purpose": "Tests to ensure that relative URIs are resolved correctly when used in @resource with XHTML base set in head",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0073.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0074",
      "@type": "test:TestCase",
      "num": "0074",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Relative URI in @href (with XHTML base in head)",
      "input": "http://rdfa.info/test-suite/test-cases/0074.html",
      "purpose": "Tests to ensure that relative URIs are resolved correctly when used in @href with XHTML base set in head",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0074.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0075",
      "@type": "test:TestCase",
      "num": "0075",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Reserved word 'license' in @rel with no explizit @about",
      "input": "http://rdfa.info/test-suite/test-cases/0075.html",
      "purpose": "Tests to ensure that the XHTML+RDFa reserved word 'license' when used in @rel (with no @about) generates the proper triple",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0075.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0076",
      "@type": "test:TestCase",
      "num": "0076",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "All reserved XHTML @rel values",
      "input": "http://rdfa.info/test-suite/test-cases/0076.html",
      "purpose": "Tests to ensure that all reserved XHTML words are supported in @rel",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0076.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0077",
      "@type": "test:TestCase",
      "num": "0077",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "All reserved XHTML @rev values",
      "input": "http://rdfa.info/test-suite/test-cases/0077.html",
      "purpose": "Tests to ensure that all reserved XHTML words are supported in @rev",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0077.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0078",
      "@type": "test:TestCase",
      "num": "0078",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Multiple incomplete triples, RDFa 1.0 version",
      "input": "http://rdfa.info/test-suite/test-cases/0078.html",
      "purpose": "Tests multiple ways of handling incomplete triples; the first two triples should use the same bnode as subject ('merged'). The third should have a separate bNode.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0078.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0079",
      "@type": "test:TestCase",
      "num": "0079",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@resource and @href in completing incomplete triples",
      "input": "http://rdfa.info/test-suite/test-cases/0079.html",
      "purpose": "Tests role of @resource and @href in completing incomplete triples (including their mutual priorities)",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0079.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0080",
      "@type": "test:TestCase",
      "num": "0080",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@about overrides @resource in incomplete triples",
      "input": "http://rdfa.info/test-suite/test-cases/0080.html",
      "purpose": "Tests if @about has a higher priority than @resource in handling incomplete triples",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0080.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0081",
      "@type": "test:TestCase",
      "num": "0081",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "multiple ways of handling incomplete triples (with @rev); RDFa 1.0 version",
      "input": "http://rdfa.info/test-suite/test-cases/0081.html",
      "purpose": "Tests multiple ways of handling incomplete triples, this time with @rev",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0081.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0082",
      "@type": "test:TestCase",
      "num": "0082",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "multiple ways of handling incomplete triples (with @rel and @rev); RDFa 1.0 version",
      "input": "http://rdfa.info/test-suite/test-cases/0082.html",
      "purpose": "Tests multiple ways of handling incomplete triples, this time with both @rel and @rev",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0082.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0083",
      "@type": "test:TestCase",
      "num": "0083",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "multiple ways of handling incomplete triples (merged)",
      "input": "http://rdfa.info/test-suite/test-cases/0083.html",
      "purpose": "Tests multiple ways of handling incomplete triples; the first two triples should use the same bNode as subject ('merged'); the third case should use @about",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0083.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0084",
      "@type": "test:TestCase",
      "num": "0084",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "multiple ways of handling incomplete triples, this time with both @rel and @rev",
      "input": "http://rdfa.info/test-suite/test-cases/0084.html",
      "purpose": "Tests multiple ways of handling incomplete triples, this time with both @rel and @rev. There is an intermediate div that should be ignored by the process",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0084.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0085",
      "@type": "test:TestCase",
      "num": "0085",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@resource and @href in completing incomplete triples",
      "input": "http://rdfa.info/test-suite/test-cases/0085.html",
      "purpose": "Tests the role of @resource and @href in completing incomplete triples (including their mutual priorities), but with an intermediate layer (ie, bNode) added",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0085.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0087",
      "@type": "test:TestCase",
      "num": "0087",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "All reserved XHTML @rel values (with :xxx)",
      "input": "http://rdfa.info/test-suite/test-cases/0087.html",
      "purpose": "Tests to ensure that all reserved XHTML words are supported in @rel (with :xxx)",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0087.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0088",
      "@type": "test:TestCase",
      "num": "0088",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Interpretation of the CURIE \"_:\"",
      "input": "http://rdfa.info/test-suite/test-cases/0088.html",
      "purpose": "Test the interpretation of the CURIE \"_:\"",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0088.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0089",
      "@type": "test:TestCase",
      "num": "0089",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@src sets a new subject (@typeof)",
      "input": "http://rdfa.info/test-suite/test-cases/0089.html",
      "purpose": "Tests to ensure that @src sets a new subject (focuses on @typeof).",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0089.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0090",
      "@type": "test:TestCase",
      "num": "0090",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@src sets a new subject (@rel/@href)",
      "input": "http://rdfa.info/test-suite/test-cases/0090.html",
      "purpose": "Tests to ensure that @src sets a new subject (focuses on @rel/@href).",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0090.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "xhtml1"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0091",
      "@type": "test:TestCase",
      "num": "0091",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Non-reserved, un-prefixed CURIE in @property",
      "input": "http://rdfa.info/test-suite/test-cases/0091.html",
      "purpose": "Tests to ensure that non-reserved, un-prefixed CURIEs, when used in @property, generate triples.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0091.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0093",
      "@type": "test:TestCase",
      "num": "0093",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Tests XMLLiteral content with explicit @datatype (user-data-typed literal)",
      "input": "http://rdfa.info/test-suite/test-cases/0093.html",
      "purpose": "Tests the explicit specification of an RDF XMLLiteral with @datatype using a non-RDF namespace, yielding a user-data-typed literal",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0093.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0099",
      "@type": "test:TestCase",
      "num": "0099",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Preservation of white space in literals",
      "input": "http://rdfa.info/test-suite/test-cases/0099.html",
      "purpose": "Tests the preservation of white space in literals.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0099.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0104",
      "@type": "test:TestCase",
      "num": "0104",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "rdf:value",
      "input": "http://rdfa.info/test-suite/test-cases/0104.html",
      "purpose": "Tests rdf:value with blank nodes to give a value with a unit",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0104.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0106",
      "@type": "test:TestCase",
      "num": "0106",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "chaining with empty value in inner @rel",
      "input": "http://rdfa.info/test-suite/test-cases/0106.html",
      "purpose": "Tests the behavior of triple generation in the case where the inner @rel is defined, but is blank, which halts chaining.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0106.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0107",
      "@type": "test:TestCase",
      "num": "0107",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "no garbage collecting bnodes",
      "input": "http://rdfa.info/test-suite/test-cases/0107.html",
      "purpose": "Checks to make sure that that while we shouldn't garbage collect bnodes no triples are generated.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0107.sparql",
      "expectedResults": false,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0108",
      "@type": "test:TestCase",
      "num": "0108",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "plain literal with datatype=\"\" and xml:lang preservation",
      "input": "http://rdfa.info/test-suite/test-cases/0108.html",
      "purpose": "Checks to make sure that the RDFa parser emits a plain literal when the datatype is specified as \"\" and preserves the xml:lang value. The text, with control characters and whitespace preserved, reads \"Greek\nwhite   space\n\".",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0108.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0109",
      "@type": "test:TestCase",
      "num": "0109",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Tests to ensure @xml:base is ignored",
      "input": "http://rdfa.info/test-suite/test-cases/0109.html",
      "purpose": "Tests to make sure that @xml:base is ignored in XHTML+RDFa 1.0. The input test document is invalid XHTML.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0109.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0110",
      "@type": "test:TestCase",
      "num": "0110",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "bNode generated even though no nested @about exists",
      "input": "http://rdfa.info/test-suite/test-cases/0110.html",
      "purpose": "Tests to make sure that a bNode is generated even though no nested @about exists.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0110.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0111",
      "@type": "test:TestCase",
      "num": "0111",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "two bNodes generated after three levels of nesting",
      "input": "http://rdfa.info/test-suite/test-cases/0111.html",
      "purpose": "Tests to make sure that two bNodes are generated after three levels of nesting and that the last div does not generate a triple.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0111.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0112",
      "@type": "test:TestCase",
      "num": "0112",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "plain literal with datatype=\"\"",
      "input": "http://rdfa.info/test-suite/test-cases/0112.html",
      "purpose": "Checks to make sure that the RDFa parser emits a plain literal when the datatype is specified as \"\".",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0112.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0113",
      "@type": "test:TestCase",
      "num": "0113",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "element with @property and no child nodes generates  empty plain literal",
      "input": "http://rdfa.info/test-suite/test-cases/0113.html",
      "purpose": "Checks to make sure that an element with @property and no child nodes generates empty plain literal.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0113.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0114",
      "@type": "test:TestCase",
      "num": "0114",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Relative URI dot-segment removal",
      "input": "http://rdfa.info/test-suite/test-cases/0114.html",
      "purpose": "Checks to make sure that a relative URI is resolved correctly according to RFC3986, section 5 (even when the relative URI is invalid, in this case).",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0114.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0115",
      "@type": "test:TestCase",
      "num": "0115",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "XML Entities must be supported by RDFa parser",
      "input": "http://rdfa.info/test-suite/test-cases/0115.html",
      "purpose": "Checks to make sure that XML Entities are treated properly by the RDFa parser.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0115.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0117",
      "@type": "test:TestCase",
      "num": "0117",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Fragment identifiers stripped from BASE",
      "input": "http://rdfa.info/test-suite/test-cases/0117.html",
      "purpose": "Checks to make sure that fragment identifiers are stripped from [base] when used to generate triples.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0117.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0118",
      "@type": "test:TestCase",
      "num": "0118",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "empty string \"\" is not equivalent to NULL - @about",
      "input": "http://rdfa.info/test-suite/test-cases/0118.html",
      "purpose": "Checks to make sure that the empty\n  string \"\" isn't considered as NULL in languages such as Javascript when\n  generating triples. This test sets the subject in a chain using @href\n  and then immediately changes the subject using @about and generates a\n  triple. A buggy parser may use the @href subject\n  (http://example.org/javascript.html) instead of the one defined by @about.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0118.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0119",
      "@type": "test:TestCase",
      "num": "0119",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "\"[prefix:]\" CURIE format is valid",
      "input": "http://rdfa.info/test-suite/test-cases/0119.html",
      "purpose": "Checks to make sure that an RDFa processor expands CURIEs having only a prefix and a\n    colon if a prefix is properly defined using xmlns.\n    ",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0119.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0120",
      "@type": "test:TestCase",
      "num": "0120",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "\"[:]\" CURIE format is valid",
      "input": "http://rdfa.info/test-suite/test-cases/0120.html",
      "purpose": "Checks to make sure that an RDFa processor expands CURIEs having only a colon to the\n  default prefix \"http://www.w3.org/1999/test-cases/vocab#\".\n        ",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0120.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0121",
      "@type": "test:TestCase",
      "num": "0121",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "\"[]\" is a valid safe CURIE",
      "input": "http://rdfa.info/test-suite/test-cases/0121.html",
      "purpose": "Checks to make sure RDFa processors resolve the empty CURIE correctly. Note that this is not valid HTML due to recursive <p> elements.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0121.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0122",
      "@type": "test:TestCase",
      "num": "0122",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "resource=\"[]\" does not set the object",
      "input": "http://rdfa.info/test-suite/test-cases/0122.html",
      "purpose": "Checks to make sure that resource=\"[]\" does not set the object since RDFa does not allow non-prefixed CURIEs.\n        ",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0122.sparql",
      "expectedResults": false,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0126",
      "@type": "test:TestCase",
      "num": "0126",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Multiple @typeof values",
      "input": "http://rdfa.info/test-suite/test-cases/0126.html",
      "purpose": "Checks to ensure that multiple (white space separated) values in @typeof trigger multiple rdf:type triples.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0126.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0131",
      "@type": "test:TestCase",
      "num": "0131",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Whitespace alternatives in attributes",
      "input": "http://rdfa.info/test-suite/test-cases/0131.html",
      "purpose": "Ensures that multiple whitespace alternatives in attributes are allowed.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0131.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0134",
      "@type": "test:TestCase",
      "num": "0134",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Uppercase reserved words",
      "input": "http://rdfa.info/test-suite/test-cases/0134.html",
      "purpose": "Ensures that mixed-case reserved words generate triples.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0134.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0140",
      "@type": "test:TestCase",
      "num": "0140",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Blank nodes identifiers are not allowed as predicates",
      "input": "http://rdfa.info/test-suite/test-cases/0140.html",
      "purpose": "The RDF data model does not allow blank node identifiers in predicates. This test ensures that RDFa processors do not emit invalid triples.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0140.sparql",
      "expectedResults": false,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0147",
      "@type": "test:TestCase",
      "num": "0147",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "xmlns prefix 'xmlzzz' (reserved)",
      "input": "http://rdfa.info/test-suite/test-cases/0147.html",
      "purpose": "Ensures that RDFa processors allow the prefix 'xmlzzz', even though it is a reserved prefix in XML.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0147.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0172",
      "@type": "test:TestCase",
      "num": "0172",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@datatype=\"\" generates plain literal in presence of child nodes",
      "input": "http://rdfa.info/test-suite/test-cases/0172.html",
      "purpose": "Checks to ensure that when @datatype=\"\" is used on an element that contains child nodes, that the literal that is generated is a plain literal.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0172.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0173",
      "@type": "test:TestCase",
      "num": "0173",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@xml:lang=\"\" clears language setting",
      "input": "http://rdfa.info/test-suite/test-cases/0173.html",
      "purpose": "Checks to ensure that when @xml:lang=\"\" is used that any parent element language setting is cleared and a language-less literal is generated.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0173.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0174",
      "@type": "test:TestCase",
      "num": "0174",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Support single character prefix in CURIEs",
      "input": "http://rdfa.info/test-suite/test-cases/0174.html",
      "purpose": "Checks to ensure that the RDFa processor correctly processes single character prefixes when processing CURIEs.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0174.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0175",
      "@type": "test:TestCase",
      "num": "0175",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "IRI for @property is allowed",
      "input": "http://rdfa.info/test-suite/test-cases/0175.html",
      "purpose": "Checks to make sure that a URI may be used as a @property value",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0175.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0176",
      "@type": "test:TestCase",
      "num": "0176",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "IRI for @rel and @rev is allowed",
      "input": "http://rdfa.info/test-suite/test-cases/0176.html",
      "purpose": "Checks to make sure that a URI may be used as @rel and @rev values",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0176.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0177",
      "@type": "test:TestCase",
      "num": "0177",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Test @prefix",
      "input": "http://rdfa.info/test-suite/test-cases/0177.html",
      "purpose": "Checks to make sure @prefix with a single entry creates a URI mapping",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0177.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0178",
      "@type": "test:TestCase",
      "num": "0178",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Test @prefix with multiple mappings",
      "input": "http://rdfa.info/test-suite/test-cases/0178.html",
      "purpose": "Checks to make sure @prefix with multiple entires creates multiple URI mappings",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0178.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0179",
      "@type": "test:TestCase",
      "num": "0179",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Test @prefix vs @xmlns priority",
      "input": "http://rdfa.info/test-suite/test-cases/0179.html",
      "purpose": "Checks to make sure @prefix has a higher priority than @xmlns",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0179.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0180",
      "@type": "test:TestCase",
      "num": "0180",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Test @prefix with empty mapping",
      "input": "http://rdfa.info/test-suite/test-cases/0180.html",
      "purpose": "Checks to make sure @prefix with empty prefix does not create a mapping.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0180.sparql",
      "expectedResults": false,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0181",
      "@type": "test:TestCase",
      "num": "0181",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Test default XHTML vocabulary",
      "input": "http://rdfa.info/test-suite/test-cases/0181.html",
      "purpose": "Checks Tests a CURIE with default namespace uses XHTML Vocabulary namespace.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0181.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0182",
      "@type": "test:TestCase",
      "num": "0182",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Test prefix locality",
      "input": "http://rdfa.info/test-suite/test-cases/0182.html",
      "purpose": "Checks to be sure that prefixes are defined within the element hierarchy.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0182.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0183",
      "@type": "test:TestCase",
      "num": "0183",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Test @xmlns redefines @prefix",
      "input": "http://rdfa.info/test-suite/test-cases/0183.html",
      "purpose": "A new @xmlns definition should override a previous @prefix definition at this element.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0183.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0186",
      "@type": "test:TestCase",
      "num": "0186",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@vocab after subject declaration",
      "input": "http://rdfa.info/test-suite/test-cases/0186.html",
      "purpose": "Check that @vocab establishes a new default vocabulary when declared on the same element as a subject declaration via @about.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0186.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0187",
      "@type": "test:TestCase",
      "num": "0187",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@vocab redefinition",
      "input": "http://rdfa.info/test-suite/test-cases/0187.html",
      "purpose": "Check that a more deeply nested @vocab attribute overloads a previous @vocab definition.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0187.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0188",
      "@type": "test:TestCase",
      "num": "0188",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@vocab only affects predicates",
      "input": "http://rdfa.info/test-suite/test-cases/0188.html",
      "purpose": "Check that @vocab definitions on parent elements only affect predicate establishment.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0188.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0189",
      "@type": "test:TestCase",
      "num": "0189",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@vocab overrides default term",
      "input": "http://rdfa.info/test-suite/test-cases/0189.html",
      "purpose": "\n    Check that @vocab changes a default term from XHV. Lookup checks default vocabulary before\n    local term mappings.\n   ",
      "reference": "7.4.3 General Use of Terms in Attributes",
      "results": "http://rdfa.info/test-suite/test-cases/0189.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0190",
      "@type": "test:TestCase",
      "num": "0190",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Test term case insensitivity",
      "input": "http://rdfa.info/test-suite/test-cases/0190.html",
      "purpose": "Check to ensure a mixed case term matches a case insensitive definition",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0190.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0196",
      "@type": "test:TestCase",
      "num": "0196",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Test process explicit XMLLiteral",
      "input": "http://rdfa.info/test-suite/test-cases/0196.html",
      "purpose": "XMLLiteral must be explicitly specified, otherwise a normal untyped literal is created",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0196.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0197",
      "@type": "test:TestCase",
      "num": "0197",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Test TERMorCURIEorAbsURI requires an absolute URI",
      "input": "http://rdfa.info/test-suite/test-cases/0197.html",
      "purpose": "TERMorCURIEorAbsURI requires an absolute URI",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0197.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0198",
      "@type": "test:TestCase",
      "num": "0198",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "datatype XMLLiteral with other embedded RDFa",
      "input": "http://rdfa.info/test-suite/test-cases/0198.html",
      "purpose": "Checks to ensure that when datatype is the default the parser generates triples for embedded content.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0198.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0201",
      "@type": "test:TestCase",
      "num": "0201",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Expressing an attribute using @property",
      "input": "http://rdfa.info/test-suite/test-cases/0201.html",
      "purpose": "Tests @property to establish the predicate; literal object is in the content of the element.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0201.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "svg",
        "svgtiny1.2"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0202",
      "@type": "test:TestCase",
      "num": "0202",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Tests to ensure @xml:base used in SVG",
      "input": "http://rdfa.info/test-suite/test-cases/0202.html",
      "purpose": "Tests to make sure that @xml:base is used in SVG+RDFa.",
      "reference": "http://www.w3.org/QA/2008/12/rdfa_and_svg_tiny_and_the_rdfa.html",
      "results": "http://rdfa.info/test-suite/test-cases/0202.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "svg",
        "svgtiny1.2"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0203",
      "@type": "test:TestCase",
      "num": "0203",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Tests to ensure @xml:base used in non-root elements in SVG",
      "input": "http://rdfa.info/test-suite/test-cases/0203.html",
      "purpose": "Tests to make sure that @xml:base is used in non-root elements in SVG+RDFa.",
      "reference": "http://www.w3.org/QA/2008/12/rdfa_and_svg_tiny_and_the_rdfa.html",
      "results": "http://rdfa.info/test-suite/test-cases/0203.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "svg",
        "svgtiny1.2"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0206",
      "@type": "test:TestCase",
      "num": "0206",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Usage of Initial Context",
      "input": "http://rdfa.info/test-suite/test-cases/0206.html",
      "purpose": "Tests whether the default RDFa 1.1 context (which contains prefix definitions, among others, to the Semantic Web Standard vocabularies) is properly handled.",
      "reference": "N.A.",
      "results": "http://rdfa.info/test-suite/test-cases/0206.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0207",
      "@type": "test:TestCase",
      "num": "0207",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Vevent using @typeof",
      "input": "http://rdfa.info/test-suite/test-cases/0207.html",
      "purpose": "Tests Vevent using @typeof (inlc. dtstart, dtend, etc.)",
      "reference": "N.A.",
      "results": "http://rdfa.info/test-suite/test-cases/0207.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0209",
      "@type": "test:TestCase",
      "num": "0209",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@prefix should be ignored with version set to 1.0",
      "input": "http://rdfa.info/test-suite/test-cases/0209.html",
      "purpose": "Tests whether the @prefix attribute is ignored if version is explicitly set to 1.0",
      "reference": "N.A.",
      "results": "http://rdfa.info/test-suite/test-cases/0209.sparql",
      "expectedResults": false,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0210",
      "@type": "test:TestCase",
      "num": "0210",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@prefix should be ignored with version set to 1.0, and @xmlns should prevail",
      "input": "http://rdfa.info/test-suite/test-cases/0210.html",
      "purpose": "Tests whether the @prefix attribute is ignored and @xmlns is used instead if version is explicitly set to 1.0",
      "reference": "N.A.",
      "results": "http://rdfa.info/test-suite/test-cases/0210.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0211",
      "@type": "test:TestCase",
      "num": "0211",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@vocab should be ignored with version set to 1.0",
      "input": "http://rdfa.info/test-suite/test-cases/0211.html",
      "purpose": "Tests whether the @vocab attribute is ignored if version is explicitly set to 1.0",
      "reference": "N.A.",
      "results": "http://rdfa.info/test-suite/test-cases/0211.sparql",
      "expectedResults": false,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0212",
      "@type": "test:TestCase",
      "num": "0212",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Datatype generation for a literal with XML content, version 1.0",
      "input": "http://rdfa.info/test-suite/test-cases/0212.html",
      "purpose": "In RDFa 1.0, if a literal contains XML elements, and no explicit datatype is set, the result is XMLLiteral",
      "reference": "N.A.",
      "results": "http://rdfa.info/test-suite/test-cases/0212.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0213",
      "@type": "test:TestCase",
      "num": "0213",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Datatype generation for a literal with XML content, version 1.1",
      "input": "http://rdfa.info/test-suite/test-cases/0213.html",
      "purpose": "In RDFa 1.1, even if a literal contains XML elements, and no explicit datatype is set, the result is plain literal",
      "reference": "N.A.",
      "results": "http://rdfa.info/test-suite/test-cases/0213.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0214",
      "@type": "test:TestCase",
      "num": "0214",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Root element has implicit @about=\"\"",
      "input": "http://rdfa.info/test-suite/test-cases/0214.html",
      "purpose": "All documents have an implicit @about=\"\"",
      "reference": "N.A.",
      "results": "http://rdfa.info/test-suite/test-cases/0214.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0215",
      "@type": "test:TestCase",
      "num": "0215",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Character encoding detection with large header",
      "input": "http://rdfa.info/test-suite/test-cases/0215.html",
      "purpose": "Character encoding should work even in view of a large set of characters as attributes in the header, ie, when content sniffing may not work to establish encoding.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0215.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0216",
      "@type": "test:TestCase",
      "num": "0216",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Proper character encoding detection in spite of large headers",
      "input": "http://rdfa.info/test-suite/test-cases/0216.html",
      "purpose": "Character encoding should work even in view of a large set of characters as attributes in the header, ie, when content sniffing may not work to establish encoding.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0216.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0217",
      "@type": "test:TestCase",
      "num": "0217",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@vocab causes rdfa:usesVocabulary triple to be added",
      "input": "http://rdfa.info/test-suite/test-cases/0217.html",
      "purpose": "When encountering @vocab, a processor generates a triple with the base URI, rdfa:usesVocabulary and the IRI of the added vocabulary.",
      "reference": "7.5 step 2",
      "results": "http://rdfa.info/test-suite/test-cases/0217.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0218",
      "@type": "test:TestCase",
      "num": "0218",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@inlist to create empty list",
      "input": "http://rdfa.info/test-suite/test-cases/0218.html",
      "purpose": "@inlist on @rel with no incomplete triples creates an empty list.",
      "reference": "7.5 step 14",
      "results": "http://rdfa.info/test-suite/test-cases/0218.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0219",
      "@type": "test:TestCase",
      "num": "0219",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@inlist with literal",
      "input": "http://rdfa.info/test-suite/test-cases/0219.html",
      "purpose": "@inlist with @property creates a list having a literal as a single element.",
      "reference": "7.5 step 11",
      "results": "http://rdfa.info/test-suite/test-cases/0219.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0220",
      "@type": "test:TestCase",
      "num": "0220",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@inlist with IRI",
      "input": "http://rdfa.info/test-suite/test-cases/0220.html",
      "purpose": "@inlist with @rel and @href creates a list having an IRI as a single element.",
      "reference": "7.5 step 9",
      "results": "http://rdfa.info/test-suite/test-cases/0220.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0221",
      "@type": "test:TestCase",
      "num": "0221",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@inlist with hetrogenious membership",
      "input": "http://rdfa.info/test-suite/test-cases/0221.html",
      "purpose": "@inlist with @rel and @property creates a list with both IRI and Literal elements.",
      "reference": "7.5 Step 11",
      "results": "http://rdfa.info/test-suite/test-cases/0221.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0222",
      "@type": "test:TestCase",
      "num": "0222",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@inlist with multi-level elements",
      "input": "http://rdfa.info/test-suite/test-cases/0222.html",
      "purpose": "@inlist with @property at different levels of descendence creates single list.",
      "reference": "7.5 Step 11",
      "results": "http://rdfa.info/test-suite/test-cases/0222.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0223",
      "@type": "test:TestCase",
      "num": "0223",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@inlist with non-list property",
      "input": "http://rdfa.info/test-suite/test-cases/0223.html",
      "purpose": "Use of predicate with @inlist and without @inlist creates both list and non-list triples.",
      "reference": "7.5 Step 9",
      "results": "http://rdfa.info/test-suite/test-cases/0223.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0224",
      "@type": "test:TestCase",
      "num": "0224",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@inlist hanging @rel",
      "input": "http://rdfa.info/test-suite/test-cases/0224.html",
      "purpose": "Use of @rel and @inlist with decendent IRI elements creates list",
      "reference": "7.5 Step 11",
      "results": "http://rdfa.info/test-suite/test-cases/0224.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0225",
      "@type": "test:TestCase",
      "num": "0225",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@inlist on different elements with same subject",
      "input": "http://rdfa.info/test-suite/test-cases/0225.html",
      "purpose": "@inlist with same property and subject on different elements creates multiple lists",
      "reference": "7.5 Step 11",
      "results": "http://rdfa.info/test-suite/test-cases/0225.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0226",
      "@type": "test:TestCase",
      "num": "0226",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "confusion between multiple implicit collections (resource)",
      "input": "http://rdfa.info/test-suite/test-cases/0226.html",
      "purpose": "Use of @inlist with implicit subject uses different list",
      "reference": "7.5 Step 8",
      "results": "http://rdfa.info/test-suite/test-cases/0226.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0227",
      "@type": "test:TestCase",
      "num": "0227",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "confusion between multiple implicit collections (about)",
      "input": "http://rdfa.info/test-suite/test-cases/0227.html",
      "purpose": "Use of @inlist with implicit subject uses different list",
      "reference": "7.5 Step 9",
      "results": "http://rdfa.info/test-suite/test-cases/0227.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0228",
      "@type": "test:TestCase",
      "num": "0228",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "1.1 alternate for test 0040: @rev - @src/@resource test",
      "input": "http://rdfa.info/test-suite/test-cases/0228.html",
      "purpose": "@src is a lower priority than @resource",
      "reference": "7.5 Step 6",
      "results": "http://rdfa.info/test-suite/test-cases/0228.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0229",
      "@type": "test:TestCase",
      "num": "0229",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "img[@src] test with omitted @about",
      "input": "http://rdfa.info/test-suite/test-cases/0229.html",
      "purpose": "Tests if a @src (in img element) does not set the URIref object (with omitted @about) -- from 0042",
      "reference": "7.5 Step 6",
      "results": "http://rdfa.info/test-suite/test-cases/0229.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0230",
      "@type": "test:TestCase",
      "num": "0230",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@src does not set a new subject (@rel/@href)",
      "input": "http://rdfa.info/test-suite/test-cases/0230.html",
      "purpose": "Tests to ensure that @src does not set a new subject (oposite of 0090 for 1.0).",
      "reference": "7.5 Step 6",
      "results": "http://rdfa.info/test-suite/test-cases/0230.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0231",
      "@type": "test:TestCase",
      "num": "0231",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Set image license information",
      "input": "http://rdfa.info/test-suite/test-cases/0231.html",
      "purpose": "Tests new behavior of @src in 1.1",
      "reference": "7.5 Step 6",
      "results": "http://rdfa.info/test-suite/test-cases/0231.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0232",
      "@type": "test:TestCase",
      "num": "0232",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@typeof with @rel present, no @href, @resource, or @about (1.1 behavior of 0046);",
      "input": "http://rdfa.info/test-suite/test-cases/0232.html",
      "purpose": "Tests @typeof with @rel present, no @href, @resource, or @about creates a BNode object",
      "reference": "7.5 Step 6",
      "results": "http://rdfa.info/test-suite/test-cases/0232.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0233",
      "@type": "test:TestCase",
      "num": "0233",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@typeof with @rel and @resource present, no @about (1.1 behavior of 0047)",
      "input": "http://rdfa.info/test-suite/test-cases/0233.html",
      "purpose": "Tests @typeof with @rel and @resource present, no @about adds type to object",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0233.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0234",
      "@type": "test:TestCase",
      "num": "0234",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "All defined HTML link relation values",
      "input": "http://rdfa.info/test-suite/test-cases/0234.html",
      "purpose": "Tests to ensure that all defined linked relations expand",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0234.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0235",
      "@type": "test:TestCase",
      "num": "0235",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "rdfagraph='processor' does not generate standard triples",
      "input": "http://rdfa.info/test-suite/test-cases/0235.html",
      "purpose": "Setting rdfagraph query parameter to 'processor' does not output standard triples",
      "queryParam": "rdfagraph=processor",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0235.sparql",
      "expectedResults": false,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0236",
      "@type": "test:TestCase",
      "num": "0236",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "rdfagraph='processor' with a markup error generates rdfa:Error",
      "input": "http://rdfa.info/test-suite/test-cases/0236.html",
      "purpose": "Setting rdfagraph query parameter to 'processor' generates an rdf:Error",
      "queryParam": "rdfagraph=processor",
      "reference": "7.6 Processor Status",
      "results": "http://rdfa.info/test-suite/test-cases/0236.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "svg",
        "xhtml1",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0237",
      "@type": "test:TestCase",
      "num": "0237",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "rdfagraph='processor' with invalid SafeCURIE generates rdfa:Warning",
      "input": "http://rdfa.info/test-suite/test-cases/0237.html",
      "purpose": "\n      Setting rdfagraph query parameter to 'processor' generates an rdf:Warning when given\n      a SafeCURIE with an invalid prefix.\n   ",
      "queryParam": "rdfagraph=processor",
      "reference": "7.6 Processor Status and 7.4.2 General Use of CURIEs in Attributes",
      "results": "http://rdfa.info/test-suite/test-cases/0237.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0238",
      "@type": "test:TestCase",
      "num": "0238",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "rdfagraph='processor' with missing Term definition generates rdfa:Warning",
      "input": "http://rdfa.info/test-suite/test-cases/0238.html",
      "purpose": "\n      Setting rdfagraph query parameter to 'processor' generates an rdf:Warning when given\n      a missing Term definition.\n   ",
      "queryParam": "rdfagraph=processor",
      "reference": "7.6 Processor Status and 7.4.3 General Use of Terms in Attributes",
      "results": "http://rdfa.info/test-suite/test-cases/0238.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0239",
      "@type": "test:TestCase",
      "num": "0239",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "rdfagraph='processor' with undefined prefix generates rdfa:Warning",
      "input": "http://rdfa.info/test-suite/test-cases/0239.html",
      "purpose": "\n      Setting rdfagraph query parameter to 'processor' generates an rdf:Warning when given\n      a SafeCURIE with an undefined prefix.\n   ",
      "queryParam": "rdfagraph=processor",
      "reference": "7.6 Processor Status and 7.4.2 General Use of CURIEs in Attributes",
      "results": "http://rdfa.info/test-suite/test-cases/0239.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0240",
      "@type": "test:TestCase",
      "num": "0240",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "vocab_expansion='true' expands sub-property",
      "input": "http://rdfa.info/test-suite/test-cases/0240.html",
      "purpose": "\n      A property having an rdfs:subPropertyOf relationship defined in an in-use vocabulary causes\n      triples to be added to the referenced property.\n   ",
      "queryParam": "vocab_expansion=true",
      "reference": "10.1.1 RDFa Vocabulary Entailment",
      "results": "http://rdfa.info/test-suite/test-cases/0240.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1-vocab"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0241",
      "@type": "test:TestCase",
      "num": "0241",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "vocab_expansion='true' expands equivalent-property",
      "input": "http://rdfa.info/test-suite/test-cases/0241.html",
      "purpose": "\n      A property having an owl:equivalentProperty relationship defined in an in-use vocabulary causes\n      triples to be added to the referenced property.\n   ",
      "queryParam": "vocab_expansion=true",
      "reference": "10.1.1 RDFa Vocabulary Entailment",
      "results": "http://rdfa.info/test-suite/test-cases/0241.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1-vocab"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0242",
      "@type": "test:TestCase",
      "num": "0242",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "vocab_expansion='true' expands referenced equivalent-property",
      "input": "http://rdfa.info/test-suite/test-cases/0242.html",
      "purpose": "\n      A property which is the target of another property having an owl:equivalentProperty relationship defined in an\n      in-use vocabulary causes triples to be added to the defining property.\n   ",
      "queryParam": "vocab_expansion=true",
      "reference": "10.1.1 RDFa Vocabulary Entailment",
      "results": "http://rdfa.info/test-suite/test-cases/0242.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1-vocab"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0243",
      "@type": "test:TestCase",
      "num": "0243",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "vocab_expansion='true' expands sub-class",
      "input": "http://rdfa.info/test-suite/test-cases/0243.html",
      "purpose": "\n      A property having an rdfs:subClassOf relationship defined in an in-use vocabulary causes\n      triples to be added to the referenced class.\n   ",
      "queryParam": "vocab_expansion=true",
      "reference": "10.1.1 RDFa Vocabulary Entailment",
      "results": "http://rdfa.info/test-suite/test-cases/0243.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1-vocab"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0244",
      "@type": "test:TestCase",
      "num": "0244",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "vocab_expansion='true' expands equivalent-class",
      "input": "http://rdfa.info/test-suite/test-cases/0244.html",
      "purpose": "\n      A class having an owl:equivalentClass relationship defined in an in-use vocabulary causes\n      triples to be added to the referenced class.\n   ",
      "queryParam": "vocab_expansion=true",
      "reference": "10.1.1 RDFa Vocabulary Entailment",
      "results": "http://rdfa.info/test-suite/test-cases/0244.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1-vocab"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0245",
      "@type": "test:TestCase",
      "num": "0245",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "vocab_expansion='true' expands referenced equivalent-class",
      "input": "http://rdfa.info/test-suite/test-cases/0245.html",
      "purpose": "\n      A class which is the target of another class having an owl:equivalentClass relationship defined in an\n      in-use vocabulary causes triples to be added to the defining class.\n   ",
      "queryParam": "vocab_expansion=true",
      "reference": "10.1.1 RDFa Vocabulary Entailment",
      "results": "http://rdfa.info/test-suite/test-cases/0245.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1-vocab"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0246",
      "@type": "test:TestCase",
      "num": "0246",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "hanging @rel creates multiple triples, @typeof permutation; RDFa 1.1 version",
      "input": "http://rdfa.info/test-suite/test-cases/0246.html",
      "purpose": "Tests if hanging @rel creates multiple triples with @typeof permutation",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0246.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0247",
      "@type": "test:TestCase",
      "num": "0247",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Multiple incomplete triples, RDFa 1.1version",
      "input": "http://rdfa.info/test-suite/test-cases/0247.html",
      "purpose": "Tests multiple ways of handling incomplete triples; the first two triples should use the same bnode as subject ('merged'). The third should have a separate bNode.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0247.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0248",
      "@type": "test:TestCase",
      "num": "0248",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "multiple ways of handling incomplete triples (with @rev); RDFa 1.1 version",
      "input": "http://rdfa.info/test-suite/test-cases/0248.html",
      "purpose": "Tests multiple ways of handling incomplete triples, this time with @rev",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0248.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0249",
      "@type": "test:TestCase",
      "num": "0249",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "multiple ways of handling incomplete triples (with @rel and @rev); RDFa 1.1 version",
      "input": "http://rdfa.info/test-suite/test-cases/0249.html",
      "purpose": "Tests multiple ways of handling incomplete triples, this time with both @rel and @rev",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0249.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0250",
      "@type": "test:TestCase",
      "num": "0250",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Checking the right behaviour of @typeof with @about, in presence of @property",
      "input": "http://rdfa.info/test-suite/test-cases/0250.html",
      "purpose": "Tests that @typeof is clearly bound to @about, and @property therefore creates a Literal object",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0250.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0251",
      "@type": "test:TestCase",
      "num": "0251",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "lang",
      "input": "http://rdfa.info/test-suite/test-cases/0251.html",
      "purpose": "Tests lang",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0251.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0252",
      "@type": "test:TestCase",
      "num": "0252",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "lang inheritance",
      "input": "http://rdfa.info/test-suite/test-cases/0252.html",
      "purpose": "Tests lang inheritance",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0252.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0253",
      "@type": "test:TestCase",
      "num": "0253",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "plain literal with datatype=\"\" and lang preservation",
      "input": "http://rdfa.info/test-suite/test-cases/0253.html",
      "purpose": "Checks to make sure that the RDFa parser emits a plain literal when the datatype is specified as \"\" and preserves the xml:lang value. The text, with control characters and whitespace preserved, reads \"Greek\nwhite   space\n\".",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0253.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0254",
      "@type": "test:TestCase",
      "num": "0254",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@datatype=\"\" generates plain literal in presence of child nodes",
      "input": "http://rdfa.info/test-suite/test-cases/0254.html",
      "purpose": "Checks to ensure that when @datatype=\"\" is used on an element that contains child nodes, that the literal that is generated is a plain literal.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0254.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0255",
      "@type": "test:TestCase",
      "num": "0255",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "lang=\"\" clears language setting",
      "input": "http://rdfa.info/test-suite/test-cases/0255.html",
      "purpose": "Checks to ensure that when lang=\"\" is used that any parent element language setting is cleared and a language-less literal is generated.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0255.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0256",
      "@type": "test:TestCase",
      "num": "0256",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "lang and xml:lang on the same element",
      "input": "http://rdfa.info/test-suite/test-cases/0256.html",
      "purpose": "Tests @xml:lang and @lang on the same element with different values; @xml:lang should prevail.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0256.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0257",
      "@type": "test:TestCase",
      "num": "0257",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "element with @property and no child nodes generates  empty plain literal (HTML5 version of 0113)",
      "input": "http://rdfa.info/test-suite/test-cases/0257.html",
      "purpose": "Checks to make sure that an element with @property and no child nodes generates empty plain literal.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0257.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0258",
      "@type": "test:TestCase",
      "num": "0258",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "The underscore character is not allowed in xmlns",
      "input": "http://rdfa.info/test-suite/test-cases/0258.html",
      "purpose": "Ensures that a prefix cannot start with an underscore character when specified using xmlns or prefix.",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0258.sparql",
      "expectedResults": false,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0259",
      "@type": "test:TestCase",
      "num": "0259",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "XML+RDFa Initial Context",
      "input": "http://rdfa.info/test-suite/test-cases/0259.html",
      "purpose": "All processors must load the RDFa Core Initial Context.",
      "reference": "4.3 XML+RDFa Document Conformance",
      "results": "http://rdfa.info/test-suite/test-cases/0259.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0260",
      "@type": "test:TestCase",
      "num": "0260",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "XHTML+RDFa Initial Context",
      "input": "http://rdfa.info/test-suite/test-cases/0260.html",
      "purpose": "XHTML+RDFa initial context.",
      "reference": "XHTML+RDFa 1.1 Section 3. Additional RDFa Processing Rules",
      "results": "http://rdfa.info/test-suite/test-cases/0260.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "xhtml1"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0261",
      "@type": "test:TestCase",
      "num": "0261",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "White space preservation in XMLLiteral",
      "input": "http://rdfa.info/test-suite/test-cases/0261.html",
      "purpose": "Whitespace must be maintained in an XMLLiteral, too",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0261.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0262",
      "@type": "test:TestCase",
      "num": "0262",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Predicate establishment with @property, with white spaces before and after the attribute value",
      "input": "http://rdfa.info/test-suite/test-cases/0262.html",
      "purpose": "Tests @property to establish the predicate; literal object is in the content of the element. There are extra whitespaces before and after the property attribute value which should be ignored",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0262.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0263",
      "@type": "test:TestCase",
      "num": "0263",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@property appearing on the html element yields the base as the subject",
      "input": "http://rdfa.info/test-suite/test-cases/0263.html",
      "purpose": "@property appearing on the html element without @content or @datatype yields the base as the subject",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0263.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0264",
      "@type": "test:TestCase",
      "num": "0264",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@property appearing on the head element gets the subject from <html>, ie, parent",
      "input": "http://rdfa.info/test-suite/test-cases/0264.html",
      "purpose": "@property appearing on the head element gets the subject from <html>, ie, parent",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0264.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0265",
      "@type": "test:TestCase",
      "num": "0265",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@property appearing on the head element gets the subject from <html>, ie, parent",
      "input": "http://rdfa.info/test-suite/test-cases/0265.html",
      "purpose": "@property appearing on the head element gets the subject from <html>, ie, parent; in this case the parent subject is explicitly set via @about",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0265.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0266",
      "@type": "test:TestCase",
      "num": "0266",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@property without @content or @datatype, typed object set by @href and @typeof",
      "input": "http://rdfa.info/test-suite/test-cases/0266.html",
      "purpose": "@property without @content or @datatype, typed object set by @href and @typeof",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0266.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0267",
      "@type": "test:TestCase",
      "num": "0267",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@property without @content or @datatype, typed object set by @resource and @typeof",
      "input": "http://rdfa.info/test-suite/test-cases/0267.html",
      "purpose": "@property without @content or @datatype, typed object set by @resource and @typeof",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0267.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0268",
      "@type": "test:TestCase",
      "num": "0268",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@property without @content or @datatype, typed object set by @src and @typeof",
      "input": "http://rdfa.info/test-suite/test-cases/0268.html",
      "purpose": "@property without @content or @datatype, typed object set by @src and @typeof",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0268.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0269",
      "@type": "test:TestCase",
      "num": "0269",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@property appearing on the html element yields the base as the subject, also with @content",
      "input": "http://rdfa.info/test-suite/test-cases/0269.html",
      "purpose": "@property appearing on the html element without @content or @datatype yields the base as the subject, also with @content",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0269.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0271",
      "@type": "test:TestCase",
      "num": "0271",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Use of @property in HEAD with explicit parent subject via @about",
      "input": "http://rdfa.info/test-suite/test-cases/0271.html",
      "purpose": "@property appearing on the head element gets the subject from parent, also with @content and explicit @about at the top",
      "reference": "",
      "results": "http://rdfa.info/test-suite/test-cases/0271.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0272",
      "@type": "test:TestCase",
      "num": "0272",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "time element with @datetime an xsd:date",
      "input": "http://rdfa.info/test-suite/test-cases/0272.html",
      "purpose": "The @datetime attribute is used when generating output with valid xsd:date.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0272.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0273",
      "@type": "test:TestCase",
      "num": "0273",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "time element with @datetime an xsd:time",
      "input": "http://rdfa.info/test-suite/test-cases/0273.html",
      "purpose": "The @datetime attribute is used when generating output with valid xsd:time.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0273.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0274",
      "@type": "test:TestCase",
      "num": "0274",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "time element with @datetime an xsd:dateTime",
      "input": "http://rdfa.info/test-suite/test-cases/0274.html",
      "purpose": "The @datetime attribute is used when generating output with valid xsd:dateTime.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0274.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0275",
      "@type": "test:TestCase",
      "num": "0275",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "time element with value an xsd:date",
      "input": "http://rdfa.info/test-suite/test-cases/0275.html",
      "purpose": "The time element value is used when generating output with valid xsd:date.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0275.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0276",
      "@type": "test:TestCase",
      "num": "0276",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "time element with value an xsd:time",
      "input": "http://rdfa.info/test-suite/test-cases/0276.html",
      "purpose": "The time element value is used when generating output with valid xsd:time.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0276.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0277",
      "@type": "test:TestCase",
      "num": "0277",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "time element with value an xsd:dateTime",
      "input": "http://rdfa.info/test-suite/test-cases/0277.html",
      "purpose": "The time element value is used when generating output with valid xsd:dateTime.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0277.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0278",
      "@type": "test:TestCase",
      "num": "0278",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@datetime overrides @content",
      "input": "http://rdfa.info/test-suite/test-cases/0278.html",
      "purpose": "The @datetime attribute must be utilized when generating output, overriding any value expressed using the @content attribute.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0278.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0279",
      "@type": "test:TestCase",
      "num": "0279",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@datetype used with @datetime overrides default datatype",
      "input": "http://rdfa.info/test-suite/test-cases/0279.html",
      "purpose": "If @datatype is specified, it must override the automatic datatype.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0279.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0280",
      "@type": "test:TestCase",
      "num": "0280",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "time element with @datetime an xsd:duration",
      "input": "http://rdfa.info/test-suite/test-cases/0280.html",
      "purpose": "The @datetime attribute is used when generating output with valid xsd:duration.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0280.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0281",
      "@type": "test:TestCase",
      "num": "0281",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "time element with @datetime an xsd:gYear",
      "input": "http://rdfa.info/test-suite/test-cases/0281.html",
      "purpose": "The @datetime attribute is used when generating output with valid xsd:gYear.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0281.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0282",
      "@type": "test:TestCase",
      "num": "0282",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "time element with @datetime an xsd:gYearMonth",
      "input": "http://rdfa.info/test-suite/test-cases/0282.html",
      "purpose": "The @datetime attribute is used when generating output with valid xsd:gYearMonth.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0282.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0283",
      "@type": "test:TestCase",
      "num": "0283",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "time element with @datetime an invalid datatype generates plain literal",
      "input": "http://rdfa.info/test-suite/test-cases/0283.html",
      "purpose": "If the lexical scope of @datetime does not exactly match a known datatype a plain literal is generated.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0283.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0284",
      "@type": "test:TestCase",
      "num": "0284",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@data is an IRI attribute",
      "input": "http://rdfa.info/test-suite/test-cases/0284.html",
      "purpose": "The @data attribute generates an IRI.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0284.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0285",
      "@type": "test:TestCase",
      "num": "0285",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "time element with @datetime an invalid datatype and in scope @lang generates plain literal with language",
      "input": "http://rdfa.info/test-suite/test-cases/0285.html",
      "purpose": "If no @datatype is specified and the value does not match a xsd:dateTime, xsd:date, or xsd:time pattern, a plain literal must be generated with the associated language of the node, if available.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0285.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0286",
      "@type": "test:TestCase",
      "num": "0286",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@value attribute overrides @content",
      "input": "http://rdfa.info/test-suite/test-cases/0286.html",
      "purpose": "the HTML5 @value attribute must be utilized when generating output. If @value is detected, it must override and be processed according to the rules for @content.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0286.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0287",
      "@type": "test:TestCase",
      "num": "0287",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "time element with @datetime an xsd:dateTime with TZ offset",
      "input": "http://rdfa.info/test-suite/test-cases/0287.html",
      "purpose": "The @datetime attribute is used when generating output with valid xsd:dateTime and a Time Zone offset.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0287.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0288",
      "@type": "test:TestCase",
      "num": "0288",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "object element with @data parses as an IRI",
      "input": "http://rdfa.info/test-suite/test-cases/0288.html",
      "purpose": "@data is a resource attribute.",
      "reference": "HTML+RDFa 1.1 3.1",
      "results": "http://rdfa.info/test-suite/test-cases/0288.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html5",
        "xhtml5"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0289",
      "@type": "test:TestCase",
      "num": "0289",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@href becomes subject when @property and @content are present",
      "input": "http://rdfa.info/test-suite/test-cases/0289.html",
      "purpose": "When @property and @content are present but @about, @rel and @rev are not, @href is used as subject.",
      "reference": "RDFa Core 1.1, section 7.5 step 5.2",
      "results": "http://rdfa.info/test-suite/test-cases/0289.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0290",
      "@type": "test:TestCase",
      "num": "0290",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@href becomes subject when @property and @datatype are present",
      "input": "http://rdfa.info/test-suite/test-cases/0290.html",
      "purpose": "When @property and @datatype are present but @about, @rel and @rev are not, @href is used as subject and element content is used as an object literal.",
      "reference": "RDFa Core 1.1, section 7.5 step 5.2",
      "results": "http://rdfa.info/test-suite/test-cases/0290.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0291",
      "@type": "test:TestCase",
      "num": "0291",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@href as subject overridden by @about",
      "input": "http://rdfa.info/test-suite/test-cases/0291.html",
      "purpose": "When @property, @datatype, @href and @about are present but @rel and @rev are not, @about is used as subject.",
      "reference": "RDFa Core 1.1, section 7.5 step 5.2",
      "results": "http://rdfa.info/test-suite/test-cases/0291.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0292",
      "@type": "test:TestCase",
      "num": "0292",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "@about overriding @href as subject is used as parent resource",
      "input": "http://rdfa.info/test-suite/test-cases/0292.html",
      "purpose": "When @property, @datatype, @href and @about are present but @rel and @rev are not, @about is used as subject and is also applied to nested descriptions.",
      "reference": "RDFa Core 1.1, section 6",
      "results": "http://rdfa.info/test-suite/test-cases/0292.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.0",
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0293",
      "@type": "test:TestCase",
      "num": "0293",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Testing the ':' character usage in a CURIE",
      "input": "http://rdfa.info/test-suite/test-cases/0293.html",
      "purpose": "RDFa 1.1 CURIE allows the ':' to appear in the reference part of a CURIE.",
      "reference": "RDFa Core 1.1, section 6",
      "results": "http://rdfa.info/test-suite/test-cases/0293.sparql",
      "expectedResults": true,
      "hostLanguages": [
        "html4",
        "html5",
        "svg",
        "xhtml1",
        "xhtml5",
        "xml"
      ],
      "versions": [
        "rdfa1.1"
      ]
    },
    {
      "@id": "http://rdfa.info/test-suite/test-cases/0294",
      "@type": "test:TestCase",
      "num": "0294",
      "classification": "http://www.w3.org/2006/03/test-description#required",
      "description": "Ensure initial context is not used for RDFa 1.0",
      "input": "http://rdfa.info/test-suite/test-cases/0294.html",
      "purpose": "RDFa 1.1 defines an initial context containing prefixes and terms. RDFa 1.0 must not define such prefixes and terms.",
      "reference": "RDFa Syntax 1.0, section 6.3.1.3",
      "results": "http://rdfa.info/test-suite/test-cases/0294.sparql",
      "expectedResults": false,
      "hostLanguages": [
        "svg",
        "xhtml1"
      ],
      "versions": [
        "rdfa1.0"
      ]
    }
  ]
}

var hostLanguages = ["html5","xhtml5","xhtml1","xml"];
for (var host=0; host<hostLanguages.length; host++) {
   var ext = hostLanguages[host].replace(/\d+/,"");
   for (var currentTest=0; currentTest<manifest["@graph"].length; currentTest++) {
      var info = manifest["@graph"][currentTest];
      for (var i=0; i<info.hostLanguages.length; i++) {
         if (info.hostLanguages[i]==hostLanguages[host]) {
            console.log("curl -o "+hostLanguages[host]+"/"+info.num+"."+ext+" http://rdfa.info/test-suite/test-cases/rdfa1.1/"+hostLanguages[host]+"/"+info.num+"."+ext);
            console.log("curl -o "+hostLanguages[host]+"/"+info.num+".sparql http://rdfa.info/test-suite/test-cases/rdfa1.1/"+hostLanguages[host]+"/"+info.num+".sparql");
         }
      }
   }
}
