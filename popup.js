document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("redirectButton");
  if (!button) return;
  button.addEventListener("click", () => {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) return;

      const currentUrl = tabs[0].url;

      // If on a Medium article, redirect to Freedium
      const freediumURL = `https://freedium-mirror.cfd//${encodeURIComponent(
        currentUrl
      )}`;
      chrome.tabs.update(tabs[0].id, { url: freediumURL });

      window.close();
    });
  });
});
