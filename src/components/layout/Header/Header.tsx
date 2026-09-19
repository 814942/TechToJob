'use client'

import { type FC, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { HeaderNav } from './HeaderNav'
import { MobileMenu } from './MobileMenu'
import { ExternalButton } from '@/components/atoms/ExternalButton'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { SITE } from '@/lib/constants'

interface HeaderProps {
  locale: string
}

export const Header: FC<HeaderProps> = ({ locale }) => {
  const t = useTranslations('header')
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 16)

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all ${
        hasScrolled
          ? 'border-border bg-surface/95 shadow-sm'
          : 'border-border/30 bg-surface/80'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Left: Logo */}
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/assets/SVG/Logo.svg"
            alt="TechToJob"
            width={200}
            height={30}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Center: Desktop nav */}
        <HeaderNav />

        {/* Right: LanguageSwitcher + CTA (hidden on mobile) */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <ExternalButton href={SITE.discord} variant="primary" size="sm">
            {t('cta')}
          </ExternalButton>
        </div>

        {/* Mobile: Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? t('menuClose') : t('menuOpen')}
          aria-expanded={isOpen}
          className="flex items-center justify-center rounded-lg p-2 text-primary/70 transition-colors hover:bg-primary/5 hover:text-primary md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  )
}
