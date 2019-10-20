chrome.webRequest.onBeforeRequest.addListener(details => {
    console.log(details.url);
})
