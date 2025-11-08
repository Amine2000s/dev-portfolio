import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
// IMPORTANT: Update the base path to match your GitHub repository name
// If repo is at username.github.io/repo-name, use '/repo-name/'
// If repo is at username.github.io (root), use '/'
// Your site is deployed at /dev-portfolio/, so using that base path
const REPO_NAME = 'dev-portfolio'; // Repository name: dev-portfolio

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  // Base path for GitHub Pages deployment
  // Must match the repository name for project pages
  base: `/${REPO_NAME}/`,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
