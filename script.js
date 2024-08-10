// Variables to keep track of time
var seconds = 0;  // Tracks the number of seconds
var minutes = 0;  // Tracks the number of minutes
var hours = 0;    // Tracks the number of hours
var running = false;  // Keeps track of whether the stopwatch is running
var interval;  // Stores the interval ID

// Function to update the time display
function updateTime() {
    // Format the time to always show two digits
    var timeDisplay = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
    
    // Update the time on the screen
    document.getElementById("time").innerText = timeDisplay;
}

// Function to start the stopwatch
function startStopwatch() {
    if (!running) {  // Only start if not already running
        running = true;
        interval = setInterval(function() {
            seconds++;  // Increase seconds every second

            // If seconds reach 60, reset them and increase minutes
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }

            // If minutes reach 60, reset them and increase hours
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }

            updateTime();  // Update the displayed time
        }, 1000);  // Run every 1000ms (1 second)
    }
}

// Function to pause the stopwatch
function pauseStopwatch() {
    if (running) {  // Only pause if running
        running = false;
        clearInterval(interval);  // Stop the interval
    }
}

// Function to reset the stopwatch
function resetStopwatch() {
    running = false;
    clearInterval(interval);  // Stop the interval
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTime();  // Reset the displayed time to 00:00:00
    document.getElementById("laps").innerHTML = "";  // Clear all laps
}

// Function to record a lap time
function recordLap() {
    if (running) {  // Only record a lap if running
        var lapTime = document.getElementById("time").innerText;
        var lap = document.createElement("div");  // Create a new div for the lap
        lap.innerText = "Lap: " + lapTime;  // Set the text of the div
        document.getElementById("laps").appendChild(lap);  // Add the lap to the laps container
    }
}
