# Sprint 3 — Content Engine & Growth

| Field              | Value                                                          |
| ------------------ | -------------------------------------------------------------- |
| **Document ID**    | SPR-003                                                        |
| **Sprint**         | 3 of 3                                                         |
| **Sprint Name**    | Content Engine & Growth                                        |
| **Scope**          | CMS, blog system, case studies, analytics, performance, growth |
| **Ref**            | FSD-001 (F-006, F-008, F-015, F-017, F-018)                   |
| **Depends On**     | SPR-002 (Sprint 2 complete)                                    |
| **Status**         | Not Started                                                    |
| **Date Created**   | 2026-02-25                                                     |
| **Last Updated**   | 2026-02-25                                                     |

---

## 1. Sprint Objective

Turn the website from a polished brochure into a living content platform. This sprint connects a headless CMS, builds out the blog and case study systems, adds analytics, and optimises performance for production deployment. By the end, Neocept's team can publish articles, update case studies, and track visitor engagement without touching code.

The site should function as a growth engine — every piece of content is discoverable, shareable, and measurable.

---

## 2. Design Principles (Sprint-wide)

1. **Content as product** — Every blog post and case study is a marketing asset. The reading experience should rival publications like Monocle or Fast Company — beautiful typography, generous spacing, intentional imagery.
2. **Author autonomy** — The CMS workflow must be intuitive enough that a non-technical team member can draft, preview, and publish content without developer involvement.
3. **Measurable by default** — Every meaningful interaction is tracked. Analytics are not surveillance — they're a feedback loop for making the site better.
4. **Speed at scale** — As content grows from 4 articles to 40, performance must remain exceptional. Build for the catalogue you'll have in 12 months, not the one you have today.

---

## 3. Task Breakdown

### 3.1 · CMS Integration (F-015)

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S3-01 | Evaluate and select headless CMS. Recommended: **Sanity** (real-time preview, flexible schema, generous free tier) or **Contentful** (enterprise-grade, structured content). Decision based on team preference and budget. | P0 |
| S3-02 | Set up CMS project, define content schemas: `article` (title, slug, category, author, publishDate, excerpt, body, featuredImage, readingTime), `caseStudy` (client, slug, category, year, heroImage, challenge, approach, outcome, testimonial, gallery), `teamMember` (name, role, bio, photo, linkedIn), `service` (title, description, capabilities). | P0 |
| S3-03 | Install CMS client SDK in the project. Create a data-fetching utility layer (`lib/cms.ts`) with typed functions: `getArticles()`, `getArticleBySlug()`, `getCaseStudies()`, `getCaseStudyBySlug()`, `getTeamMembers()`, `getServices()`. | P0 |
| S3-04 | Seed the CMS with initial content: 2 articles (expand the existing placeholders into full pieces), 4 case studies (matching the current work section), team members, and service descriptions. | P0 |
| S3-05 | Set up CMS preview mode — a draft URL that renders unpublished content for editorial review before publishing. | P1 |
| S3-06 | Connect the homepage sections to CMS data: Services (F-005) pulls from `service` schema, Work (F-006) pulls from `caseStudy` schema, Thinking (F-008) pulls from `article` schema, Stats (F-004) pulls from a `siteSettings` singleton. | P0 |

**Architecture Notes:**
The CMS should be the single source of truth for all content. Hardcoded strings in components are replaced with CMS-driven data. The data-fetching layer should handle loading states, error states, and caching. Consider SWR or React Query for client-side caching if staying with CSR, or evaluate moving to a framework with SSR/SSG (Next.js) if SEO requirements demand it — document this decision.

---

### 3.2 · Case Study Pages (F-006 Extension)

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S3-07 | Create the `/work/:slug` route and `CaseStudyPage` component. | P0 |
| S3-08 | **Hero section:** Full-width hero image with a dark overlay. Client name (display font, white), category pill, and year. Below the image: a one-line project summary. | P0 |
| S3-09 | **Challenge / Approach / Outcome structure.** Three distinct content blocks, each with a gold section label and body copy. This is the narrative spine of every case study. The writing should read like a strategy brief, not a portfolio caption. | P0 |
| S3-10 | **Image gallery.** A masonry or structured grid of project imagery (3–6 images). Lightbox on click. Lazy-loaded with blur-up placeholder. | P1 |
| S3-11 | **Client testimonial block.** A styled pull-quote with the client's name and role. Gold left border. Display font for the quote, body font for attribution. | P1 |
| S3-12 | **Next project navigation.** At the bottom: "Next Project →" linking to the next case study in sequence (wraps around). Shows the next project's name and category. | P1 |
| S3-13 | **CTA block.** Reuse the `ContactCTA` component. Every case study ends with an invitation to start a project. | P0 |
| S3-14 | Create the `/work` index page: a grid or list of all case studies. Each card shows: hero image (cropped), client name, category, year, one-line description. Consistent with the homepage work section aesthetic but expanded. | P0 |
| S3-15 | Add category filtering to the work index page. Filter pills at the top: "All", "Brand Identity", "AI Campaign", "Creative Strategy", "Communication Design". Active filter highlighted in blue. | P1 |

**Messaging Direction:**
Case studies are the most powerful sales tool on the site. Each one should answer the prospect's unspoken question: "Can they do this for me?" The Challenge/Approach/Outcome structure creates narrative tension and resolution. Language should be specific: "increased brand recall by 34%" is more persuasive than "enhanced brand perception." Even if exact metrics aren't available, the writing should feel grounded and evidence-based.

**Visual Direction:**
Case study pages should feel like a premium editorial spread. Large imagery, generous margins, typographic contrast between sections. The hero image should be full-bleed and cinematic. The overall reading experience should reward scrolling — every scroll position reveals a new visual beat.

---

### 3.3 · Blog / Thinking Pages (F-008 Extension)

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S3-16 | Create the `/thinking/:slug` route and `ArticlePage` component. | P0 |
| S3-17 | **Article hero:** Category pill, title (display font, large), author name + publish date + reading time, featured image (full-width below title, or as a background). | P0 |
| S3-18 | **Article body:** Render rich text from CMS. Support: paragraphs, headings (h2, h3), bold, italic, block quotes (styled with gold left border), ordered/unordered lists, inline code, images with captions, and embedded media. Max-width: 680 px (optimal reading width). | P0 |
| S3-19 | **Typography for long-form reading:** Body text at 18 px / 1.75 line-height. Headings break with generous top margin (mt-12). Block quotes in italic with 24 px left padding. Links underlined in blue. | P0 |
| S3-20 | **Author card.** At the bottom of the article: author photo (circular), name, one-line bio, optional LinkedIn link. | P1 |
| S3-21 | **Related articles.** Below the author card: 2 related articles based on category match. Reuse the article card component from the homepage. | P1 |
| S3-22 | **Social sharing.** Floating or inline share buttons: LinkedIn, X (Twitter), copy-link. Minimal styling — icon-only, navy/50 colour, darken on hover. | P2 |
| S3-23 | Create the `/thinking` index page: a listing of all published articles. Each card: featured image (optional), category, title, excerpt (2 lines max), date, reading time. 2-column grid on desktop, single column on mobile. | P0 |
| S3-24 | Add category filtering to the thinking index: "All", "AI & Creativity", "Brand Strategy", "Industry Insights." | P1 |
| S3-25 | Add pagination or infinite scroll to the thinking index (load 6 articles initially, "Load More" button for next batch). | P2 |

**Messaging Direction:**
Blog articles position Neocept as thinkers who shape the industry conversation, not just respond to it. Every article should leave the reader thinking differently about branding, AI, or creative strategy. Headlines should be provocative but credible. Summaries should create tension that demands resolution. This is thought leadership, not content marketing.

---

### 3.4 · Analytics & Tracking (F-017)

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S3-26 | Integrate analytics platform. Recommended: **Plausible Analytics** (privacy-first, no cookie banner required, lightweight script) or **Google Analytics 4** (richer features, requires consent). Decision based on brand values and compliance posture. | P0 |
| S3-27 | Track page views across all routes. Ensure SPA route changes are captured correctly (not just initial page load). | P0 |
| S3-28 | Implement event tracking for key interactions: "Start a Project" CTA clicks (all instances), contact form submissions (success/fail), case study views, article reads (scroll to 75% = "read"), social link clicks, "Begin the Conversation" hero CTA. | P0 |
| S3-29 | If using GA4: implement a cookie consent banner. Must be GDPR/CCPA compliant. Design: minimal bottom bar, brand-consistent styling, "Accept" / "Decline" / "Preferences" options. No dark patterns. | P1 |
| S3-30 | Set up UTM parameter tracking for campaign attribution. Ensure UTM params are preserved through SPA navigation. | P2 |
| S3-31 | Create a simple analytics dashboard or document the key metrics to monitor: weekly visitors, top pages, CTA conversion rate, form submission rate, article engagement. | P2 |

---

### 3.5 · Performance Optimisation (F-018)

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S3-32 | Implement image optimisation pipeline: all CMS images served in WebP format with responsive `srcset` (640 px, 960 px, 1280 px, 1920 px). Use the CMS's built-in image transformation API (Sanity Image URL, Contentful Images API). | P0 |
| S3-33 | Add lazy loading to all below-the-fold images. Use `loading="lazy"` for static images and Intersection Observer for CMS images that need blur-up placeholders. | P0 |
| S3-34 | Implement route-based code splitting: each page component is lazy-loaded with `React.lazy()` and wrapped in `<Suspense>` with a minimal loading skeleton. | P1 |
| S3-35 | Preload critical fonts. Add `<link rel="preload">` for DM Serif Display (400) and DM Sans (400) WOFF2 files. Verify `font-display: swap` is active. | P0 |
| S3-36 | Run Lighthouse audit on all pages. Target: Performance > 90, Accessibility > 95, Best Practices > 95, SEO > 95 on both mobile and desktop. Document baseline scores. | P0 |
| S3-37 | Implement Vite build optimisations: enable gzip/brotli compression plugin, set appropriate cache headers, tree-shake unused Tailwind utilities with `content` purge config verification. | P1 |
| S3-38 | Add a loading skeleton / shimmer component for CMS-driven content that appears while data is being fetched. Should feel intentional, not broken. | P1 |

---

### 3.6 · Growth & Engagement Features

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S3-39 | **Newsletter signup.** A simple email capture form in the footer and optionally on the `/thinking` index page. Fields: email only. Integration with an email platform (Resend, Mailchimp, ConvertKit). Success message: "You're in. We'll share our latest thinking." | P1 |
| S3-40 | **Service detail pages.** Create `/services/:slug` routes for each service. Content pulled from CMS. Each page: hero statement, detailed capability list with descriptions, relevant case studies, CTA. | P1 |
| S3-41 | **OG images.** Generate branded Open Graph images for each page (1200×630 px). Can be static (designed in Figma, uploaded to CMS) or dynamic (generated via an edge function). Each OG image should include the page title on the Neocept navy background with the gold rule. | P2 |
| S3-42 | **RSS feed.** Auto-generate an RSS feed (`/feed.xml`) from published blog articles. Enables syndication and podcast app discovery. | P2 |
| S3-43 | **Sitemap automation.** Replace the manual `sitemap.xml` with a dynamically generated one that includes all CMS-driven routes (case studies, articles, service pages). | P1 |

---

## 4. Acceptance Criteria

Sprint 3 is complete when:

- [ ] A headless CMS is integrated and all homepage content is CMS-driven
- [ ] The team can create, edit, preview, and publish articles and case studies without code changes
- [ ] At least 2 full case study pages are live with real or representative content
- [ ] At least 2 full blog articles are live with complete long-form content
- [ ] The `/work` index page displays all case studies with category filtering
- [ ] The `/thinking` index page displays all articles with category filtering
- [ ] Analytics are capturing page views and key events on all routes
- [ ] All images are optimised (WebP, lazy-loaded, responsive)
- [ ] Route-based code splitting is implemented
- [ ] Lighthouse scores meet targets (Performance > 90, Accessibility > 95)
- [ ] Newsletter signup form is functional (footer placement minimum)
- [ ] Sitemap is auto-generated from CMS content

---

## 5. Out of Scope (Sprint 3)

- Dark mode / theme toggle (backlog — deferred per F-021)
- Multilingual / i18n support
- E-commerce or gated content
- User authentication
- A/B testing infrastructure
- Automated email sequences (beyond newsletter confirmation)

These may be addressed in future sprints as the platform matures.

---

## 6. Post-Sprint: Deployment & Launch Checklist

After Sprint 3, the site is ready for production deployment. A separate launch checklist should cover:

- [ ] Domain and DNS configuration
- [ ] SSL certificate provisioned
- [ ] CDN configured (Vercel, Cloudflare, or AWS CloudFront)
- [ ] Environment variables secured (CMS tokens, API keys)
- [ ] Error monitoring (Sentry or equivalent)
- [ ] Uptime monitoring
- [ ] 301 redirects from old site URLs (if applicable)
- [ ] Final cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Final mobile testing (iOS Safari, Chrome Android)
- [ ] Backup and rollback plan documented
- [ ] Client sign-off on content and design
