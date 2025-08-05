# Deploying Alex McDonald's Portfolio to Netlify

## Quick Setup Guide

### 1. Prepare Your Repository
1. Push this code to a GitHub repository
2. Make sure all files are committed, including:
   - `netlify.toml` (build configuration)
   - `netlify/functions/contact.js` (contact form handler)
   - Built static files in `dist/public/`

### 2. Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select your repository
4. Netlify will auto-detect the build settings from `netlify.toml`
5. Click "Deploy site"

### 3. Set Up Environment Variables
After deployment, add these environment variables in Netlify:
1. Go to Site settings → Environment variables
2. Add:
   - `EMAIL_USER`: Your Gmail address (alexjmcdonald1@gmail.com)
   - `EMAIL_PASSWORD`: Your Gmail App Password

### 4. Gmail App Password Setup
1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account settings → Security
3. Generate an App Password for "Mail"
4. Use this App Password (not your regular password) as `EMAIL_PASSWORD`

### 5. Custom Domain (Optional)
- Add your custom domain in Site settings → Domain management
- Netlify provides free SSL certificates automatically

## What's Included
✓ Responsive portfolio website
✓ Contact form with email functionality
✓ Professional headshot integration
✓ Red Bull experience prominently featured
✓ Skills, certifications, and portfolio sections
✓ Mobile-friendly navigation

## Features
- **Hero Section**: Professional introduction with headshot
- **About**: Biography with stats and achievements
- **Experience**: Red Bull role highlighted with other positions
- **Skills**: Core competencies and certifications
- **Portfolio**: Work samples and testimonials
- **Contact**: Working contact form with auto-reply

Your website will be live at: `https://[your-site-name].netlify.app`