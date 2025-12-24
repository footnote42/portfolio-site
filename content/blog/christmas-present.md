---
title: "Christmas Present"
date: "2025-12-24"
excerpt: "Four months in and it's time to reflect on what I've discovered by revisiting some old projects. Refined a rugby app, rebuilt a Pong clone, and rebranded the portfolio site."
slug: "christmas-present"
featured: True
---

# I Ran a 14-Day Vibe Coding Sprint. Here's What Actually Happened.

**TL;DR**: Planned 14 days, shipped three portfolio projects in 6 days, discovered my workflow anxiety was actually a feature, and learned that AI usage limits are the best teacher I never asked for.

---

## The Problem I Wanted to Solve

Let me be honest: I had five problems, not one.

1. **Premature Execution** - I'd jump into coding before thinking, realize I'd built the wrong thing, and abandon projects halfway through
2. **AI Usage Anxiety** - Claude's 5-hour session limit had me rationing conversations like I was dishing out post u10s training Haribo
3. **Tool Confusion** - Should I use Claude? Copilot? ChatGPT? I'd waste 10 minutes deciding instead of just building
4. **Scattered Learning** - I'd capture insights in Obsidian but never connect the dots
5. **No Planning Discipline** - I'd tell myself "this time I'll plan properly" and immediately start coding anyway

So I did what any systems engineer turned vibe coder would do: I designed a sprint to fix my workflow while simultaneously testing it under real pressure.

**The Hypothesis**: If I could establish a repeatable "Vibe Coding Workflow," ship three portfolio projects, and have fun doing it, I'd prove that structure enables creativity rather than constraining it.

Spoiler: The hypothesis held. Just not in the way I expected.

---

## The Sprint Setup

**Duration**: December 19-January 1 (14 days over Christmas)  
**Time Budget**: 20-28 hours (balanced against family time)  
**Tools**: VS Code + Claude Code, GitHub Copilot, Google Antigravity, ChatGPT, and my Obsidian vault

**The Five Goals**:
1. Create "Vibe Coding Workflow v1.0" and actually test it
2. Polish one rugby coaching app to "would show a potential user" standard
3. Rebuild Pong from scratch to measure skill growth
4. Update portfolio site with personality and branding
5. Optimise my Obsidian knowledge capture system

**The Meta-Goal**: Figure out how to start projects without that paralyzing "am I doing this right?" feeling.

---

## What I Actually Built

### Project 1: Squad Rotation Tool Polish
**Time Planned**: 4-5 days (20-28 hours)  
**Time Actual**: 1 day (6 hours)  
**Status**: ✅ Deployed and portfolio-ready

Took a functional rugby coaching tool and gave it:
- 3-level experience system (⭐ New → ⭐⭐ Getting There → ⭐⭐⭐ Match Ready)
- Trojans RFC branding (badge, club colors, coach personality)
- WhatsApp share button (coaches can text rotation plans)
- Tutorial for first-time users
- Mobile testing on actual device (coaches use this pitchside)

**The Surprise**: I finished in **6 hours instead of 28** because I spent 2 hours building a comprehensive polish-plan with Claude before writing any code. The plan enabled AI autopilot.

---

### Project 2: Pong Redux
**Time Planned**: 3 days (12-18 hours)  
**Time Actual**: 2 days (10 hours)  
**Status**: 81% complete (13/16 stages), portfolio-ready

Rebuilt Pong from scratch using professional game architecture:
- Fixed-timestep game loop (60Hz, no frame-rate dependent physics)
- AABB collision detection with positional correction
- Particle system with physics (gravity, alpha fade, object pooling)
- Procedural sound synthesis (Web Audio API, zero external assets)
- Extensive customisation (4 paddle styles, 4 ball styles, difficulty tuning)
- Automated testing harness and browser-based visual tests

**The Discovery**: My v1 Pong had 200 lines of spaghetti code. V2 has modular architecture, comprehensive docs, and I *understand what the bits do*. That's the skill growth I was looking for.

---

### Project 3: Portfolio Rebrand
**Time Planned**: 3 days (10-14 hours)  
**Time Actual**: 1.5 days (6 hours)  
**Status**: ✅ Deployed without errors

Migrated entire portfolio to "workshop aesthetic":
- Deep slate background (#0f1419) + electric cyan CTAs (#00d9ff)
- 5 reusable brand components (BrandCard, BrandHeading, BrandLink, BrandButton, BrandTag)
- 9 pages migrated to brand system
- 162 tasks executed with 100% success rate
- Live on production via Vercel auto-deploy

**The Breakthrough**: Used Spec-Kit to generate Constitution, specs, plans, and tasks from existing docs. Turned 2-hour planning sessions into 20-minute spec generation.

---

## The Timeline (What Actually Happened)

Here's where it gets interesting.

**Days 1-2 (Dec 19-20): Foundation Blitz**
- Created entire Obsidian vault structure in one evening
- Built Vibe Coding Workflow v1.0 and AI Decision Tree
- Rugby app polish complete (yes, complete - on Day 2)
- Started Pong Redux with comprehensive TRD

**Days 3-4 (Dec 21-22): Execution Velocity**
- Pong reached 81% completion
- Mid-sprint review revealed early because I was *ahead of schedule*
- Reframed "AI usage limits" from blocker to skill-building constraint

**Days 5-6 (Dec 23-24): Tool Evolution & Completion**
- Discovered Spec-Kit, revolutionized planning
- Portfolio rebrand complete (162 tasks, 6 hours, zero issues)
- Sprint effectively complete - remaining time was optional polish

**Days 7-14 (Dec 25-Jan 1): Time to think of a new project**
- Enjoy Christmas
- Sprint succeeded, done by Day 6

**Total Active Time**: 6 days and ~18 hours (vs. anticipated 14 days and 38-48 hours)

---

## The Discoveries That Changed Everything

### Discovery 1: Planning IS Execution

I used to think planning was the boring "pre-work" before the "real work" of coding. 

I was wrong.

When I spent 90 minutes building a comprehensive polish-plan for the rugby app, Claude and Antigravity worked on it semi-autonomously. I'd check in, verify the stage was complete, and they'd move to the next one. Still can't say I fully understand the detail of the code but I'm starting to spot the patterns and the pace accelerated.

**Time spent planning**: 2 hours  
**Time saved in execution**: 18+ hours  
**ROI**: 9:1

The planning *was* the work. Coding was just the documentation.

---

### Discovery 2: AI Limits Are a Feature, Not a Bug

Remember my Claude usage anxiety? Turns out rationing AI interactions forced me to develop exactly the skill I needed: **intentional tool selection** - the obstacle is the way! But only after thrashing the limits and leaving me in a spin over how I'd complete task left hanging mid-flow.

**What I learned**:
- Use ChatGPT for exploration and brainstorming (free with generous limits)
- Use Copilot for boilerplate and autocomplete (fast, cheap)
- Reserve Claude for architecture and complex problem-solving (expensive, powerful)
- Escalate only when stuck for 20+ minutes

Hitting the weekly limit on Day 4 didn't block me - it forced me to use the right tool for each job. I now make this decision in 30 seconds instead of 10 minutes.

**Lesson**: Constraints don't limit you. They teach you to optimise.

---

### Discovery 3: Structured Specs Eliminate 80% of Back-and-Forth

When I discovered Spec-Kit on Day 5, everything clicked. It does everything I was trying to achieve with my workflow framework and more (and better). Why hadn't I thought to ask for this earlier? All part of the journey of discovery.

Instead of:
```
Me: "Build a brand migration plan"
Claude: "What colors? What components? What pages?"
Me: "Oh right, let me think..."
[30 minutes of back and forth burning tokens]
```

I got:
```
Me: "Use Spec-Kit to analyze existing portfolio docs"
Spec-Kit: [Generates Constitution, specs, plan, 162 tasks]
Claude: [Executes tasks with zero clarification questions]
```

Spec-Kit turned "vague idea" into "executable specification" in 20 minutes. Claude then executed it with 100% success rate because there was no ambiguity.

**The Pattern**: Time spent making decisions clear upfront eliminates rework downstream.

---

### Discovery 4: Templates Need Context, Not Comprehensiveness

My Obsidian templates were beautiful. They were also heavy. And I hate having to waffle about what I've done; just let me get on and pretend I'll remember everything later.

**Daily Log Template**: 8 sections, comprehensive, rarely completed  
**Quick Capture Reality**: 3 bullets scribbled in flow state

The detailed templates worked great Days 1-2 when I had time. They became friction Days 3-6 when I was in the zone.

**New Approach**: "Quick capture" template for flow state (30 seconds), comprehensive retro only when project completes.

---

## What Didn't Work (The Honest Bits)

### Challenge 1: The Copilot Subscription Wall

Hit GitHub Copilot's free tier limit on Day 3. Subscription required.

**Impact**: Paused boilerplate generation mid-Pong-build  
**Workaround**: Switched to Claude Code for 2 hours until subscription processed  
**Lesson**: Budget for tool costs upfront, don't assume "free" means "unlimited"

---

### Challenge 2: Obsidian Logging Disrupted Flow

The daily logs were strong Days 1-4, then dropped off completely.

**Why**: Switching from "building" mode to "documenting" mode broke momentum. By the time I'd finish a coding session, I just wanted to commit and walk away.

**Attempted Solution**: Quick-capture template (not tested yet)  
**Real Solution**: Probably voice notes during sessions, transcribed later

---

### Challenge 3: Knowledge Synthesis Happened Too Late

I captured 20+ insights in scattered files but didn't connect the dots until this retrospective (forced by external request).

**The Pattern**: I'm great at collecting data, weak at analysis unless forced.

**Proposed Fix**: Weekly 15-minute synthesis ritual - put in a recurring calendar meeting with myself.

---

## The Big Lessons (Transferable Patterns)

### 1. **Momentum Beats Elegance**

A working rugby app with personality deployed in 6 hours beats a "perfect" app still on my local machine after 28 hours.

Ship early. Polish in public. Iterate based on real feedback.

---

### 2. **Constraints Breed Mastery**

AI usage limits didn't block me - they forced me to learn tool selection discipline.

Limited time didn't sabotage the sprint - it prevented scope creep.

**Could be a stoic quote**: "Constraints don't limit you. They teach you to optimise."

---

### 3. **Structure Enables Creativity**

I used to think frameworks would constrain my creativity. The opposite is true.

The Vibe Coding Workflow eliminated "what should I do next?" paralysis. With that decision made, I had mental space to add delightful details like particle effects and coach personality.

**Paradox**: The more structure I added, the more creative freedom I felt.

---

### 4. **Planning Time IS Productive Time**

90 minutes building a polish-plan saved 18+ hours of rework.

Stop feeling guilty about planning. It's the highest-leverage work you can do. But find a way to inject enjoyment if it's squashing enthusiasm.

---

### 5. **Delight Is a Feature Driving Enjoyment**

Every project had personality:
- Rugby app: Trojans badge, coach microcopy ("Round up the troops!")
- Pong: Particle effects, procedural sound synthesis
- Portfolio: Workshop aesthetic (deep slate + electric cyan)

These weren't "nice-to-haves" - they were the difference between "generic template" and "Wayne's tool."

**Rule**: If you can add personality in 1 hour, it's not scope creep. It's branding.

---

## The Rough Numbers (Because Systems Engineers Love Data)

**Projects Planned**: 5 (workflow, rugby, pong, portfolio, obsidian)  
**Projects Shipped**: 4 (obsidian optimisation ongoing)  
**Time Planned**: 38-48 hours   
**Time Actual**: ~18 hours  
**Efficiency Gain**: About 2.5:1 (shipped 2.5x faster than estimated)

**AI Tool Usage**:
- Claude: ~12 hours (Regularly hit session limit. Hit weekly limit with 8 hrs to push)
- Copilot: ~4 hours (subscription required mid-sprint)
- ChatGPT: ~3 hours (planning and prompt crafting)
- Antigravity: ~4 hours (automated rugby app polish)

**Code Stats**:
- Files created: 60+ (vault structure + 3 projects)
- Git commits: 50+ (clear messages, stage-by-stage)
- Lines of code: ~2,700 added across all projects

**Documentation**:
- Planning docs: 10 (TRDs, polish-plans, build-plans, specs)
- Daily logs: 10 (strong Days 1-6, dropped after)
- Templates created: 7 (session plans, retros, insight captures)
- Blog posts: 2 (including this one)

---

## What I'd Do Differently

### 1. **Budget for Tool-time Costs Upfront**

Hitting Copilot's free tier limit mid-sprint was preventable. Next time: budget accordingly. Acknowledge the limits and plan to wrap up with time to spare.

---

### 2. **Voice Notes > Comprehensive Logs**

Quick audio captures during flow state, transcribed later for synthesis. Typing detailed logs breaks momentum.

---

### 3. **Weekly Synthesis Ritual**

15 minutes every Friday to connect dots between daily logs. Pattern recognition requires intentional pauses.

---

### 4. **Spec-Kit From Day 1**

Discovering it on Day 5 was lucky. Next sprint: use it for *every* project planning phase.

---

## What's Next? Bright Ideas

### Short-Term (Next 2 Weeks)
- **Complete Pong Redux** - Finish stages 15-16 (testing + comparison analysis)
- **Workflow v1.2** - Codify discoveries from this sprint - Spec-Kit
- **Obsidian Optimisation** - Test quick-capture template + weekly synthesis

### Medium-Term (Next 1-2 Months)
- **Blog Series**: "Vibe Coding Journey" (5 posts on workflow, tools, skill growth)
- **Rugby Coaching Toolkit** - Unify Squad Rotation + Session Planner + Progress Tracker
- **2-3 Proof-of-Concept Projects** - Data viz dashboard, Chrome extension, markdown editor

### Long-Term (3-6 Months)
- **"Vibe Coding Playbook"** - Package workflow as shareable product (GitHub repo + interactive site)
- **Expand Portfolio** - Add projects demonstrating breadth (not just games and coaching tools)
- **Maybe**: Online multiplayer for Pong (ambitious, but architecture supports it)

---

## The Meta-Lesson

This sprint proved something I suspected but couldn't articulate:

**Vibe coding isn't about coding without thinking. It's about thinking so clearly that coding becomes obvious.**

The "vibe" isn't "vibes only, no planning." It's the feeling of flow state that comes from removing decision paralysis through structure.

When you know:
- What you're building (clear requirements)
- How to build it (proven workflow)
- Which tool to use (decision tree)
- What success looks like (definition of done)

...then coding stops being scary. It becomes exploration.

That's the vibe.

---

## Try This Yourself

If you're struggling with similar issues (premature execution, AI anxiety, scattered learning), try this:

**Step 1: Setup**
1. Create a simple vault structure (planning / daily-logs / projects)
2. Write a one-page workflow doc (even if it's wrong - you'll iterate)
3. Build an AI decision tree (which tool for which task)

**Step 2: Test**
1. Pick one small project (4-6 hours max)
2. Spend 30 minutes planning before any code (use Spec-Kit)
3. Log what happened (bullets, not essays)

**Step 3: Iterate**
1. Review what worked / what didn't
2. Update workflow based on reality
3. Repeat with new project

After 3 iterations, you'll have a workflow that fits *your* brain, not someone else's template.

---

## Final Thought

I started this sprint anxious about AI usage limits, scattered knowledge capture, and premature execution.

I finished it with:
- A tested workflow that ships projects 3x faster
- Tool selection discipline that saves Claude for what matters
- Three portfolio projects I'm genuinely proud of
- Proof that structure enables creativity

The sprint was supposed to be 14 days. I effectively finished in 6 because I stopped treating planning as "pre-work" and started treating it as *the work*. That enabled the fun bit of creation to be less sticky.

Planning isn't overhead. Never forget the 7 P's!

Structure isn't constraint. It provides the freedom to think differently once the foundations are in place.

And AI usage limits aren't blockers. They're the best teacher I never asked for. Once again, the impediment to action advances action.

Now if you'll excuse me, I have a Pong game to play.

---

**Want to see the projects?**
- Squad Rotation Tool: [Live Demo](https://pitch-mate-rota.lovable.app/) | [GitHub](https://github.com/footnote42/pitch-mate-rota)
- Pong Redux: [Live Demo](https://footnote42.github.io/pong-redux/) | [GitHub](https://github.com/footnote42/pong-redux)
- Portfolio Site: [Live Demo](https://portfolio-site-umber-gamma.vercel.app/) | [GitHub](https://github.com/footnote42/portfolio-site)

**Want the workflow docs?**
Coming soon as "Vibe Coding Playbook" - open-source repo with templates, prompts, and decision frameworks. Follow along on my [portfolio blog](https://portfolio-site-umber-gamma.vercel.app/blog).

---

**AI Admission - Like you didn't know**

This post was written with AI assistance as part of my normal workflow. I use AI the same way I use diagrams, checklists, and steam powered weaving looms - disruptive tools to support my thinking and delivery. The experiences, opinions, and final edits are mine, including the bits that are still a bit rough around the edges.

---

*P.S. - If you're reading this and thinking "I should try this," you should. And when you do, share your results. I'd love to see what patterns emerge when other people test this workflow.*
