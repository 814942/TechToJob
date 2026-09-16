# PRD-12: Animations & Interactions

> **Status:** Draft  
> **Version:** 1.0  
> **Date:** 2026-09-16  
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

Subtle animations that enhance UX without being distracting. Using Motion (framer-motion).

---

## 2. Requirements

### 2.1 Animations

- **Fade-in on scroll:** Sections appear as user scrolls
- **Subtle hover states:** Buttons, links, cards
- **Page transitions:** Smooth locale changes
- **No:** auto-playing animations, parallax, heavy transitions

### 2.2 Performance

- Animations only on visible elements (Intersection Observer)
- Respect `prefers-reduced-motion`
- No layout shift (animations on opacity/transform only)
- GPU-accelerated properties only

### 2.3 Technical

- Use Motion's `whileInView` for scroll animations
- Use `motion.div` wrapper for animated sections
- CSS transitions for simple hover states
- Wrap in `LazyMotion` for code splitting

---

## 3. Acceptance Criteria

- [ ] Fade-in on scroll for all sections
- [ ] Hover states on interactive elements
- [ ] `prefers-reduced-motion` respected
- [ ] No layout shift during animations
- [ ] Performance impact minimal
- [ ] Animations don't block content

---

## 4. Out of Scope

- Complex page transitions
- Loading animations
- Micro-interactions
- Scroll-triggered parallax
