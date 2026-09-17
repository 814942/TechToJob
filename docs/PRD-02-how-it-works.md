# PRD-02: How It Works

> **Status:** Draft  
> **Version:** 1.0  
> **Date:** 2026-09-16  
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

Show the journey from arriving at TechToJob to landing an opportunity. Steps should be clear, scannable, and show that starting is low-effort.

---

## 2. Requirements

### 2.1 Content

- **Title:** "Cómo funciona"
- **Subtitle:** The journey from arrival to opportunity
- **4 Steps:**
  1. Join Discord
  2. Participate
  3. Get known
  4. Opportunities arise

### 2.2 Design

- Horizontal layout on desktop (4 columns)
- Stacked on mobile (vertical list)
- Each step: icon/number + title + description
- Accent color for step numbers or icons
- Clean whitespace between steps

### 2.3 Technical

- Semantic HTML: `<section>` with `<h2>` for title, `<h3>` for each step
- i18n: all text from `useTranslations('howItWorks')`
- Steps as array in messages JSON (loop rendering)
- Responsive: mobile stacked, tablet 2 columns, desktop 4 columns

---

## 3. Acceptance Criteria

- [ ] 4 steps displayed correctly
- [ ] Title and subtitle present
- [ ] Responsive on all breakpoints
- [ ] Semantic HTML with proper heading hierarchy
- [ ] All text via i18n
- [ ] Steps render from JSON array (no hardcoded steps)
- [ ] Icons or numbers for each step

---

## 4. Out of Scope

- Animations (PRD-12)
- Interactive step details
- Images per step
