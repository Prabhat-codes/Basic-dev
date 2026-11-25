const STORAGE_KEY = "countdown-target";

const form = document.getElementById("setup");
const input = document.getElementById("target");
const message = document.getElementById("message");

let timer = null;

function getTimeRemaining(endTime) {
    // Round up, so zero only shows once the target has really been reached.
    const total = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
    return {
        total,
        days: Math.floor(total / 86400),
        hours: Math.floor(total / 3600) % 24,
        minutes: Math.floor(total / 60) % 60,
        seconds: total % 60,
    };
}

function show(time) {
    for (const unit of ["days", "hours", "minutes", "seconds"]) {
        document.getElementById(unit).textContent = String(time[unit]).padStart(2, "0");
    }
}

function stop() {
    clearInterval(timer);
    show({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    message.textContent = "";
}

function start(value) {
    stop();
    const endTime = new Date(value).getTime();

    function update() {
        const time = getTimeRemaining(endTime);
        show(time);
        if (time.total === 0) {
            clearInterval(timer);
            message.textContent = "Time's up!";
        }
    }

    timer = setInterval(update, 250);
    update();
}

// The browser may block storage (private windows), so the timer must work without it.
function remember(value) {
    try {
        if (value) localStorage.setItem(STORAGE_KEY, value);
        else localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.warn("Could not save the countdown:", error);
    }
}

function recall() {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
        return null;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (new Date(input.value).getTime() <= Date.now()) {
        stop();
        remember(null);
        message.textContent = "Pick a date and time in the future.";
        return;
    }
    remember(input.value);
    start(input.value);
});

document.getElementById("reset").addEventListener("click", () => {
    stop();
    remember(null);
    input.value = "";
});

const saved = recall();
if (saved) {
    input.value = saved;
    start(saved);
}
