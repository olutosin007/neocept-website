# Sprint 1 — Polish & Elevate

| Field              | Value                                                      |
| ------------------ | ---------------------------------------------------------- |
| **Document ID**    | SPR-001                                                    |
| **Sprint**         | 1 of 3                                                     |
| **Sprint Name**    | Polish & Elevate                                           |
| **Scope**          | Refine all implemented features to production-grade quality |
| **Ref**            | FSD-001 (F-001 → F-012)                                   |
| **Status**         | Not Started                                                |
| **Date Created**   | 2026-02-25                                                 |
| **Last Updated**   | 2026-02-25                                                 |

---

## 1. Sprint Objective

Take every section that currently exists on the site and elevate it from "functional prototype" to "portfolio-grade consultancy website." Every pixel, every word, every interaction should communicate that Neocept is a premium creative consultancy — one that practices what it preaches. No placeholder data. No dead links. No unfinished details.

By the end of this sprint the homepage should be indistinguishable from a live production site.

---

## 2. Design Principles (Sprint-wide)

These principles govern every decision in this sprint:

1. **Restrained confidence** — The design should feel authoritative without shouting. Generous whitespace, deliberate typography, and measured animation.
2. **Craft in the details** — Hover states, transitions, micro-interactions, and responsive behaviour should all feel considered. Nothing default.
3. **Copy as design** — Every line of text is a design decision. Headlines, labels, descriptions, and CTAs all carry the brand voice: sharp, intelligent, warm.
4. **Mobile-first quality** — The mobile experience is not a degraded desktop. It is designed with equal intention.
5. **Performance is UX** — Animations must never cause jank. Fonts must load without layout shift. Images must be optimised.

---

## 3. Task Breakdown

### 3.1 · Navigation Refinement

| Task ID | Description | Feature Ref | Priority |
| ------- | ----------- | ----------- | -------- |
| S1-01 | Add active-section highlight to nav links using Intersection Observer. The active link gets a subtle gold underline or text colour shift (not a heavy indicator — just enough to orient the user). | F-001 | P0 |
| S1-02 | Fix smooth-scroll offset so anchored sections land below the fixed navbar (64 px offset). Apply via `scroll-margin-top` on each section `id`. | F-001 | P0 |
| S1-03 | Add keyboard navigation support: visible focus rings (gold outline, 2 px), logical tab order, `role="navigation"` and `aria-label`. | F-001 | P1 |
| S1-04 | Mobile menu: add Framer Motion slide-down + fade animation on open/close. Lock body scroll when open. Add a semi-transparent backdrop overlay. | F-002 | P0 |
| S1-05 | Mobile menu: implement focus trap so keyboard users can tab within the menu and Escape closes it. | F-002 | P1 |

**UX Direction:**
The navigation should feel like the top bar of a Pentagram or R/GA site — minimal, confident, unhurried. The active-state indicator should be almost invisible until you notice it, then it feels essential. Mobile menu should animate like a high-end app drawer, not a toggle.

---

### 3.2 · Hero Section Elevation

| Task ID | Description | Feature Ref | Priority |
| ------- | ----------- | ----------- | -------- |
| S1-06 | Refine hero headline typographic scale. Tighten leading on the display font. Ensure the gold word "Intelligence." sits perfectly on its own visual line at every breakpoint from 375 px to 1440 px. | F-003 | P0 |
| S1-07 | Refine sub-copy: replace "A creative consultancy built for the age of AI." with messaging that carries more specificity and authority. Proposed: "We build brands that lead markets — powered by strategic clarity and creative AI." | F-003 | P0 |
| S1-08 | Info card (right column): update the services list to use the exact service labels from the Services section for consistency. Add subtle hover elevation (2 px shadow lift) on the "Begin the Conversation" CTA. | F-003 | P1 |
| S1-09 | Scroll indicator: reduce opacity to 20% and slow the pulse to 2.2 s. It should feel ambient, not demanding. | F-003 | P2 |
| S1-10 | Add a subtle parallax drift to the geometric blue accent block (bottom-right) on scroll — 0.3x scroll speed. | F-003 | P2 |

**UX Direction:**
The hero is the first 3 seconds of a brand impression. The typography must be flawless at every viewport. The info card should feel like a prestigious business card — spare, considered, inviting. No generic startup energy. This is a consultancy that has arrived.

---

### 3.3 · Statistics Bar Polish

| Task ID | Description | Feature Ref | Priority |
| ------- | ----------- | ----------- | -------- |
| S1-11 | Format the "+" suffix with distinct styling: slightly smaller font size (0.75em), lighter weight, subtle opacity (90%). The suffix should complement, not compete with, the number. | F-004 | P1 |
| S1-12 | Add a 120 ms stagger between each stat animating in (left to right), so the eye tracks across rather than seeing all four at once. | F-004 | P1 |
| S1-13 | Mobile layout: switch from horizontal row to 2×2 grid on screens below 640 px. Each cell gets the same divider treatment. | F-004 | P1 |
| S1-14 | Reduce count-up duration to 1.4 s for snappier feel. Use `easeOut` curve. | F-004 | P2 |

**UX Direction:**
Stats should land with quiet impact — like a confident data point in a pitch deck, not a gamified dashboard. The stagger creates narrative: clients, then projects, then industries, then continents. A story of scale.

---

### 3.4 · Services Section Design Elevation

| Task ID | Description | Feature Ref | Priority |
| ------- | ----------- | ----------- | -------- |
| S1-15 | Add hover interaction to each card: subtle upward translate (−4 px), enhanced shadow, and blue top-border thickens from 3 px to 4 px. Transition: 250 ms ease. | F-005 | P0 |
| S1-16 | Add a minimal line icon (SVG, monochrome navy) next to each capability. Icons: Strategy (compass), Visual Identity (eye), Campaign (megaphone), Creative Direction (pen-tool), AI Content (cpu), Automation (zap), Conversational Design (message-circle), Data-Driven (bar-chart). Use Lucide icon set. | F-005 | P1 |
| S1-17 | "Learn More →" link: add underline-on-hover animation (slide-in from left, gold underline). Link should navigate to the Contact section until dedicated service pages exist. | F-005 | P1 |
| S1-18 | Review and refine the section label "Our Expertise" — ensure it aligns with the typographic rhythm of other section labels (same size, tracking, colour). | F-005 | P2 |

**UX Direction:**
Service cards should feel like they belong in a McKinsey or IDEO capabilities deck — substantial but clean. The icons add a layer of professionalism without clutter. Hover states telegraph interactivity and reward exploration.

---

### 3.5 · Selected Work — From Placeholder to Credible

| Task ID | Description | Feature Ref | Priority |
| ------- | ----------- | ----------- | -------- |
| S1-19 | Replace placeholder project data with Neocept's actual portfolio (or carefully crafted representative projects). Each entry needs: client name, category, year, and a one-line description that reads like a pitch, not a label. | F-006 | P0 |
| S1-20 | Add a thumbnail image column (left side of each row, 80×56 px, object-cover). Use brand-appropriate placeholder imagery until real assets are ready (abstract textures, geometric patterns in the Neocept palette). | F-006 | P1 |
| S1-21 | Enhance the hover state: the row should expand slightly in height (4 px padding increase), the thumbnail should scale 1.03×, and an arrow icon (→) should appear at the far right, animating in from opacity 0. | F-006 | P1 |
| S1-22 | Add a "View All Work →" link below the project list. Style it as a text link matching the "Learn More →" pattern. | F-006 | P2 |
| S1-23 | Add an accessible `aria-label` to each row describing the project for screen readers. | F-006 | P1 |

**UX Direction:**
The work section is proof. Every word should be chosen to make the reader think "I want that outcome for my brand." The hover expansion creates a feeling of depth — like pulling a folio from a drawer. No project should feel generic.

---

### 3.6 · Core Principle Section Refinement

| Task ID | Description | Feature Ref | Priority |
| ------- | ----------- | ----------- | -------- |
| S1-24 | Add a subtle parallax scroll effect to the gold decorative mark — it should drift upward at 0.2× scroll speed as the section enters view. | F-007 | P2 |
| S1-25 | Increase the pause between each line's fade-up from 0.18 s to 0.24 s. The manifesto should feel like it's being spoken, not displayed. | F-007 | P1 |
| S1-26 | Line 3 (the supporting paragraph): increase max-width to `max-w-3xl` so it doesn't wrap too aggressively on medium viewports. | F-007 | P1 |
| S1-27 | Refine the "Our Core Principle" label position — add more vertical space above it (`mt-16`) and add a thin gold rule (40 px wide) above the label. | F-007 | P2 |

**UX Direction:**
This section should stop the scroll. It's the brand's beating heart. The pacing of the animation is critical — each line should land like a well-timed beat in a keynote. The gold on deep-dark contrast should feel cinematic.

---

### 3.7 · Thinking Section — Editorial Quality

| Task ID | Description | Feature Ref | Priority |
| ------- | ----------- | ----------- | -------- |
| S1-28 | Refine article card design: add a category pill/badge (small, outlined in blue, rounded) instead of plain text. Add a subtle bottom border to each card. | F-008 | P1 |
| S1-29 | Add a "date" line beneath each article title (format: "Feb 2026"). Use a muted navy/50 colour. | F-008 | P1 |
| S1-30 | Add estimated reading time below the summary ("4 min read"). | F-008 | P2 |
| S1-31 | "Read More →" link: match the underline-on-hover animation from Services (S1-17). | F-008 | P1 |
| S1-32 | Write two genuine article summaries that reflect Neocept's thought leadership positioning. Current titles are strong — tighten the summaries to 2 sentences max, with a hook. | F-008 | P0 |

**UX Direction:**
This section positions Neocept as thinkers, not just makers. The editorial design should feel like the front page of a premium blog — Stratechery meets It's Nice That. Every card should make you want to click.

---

### 3.8 · Contact CTA — Conversion-Ready

| Task ID | Description | Feature Ref | Priority |
| ------- | ----------- | ----------- | -------- |
| S1-33 | Refine the headline copy. "Ready to Build Something Remarkable?" is serviceable. Proposed alternative: "Let's Build What's Next." — shorter, more confident, forward-looking. | F-009 | P0 |
| S1-34 | Refine the supporting copy. Current: "We work with ambitious brands who refuse to be ordinary." Proposed: "We partner with brands that are ready to lead, not follow." | F-009 | P1 |
| S1-35 | Primary CTA button: add a subtle hover animation (background slides in from left as a gold-to-white gradient). | F-009 | P2 |
| S1-36 | Secondary CTA (email link): add an animated arrow that slides right 4 px on hover. | F-009 | P2 |

**UX Direction:**
This is the moment of conversion. The section should feel like an invitation from a trusted partner, not a sales form. Copy should be warm and assured. The two CTAs give the visitor a choice of commitment level — "Start a Project" is high intent, the email link is exploratory.

---

### 3.9 · Footer — Complete & Polished

| Task ID | Description | Feature Ref | Priority |
| ------- | ----------- | ----------- | -------- |
| S1-37 | Update copyright to dynamically render the current year (`new Date().getFullYear()`). Update to: "© {year} Neocept. All rights reserved." | F-010 | P0 |
| S1-38 | Replace placeholder social links with real URLs (or remove any that don't exist yet to avoid dead links). | F-010 | P0 |
| S1-39 | Add a "Back to Top" text link or small arrow button aligned right, smooth-scrolling to the hero. | F-010 | P1 |
| S1-40 | Add legal links row: "Privacy Policy" and "Terms of Service" (can link to `#` as placeholder, but must exist in the layout). | F-010 | P1 |
| S1-41 | Refine footer spacing: increase top/bottom padding to `py-14`. Ensure consistent vertical rhythm between rows. | F-010 | P2 |

**UX Direction:**
The footer is the last impression. It should feel as considered as the hero. A well-designed footer signals professionalism — it tells the visitor "we finish what we start." No orphaned links, no placeholder text.

---

### 3.10 · Animation & Motion Audit

| Task ID | Description | Feature Ref | Priority |
| ------- | ----------- | ----------- | -------- |
| S1-42 | Add `prefers-reduced-motion` media query. When enabled: disable all scroll-triggered animations, disable count-up (show final values immediately), disable the scroll indicator pulse. | F-011 | P0 |
| S1-43 | Audit all animation durations. Ensure no animation exceeds 0.8 s. Trim any that feel sluggish on second visit. | F-011 | P1 |
| S1-44 | Add GPU-layer hints (`will-change: transform, opacity`) to animated elements for smoother performance on mobile Safari. | F-011 | P2 |

**UX Direction:**
Animation should enhance comprehension and delight, never obstruct. A visitor who has seen the animations once should not feel delayed on return visits. Reduced motion support is non-negotiable — it's both an accessibility requirement and a quality signal.

---

### 3.11 · Responsive Design Audit

| Task ID | Description | Feature Ref | Priority |
| ------- | ----------- | ----------- | -------- |
| S1-45 | Test and fix layout at 5 breakpoints: 375 px (iPhone SE), 390 px (iPhone 14), 768 px (iPad portrait), 1024 px (iPad landscape), 1440 px (desktop). Document any issues. | F-012 | P0 |
| S1-46 | Verify all text remains readable without horizontal scroll at every breakpoint. Fix any overflow issues. | F-012 | P0 |
| S1-47 | Hero section: ensure the info card doesn't collide with the headline on tablets (768–1024 px). Adjust grid gap or column ratio if needed. | F-012 | P1 |
| S1-48 | Large desktop (1440 px+): ensure the `max-w-7xl` container feels balanced and content doesn't feel stranded in too much whitespace. | F-012 | P1 |

---

### 3.12 · Global Refinements

| Task ID | Description | Feature Ref | Priority |
| ------- | ----------- | ----------- | -------- |
| S1-49 | Add `font-display: swap` to the Google Fonts import to prevent invisible text during font load. | Global | P0 |
| S1-50 | Add a proper favicon (Neocept mark or monogram) replacing the default Vite SVG. Include both `favicon.ico` and a 192×192 PNG for mobile. | Global | P0 |
| S1-51 | Update the page `<title>` to "Neocept — Where Strategy Meets Intelligence" and add a basic meta description. | Global | P0 |
| S1-52 | Ensure all interactive elements have visible focus styles that match the design system (gold outline, 2 px offset). | Global | P1 |

---

## 4. Acceptance Criteria

Sprint 1 is complete when:

- [ ] Every navigation link scrolls to the correct section with proper offset
- [ ] Mobile menu opens/closes with animation, locks scroll, traps focus
- [ ] Active nav link is visually indicated during scroll
- [ ] All placeholder content has been replaced with intentional, brand-aligned copy
- [ ] Hover states exist on all interactive elements (nav links, CTAs, cards, work rows)
- [ ] `prefers-reduced-motion` is respected globally
- [ ] The site renders correctly at 375 px, 390 px, 768 px, 1024 px, and 1440 px
- [ ] Page title, meta description, and favicon are production-ready
- [ ] Footer displays dynamic copyright year and has no dead links
- [ ] No console errors or warnings
- [ ] Lighthouse Performance > 90 on mobile

---

## 5. Out of Scope (Sprint 1)

The following are explicitly **not** in this sprint:
- Client-side routing / multi-page architecture
- New pages (About, case studies, blog articles)
- Contact form functionality
- CMS integration
- Analytics / tracking
- SEO beyond basic meta tags

These are addressed in Sprints 2 and 3.
