# Known Issues & Limitations

**Last Updated:** February 2026  
**Sprint:** 3 — MVP Launch

This document tracks known issues, limitations, and deferred features for the Neocept website MVP.

---

## Current Limitations

### Content

- **Static Article Content**: Thinking articles are stored as static data within the codebase. Content updates require code changes and redeployment.
- **Two Articles Only**: The MVP includes only two Thinking articles. Additional content is planned for future sprints.

### Functionality

- **No CMS Integration**: All content is hardcoded. A headless CMS (e.g., Contentful, Sanity) was deferred to reduce complexity and cost.
- **No Newsletter Signup**: Email collection and newsletter functionality not implemented.
- **No Search**: Site-wide search functionality not included in MVP.
- **No Case Studies**: The Work/Case Studies section has been deferred to a future release.

### Analytics & Tracking

- **Basic Analytics Only**: Vercel Analytics provides page views and basic metrics. Advanced analytics (heatmaps, session recordings) not implemented.
- **No A/B Testing**: Testing infrastructure not implemented.

### Forms

- **Formspree Integration**: Contact form uses Formspree free tier (limited to 50 submissions/month). May need upgrade for higher volumes.
- **No Form Spam Protection**: Basic honeypot implemented. CAPTCHA not included.

### Performance

- **External Font Loading**: Google Fonts loaded externally. Self-hosted fonts would provide better performance but were deferred.
- **Hero Image Size**: The hero background image could be further optimized for mobile devices.

### Browser Support

- **Modern Browsers Only**: Tested on latest versions of Chrome, Firefox, Safari, Edge. IE11 not supported.
- **JavaScript Required**: Site requires JavaScript to function. No progressive enhancement for JS-disabled browsers.

---

## Deferred Features (Future Sprints)

| Feature | Priority | Notes |
|---------|----------|-------|
| CMS Integration | High | Contentful or Sanity for article management |
| Case Studies Section | High | Client work showcase with filtering |
| Newsletter Signup | Medium | Mailchimp or ConvertKit integration |
| Advanced Analytics | Medium | Hotjar or PostHog for user behavior |
| Site Search | Low | Algolia or similar search service |
| Multilingual Support | Low | i18n for international audience |
| Dark Mode | Low | User preference toggle |

---

## Resolved Issues

_No issues resolved in this sprint._

---

## Reporting Issues

For any issues with the website, please contact the development team or create an issue in the project repository.
