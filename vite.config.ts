import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
// IMPORTANT: Update the base path to match your GitHub repository name
// If repo is at username.github.io/repo-name, use '/repo-name/'
// If repo is at username.github.io (root), use '/'
// Based on the error, your site is at the root, so using '/'
const REPO_NAME = ''; // Empty for root deployment (username.github.io)

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  // Base path for GitHub Pages deployment
  // Change to '/repo-name/' if deploying to a project repository
  base: REPO_NAME ? `/${REPO_NAME}/` : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
