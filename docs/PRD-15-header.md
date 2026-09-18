# PRD-15: Header / Navigation

> **Status:** Draft
> **Version:** 1.0
> **Date:** 2026-09-16
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

The Header is the persistent navigation bar that appears on every page. It provides access to all major sections via anchor links, shows the TechToJob logo, includes a language switcher, and a CTA button to join Discord. On mobile, it collapses into a hamburger menu.

The header must feel like part of the community — not a corporate navbar. Clean, fast, and unobtrusive.

---

## 2. Requirements

### 2.1 Content

- **Logo:** TechToJob logo (color variant on light bg, white variant when scrolled on dark/transparent bg)
- **Navigation links:** Talento, Empresas, Torneos, Networking, Noticias (anchor links to sections)
- **Language switcher:** ES / EN toggle (reuse `LanguageSwitcher` component if exists, or create inline)
- **CTA Button:** "Entrar a la comunidad" → Discord link

### 2.2 Design

- **Position:** Fixed at top, full width, z-index above all content
- **Height:** ~64px desktop, ~56px mobile
- **Background:** White (`#ffffff`) with subtle bottom border, or transparent that becomes white on scroll
- **Logo:** Left-aligned, max height ~32px
- **Nav links:** Center or right-aligned, horizontal on desktop
- **CTA:** Right side, accent color button (small size)
- **Mobile:** Hamburger icon triggers a slide-down or slide-in menu with all nav items stacked vertically + CTA at bottom

**Scroll behavior:**
- Transparent/light at top (above hero)
- Gains background color + subtle shadow after scrolling past hero
- Smooth transition (CSS only, no JS scroll listener needed — use `backdrop-blur` + opacity)

### 2.3 Technical

- Semantic HTML: `<nav>` with `<ul>` / `<li>` for navigation items
- `role="navigation"` and `aria-label="Main navigation"`
- Mobile menu: `aria-expanded` on hamburger button, focus trap when open
- Anchor links: smooth scroll to section IDs (`#talent`, `#companies`, etc.)
- Each section organism must expose an `id` attribute on its `<section>` element
- i18n: nav labels from `useTranslations('navigation')`
- External links (Discord CTA): `target="_blank"` + `rel="noopener noreferrer"`
- Responsive: desktop (>768px) horizontal nav, mobile (≤768px) hamburger

---

## 3. File Structure

```
src/components/layout/
├── Header/
│   ├── Header.tsx          # Main header component
│   ├── MobileMenu.tsx      # Mobile slide-down menu
│   └── index.ts            # Re-export
└── LanguageSwitcher/
    └── LanguageSwitcher.tsx # ES/EN toggle (if not already exists)
```

---

## 4. Section ID Mapping

Each organism must add an `id` to its `<section>` for anchor link navigation:

| Section | Anchor ID | Nav Label (ES) | Nav Label (EN) |
|---------|-----------|-----------------|-----------------|
| Hero | `hero` | (no nav link) | (no nav link) |
| Talent | `talent` | Talento | Talent |
| Companies | `companies` | Empresas | Companies |
| Tournaments | `tournaments` | Torneos | Tournaments |
| Networking | `networking` | Networking | Networking |
| News | `news` | Noticias | News |

---

## 5. Acceptance Criteria

- [ ] Header is visible on all pages, fixed at top
- [ ] Logo links to home (`/` or `/{locale}`)
- [ ] 5 navigation links visible on desktop, all functional (smooth scroll to section)
- [ ] Language switcher toggles ES ↔ EN correctly
- [ ] CTA button links to Discord (`target="_blank"`)
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] Mobile menu has all nav items + CTA
- [ ] Mobile menu closes on link click or outside click
- [ ] Focus trap works in mobile menu (keyboard navigation)
- [ ] Header gains background/shadow on scroll
- [ ] Header does not overlap hero content (proper z-index and spacing)
- [ ] All text via i18n (no hardcoded strings)
- [ ] Semantic HTML (`<nav>`, `<ul>`, `<li>`)
- [ ] Lighthouse Accessibility: 90+
- [ ] No layout shift when header appears

---

## 6. Out of Scope

- Search functionality
- User authentication / login state
- Notification badges
- Mega-menu or dropdown submenus
- Scroll spy (active link highlighting) — nice-to-have, not required

---

## 7. i18n Keys

The `navigation` key already exists in `messages/es.json`:

```json
"navigation": {
  "talent": "Talento",
  "companies": "Empresas",
  "tournaments": "Torneos",
  "networking": "Networking",
  "news": "Noticias"
}
```

Add to `messages/en.json`:

```json
"navigation": {
  "talent": "Talent",
  "companies": "Companies",
  "tournaments": "Tournaments",
  "networking": "Networking",
  "news": "News"
}
```

---

## 8. Dependencies

- `PRD-00-foundation` — Shadcn/ui configured, Tailwind v4, atoms exist
- `Button` atom — for CTA in header
- All section organisms must add `id` props to their `<section>` elements

---

## 9. Implementation Notes

- Use `next/link` for logo home link
- The header should be added to `src/app/[locale]/layout.tsx` wrapping `{children}`
- Consider using `framer-motion` for mobile menu animation (already in deps)
- The mobile menu overlay should use `bg-black/50` backdrop
- Hamburger icon: use Lucide `Menu` and `X` icons
