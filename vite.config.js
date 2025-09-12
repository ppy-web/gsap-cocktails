import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [react(), tailwindcss()],
    base: env.VITE_BASE_URL || "/",
  });
};
