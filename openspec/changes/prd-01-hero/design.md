# Design: PRD-01 Hero Section

## Technical Approach

Build two components following atomic design: a reusable `Button` atom (CVA + cn()) and a `Hero` organism (semantic HTML, i18n). Compose in `page.tsx` replacing the placeholder. All styling via Tailwind utility classes using the project's design tokens defined in `globals.css`. No external dependencies beyond what's already installed (CVA, clsx, tailwind-merge, next-intl).

## Architecture Decisions

| Option | Tradeoff | Decision |
|--------|----------|----------|
| `forwardRef` on Button | Adds complexity vs plain FC | **Use forwardRef** — spec requires ref forwarding for flexibility, AGENT.MD shows FC<Props> but forwardRef is compatible |
| CVA vs manual variant maps | CVA is extra abstraction | **Use CVA** — already in deps, spec mandates it, enables tree-shakeable variant definitions |
| Barrel export (index.ts) | Extra file vs direct import | **Barrel export** — matches atomic design pattern, enables clean `@/components/atoms/Button` imports |
| Section semantic HTML | div+className is simpler | **Semantic `<section>` + `<h1>`** — spec requires it, AGENT.MD mandates SEO rules |
| Hero as server component | Client needed for animations | **Server component** — no animations in PRD-01 scope, keeps bundle lean |

## Data Flow

    page.tsx
      └── Hero (server component)
            ├── useTranslations('hero') → heading, subtitle
            ├── <h1> {t('title')}
            ├── <p> {t('subtitle')}
            └── Button (primary) → <a> → Discord

    i18n (next-intl)
      ├── es.json → hero.title, hero.subtitle, hero.cta
      └── en.json → hero.title, hero.subtitle, hero.cta

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/components/atoms/Button/Button.tsx` | Create | CVA Button atom — 3 variants, 3 sizes, forwardRef |
| `src/components/atoms/Button/index.ts` | Create | Barrel export |
| `src/components/organisms/Hero/Hero.tsx` | Create | Hero section — i18n, semantic HTML, responsive |
| `src/components/organisms/Hero/index.ts` | Create | Barrel export |
| `src/app/[locale]/page.tsx` | Modify | Replace placeholder with `<Hero />` |

## Interfaces / Contracts

```typescript
// Button atom
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

// CVA definition
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-primary hover:bg-accent/90 hover:shadow-md',
        secondary: 'border border-border bg-transparent text-primary hover:border-glow/50',
        ghost: 'bg-transparent text-primary hover:bg-muted/10',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-13 px-8 text-lg',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
)

// Responsive: w-full on mobile, w-auto from md+
const responsiveClass = 'w-full md:w-auto'
```

## Tailwind Class Patterns

Following AGENT.MD conventions:

```tsx
// Button — primary variant
className={cn(
  buttonVariants({ variant, size }),
  'w-full md:w-auto',           // responsive width
  className                      // user override
)}

// Hero — full viewport, centered
<section className="min-h-screen flex flex-col items-center justify-center bg-surface px-4 text-center">
  <h1 className="text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
  <p className="mt-4 max-w-2xl text-lg text-muted md:text-xl">
</section>
```

Token usage: `bg-accent`, `text-primary`, `bg-surface`, `text-muted`, `border-border`, `text-glow` — all from `@theme inline` in globals.css.

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | Button renders variants/sizes, correct classes | Render with different props, assert className contains expected tokens |
| Unit | Hero renders h1, section, uses translations | Mock `useTranslations`, assert rendered text matches mock |
| Integration | Hero composes Button correctly | Render Hero, assert Discord link has `target="_blank"` and `rel="noopener noreferrer"` |
| E2E | Page renders Hero at full viewport | Visit `/`, assert section has `min-h-screen`, CTA opens Discord |
| Accessibility | Heading hierarchy, keyboard focus | Assert single h1, tab to button shows focus ring |

## Threat Matrix

N/A — no routing, shell, subprocess, VCS/PR automation, executable-file classification, or process-integration boundary.

## Migration / Rollout

No migration required. This is additive — new components, page update is a content swap with no data changes. Rollback: delete Button/ and Hero/ directories, revert page.tsx to original placeholder.

## Open Questions

- None — all decisions are clear from proposal, spec, and codebase analysis.
