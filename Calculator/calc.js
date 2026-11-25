const display = document.getElementById("result");
const OPERATORS = "+-*/";

let expression = "";
let finished = false; // true straight after "=", so the next digit starts afresh

function press(value) {
    const last = expression.slice(-1);

    if (OPERATORS.includes(value)) {
        finished = false;
        // A minus may start a number; the other operators need a number first.
        if (value === "-" && (expression === "" || "*/".includes(last))) {
            expression += value;
        } else if (/[\d.]/.test(last)) {
            expression += value;
        } else if (/\d\.?[+\-*/]+$/.test(expression)) {
            expression = expression.replace(/[+\-*/]+$/, value);
        }
        return;
    }

    if (finished) {
        expression = "";
        finished = false;
    }

    const current = expression.split(/[+\-*/]/).pop();
    if (value === ".") {
        if (!current.includes(".")) expression += current === "" ? "0." : ".";
    } else if (current === "0") {
        expression = expression.slice(0, -1) + value;
    } else {
        expression += value;
    }
}

// Works out the expression without eval: multiply and divide first, then add and subtract.
function evaluate(text) {
    const tokens = text.match(/\d+\.?\d*|\.\d+|[+\-*/]/g);
    let position = 0;

    // Reads the next number, including a leading minus sign if there is one.
    function nextNumber() {
        let sign = 1;
        if (tokens[position] === "-") {
            sign = -1;
            position++;
        }
        return sign * Number(tokens[position++]);
    }

    const terms = [nextNumber()];

    while (position < tokens.length) {
        const operator = tokens[position++];
        const number = nextNumber();
        if (operator === "*") terms.push(terms.pop() * number);
        else if (operator === "/") terms.push(terms.pop() / number);
        else terms.push(operator === "-" ? -number : number);
    }

    return terms.reduce((sum, term) => sum + term, 0);
}

function equals() {
    if (!/\d\.?$/.test(expression)) return;

    const value = evaluate(expression);
    if (!Number.isFinite(value)) {
        expression = "";
        display.value = "Can't divide by 0";
        return;
    }

    // Trim floating-point noise, e.g. 0.1 + 0.2.
    const rounded = Number(value.toPrecision(12));
    expression = String(rounded);
    // Very large or small results use exponent notation, which can't be typed onto.
    display.value = expression;
    if (expression.includes("e")) expression = "";
    finished = true;
}

function update() {
    display.value = expression;
    display.scrollLeft = display.scrollWidth;
}

function clearAll() {
    expression = "";
    finished = false;
    update();
}

function deleteLast() {
    expression = finished ? "" : expression.slice(0, -1);
    finished = false;
    update();
}

document.getElementById("keys").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const { value, action } = button.dataset;
    if (action === "equals") equals();
    else if (action === "clear") clearAll();
    else if (action === "delete") deleteLast();
    else {
        press(value);
        update();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;

    const key = event.key === "x" ? "*" : event.key;
    if (/^[\d.+\-*/]$/.test(key)) {
        press(key);
        update();
    } else if (key === "Enter" || key === "=") {
        equals();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearAll();
    } else {
        return;
    }
    event.preventDefault();
});
