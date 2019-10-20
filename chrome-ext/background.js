import math from "math.js";

function breakUrl(url) {
    return [url.match(/:\/\/(?:www\.)?(.[^/]+)(.*)/), url.match(/:\/\/(?:www\.)?(.[^/]+)(.*)/)]
}

function activation_function(num) {
    return num >= 0;
}

W = [-40.34435, -35.34545];
B = 1.544435;

function checkUrl(url) {
    inp = breakUrl(url);
    res = math.dot(W, math.transpose(inp)) + B
    res = activation_function(res)
    return res;
}

chrome.webRequest.onBeforeRequest.addListener(
    details => {
        if (checkUrl(details.url)) {
            return { redirectUrl: chrome.runtime.getURL("home.html") + "?itsaspam=" + details.url };
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);
