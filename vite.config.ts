import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

// Fix: Get __dirname properly
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Fix: Import cartographer only when in development & Replit environment
const isReplit = process.env.NODE_ENV !== "production" && process.env.REPL_ID;
const cartographerPlugin = isReplit
  ? require("@replit/vite-plugin-cartographer").cartographer()
  : null;

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(cartographerPlugin ? [cartographerPlugin] : []), // Only add if defined
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"), // Ensure correct output path
    emptyOutDir: true,
  },
});
