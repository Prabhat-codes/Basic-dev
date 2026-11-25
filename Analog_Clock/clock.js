const canvas = document.getElementById("clock");
const ctx = canvas.getContext("2d");

// Match the drawing buffer to the on-screen size so the clock stays sharp.
function resize() {
    const size = Math.round(canvas.clientWidth * window.devicePixelRatio);
    canvas.width = size;
    canvas.height = size;
    drawClock();
}

function drawClock() {
    const centre = canvas.width / 2;
    const radius = centre * 0.9;

    ctx.setTransform(1, 0, 0, 1, centre, centre);
    ctx.clearRect(-centre, -centre, canvas.width, canvas.height);

    drawFace(radius);
    drawNumbers(radius);
    drawHands(radius, new Date());
}

function drawFace(radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    const rim = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    rim.addColorStop(0, "#020");
    rim.addColorStop(0.5, "red");
    rim.addColorStop(1, "#020");
    ctx.strokeStyle = rim;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
}

function drawNumbers(radius) {
    ctx.fillStyle = "#222";
    ctx.font = `${radius * 0.15}px Arial, sans-serif`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for (let number = 1; number <= 12; number++) {
        const angle = number * Math.PI / 6;
        ctx.fillText(number, Math.sin(angle) * radius * 0.78, -Math.cos(angle) * radius * 0.78);
    }
}

function drawHands(radius, now) {
    const seconds = now.getSeconds();
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    drawHand(hours * Math.PI / 6, radius * 0.5, radius * 0.07, "#222");
    drawHand(minutes * Math.PI / 30, radius * 0.72, radius * 0.045, "#222");
    drawHand(seconds * Math.PI / 30, radius * 0.82, radius * 0.015, "#c00");

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
    ctx.fillStyle = "#c00";
    ctx.fill();
}

function drawHand(angle, length, width, colour) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = colour;
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.sin(angle) * length, -Math.cos(angle) * length);
    ctx.stroke();
}

// Redraw just after each new second begins, so the hands never lag behind.
function tick() {
    drawClock();
    setTimeout(tick, 1000 - (Date.now() % 1000) + 5);
}

window.addEventListener("resize", resize);
resize();
tick();
