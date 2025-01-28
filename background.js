const uniqueLinks = [
  "https://www.youtube.com/watch?v=az6NibAUf7Y",
  "https://www.youtube.com/watch?v=VSceuiPBpxY",
  "https://www.youtube.com/watch?v=sEmZIi_0Kj8",
  "https://www.youtube.com/watch?v=ft_DXwgUXB0",
  "https://www.youtube.com/watch?v=-6XkpBd62P0",
  "https://www.youtube.com/watch?v=dww3Oo8ropA",
  "https://www.youtube.com/watch?v=L8UT0iVne24",
  "https://www.youtube.com/watch?v=dIyrR8forI4",
  "https://www.youtube.com/watch?v=-ESQmzDbnL8",
  "https://www.youtube.com/watch?v=FRk4PE5GhoU",
  "https://www.youtube.com/watch?v=svDiqqnGCeU",
];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("youtube.com/shorts")) {
    const motivationalVideoURL =
      uniqueLinks[Math.floor(Math.random() * uniqueLinks.length)];
    chrome.tabs.update(tabId, { url: motivationalVideoURL });
  }
});
