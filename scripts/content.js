updateTimerDisplay(value)
{
    
}

chrome.runtime.onMessage.addListener((message, sender, response) => {
    if(message.action === 'updateTimer')
    {
        updateTimerDisplay(message.value);
    }
})