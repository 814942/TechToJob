# AGENT.MD — Runtime Instructions

> Technical conventions, code style, and architecture rules for AI agents working on this project.

---

## Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16+ |
| Language | TypeScript | 5+ |
| Styling | Tailwind CSS | v4 |
| Components | Shadcn/ui | latest |
| Icons | Lucide React | latest |
| i18n | next-intl | latest |
| Animations | Motion (framer-motion) | latest |
| Linting | ESLint + Prettier | latest |
| Font | Sora (Google Fonts) | 3 weights |

---

## Visual Identity — Design North Star

Every design decision MUST align with this identity. When in doubt, refer back here.

### Brand Essence

**TechToJob = Tech community, not job portal.**

The visual identity must feel:
- **Modern tech** — Startup/SaaS aesthetic, not corporate
- **Clean & airy** — Generous whitespace, nothing cramped
- **Developer-friendly** — Dark accents, code-like elements, monospace touches
- **Trustworthy** — Professional but not boring

### Color System — Extended Palette

```css
@theme {
  /* === BASE (tournament fixed) === */
  --color-primary: #2f3436;      /* 30% — text, headers, dark sections */
  --color-accent: #84c0bf;       /* 10% — CTAs, badges, highlights */
  --color-surface: #ffffff;      /* 60% — backgrounds, whitespace */

  /* === EXTENDED (supporting) === */
  --color-neon: #a855f7;         /* Purple — tech accent, hover states */
  --color-glow: #22d3ee;         /* Cyan — links, active states, glow */
  --color-muted: #2f3436b3;      /* 70% opacity — secondary text */
  --color-border: #2f34361a;      /* 10% opacity — dividers, borders */
  --color-surface-alt: #f8fafc;  /* Light gray — alternating sections */
}
```

### Color Usage Rules

| Element | Color | Notes |
|---------|-------|-------|
| **Primary buttons** | `accent` bg + `primary` text | WCAG compliant |
| **Secondary buttons** | `transparent` bg + `primary` text + `border` |
| **Hover states** | `glow` border or `neon` subtle bg | Never replace primary |
| **Links** | `primary` default, `glow` on hover |
| **Badges/Chips** | `accent` bg + `primary` text |
| **Section alternation** | `surface` → `surface-alt` | Subtle rhythm |
| **Hero accents** | `neon` or `glow` gradient touches | Sparingly |

### ⚠️ Contrast Rules

- `accent` (#84c0bf) on `surface` (#ffffff) → **FAILS WCAG** for small text
- Use `accent` ONLY for: button backgrounds (with dark text), badges, decorative elements
- NEVER for: paragraphs, nav text, form labels, headings

### Typography

```
Font: Sora (via next/font/google)
Weights: 400 (regular), 600 (semibold), 700 (bold)

Headlines: Sora 700, primary color
Subheadlines: Sora 600, primary color
Body: Sora 400, primary color
Small/Labels: Sora 400, muted color
```

### Spacing & Layout

- **Generous padding:** Sections use `py-16 md:py-24 lg:py-32`
- **Max width:** Content constrained to `max-w-7xl` (1280px)
- **Grid gap:** `gap-6 md:gap-8` for card grids
- **Section rhythm:** Alternate `surface` and `surface-alt` backgrounds

### Borders & Shadows

```tsx
// Cards
"rounded-xl border border-border bg-surface shadow-sm"

// Cards on hover (subtle glow)
"rounded-xl border border-glow/30 bg-surface shadow-md shadow-glow/10"

// Buttons
"rounded-lg px-6 py-3 font-semibold transition-all"

// Inputs
"rounded-lg border border-border bg-surface px-4 py-3"
```

### Animations — Motion

```tsx
// Scroll reveal (used on sections)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>

// Hover lift (cards)
whileHover={{ y: -4 }}

// Subtle scale (buttons)
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

**Rules:**
- `viewport={{ once: true }}` — animate only on first scroll
- Duration: 0.3-0.5s max
- Only opacity + transform (GPU accelerated)
- Respect `prefers-reduced-motion`

### Component Patterns

**Cards:**
```tsx
className="rounded-xl border border-border bg-surface p-6 shadow-sm
           transition-all hover:border-glow/30 hover:shadow-md hover:shadow-glow/10"
```

**Buttons:**
```tsx
// Primary
className="rounded-lg bg-accent px-6 py-3 font-semibold text-primary
           transition-all hover:bg-accent/90 hover:shadow-md"

// Secondary
className="rounded-lg border border-border bg-transparent px-6 py-3
           font-semibold text-primary transition-all hover:border-glow/50"
```

**Section backgrounds:**
```tsx
// Alternating
<section className="bg-surface py-16 md:py-24">...</section>
<section className="bg-surface-alt py-16 md:py-24">...</section>
```

---

## Architecture — Atomic Design

```
src/
├── app/[locale]/          # Routes (Next.js App Router)
├── components/
│   ├── atoms/             # Button, Badge, Input, Icon
│   ├── molecules/         # Card, FormField, NavItem
│   ├── organisms/         # Hero, Footer, Testimonials
│   └── layout/            # Header, Footer, Container
├── i18n/                  # next-intl config
├── messages/              # es.json, en.json
├── lib/                   # Utils, constants
└── types/                 # Shared types
```

### Layer Rules

| Layer | Contains | Never Contains |
|-------|----------|----------------|
| `atoms` | Single-purpose elements, no business logic | API calls, state management |
| `molecules` | 2-3 atoms combined, simple composition | Complex state, side effects |
| `organisms` | Full sections, can manage local state | API calls (use lib/ for that) |
| `layout` | Structural elements (Header, Footer) | Content-specific logic |
| `lib` | Pure functions, constants, utilities | React components |
| `types` | Interfaces, enums, type aliases | Runtime code |

---

## Naming Conventions

### Files

```
PascalCase.tsx          # Components
camelCase.ts            # Utils, constants, hooks
kebab-case.css          # Styles (if needed)
```

### Components

```tsx
// File: TestimonialCard.tsx
export const TestimonialCard = ({ name, quote }: TestimonialCardProps) => { ... }

// NOT: testimonial-card.tsx
// NOT: Testimonial.tsx (too vague)
```

### Variables & Functions

```tsx
// camelCase for everything
const isActive = true
const getUserData = () => { ... }

// Boolean prefixes: is, has, can, should
const isVisible = true
const hasPermission = false
const canEdit = true

// Event handlers: handle + Event
const handleClick = () => { ... }
const handleSubmit = () => { ...

// Custom hooks: use + Feature
const useTranslations = () => { ... }
const useMediaQuery = () => { ... }
```

### CSS Classes (Tailwind)

```tsx
// Utility-first, no custom classes unless tokens
<div className="flex items-center gap-4 px-6 py-3">

// Component variants via cva or cn()
<button className={cn(buttonVariants({ variant: 'primary' }))}>
```

---

## Code Style — Prettier

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "always"
}
```

**Rules:**
- No semicolons
- Single quotes
- 100 char line width
- Trailing commas (ES5)
- Prettier runs on save + pre-commit

---

## Import Order

```tsx
// 1. External (node_modules)
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { cn } from 'lib/utils'

// 2. Internal (absolute)
import { Button } from '@/components/atoms/Button'
import { siteConfig } from '@/lib/constants'

// 3. Types
import type { TestimonialCardProps } from '@/types'

// 4. Relative
import { formatDate } from './utils'
```

**Enforced by ESLint:** `import/order` with alphabetical sorting.

---

## Git Conventions

### Branches — GitFlow

```
main                    # Production, always deployable
feat/kebab-case-name    # New features
fix/kebab-case-name     # Bug fixes
hotfix/kebab-case-name  # Urgent production fixes
chore/kebab-case-name   # Maintenance, config
refactor/kebab-case-name # Code restructuring
docs/kebab-case-name    # Documentation only
test/kebab-case-name    # Test additions/fixes
```

**Regex:** `^(feat|fix|hotfix|chore|refactor|docs|test)/[a-z0-9]+(-[a-z0-9]+)*$`

### Commits — Conventional Commits

```
feat: add Hero component with Discord CTA
fix: correct contrast ratio on accent buttons
style: adjust spacing in HowItWorks section
docs: update PRD-01 with approved copy
refactor: extract newsletter logic to hook
chore: update dependencies
test: add TestimonialCard unit tests
```

**Rules:**
- Type + description in English
- Lowercase description
- No period at end
- Max 72 chars for subject line

### Pre-commit Hook

```bash
lint-staged runs:
- ESLint --fix
- Prettier --write
```

---

## ESLint Rules — Hard Constraints

| Rule | Level | Description |
|------|-------|-------------|
| `@typescript-eslint/no-explicit-any` | error | No `any` — type everything |
| `@typescript-eslint/consistent-type-imports` | error | Always `import type` |
| `@typescript-eslint/no-non-null-assertion` | error | No `!` — handle undefined |
| `react/self-closing-comp` | error | `<Foo />` without children |
| `react/jsx-boolean-value` | error | `<Foo active />` not `<Foo active={true} />` |
| `react/jsx-curly-brace-presence` | error | `{var}` not `{"{"}{var}{"}"}` |
| `react/jsx-no-useless-fragment` | error | No `<>x</>` |
| `react-hooks/rules-of-hooks` | error | Hooks rules invariant |
| `import/order` | error | Imports always ordered |
| `no-console` | warn | Only `warn` and `error` |
| `prefer-const` | error | Use `const` when not reassigned |
| `eqeqeq` | error | Always `===`, never `==` |

---

## Component Patterns

### Standard Component

```tsx
import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'base-styles',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
```

### Rules

- One component per file
- Named exports (no default exports)
- Props interface always explicit
- Use `FC<Props>` from React
- Shadcn/ui as base when available

---

## i18n Rules

```tsx
// ✅ Correct
const t = useTranslations('hero')
<h1>{t('title')}</h1>

// ❌ Wrong
<h1>Deja de mandar CVs al vacío</h1>
```

- Never hardcode text in components
- Always use `useTranslations()` from next-intl
- Use descriptive keys, not generic ones
- Text files: `messages/es.json`, `messages/en.json`

---

## SEO Rules

- Single `<h1>` per page with main message
- Heading hierarchy: h2 → h3 without skips
- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`
- Descriptive link text (no "click here")
- URLs: `/ofertas` not `/page2`
- Metadata via Next.js Metadata API
- Open Graph + Twitter Cards always present
- JSON-LD Organization schema

---

## Responsive — Mobile First

```tsx
// Always start from mobile
<div className="px-4 md:px-8 lg:px-16 xl:px-24">
  // Breakpoints: sm(640), md(768), lg(1024), xl(1280)
</div>
```

---

## Color System — 60-30-10

```css
@theme {
  --color-primary: #2f3436;    /* 30% — text, contrast sections */
  --color-accent: #84c0bf;     /* 10% — CTAs, badges, details */
  --color-surface: #ffffff;    /* 60% — backgrounds, whitespace */
}
```

⚠️ `#84c0bf` on `#ffffff` fails WCAG for small text. Use only for:
- Button backgrounds (with dark text)
- Badges, chips, highlights
- Decorative elements

NEVER for: paragraphs, nav text, form labels.

---

## Checklist Before Commit

- [ ] `npm run lint` passes with zero errors
- [ ] `npm run build` succeeds
- [ ] TypeScript compiles without errors
- [ ] Component has proper TypeScript types
- [ ] Text uses `useTranslations()`, not hardcoded
- [ ] HTML is semantic (no div soup)
- [ ] Responsive on mobile breakpoint
- [ ] Import order is correct
