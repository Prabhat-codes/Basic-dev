const result = document.getElementById("result");

function category(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal range";
    if (bmi < 30) return "Overweight";
    return "Obese";
}

function calculate() {
    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);

    if (!(height >= 50 && height <= 300)) {
        result.textContent = "Enter a height between 50 and 300 cm.";
        return;
    }
    if (!(weight >= 2 && weight <= 500)) {
        result.textContent = "Enter a weight between 2 and 500 kg.";
        return;
    }

    // Round first, so the number shown and its category always agree.
    const bmi = Math.round((weight / (height / 100) ** 2) * 10) / 10;
    result.textContent = `BMI: ${bmi.toFixed(1)} (${category(bmi)})`;
}

document.getElementById("bmi").addEventListener("submit", (event) => {
    event.preventDefault();
    calculate();
});
