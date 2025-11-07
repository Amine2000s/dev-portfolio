import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
// IMPORTANT: Update the base path to match your GitHub repository name
// If repo is at username.github.io/repo-name, use '/repo-name/'
// If repo is at username.github.io (root), use '/'
const REPO_NAME = 'dev-portfolio'; // Repository name: dev-portfolio

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), svgr()],
  // Use base path for production builds (GitHub Pages), root for development
  base: mode === 'production' ? `/${REPO_NAME}/` : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}));
