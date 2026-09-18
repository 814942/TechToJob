'use client'

import { type FC } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { Globe } from 'lucide-react'

export const LanguageSwitcher: FC = () => {
  const t = useTranslations('header')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLocale = () => {
    const newLocale = locale === 'es' ? 'en' : 'es'
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <button
      onClick={toggleLocale}
      aria-label={t('langSwitch')}
      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-primary/70 transition-colors hover:bg-primary/5 hover:text-primary"
    >
      <Globe className="h-4 w-4" />
      <span>{locale === 'es' ? 'EN' : 'ES'}</span>
    </button>
  )
}
