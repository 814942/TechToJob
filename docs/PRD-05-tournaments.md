# PRD-05: Tournaments Section

> **Status:** Draft  
> **Version:** 1.0  
> **Date:** 2026-09-16  
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

Showcase open competitions. Explain benefits: learn by building, have something to show in interviews, get known.

---

## 2. Requirements

### 2.1 Content

- **Title:** "Torneos"
- **Subtitle:** Open competitions like this one
- **3 Features:**
  - Learn by building something real
  - Have something to show in an interview
  - Get known in the community
- **CTA:** "Ver torneos"

### 2.2 Design

- Card-based layout for current/upcoming tournaments
- Each card: title, description, status (open/closed), deadline
- Accent color for "open" status
- Mobile: single column cards

### 2.3 Technical

- Semantic HTML: `<section>` with `<h2>`
- Tournament data from JSON (static for now)
- i18n: all text from `useTranslations('tournaments')`
- Responsive grid: 1 col mobile, 2-3 cols desktop

---

## 3. Acceptance Criteria

- [ ] Title and subtitle present
- [ ] Tournament cards display correctly
- [ ] Status indicators visible
- [ ] CTA functional
- [ ] Responsive grid
- [ ] Semantic HTML
- [ ] All text via i18n

---

## 4. Out of Scope

- Tournament detail pages
- Registration system
- Dynamic data from API
