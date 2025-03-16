chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");

  chrome.contextMenus.create({
    id: "translateText",
    title: "Translate Selected Text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translateText") {
    console.log("Selected Text: ", info.selectedText);
  }
});
