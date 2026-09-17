# PRD-13: SEO & Performance

> **Status:** Draft  
> **Version:** 1.0  
> **Date:** 2026-09-16  
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

SEO optimization and performance targets. Lighthouse 100 SEO, 90+ Accessibility, 90+ Performance.

---

## 2. Requirements

### 2.1 Metadata

- Title: 50-60 characters with template `%s | TechToJob`
- Description: 150-160 characters
- Open Graph: title, description, image (1200×630), url, siteName
- Twitter Card: summary_large_image
- Canonical URL
- Viewport meta tag
- `lang="es"` / `lang="en"` on html element

### 2.2 Structured Data

- JSON-LD Organization schema
- Name, logo, URL, social links

### 2.3 Technical SEO

- Single H1 per page
- Heading hierarchy: H2 → H3 without skips
- Semantic HTML throughout
- Descriptive link text
- Descriptive URLs
- `alt` text on all images
- No hidden text
- `robots.txt` and `sitemap.xml`

### 2.4 Performance

- Images: WebP/AVIF via next/image
- Font: Sora via next/font with display=swap
- Lazy loading below the fold
- No render-blocking resources
- Minimal JavaScript

---

## 3. Acceptance Criteria

- [ ] Lighthouse SEO: 100
- [ ] Lighthouse Accessibility: 90+
- [ ] Lighthouse Performance: 90+
- [ ] Open Graph passes opengraph.xyz
- [ ] JSON-LD validates
- [ ] Single H1 per page
- [ ] All images have alt text
- [ ] No console errors
- [ ] Mobile-friendly (Google test)

---

## 4. Out of Scope

- Sitemap generation (dynamic)
- robots.txt customization
- Analytics integration
- A/B testing
