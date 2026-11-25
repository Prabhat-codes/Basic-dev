const form = document.getElementById("contact");
const message = document.getElementById("message");

const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
};

// Each check returns an error message, or an empty string if the value is fine.
const checks = {
    name: (value) => (value ? "" : "Enter your name."),
    email: (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email, like name@example.com.",
    phone: (value) => {
        const digits = value.replace(/\D/g, "").length;
        return /^\+?[\d\s()-]+$/.test(value) && digits >= 7 && digits <= 15
            ? ""
            : "Enter a phone number with 7 to 15 digits.";
    },
};

function showMessage(text, isError) {
    message.textContent = text;
    message.className = isError ? "error" : "success";
}

function clearErrors() {
    for (const field of Object.values(fields)) {
        field.removeAttribute("aria-invalid");
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    for (const [key, field] of Object.entries(fields)) {
        const error = checks[key](field.value.trim());
        if (error) {
            field.setAttribute("aria-invalid", "true");
            field.focus();
            showMessage(error, true);
            return;
        }
    }

    const name = fields.name.value.trim();
    form.reset();
    showMessage(`Thanks, ${name}! Your details look good.`, false);
});

form.addEventListener("reset", () => {
    clearErrors();
    showMessage("", false);
});
