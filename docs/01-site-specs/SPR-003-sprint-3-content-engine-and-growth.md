# Sprint 3 — MVP Polish, Performance & Launch

| Field              | Value                                                          |
| ------------------ | -------------------------------------------------------------- |
| **Document ID**    | SPR-003                                                        |
| **Sprint**         | 3 of 3                                                         |
| **Sprint Name**    | MVP Polish, Performance & Launch                               |
| **Scope**          | Content expansion, analytics, performance optimization, launch prep |
| **Ref**            | FSD-001 (F-008, F-017, F-018)                                  |
| **Depends On**     | SPR-002 (Sprint 2 complete)                                    |
| **Status**         | Not Started                                                    |
| **Date Created**   | 2026-02-25                                                     |
| **Last Updated**   | 2026-02-26                                                     |

---

## 1. Sprint Objective

**Polish, perform, and publish.** Finalize the existing site for production launch with performance optimizations, expanded static content, and lightweight analytics — using only no-cost services already in use (Vercel, Formspree).

This sprint intentionally avoids adding CMS complexity or external paid services. The goal is a production-ready MVP that can launch immediately and scale later.

---

## 2. MVP Guardrails (Sprint-wide)

1. **No new external services** — Use only Vercel (hosting + analytics), Formspree (forms), and the existing domain setup.
2. **Static content is fine** — Content lives in code until volume justifies a CMS (10+ articles, 3+ case studies).
3. **Ship what exists** — Expand and polish sections already on the homepage. Do not build speculative features.
4. **Performance is a feature** — Fast load times and high Lighthouse scores are launch requirements, not nice-to-haves.
5. **Zero monthly cost** — All services must remain within free tiers.

---

## 3. Task Breakdown

### 3.1 · Thinking Content Expansion (Static)

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S3-01 | Expand "The Myth of the Creative Machine" into a full article (600–800 words) with proper structure, headings, and a conclusion. Content remains static in `ThinkingArticlePage.tsx` or a dedicated data file. | P0 |
| S3-02 | Expand "Why Most Rebrands Fail Before They Launch" into a full article (600–800 words) with the same treatment. | P0 |
| S3-03 | Enhance article page typography for long-form reading: 18px body text, 1.75 line-height, styled block quotes with gold left border, generous heading margins. | P0 |
| S3-04 | Add "Back to Thinking" navigation link at top of article pages. | P1 |
| S3-05 | Add Contact CTA component at the bottom of each article page. | P1 |

**Content Notes:**
Articles should position Neocept as thought leaders. Each piece should leave the reader with a new perspective on branding, AI, or creative strategy. The writing should be confident, specific, and opinionated — not generic content marketing.

---

### 3.2 · Analytics (No-Cost)

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S3-06 | Enable **Vercel Analytics** via the Vercel dashboard (free tier, zero-config, GDPR-friendly, no additional cookie banner required). | P0 |
| S3-07 | Install `@vercel/analytics` package and add the `<Analytics />` component to the app. | P0 |
| S3-08 | Verify SPA route changes are tracked correctly (not just initial page load). | P0 |
| S3-09 | Document key metrics to monitor: page views, top pages, referrers, device breakdown. | P1 |

**Why Vercel Analytics:**
- Included free with Vercel hosting
- Privacy-friendly (no cookies, no personal data collection)
- Automatically tracks Core Web Vitals
- No additional cookie consent requirements beyond existing banner

---

### 3.3 · Performance Optimization

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S3-10 | Add `loading="lazy"` attribute to all below-the-fold images (hero background excluded). | P0 |
| S3-11 | Implement route-based code splitting: wrap page components with `React.lazy()` and `<Suspense>` with a minimal loading state. | P1 |
| S3-12 | Preload critical fonts: add `<link rel="preload">` for DM Serif Display and DM Sans WOFF2 files in `index.html`. Verify `font-display: swap` is active. | P0 |
| S3-13 | Run Lighthouse audit on all MVP routes. Target scores: Performance > 90, Accessibility > 95, Best Practices > 95, SEO > 95. Document baseline scores. | P0 |
| S3-14 | Verify Tailwind CSS purge configuration removes unused utilities. Check final CSS bundle size. | P1 |
| S3-15 | Optimize hero background image: compress to WebP format, ensure appropriate resolution (1920px max width). | P1 |

---

### 3.4 · SEO Completion

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S3-16 | Add Organisation JSON-LD structured data to homepage (`HomePage.tsx` or `SEO.tsx`). Include: name, url, logo, contactPoint, sameAs (social links if applicable). | P0 |
| S3-17 | Create a single branded OG image (1200×630px) with Neocept branding. Save to `public/og-image.png`. | P1 |
| S3-18 | Verify all pages have unique `<title>` and `<meta description>` tags. | P0 |
| S3-19 | Verify sitemap.xml includes all current routes and is accessible. | P1 |

---

### 3.5 · Final QA & Launch Preparation

| Task ID | Description | Priority |
| ------- | ----------- | -------- |
| S3-20 | Cross-browser testing: Chrome, Firefox, Safari, Edge (latest versions). Document any issues. | P0 |
| S3-21 | Mobile testing: iOS Safari, Chrome Android. Test all interactive elements (nav, forms, CTAs). | P0 |
| S3-22 | Verify all internal links work correctly (no 404s). | P0 |
| S3-23 | Verify all external links open in new tabs and work correctly. | P1 |
| S3-24 | Final accessibility spot-check: keyboard navigation through all routes, focus visibility, screen reader announcement of key elements. | P1 |
| S3-25 | Verify contact form submission works in production (test with real submission). | P0 |
| S3-26 | Verify cookie banner and preferences modal function correctly. | P0 |
| S3-27 | Document any known issues, limitations, or future improvements in a `KNOWN_ISSUES.md` file. | P2 |

---

## 4. Acceptance Criteria

Sprint 3 is complete when:

- [ ] Both Thinking articles are expanded with full, readable content (600–800 words each)
- [ ] Article pages have proper long-form typography and navigation
- [ ] Vercel Analytics is enabled and tracking page views across all routes
- [ ] Lighthouse Performance score > 90 on all pages
- [ ] Lighthouse Accessibility score > 95 on all pages
- [ ] Organisation JSON-LD structured data is present on homepage
- [ ] OG image exists at `public/og-image.png` and is referenced in SEO component
- [ ] Cross-browser testing complete (Chrome, Firefox, Safari, Edge) with no critical issues
- [ ] Mobile testing complete (iOS Safari, Chrome Android) with no critical issues
- [ ] Contact form works in production
- [ ] Cookie consent system works correctly
- [ ] Site is production-ready for public launch

---

## 5. Out of Scope (Sprint 3 — Deferred to Future Release)

| Item | Rationale |
| ---- | --------- |
| Headless CMS (Sanity, Contentful, etc.) | No content volume to justify; adds complexity. Revisit when 10+ articles exist. |
| Case Studies / Work section | Hidden on homepage; requires real client content and imagery. |
| Newsletter signup | Requires email platform integration (Mailchimp, ConvertKit, Resend). |
| Service detail pages (`/services/:slug`) | Current `/services` page is comprehensive; no need to fragment. |
| Dynamic sitemap generation | Static sitemap sufficient for current 10 routes. |
| RSS feed | Only 2 articles; no syndication need. |
| Category filtering on Thinking page | Only 2 articles; filtering adds no value. |
| Pagination / infinite scroll | Only 2 articles. |
| Author cards with photos | No team section on homepage to derive from. |
| Social sharing buttons | Low priority; can be added post-launch. |
| Google Analytics 4 | Requires additional consent handling; Vercel Analytics is simpler. |

These items are not cancelled — they are deferred until the business case exists (more content, more traffic, specific marketing needs).

---

## 6. Cost Summary

| Service | Tier | Monthly Cost |
| ------- | ---- | ------------ |
| Vercel Hosting | Hobby (Free) | $0 |
| Vercel Analytics | Included | $0 |
| Formspree | Free (50 submissions/month) | $0 |
| Domain (neocept.co) | Already owned | — |
| **Total** | | **$0/month** |

---

## 7. Post-Sprint: Production Launch Checklist

After Sprint 3, the site is ready for public launch. Final checklist:

- [ ] Vercel production deployment is stable
- [ ] Custom domain (neocept.co) resolving correctly
- [ ] SSL certificate active (automatic via Vercel)
- [ ] Analytics dashboard accessible and tracking
- [ ] Contact form tested with real submission
- [ ] Social links updated (if applicable)
- [ ] Team notified of launch
- [ ] Monitoring in place (Vercel provides basic uptime)

---

## 8. Future Roadmap (Post-MVP)

When the business is ready, these features can be prioritized:

1. **Case Studies** — When 2–3 real client projects are ready to showcase
2. **CMS Integration** — When content volume exceeds 10 articles or requires non-developer updates
3. **Newsletter** — When email marketing strategy is defined
4. **Team Section** — When team profiles and photos are ready
5. **Advanced Analytics** — When deeper insights (events, funnels) are needed
