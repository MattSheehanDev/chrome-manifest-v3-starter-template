// Add your first background listener here.
chrome.tabs.onUpdated.addListener((tabId, tab) => {


    // Send a message to tab that was updated.
    chrome.tabs.sendMessage(tabId, {
        message: ""
    });
});
