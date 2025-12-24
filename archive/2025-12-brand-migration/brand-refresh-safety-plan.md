# Brand Refresh Safety Plan

**Goal:** Implement new brand identity without breaking existing pages
**Risk Level:** Medium-High (165 className usages, color system overhaul)
**Strategy:** Phased rollout with progressive enhancement

---

## Current State Analysis

### What's Working Now
- ✅ System-preference dark mode (`@media (prefers-color-scheme: dark)`)
- ✅ Tailwind utility classes (`dark:bg-slate-900`, `text-slate-700`)
- ✅ Geist Sans + Geist Mono fonts loaded globally
- ✅ 8 pages with consistent styling approach

### What Will Change
- 🔄 Fixed dark theme (no light mode initially)
- 🔄 Custom color palette (Deep Slate, Electric Cyan, Amber Glow, Muted Purple)
- 🔄 New fonts (JetBrains Mono for headings, Inter for body)
- 🔄 Glow effects, micro-interactions, workshop aesthetic

### Breaking Change Risks

**HIGH RISK:**
1. **Tailwind dark mode utilities** - 165 occurrences of `dark:*` classes that assume light/dark toggle
2. **Color references** - Current Tailwind colors (slate, stone) won't match brand colors
3. **Font changes** - JetBrains Mono + Inter replace Geist Sans/Mono

**MEDIUM RISK:**
4. **Custom CSS properties** - Current `--background`/`--foreground` need replacement
5. **Tailwind theme** - New colors need to be added to Tailwind config (but no config file exists due to Tailwind 4)

**LOW RISK:**
6. **Component structure** - HTML/JSX structure is fine, just needs style updates
7. **Functionality** - No JavaScript breaking changes

---

## Safety Strategy: 5-Phase Rollout

### Phase 0: Preparation (DO THIS FIRST) ⚠️

**Create Safety Checkpoint**
```bash
# Create a git branch for brand refresh
git checkout -b brand-refresh

# Ensure main branch is clean
git stash  # if needed
```

**Add Feature Flag (Optional but Recommended)**
Create a way to toggle between old and new brand:
```javascript
// app/lib/featureFlags.js
export const BRAND_V2_ENABLED = process.env.NEXT_PUBLIC_BRAND_V2 === 'true';
```

**Benefit:** Can deploy incrementally, rollback instantly if issues arise.

---

### Phase 1: Foundation - CSS Variables & Fonts (Low Risk)

**Goal:** Add new brand foundations alongside existing system
**Strategy:** Additive changes only - don't remove old system yet

**1.1: Update `app/globals.css`**

```css
@import "tailwindcss";

/* OLD SYSTEM - Keep for now */
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

/* NEW BRAND SYSTEM - Add alongside */
:root {
  /* Brand Colors */
  --color-bg: #0f1419;          /* Deep Slate */
  --color-surface: #1c2128;      /* Charcoal */
  --color-border: #2d333b;       /* Subtle Border */
  --color-text: #e6edf3;         /* Warm White */
  --color-accent-cyan: #00d9ff;  /* Electric Cyan */
  --color-accent-amber: #f59e0b; /* Amber Glow */
  --color-accent-purple: #8b5cf6; /* Muted Purple */

  /* Typography */
  --font-heading: 'JetBrains Mono', monospace;
  --font-body: 'Inter', -apple-system, sans-serif;

  /* Spacing */
  --space-unit: 1rem;
  --space-xs: calc(var(--space-unit) * 0.5);
  --space-sm: var(--space-unit);
  --space-md: calc(var(--space-unit) * 1.5);
  --space-lg: calc(var(--space-unit) * 2);
  --space-xl: calc(var(--space-unit) * 3);

  /* Effects */
  --glow-cyan: 0 0 30px rgba(0, 217, 255, 0.15);
  --glow-amber: 0 0 30px rgba(245, 158, 11, 0.15);
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Fluid Type Scale */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.313rem);
  --text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.563rem);
  --text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 2rem);
  --text-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 2.625rem);
  --text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3.375rem);
}

@theme inline {
  /* OLD - Keep temporarily */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  /* NEW BRAND - Add to Tailwind */
  --color-bg-deep: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-border-subtle: var(--color-border);
  --color-text-primary: var(--color-text);
  --color-cyan: var(--color-accent-cyan);
  --color-amber: var(--color-accent-amber);
  --color-purple: var(--color-accent-purple);
}

/* Base body styling - keep current for now */
body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

**1.2: Load New Fonts in `app/layout.js`**

```javascript
import { Geist, Geist_Mono } from "next/font/google";
import { JetBrains_Mono, Inter } from "next/font/google"; // ADD THIS
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// OLD FONTS - Keep for now
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// NEW BRAND FONTS
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

**Testing Phase 1:**
- ✅ Run `npm run dev` - should work with no visual changes
- ✅ Check console for font loading errors
- ✅ Inspect DevTools: new CSS variables should exist alongside old ones

**Rollback Plan:** Remove new CSS variables and font imports if any errors

---

### Phase 2: Create Brand-Aware Components (No Risk)

**Goal:** Build new styled components without touching existing pages

**2.1: Create Brand Component Library**

Create `app/components/brand/` directory:

```bash
mkdir -p app/components/brand
```

**2.2: Create Reusable Brand Components**

```javascript
// app/components/brand/Card.jsx
export function BrandCard({ children, hover = true, className = "" }) {
  return (
    <div
      className={`
        bg-[var(--color-surface)]
        border border-[var(--color-border)]
        rounded-xl p-8
        transition-all duration-300
        ${hover ? 'hover:border-[#00d9ff40] hover:shadow-[var(--glow-cyan)] hover:-translate-y-0.5' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// app/components/brand/Heading.jsx
export function BrandHeading({ level = 1, children, className = "" }) {
  const Tag = `h${level}`;
  const sizes = {
    1: 'text-[var(--text-4xl)]',
    2: 'text-[var(--text-3xl)]',
    3: 'text-[var(--text-2xl)]',
  };

  return (
    <Tag
      className={`
        font-[var(--font-jetbrains-mono)]
        font-medium
        text-[var(--color-text)]
        leading-tight
        ${sizes[level] || sizes[2]}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}

// app/components/brand/Link.jsx
export function BrandLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`
        text-[var(--color-cyan)]
        hover:underline
        hover:shadow-[var(--glow-cyan)]
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </a>
  );
}
```

**2.3: Create Test Page (Isolated)**

```javascript
// app/brand-preview/page.tsx
import { BrandCard } from '../components/brand/Card';
import { BrandHeading } from '../components/brand/Heading';
import { BrandLink } from '../components/brand/Link';

export default function BrandPreview() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <BrandHeading level={1}>Brand Preview</BrandHeading>

        <BrandCard>
          <BrandHeading level={2}>Test Card</BrandHeading>
          <p className="text-[var(--color-text)] font-[var(--font-inter)] mt-4">
            This is a test of the new brand system. Hover over this card to see the glow effect.
          </p>
          <BrandLink href="#">Learn More →</BrandLink>
        </BrandCard>

        <div className="space-y-4">
          <div className="p-4 bg-[var(--color-surface)] rounded-lg">
            <p className="text-[var(--color-cyan)]">Electric Cyan Accent</p>
          </div>
          <div className="p-4 bg-[var(--color-surface)] rounded-lg">
            <p className="text-[var(--color-amber)]">Amber Glow Accent</p>
          </div>
          <div className="p-4 bg-[var(--color-surface)] rounded-lg">
            <p className="text-[var(--color-purple)]">Muted Purple Accent</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

**Testing Phase 2:**
- ✅ Visit `http://localhost:3000/brand-preview`
- ✅ Verify colors match brand guide
- ✅ Check hover effects work
- ✅ Test font loading (JetBrains Mono for headings)
- ✅ **CRITICAL:** Verify existing pages still work unchanged

---

### Phase 3: Migrate One Page (Controlled Test)

**Goal:** Update a single, non-critical page to validate approach

**Best Candidate:** `/about` page (less traffic than homepage, good complexity)

**3.1: Create Backup**

```bash
cp app/about/page.tsx app/about/page.tsx.backup
```

**3.2: Gradual Replacement Strategy**

**Option A: Progressive Enhancement (Safest)**
Keep old styles, add brand classes alongside:

```tsx
// Before
<div className="min-h-screen bg-stone-50 dark:bg-slate-900">

// After (both styles active)
<div className="min-h-screen bg-stone-50 dark:bg-slate-900 [&]:!bg-[var(--color-bg)]">
```

**Option B: Component Wrapper (Recommended)**
Wrap page in brand container:

```tsx
export default function About() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Existing content with brand-aware updates */}
    </div>
  );
}
```

**3.3: Update Methodology**

For each element:
1. **Identify current style** - e.g., `text-slate-700 dark:text-slate-300`
2. **Map to brand variable** - `text-[var(--color-text)]`
3. **Test immediately** - Check visual result
4. **Document changes** - Note any unexpected issues

**3.4: Testing Checklist**

- [ ] Desktop view looks correct
- [ ] **Mobile view works** (constitution requires mobile-first)
- [ ] No console errors
- [ ] Navigation still works
- [ ] Links are visible and clickable
- [ ] Text is readable (check contrast)
- [ ] No layout shifts

**Rollback Plan:**
```bash
mv app/about/page.tsx.backup app/about/page.tsx
```

---

### Phase 4: Systematic Page Migration

**Goal:** Update remaining pages using validated pattern from Phase 3

**Migration Order (Safest to Riskiest):**

1. `/contact` - Simple page, low complexity
2. `/journey` - Medium complexity, client-side state
3. `/blog` - Blog index, check card hover effects
4. `/blog/[slug]` - Individual posts, markdown rendering
5. `/projects` - More complex, check project cards
6. `/` (Homepage) - **LAST** - Highest traffic

**Per-Page Process:**

```bash
# 1. Create backup
cp app/page/page.tsx app/page/page.tsx.backup

# 2. Update styles
# 3. Test locally
# 4. Commit to branch
git add app/page/page.tsx
git commit -m "brand: migrate [page-name] to new brand"

# 5. Move to next page
```

**Between Each Page:**
- Run full site check: `npm run build && npm start`
- Test all pages still work
- Check mobile responsiveness

---

### Phase 5: Cleanup & Polish

**Goal:** Remove old system, add brand enhancements

**5.1: Remove Old CSS Variables**

Once ALL pages migrated:

```css
/* DELETE THESE */
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

**5.2: Update Global Body Styles**

```css
body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.2;
}
```

**5.3: Add Micro-Interactions (Progressive Enhancement)**

Only AFTER all pages work:
- Scroll progress indicator
- Card hover glows
- Link animations
- Code block copy buttons
- Easter eggs (Konami code)

**Add one at a time, test each.**

---

## Emergency Rollback Procedures

### If Something Breaks During Migration

**Immediate Fix:**
```bash
# Rollback to last working commit
git reset --hard HEAD~1

# Or restore specific file
git checkout HEAD~1 -- app/path/to/file.tsx
```

**If Deployed to Production (Panic Mode):**
```bash
# Revert entire branch
git revert <commit-hash>
git push origin main

# Vercel will auto-deploy the revert
```

### Canary Deployment Strategy (Advanced)

If using Vercel:
1. Deploy to preview URL first
2. Test thoroughly on preview
3. Promote to production only when confident

---

## Testing Checklist (Before Each Phase)

### Functional Tests
- [ ] All pages load without errors
- [ ] Navigation works across all pages
- [ ] Forms submit correctly (contact page)
- [ ] Blog posts render markdown correctly
- [ ] Project cards display images
- [ ] External links work
- [ ] GitHub API integration still fetches data

### Visual Tests
- [ ] Text is readable on all backgrounds
- [ ] Colors match brand guide
- [ ] Fonts load correctly (check network tab)
- [ ] Hover states work
- [ ] Mobile responsive (test on actual phone)
- [ ] No layout shifts (CLS score)

### Performance Tests
- [ ] Lighthouse score doesn't regress
- [ ] Font loading doesn't block render
- [ ] Build completes without warnings
- [ ] Bundle size doesn't balloon

### Accessibility Tests
- [ ] Color contrast meets WCAG AA (use browser tools)
- [ ] Keyboard navigation works
- [ ] Screen reader announces elements correctly
- [ ] Focus indicators visible

---

## Key Safety Principles

### 1. Never Change Everything At Once
Migrate one page at a time, commit between changes.

### 2. Keep Old System Until New System Proven
Don't delete CSS variables until ALL pages migrated.

### 3. Test Mobile First (Per Constitution)
Brand identity emphasizes mobile-first. Test on real devices.

### 4. Rollback Should Be One Command
Always have `git reset` or file backup ready.

### 5. Feature Flags for Big Changes
Consider environment variable to toggle brand on/off initially.

---

## Common Pitfalls to Avoid

❌ **Changing `globals.css` and all pages simultaneously**
✅ Change CSS first, test isolation, then migrate pages one-by-one

❌ **Removing Tailwind dark mode classes too early**
✅ Remove only after verifying new brand styles work

❌ **Not testing mobile between changes**
✅ Constitution mandates mobile-first - test constantly

❌ **Adding all micro-interactions during migration**
✅ Get colors/fonts working first, add delight AFTER

❌ **Deploying to production without preview testing**
✅ Use Vercel preview deployments extensively

---

## Success Criteria

You'll know the migration is successful when:

1. ✅ All 8 pages use new brand colors consistently
2. ✅ JetBrains Mono appears on all headings
3. ✅ Inter font loads for body text
4. ✅ No console errors or warnings
5. ✅ Mobile experience smooth on real devices
6. ✅ Build completes: `npm run build` succeeds
7. ✅ Lighthouse score maintains or improves
8. ✅ Analytics show no traffic drop (engagement maintained)

---

## Recommended Timeline

**Week 1: Foundation**
- Phase 0-1: Prep and CSS variables (1-2 days)
- Phase 2: Brand components (2-3 days)

**Week 2: Migration**
- Phase 3: Test migration on `/about` (2 days)
- Phase 4: Migrate remaining pages (3-4 days)

**Week 3: Polish**
- Phase 5: Cleanup and micro-interactions (3-4 days)
- Final testing and deployment

**Total: 2-3 weeks** for safe, methodical rollout.

---

## Spec-Kit Integration

This safety plan can be executed using spec-kit workflow:

```bash
/speckit.specify brand-refresh "Implement new brand identity"
/speckit.plan brand-refresh
/speckit.tasks brand-refresh
/speckit.implement brand-refresh
```

The spec-kit will reference `.specify/memory/constitution.md` to ensure mobile-first, substance-over-flash principles are maintained.

---

**Final Reminder:** The brand guide says "Don't implement everything at once." This safety plan embodies that. Quality over speed. Your users won't notice a 2-week gradual rollout, but they WILL notice a broken site.
