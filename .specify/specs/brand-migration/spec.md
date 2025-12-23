# Feature Specification: Brand Migration to Workshop Aesthetic

**Created:** December 23, 2025
**Status:** Planning
**Type:** Visual Refresh
**Priority:** High
**Constitution Alignment:** Mobile-First, Substance Over Flash, Authentic Voice

---

## Overview

Migrate all portfolio pages from the current system-preference light/dark theme to a fixed dark "workshop aesthetic" brand using the brand component library built in Phase 2.

### Problem Statement

The current portfolio uses generic Tailwind colors and system dark mode. The brand identity guide defines a distinctive "workshop aesthetic" with:
- Deep Slate dark background (#0f1419)
- Electric Cyan accent (#00d9ff) for interactive elements
- JetBrains Mono for headings (technical precision)
- Inter for body text (approachable readability)
- Subtle glow effects that reward exploration

**Current State:** 8 pages using Tailwind's `dark:bg-slate-900` and generic styling
**Desired State:** Cohesive workshop aesthetic across all pages using brand components

---

## User Stories

### As a Site Visitor
- I want a distinctive, memorable visual design that stands out from typical portfolios
- I want smooth, subtle interactions that feel polished without being distracting
- I want excellent mobile readability (constitution: mobile-first)
- I want the site to load quickly without visual flicker

### As Wayne (Site Owner)
- I want the brand to feel distinctly "mine" not template-generated
- I want to maintain all existing functionality while improving aesthetics
- I want the ability to rollback instantly if something breaks
- I want clear documentation of what changed for future reference

### As a Recruiter/Colleague
- I want professional presentation that demonstrates attention to detail
- I want clear hierarchy and readability to quickly scan content
- I want the site to work flawlessly on my phone

---

## Functional Requirements

### 1. Visual System Migration

**FR-1.1: Color Palette**
- Replace all Tailwind `dark:*` utilities with brand CSS variables
- Deep Slate (#0f1419) as primary background
- Charcoal (#1c2128) for elevated surfaces (cards)
- Warm White (#e6edf3) for text
- Electric Cyan (#00d9ff) for links and primary CTAs
- Amber Glow (#f59e0b) for secondary CTAs
- Muted Purple (#8b5cf6) for tags/metadata

**FR-1.2: Typography**
- All headings (h1-h4) use JetBrains Mono font
- All body text uses Inter font
- Fluid type scale responds to viewport width
- Line heights: 1.2 for headings, 1.6 for body

**FR-1.3: Component Replacement**
- Use BrandCard for all card-like containers
- Use BrandHeading for all heading elements
- Use BrandLink for all text links
- Use BrandButton for all CTAs
- Use BrandTag for all metadata badges

### 2. Interactive Elements

**FR-2.1: Hover Effects**
- Cards show cyan glow on hover (0 0 30px rgba(0, 217, 255, 0.1))
- Cards lift slightly (-2px translateY) on hover
- Transitions use smooth easing (cubic-bezier(0.4, 0, 0.2, 1))
- All transitions complete in 300ms

**FR-2.2: Link Behavior**
- Links show subtle underline on hover
- Links get text-shadow glow effect
- External links open in new tab with proper rel attributes

**FR-2.3: Button Interactions**
- Primary buttons have cyan glow shadow
- Secondary buttons show amber outline
- Arrow icons shift right on hover
- Buttons lift slightly on hover

### 3. Page-Specific Requirements

**FR-3.1: Homepage (`/`)**
- Hero section with brand background
- Featured projects grid using BrandCard
- All projects section with consistent styling
- Maintain GitHub API integration
- Preserve project status badges with brand colors

**FR-3.2: Projects Page (`/projects`)**
- Detailed project descriptions in BrandCard
- Problem/solution sections with proper hierarchy
- Tech stack displayed with BrandTag
- CTAs use BrandButton (Try It / Learn More)

**FR-3.3: Blog Pages (`/blog`, `/blog/[slug]`)**
- Blog index cards use BrandCard with hover
- Featured badge styled with brand colors
- Individual post markdown rendering preserves hierarchy
- Code blocks get charcoal background with purple syntax
- Reading time and date metadata use BrandTag styling

**FR-3.4: Journey Page (`/journey`)**
- Timeline maintains client-side interactivity
- Milestone cards use BrandCard
- Expand/collapse functionality preserved
- Dates and metadata use brand typography

**FR-3.5: About Page (`/about`)**
- Clean, readable biography layout
- Brand typography for headings and body
- Professional but personal tone maintained

**FR-3.6: Contact Page (`/contact`)**
- Form inputs styled with brand colors
- Submit button uses BrandButton primary variant
- GitHub link uses BrandLink with external flag

### 4. Mobile-First Requirements (Constitution Priority)

**FR-4.1: Mobile Testing**
- Test each page on actual mobile device before completion
- Touch targets minimum 44x44px
- Text readable without zooming
- Hover effects don't break mobile experience

**FR-4.2: Responsive Behavior**
- Grids stack on mobile (single column)
- Cards maintain padding and spacing on small screens
- Font sizes scale appropriately (fluid typography)
- Navigation accessible on mobile

### 5. Performance & Technical

**FR-5.1: No Visual Flicker**
- Remove dark mode media query (fixed dark theme)
- No flash of unstyled content
- Fonts load without layout shift

**FR-5.2: Preserve Functionality**
- All links work
- All forms submit
- GitHub API integration intact
- Navigation functional
- Analytics tracking continues

**FR-5.3: Build Compatibility**
- No TypeScript errors
- No ESLint warnings
- Production build succeeds
- Vercel deployment works

---

## Success Criteria

### Must Have (P0)
- [ ] All 8 pages migrated to brand components
- [ ] Zero broken links or functionality
- [ ] Mobile experience tested on real device
- [ ] Production build succeeds
- [ ] All pages use brand color palette consistently
- [ ] Typography uses JetBrains Mono + Inter

### Should Have (P1)
- [ ] Hover effects work smoothly on all interactive elements
- [ ] Cards show cyan glow consistently
- [ ] Buttons have arrow animation
- [ ] Code syntax highlighting uses brand colors

### Nice to Have (P2)
- [ ] Scroll progress indicator (from brand guide)
- [ ] Subtle ambient glow following cursor
- [ ] Code block copy buttons with brand styling

---

## Out of Scope

**Explicitly NOT included in this migration:**
- Light mode toggle (brand is dark-only)
- New features or functionality changes
- Content rewrites (preserve existing copy)
- Navigation restructure
- New pages or sections
- Backend changes
- API modifications
- Performance optimization beyond removing dark mode flicker
- Accessibility audit (maintain current level)

---

## Constitution Alignment

### Mobile-First ✅
- Requirement FR-4: Mobile testing mandatory for each page
- Touch targets specified
- Responsive behavior defined

### Substance Over Flash ✅
- Functionality preserved (FR-5.2)
- Subtle hover effects, not flashy animations
- Glow effects are rewards for exploration, not distractions

### Authentic Voice ✅
- Brand designed to be distinctly "Wayne's" not generic
- Typography choices (JetBrains Mono) reference technical roots
- Workshop aesthetic reflects "late-night coding" authenticity

### Professional Standards ✅
- Clean, polished presentation
- Proper accessibility considerations (touch targets, contrast)
- Production-ready quality requirements

---

## Risks & Mitigations

### Risk: Visual Breaking Changes
**Mitigation:**
- Phased rollout (one page at a time)
- Git branch with easy rollback
- Screenshot comparison before/after
- Backup of original page styling

### Risk: Mobile Experience Degradation
**Mitigation:**
- Constitution mandates mobile testing before completion
- Test on actual device, not just browser DevTools
- Touch target size requirements specified

### Risk: Build Failures
**Mitigation:**
- Test build after each page migration
- Commit working pages incrementally
- Use TypeScript checking throughout

### Risk: Performance Regression
**Mitigation:**
- Font loading optimized (weights specified)
- CSS variables more performant than inline styles
- Remove unused dark mode code

---

## Dependencies

**Prerequisites:**
- ✅ Phase 1: CSS variables and fonts loaded
- ✅ Phase 2: Brand component library built and tested
- ✅ Brand preview page validates design

**External:**
- JetBrains Mono font (Google Fonts)
- Inter font (Google Fonts)
- Next.js 16.0.7 compatibility
- Tailwind CSS 4.x support

---

## Validation & Testing

### Per-Page Checklist
- [ ] Mobile test on actual device
- [ ] Desktop view intentional (not broken)
- [ ] All links functional
- [ ] Hover states work
- [ ] No console errors
- [ ] Build succeeds
- [ ] Screenshot comparison looks correct

### Final Validation
- [ ] All 8 pages complete
- [ ] Cross-browser test (Chrome, Safari, Firefox)
- [ ] Lighthouse score maintained or improved
- [ ] Git history clean with incremental commits
- [ ] Documentation updated (CLAUDE.md)

---

## Implementation Notes

**Migration Order (Recommended):**
1. `/about` - Simplest page, low complexity
2. `/contact` - Simple form, test button styling
3. `/journey` - Test client component migration
4. `/blog` - Test card grids and markdown rendering
5. `/blog/[slug]` - Test individual post styling
6. `/projects` - More complex with detailed cards
7. `/` (Homepage) - LAST - Highest traffic

**Between Each Page:**
- Commit to git
- Run `npm run build`
- Test in browser
- Mobile device check
- Move to next page

**Rollback Plan:**
- Branch: `brand-refresh` (isolated)
- Each commit: single page migration
- Rollback: `git revert <commit>` or `git reset`

---

## Documentation Requirements

**Update on Completion:**
- `CLAUDE.md` - Remove old dark mode references
- `CLAUDE.md` - Document brand component usage
- `README.md` - Update features list
- `Docs/DevPlan.md` - Mark brand refresh complete

**Create:**
- Implementation log in `.specify/specs/brand-migration/implementation-log.md`
- Before/after screenshot comparison document

---

**Specification Version:** 1.0
**Last Updated:** December 23, 2025
**Next Step:** Create implementation plan (`plan.md`)
