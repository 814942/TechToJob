# Exploration: PRD-02 How It Works Section

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
| Constants | ✅ | `SITE`, `COLORS`, `FONTS` in `src/lib/constants.ts` |
| Types | ✅ | `Testimonial`, `NewsItem`, `FooterLink`, `FooterSection` |
| Messages | ✅ | `howItWorks.title`, `howItWorks.subtitle`, `howItWorks.steps[]` in both locales |
| Layout | ✅ | Root layout + locale layout with `<html>`, `<body>`, font variable |
| Dependencies | ✅ | framer-motion, lucide-react, class-variance-authority all installed |

### Components — Partially Built

```
src/components/
├── atoms/
│   └── Button/          ✅ Button.tsx (CVA variants: primary/secondary/ghost)
├── molecules/           ❌ EMPTY
├── organisms/
│   └── Hero/            ✅ Hero.tsx (useTranslations, semantic HTML, flex centering)
└── layout/              ❌ EMPTY
```

### Pages

- `src/app/[locale]/page.tsx` — renders `<Hero />` only
- No HowItWorks section yet

### i18n Messages — ALREADY WRITTEN ✅

**en.json:**
```json
"howItWorks": {
  "title": "How it works",
  "subtitle": "The journey from arriving to landing an opportunity.",
  "steps": [
    {
      "title": "Join Discord",
      "description": "Join the community and meet developers and companies in the sector."
    },
    {
      "title": "Participate",
      "description": "Contribute in channels, answer questions, share projects."
    },
    {
      "title": "Get known",
      "description": "Companies see your work before hiring."
    },
    {
      "title": "Opportunities arise",
      "description": "Real offers that come from the community, not forms."
    }
  ]
}
```

**es.json:**
```json
"howItWorks": {
  "title": "Cómo funciona",
  "subtitle": "El recorrido desde que llegas hasta que sale una oportunidad.",
  "steps": [
    {
      "title": "Entra al Discord",
      "description": "Únete a la comunidad y conoce a desarrolladores y empresas del sector."
    },
    {
      "title": "Participa",
      "description": "Contribuye en canales, responde dudas, comparte proyectos."
    },
    {
      "title": "Te conocen",
      "description": "Las empresas ven tu trabajo antes de contratar."
    },
    {
      "title": "Salen oportunidades",
      "description": "Ofertas reales que surgen de la comunidad, no de formularios."
    }
  ]
}
```

---

## Affected Areas

| File | Action | Why |
|------|--------|-----|
| `src/components/molecules/SectionHeader/SectionHeader.tsx` | **CREATE** | Reusable title + subtitle component (shared across sections) |
| `src/components/molecules/StepCard/StepCard.tsx` | **CREATE** | Individual step display (number + title + description) |
| `src/components/organisms/HowItWorks/HowItWorks.tsx` | **CREATE** | The how-it-works section itself |
| `src/app/[locale]/page.tsx` | **MODIFY** | Add `<HowItWorks />` after `<Hero />` |
| `src/types/index.ts` | **MODIFY** | Add `Step` interface for type safety |

---

## What Needs to Be Created

### 1. Step Type

```typescript
export interface Step {
  title: string
  description: string
}
```

**Location:** `src/types/index.ts`

**Why:** Type the steps array from i18n messages for type safety.

### 2. SectionHeader Molecule

**Location:** `src/components/molecules/SectionHeader/SectionHeader.tsx`

**Props:**
```typescript
interface SectionHeaderProps {
  title: string
  subtitle: string
  className?: string
}
```

**Pattern:** Follow Hero's semantic HTML pattern:
- `<div>` container with `text-center`
- `<h2>` for title (Sora 700, primary, responsive sizes)
- `<p>` for subtitle (Sora 400, muted, responsive sizes)

**Why:** Title + subtitle pattern repeats across sections (HowItWorks, Talent, Companies, Tournaments, Networking, Testimonials, Newsletter, CTA). Extract once, reuse everywhere.

### 3. StepCard Molecule

**Location:** `src/components/molecules/StepCard/StepCard.tsx`

**Props:**
```typescript
interface StepCardProps {
  number: number  // 1-4 for display
  title: string
  description: string
  className?: string
}
```

**Layout:**
- Mobile: stacked vertically
- Desktop: horizontal (4 columns)
- Each card: number (circle or text) + title + description

**Pattern:** Follow AGENT.MD card patterns:
```
rounded-xl border border-border bg-surface p-6 shadow-sm
transition-all hover:border-glow/30 hover:shadow-md hover:shadow-glow/10
```

**Why:** Each step is a discrete visual unit. Making it a molecule allows reuse in future sections (e.g., "How talent works" vs "How companies work").

### 4. HowItWorks Organism

**Location:** `src/components/organisms/HowItWorks/HowItWorks.tsx`

**Props:** None (reads from i18n)

**Structure:**
```tsx
<section className="bg-surface-alt py-16 md:py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-4">
    <SectionHeader title={t('title')} subtitle={t('subtitle')} />
    
    {/* Desktop: 4 columns, Mobile: stacked */}
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
      {steps.map((step, index) => (
        <StepCard
          key={index}
          number={index + 1}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  </div>
</section>
```

**Key Decisions:**
- `bg-surface-alt` — alternates with Hero's `bg-surface` (AGENT.MD section rhythm)
- `max-w-7xl` — matches AGENT.MD max width
- Grid layout: 1 col mobile → 2 cols md → 4 cols lg
- No animations yet (PRD-12 scope)

### 5. Page Update

**Current:**
```tsx
import { Hero } from '@/components/organisms/Hero'

export default function Home() {
  return <Hero />
}
```

**Updated:**
```tsx
import { Hero } from '@/components/organisms/Hero'
import { HowItWorks } from '@/components/organisms/HowItWorks'

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
    </>
  )
}
```

---

## Approach Options

| Approach | Pros | Cons | Effort |
|----------|------|------|--------|
| **A: Minimal — HowItWorks inline, no shared molecules** | Fast, focused on PRD-02 only | Duplicate SectionHeader pattern in future sections | Low |
| **B: With shared molecules — SectionHeader + StepCard** | Reusable across sections, cleaner code, atomic design compliant | Slightly more files to create | Medium |
| **C: shadcn/ui Card first** | Reusable, already in stack | Setup overhead, might not match AGENT.MD patterns exactly | Medium |

**Recommendation: Approach B.** 

Rationale:
1. AGENT.MD mandates atomic design. SectionHeader and StepCard are textbook molecules.
2. The PRD says "steps as array" — StepCard naturally maps to this data structure.
3. SectionHeader will be reused in Talent, Companies, Tournaments, Networking, Testimonials, Newsletter, CTA sections (7 more sections!). Extract it now.
4. The effort difference is minimal (2 extra files, ~60 lines total).

---

## Key Decisions

### 1. Section Background

**Options:**
- `bg-surface-alt` (#f8fafc) — follows AGENT.MD alternating pattern
- `bg-surface` (white) — same as Hero, less visual rhythm

**Recommendation:** `bg-surface-alt`. The alternating pattern creates visual rhythm between sections. Hero is white, HowItWorks is light gray, next section white, etc.

### 2. Step Number Display

**Options:**
- **Circle with number** — visual, modern, matches tech aesthetic
- **Plain text "01", "02"** — simpler, monospace touch
- **Lucide icon** — semantic, but requires icon selection per step

**Recommendation:** Circle with number. Matches the "4 steps" visual from PRD. Uses accent color for background, primary for text. Easy to implement, no icon dependency.

**PRD Note:** The PRD says "icon/number". Number is simpler and doesn't require icon selection. Icons can be added later if the user requests them.

### 3. Horizontal Layout Implementation

**Options:**
- **CSS Grid** — `grid-cols-4` on desktop, `grid-cols-1` on mobile
- **Flexbox** — `flex-wrap` with `flex-1` for equal distribution

**Recommendation:** CSS Grid. More explicit control, cleaner responsive behavior, matches AGENT.MD patterns (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).

### 4. Section Order in Page

Current: Hero only
PRD-02 adds: Hero → HowItWorks

**Recommendation:** This is correct. "How It Works" naturally follows the hero — user sees the value proposition, then understands how to get there.

---

## Risks

1. **No Header = odd navigation.** The page renders without a header. Users can't navigate. Acceptable for PRD-02 scope, but the orchestrator should note this to the user.

2. **No Footer = no links.** Same as above. Footer comes in a later PRD.

3. **SectionHeader reusability.** If we build SectionHeader now, future sections must use it. This is a feature, not a bug — but it means the implementation must be generic enough to fit all sections.

4. **StepCard visual density.** Four cards on desktop might feel cramped if descriptions are long. The current descriptions are short (1-2 sentences), so this is fine. But it's worth noting for future copy changes.

5. **No animations.** PRD-02 has no animations (PRD-12 scope). The section will render static. This is acceptable per PRD scope.

---

## Ready for Proposal

**Yes.** The exploration is complete:
- Infrastructure is solid — no blockers
- Messages are already written in both locales — no copy decisions pending
- The approach is clear — shared molecules (SectionHeader, StepCard) + HowItWorks organism + page update
- The only decision needed: confirm `bg-surface-alt` for section background vs. `bg-surface`

The orchestrator should tell the user:
- What exists vs. what will be created
- That copy is already done in the message files
- That Header/Footer are out of scope for this PRD
- That shared molecules (SectionHeader, StepCard) will be created for reusability
- Ask if they want `bg-surface-alt` (light gray) or `bg-surface` (white) for the section background
