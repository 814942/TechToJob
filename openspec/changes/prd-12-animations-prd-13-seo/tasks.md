# Tasks: PRD-12 Animations + PRD-13 SEO

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 150–250 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single PR |
| Delivery strategy | single-pr |
| Chain strategy | size-exception |

Decision needed before apply: Yes
Chained PRs recommended: No
Chain strategy: size-exception
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Focused test command | Runtime harness | Rollback boundary |
|------|------|-----------|----------------------|-----------------|-------------------|
| 1 | All animations + SEO in one PR | PR 1 | `npm run build` | Dev server visual check + Lighthouse | Revert single commit |

## Phase 1: Animation Infrastructure

- [ ] 1.1 Create `src/hooks/useReducedMotion.ts` — returns `boolean` from `prefers-reduced-motion` media query
- [ ] 1.2 Create `src/components/atoms/AnimatedSection/AnimatedSection.tsx` — wrapper using framer-motion `motion.div` with fade-in-up on viewport enter, respects `useReducedMotion`
- [ ] 1.3 Create `src/components/atoms/AnimatedSection/index.ts` barrel export
- [ ] 1.4 Add `prefers-reduced-motion: reduce` media query to `src/app/globals.css` — disables all animations

## Phase 2: Provider Wiring

- [ ] 2.1 Wrap `Providers.tsx` children with `LazyMotion` from `framer-motion` using `domAnimation` features

## Phase 3: Section Animations

- [ ] 3.1 Wrap Hero content with `AnimatedSection` in `src/components/organisms/Hero/Hero.tsx`
- [ ] 3.2 Wrap HowItWorks content with `AnimatedSection` in `src/components/organisms/HowItWorks/HowItWorks.tsx`
- [ ] 3.3 Wrap Talent content with `AnimatedSection` in `src/components/organisms/Talent/Talent.tsx`
- [ ] 3.4 Wrap Companies content with `AnimatedSection` in `src/components/organisms/Companies/Companies.tsx`
- [ ] 3.5 Wrap Tournaments content with `AnimatedSection` in `src/components/organisms/Tournaments/Tournaments.tsx`
- [ ] 3.6 Wrap Networking content with `AnimatedSection` in `src/components/organisms/Networking/Networking.tsx`
- [ ] 3.7 Wrap Testimonials content with `AnimatedSection` in `src/components/organisms/Testimonials/Testimonials.tsx`
- [ ] 3.8 Wrap News content with `AnimatedSection` in `src/components/organisms/News/News.tsx`
- [ ] 3.9 Wrap CallToAction content with `AnimatedSection` in `src/components/organisms/CallToAction/CallToAction.tsx`
- [ ] 3.10 Wrap Newsletter content with `AnimatedSection` in `src/components/organisms/Newsletter/Newsletter.tsx`

## Phase 4: SEO — Structured Data & Static Files

- [ ] 4.1 Add JSON-LD `Organization` schema script to `src/app/[locale]/layout.tsx` `<head>` — name, url, logo, sameAs (GitHub, Twitter, Discord)
- [ ] 4.2 Create `public/robots.txt` — allow all, sitemap reference
- [ ] 4.3 Create `public/sitemap.xml` — homepage entry with `lastmod`

## Phase 5: Verification

- [ ] 5.1 Run `npm run build` — confirm zero errors
- [ ] 5.2 Visual check: animations trigger on scroll, no layout shift
- [ ] 5.3 Check `prefers-reduced-motion: reduce` disables animations in devtools
- [ ] 5.4 Verify single H1 in Hero (already correct — confirm)
- [ ] 5.5 Validate JSON-LD with Google Rich Results Test
- [ ] 5.6 Confirm robots.txt and sitemap.xml accessible at `/robots.txt` and `/sitemap.xml`
