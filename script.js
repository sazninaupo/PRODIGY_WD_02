let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;
let lapCounter = 1;

function updateStopwatch() {
    seconds++;
    if (seconds == 60) { seconds = 0; minutes++; }
    if (minutes == 60) { minutes = 0; hours++; }

    let display =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;

    document.getElementById("stopwatch").innerText = display;
}

document.getElementById("startStop").addEventListener("click", function () {
    if (!isRunning) {
        timer = setInterval(updateStopwatch, 1000);
        this.innerText = "Pause";
        isRunning = true;
    } else {
        clearInterval(timer);
        this.innerText = "Start";
        isRunning = false;
    }
});

document.getElementById("reset").addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
    seconds = minutes = hours = 0;
    lapCounter = 1;
    document.getElementById("stopwatch").innerText = "00:00:00";
    document.getElementById("startStop").innerText = "Start";
    document.getElementById("laps").innerHTML = "";
});

document.getElementById("lap").addEventListener("click", function () {
    if (isRunning) {
        let lapTime = document.getElementById("stopwatch").innerText;
        let lapItem = document.createElement("li");
        lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
        lapCounter++;
    }
});

document.getElementById("toggleTheme").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
