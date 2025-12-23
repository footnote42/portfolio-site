# Spec-Kit: Spec-Driven Development Toolkit

GitHub Spec Kit integration for structured, specification-driven feature development.

## Usage

This skill provides spec-driven development commands for the portfolio site. All development follows the constitution at `.specify/memory/constitution.md`.

### Available Commands

**Primary Workflow:**
- `/speckit` - Show this help and available commands
- `/speckit.specify [feature-name]` - Create functional specification
- `/speckit.plan [feature-name]` - Create technical implementation plan
- `/speckit.tasks [feature-name]` - Generate actionable task list
- `/speckit.implement [feature-name]` - Execute the implementation

**Supporting Commands:**
- `/speckit.clarify [feature-name]` - Ask clarifying questions about requirements
- `/speckit.analyze [feature-name]` - Analyze specification consistency
- `/speckit.checklist [feature-name]` - Generate quality checklist

### Workflow Process

1. **Specify** - Define what the feature should do (functional requirements)
2. **Clarify** (optional) - Resolve ambiguities before planning
3. **Plan** - Design technical implementation approach
4. **Tasks** - Break down into actionable steps
5. **Implement** - Execute the plan

---

## Command: /speckit.specify

**Purpose:** Create a functional specification for a new feature.

**Usage:** `/speckit.specify feature-name "Brief description"`

**Process:**
1. Read `.specify/memory/constitution.md` to understand project principles
2. Review existing project structure and patterns
3. Create `.specify/specs/[feature-name]/` directory
4. Generate `spec.md` with:
   - Problem statement
   - User stories
   - Functional requirements
   - Success criteria
   - Mobile-first considerations
   - Alignment with constitution
5. Save specification to `.specify/specs/[feature-name]/spec.md`

**Output Format:**
```markdown
# Feature: [Name]

## Overview
Brief description and problem statement

## User Stories
- As a [user], I want to [action] so that [benefit]

## Functional Requirements
1. [Requirement aligned with constitution]
2. [Mobile-first requirement]
3. [Substance over flash requirement]

## Success Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## Out of Scope
What this feature explicitly does NOT include

## Constitution Alignment
How this feature honors the project's core principles
```

---

## Command: /speckit.plan

**Purpose:** Create technical implementation plan from specification.

**Usage:** `/speckit.plan feature-name`

**Prerequisites:** Specification must exist at `.specify/specs/[feature-name]/spec.md`

**Process:**
1. Read the feature specification
2. Review constitution for technical constraints
3. Analyze existing codebase architecture
4. Create `plan.md` with:
   - Technical approach
   - Files to create/modify
   - Data flow design
   - Mobile-first implementation strategy
   - Risks and mitigations
   - Testing approach
5. Save plan to `.specify/specs/[feature-name]/plan.md`

**Output Format:**
```markdown
# Implementation Plan: [Feature Name]

## Technical Approach
High-level technical strategy

## Architecture
How this fits into existing Next.js structure

## Files to Create/Modify
- `path/to/file.tsx` - Purpose
- `path/to/another.js` - Purpose

## Data Flow
How data moves through the feature

## Mobile-First Strategy
Specific mobile optimization approach

## Risks & Mitigations
| Risk | Mitigation |
|------|------------|
| Risk 1 | How we'll handle it |

## Testing Plan
How we'll validate this works

## Rollout Strategy
How we'll deploy incrementally
```

---

## Command: /speckit.tasks

**Purpose:** Generate actionable task breakdown from plan.

**Usage:** `/speckit.tasks feature-name`

**Prerequisites:** Plan must exist at `.specify/specs/[feature-name]/plan.md`

**Process:**
1. Read the implementation plan
2. Break down into specific, actionable tasks
3. Order tasks by dependencies
4. Create `tasks.md` with:
   - Numbered task list
   - Dependencies noted
   - Testing tasks included
   - Documentation tasks included
5. Save tasks to `.specify/specs/[feature-name]/tasks.md`

**Output Format:**
```markdown
# Tasks: [Feature Name]

## Phase 1: Foundation
- [ ] 1. Create directory structure
- [ ] 2. Set up base components
- [ ] 3. Add routing (depends on #2)

## Phase 2: Core Functionality
- [ ] 4. Implement main feature logic
- [ ] 5. Add mobile responsive styles
- [ ] 6. Test on mobile device

## Phase 3: Polish & Joy
- [ ] 7. Add moment of delight
- [ ] 8. Proofread copy
- [ ] 9. Final accessibility check

## Phase 4: Documentation & Deploy
- [ ] 10. Update CLAUDE.md
- [ ] 11. Deploy to Vercel
- [ ] 12. Test on live site
```

---

## Command: /speckit.implement

**Purpose:** Execute the implementation plan.

**Usage:** `/speckit.implement feature-name`

**Prerequisites:** Tasks must exist at `.specify/specs/[feature-name]/tasks.md`

**Process:**
1. Read constitution, spec, plan, and tasks
2. Confirm readiness to proceed with user
3. Execute tasks in order
4. Test each phase before proceeding
5. Update task checkboxes as completed
6. Create implementation log at `.specify/specs/[feature-name]/implementation-log.md`

**Implementation Rules:**
- Follow constitution principles (mobile-first, substance over flash)
- Test on mobile after each significant change
- Don't add features beyond spec
- Keep solutions simple
- Add joy only after functionality works

---

## Command: /speckit.clarify

**Purpose:** Ask structured clarifying questions about requirements.

**Usage:** `/speckit.clarify feature-name`

**Process:**
1. Read the specification (if exists)
2. Identify ambiguities or decision points
3. Generate structured questions covering:
   - User experience decisions
   - Technical approach options
   - Scope boundaries
   - Success criteria clarity
4. Present options to user
5. Update spec with decisions

---

## Command: /speckit.analyze

**Purpose:** Analyze cross-artifact consistency.

**Usage:** `/speckit.analyze feature-name`

**Process:**
1. Read all artifacts (spec, plan, tasks, implementation)
2. Check for:
   - Constitution alignment
   - Spec-to-plan consistency
   - Plan-to-tasks completeness
   - Implementation matches plan
3. Report inconsistencies
4. Suggest corrections

---

## Implementation Notes

**Directory Structure:**
```
.specify/
├── memory/
│   └── constitution.md (project principles)
├── specs/
│   └── [feature-name]/
│       ├── spec.md (functional requirements)
│       ├── plan.md (technical design)
│       ├── tasks.md (actionable breakdown)
│       └── implementation-log.md (execution notes)
└── templates/ (future use)
```

**Constitution Reference:**
All commands must reference `.specify/memory/constitution.md` to ensure:
- Mobile-first approach
- Substance over flash
- Authentic voice
- Simple ships, complex waits
- Learn by building real things

**Integration with Existing Workflow:**
- Spec-kit supplements existing TodoWrite workflow
- Use TodoWrite for task tracking during implementation
- Spec-kit provides structure, TodoWrite provides execution tracking
- DevPlan.md continues to track overall project plans

---

## Example Usage

```
/speckit.specify search-feature "Add search functionality to blog posts"
→ Creates .specify/specs/search-feature/spec.md

/speckit.plan search-feature
→ Creates .specify/specs/search-feature/plan.md

/speckit.tasks search-feature
→ Creates .specify/specs/search-feature/tasks.md

/speckit.implement search-feature
→ Executes implementation with progress tracking
```

---

*Based on GitHub Spec Kit methodology - https://github.com/github/spec-kit*
