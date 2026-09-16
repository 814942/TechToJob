# PRD-03: Talent Section

> **Status:** Draft  
> **Version:** 1.0  
> **Date:** 2026-09-16  
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

Explain how developers can publish their profile and get discovered by companies. Emphasize: no automatic filters, no seniority requirement, free.

---

## 2. Requirements

### 2.1 Content

- **Title:** "Ofrécete como talento"
- **Subtitle:** Publish your profile with stack, level, and what you're looking for
- **3 Features:**
  - No automatic filters that discard your CV before a human reads it
  - You don't need to be senior
  - It's free
- **CTA:** "Crear mi perfil"

### 2.2 Design

- Two-column layout on desktop (text left, visual right)
- Stacked on mobile
- Feature list with checkmarks or bullet points
- CTA button with accent color
- Visual placeholder for profile preview

### 2.3 Technical

- Semantic HTML: `<section>` with `<h2>`
- CTA as `<Link>` to Discord or future /talent page
- i18n: all text from `useTranslations('talent')`
- Features as array in messages JSON
- Responsive: mobile stacked, desktop side-by-side

---

## 3. Acceptance Criteria

- [ ] Title and subtitle present
- [ ] 3 features displayed
- [ ] CTA button functional
- [ ] Responsive on all breakpoints
- [ ] Semantic HTML
- [ ] All text via i18n

---

## 4. Out of Scope

- Profile creation form
- Profile preview component
- Animations
