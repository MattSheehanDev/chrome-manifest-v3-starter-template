// Add your first background listener here.
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    console.log(`${tabId}: ${tab.status}`);
});

chrome.runtime.onMessage.addListener((obj, sender, response) => {
    console.log(obj.message);
    response({message: "Messaged received from background script"})
});
