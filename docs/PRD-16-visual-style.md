# PRD-16: Visual Style Enhancement — Shadcn Depth & Polish

> **Status:** Draft
> **Version:** 1.0
> **Date:** 2026-09-16
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

The current landing page looks "flat" — solid color backgrounds, minimal shadows, no visual depth or hierarchy between elements. This PRD upgrades the visual language to use real shadcn/ui components with proper shadows, gradients, subtle textures, and micro-interactions that make the page feel alive without being noisy.

The goal: a landing that looks like a modern SaaS/community product, not a wireframe.

---

## 2. Problem Statement

Current state:
- Cards have `shadow-sm` — barely visible, no depth separation
- Buttons are flat solid colors — no gradient, no hover elevation
- Sections alternate between `bg-surface` and `bg-surface-alt` — subtle but lifeless
- No glassmorphism, no gradient accents, no visual texture
- No hover states beyond basic color changes
- The page reads as "one flat plane" instead of layered content

Target state:
- Cards float with real shadows and subtle hover elevation
- Buttons have depth through gradients and micro-interactions
- Sections use subtle gradients, glass effects, or accent borders for visual rhythm
- Every interactive element responds to hover/touch with purpose
- The page has clear visual hierarchy: hero → content → accent → footer

---

## 3. Design System Upgrades

### 3.1 Shadows (Elevation Scale)

Replace `shadow-sm` with a proper elevation system:

| Level | Class | Use Case |
|-------|-------|----------|
| 0 | `shadow-none` | Flat elements, backgrounds |
| 1 | `shadow-sm` | Cards at rest |
| 2 | `shadow-md` | Cards on hover, active inputs |
| 3 | `shadow-lg` | Floating elements, dropdowns |
| 4 | `shadow-xl` | Hero CTA emphasis, featured cards |

**Implementation:** Define CSS custom properties for shadows or use Tailwind's built-in scale with accent-tinted shadows:

```css
/* Custom shadow with accent color tint */
.shadow-accent {
  box-shadow: 0 4px 14px 0 rgba(132, 192, 191, 0.15);
}
.shadow-accent-lg {
  box-shadow: 0 10px 30px 0 rgba(132, 192, 191, 0.2);
}
```

### 3.2 Buttons — Gradients & Depth

Upgrade the `Button` atom with gradient variants:

| Variant | Background | Hover | Shadow |
|---------|-----------|-------|--------|
| `primary` | Gradient: `#84c0bf` → `#6bb5b4` | Brighter, elevation up | `shadow-accent` |
| `secondary` | Gradient border (subtle) | Border brightens | None |
| `ghost` | Transparent | Light accent bg | None |

**Gradient definition:**

```css
.btn-primary {
  background: linear-gradient(135deg, #84c0bf 0%, #6bb5b4 100%);
}
.btn-primary:hover {
  background: linear-gradient(135deg, #8fd4d3 0%, #78c2c1 100%);
  box-shadow: 0 4px 14px rgba(132, 192, 191, 0.35);
  transform: translateY(-1px);
}
.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(132, 192, 191, 0.25);
}
```

### 3.3 Cards — Glass & Depth

Upgrade all card components with layered depth:

**TestimonialCard, NewsCard, TournamentCard, StepCard:**

| State | Style |
|-------|-------|
| Rest | `bg-white rounded-xl shadow-sm border border-border/50` |
| Hover | `shadow-lg border-accent/20 -translate-y-0.5` transition |

**Glass effect variant (optional, for feature cards):**

```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### 3.4 Section Backgrounds — Gradient Rhythms

Replace flat `bg-surface-alt` with subtle gradients:

| Section | Current | Proposed |
|---------|---------|----------|
| HowItWorks | `bg-surface-alt` | `bg-gradient-to-b from-surface-alt to-surface` |
| Companies | `bg-surface-alt` | `bg-gradient-to-br from-surface-alt via-surface to-accent/5` |
| Tournaments | `bg-surface` | `bg-gradient-to-b from-surface to-surface-alt` |
| News | `bg-surface-alt` | `bg-gradient-to-b from-surface-alt to-surface` |
| Newsletter | `bg-primary` (solid dark) | `bg-gradient-to-br from-primary via-primary to-primary/95` with subtle texture |

### 3.5 Accent Elements

Add visual rhythm through accent borders and decorative elements:

- **Section dividers:** Subtle top border or gradient line between major sections
- **Accent dots/badges:** Small accent-colored indicators on cards (category badges, step numbers)
- **Hover glow:** Interactive elements get a soft accent glow on hover

---

## 4. Component-by-Component Changes

### 4.1 Button Atom (`src/components/atoms/Button/Button.tsx`)

- Add gradient background to `primary` variant
- Add `shadow-accent` on hover
- Add `translate-y` micro-interaction
- Add `transition-all duration-200` for smooth state changes

### 4.2 TestimonialCard (`src/components/molecules/TestimonialCard/TestimonialCard.tsx`)

- Increase shadow from `shadow-sm` to `shadow-md` at rest
- Add `hover:shadow-lg hover:-translate-y-0.5` transition
- Add subtle accent top border: `border-t-2 border-accent/30`
- Avatar placeholder: gradient background instead of flat accent

### 4.3 NewsCard (`src/components/molecules/NewsCard/NewsCard.tsx`)

- Add hover elevation: `hover:shadow-lg hover:-translate-y-0.5`
- Category badge: gradient accent background
- Add subtle left border accent on hover

### 4.4 StepCard (`src/components/molecules/StepCard/StepCard.tsx`)

- Step number: gradient circle instead of flat accent
- Add hover glow effect
- Connector line between steps (desktop): subtle gradient line

### 4.5 TournamentCard (`src/components/molecules/TournamentCard/TournamentCard.tsx`)

- Status badge: gradient for "open", muted for "closed"
- Add hover elevation
- Accent border on featured tournaments

### 4.6 SectionHeader (`src/components/molecules/SectionHeader/SectionHeader.tsx`)

- Title: consider subtle gradient text for section titles (accent → primary)
- Subtitle: keep muted, but add more spacing
- Decorative accent line under title

### 4.7 Hero Section (`src/components/organisms/Hero/Hero.tsx`)

- Add subtle background gradient or mesh pattern
- CTA button: larger, with accent shadow and glow
- Add floating accent shapes (CSS-only decorative elements)

### 4.8 Newsletter Section (`src/components/organisms/Newsletter/Newsletter.tsx`)

- Input field: glass effect with backdrop blur
- Submit button: gradient with glow on hover
- Background: rich gradient instead of flat dark

---

## 5. CSS Variables to Add

```css
:root {
  /* Shadows */
  --shadow-accent: 0 4px 14px 0 rgba(132, 192, 191, 0.15);
  --shadow-accent-lg: 0 10px 30px 0 rgba(132, 192, 191, 0.2);
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-card-hover: 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05);

  /* Gradients */
  --gradient-accent: linear-gradient(135deg, #84c0bf 0%, #6bb5b4 100%);
  --gradient-accent-hover: linear-gradient(135deg, #8fd4d3 0%, #78c2c1 100%);
  --gradient-surface: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}
```

---

## 6. Acceptance Criteria

- [ ] All cards have visible shadows at rest (level 1+)
- [ ] All cards elevate on hover (shadow + translate)
- [ ] Primary buttons have gradient background
- [ ] Buttons show elevation change on hover
- [ ] Sections have gradient backgrounds (not flat colors)
- [ ] Newsletter input has glass/depth effect
- [ ] Hero has visual depth (gradient bg or decorative elements)
- [ ] All transitions are smooth (200-300ms)
- [ ] No performance regression (shadows/gradients are GPU-composited)
- [ ] Visual hierarchy is clear: hero > content cards > footer
- [ ] Still passes WCAG AA contrast requirements
- [ ] Mobile: shadows/gradients still render correctly
- [ ] `prefers-reduced-motion`: transitions disabled gracefully

---

## 7. Out of Scope

- Complete redesign of layout or information architecture
- New illustrations or photography
- Dark mode
- Animation sequences (PRD-12 handles that)
- New components not listed above

---

## 8. Dependencies

- `PRD-00-foundation` — Shadcn/ui, Tailwind v4, CSS variables defined
- `PRD-12-animations` — may overlap on hover transitions (coordinate)
- Current component library must be stable before applying visual upgrades

---

## 9. Implementation Notes

- Apply changes incrementally: buttons first → cards → sections → hero
- Test shadow rendering on低端 devices (some Android browsers struggle with large blur radius)
- Use `will-change: transform` sparingly on hoverable elements
- Gradient text (`background-clip: text`) needs `-webkit-` prefix for Safari
- `backdrop-filter` needs `-webkit-` prefix for Safari
- Verify Lighthouse Performance stays ≥90 after changes
