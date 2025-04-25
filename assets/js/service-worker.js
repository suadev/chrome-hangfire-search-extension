// Service worker for Hangfire Job Filter extension
// This is a minimal service worker required for Manifest V3
// Content scripts are now declared in the manifest.json

// Log when the service worker is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log('Hangfire Job Filter extension installed');
});

// Keep the service worker alive when needed
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'keepAlive') {
    sendResponse({ status: 'alive' });
  }
  return true;
});
