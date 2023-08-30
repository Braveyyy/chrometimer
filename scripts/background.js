chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cmd === 'START_TIMER') {
      timerTime = new Date(request.when);
      timerID = setTimeout(() => {
         // the time is app, alert the user.
      }, timerTime.getTime() - Date.now());
    } else if (request.cmd === 'GET_TIME') {
      sendResponse({ time: timerTime });
    }
  });