function checkUrl(url) {
    return url === "https://thoughtbot.com/blog/how-to-make-a-chrome-extension"
}

chrome.webRequest.onBeforeRequest.addListener(
    details => {
        if (checkUrl(details.url)) {
            console.log("bhia gadbad se..");
            return { redirectUrl: chrome.runtime.getURL("test.html") + "?itsaspam=" + details.url };
        } else {
            console.log("shi se...");
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);
