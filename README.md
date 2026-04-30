# Personal Portfolio Website

A dark-mode personal portfolio website built with React, TypeScript, Tailwind CSS, and Express. Features a full-viewport hero section with profile photo and social links, followed by a responsive projects showcase grid.

## Features

- ✨ Dark mode enabled by default
- 📱 Fully responsive (mobile-first design)
- 🎨 Clean, modern UI with smooth animations
- ♿ Accessible with ARIA labels and semantic HTML
- 🚀 Optimized performance with minimal dependencies
- 💅 Professional portfolio-ready aesthetic

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Tailwind CSS |
| Routing | Wouter |
| Icons | Lucide React, React Icons |
| UI Components | Shadcn UI (Radix UI primitives) |
| Animations | Framer Motion |
| Backend | Express.js, Node.js |
| Database | Drizzle ORM + Neon (PostgreSQL) |
| Build | Vite |

## Project Structure

```
├── client/
│   └── src/
│       ├── components/
│       │   ├── Hero.tsx          # Hero section with profile and social links
│       │   ├── ProjectCard.tsx   # Individual project card component
│       │   └── Projects.tsx      # Projects grid section
│       ├── pages/
│       │   └── Home.tsx          # Main landing page
│       └── App.tsx               # Application root with routing
├── server/
│   ├── index.ts                  # Express server entry point
│   ├── routes.ts                 # API route definitions
│   ├── storage.ts                # Data storage layer
│   └── vite.ts                   # Vite dev server integration
└── shared/                       # Shared types and schemas
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5000`.

### Production Build

```bash
npm run build
npm start
```

### Type Check

```bash
npm run check
```

### Database

```bash
npm run db:push
```

## Customization

### 1. Personal Information
**File:** `client/src/components/Hero.tsx`
- Update your name, tagline, and profile image URL

### 2. Social Links
**File:** `client/src/components/Hero.tsx`
- Update GitHub, LinkedIn, and any other social profile URLs

### 3. Projects
**File:** `client/src/components/Projects.tsx`
- Replace placeholder projects with your actual work — update `title`, `description`, and `technologies`

### 4. Project Links
**File:** `client/src/components/ProjectCard.tsx`
- Remove the `disabled` prop from the "View Project" button and add your project URLs

### 5. Colors & Theme (Optional)
**File:** `client/src/index.css`
- Adjust CSS variables in the `.dark` class to customize the color scheme

## Design System

- **Font:** Inter (sans-serif)
- **Background:** Deep charcoal (`gray-900`) with elevated cards (`gray-800`)
- **Text:** High-contrast white/near-white on dark backgrounds (WCAG AA+)
- **Spacing:** Consistent 4-unit scale (base 1rem = 16px)
- **Animations:** 300ms ease-in-out transitions

## License

MIT
