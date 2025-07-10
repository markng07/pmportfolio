# GitHub Pages Setup Guide

## Step 3: Enable Automatic Building

### What You Need:
- Your portfolio code uploaded to GitHub repository
- The `.github/workflows/deploy.yml` file (already created for you)

### Follow These Steps:

### 1. Go to Your Repository on GitHub
- Open your browser and go to `https://github.com/YOUR_USERNAME/portfolio-website`
- Make sure you're signed in to GitHub

### 2. Navigate to Settings
- Click the "Settings" tab at the top of your repository
- It's usually the last tab on the right side

### 3. Find the Pages Section
- Scroll down in the left sidebar until you see "Pages"
- Click on "Pages"

### 4. Configure the Source
- Under "Build and deployment"
- You'll see "Source" dropdown
- Change it from "Deploy from a branch" to "GitHub Actions"
- Click "Save" if there's a save button

### 5. Wait for First Build
- GitHub will automatically start building your site
- Go to the "Actions" tab to see the build progress
- The first build takes 2-3 minutes

### 6. Get Your Live URL
- Once the build completes, go back to Settings → Pages
- You'll see your live site URL: `https://YOUR_USERNAME.github.io/portfolio-website`
- Click the URL to view your live portfolio!

## What Happens Automatically:

1. **When you push code to GitHub:**
   - GitHub detects the change
   - Runs the build workflow (`.github/workflows/deploy.yml`)
   - Installs dependencies with `npm ci`
   - Builds your React app with `npm run build`
   - Deploys the built files to GitHub Pages

2. **Your site updates automatically:**
   - No manual deployment needed
   - Changes appear live in 2-3 minutes
   - Build logs available in "Actions" tab

## Troubleshooting:

### If the build fails:
1. Go to "Actions" tab in your repository
2. Click on the failed workflow run
3. Check the error logs
4. Common fixes:
   - Make sure all files are committed
   - Check that `package.json` has all dependencies

### If the site doesn't load:
1. Check that the build completed successfully
2. Wait 5-10 minutes for DNS propagation
3. Try accessing the site in an incognito/private browser window

## Your Next Steps:
1. Upload your portfolio code to GitHub
2. Go to Settings → Pages
3. Change Source to "GitHub Actions"
4. Wait for the build to complete
5. Visit your live site!

## Example URLs:
- Repository: `https://github.com/markdnguyen/portfolio-website`
- Live site: `https://markdnguyen.github.io/portfolio-website`