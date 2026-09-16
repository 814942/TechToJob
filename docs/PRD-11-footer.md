# PRD-11: Footer

> **Status:** Draft  
> **Version:** 1.0  
> **Date:** 2026-09-16  
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

Footer with link groups, social media, and legal information.

---

## 2. Requirements

### 2.1 Content

- **4 Link Groups:**
  - Talento: Crear perfil, Ver ofertas, Torneos
  - Empresas: Publicar oferta, Ver perfiles, Torneos
  - Comunidad: Discord, LinkedIn, X, Instagram
  - Legal: Política de privacidad, Términos de uso
- **Copyright:** © 2026 TechToJob

### 2.2 Design

- Dark background (#2f3436)
- White/light text
- 4 columns on desktop
- Stacked on mobile
- Social icons (Lucide)
- Clean separation between groups

### 2.3 Technical

- Semantic HTML: `<footer>` with navigation groups
- External links: `target="_blank"` + `rel="noopener noreferrer"`
- Social links: proper aria-labels
- i18n: all text from `useTranslations('footer')`
- Footer data as structured JSON
- Responsive: 4 cols desktop, 2 cols tablet, stacked mobile

---

## 3. Acceptance Criteria

- [ ] 4 link groups displayed
- [ ] All links functional
- [ ] External links open in new tab
- [ ] Social icons present
- [ ] Copyright visible
- [ ] Responsive layout
- [ ] Semantic HTML
- [ ] All text via i18n
- [ ] Dark background with light text

---

## 4. Out of Scope

- Newsletter form (separate section)
- Language switcher (layout component)
- Back to top button
