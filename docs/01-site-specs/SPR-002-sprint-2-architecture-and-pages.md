# Sprint 2 — MVP Architecture & Core Page Expansion

| Field | Value |
| --- | --- |
| **Document ID** | SPR-002 |
| **Sprint** | 2 of 3 |
| **Sprint Name** | MVP Architecture & Core Page Expansion |
| **Scope** | Route architecture and deeper experiences for sections already present on the homepage |
| **Ref** | FSD-001 (F-013, F-014, F-016, F-019, F-020) |
| **Depends On** | SPR-001 (Sprint 1 complete) |
| **Status** | In Progress |
| **Date Created** | 2026-02-25 |
| **Last Updated** | 2026-02-26 |

---

## 1. Sprint Objective

Deliver a minimal, production-ready MVP by evolving only the user journeys already represented on the homepage: **Services, About/Manifesto, Thinking, Contact, and foundational trust/compliance**.

This sprint intentionally avoids introducing new product surface areas that are not yet active in the homepage experience.

---

## 2. MVP Guardrails (Sprint-wide)

1. **Homepage-first expansion** — If a topic is present on the homepage, deepen it. If not, defer it.
2. **No speculative features** — Avoid introducing sections/pages that have no homepage equivalent yet.
3. **Conversion continuity** — Every expanded page preserves a clear route to contact.
4. **Compliance from day one** — Privacy/cookie controls are part of MVP, not a later add-on.
5. **Accessibility and SEO baseline** — Ship with strong fundamentals rather than advanced extras.

---

## 3. Task Breakdown

### 3.1 · Route Architecture (MVP)

| Task ID | Description | Priority |
| --- | --- | --- |
| S2-01 | Install React Router v6 and set up `BrowserRouter` at app root. | P0 |
| S2-02 | Refactor `App.tsx` into layout + routed page components while keeping homepage visuals intact. | P0 |
| S2-03 | Define MVP routes only: `/` (Home), `/about`, `/services`, `/thinking`, `/contact`, and 404 fallback. | P0 |
| S2-04 | Add route transition fade (Framer Motion) and scroll-to-top on route change. | P1 |
| S2-05 | Update nav/footer links to route-aware navigation; preserve homepage section anchors where applicable. | P0 |
| S2-06 | Add a lightweight 404 page with CTA back home. | P1 |

**Architecture Notes:**
The current homepage already contains the core narrative sections used for MVP expansion. Sprint 2 decomposes and routes these sections without introducing net-new content domains.

---

### 3.2 · About Page (Derived from Manifesto + Credentials)

| Task ID | Description | Priority |
| --- | --- | --- |
| S2-07 | Create `/about` route and component using existing manifesto positioning and tone. | P0 |
| S2-08 | Build opening block from current hero/manifesto language (strategy + intelligence positioning). | P0 |
| S2-09 | Reuse and adapt existing credentials/stat treatment for trust reinforcement. | P1 |
| S2-10 | Add contact CTA block consistent with homepage conversion behavior. | P0 |
| S2-11 | Ensure motion treatment matches homepage (fade-up and subtle stagger). | P1 |

**Explicit Deferral:** Team profiles and client logo grids are deferred to a later release.

---

### 3.3 · Services Page (Derived from Existing Services Cards)

| Task ID | Description | Priority |
| --- | --- | --- |
| S2-12 | Create `/services` route from existing “Our Services” content structure. | P0 |
| S2-13 | Expand each existing service pillar with deeper copy, deliverables, and outcomes. | P0 |
| S2-14 | Reuse existing capability/icon language and visual hierarchy from homepage cards. | P0 |
| S2-15 | Add CTA path to `/contact` and ensure no dead ends. | P0 |

**Explicit Deferral:** New service categories beyond current homepage pillars are deferred.

---

### 3.4 · Thinking Page (Derived from Existing Thinking Cards)

| Task ID | Description | Priority |
| --- | --- | --- |
| S2-16 | Create `/thinking` route as an index of the currently featured thought pieces. | P0 |
| S2-17 | Use current homepage article metadata model (category/date/read time/summary). | P0 |
| S2-18 | Add optional lightweight detail route (`/thinking/:slug`) only for currently featured pieces. | P1 |
| S2-19 | Preserve “Read More” interaction style and section visual rhythm from homepage. | P1 |

**Explicit Deferral:** CMS-powered blog architecture and large article catalogs are deferred.

---

### 3.5 · Contact Experience (Derived from Existing Contact CTA)

| Task ID | Description | Priority |
| --- | --- | --- |
| S2-20 | Create `/contact` page based on existing homepage contact tone and design language. | P0 |
| S2-21 | Build MVP form with required fields: Name, Email, Message (+ optional Company, Project Type). | P0 |
| S2-22 | Implement client-side validation and clear inline error states. | P0 |
| S2-23 | Integrate submission handler (Formspree/Resend/Supabase Edge as interim backend). | P0 |
| S2-24 | Implement success and failure states with clear next actions. | P1 |
| S2-25 | Add anti-spam baseline (honeypot + basic rate limit strategy). | P1 |

---

### 3.6 · SEO & Metadata Baseline

| Task ID | Description | Priority |
| --- | --- | --- |
| S2-26 | Install `react-helmet-async` and create reusable `<SEO>` component. | P0 |
| S2-27 | Apply SEO metadata to MVP routes: `/`, `/about`, `/services`, `/thinking`, `/contact`, and 404. | P0 |
| S2-28 | Add basic Organisation JSON-LD on homepage. | P1 |
| S2-29 | Add `robots.txt` and MVP `sitemap.xml` in `public/`. | P1 |
| S2-30 | Audit heading hierarchy (`h1` singular per page). | P0 |

---

### 3.7 · Accessibility — WCAG 2.1 AA Baseline

| Task ID | Description | Priority |
| --- | --- | --- |
| S2-31 | Apply semantic landmarks across layout (`header`, `main`, `footer`). | P0 |
| S2-32 | Add “Skip to main content” link. | P0 |
| S2-33 | Verify contrast in key brand combinations (white/blue, gold/dark). | P0 |
| S2-34 | Ensure meaningful `alt` handling and decorative image treatment. | P0 |
| S2-35 | Validate full keyboard navigation and focus visibility for all MVP routes. | P0 |
| S2-36 | Add `aria-live` support for dynamic form feedback. | P1 |

---

### 3.8 · Compliance, Privacy & Regulatory Baseline (UK GDPR + PECR)

| Task ID | Description | Priority |
| --- | --- | --- |
| S2-37 | Create `/privacy` page (Privacy Notice) with controller details, lawful bases, rights, retention, and processors. | P0 |
| S2-38 | Create `/cookies` page with category table (purpose, provider, duration) and policy version/date. | P0 |
| S2-39 | Create `/terms` page (MVP legal terms). | P1 |
| S2-40 | Implement cookie banner with `Accept all`, `Reject non-essential`, `Preferences`, `Learn more`. | P0 |
| S2-41 | Implement preferences modal with category toggles (Essential fixed on; others opt-in). | P0 |
| S2-42 | Persist consent state (choices + timestamp + policy version) and add footer `Cookie settings` entry point. | P0 |
| S2-43 | Block non-essential scripts prior to consent grant. | P0 |
| S2-44 | Add privacy notice microcopy + legal links to contact submission flow. | P0 |

**Regulatory Notes:**
- Target practical day-1 readiness for UK GDPR and PECR in a small-business MVP context.
- Legal wording still requires business/legal sign-off before public launch.

---

### 3.9 · Shared Components & Decomposition

| Task ID | Description | Priority |
| --- | --- | --- |
| S2-45 | Extract Nav component with active-route handling. | P0 |
| S2-46 | Extract Footer component and include legal/compliance links. | P0 |
| S2-47 | Extract Contact CTA reusable block for route reuse. | P0 |
| S2-48 | Refactor monolithic `App.tsx` into modular route/section components. | P0 |

---

## 4. Acceptance Criteria

Sprint 2 is complete when:

- [ ] MVP routes are functional: `/`, `/about`, `/services`, `/thinking`, `/contact`, plus 404
- [ ] All expanded pages are derived from current homepage sections (no speculative feature additions)
- [ ] Contact flow submits successfully with validation, error handling, and success state
- [ ] SEO baseline is applied to all MVP routes (`title`, description, OG basics)
- [ ] Accessibility baseline passes with no critical issues in automated audit
- [ ] `/privacy`, `/cookies`, and `/terms` routes are live and linked in footer
- [ ] Cookie banner + preferences modal work, and non-essential scripts are blocked before consent
- [ ] Consent can be changed/withdrawn via persistent `Cookie settings` link
- [ ] `App.tsx` has been decomposed into maintainable components/routes
- [ ] Visual quality remains consistent with Sprint 1 standards

---

## 5. Out of Scope (Sprint 2)

- Work index and case study detail pages (`/work`, `/work/:slug`) while Work remains hidden on homepage
- Team page/cards and client logo wall
- CMS integration and automated content ingestion
- Full editorial/blog engine beyond current Thinking seed content
- Advanced analytics/event tracking stack
- Newsletter and gated content features
- Dark mode toggle
