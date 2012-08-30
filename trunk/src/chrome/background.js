try {
  chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
     console.log(sender.tab ? "from a content script: " + sender.tab.id+", "+sender.tab.url : "from the extension" );
     if (request.harvestedTriples) {
         //console.log("Notified of triples, enabling page action.");
         chrome.pageAction.show(sender.tab.id);
         sendResponse({});
     } else if (request.getTriples) {
        chrome.tabs.sendRequest(request.id,{ getTriples: true },function(response) {
           sendResponse({ setTriples: true, triples: response.triples });
        });
    }
  });
  chrome.pageAction.onClicked.addListener(function(tab) {
     chrome.tabs.sendRequest(tab.id,{ getTriples: true},function(response) {
         var url = chrome.extension.getURL("viewer.xhtml");
         chrome.tabs.create({"url": url, "selected": true},
            function(viewerTab) {
               chrome.tabs.sendRequest(viewerTab.id, { viewerInit: true, url: tab.url, id: tab.id});
               chrome.tabs.sendRequest(viewerTab.id, { setTriples: true, triples: response.triples });
            }
         );
    });
 });
} catch (ex) {
   console.log("Error setting up rdfa extension: "+ex);
}
