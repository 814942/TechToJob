'use client'

import { type FC, useRef, useEffect, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Globe, ExternalLink } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { SITE } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const NAV_LINKS = [
  { id: 'how-it-works', key: 'howItWorks' },
  { id: 'companies', key: 'companies' },
  { id: 'talent', key: 'talent' },
  { id: 'tournaments', key: 'tournaments' },
  { id: 'news', key: 'news' },
] as const

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('header')
  const navT = useTranslations('header.nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleLocale = () => {
    const newLocale = locale === 'es' ? 'en' : 'es'
    router.replace(pathname, { locale: newLocale })
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab' && containerRef.current) {
        const focusable = containerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'

      // Focus first element
      requestAnimationFrame(() => {
        const first = containerRef.current?.querySelector<HTMLElement>(
          'a[href], button'
        )
        first?.focus()
      })
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  const handleNavClick = (id: string) => {
    onClose()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label={t('menuClose')}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 top-16 z-50 w-full border-b border-border bg-surface shadow-lg md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 py-4">
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => handleNavClick(link.id)}
                        className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-primary/70 transition-colors hover:bg-primary/5 hover:text-primary"
                      >
                        {navT(link.key)}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <button
                  onClick={toggleLocale}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-primary/70 transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  <Globe className="h-4 w-4" />
                  <span>{locale === 'es' ? 'English' : 'Español'}</span>
                </button>

                <a
                  href={SITE.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-primary transition-all hover:bg-accent/90"
                >
                  {t('cta')}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
