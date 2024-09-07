let blacklistedCompanies = [];

// Load blacklist from storage
chrome.storage.sync.get("blacklist", (data) => {
  blacklistedCompanies = data.blacklist || [];
});

// Add a company to the blacklist
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "addCompany") {
    blacklistedCompanies.push(message.company);
    chrome.storage.sync.set({ blacklist: blacklistedCompanies });
    sendResponse({ success: true });
  }
});
