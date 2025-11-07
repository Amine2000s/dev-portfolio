import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
// IMPORTANT: Update the base path to match your GitHub repository name
// If repo is at username.github.io/repo-name, use '/repo-name/'
// If repo is at username.github.io (root), use '/'
const REPO_NAME = 'Nouveau-dossier'; // ⚠️ CHANGE THIS to your actual repository name

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  base: process.env.GITHUB_PAGES === 'true' ? `/${REPO_NAME}/` : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
