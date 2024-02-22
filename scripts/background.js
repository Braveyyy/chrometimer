document.addEventListener("DOMContentLoaded", function() {
document.getElementById("powerBtn").addEventListener("click", chromeTimer);
  var timerDisplay = document.querySelector('#timeCountdown');
  var intervalID;
  // Start timer
  function chromeTimer()
  {
    //document.getElementById("tField").style.display = "none";
    //document.getElementById("tTracker").style.display = "block";
    var studyTime = 60 * 25; // Hard coded variable for amount of time studied.
    var timerTime = studyTime, minutes, seconds;
  
    intervalID = setInterval(function () {
        minutes = parseInt(timerTime / 60, 10);
        seconds = parseInt(timerTime % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay.innerHTML = minutes + ":" + seconds;

        if(--timerTime < 0)
        {
            timerTime = studyTime;
        }
        chrome.runtime.sendMessage({action: 'updateTimer', value: timerDisplay});
    }, 1000); 
  
      // Send user a notification
  }
  // End timer
  function endTimer()
  {
    clearInterval(intervalID);
  }
  chrome.runtime.onMessage.addListener((message, sender, response) => {
    if(message.action === 'startTimer')
    {
      chromeTimer();
    }
    else if(message.action === 'stopTimer')
    {
      endTimer();
    }
  })
});