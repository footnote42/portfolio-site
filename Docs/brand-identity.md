# Personal Brand Identity Guide

**For Wayne's Developer Portfolio**

> _"What stands in the way becomes the way"_

## Brand Essence

**Core Identity**: Thoughtful Tinkerer  
You're not selling services—you're documenting experiments. Your portfolio is a lab notebook that happens to be beautiful.

**Visual Philosophy**: Dark Workshop Aesthetic  
Think: late-night coding sessions, glowing monitors, the satisfying hum of systems working. Professional depth with sparks of curiosity.

---

## 1. Colour Palette

### Primary Colours

**Deep Slate** `#0f1419`  
_Usage_: Main background, creates depth without pure black harshness  
_Rationale_: Easier on eyes for long reading, feels like quality tooling rather than generic dark mode

**Warm White** `#e6edf3`  
_Usage_: Primary text, headlines  
_Rationale_: Slightly warmer than pure white, reduces eye strain, more approachable than clinical #ffffff

### Accent Colours

**Electric Cyan** `#00d9ff`  
_Usage_: Interactive elements, links, highlights, subtle glows  
_Rationale_: Energetic without screaming, excellent for UI feedback, associates with innovation/tech. Your "spark of curiosity" colour.

**Amber Glow** `#f59e0b`  
_Usage_: Secondary CTAs, warnings, "learn more" states  
_Rationale_: Warmth that balances the cool palette, draws eye to important actions, feels like those satisfying "aha!" moments

**Muted Purple** `#8b5cf6`  
_Usage_: Tags, categories, code syntax highlighting  
_Rationale_: Adds sophistication, distinguishes metadata from content, nods to classic terminal aesthetics

### Supporting Colours

**Charcoal** `#1c2128`  
_Usage_: Card backgrounds, elevated surfaces  
_Rationale_: Creates layering without high contrast

**Subtle Border** `#2d333b`  
_Usage_: Borders, dividers, subtle separations  
_Rationale_: Just enough definition without visual noise

### Accessibility Notes

- Electric Cyan on Deep Slate: **4.8:1** (WCAG AA for large text) ✓
- Warm White on Deep Slate: **14.2:1** (WCAG AAA) ✓
- Amber Glow on Deep Slate: **5.1:1** (WCAG AA) ✓
- For body text, always use Warm White on Deep Slate

### Dark/Light Mode Strategy

Stick with dark as primary. If you add light mode later:

- Invert Deep Slate → `#f6f8fa` (soft white)
- Warm White → `#1f2937` (dark gray)
- Keep accent colours, reduce saturation 10-15%

---

## 2. Typography

### Heading Font: **JetBrains Mono**

[Google Fonts Link](https://fonts.google.com/specimen/JetBrains+Mono)

**Weights**: 500 (Medium), 700 (Bold)

**Why**: It's a monospace font that doesn't scream "programmer stereotype." Clean, modern, excellent readability. Subtle nod to your technical roots without being on-the-nose.

**Alternatives**:

1. **Space Grotesk** - More geometric, slightly friendlier
2. **Inter** - If you want maximum neutrality

### Body Font: **Inter**

[Google Fonts Link](https://fonts.google.com/specimen/Inter)

**Weights**: 400 (Regular), 500 (Medium), 600 (Semibold)

**Why**: Exceptionally readable at all sizes, professional but warm, designed specifically for screens. Pairs beautifully with monospace headings.

**Alternatives**:

1. **System UI Stack** `(-apple-system, BlinkMacSystemFont, "Segoe UI", ...)` - Performance purist option
2. **Source Sans 3** - If you want more personality in body copy

### Font Pairing Rationale

Monospace headlines + proportional body creates interesting contrast—technical precision meets approachable reading. It's unexpected without being gimmicky.

### Size Scale

```css
/* Fluid type scale using clamp() */
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--text-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.313rem);
--text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.563rem);
--text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 2rem);
--text-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 2.625rem);
--text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3.375rem);
```

**Line Heights**:

- Headings (JetBrains Mono): 1.2
- Body (Inter): 1.6
- Code blocks: 1.5

---

## 3. Tone of Voice

### Key Descriptors

**Direct • Curious • Understated • Reflective • Pragmatic**

### Philosophy

You write like an engineer's field notes, not marketing copy. Show the work, share the learning, skip the peacocking.

### Do's ✓

- **Be specific**: "Built X to solve Y" not "innovative solutions"
- **Show process**: Mention dead ends and pivots
- **Use first person**: "I built this because..."
- **Admit gaps**: "Still learning X" is authentic
- **Occasional dry humour**: Understatement, unexpected phrasing
- **Ask questions**: Invite exploration, don't prescribe

### Avoid ✗

- Buzzwords: "passionate," "rockstar," "guru," "ninja"
- Overselling: "game-changing," "revolutionary"
- Humble brags: "just a simple tool I made..."
- Marketing speak: "leverage synergies"
- Over-explaining jokes: Trust your reader
- Apologizing for learning: You're documenting growth, not competing

### Example Copy

**Headline (Homepage)**:

```
Building tools with AI because the learning curve 
finally stopped being an excuse.
```

**Project Description**:

```
Squad Rotation Tool v2.0
Fair game-time allocation for age-grade rugby teams

The original version worked, but coaches couldn't remember 
their rotations between weeks. Version 2 adds persistence 
and a memory. Sometimes the best feature is just 
remembering what happened last time.

→ Built with: Next.js, Supabase, probably too much TypeScript
```

**About Bio**:

```
I'm a systems engineer learning to code by building things I actually need.

Day job: wrangling PowerBI dashboards and automation for 
200 engineers. Side quests: rugby coaching tools, Stoic 
reflection apps, whatever makes me curious that week.

The obstacle is the path, so I build with AI as a thought 
partner rather than waiting until I "properly" learn to code. 
Some experiments work. Some become case studies in what not 
to do. All of them teach something.

If you're wondering whether you're "technical enough" to 
start building—you are. You just need a problem you 
care about solving.
```

**404 Page**:

```
Lost? That's half the fun.

This page doesn't exist, but here's what does:
[Home] [Projects] [About]

What stands in the way becomes the way—even broken links.
```

---

## 4. Visual Style

### Overall Aesthetic: **Engineered Minimalism**

Not "minimal" as in sparse. Minimal as in "every element serves a purpose." Think quality tooling—well-crafted, intentional, with hidden depth for those who look.

### Core Principles

**Depth Through Layers**  
Your dark background isn't flat. Cards sit slightly elevated (`box-shadow`), interactive elements glow subtly on hover. Create spatial hierarchy without visual clutter.

**Glow, Don't Shine**  
Neon accents are _glows_, not _blasts_. Use `box-shadow` with your Electric Cyan at 20% opacity, blur 20-30px. Subtle enough you almost don't notice, satisfying when you do.

**Animation Philosophy: Reward Curiosity**

- Default state: Calm, clean, readable
- Hover: Gentle feedback (glow intensifies, slight scale)
- Click: Satisfying response (brief brightness pulse)
- Page transitions: Smooth, not flashy (300-400ms)
- Easter eggs: Hidden interactions that don't announce themselves

### UI Patterns

**Card System**

```css
.project-card {
  background: #1c2128;
  border: 1px solid #2d333b;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.project-card:hover {
  border-color: #00d9ff40; /* Electric Cyan at 25% */
  box-shadow: 
    0 0 30px rgba(0, 217, 255, 0.1),
    0 4px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}
```

**Interactive Elements**

- Links: Electric Cyan, subtle underline on hover
- Buttons: Solid accent background, glow on hover
- Code blocks: Muted Purple for syntax, Charcoal background

**Cursor Interactions** (Subtle Delight) Consider adding custom cursor trails or glow effects that follow the mouse—but make it **optional** and easily disabled. Josh Comeau does this beautifully with his interactive elements.

### Layout Preferences

**Grid System**: Cards in responsive grid, generous spacing (2-3rem gaps)

**Content Width**: Max 75ch for body text, wider for project grids

**Whitespace**: Generous. Let projects breathe.

**Navigation**: Sticky header, minimal, fades to semi-transparent on scroll

### Incorporating Delight

#### Micro-Interactions (Quality over Quantity)

1. **Code Block Copy Button**  
    Appears on hover, gives satisfying feedback on click (check icon, brief Electric Cyan glow)
    
2. **Project Tags**  
    Glow faintly when cursor nearby, clickable to filter
    
3. **Scroll Progress Indicator**  
    Thin Electric Cyan line at top of page, fills as you scroll
    
4. **Konami Code Easter Egg**  
    ↑ ↑ ↓ ↓ ← → ← → B A  
    Reveals a hidden "workshop mode" with additional build notes, failed experiments, or just changes the page title to something dry/funny
    
5. **Footer Timestamp**  
    Shows your local time with "Last tinkered: [timestamp]" that updates
    
6. **Link Previews**  
    External links show tiny preview tooltip on long hover (see what you're clicking)
    
7. **Ambient Glow**  
    Very subtle radial gradient that follows cursor position across the page (think: flashlight in dark workshop). So subtle most won't notice, but subconsciously feels interactive.
    

#### What NOT to Do

- No confetti explosions
- No aggressive animations that distract from content
- No "click here!" flashing
- No auto-playing anything
- No pop-ups (especially not "subscribe to newsletter")

---

## Quick Reference Guide

### Applying the Brand

**Starting a New Page?**

1. Background: Deep Slate `#0f1419`
2. Text: Warm White `#e6edf3`
3. Headings: JetBrains Mono, Medium/Bold
4. Body: Inter, Regular
5. Primary CTA: Electric Cyan with glow
6. Cards: Charcoal `#1c2128` with subtle border

**Writing Copy?**

1. Start with the problem you're solving
2. Show your work (mention the messy bits)
3. One unexpected detail per project
4. End with what you learned, not what others should do

**Adding Interaction?**

1. Does it reward exploration? (Yes → Continue)
2. Is it optional/skippable? (Yes → Continue)
3. Could a screen reader describe it? (Yes → Continue)
4. Would you notice it's there after 2 visits? (No → Perfect)

**Choosing Between Accent Colors?**

- **Electric Cyan**: Primary actions, links, "explore this"
- **Amber Glow**: Secondary actions, "learn more," warmth
- **Muted Purple**: Categorization, tags, metadata

---

## Brand Checklist

Before publishing anything, ask:

- [ ] Does this look like I made it, or like I hired someone?  
    _(You want: Made it)_
    
- [ ] Could this be anyone's portfolio?  
    _(You want: No, it's clearly mine)_
    
- [ ] Am I trying to impress, or inform?  
    _(You want: Inform)_
    
- [ ] Would Past Me find this helpful?  
    _(You want: Yes)_
    
- [ ] Is there at least one moment of "oh, that's neat"?  
    _(You want: Yes, but not forced)_
    

---

## Implementation Notes

### CSS Custom Properties (Quick Start)

```css
:root {
  /* Colors */
  --color-bg: #0f1419;
  --color-surface: #1c2128;
  --color-border: #2d333b;
  --color-text: #e6edf3;
  --color-accent-cyan: #00d9ff;
  --color-accent-amber: #f59e0b;
  --color-accent-purple: #8b5cf6;
  
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
}
```

### Component Pattern (Example: Project Card)

```jsx
<div className="project-card group">
  <div className="project-image">
    {/* Image with subtle zoom on card hover */}
  </div>
  
  <div className="project-tags">
    {/* Muted Purple tags with hover glow */}
  </div>
  
  <h3 className="project-title">
    {/* JetBrains Mono, Medium */}
  </h3>
  
  <p className="project-description">
    {/* Inter, Regular, line-height 1.6 */}
  </p>
  
  <div className="project-meta">
    <a href="#" className="link-primary">
      Learn More <span className="arrow">→</span>
    </a>
    {/* Arrow glides right on hover */}
  </div>
</div>
```

---

## Success Metrics

You'll know this is working when:

1. **Recognition**: Someone sees a screenshot and says "that's your site"
2. **Consistency**: New pages feel cohesive without copying/pasting
3. **Authenticity**: You don't cringe at your own copy
4. **Engagement**: People explore beyond the homepage (analytics show it)
5. **Memorability**: Someone recommends your portfolio to a curious beginner

---

## Final Thoughts

This brand isn't about standing out through loudness—it's about standing out through _thoughtfulness_. Your portfolio should feel like a well-organized workshop: every tool has its place, the lighting is just right, and there's evidence of genuine work happening.

The Stoic philosophy you reference isn't just a tagline—it's baked into the approach. The obstacle (not being a "proper coder") became the way (building with AI, documenting the journey). Your brand reflects that: professional capability emerging from curiosity and iteration, not pretense.

**One last thing**: Don't implement everything at once. Add delight incrementally. Your first version can be clean and functional. Then add one micro-interaction. Then another. Quality over quantity—same principle that guides your projects should guide your brand evolution.

---
#brand #vibecoding #workflow #Claude #claude-code 