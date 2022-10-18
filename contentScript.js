(async () => {
    console.log('contentScript.js loaded');

    var resp = await chrome.runtime.sendMessage({message: 'Content Script loaded'});
    console.log(resp.message);
    
    // Listen for messages from background script
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        response()
    });

})();
