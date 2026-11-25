const display = document.getElementById("time");

const pad = (number) => String(number).padStart(2, "0");

// 12-hour format: midnight and noon both show as 12.
function formatTime(date) {
    const hours = date.getHours();
    const period = hours < 12 ? "AM" : "PM";
    return `${pad(hours % 12 || 12)}:${pad(date.getMinutes())}:${pad(date.getSeconds())} ${period}`;
}

// Update just after each new second begins, starting immediately.
function tick() {
    display.textContent = formatTime(new Date());
    setTimeout(tick, 1000 - (Date.now() % 1000) + 5);
}

tick();
