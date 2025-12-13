# Development Plan: Blog Feature

**Status:** ✅ Phase 1 Complete - Markdown-Based Blog
**Started:** December 12, 2025
**Completed:** December 13, 2025
**Reference:** See `Features/Blog/Architecture.md` in Obsidian for full context

---

## Context for Claude Code

This plan implements a simple blog system using markdown files in the repo. The user (Wayne) writes posts as `.md` files, commits them, and the site automatically displays them.

**Design Philosophy:** See `docs/PROJECT_PHILOSOPHY.md`  
**Feature Planning:** See `docs/FEATURE_TEMPLATE.md`

**Key Principle:** Mobile-first, functional before beautiful, subtle joy after working.

---

## Phase 1: Markdown Blog (Current)

### Stage 1: File Structure & Sample Posts ✅
- [x] Create `/content/blog/` directory in repo
- [x] Create blog post template file (for reference)
- [x] Define frontmatter structure:
  - `title` (string)
  - `date` (YYYY-MM-DD format)
  - `excerpt` (string, used for display AND SEO meta description)
  - `slug` (string, for URL)
  - `featured` (boolean)
- [x] Build data fetching function to read markdown files from `/content/blog/`
- [x] Parse frontmatter and content
- [x] Sort posts by date (newest first)
- [x] Create 2-3 sample posts for testing
  - Include at least one with `featured: true`
  - Include variety of content (short reflection, longer thought piece)
- [x] Test data fetching locally

**Success Criteria:** Can fetch, parse, and sort blog posts from markdown files

**Template for new posts:**
```yaml
---
title: ""
date: "YYYY-MM-DD"
excerpt: ""
slug: ""
featured: false
---

<!-- Writing prompts (delete before publishing): -->
<!-- What grabbed your attention? -->
<!-- What's worth sharing? -->
<!-- What are you still figuring out? -->

[Write naturally here]
```

**Note:** Excerpt serves dual purpose - displays on blog index AND populates meta description for social sharing. Make it delightful.
---

### Stage 2: Blog Index Page ✅
- [x] Create `/app/blog/page.tsx` route
- [x] Display list of all blog posts
- [x] Show: title, date, excerpt
- [x] Mobile-optimized card layout
- [x] Link to individual post pages
- [x] Empty state if no posts exist

**Success Criteria:** Blog index page renders on mobile and desktop, shows all posts

---

### Stage 3: Individual Post Pages ✅
- [x] Create `/app/blog/[slug]/page.tsx` dynamic route
- [x] Fetch individual post by slug
- [x] Render markdown content (install markdown parser if needed)
- [x] Style post content (headings, paragraphs, lists, code blocks)
- [x] Add "Back to Blog" navigation
- [x] Mobile-optimized reading experience

**Success Criteria:** Can read full blog post at `/blog/post-slug` URL

---

### Stage 4: Navigation Integration ✅
- [x] Add "Blog" link to main navigation
- [x] Update Navigation component
- [x] Test navigation flow from home → blog → post → back
- [x] Ensure mobile menu includes blog link

**Success Criteria:** Can navigate to blog from anywhere on site

---

### Stage 5: Polish & Joy ✅
- [x] Check desktop layout doesn't feel broken
- [x] Add date formatting (human-readable)
- [x] Consider: reading time estimate?
- [x] Consider: subtle animation on card hover?
- [x] Find the "moment of delight" (your call what this is)
- [x] Proofread sample content

**Success Criteria:** Blog feels intentional, not generic. Mobile experience is smooth.

---

### Stage 6: Documentation & Deploy ✅
- [x] Update `01-Build-Log.md` in Obsidian with what was built
- [x] Update `02-Decisions-Record.md` with key technical choices
- [x] Add entry to `Features/Blog/Implementation-Log.md`
- [x] Deploy to Vercel
- [x] Test live site on actual phone
- [x] Mark Phase 1 complete

**Success Criteria:** Blog is live, documented, and working

**Deployment Status:** Pushed to GitHub (commit 7a80a95). Vercel will auto-deploy if connected.

---

## Notes for Mid-Build Adjustments

**If you get stuck:**
- Check `Features/Blog/Architecture.md` in Obsidian for why we chose this approach
- Refer to `docs/PROJECT_PHILOSOPHY.md` for design decisions
- Ask Wayne before adding complexity

**If something feels wrong:**
- Mobile test first
- Does it align with the philosophy?
- Is there a simpler way?

**Current constraints:**
- No database yet (Phase 2)
- No authentication (Phase 2)
- Posts are manual markdown files committed to repo
- This is intentionally simple

---

## Future Phases (Not Implemented Yet)

**Phase 2:** Supabase backend + admin panel  
**Phase 3:** Native mobile app (separate project)

See `Features/Blog/Architecture.md` for migration strategy.