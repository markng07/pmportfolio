# Deployment Guide

This guide will help you upload your portfolio website to GitHub and deploy it live.

## Step 1: Upload to GitHub

### Option A: Using GitHub Desktop (Recommended for beginners)

1. **Download GitHub Desktop**
   - Go to [https://desktop.github.com/](https://desktop.github.com/)
   - Download and install GitHub Desktop

2. **Sign in to GitHub**
   - Open GitHub Desktop
   - Sign in with your GitHub account
   - If you don't have an account, create one at [github.com](https://github.com)

3. **Create a new repository**
   - In GitHub Desktop, click "Create a New Repository on your hard drive"
   - Name: `portfolio-website` (or any name you prefer)
   - Description: "Professional portfolio website"
   - Make it Public (so others can see it)
   - Click "Create Repository"

4. **Copy your code**
   - Copy all files from your Replit project to the new repository folder
   - In GitHub Desktop, you'll see all files listed as "changes"

5. **Commit and publish**
   - Write a commit message: "Initial portfolio website"
   - Click "Commit to main"
   - Click "Publish repository"

### Option B: Using Command Line

1. **Initialize Git in your project**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   ```

2. **Create repository on GitHub**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name: `portfolio-website`
   - Make it Public
   - Don't initialize with README (you already have one)

3. **Connect and push**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy Your Website

### Option A: Vercel (Recommended - Free and Easy)

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up using your GitHub account

2. **Import your project**
   - Click "New Project"
   - Select your `portfolio-website` repository
   - Vercel will automatically detect it's a React project

3. **Configure deployment**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Click "Deploy"

4. **Your site is live!**
   - Vercel will provide a URL like: `https://your-portfolio.vercel.app`
   - You can add a custom domain later if you want

### Option B: Netlify

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up using your GitHub account

2. **Deploy from GitHub**
   - Click "New site from Git"
   - Choose GitHub and authorize
   - Select your `portfolio-website` repository

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Option C: GitHub Pages

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`

2. **Add build script**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio-website`

## Step 3: Custom Domain (Optional)

If you want your own domain like `markdnguyen.com`:

1. **Buy a domain**
   - Use services like Namecheap, GoDaddy, or Google Domains

2. **Configure DNS**
   - For Vercel: Add your domain in project settings
   - For Netlify: Add domain in site settings
   - Update your domain's DNS to point to the hosting service

## Step 4: Automatic Updates

Once deployed, any changes you push to GitHub will automatically update your live website!

## Troubleshooting

### Common Issues:

1. **Build fails**
   - Check that `npm run build` works locally
   - Ensure all dependencies are in `package.json`

2. **Site doesn't load**
   - Check build logs in your hosting dashboard
   - Verify the output directory is correct

3. **Images not loading**
   - Make sure image paths are correct
   - Use relative paths, not absolute paths

## Your Next Steps:

1. Choose your deployment method (Vercel recommended)
2. Follow the steps above
3. Share your live portfolio URL!

Need help? Feel free to ask for assistance with any of these steps.