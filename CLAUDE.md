# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Documentation

**Core Philosophy & Planning:**
- **`Docs/project_philosophy.md`** - Design principles, voice, and technical philosophy. Read this to understand the "why" behind decisions.
- **`Docs/feature_template.md`** - Template for planning new features. Use this when adding significant functionality.
- **`Docs/DevPlan.md`** - Active development plans and feature implementation roadmaps. Check here for current work and future phases.

**When to consult these:**
- Before implementing major features → Review `project_philosophy.md` for alignment
- Planning a new feature → Use `feature_template.md` structure
- Understanding current priorities → Check `DevPlan.md` for active plans
- Making design decisions → Reference the philosophy for mobile-first, substance-over-flash principles

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Recent Changes

### Latest Updates (Dec 14, 2025)
- **Rugby Council AI Project**: Added multi-model collaboration project to portfolio featuring three AI models that independently plan, review, and synthesize rugby training sessions
- **Journey Milestone**: Added Dec 14 entry documenting Rugby Council AI deployment and evolution from comparative analysis concepts
- **Featured Projects**: Unfeatured Reflective Practice Coach to maintain three featured projects (Squad Rotation Tool, Rugby Session Planner, Rugby Council AI)

### Security Updates
- **Next.js 16.0.7** (Dec 2025): Updated from 16.0.3 to address React Server Components CVE vulnerabilities

### New Features
- **Journey Page** (`/journey`): Interactive career timeline with expandable milestone sections using client-side state management
- **Code Review Page**: Added comprehensive code review documentation and examples
- **About Page** (`/about`): Complete biography and approach section
- **Contact Page** (`/contact`): Contact information and communication preferences

### Improvements
- **Navigation Components**: Enhanced site navigation with improved accessibility
- **Accessibility**: Screen reader improvements for timeline milestones and interactive elements
- **GitHub Integration**: Stable integration with live repository data and 1-hour ISR caching
- **Vercel Analytics**: Added `@vercel/analytics` (v1.6.1) for visitor tracking and performance monitoring in production

## Architecture Overview

This is a **Next.js 16.0.7** portfolio site using **React 19.2.0** and the **App Router** with a hybrid JavaScript/TypeScript approach. The site showcases projects with data merged from GitHub API and custom descriptions.

### Key Architectural Patterns

**Hybrid Data System**: Projects combine live GitHub data with custom editorial content
- `app/data/customProjects.js`: Contains custom project metadata (taglines, descriptions, images, status)
- `app/lib/getProjects.js`: Fetches GitHub repos via API and merges with custom data
- GitHub repo names in `customProjects` are used as keys to fetch live data (stars, topics, URLs)
- Data fetching happens at build time (static generation) with 1-hour revalidation

**Mixed Language Strategy**: TypeScript for pages/components requiring type safety, JavaScript for data/utilities
- Pages (`.tsx`): TypeScript with explicit interfaces
- Components: Mixed - `Navigation.tsx` (TypeScript), `ProjectCard.js` (JavaScript)
- Data layer: JavaScript files
- Config: `tsconfig.json` has `strict: false` and `allowJs: true`

**GitHub Integration**:
- Username configured in `app/lib/getProjects.js` as `GITHUB_USERNAME` (currently 'footnote42')
- Uses GitHub REST API v3 with `next: { revalidate: 3600 }` caching (1-hour revalidation)
- Falls back gracefully if GitHub fetch fails (logs warning, uses custom data only)

**Project Status System**:
- Status values: `Unleashed`, `Active`, `Conceptual`, `Foundation`
- Color-coded badges in `ProjectCard.js` (see `statusColors` mapping)
- `Active` status includes pulsing animation

### Page Structure

- `/` - Home page with featured and all projects
- `/projects` - Detailed project descriptions with problem/obstacles sections
- `/journey` - Interactive timeline (client-side state for expand/collapse)
- `/about` - Biography and approach
- `/contact` - Contact information

**Note**: Journey page is `'use client'` directive for interactive timeline features.

## Styling

- **Tailwind CSS 4.x** via `@tailwindcss/postcss` (no config file)
- Theme tokens defined in `app/globals.css` using `@theme inline`
- Dark mode: System preference via `@media (prefers-color-scheme: dark)`
- Custom CSS properties for background/foreground colors
- Fonts: Geist Sans and Geist Mono loaded via `next/font/google` in `app/layout.js`

## Project Images

Images referenced in `customProjects` should be placed in `public/images/projects/`
- Example: `image: "/images/projects/rugby-session-planner.png"`
- ProjectCard falls back to placeholder emoji if image missing

## React Compiler

This project uses the **React Compiler** (experimental optimization):
- Enabled via `reactCompiler: true` in `next.config.mjs`
- `babel-plugin-react-compiler` included as dev dependency

## Monitoring & Analytics

**Vercel Analytics** is integrated for production monitoring:
- Package: `@vercel/analytics` v1.6.1
- Component: `<Analytics />` in root layout (`app/layout.js`)
- Tracks page views, visitor data, and Web Vitals automatically
- Only active in production deployments (no impact on local development)

## Important Gotchas

1. **Data flow**: To add a new project, add entry to `customProjects` with GitHub repo name as key
2. **Build-time data**: GitHub data fetched during build, not client-side
3. **Navigation anchors**: ProjectCard generates anchor IDs from project names (lowercase, hyphenated)
4. **Mixed extensions**: Don't assume all files are TypeScript - check file extension before refactoring
