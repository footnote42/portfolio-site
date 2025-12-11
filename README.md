# Portfolio Site

A modern, interactive portfolio website built with Next.js 16, React 19, and Tailwind CSS 4. Features dynamic project showcases with live GitHub integration, an interactive career timeline, and a hybrid JavaScript/TypeScript architecture.

## Features

- **Dynamic Project Showcase**: Combines live GitHub repository data (stars, topics, URLs) with custom editorial content
- **Interactive Timeline**: Visual journey through career milestones with expandable sections
- **GitHub Integration**: Automatically fetches and displays repository information with 1-hour cache revalidation
- **Project Status System**: Color-coded badges (`Unleashed`, `Active`, `Conceptual`, `Foundation`) with animations
- **Responsive Design**: Mobile-first approach with dark mode support via system preferences
- **React Compiler**: Experimental optimizations enabled for better performance
- **Hybrid TypeScript/JavaScript**: Type safety where needed, flexibility elsewhere

## Tech Stack

- **Framework**: Next.js 16.0.7 (App Router)
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4.x via PostCSS
- **Languages**: TypeScript + JavaScript (hybrid approach)
- **Fonts**: Geist Sans and Geist Mono
- **API**: GitHub REST API v3
- **Analytics**: Vercel Analytics 1.6.1

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── data/
│   └── customProjects.js    # Custom project metadata and descriptions
├── lib/
│   └── getProjects.js        # GitHub API integration and data merging
├── (routes)/
│   ├── page.tsx              # Home page with featured projects
│   ├── projects/             # Detailed project descriptions
│   ├── journey/              # Interactive career timeline
│   ├── about/                # Biography and approach
│   └── contact/              # Contact information
├── components/
│   ├── Navigation.tsx        # Site navigation (TypeScript)
│   └── ProjectCard.js        # Project display component (JavaScript)
└── globals.css               # Tailwind theme tokens and custom CSS
```

## Configuration

- **GitHub Username**: Configured in `app/lib/getProjects.js` as `GITHUB_USERNAME`
- **Project Images**: Place in `public/images/projects/`
- **Custom Projects**: Edit `app/data/customProjects.js` to add/modify projects
- **TypeScript**: `strict: false` and `allowJs: true` for hybrid approach

## Adding Projects

1. Add entry to `app/data/customProjects.js` with GitHub repo name as key
2. Include tagline, description, image path, and status
3. Add project image to `public/images/projects/`
4. GitHub data (stars, topics, URLs) fetches automatically at build time

## AI-Assisted Development

This project includes `CLAUDE.md` with comprehensive architectural documentation for AI-assisted development with Claude Code. See that file for detailed patterns, gotchas, and development guidelines.

## Deployment

Built for deployment on Vercel. The site uses static generation with ISR (Incremental Static Regeneration) for GitHub data.

## License

Private project
