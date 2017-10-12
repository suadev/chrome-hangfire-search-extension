chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status !== 'loading')
        return;

    chrome.tabs.executeScript(null, {
        file: "assets/js/jquery.min.js"
    }, function () {
        chrome.tabs.executeScript(null, {
            file: "assets/js/search.js"
        });
    });
    chrome.tabs.insertCSS(null, {file:"assets/css/styles.css"})
});