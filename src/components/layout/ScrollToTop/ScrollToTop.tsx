'use client'

import { type FC, useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export const ScrollToTop: FC = () => {
  const t = useTranslations('header')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'instant' : 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label={t('scrollToTop')}
      className={cn(
        'fixed bottom-8 right-8 z-40 rounded-full bg-accent p-3 text-primary shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
