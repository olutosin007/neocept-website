# Neocept Website — Functional Specification Document

| Field              | Value                                         |
| ------------------ | --------------------------------------------- |
| **Document ID**    | FSD-001                                       |
| **Project**        | Neocept Corporate Website (v2)                |
| **Version**        | 1.0                                           |
| **Status**         | Draft                                         |
| **Date Created**   | 2026-02-25                                    |
| **Last Updated**   | 2026-02-25                                    |
| **Author**         | Neocept Engineering                           |
| **Stack**          | React 18 · Vite 5 · TypeScript · Tailwind CSS · Framer Motion |

---

## 1. Overview

Neocept is a creative consultancy operating at the intersection of brand strategy and artificial intelligence. This document catalogues every functional feature of the corporate website — both as currently implemented and as planned for build-out. Each feature is assigned a unique identifier, a description, current implementation status, and priority.

---

## 2. Site Architecture

### 2.1 Technology Stack

| Layer       | Technology                                  |
| ----------- | ------------------------------------------- |
| Framework   | React 18 (SPA)                              |
| Bundler     | Vite 5                                      |
| Language    | TypeScript                                  |
| Styling     | Tailwind CSS 3.4 + custom CSS variables     |
| Animation   | Framer Motion 11                             |
| Typography  | Google Fonts — DM Serif Display, DM Sans    |
| Deployment  | TBD                                         |

### 2.2 Design System

| Token        | Value                              | Usage                         |
| ------------ | ---------------------------------- | ----------------------------- |
| Navy         | `#0F1B35`                          | Primary text, dark backgrounds |
| Gold         | `#C9A84C`                          | Accents, decorative rules      |
| Blue         | `#1764ae`                          | CTA buttons, links, highlights |
| Cream        | `#F8F5EF`                          | Light section backgrounds      |
| Deep Dark    | `#080E1C`                          | Manifesto & footer backgrounds |
| White        | `#FFFFFF`                          | Body background, hero text     |
| Light Blue   | `#EEF4FB`                          | Hover states                   |
| Display Font | DM Serif Display                   | Headings, statistics           |
| Body Font    | DM Sans                            | Body copy, UI labels           |

### 2.3 Page Structure (Single-Page)

The site is a single-page application with anchor-based navigation. The sections render in the following order:

1. Sticky Navigation
2. Hero
3. Stats Bar
4. Services
5. Selected Work
6. Manifesto
7. Thinking (Blog/Insights)
8. Contact CTA
9. Footer

---

## 3. Feature Catalogue

### F-001 · Sticky Navigation Bar

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-001 |
| **Status**      | Implemented (basic) |
| **Priority**    | P0 — Critical |

**Description**
A fixed top navigation bar that persists across scroll. Includes the Neocept logo (left), desktop navigation links (centre-right), and a primary CTA button (far right). On scroll past 40 px, a subtle box-shadow appears.

**Current Capabilities**
- Logo links to `#hero`
- Desktop links: Work, Services, About, Thinking (anchor scroll)
- "Start a Project" CTA links to `#contact`
- Scroll-aware shadow transition

**Planned Enhancements**
- [ ] Active-section highlight on nav links
- [ ] Smooth scroll offset to account for fixed nav height
- [ ] Accessibility: keyboard navigation, ARIA roles, focus styles
- [ ] Logo swap to white variant on dark sections (if applicable)

---

### F-002 · Mobile Navigation Menu

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-002 |
| **Status**      | Implemented (basic) |
| **Priority**    | P0 — Critical |

**Description**
A hamburger toggle (three-line icon) visible on screens below the `md` breakpoint. Opens an overlay panel with the same navigation links and CTA.

**Current Capabilities**
- Animated hamburger-to-X icon transition
- Full link list + "Start a Project" CTA
- Menu closes on link click

**Planned Enhancements**
- [ ] Slide/fade animation on open/close (Framer Motion)
- [ ] Body scroll lock when menu is open
- [ ] Focus trap for accessibility
- [ ] Backdrop overlay behind menu

---

### F-003 · Hero Section

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-003 |
| **Status**      | Implemented |
| **Priority**    | P0 — Critical |

**Description**
Full-viewport hero with a dark navy background (`#0F1B35`), an SVG grid pattern overlay, and a two-column layout. The left column contains the headline "Where Strategy Meets Intelligence." and a sub-tagline. The right column contains an information card listing the founding year (Est. 2024), core services, and a "Begin the Conversation" CTA.

**Current Capabilities**
- Animated gold rule, headline (fade-up), sub-copy, and info card
- Geometric blue accent block (bottom-right, 13% opacity)
- Vertical gold accent line (left edge)
- Scroll indicator with pulsing animation
- Responsive grid: stacks to single column on mobile

**Planned Enhancements**
- [ ] Dynamic hero content (CMS-driven headline/copy)
- [ ] Hero background image or video option
- [ ] A/B testing support for headline variants

---

### F-004 · Statistics Bar

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-004 |
| **Status**      | Implemented |
| **Priority**    | P1 — High |

**Description**
A full-width blue (`#1764ae`) bar displaying four animated counters: 40+ Clients, 120+ Projects, 12 Industries, 3 Continents. Numbers animate from 0 to the target value when the section scrolls into view.

**Current Capabilities**
- Count-up animation using Framer Motion (`useMotionValue`, `useTransform`, `animate`)
- Triggers once on scroll into viewport (`useInView`, `once: true`)
- Responsive: wraps on small screens

**Planned Enhancements**
- [ ] CMS-driven stat values
- [ ] Configurable animation duration/easing
- [ ] Suffix formatting (e.g., "40+" rendered with distinct styling)

---

### F-005 · Services Section

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-005 |
| **Status**      | Implemented |
| **Priority**    | P0 — Critical |

**Description**
Two service cards displayed in a 2-column grid on a cream background. Each card has a blue top border, a large background number (01, 02), a title, a list of capabilities, and a "Learn More" link.

**Card 1 — Branding & Creative Consulting**
- Brand Strategy
- Visual Identity
- Campaign Development
- Creative Direction

**Card 2 — AI-Driven Solutions**
- AI Content Systems
- Intelligent Automation
- Conversational Design
- Data-Driven Creative

**Current Capabilities**
- Scroll-triggered fade-up animation (staggered)
- "Learn More" links to `#contact`

**Planned Enhancements**
- [ ] Dedicated service detail pages (routing)
- [ ] Hover/interaction states on cards
- [ ] Icon/illustration per capability
- [ ] CMS-driven service content
- [ ] Additional service cards as offerings expand

---

### F-006 · Selected Work / Portfolio

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-006 |
| **Status**      | Implemented (placeholder) |
| **Priority**    | P0 — Critical |

**Description**
A list-style portfolio section displaying project rows. Each row shows: client name, project category, year, and a brief description. Rows animate in with a slide-left effect and feature a hover state (light blue background + gold left border).

**Current Projects (placeholder data)**
1. Meridian Bank — Brand Identity (2024)
2. Volta Energy — AI Campaign (2024)
3. Crestline Group — Creative Strategy (2023)
4. Aether Studio — Communication Design (2023)

**Current Capabilities**
- Scroll-triggered slide-left animation (staggered per row)
- Hover: light blue background + gold left border accent
- Responsive: stacks to column layout on mobile

**Planned Enhancements**
- [ ] Case study detail pages with imagery, challenge/solution/result narrative
- [ ] Project thumbnail/hero images
- [ ] Category filtering / tag-based filtering
- [ ] CMS integration for project management
- [ ] "View All Work" pagination or load-more
- [ ] Lightbox or modal preview

---

### F-007 · Brand Manifesto Section

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-007 |
| **Status**      | Implemented |
| **Priority**    | P1 — High |

**Description**
A dark-background (`#080E1C`) statement section presenting Neocept's core principle in four sequential lines with staggered fade-up animation. Includes a decorative gold mark and a section label ("Our Core Principle").

**Manifesto Copy**
1. "The brands that win don't play it safe."
2. "They lead with conviction."
3. "We bring both — the strategic clarity to know what matters, and the creative courage to make it impossible to ignore."
4. "Powered by human insight. Amplified by AI."

**Planned Enhancements**
- [ ] Parallax or scroll-linked animation
- [ ] CMS-editable manifesto copy

---

### F-008 · Thinking / Insights Section

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-008 |
| **Status**      | Implemented (placeholder) |
| **Priority**    | P1 — High |

**Description**
A 2-column grid of article preview cards, each with a category label, title, summary, and "Read More" link. Positioned as thought leadership content.

**Current Articles (placeholder)**
1. "The Myth of the Creative Machine" — AI & Creativity
2. "Why Most Rebrands Fail Before They Launch" — Brand Strategy

**Current Capabilities**
- Scroll-triggered fade-up animation
- Hover: title changes to blue
- "Read More" links (currently self-referencing `#thinking`)

**Planned Enhancements**
- [ ] Blog/article detail pages with full content
- [ ] CMS integration for article management
- [ ] Article listing page with pagination
- [ ] Category/tag taxonomy and filtering
- [ ] Featured image per article
- [ ] Author attribution and publish date
- [ ] Social sharing functionality
- [ ] Reading time estimate
- [ ] Related articles suggestions

---

### F-009 · Contact CTA Section

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-009 |
| **Status**      | Implemented (basic) |
| **Priority**    | P0 — Critical |

**Description**
A blue background section with a grid pattern overlay containing a headline ("Ready to Build Something Remarkable?"), a supporting line, and two CTA buttons: "Start a Project" and a mailto link for `hello@neocept.com`.

**Current Capabilities**
- Scroll-triggered animation
- Two CTAs: primary (white bg) and secondary (outlined)
- Both link to `mailto:hello@neocept.com`

**Planned Enhancements**
- [ ] Inline contact form (name, email, message, budget range)
- [ ] Form validation and submission handling
- [ ] Integration with email service (e.g., Resend, SendGrid)
- [ ] Success/error state messaging
- [ ] Calendar booking integration (e.g., Calendly embed)
- [ ] Anti-spam (honeypot or reCAPTCHA)

---

### F-010 · Footer

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-010 |
| **Status**      | Implemented |
| **Priority**    | P1 — High |

**Description**
A dark footer (`#080E1C`) with the Neocept logo (inverted to white), navigation links (Work, Services, About, Thinking, Contact), social links (LinkedIn, Instagram, X), copyright notice, and the brand tagline.

**Current Capabilities**
- Logo with CSS brightness/invert filter
- Navigation links (anchor scroll)
- Social links (placeholder `#` hrefs)
- Copyright: "© 2024 Neocept. All rights reserved."
- Tagline: "Where Strategy Meets Intelligence."

**Planned Enhancements**
- [ ] Live social media links
- [ ] Dynamic copyright year
- [ ] Privacy policy and terms of service links
- [ ] Newsletter signup form
- [ ] Office location / address
- [ ] Back-to-top button

---

### F-011 · Scroll Animations (Global)

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-011 |
| **Status**      | Implemented |
| **Priority**    | P1 — High |

**Description**
All major content sections use Framer Motion scroll-triggered animations, activated once when elements enter the viewport.

**Animation Variants**
- `fadeUp` — opacity 0→1, y 32→0, 0.7s cubic-bezier
- `fadeIn` — opacity 0→1, 0.8s ease-out
- `slideLeft` — opacity 0→1, x -24→0, 0.6s cubic-bezier
- Count-up — number animation from 0 to target, 1.8s ease-out

**Planned Enhancements**
- [ ] Reduced motion media query support (`prefers-reduced-motion`)
- [ ] Performance audit for animation on low-end devices

---

### F-012 · Responsive Design

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-012 |
| **Status**      | Implemented |
| **Priority**    | P0 — Critical |

**Description**
The site uses Tailwind CSS responsive utilities throughout, with a primary breakpoint at `md` (768 px). Layouts shift from single-column (mobile) to multi-column (desktop) grid configurations.

**Planned Enhancements**
- [ ] Comprehensive tablet breakpoint testing
- [ ] Large desktop (1440 px+) layout optimisation
- [ ] Touch interaction audit for mobile

---

## 4. Planned Features (Not Yet Implemented)

### F-013 · Client-Side Routing

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-013 |
| **Status**      | Not implemented |
| **Priority**    | P0 — Critical |

**Description**
Transition from a single-page anchor-scroll model to a multi-page routing structure using React Router (or equivalent). Required to support dedicated pages for case studies, blog articles, service details, about page, etc.

---

### F-014 · About Page

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-014 |
| **Status**      | Not implemented |
| **Priority**    | P1 — High |

**Description**
A dedicated About page covering Neocept's mission, team, values, and methodology. The nav link "About" currently has no target section.

**Planned Content**
- Company story and mission
- Team members with bios/photos
- Methodology / process overview
- Client logos / trust signals

---

### F-015 · CMS Integration

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-015 |
| **Status**      | Not implemented |
| **Priority**    | P1 — High |

**Description**
Integration with a headless CMS (e.g., Sanity, Contentful, Strapi) to manage dynamic content: blog articles, case studies, team members, testimonials, and service descriptions.

---

### F-016 · SEO & Metadata

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-016 |
| **Status**      | Not implemented |
| **Priority**    | P1 — High |

**Description**
Comprehensive SEO implementation including:
- Dynamic `<title>` and `<meta>` tags per page/section
- Open Graph and Twitter Card metadata
- Structured data (JSON-LD) for organisation schema
- Sitemap generation
- Canonical URLs

---

### F-017 · Analytics & Tracking

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-017 |
| **Status**      | Not implemented |
| **Priority**    | P2 — Medium |

**Description**
Integration with analytics platforms:
- Google Analytics 4 (or Plausible/Fathom for privacy-first)
- Event tracking on CTA clicks, form submissions, scroll depth
- Cookie consent banner (GDPR/CCPA compliance)

---

### F-018 · Performance Optimisation

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-018 |
| **Status**      | Not implemented |
| **Priority**    | P2 — Medium |

**Description**
- Image optimisation (WebP, lazy loading, responsive `srcset`)
- Code splitting and lazy-loaded route components
- Font loading strategy (`font-display: swap`, preload)
- Lighthouse performance audit baseline

---

### F-019 · Accessibility (WCAG 2.1 AA)

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-019 |
| **Status**      | Not implemented |
| **Priority**    | P1 — High |

**Description**
Full accessibility audit and remediation:
- Semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<footer>`)
- Skip-to-content link
- ARIA labels on interactive elements
- Colour contrast verification (WCAG AA minimum 4.5:1)
- Keyboard navigability throughout
- Screen reader testing
- `prefers-reduced-motion` support for animations

---

### F-020 · Contact Form

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-020 |
| **Status**      | Not implemented |
| **Priority**    | P0 — Critical |

**Description**
A functional contact form replacing the current mailto links. Fields:
- Full name
- Email address
- Company / organisation
- Project type (dropdown)
- Message
- Budget range (optional)

Backend integration for form submission (serverless function or third-party service). Includes client-side validation, success/error feedback, and anti-spam measures.

---

### F-021 · Dark Mode / Theme Toggle

| Attribute       | Detail |
| --------------- | ------ |
| **ID**          | F-021 |
| **Status**      | Not implemented |
| **Priority**    | P3 — Low |

**Description**
Optional dark/light theme toggle. The site already uses a sophisticated dark/light sectional approach, so this may be deferred.

---

## 5. Non-Functional Requirements

| Requirement         | Target                                      |
| ------------------- | ------------------------------------------- |
| Page Load Time      | < 2s on 4G (LCP)                            |
| Lighthouse Score    | > 90 across all categories                  |
| Browser Support     | Chrome, Firefox, Safari, Edge (latest 2)    |
| Mobile Support      | iOS Safari 15+, Chrome Android 100+         |
| Uptime              | 99.9%                                       |
| WCAG Compliance     | Level AA (2.1)                              |
| SSL                 | Required (HTTPS only)                       |

---

## 6. Revision History

| Version | Date       | Author              | Changes         |
| ------- | ---------- | -------------------- | --------------- |
| 1.0     | 2026-02-25 | Neocept Engineering  | Initial draft   |
