# Exploration: PRD-05 Tournaments Section

## Current State

### Infrastructure — READY ✅

| Layer | Status | Notes |
|-------|--------|-------|
| Next.js 16 + App Router | ✅ | `[locale]` route group, server components |
| TypeScript 5 | ✅ | Strict mode |
| Tailwind CSS 4 | ✅ | `@theme inline` tokens in globals.css |
| i18n (next-intl) | ✅ | `useTranslations` hook pattern established |
| Color system | ✅ | `accent`, `primary`, `muted`, `border`, `surface` tokens |
| `cn()` utility | ✅ | `clsx` + `tailwind-merge` |
| Button atom | ✅ | CVA-based, 3 variants (primary/secondary/ghost), 3 sizes |
| framer-motion | ✅ | Installed (if animations needed) |
| lucide-react | ✅ | Installed (icons if needed) |

### i18n Messages — ALREADY WRITTEN ✅

**es.json** (lines 53-62):
```json
"tournaments": {
  "title": "Torneos",
  "subtitle": "Competiciones abiertas como esta.",
  "features": [
    "Aprender construyendo algo real",
    "Tener algo que enseñar en una entrevista",
    "Darse a conocer en la comunidad"
  ],
  "cta": "Ver torneos"
}
```

**en.json** (lines 53-62):
```json
"tournaments": {
  "title": "Tournaments",
  "subtitle": "Open competitions like this one.",
  "features": [
    "Learn by building something real",
    "Have something to show in an interview",
    "Get known in the community"
  ],
  "cta": "View tournaments"
}
```

**⚠️ MISSING**: Tournament card data (title, description, status, deadline). PRD says "Tournament data from JSON (static for now)" but no card data exists in messages files.

### Components

```
src/components/
├── atoms/
│   └── Button/       ✅ (exists, reusable)
├── molecules/        ❌ (empty)
├── organisms/
│   └── Hero/         ✅ (pattern reference)
└── layout/           ❌ (empty)
```

### Pages

- `src/app/[locale]/page.tsx` — renders only `<Hero />`. Tournaments section needs to be added here.

---

## Affected Areas

| File | Action | Why |
|------|--------|-----|
| `src/messages/es.json` | **MODIFY** | Add tournament card data (items array with title, description, status, deadline) |
| `src/messages/en.json` | **MODIFY** | Add tournament card data (items array) |
| `src/components/molecules/TournamentCard/` | **CREATE** | Card component for individual tournament display |
| `src/components/organisms/Tournaments/` | **CREATE** | Section organism composing TournamentCards in responsive grid |
| `src/app/[locale]/page.tsx` | **MODIFY** | Add `<Tournaments />` below `<Hero />` |

---

## What Needs to Be Created

### 1. Tournament Card Data (i18n)

Add `tournaments.items` array to both locale files:
```json
"tournaments": {
  ...existing keys,
  "items": [
    {
      "title": "string",
      "description": "string",
      "status": "open" | "closed",
      "deadline": "string"
    }
  ]
}
```

PRD requires: title, description, status (open/closed), deadline per card.

### 2. TournamentCard Molecule

A reusable card component following atomic design:
- Props: `title`, `description`, `status` ('open' | 'closed'), `deadline`
- Visual: card with border, status badge, deadline display
- Status accent: `accent` color for "open" status
- Semantic HTML: `<article>` with appropriate headings

### 3. Tournaments Organism

Section component composing cards:
- Semantic `<section>` with `<h2>` for title
- Features list (3 items from i18n)
- CTA button (reuse Button atom)
- Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- All text via `useTranslations('tournaments')`

### 4. Page Update

Add `<Tournaments />` after `<Hero />` in page.tsx.

---

## Component Patterns (from Hero reference)

### Established Pattern:
```tsx
import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

export const ComponentName: FC<Props> = ({ prop1, prop2 }) => {
  const t = useTranslations('namespace')
  return (
    <section className="...">
      {/* content */}
    </section>
  )
}
```

### Barrel Export Pattern:
```tsx
// index.ts
export { ComponentName } from './ComponentName'
```

---

## Card Component Design Options

| Approach | Pros | Cons | Effort |
|----------|------|------|--------|
| **A: Dedicated TournamentCard molecule** | Clean separation, reusable, testable | New file, slight overhead | Low |
| **B: Inline card rendering in Tournaments organism** | Fewer files, simpler | Less reusable, harder to test | Low |
| **C: Generic Card molecule (reusable across sections)** | Maximum reuse | Over-engineered for now, unclear future use | Medium |

**Recommendation: Approach A.** Follow atomic design. A TournamentCard molecule is clean, testable, and follows the pattern established by Button atom. If other card types appear later, we can refactor into a generic Card.

---

## Responsive Grid Strategy

Following Hero's responsive pattern:
```tsx
<section className="px-4 py-16 md:py-24">
  <div className="mx-auto max-w-6xl">
    {/* header */}
    {/* grid */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map(item => <TournamentCard key={...} {...item} />)}
    </div>
  </div>
</section>
```

---

## Key Decisions

### 1. Tournament Data Source

PRD says "Tournament data from JSON (static for now)." Two options:
- **Option A**: Add to `es.json`/`en.json` under `tournaments.items` (i18n-aware)
- **Option B**: Separate `src/data/tournaments.ts` file (simpler, non-text data)

**Recommendation**: Option B. Tournament data contains dates, status enums, and structured fields that don't need translation. Mixing translatable UI strings with static data in message files creates confusion. Keep `tournaments` keys for UI text, use a separate data file for tournament items.

### 2. Status Badge Color

PRD: "Accent color for open status."
- `accent` token = `#84c0bf` (teal)
- For "closed" status: use `muted` or `border` token for visual de-emphasis

### 3. Section Positioning

PRD-05 is the 5th PRD. Current page only has Hero. Question: where does Tournaments go relative to future sections?

**Recommendation**: Add after Hero for now. Future PRDs can reorder. The page composes organisms sequentially.

---

## Risks

1. **No tournament data yet.** The card data doesn't exist anywhere. Need to create sample data (at least 1-2 tournaments) for the section to render meaningfully.

2. **No card component pattern.** This is the first card in the project. Establishing the pattern here sets precedent for future sections (testimonials, news, etc.).

3. **Page will grow.** Adding sections sequentially without a Container or Section wrapper might lead to inconsistent spacing. Consider a shared Section wrapper molecule.

---

## Ready for Proposal

**Yes.** The exploration is complete:
- Infrastructure is solid — no blockers
- i18n UI strings are written — only card data needs adding
- Button atom exists — reuse for CTA
- Pattern is clear from Hero — follow same structure
- Card component needs creation — first of its kind

The orchestrator should tell the user:
- Tournament UI strings already exist in both locales
- Card data needs to be added (separate from i18n strings)
- A new TournamentCard molecule and Tournaments organism will be created
- Page.tsx will be updated to include the new section
- Confirm if static JSON data file is acceptable vs embedding in i18n messages
