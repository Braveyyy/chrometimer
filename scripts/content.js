document.addEventListener("DOMContentLoaded", function() {
document.getElementById("powerBtn").addEventListener("click", chromeTimer);
var timerDisplay = document.querySelector('#timeCountdown');
var intervalID;
function chromeTimer()
{
    document.getElementById("tField").style.display = "none";
    document.getElementById("tTracker").style.display = "block";
    var studyTime = 60 * 25; // Hard coded variable for amount of time studied.
    var timerTime = studyTime, minutes, seconds;
    clearInterval(intervalID);
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
        
    }, 1000);
    // Start timer
    
    // End timer

    // Send user a notification
}

});