const uniqueLinks = [
  "https://www.youtube.com/watch?v=2urF6xI06r0",
  "https://www.youtube.com/watch?v=PIaNkWufmns",
  "https://www.youtube.com/watch?v=wnHW6o8WMas&t=140s",
  "https://www.youtube.com/watch?v=_KmsNRHVudk",
  "https://www.youtube.com/watch?v=AKRI6YiWYHE",
  "https://www.youtube.com/watch?v=DyW8cPeuEQg",
  "https://www.youtube.com/watch?v=JUeIGphgmcU",
  "https://www.youtube.com/watch?v=YC08O_AfKgM&t=14s",
  "https://www.youtube.com/watch?v=mECfzmFvOQU",
  "https://www.youtube.com/watch?v=TZm2fpECa8g",
  "https://www.youtube.com/watch?v=jHnX-nMl59U",
];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("youtube.com/shorts")) {
    const motivationalVideoURL =
      uniqueLinks[Math.floor(Math.random() * uniqueLinks.length)];
    chrome.tabs.update(tabId, { url: motivationalVideoURL });
  }
});
