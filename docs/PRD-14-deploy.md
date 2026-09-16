# PRD-14: Deploy & CI/CD

> **Status:** Draft  
> **Version:** 1.0  
> **Date:** 2026-09-16  
> **Parent:** PRD-00-foundation.md

---

## 1. Summary

Deployment setup for Vercel with automatic deploys from main branch.

---

## 2. Requirements

### 2.1 Deployment

- Platform: Vercel
- Branch: `main` triggers production deploy
- Preview deploys for PRs
- Custom domain (if available)

### 2.2 Environment

- Node.js 18+
- npm as package manager
- Build command: `npm run build`
- Output: `.next`

### 2.3 CI/CD

- Lint on PR
- Build on PR
- Type check on PR
- Lighthouse audit on PR (optional)

---

## 3. Acceptance Criteria

- [ ] Vercel project configured
- [ ] Main branch auto-deploys
- [ ] PR preview deploys work
- [ ] Build succeeds on Vercel
- [ ] No build errors
- [ ] Site accessible at deployment URL

---

## 4. Out of Scope

- Custom domains
- Analytics
- Error tracking (Sentry)
- Performance monitoring
