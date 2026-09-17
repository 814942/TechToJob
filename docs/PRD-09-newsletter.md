# PRD-09: Newsletter

> **Status:** Draft  
> **Version:** 1.0  
> **Date:** 2026-09-16  
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

Email subscription form. Positioned before footer (not in hero). Must explain what arrives, how often, and that there's no spam.

---

## 2. Requirements

### 2.1 Content

- **Title:** "Las ofertas de la semana, en tu correo"
- **Subtitle:** Every Monday: new offers, tournaments, and what's worth it
- **Placeholder:** "tu@correo.com"
- **CTA:** "Quiero recibirlas"
- **Disclaimer:** "Sin spam. Te das de baja en un clic."

### 2.2 Design

- Full-width banner/stripe before footer
- Background: accent color or dark
- Form: email input + button side by side (desktop), stacked (mobile)
- Clean, minimal design
- Button: contrasting color

### 2.3 Technical

- Semantic HTML: `<section>` with `<form>`
- Proper `<label>` for email input (accessibility)
- `type="email"` on input
- `required` attribute
- i18n: all text from `useTranslations('newsletter')`
- No actual submission (static for now)
- Form prevents default submit

---

## 3. Acceptance Criteria

- [ ] Title and subtitle present
- [ ] Email input with placeholder
- [ ] CTA button present
- [ ] Disclaimer visible
- [ ] Form has proper labels (a11y)
- [ ] Input type is email
- [ ] Input is required
- [ ] Form doesn't submit (prevent default)
- [ ] Responsive layout
- [ ] Semantic HTML
- [ ] All text via i18n

---

## 4. Out of Scope

- Backend integration
- Email validation API
- Success/error states
- Unsubscribe flow
