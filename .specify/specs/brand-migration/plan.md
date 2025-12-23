# Implementation Plan: Brand Migration

**Specification:** `.specify/specs/brand-migration/spec.md`
**Created:** December 23, 2025
**Approach:** Incremental page migration with safety checkpoints

---

## Technical Approach

### Strategy: Incremental Component Replacement

Replace existing Tailwind utility classes with brand components on a page-by-page basis. This approach:
- Minimizes risk by isolating changes
- Allows testing between migrations
- Enables easy rollback per page
- Maintains site functionality throughout

**Not a rewrite** - preserve HTML structure, replace styling only.

---

## Architecture

### Current State
```
app/
├── page.tsx              (Homepage - uses Tailwind dark:*)
├── about/page.tsx        (Uses Tailwind utilities)
├── contact/page.tsx      (Uses Tailwind utilities)
├── journey/page.tsx      (Client component, Tailwind)
├── blog/page.tsx         (Uses Tailwind utilities)
├── blog/[slug]/page.tsx  (Markdown rendering, Tailwind)
├── projects/page.tsx     (Uses Tailwind utilities)
└── components/
    └── Navigation.tsx    (Shared nav, Tailwind)
```

### Target State
```
app/
├── page.tsx              (Uses BrandCard, BrandHeading, etc.)
├── about/page.tsx        (Uses brand components)
├── contact/page.tsx      (Uses brand components)
├── journey/page.tsx      (Uses brand components)
├── blog/page.tsx         (Uses brand components)
├── blog/[slug]/page.tsx  (Uses brand components)
├── projects/page.tsx     (Uses brand components)
└── components/
    ├── Navigation.tsx    (Migrated to brand)
    └── brand/            (Already built ✅)
        ├── BrandCard.jsx
        ├── BrandHeading.jsx
        ├── BrandLink.jsx
        ├── BrandButton.jsx
        └── BrandTag.jsx
```

---

## Files to Create/Modify

### Per-Page Migration Pattern

**For each page (`/about`, `/contact`, etc.):**

1. **Read current page** - Understand existing structure
2. **Create backup** - Copy to `.backup` extension
3. **Import brand components**:
   ```jsx
   import { BrandCard, BrandHeading, BrandLink, BrandButton, BrandTag } from '../components/brand';
   ```
4. **Replace root container**:
   ```jsx
   // Before
   <div className="min-h-screen bg-stone-50 dark:bg-slate-900">

   // After
   <div className="min-h-screen bg-[var(--color-bg)]">
   ```
5. **Replace components systematically**:
   - Headings → `<BrandHeading level={1-4}>`
   - Text → `text-[var(--color-text)]` + Inter font
   - Links → `<BrandLink href="...">`
   - Buttons → `<BrandButton variant="primary|secondary">`
   - Cards → `<BrandCard>`
   - Tags → `<BrandTag>`

6. **Test immediately** - Verify page works
7. **Commit** - Single page per commit

---

## Component Mapping Guide

### Typography Replacement

| Current | Brand Component | Example |
|---------|-----------------|---------|
| `<h1 className="text-4xl font-bold">` | `<BrandHeading level={1}>` | `<BrandHeading level={1}>About</BrandHeading>` |
| `<h2 className="text-2xl">` | `<BrandHeading level={2}>` | `<BrandHeading level={2}>Projects</BrandHeading>` |
| `<p className="text-slate-700 dark:text-slate-300">` | `<p className="text-[var(--color-text)] font-[family-name:var(--font-inter)]">` | Body text |

### Interactive Elements

| Current | Brand Component | Example |
|---------|-----------------|---------|
| `<a className="text-blue-600 hover:underline">` | `<BrandLink href="#">` | `<BrandLink href="/projects">Projects</BrandLink>` |
| `<button className="bg-blue-500 px-4 py-2 rounded">` | `<BrandButton variant="primary">` | `<BrandButton variant="primary">Submit</BrandButton>` |
| Generic card div | `<BrandCard>` | `<BrandCard hover={true}>{content}</BrandCard>` |

### Metadata & Tags

| Current | Brand Component | Example |
|---------|-----------------|---------|
| `<span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">` | `<BrandTag>` | `<BrandTag>Next.js</BrandTag>` |

---

## Page-Specific Implementation Plans

### 1. About Page (`app/about/page.tsx`)

**Complexity:** Low
**Estimated Changes:** ~15 lines

**Implementation:**
```jsx
// Import brand components
import { BrandHeading } from '../components/brand';

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <BrandHeading level={1}>About</BrandHeading>

        <p className="text-[var(--color-text)] font-[family-name:var(--font-inter)] text-[length:var(--text-base)] leading-relaxed">
          {/* Existing bio text */}
        </p>

        {/* More paragraphs with same styling */}
      </div>
    </div>
  );
}
```

**Testing:**
- [ ] Heading uses JetBrains Mono
- [ ] Body text uses Inter
- [ ] Text readable on dark background
- [ ] Mobile spacing appropriate

---

### 2. Contact Page (`app/contact/page.tsx`)

**Complexity:** Low-Medium (has form)
**Estimated Changes:** ~20 lines

**Implementation:**
- Import BrandHeading, BrandButton
- Style form inputs with brand colors
- Replace submit button with `<BrandButton variant="primary">`
- Style GitHub link with `<BrandLink external>`

**Form Input Styling:**
```jsx
<input
  className="w-full px-4 py-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] focus:border-[var(--color-accent-cyan)] focus:outline-none transition-colors"
  placeholder="Your name"
/>
```

**Testing:**
- [ ] Form inputs visible with brand colors
- [ ] Submit button shows cyan glow
- [ ] External link has proper styling
- [ ] Form functionality preserved

---

### 3. Journey Page (`app/journey/page.tsx`)

**Complexity:** Medium (client component, interactive)
**Estimated Changes:** ~30 lines

**Challenges:**
- Client component (`'use client'`)
- Expand/collapse state management
- Timeline visual elements

**Implementation:**
- Preserve `'use client'` directive
- Import brand components
- Replace milestone cards with BrandCard
- Maintain onClick handlers
- Update button styling for expand/collapse

**Testing:**
- [ ] Expand/collapse works
- [ ] Cards show hover effects
- [ ] Timeline visual hierarchy maintained
- [ ] Mobile interaction smooth

---

### 4. Blog Index (`app/blog/page.tsx`)

**Complexity:** Medium
**Estimated Changes:** ~25 lines

**Implementation:**
- Import BrandCard, BrandHeading, BrandLink, BrandTag
- Blog post cards use BrandCard with hover
- Featured badge styled with brand colors
- Reading time and date use brand typography

**Card Structure:**
```jsx
<BrandCard>
  {featured && <BrandTag>Featured</BrandTag>}
  <BrandHeading level={2}>{title}</BrandHeading>
  <p className="text-[var(--color-text)] opacity-90">{excerpt}</p>
  <BrandLink href={`/blog/${slug}`}>Read more</BrandLink>
</BrandCard>
```

**Testing:**
- [ ] Cards show hover glow
- [ ] Featured badge prominent
- [ ] Reading time visible
- [ ] Grid responsive on mobile

---

### 5. Blog Post (`app/blog/[slug]/page.tsx`)

**Complexity:** Medium-High (markdown rendering)
**Estimated Changes:** ~35 lines

**Challenges:**
- Markdown content styling
- Code block highlighting
- Maintaining react-markdown compatibility

**Implementation:**
- Wrap markdown in brand container
- Add custom component mappings for markdown elements
- Style code blocks with charcoal background

**Markdown Component Mapping:**
```jsx
<ReactMarkdown
  components={{
    h1: ({ children }) => <BrandHeading level={1}>{children}</BrandHeading>,
    h2: ({ children }) => <BrandHeading level={2}>{children}</BrandHeading>,
    a: ({ href, children }) => <BrandLink href={href}>{children}</BrandLink>,
    code: ({ children }) => (
      <code className="bg-[var(--color-surface)] text-[var(--color-accent-purple)] px-1 rounded">
        {children}
      </code>
    ),
  }}
>
  {content}
</ReactMarkdown>
```

**Testing:**
- [ ] Headings render with JetBrains Mono
- [ ] Links styled correctly
- [ ] Code blocks readable
- [ ] Inline code uses purple accent

---

### 6. Projects Page (`app/projects/page.tsx`)

**Complexity:** High
**Estimated Changes:** ~40 lines

**Challenges:**
- Detailed project cards
- Multiple CTAs per project
- Tech stack tags
- Problem/solution sections

**Implementation:**
- Each project in BrandCard
- Tech stack uses BrandTag
- "Try It" uses BrandButton primary
- "Learn More" uses BrandButton secondary

**Project Card Structure:**
```jsx
<BrandCard>
  <div className="flex flex-wrap gap-2 mb-4">
    {topics.map(topic => <BrandTag key={topic}>{topic}</BrandTag>)}
  </div>

  <BrandHeading level={2}>{name}</BrandHeading>
  <p className="text-[var(--color-text)] opacity-90">{description}</p>

  <div className="flex gap-3 mt-6">
    <BrandButton variant="primary" href={liveUrl}>Try It Live</BrandButton>
    <BrandButton variant="secondary" href={`/projects#${slug}`}>Learn More</BrandButton>
  </div>
</BrandCard>
```

**Testing:**
- [ ] All project cards styled consistently
- [ ] CTAs show proper variants
- [ ] Tags display tech stack clearly
- [ ] GitHub data still loads

---

### 7. Homepage (`app/page.tsx`)

**Complexity:** High (most traffic, most complex)
**Estimated Changes:** ~50 lines

**Challenges:**
- Featured projects section
- All projects grid
- GitHub API integration
- Project status badges

**Implementation:**
- Hero section with brand background
- Featured projects use BrandCard
- Status badges use brand colors:
  - Unleashed: Cyan
  - Active: Amber with pulse animation
  - Conceptual: Purple
  - Foundation: Muted

**Defer Until Last:**
- Highest traffic page
- Most complex layout
- Test all patterns on other pages first

**Testing:**
- [ ] Featured section prominent
- [ ] Status badges visible
- [ ] GitHub API works
- [ ] Mobile grid stacks properly

---

### 8. Navigation (`app/components/Navigation.tsx`)

**Complexity:** Medium (shared component)
**Estimated Changes:** ~20 lines

**Approach:**
- Style nav container with brand background
- Links use BrandLink styling
- Mobile menu (if exists) uses brand colors
- Sticky behavior preserved

**Consider:**
- Affects all pages when changed
- Test thoroughly before committing
- May want to migrate with first page or last

---

## Data Flow

### No Changes Required
- GitHub API integration remains identical
- Blog post fetching unchanged
- Project data structure preserved
- All `getProjects()`, `getBlogPosts()` functions untouched

### Styling Only
- Component props remain the same
- Data mapping unchanged
- Only presentation layer affected

---

## Mobile-First Strategy

### Per-Page Mobile Testing

**Test on actual device before committing each page:**

1. **Visual Check:**
   - Text readable without zoom
   - Spacing comfortable
   - Colors have sufficient contrast

2. **Interaction Check:**
   - Links tappable (44x44px minimum)
   - Buttons respond to touch
   - No hover-only functionality

3. **Layout Check:**
   - Cards stack in single column
   - No horizontal overflow
   - Images scale appropriately

---

## Risk Mitigation

### Safety Checkpoints

**Before Each Page:**
- [ ] Create backup: `cp page.tsx page.tsx.backup`
- [ ] Review component mapping guide
- [ ] Understand existing structure

**During Migration:**
- [ ] Make small, incremental changes
- [ ] Test in browser frequently
- [ ] Check mobile view

**After Each Page:**
- [ ] Run `npm run build` - verify build succeeds
- [ ] Test all links functional
- [ ] Mobile device test
- [ ] Git commit with descriptive message
- [ ] Screenshot for comparison

**Rollback Plan:**
```bash
# If page breaks
git checkout HEAD -- app/about/page.tsx

# If commit needs reverting
git revert <commit-hash>

# Nuclear option
git reset --hard <last-working-commit>
```

---

## Testing Strategy

### Per-Page Tests

**Functional:**
- All links navigate correctly
- Forms submit (if applicable)
- Interactive elements work (expand/collapse, etc.)
- No console errors

**Visual:**
- Headings use JetBrains Mono
- Body text uses Inter
- Colors match brand palette
- Hover effects smooth

**Responsive:**
- Mobile layout doesn't break
- Touch targets adequate size
- Text readable on small screens

**Build:**
- TypeScript compiles
- ESLint passes
- Production build succeeds

### Final Integration Tests

**Cross-Page:**
- Navigation works from all pages
- Consistent styling across site
- Brand cohesion maintained

**Performance:**
- Fonts load without flash
- No layout shift
- Page load time acceptable

---

## Deployment Strategy

### Vercel Preview Deployment

**Before merging to main:**
1. Push `brand-refresh` branch to GitHub
2. Vercel creates preview deployment automatically
3. Test preview URL on actual mobile device
4. Share preview with stakeholder (Wayne) for approval
5. Merge to main only after approval

### Rollback Strategy

**If issues in production:**
1. Revert merge commit in main
2. Push to trigger immediate redeployment
3. Fix issues in branch
4. Re-test preview deployment
5. Merge again when fixed

---

## Documentation Updates

### CLAUDE.md Updates

**Remove:**
- References to system dark mode
- Old Tailwind utility examples
- Geist font primacy

**Add:**
- Brand component usage examples
- CSS variable reference
- Migration completion notes

**Example Addition:**
```markdown
## Brand Components

This site uses a custom workshop aesthetic brand:

**Components:**
- `BrandCard` - Charcoal cards with cyan glow hover
- `BrandHeading` - JetBrains Mono headings
- `BrandLink` - Electric Cyan links
- `BrandButton` - Primary (cyan) and Secondary (amber) CTAs
- `BrandTag` - Muted Purple tags

**Usage:**
```jsx
import { BrandCard, BrandHeading } from '@/components/brand';

<BrandCard>
  <BrandHeading level={2}>Title</BrandHeading>
  <p className="text-[var(--color-text)]">Content</p>
</BrandCard>
```
```

---

## Success Metrics

### Completion Criteria

**All pages migrated when:**
- [ ] 8 pages use brand components
- [ ] Navigation uses brand styling
- [ ] Zero Tailwind `dark:*` utilities remain (except globals.css fallback)
- [ ] All screenshots captured (before/after)
- [ ] Documentation updated
- [ ] Production deployment successful

### Quality Gates

**Each page must:**
- [ ] Build without errors
- [ ] Pass mobile test on real device
- [ ] Maintain functionality
- [ ] Show brand consistency

---

## Timeline & Effort

**Per-Page Estimates:**
- Simple pages (About, Contact): 15-20 minutes each
- Medium pages (Journey, Blog index): 25-30 minutes each
- Complex pages (Blog post, Projects): 35-40 minutes each
- Homepage: 45-50 minutes

**Total Estimated Effort:** 3-4 hours for all migrations

**Recommended Schedule:**
- Session 1 (1 hour): About, Contact, Journey
- Session 2 (1 hour): Blog index, Blog post
- Session 3 (1.5 hours): Projects, Homepage
- Session 4 (30 min): Final testing, documentation

---

**Plan Version:** 1.0
**Last Updated:** December 23, 2025
**Next Step:** Generate task breakdown (`tasks.md`)
