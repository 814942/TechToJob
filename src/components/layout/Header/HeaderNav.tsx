'use client'

import { type FC } from 'react'
import { useTranslations } from 'next-intl'

const NAV_LINKS = [
  { id: 'how-it-works', key: 'howItWorks' },
  { id: 'companies', key: 'companies' },
  { id: 'talent', key: 'talent' },
  { id: 'tournaments', key: 'tournaments' },
  { id: 'news', key: 'news' },
] as const

export const HeaderNav: FC = () => {
  const t = useTranslations('header.nav')

  return (
    <nav aria-label="Main navigation" className="hidden md:block">
      <ul className="flex gap-6">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="text-sm font-medium text-primary/70 transition-colors hover:text-primary"
            >
              {t(link.key)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
