# PRD-07: Testimonials

> **Status:** Draft  
> **Version:** 1.0  
> **Date:** 2026-09-16  
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

Display testimonials from community members. For the tournament, use placeholder content. Design must accommodate future photos and LinkedIn links.

---

## 2. Requirements

### 2.1 Content

- **Title:** "Qué dice la gente"
- **Subtitle:** Testimonials from community members
- **4 Testimonial Cards:**
  - Name
  - Role
  - Quote
  - (Future: photo + LinkedIn link)

### 2.2 Design

- Card grid layout
- Each card: name, role, quote
- Space reserved for photo (top of card)
- Space reserved for LinkedIn link (bottom)
- Mobile: single column, tablet: 2 columns, desktop: 4 columns or 2x2

### 2.3 Technical

- Semantic HTML: `<section>` with `<h2>`, cards as `<article>`
- i18n: all text from `useTranslations('testimonials')`
- Testimonials as array in messages JSON
- Responsive grid
- Empty img slot with placeholder styling

---

## 3. Acceptance Criteria

- [ ] 4 testimonial cards displayed
- [ ] Name, role, quote visible on each
- [ ] Space for future photo (placeholder)
- [ ] Space for future LinkedIn link
- [ ] Responsive grid
- [ ] Semantic HTML
- [ ] All text via i18n

---

## 4. Out of Scope

- Real photos
- LinkedIn integration
- Testimonial submission form
- Animations
