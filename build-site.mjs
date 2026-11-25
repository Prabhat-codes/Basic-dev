// Collects the web apps into _site/ for deployment. Run with: node build-site.mjs
import { execSync } from "node:child_process";
import { cpSync, rmSync } from "node:fs";

const staticFiles = [
    "index.html",
    "home.css",
    "Analog_Clock",
    "Digital Clock",
    "Countdown Timer",
    "Calculator",
    "BMI_Calculator",
    "Loan Calculator",
    "Quote_generator",
    "Contact Form",
];

rmSync("_site", { recursive: true, force: true });
for (const name of staticFiles) {
    cpSync(name, `_site/${name}`, { recursive: true });
}

execSync("npm ci && npm run build", { cwd: "Sidebar-react", stdio: "inherit" });
cpSync("Sidebar-react/dist", "_site/Sidebar-react", { recursive: true });
