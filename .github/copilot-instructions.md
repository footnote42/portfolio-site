# Copilot / AI Agent Instructions

Purpose: Short, actionable guidance so an AI coding agent can be immediately productive in this repo.

See `CLAUDE.md` for fuller architecture, recent changes, and gotchas.

- **Quick commands:** `npm run dev` (dev server), `npm run build`, `npm start`, `npm run lint`.
- **No tests** are present; check `package.json` before assuming test tooling.

Big picture
- This is a Next.js (App Router) portfolio site (Next 16 / React 19) that mixes TypeScript and JavaScript intentionally.
- Data for projects is a hybrid of live GitHub data + editorial overrides. Build-time fetches use `next: { revalidate: 3600 }`.

Key files and patterns (start here)
- `app/data/customProjects.js`: canonical place to add or edit project metadata (keyed by GitHub repo name).
- `app/lib/getProjects.js`: fetches GitHub repos, merges with `customProjects`. `GITHUB_USERNAME` and revalidation live here.
- `app/components/ProjectCard.js`: renders status badges (see `statusColors`) and image fallback behavior (emoji placeholder).
- `app/layout.js`: global layout, fonts, and `<Analytics />` from `@vercel/analytics` (production-only).
- `next.config.mjs`: `reactCompiler: true` is enabled (React Compiler optimizations) — be careful when changing build tooling.
- `app/journey/page.tsx`: client-side (`'use client'`) interactive timeline — keep interactive code client-only.
- `public/images/projects/`: add images used by `customProjects` (paths referenced directly).

Conventions and gotchas
- Add projects by editing `customProjects` using the GitHub repo name as the key — `getProjects` expects those keys.
- GitHub fetch happens at build-time; if the API fails the site falls back to the custom data only (logging occurs in `getProjects`).
- Project status values are finite: `Unleashed`, `Active`, `Conceptual`, `Foundation`. `Active` has animation in `ProjectCard.js`.
- Anchor IDs are generated from project names (lowercased, hyphenated) — changing the naming breaks deep links.
- Mixed extensions: repo uses `.tsx` for typed pages/components and `.js` for many data/utils. `tsconfig.json` has `allowJs: true`.

When editing
- Preserve the hybrid TS/JS boundary when practical; convert files only when there is a clear benefit and update `tsconfig.json` if necessary.
- If adding images, place them in `public/images/projects/` and reference the same path in `customProjects`.
- Run `npm run lint` and `npm run build` locally before proposing production changes.

If something is unclear or you need a style decision (e.g., convert a component to TypeScript), ask the maintainer and reference the above files.

Feedback: Please tell me if any section is missing detail or should be condensed further.
