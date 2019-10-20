window.addEventListener('DOMContentLoaded', e => {
    let url = new URL(window.location.href);
    let spamUrl = url.searchParams.get("itsaspam");
    const spamUrlTag = document.getElementById("spamUrl");
    spamUrlTag.innerText = spamUrl;
    spamUrlTag.href = spamUrl;
});