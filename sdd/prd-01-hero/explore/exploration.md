# Exploration: PRD-01 Hero Section

## Current State

### Infrastructure — DONE ✅

| Layer | Status | Notes |
|-------|--------|-------|
| Next.js 16 + App Router | ✅ | Configured with `[locale]` route group |
| TypeScript 5 | ✅ | Configured, strict mode |
| Tailwind CSS 4 | ✅ | PostCSS with `@tailwindcss/postcss` |
| i18n (next-intl) | ✅ | `es`/`en` locales, routing, middleware |
| Sora font | ✅ | Loaded via `next/font/google`, weights 400/600/700 |
| Color system | ✅ | CSS variables in `globals.css`, mapped to `@theme inline` |
| `cn()` utility | ✅ | `clsx` + `tailwind-merge` in `src/lib/utils.ts` |
| Constants | ✅ | `SITE` (Discord URL), `COLORS`, `FONTS` in `src/lib/constants.ts` |
| Types | ✅ | `Testimonial`, `NewsItem`, `FooterLink`, `FooterSection` |
| Messages | ✅ | `hero.title`, `hero.subtitle`, `hero.cta` in both `es.json` and `en.json` |
| Layout | ✅ | Root layout + locale layout with `<html>`, `<body>`, font variable |
| Dependencies | ✅ | framer-motion, lucide-react, class-variance-authority all installed |

### Components — EMPTY ❌

```
src/components/
├── atoms/        (0 files)
├── molecules/    (0 files)
├── organisms/    (0 files)
└── layout/       (0 files)
```

### Pages

- `src/app/[locale]/page.tsx` — placeholder with **hardcoded Spanish text** (violates i18n rule)
- No Header, no Footer, no Hero — nothing beyond the placeholder

### i18n Messages (already written)

**en.json:**
```json
"hero": {
  "title": "Stop sending CVs into the void",
  "subtitle": "TechToJob is the community where developers and companies meet before a job opening exists. You build, participate, and they see you work.",
  "cta": "Join the community"
}
```

**es.json:**
```json
"hero": {
  "title": "Deja de mandar CVs al vacío",
  "subtitle": "TechToJob es la comunidad donde desarrolladores y empresas se conocen antes de que exista una vacante. Construyes, participas y te ven trabajar.",
  "cta": "Entrar a la comunidad"
}
```

---

## Affected Areas

| File | Action | Why |
|------|--------|-----|
| `src/components/atoms/Button.tsx` | **CREATE** | CTA button needed for hero (and future sections) |
| `src/components/organisms/Hero.tsx` | **CREATE** | The hero section itself |
| `src/app/[locale]/page.tsx` | **MODIFY** | Replace placeholder with `<Hero />` |

---

## What Needs to Be Created

### 1. Button Atom

Following AGENT.MD patterns:
- `variant`: primary (accent bg + primary text) / secondary (transparent + border) / ghost
- `size`: sm / md / lg
- Uses `cn()` with CVA for variants
- Props interface explicit, named export, `FC<Props>`

### 2. Hero Organism

- Semantic `<section>` (not div soup)
- `min-h-screen` for full viewport height
- Flex centering (already in placeholder pattern)
- H1 + subtitle paragraph + CTA Button
- All text via `useTranslations('hero')`
- Discord link from `SITE.discord` constant
- **No animations** (PRD-12 scope)
- **No images** (placeholder for now)
- Responsive: mobile full-width button, desktop auto-width

### 3. Page Update

Replace hardcoded placeholder with `<Hero />` component.

---

## Key Decisions

### 1. Copy — ALREADY DECIDED ✅

Messages are written in both `es.json` and `en.json`. No copywriting needed. The brief's tone rules (tuteo, short sentences, no brochure words) are already reflected.

### 2. Header — OUT OF SCOPE for PRD-01

The PRD says "Logo visible" but not necessarily IN the hero. A Header is a separate organism. PRD-01 focuses on the hero section only. The hero can work standalone.

**Recommendation:** Skip Header for now. The hero is self-contained.

### 3. Hero Background

PRD-01 says "white or light gradient." AGENT.MD says "Hero accents: neon or glow gradient touches — sparingly."

**Options:**
- **Plain white** (`bg-surface`) — simplest, cleanest
- **Subtle gradient** — white to `surface-alt` or a very faint glow/neon tint

**Recommendation:** Start with plain white. Gradients can be refined later. The hero's job is clarity, not decoration.

### 4. Button Responsive Behavior

Mobile: full-width (`w-full`). Desktop: auto-width. This is a concern of the Hero layout, not the Button itself. The Button should be size-agnostic; the Hero controls layout.

### 5. Accent Color Contrast

`#84c0bf` on `#ffffff` FAILS WCAG for small text. But the CTA button uses `accent` background + `primary` text (#2f3436), which passes. The PRD acceptance criteria require WCAG-compliant button contrast — this combination works.

---

## Approach Options

| Approach | Pros | Cons | Effort |
|----------|------|------|--------|
| **A: Minimal — Button atom + Hero + page update** | Fast, focused, PRD-01 scoped | No Header/Footer (but those are separate PRDs) | Low |
| **B: Full layout — add Header, Footer, Container** | More complete visual | Bloated scope, blocks on other PRDs | Medium |
| **C: shadcn/ui Button first** | Reusable, already in stack | Setup overhead, might not match AGENT.MD patterns exactly | Medium |

**Recommendation: Approach A.** PRD-01 is scoped to the hero. Build the minimum atoms needed (Button), compose the Hero, update the page. Header/Footer come in later PRDs.

---

## Risks

1. **No Header = odd first impression.** The hero will render without navigation. Acceptable for a single-PRD delivery, but the orchestrator should note this to the user.

2. **Root layout duplication.** Both `src/app/layout.tsx` and `src/app/[locale]/layout.tsx` import Sora and globals.css. The root layout also has OG metadata. Not a blocker, but worth noting for future cleanup.

3. **Button reusability.** If we build a minimal Button just for the hero, it might need rework when other sections need different variants. Better to build it properly from the start following AGENT.MD patterns.

4. **No `prefers-reduced-motion` concern yet.** PRD-01 has no animations, so this is only relevant when PRD-12 is implemented.

---

## Ready for Proposal

**Yes.** The exploration is complete:
- Infrastructure is solid — no blockers
- Messages are written — no copy decisions pending
- The approach is clear — minimal atoms + hero organism + page update
- The only decision needed: confirm plain white background vs. subtle gradient

The orchestrator should tell the user:
- What exists vs. what will be created
- That copy is already done in the message files
- That Header is out of scope for this PRD
- Ask if they want plain white or a subtle gradient for the hero background
