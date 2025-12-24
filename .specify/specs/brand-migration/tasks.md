# Tasks: Brand Migration Implementation

**Specification:** `spec.md`
**Plan:** `plan.md`
**Created:** December 23, 2025

---

## Phase 1: Preparation ✅ (COMPLETE)

- [x] 1. Create git branch `brand-refresh`
- [x] 2. Add brand CSS variables to `globals.css`
- [x] 3. Load JetBrains Mono + Inter fonts in `layout.js`
- [x] 4. Test foundation - verify no visual changes
- [x] 5. Commit Phase 1

## Phase 2: Component Library ✅ (COMPLETE)

- [x] 6. Create `app/components/brand/` directory
- [x] 7. Build BrandCard component
- [x] 8. Build BrandHeading component
- [x] 9. Build BrandLink component
- [x] 10. Build BrandButton component
- [x] 11. Build BrandTag component
- [x] 12. Create component index file
- [x] 13. Build `/brand-preview` page
- [x] 14. Test brand preview in browser
- [x] 15. Commit Phase 2

## Phase 3: Page Migration - About ✅ (COMPLETE)

- [x] 16. Capture "before" screenshot of /about page
- [x] 17. Create backup: `cp app/about/page.tsx app/about/page.tsx.backup`
- [x] 18. Import brand components in /about
- [x] 19. Replace root container with brand background
- [x] 20. Replace h1 with `<BrandHeading level={1}>`
- [x] 21. Update paragraph text styling (Inter font)
- [x] 22. Test /about page in browser (desktop)
- [x] 23. Test /about page on mobile device
- [x] 24. Run `npm run build` - verify success
- [x] 25. Capture "after" screenshot of /about
- [x] 26. Commit: "brand: migrate /about page"
- [x] 27. Remove backup file

## Phase 4: Page Migration - Contact ✅ (COMPLETE)

- [x] 28. Capture "before" screenshot of /contact page
- [x] 29. Create backup: `cp app/contact/page.tsx app/contact/page.tsx.backup`
- [x] 30. Import brand components in /contact
- [x] 31. Replace root container with brand background
- [x] 32. Replace h1 with `<BrandHeading level={1}>`
- [x] 33. Style form inputs with brand colors
- [x] 34. Replace submit button with `<BrandButton variant="primary">`
- [x] 35. Replace GitHub link with `<BrandLink external>`
- [x] 36. Test form functionality
- [x] 37. Test /contact page on mobile device
- [x] 38. Run `npm run build` - verify success
- [x] 39. Capture "after" screenshot of /contact
- [x] 40. Commit: "brand: migrate /contact page"
- [x] 41. Remove backup file

## Phase 5: Page Migration - Journey ✅ (COMPLETE)

- [x] 42. Capture "before" screenshot of /journey page
- [x] 43. Create backup: `cp app/journey/page.tsx app/journey/page.tsx.backup`
- [x] 44. Import brand components in /journey
- [x] 45. Replace root container (preserve 'use client')
- [x] 46. Replace heading with `<BrandHeading>`
- [x] 47. Replace milestone cards with `<BrandCard>`
- [x] 48. Update expand/collapse button styling
- [x] 49. Test expand/collapse functionality
- [x] 50. Test timeline interactions
- [x] 51. Test /journey page on mobile device
- [x] 52. Run `npm run build` - verify success
- [x] 53. Capture "after" screenshot of /journey
- [x] 54. Commit: "brand: migrate /journey page"
- [x] 55. Remove backup file

## Phase 6: Page Migration - Blog Index ✅ (COMPLETE)

- [x] 56. Capture "before" screenshot of /blog page
- [x] 57. Create backup: `cp app/blog/page.tsx app/blog/page.tsx.backup`
- [x] 58. Import brand components in /blog
- [x] 59. Replace root container with brand background
- [x] 60. Replace h1 with `<BrandHeading level={1}>`
- [x] 61. Replace blog post cards with `<BrandCard>`
- [x] 62. Add `<BrandTag>Featured</BrandTag>` for featured posts
- [x] 63. Style reading time and date with brand typography
- [x] 64. Replace "Read more" links with `<BrandLink>`
- [x] 65. Test card hover effects
- [x] 66. Test /blog grid on mobile
- [x] 67. Run `npm run build` - verify success
- [x] 68. Capture "after" screenshot of /blog
- [x] 69. Commit: "brand: migrate /blog index page"
- [x] 70. Remove backup file

## Phase 7: Page Migration - Blog Post ✅ (COMPLETE)

- [x] 71. Navigate to sample blog post, capture screenshot
- [x] 72. Create backup: `cp app/blog/[slug]/page.tsx app/blog/[slug]/page.tsx.backup`
- [x] 73. Import brand components in /blog/[slug]
- [x] 74. Replace root container with brand background
- [x] 75. Add markdown component mapping for headings
- [x] 76. Add markdown component mapping for links
- [x] 77. Style code blocks with charcoal background
- [x] 78. Style inline code with purple accent
- [x] 79. Test markdown rendering (headings, links, code)
- [x] 80. Test blog post on mobile device
- [x] 81. Run `npm run build` - verify success
- [x] 82. Capture "after" screenshot of blog post
- [x] 83. Commit: "brand: migrate /blog/[slug] post pages"
- [x] 84. Remove backup file

## Phase 8: Page Migration - Projects ✅ (COMPLETE)

- [x] 85. Capture "before" screenshot of /projects page
- [x] 86. Create backup: `cp app/projects/page.tsx app/projects/page.tsx.backup`
- [x] 87. Import brand components in /projects
- [x] 88. Replace root container with brand background
- [x] 89. Replace h1 with `<BrandHeading level={1}>`
- [x] 90. Replace project cards with `<BrandCard>`
- [x] 91. Replace project headings with `<BrandHeading level={2}>`
- [x] 92. Replace tech stack badges with `<BrandTag>`
- [x] 93. Replace "Try It Live" buttons with `<BrandButton variant="primary">`
- [x] 94. Replace "Learn More" buttons with `<BrandButton variant="secondary">`
- [x] 95. Test all project cards render correctly
- [x] 96. Test GitHub data still loads
- [x] 97. Test /projects page on mobile device
- [x] 98. Run `npm run build` - verify success
- [x] 99. Capture "after" screenshot of /projects
- [x] 100. Commit: "brand: migrate /projects page"
- [x] 101. Remove backup file

## Phase 9: Page Migration - Homepage (LAST) ✅ (COMPLETE)

- [x] 102. Capture "before" screenshot of / homepage
- [x] 103. Create backup: `cp app/page.tsx app/page.tsx.backup`
- [x] 104. Import brand components in homepage
- [x] 105. Replace root container with brand background
- [x] 106. Replace hero intro paragraph with brand typography
- [x] 107. Replace "Featured Projects" heading with `<BrandHeading level={2}>`
- [x] 108. Replace featured project cards with `<BrandCard>`
- [x] 109. Update project status badges with brand colors
- [x] 110. Replace "All Projects" heading with `<BrandHeading level={2}>`
- [x] 111. Replace all project cards with `<BrandCard>`
- [x] 112. Update all tech stack tags with `<BrandTag>`
- [x] 113. Replace CTAs with `<BrandButton>`
- [x] 114. Test featured section layout
- [x] 115. Test all projects grid
- [x] 116. Test status badge colors (Unleashed, Active, etc.)
- [x] 117. Test GitHub API integration works
- [x] 118. Test homepage on mobile device
- [x] 119. Run `npm run build` - verify success
- [x] 120. Capture "after" screenshot of homepage
- [x] 121. Commit: "brand: migrate homepage (final page)"
- [x] 122. Remove backup file

## Phase 10: Navigation Component ✅ (COMPLETE)

- [x] 123. Capture screenshot of navigation
- [x] 124. Create backup: `cp app/components/Navigation.tsx app/components/Navigation.tsx.backup`
- [x] 125. Import brand components in Navigation
- [x] 126. Update nav container background
- [x] 127. Replace nav links with brand styling
- [x] 128. Test navigation on all pages
- [x] 129. Test mobile menu (if exists)
- [x] 130. Run `npm run build` - verify success
- [x] 131. Commit: "brand: migrate navigation component"
- [x] 132. Remove backup file

## Phase 11: Cleanup & Polish ✅ (COMPLETE)

- [x] 133. Remove old CSS variables from `globals.css` (--background, --foreground)
- [x] 134. Remove dark mode media query from `globals.css`
- [x] 135. Update body styles to use brand colors permanently
- [x] 136. Search codebase for remaining `dark:*` utilities
- [x] 137. Remove any leftover Tailwind dark mode classes
- [x] 138. Run `npm run build` - verify success
- [x] 139. Test all pages one final time
- [x] 140. Commit: "brand: remove old theme system"

## Phase 12: Documentation ✅ (COMPLETE)

- [x] 141. Update `CLAUDE.md` - remove dark mode references
- [x] 142. Update `CLAUDE.md` - add brand component usage guide
- [x] 143. Update `README.md` - mention workshop aesthetic
- [x] 144. Create `.specify/specs/brand-migration/implementation-log.md`
- [x] 145. Document any issues encountered during migration
- [x] 146. Document any deviations from plan
- [x] 147. Commit: "docs: update for brand migration completion"

## Phase 13: Final Testing & Deployment ✅ (COMPLETE)

- [x] 148. Run full production build: `npm run build`
- [x] 149. Test production build locally: `npm start`
- [x] 150. Test all pages in production mode
- [x] 151. Run Lighthouse audit (maintain/improve score)
- [x] 152. Test on actual mobile device (all pages)
- [x] 153. Test on different browsers (Chrome, Safari, Firefox)
- [x] 154. Create before/after comparison document
- [x] 155. Push branch to GitHub
- [x] 156. Verify Vercel preview deployment
- [x] 157. Test preview deployment on mobile
- [x] 158. Get stakeholder approval on preview
- [x] 159. Merge `brand-refresh` → `main`
- [x] 160. Verify production deployment
- [x] 161. Test live site on actual mobile device
- [x] 162. Mark brand migration complete in `Docs/DevPlan.md`

---

## Task Summary

**Total Tasks:** 162
**Completed:** 162 (ALL PHASES COMPLETE)
**Remaining:** 0

**Breakdown by Phase:**
- ✅ Phase 1: Preparation (5 tasks)
- ✅ Phase 2: Component Library (10 tasks)
- ✅ Phase 3: About Page (12 tasks)
- ✅ Phase 4: Contact Page (14 tasks)
- ✅ Phase 5: Journey Page (14 tasks)
- ✅ Phase 6: Blog Index (15 tasks)
- ✅ Phase 7: Blog Post (14 tasks)
- ✅ Phase 8: Projects Page (17 tasks)
- ✅ Phase 9: Homepage (21 tasks)
- ✅ Phase 10: Navigation (10 tasks)
- ✅ Phase 11: Cleanup (8 tasks)
- ✅ Phase 12: Documentation (7 tasks)
- ✅ Phase 13: Deployment (15 tasks)

**STATUS: MIGRATION COMPLETE - LIVE ON PRODUCTION** 🎉

---

## Execution Notes

### Per-Task Guidelines

**Before Each Task:**
- Read task description carefully
- Understand what's being changed
- Have rollback plan ready

**During Task:**
- Make minimal, focused changes
- Test immediately after change
- Don't combine multiple tasks

**After Task:**
- Verify change works
- Check for console errors
- Test on mobile if applicable
- Check off task in this file

### Commit Strategy

**Commit Frequency:**
- After each page migration (grouped tasks)
- After navigation component
- After cleanup phase
- After documentation updates

**Commit Message Format:**
```
brand: [action] [component/page]

- Specific changes made
- Any notable decisions

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

### Testing Checkpoints

**After Every 3rd Page:**
- Full build test
- Cross-browser check
- Mobile device test
- Compare to brand-preview

---

**Task List Version:** 1.0
**Last Updated:** December 23, 2025
**Ready to Execute:** ✅ Spec → Plan → Tasks complete
