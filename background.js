chrome.runtime.onInstalled.addListener(() => {
    chrome.stirage.sync.set({ nekotesla: 'blue' });
})