# Personal Portfolio Website

## Overview
A stunning dark-mode personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a full-viewport hero section with profile photo and social links, followed by a responsive projects showcase grid.

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section with profile and social links
│   │   ├── ProjectCard.tsx   # Individual project card component
│   │   └── Projects.tsx      # Projects grid section
│   ├── pages/
│   │   └── Home.tsx          # Main landing page
│   └── App.tsx               # Application root with routing
```

## Key Features
- ✨ Dark mode enabled by default
- 📱 Fully responsive (mobile-first design)
- 🎨 Clean, modern UI with smooth animations
- ♿ Accessible with ARIA labels and semantic HTML
- 🚀 Optimized performance with minimal dependencies
- 💅 Professional portfolio-ready aesthetic

## Customization Guide

### 1. Update Your Personal Information
**File:** `client/src/components/Hero.tsx`
- Line 33: Replace `"Your Name"` with your actual name
- Line 36: Update the tagline/description
- Line 3: Update profile image URL (replace `https://via.placeholder.com/200`)

### 2. Update Social Links
**File:** `client/src/components/Hero.tsx`
- Lines 5-15: Update GitHub and LinkedIn URLs with your profiles
- You can add more social links by extending the `socialLinks` array

### 3. Customize Projects
**File:** `client/src/components/Projects.tsx`
- Lines 5-37: Replace placeholder projects with your actual projects
- Update: `title`, `description`, and `technologies` for each project
- Add/remove projects as needed

### 4. Enable "View Project" Buttons
**File:** `client/src/components/ProjectCard.tsx`
- Line 38: Remove the `disabled` prop
- Add an `onClick` handler or `href` to link to your project URLs

### 5. Customize Colors (Optional)
**File:** `client/src/index.css`
- The dark mode color scheme is already configured
- Adjust CSS variables in the `.dark` class (lines 125-206) if needed

## Design System
- **Typography:** Inter font family
- **Colors:** Deep charcoal backgrounds with high-contrast white text
- **Spacing:** Consistent 4-unit spacing scale (1rem = 16px)
- **Shadows:** Layered shadows for depth and elevation
- **Animations:** 300ms transitions with ease-in-out timing

## Recent Changes
- 2025-10-30: Initial portfolio implementation with Hero and Projects sections
- Dark mode configured as default
- Smooth scrolling enabled
- SEO meta tags added

## Development
Run `npm install` followed by `npm run dev` to start the development server.

## Technologies Used
- React 18
- TypeScript
- Tailwind CSS
- Wouter (routing)
- Lucide React (icons)
- Shadcn UI components
