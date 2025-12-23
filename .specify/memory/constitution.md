# Portfolio Site Constitution

**Project:** Personal Portfolio & Learning Playground
**Purpose:** Document authentic journey from "I have ideas but coding seems impossible" to "I can ship functional tools that solve real problems"
**Created:** December 23, 2025

---

## Core Principles

### 1. Authentic Voice Over Polished Professional
This site sounds like Wayne. Conversational, honest about limitations, occasionally irreverent. Professional enough that colleagues won't cringe, personal enough that it's clearly mine.

**Requirements:**
- No corporate speak
- No fake testimonials
- No pretending to know more than we do
- Copy must be proofread but personality preserved

### 2. Mobile-First, Desktop-Friendly
Most people will see this on their phones first. But it should still look intentional on a 27" monitor.

**Requirements:**
- Test on mobile devices before calling features done
- Responsive layouts required for all new features
- Desktop views must feel intentional, not afterthought
- Touch targets must be appropriately sized

### 3. Substance Over Flash, But Don't Neglect Joy
Every feature must **do something useful**. Flash is secondary. But once functionality works, add subtle touches that make people smile.

**Development Order:**
1. Build the working version first
2. Test functionality thoroughly
3. Then ask: "Where's the moment of delight here?"
4. Add unexpected delight, not flashy showboating

### 4. Challenge Typical AI Design
If it looks like every other Claude/ChatGPT-generated portfolio, it's too safe. Bland and repeatable design is lazy.

**Requirements:**
- Push back on generic suggestions
- Ask "What would make this distinctly Wayne's?"
- Avoid template-y solutions
- Seek alternatives to typical patterns

### 5. Professional Standards Without Professional Pretence
Future employers, peers, and colleagues might see this. It needs to be credible without being corporate.

**Requirements:**
- Proofread all user-facing copy
- Test all functionality before deployment
- Don't sanitize personality out of fear
- Maintain honest tone about skill level

---

## Technical Philosophy

### Simple Ships, Complex Can Wait
If there's a straightforward way to solve something, take it. You can always refactor when you understand the problem better.

**Exception:** If the simple solution boxes us into a corner with no escape route, choose complexity. But make it a conscious trade-off and document why.

### Mobile Optimization Is Non-Negotiable
Desktop views are important, but mobile is where most people will judge this. If it doesn't work on a phone, it doesn't work.

### Functionality First, Aesthetics Second
Get it working, then make it look good. Not the other way around.

But "second" doesn't mean "never." Once it works, polish matters.

### Learn By Building Real Things
Academic exercises are boring. Build tools that solve actual problems - even if the "problem" is just "I want to see if this is possible."

---

## Implementation Standards

### Code Quality
- **Hybrid JavaScript/TypeScript**: TypeScript for pages/components requiring type safety, JavaScript for data/utilities
- **Next.js App Router**: Use server components by default, client components only when needed
- **Tailwind CSS**: Use theme tokens defined in `globals.css`
- **Accessibility**: Screen reader support and semantic HTML required

### Data & Content
- **Build-time data fetching**: Use static generation with ISR where appropriate
- **Markdown for content**: Blog posts and long-form content in markdown files
- **GitHub integration**: Live data from GitHub API with graceful fallbacks

### Testing & Deployment
- **Test on real devices**: Mobile testing on actual phones required
- **Incremental deployment**: Ship features incrementally, don't wait for perfection
- **Documentation**: Update CLAUDE.md and relevant docs with each feature

---

## What This Project Is NOT

❌ **Not an "I'm an expert coder" portfolio** - Learning in public, not pretending expertise
❌ **Not a "look how much I struggle" sympathy play** - Authentic doesn't mean self-deprecating
❌ **Not a resume substitute** - It's a showcase of thinking and building, not a CV
❌ **Not frozen in time** - This will evolve. Future Wayne will probably cringe at past Wayne. That's the point.
❌ **Not trying to look like everyone else's portfolio** - Safe is boring.

---

## When to Break These Principles

If a principle gets in the way of **learning something important** or **shipping something useful**, break it.

**Process:**
1. Document why you're breaking the principle
2. Explain what you learned or why it was necessary
3. Move on without guilt

This isn't dogma. It's guidance for future Wayne when deciding what to build next.

---

## Spec-Driven Development Integration

This constitution governs all specification, planning, and implementation activities using the GitHub Spec Kit methodology.

**Workflow:**
1. `/speckit.specify` - Define functional requirements aligned with these principles
2. `/speckit.plan` - Create technical plans that honor mobile-first and simplicity
3. `/speckit.tasks` - Break down work into shippable increments
4. `/speckit.implement` - Execute with substance-over-flash mentality

All AI-assisted development must reference this constitution to ensure consistency with project values and voice.
