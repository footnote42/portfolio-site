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

### Latest Updates (Dec 19, 2025)
- **Battlepoos Project**: Added multiplayer battleships game with toilet humor twist featuring WebSocket multiplayer and real-time state synchronization
- **Blog Feature**: Complete markdown-based blog system with frontmatter support, dynamic routing, reading time estimates, and featured posts (Phase 1 complete Dec 13, 2025)
- **Rugby Council AI Project**: Added multi-model collaboration project to portfolio featuring three AI models that independently plan, review, and synthesize rugby training sessions (Dec 14, 2025)
- **Journey Milestone**: Added Dec 14 entry documenting Rugby Council AI deployment and evolution from comparative analysis concepts
- **Featured Projects**: Unfeatured Reflective Practice Coach to maintain three featured projects (Squad Rotation Tool, Rugby Session Planner, Rugby Council AI)

### Security Updates
- **Next.js 16.0.7** (Dec 2025): Updated from 16.0.3 to address React Server Components CVE vulnerabilities

### New Features
- **Blog System** (`/blog`): Markdown-based blog with frontmatter, dynamic routing (`/blog/[slug]`), reading time estimates, and featured post badges
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
- `/blog` - Blog index listing all posts (sorted by date, newest first)
- `/blog/[slug]` - Individual blog post pages with markdown rendering
- `/journey` - Interactive timeline (client-side state for expand/collapse)
- `/about` - Biography and approach
- `/contact` - Contact information

**Note**: Journey page is `'use client'` directive for interactive timeline features.

### Blog System Architecture

**Markdown-Based Blog** (Phase 1 - Complete):
- Blog posts stored as markdown files in `content/blog/`
- `app/lib/getBlogPosts.js`: Reads markdown files, parses frontmatter (using `gray-matter`), calculates reading time
- Frontmatter structure: `title`, `date`, `excerpt`, `slug`, `featured` (boolean)
- Posts sorted by date (newest first) automatically
- Dynamic routing: `/blog/[slug]` for individual posts
- Markdown rendering: Uses `react-markdown` with `remark-gfm` for GitHub Flavored Markdown
- Reading time: Auto-calculated based on ~200 words per minute
- Template available: `content/blog/post-template.md`

**Dependencies**:
- `gray-matter`: Frontmatter parsing
- `react-markdown`: Markdown to React rendering
- `remark-gfm`: GitHub Flavored Markdown support (tables, strikethrough, etc.)

**Adding New Posts**:
1. Create `.md` file in `content/blog/` with frontmatter
2. Commit to repo
3. Site automatically displays post on next build/revalidation

**Future**: Phase 2 planned for Supabase backend + admin panel (see `Docs/DevPlan.md`)

## Styling

**Brand System** - Workshop Aesthetic:
- **Tailwind CSS 4.x** via `@tailwindcss/postcss` (no config file)
- Brand CSS variables defined in `app/globals.css`
- Fixed color scheme (no dark mode toggle) - workshop aesthetic with deep slate background
- **Typography**:
  - Headings: JetBrains Mono (monospace, technical feel)
  - Body: Inter (clean, readable sans-serif)
  - Fonts loaded via `next/font/google` in `app/layout.js`
- **Color Palette**:
  - Background: Deep Slate (#0f1419)
  - Surface: Charcoal (#1c2128)
  - Text: Warm White (#e6edf3)
  - Accent Cyan: Electric Cyan (#00d9ff) - primary CTAs
  - Accent Amber: Amber Glow (#f59e0b) - hover states, highlights
  - Accent Purple: Muted Purple (#8b5cf6) - code blocks

## Brand Component System

**Location**: `app/components/brand/`

The site uses a custom brand component library for consistent styling. **Always use these components** instead of raw HTML elements when building UI.

### Available Components

**BrandCard** - Container with brand styling
```jsx
import { BrandCard } from './components/brand';

<BrandCard hover={true} className="mb-8">
  {/* Content */}
</BrandCard>
```
- Props: `children`, `hover` (boolean), `className` (optional)
- Provides: Charcoal background, subtle borders, optional hover lift effect

**BrandHeading** - Semantic headings with brand typography
```jsx
import { BrandHeading } from './components/brand';

<BrandHeading level={1} className="mb-6">
  Page Title
</BrandHeading>
```
- Props: `level` (1-6), `children`, `className` (optional)
- Font: JetBrains Mono
- Color: Warm white with subtle amber glow on h1

**BrandLink** - Internal and external links
```jsx
import { BrandLink } from './components/brand';

// Internal link
<BrandLink href="/about">About</BrandLink>

// External link (opens in new tab)
<BrandLink href="https://github.com" external>
  GitHub
</BrandLink>
```
- Props: `href`, `children`, `external` (boolean), `className` (optional)
- Automatically handles external link behavior (target="_blank", rel attributes)
- Hover: Amber color transition

**BrandButton** - Interactive buttons
```jsx
import { BrandButton } from './components/brand';

<BrandButton variant="primary" onClick={handleClick}>
  Submit
</BrandButton>
```
- Props: `variant` ("primary" | "secondary"), `onClick`, `children`, `className` (optional)
- Primary: Electric cyan background with glow effect
- Secondary: Transparent with border, hover effect
- **Note**: For navigation, use `BrandLink` instead

**BrandTag** - Labels and badges
```jsx
import { BrandTag } from './components/brand';

<BrandTag>react</BrandTag>
```
- Props: `children`, `className` (optional)
- Styling: Purple accent with subtle background
- Common use: Technology tags, status labels

### Usage Guidelines

1. **Import**: Always import from `./components/brand` or `../components/brand`
2. **Navigation**: Use `BrandLink` for all links (internal and external)
3. **Headings**: Use `BrandHeading` instead of `<h1>`, `<h2>`, etc.
4. **Cards**: Wrap content sections in `BrandCard` for consistent containers
5. **Typography**: For body text, use `font-['Inter',sans-serif]` class
6. **Colors**: Reference brand CSS variables:
   - `var(--color-bg)` - Background
   - `var(--color-text)` - Text
   - `var(--color-accent-cyan)` - Primary accent
   - `var(--color-accent-amber)` - Secondary accent
   - `var(--color-border)` - Borders

### Example: Complete Page Component

```jsx
import { BrandCard, BrandHeading, BrandTag, BrandLink } from './components/brand';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <BrandHeading level={1} className="mb-6">
          Projects
        </BrandHeading>

        <BrandCard hover={true} className="mb-8">
          <BrandHeading level={2} className="mb-4">
            Project Name
          </BrandHeading>

          <p className="text-[var(--color-text)] mb-4 font-['Inter',sans-serif]">
            Project description
          </p>

          <div className="flex gap-2 mb-4">
            <BrandTag>react</BrandTag>
            <BrandTag>typescript</BrandTag>
          </div>

          <BrandLink href="/projects/details" external>
            Learn More →
          </BrandLink>
        </BrandCard>
      </main>
    </div>
  );
}
```

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

## Spec-Driven Development (Spec-Kit)

This project uses **GitHub Spec Kit** methodology for structured feature development:

**Constitution:** `.specify/memory/constitution.md` - Project governing principles derived from `Docs/project_philosophy.md`

**Workflow Commands:** Available via `/speckit.*` skills in Claude Code
- `/speckit.specify [feature-name]` - Create functional specification
- `/speckit.plan [feature-name]` - Design technical implementation
- `/speckit.tasks [feature-name]` - Generate task breakdown
- `/speckit.implement [feature-name]` - Execute implementation
- `/speckit.clarify` - Ask clarifying questions
- `/speckit.analyze` - Check consistency

**Directory Structure:**
```
.specify/
├── memory/
│   └── constitution.md          # Project principles (source of truth)
└── specs/
    └── [feature-name]/
        ├── spec.md              # Functional requirements
        ├── plan.md              # Technical design
        ├── tasks.md             # Actionable breakdown
        └── implementation-log.md # Execution notes
```

**Using Spec-Kit:**
1. Create spec: `/speckit.specify new-feature-name "description"`
2. Review and refine the generated specification
3. Plan implementation: `/speckit.plan new-feature-name`
4. Generate tasks: `/speckit.tasks new-feature-name`
5. Execute: `/speckit.implement new-feature-name`

**Integration with Existing Workflow:**
- Spec-Kit provides structure for complex features
- TodoWrite continues to track execution progress
- `Docs/DevPlan.md` documents high-level project roadmap
- Constitution ensures mobile-first, substance-over-flash principles

**CLI Tool:** `specify` command installed via `uv` (Python 3.11+)
- Note: CLI has Windows console encoding issues - use skills instead

## Important Gotchas

1. **Data flow**: To add a new project, add entry to `customProjects` with GitHub repo name as key
2. **Build-time data**: GitHub data fetched during build, not client-side
3. **Blog posts**: Must be markdown files in `content/blog/` with valid frontmatter - no database yet
4. **Navigation anchors**: ProjectCard generates anchor IDs from project names (lowercase, hyphenated)
5. **Mixed extensions**: Don't assume all files are TypeScript - check file extension before refactoring
6. **Blog template**: `content/blog/post-template.md` is excluded from blog post listing automatically
