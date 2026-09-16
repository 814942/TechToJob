# PRD-01: Hero Section

> **Status:** Draft  
> **Version:** 1.0  
> **Date:** 2026-09-16  
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

The Hero section is the first thing visitors see. It must communicate what TechToJob is and why it's different from a job portal in under 3 seconds. Single CTA: join Discord.

---

## 2. Requirements

### 2.1 Content

- **H1:** Main message (approved copy)
- **Subtitle:** What TechToJob is and why it's different
- **CTA Button:** "Entrar a la comunidad" (links to Discord)

### 2.2 Design

- Full viewport height (100vh min)
- Centered content
- Logo visible (not necessarily in hero, but brand present)
- Background: white or light gradient
- CTA button: accent color (#84c0bf) background, dark text
- Mobile: stack vertically, full-width button

### 2.3 Technical

- Semantic HTML: `<header>` or `<section>` with `<h1>`
- No lazy loading (above the fold)
- next/image for any images
- Responsive: mobile → tablet → desktop
- i18n: all text from `useTranslations('hero')`

---

## 3. Acceptance Criteria

- [ ] H1 contains the main message
- [ ] CTA button links to Discord
- [ ] Responsive on mobile (375px), tablet (768px), desktop (1280px)
- [ ] All text via i18n (no hardcoded strings)
- [ ] Semantic HTML (no div soup)
- [ ] Lighthouse SEO: 100
- [ ] Lighthouse Accessibility: 90+
- [ ] Button passes WCAG contrast

---

## 4. Out of Scope

- Animations (will be added in PRD-12)
- Images/photos (placeholder for now)
- Newsletter form (separate section)

---

## 5. Copy Guidelines

See `brief-techtojob.md` for tone and messaging rules.

**Key rules:**
- Tuteo (no "usted")
- Short sentences
- No brochure words (sinergia, ecosistema, revolucionar)
- Talk about the person, not us
- Only promise what's delivered
