const amountInput = document.getElementById("amount");
const rateInput = document.getElementById("rate");
const timeInput = document.getElementById("time");
const pay = document.getElementById("pay");
const details = document.getElementById("details");

const money = (value) =>
    "$" + value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Standard reducing-balance loan: the same payment every month.
function monthlyPayment(principal, annualRate, months) {
    const rate = annualRate / 100 / 12;
    if (rate === 0) return principal / months;
    return (principal * rate) / (1 - (1 + rate) ** -months);
}

function calculate() {
    pay.textContent = "";
    details.textContent = "";

    if (!amountInput.value || !rateInput.value || !timeInput.value) return;

    const principal = Number(amountInput.value);
    const rate = Number(rateInput.value);
    const months = Number(timeInput.value);

    if (!(principal > 0 && principal <= 1e12)) {
        details.textContent = "Enter a loan amount above 0.";
    } else if (!(rate >= 0 && rate <= 100)) {
        details.textContent = "Enter a rate between 0 and 100.";
    } else if (!(Number.isInteger(months) && months >= 1 && months <= 600)) {
        details.textContent = "Enter a whole number of months from 1 to 600.";
    } else {
        const monthly = monthlyPayment(principal, rate, months);
        const total = monthly * months;
        pay.textContent = `Monthly payment: ${money(monthly)}`;
        details.textContent = `Total to pay: ${money(total)} (interest ${money(total - principal)})`;
    }
}

for (const input of [amountInput, rateInput, timeInput]) {
    input.addEventListener("input", calculate);
}
