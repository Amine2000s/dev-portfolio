# GitHub Pages Deployment Guide

## Quick Setup

1. **Update the base path in `vite.config.ts`**:
   - If your repository is at `username.github.io/repo-name`, set `base: '/repo-name/'`
   - If your repository is at `username.github.io` (root), set `base: '/'`

2. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

3. **Push to trigger deployment**:
   - Push your code to the `main` or `master` branch
   - The GitHub Actions workflow will automatically build and deploy

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Set the base path for your repository
export GITHUB_PAGES=true

# Build the project
npm run build

# The dist folder contains your built files
# You can push the dist folder to the gh-pages branch
```

## Troubleshooting

### Website shows blank page
- Check that the `base` path in `vite.config.ts` matches your repository name
- Ensure all assets are loading correctly (check browser console)

### 404 errors on refresh
- This is normal for SPAs on GitHub Pages
- Consider using a custom domain or HashRouter instead of BrowserRouter

### Assets not loading
- Verify the `base` path is correct
- Check that asset paths are relative, not absolute

