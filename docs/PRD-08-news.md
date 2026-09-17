# PRD-08: News Section

> **Status:** Draft  
> **Version:** 1.0  
> **Date:** 2026-09-16  
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

Display news items: tournament updates, results, community announcements. Use 3 example entries.

---

## 2. Requirements

### 2.1 Content

- **Title:** "Noticias"
- **Subtitle:** Project updates and tournament results
- **3 News Cards:**
  - Title
  - Date
  - Category
  - Excerpt (brief summary)

### 2.2 Design

- List or card layout
- Each card: category badge, title, date, excerpt
- Category badge with accent color
- Date formatted locale-aware
- Mobile: single column

### 2.3 Technical

- Semantic HTML: `<section>` with `<h2>`, items as `<article>`
- i18n: all text from `useTranslations('news')`
- News items as array in messages JSON
- Date formatting with `Intl.DateTimeFormat`
- Responsive layout

---

## 3. Acceptance Criteria

- [ ] 3 news items displayed
- [ ] Title, date, category, excerpt on each
- [ ] Category badges visible
- [ ] Dates formatted correctly
- [ ] Responsive
- [ ] Semantic HTML
- [ ] All text via i18n

---

## 4. Out of Scope

- News detail pages
- CMS integration
- Pagination
- Animations
