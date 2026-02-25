# Sprint 2 — Architecture & New Pages

| Field              | Value                                                           |
| ------------------ | --------------------------------------------------------------- |
| **Document ID**    | SPR-002                                                         |
| **Sprint**         | 2 of 3                                                          |
| **Sprint Name**    | Architecture & New Pages                                        |
| **Scope**          | Multi-page routing, new pages, contact form, SEO, accessibility |
| **Ref**            | FSD-001 (F-013, F-014, F-016, F-019, F-020)                    |
| **Depends On**     | SPR-001 (Sprint 1 complete)                                     |
| **Status**         | Not Started                                                     |
| **Date Created**   | 2026-02-25                                                      |
| **Last Updated**   | 2026-02-25                                                      |

---

## 1. Sprint Objective

Transform the site from a single-page prototype into a multi-page application with proper routing, dedicated content pages, a functional contact form, foundational SEO, and WCAG 2.1 AA accessibility. This sprint builds the skeletal architecture that Sprint 3's content engine will populate.

By the end of this sprint, Neocept's website should function as a fully navigable, multi-page experience that a prospect could explore, understand the brand's depth, and initiate a conversation — all without a single dead end.

---

## 2. Design Principles (Sprint-wide)

1. **Seamless transitions** — Page navigation should feel fluid, not jarring. Shared elements (nav, footer) persist. Page content transitions with a considered fade or slide.
2. **Content depth without clutter** — New pages should feel expansive but focused. Every section earns its place.
3. **Conversion architecture** — Every page should have a clear path to contact. The visitor should never be more than one click from starting a conversation.
4. **Accessible by default** — Accessibility is not a bolt-on. Every component built in this sprint ships with semantic markup, ARIA attributes, and keyboard support from day one.
5. **SEO as structure** — Metadata, heading hierarchy, and URL structure are architectural decisions, not afterthoughts.

---

## 3. Task Breakdown

### 3.1 · Client-Side Routing (F-013)

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S2-01 | Install React Router v6. Set up `BrowserRouter` at the app root. | P0 |
| S2-02 | Refactor `App.tsx` into a layout component with `<Outlet />`. Extract the homepage sections into a dedicated `HomePage` component/route. | P0 |
| S2-03 | Define route structure: `/` (Home), `/about` (About), `/work` (Work index), `/work/:slug` (Case study), `/thinking` (Blog index), `/thinking/:slug` (Article), `/contact` (Contact). | P0 |
| S2-04 | Add page transition animation: a subtle fade (opacity 0→1, 200 ms) on route change. Use Framer Motion `AnimatePresence`. | P1 |
| S2-05 | Implement scroll-to-top on route change. When navigating between pages, the viewport resets to the top. | P0 |
| S2-06 | Update all internal anchor links (`#work`, `#services`, etc.) to use React Router `<Link>` components or `useNavigate` hooks. Preserve anchor scroll behaviour on the homepage. | P0 |
| S2-07 | Add a 404 page with brand-consistent styling. Headline: "This page doesn't exist yet." CTA: "Back to Home →". | P1 |

**Architecture Notes:**
The homepage retains its current section-based layout with anchor scrolling. All other routes are new top-level pages. The nav and footer are shared layout components that persist across all routes. This avoids a full SPA rebuild — we extend, not replace.

---

### 3.2 · About Page (F-014)

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S2-08 | Create the About page route and component (`/about`). | P0 |
| S2-09 | **Section 1 — Opening statement.** Full-width hero-style block with navy background. Headline: "We exist to close the gap between what brands say and what they do." Sub-copy: 2–3 sentences on Neocept's founding thesis. Gold decorative rule above headline. | P0 |
| S2-10 | **Section 2 — Our Approach.** Three-column layout on cream background. Three pillars: "Strategic Clarity" / "Creative Courage" / "Intelligent Amplification." Each pillar gets a short paragraph (3–4 lines) and a minimal icon. The pillars should echo the manifesto language. | P0 |
| S2-11 | **Section 3 — By the Numbers.** Reuse the `StatItem` component from the homepage. Same stats, different context — reinforce credentials. | P1 |
| S2-12 | **Section 4 — Client Logos / Trust Signals.** A horizontally scrolling or static grid of client logos. Use greyscale treatment by default, colour on hover. Minimum 6 logos (use stylised placeholders until real logos are approved). | P1 |
| S2-13 | **Section 5 — Team.** Grid of team member cards. Each card: photo (circular crop, 120 px), name (display font), role (body font, muted), and a one-line bio. Hover: photo scales 1.03×, a subtle shadow appears. Link to LinkedIn optional. | P1 |
| S2-14 | **Section 6 — CTA.** Reuse the Contact CTA component from the homepage. Maintains conversion path consistency. | P0 |
| S2-15 | Ensure all About page sections have scroll-triggered fade-up animations consistent with the homepage. | P1 |

**Messaging Direction:**
The About page is where prospects decide whether Neocept is the right partner. It should answer three questions: "What do you believe?" (Section 1), "How do you work?" (Section 2), and "Who are you?" (Section 5). The tone is authoritative but approachable — like a first meeting with a trusted advisor. No corporate jargon. No "passionate team of creatives" clichés. Specificity over superlatives.

**Visual Direction:**
The page should alternate between dark (navy) and light (cream/white) sections — mirroring the homepage rhythm. Photography should be high-contrast, desaturated, and architectural in feel. If team photos aren't available yet, use abstract geometric placeholders in the Neocept palette rather than stock photography (which instantly undermines credibility).

---

### 3.3 · Contact Form (F-020)

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S2-16 | Create a dedicated `/contact` page. The hero area reuses the Contact CTA section styling (blue background, grid pattern). Below it, a full contact form on a white/cream background. | P0 |
| S2-17 | Form fields: Full Name (text), Email (email, validated), Company (text, optional), Project Type (select: "Brand Strategy", "AI Solutions", "Creative Consulting", "Communication Design", "Other"), Message (textarea, min 20 chars), Budget Range (select: "Under £10k", "£10k–£25k", "£25k–£50k", "£50k+", "Not sure yet" — optional). | P0 |
| S2-18 | Client-side validation with real-time inline error messages. Errors appear below the field in red/amber. Required fields: Name, Email, Message. Email validated with regex + format check. | P0 |
| S2-19 | Form styling: sharp corners (0 border-radius, consistent with brand), navy borders, gold focus ring on active fields, generous padding (py-3 px-4). Labels above fields in uppercase tracking style matching section labels. | P0 |
| S2-20 | Submission handler: integrate with a serverless backend (Resend API, or Supabase Edge Function, or Formspree as interim). POST form data, return success/error. | P0 |
| S2-21 | Success state: replace the form with a confirmation message. Headline: "We've received your message." Sub-copy: "We'll be in touch within 24 hours." Include a "Back to Home →" link. Animate in with fade-up. | P1 |
| S2-22 | Error state: display an inline banner above the form. "Something went wrong. Please try again or email us directly at hello@neocept.com." Include a retry button. | P1 |
| S2-23 | Anti-spam: honeypot field (hidden, reject if filled) + rate limiting on the backend (max 3 submissions per IP per hour). | P1 |
| S2-24 | Also update the homepage Contact CTA section: keep the mailto link, but change the primary "Start a Project" button to route to `/contact`. | P0 |

**UX Direction:**
The form should feel like a conversation, not a bureaucratic intake. Field labels should be direct: "Your name", "Your email", "Tell us about your project." The budget dropdown is optional and deliberately positioned last to reduce friction. The overall form should be visually light — generous whitespace, clear hierarchy, no borders between fields (just bottom-border or floating-label style).

---

### 3.4 · SEO & Metadata (F-016)

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S2-25 | Install `react-helmet-async` (or equivalent). Wrap the app in a `HelmetProvider`. | P0 |
| S2-26 | Create a reusable `<SEO>` component that accepts: `title`, `description`, `ogImage`, `ogType`, `canonical`. Renders `<title>`, meta description, Open Graph tags, and Twitter Card tags. | P0 |
| S2-27 | Apply `<SEO>` to every page: Home ("Neocept — Where Strategy Meets Intelligence"), About ("About Neocept — Strategy, Creativity & AI"), Contact ("Contact Neocept — Start a Project"), 404. | P0 |
| S2-28 | Add structured data (JSON-LD) for Organisation schema: name, url, logo, sameAs (social profiles), contactPoint. Inject in the `<head>` of the homepage. | P1 |
| S2-29 | Create a `robots.txt` in the `public/` folder. Allow all crawlers, reference sitemap. | P1 |
| S2-30 | Create a basic `sitemap.xml` in `public/` listing all routes. Update manually for now (automated generation comes with CMS in Sprint 3). | P1 |
| S2-31 | Ensure all pages have a proper heading hierarchy: exactly one `<h1>` per page, followed by `<h2>`, `<h3>` in logical order. Audit and fix any hierarchy violations. | P0 |

---

### 3.5 · Accessibility — WCAG 2.1 AA (F-019)

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S2-32 | Wrap the page in semantic landmarks: `<header>` (nav), `<main>` (page content), `<footer>`. Each section gets an appropriate `aria-label` or `aria-labelledby`. | P0 |
| S2-33 | Add a "Skip to main content" link as the first focusable element. Hidden visually, visible on focus. Styled with the gold focus ring. | P0 |
| S2-34 | Audit all colour contrast ratios against WCAG AA (4.5:1 for normal text, 3:1 for large text). Flag and fix any failures. Key risk areas: white text on blue backgrounds, gold text on dark backgrounds. | P0 |
| S2-35 | Ensure every `<img>` has a meaningful `alt` attribute. Decorative images get `alt=""` and `aria-hidden="true"`. | P0 |
| S2-36 | Ensure all form inputs have associated `<label>` elements (not just placeholder text). Error messages are linked with `aria-describedby`. | P0 |
| S2-37 | Test full keyboard navigation path: Tab through every interactive element on every page. Ensure logical order, visible focus, and no focus traps (except intentional ones like modals). | P0 |
| S2-38 | Add `aria-live="polite"` regions for dynamic content: form success/error messages, any content that changes without page reload. | P1 |
| S2-39 | Screen reader testing: navigate every page with VoiceOver (macOS). Document and fix any issues where content is not announced correctly. | P1 |

---

### 3.6 · Shared Components & Infrastructure

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S2-40 | Extract the Nav into its own component file (`components/Nav.tsx`). It should accept the current route and highlight the active page link accordingly. | P0 |
| S2-41 | Extract the Footer into its own component file (`components/Footer.tsx`). | P0 |
| S2-42 | Extract the Contact CTA block into a reusable component (`components/ContactCTA.tsx`) usable on any page. | P0 |
| S2-43 | Create a shared Button component (`components/Button.tsx`) with variants: `primary` (white bg), `secondary` (outlined), `ghost` (text-only). All share the sharp-corner, brand-consistent styling. | P1 |
| S2-44 | Create a shared SectionLabel component (`components/SectionLabel.tsx`) for the gold uppercase labels used throughout. | P2 |
| S2-45 | Refactor `App.tsx`: it currently holds ~827 lines. Break it into per-section components in a `components/` or `sections/` directory. The main file should be the layout shell + router only. | P0 |

**Architecture Notes:**
This refactor is load-bearing for Sprint 3. When we add CMS content, each page and section needs to be independently importable, testable, and content-injectable. The monolithic `App.tsx` must be decomposed before any further feature work.

---

## 4. Acceptance Criteria

Sprint 2 is complete when:

- [ ] The site has working client-side routing with at least 4 routes: `/`, `/about`, `/contact`, and a 404 fallback
- [ ] The About page is fully designed and populated with intentional content
- [ ] The Contact page has a functional, validated form that successfully submits data
- [ ] Form success and error states are handled gracefully
- [ ] Every page has unique `<title>`, meta description, and Open Graph tags
- [ ] Structured data (JSON-LD) is present on the homepage
- [ ] `robots.txt` and `sitemap.xml` exist in the public directory
- [ ] The site passes an automated WCAG 2.1 AA audit (axe or Lighthouse) with zero critical violations
- [ ] Keyboard-only navigation works end-to-end on all pages
- [ ] Skip-to-content link is functional
- [ ] `App.tsx` has been decomposed into modular components
- [ ] All pages maintain the visual quality standard established in Sprint 1

---

## 5. Out of Scope (Sprint 2)

- CMS integration (Sprint 3)
- Blog article pages with full content (Sprint 3)
- Case study detail pages (Sprint 3)
- Analytics and event tracking (Sprint 3)
- Performance optimisation beyond basics (Sprint 3)
- Newsletter signup (Sprint 3)
- Dark mode toggle (backlog)
