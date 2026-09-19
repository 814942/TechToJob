# PRD-16: Visual Style Enhancement — Typography as Protagonist

> **Status:** Draft
> **Version:** 2.0
> **Date:** 2026-09-18
> **Parent:** PRD-00-foundation.md
> **Reference:** https://nexavalencia.vercel.app/

---

## 1. Summary

The current landing page is clean but "amateur" — competent typography at normal sizes, no visual personality. This PRD transforms the visual identity using **typography as the protagonist**: giant bold headings, accent color highlighting on key words, and a warm background that feels like a brand, not a template.

The goal: a landing with strong visual identity — minimalist but with attitude. Light theme preserved, original palette maintained.

---

## 2. Problem Statement

Current state:
- Headings are `text-4xl` → `text-6xl` — competent but safe, no presence
- Background is `#ffffff` — cold, sterile
- Accent color `#84c0bf` only used in buttons, never in text
- No visual emphasis hierarchy — all text reads at the same weight
- The page looks like a well-made template, not a brand

Reference analysis (NYXA):
- **Typography IS the design** — giant bold text as the main visual element
- **Accent color highlights** — one word in accent color creates emphasis and rhythm
- **Warm background** — `#fbf9f4` instead of pure white feels intentional
- **Mono-color with attitude** — minimal palette, maximum personality

Target state:
- Headings are `text-5xl` → `text-8xl` with `font-extrabold` — commanding presence
- Background is `#fbf9f4` — warm, intentional
- Accent color `#84c0bf` highlights key words in headings and body text
- Clear visual rhythm: giant heading → accent emphasis → supporting text
- The page feels like a brand with identity, not a template

---

## 3. Design System Upgrades

### 3.1 Background — Warm Off-White

| Token | Current | New |
|-------|---------|-----|
| `--surface` | `#ffffff` | `#fbf9f4` |
| `--background` | `var(--surface)` | `var(--surface)` (unchanged) |

The warm background `#fbf9f4` is the foundation. It makes the page feel intentional, not default.

### 3.2 Typography — Giant & Bold

**Heading scale (NYXA-inspired):**

| Level | Current | New |
|-------|---------|-----|
| Hero h1 | `text-4xl md:text-5xl lg:text-6xl` | `text-5xl md:text-7xl lg:text-8xl` |
| Section h2 | `text-3xl md:text-4xl` | `text-4xl md:text-5xl lg:text-6xl` |
| Card h3 | `text-xl md:text-2xl` | `text-2xl md:text-3xl` |

**Typography properties:**

```css
/* Headings — commanding presence */
.heading-hero {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
}

.heading-section {
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
}
```

**Font weight:** Upgrade from `700` to `800` (extrabold) for all headings.

### 3.3 Accent Color in Text — The Emphasis System

Create a reusable `<Accent>` pattern for highlighting key words:

```tsx
// Pattern: wrap the emphasis word in accent color
<h1>
  Deja de mandar <span className="text-accent">CVs al vacío</span>
</h1>
```

**Rules for accent highlighting:**
- ONE accent word/phrase per heading maximum
- Accent goes on the word that carries the emotional or semantic weight
- In body text, use accent sparingly — only for key terms
- Accent color: `#84c0bf` (existing palette, no changes)

**Examples from current content:**

| Section | Heading | Accent Word |
|---------|---------|-------------|
| Hero | "Deja de mandar CVs al vacío" | "CVs al vacío" |
| HowItWorks | "Cómo funciona" | No accent (short) |
| Talent | "Ofrécete como talento" | "talento" |
| Companies | "Publica como empresa" | "empresa" |
| Tournaments | "Torneos" | No accent (short) |
| Newsletter | "Las ofertas de la semana, en tu correo" | "semana" |
| CTA | "¿Listo para construir?" | "construir" |

### 3.4 Shadows — Subtle Depth (Kept Minimal)

Keep shadows minimal — this is a typography-first design, not a depth-heavy one:

| Level | Class | Use Case |
|-------|-------|----------|
| 0 | `shadow-none` | Backgrounds, flat sections |
| 1 | `shadow-sm` | Cards at rest |
| 2 | `shadow-md` | Cards on hover |

No glass effects, no gradients on sections. The typography carries the visual weight.

### 3.5 Buttons — Keep Current, Add Hover Elevation

Keep existing button styles. Add only:
- `hover:-translate-y-0.5` for micro-interaction
- `transition-all duration-200` for smooth states

---

## 4. Component-by-Component Changes

### 4.1 Global CSS (`src/app/globals.css`)

- Change `--surface` from `#ffffff` to `#fbf9f4`
- Add heading utility classes (`.heading-hero`, `.heading-section`)
- Add `font-weight: 800` to heading defaults

### 4.2 Hero Section (`src/components/organisms/Hero/Hero.tsx`)

- Upgrade h1 to `text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight`
- Add accent highlight: `<span className="text-accent">CVs al vacío</span>`
- Increase spacing between heading and subtitle

### 4.3 Section Headers (all organisms)

Apply to: HowItWorks, Talent, Companies, Tournaments, Networking, Testimonials, News, Newsletter, CTA

- Upgrade h2 to `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`
- Add accent highlight on key word where semantically appropriate
- Increase spacing below subtitle

### 4.4 i18n Messages (`src/messages/es.json`, `src/messages/en.json`)

- Review all headings for accent word candidates
- Ensure accent words are semantically meaningful (not arbitrary)

### 4.5 Button Atom (`src/components/atoms/Button/Button.tsx`)

- Add `hover:-translate-y-0.5 transition-all duration-200`
- No gradient changes — keep existing style

---

## 5. CSS Variables to Update

```css
:root {
  /* Background — warm off-white */
  --surface: #fbf9f4;

  /* Shadows — minimal, kept for cards only */
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-card-hover: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05);
}
```

---

## 6. Acceptance Criteria

- [ ] Background is `#fbf9f4` across all sections
- [ ] Hero h1 is `text-5xl md:text-7xl lg:text-8xl font-extrabold`
- [ ] Section h2s are `text-4xl md:text-5xl lg:text-6xl font-extrabold`
- [ ] At least 5 headings have accent color highlights on key words
- [ ] Accent highlights are semantically meaningful (not random)
- [ ] Headings use `letter-spacing: -0.02em` to `-0.03em`
- [ ] Visual hierarchy is clear: giant heading > accent emphasis > body
- [ ] Still passes WCAG AA contrast requirements
- [ ] Mobile: headings scale down gracefully via `clamp()` or responsive classes
- [ ] `prefers-reduced-motion`: no animation changes needed (typography-only)
- [ ] No new dependencies added

---

## 7. Out of Scope

- Dark mode
- Section background gradients
- Glass effects or backdrop blur
- New components not listed above
- Animation sequences (PRD-12 handles that)

---

## 8. Dependencies

- `PRD-00-foundation` — Tailwind v4, CSS variables defined
- No coordination needed with PRD-12 (no animation overlap)

---

## 9. Implementation Notes

- Start with global CSS (background change), then Hero, then sections
- Use `clamp()` for fluid typography where possible
- Accent color `#84c0bf` has sufficient contrast on `#fbf9f4` background — verify with Lighthouse
- Keep changes minimal and focused — this is a typography upgrade, not a redesign
