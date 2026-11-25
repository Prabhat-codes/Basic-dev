import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative paths, so the build works from any folder of the website.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
