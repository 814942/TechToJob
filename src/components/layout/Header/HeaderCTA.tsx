import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { SITE } from '@/lib/constants'

export const HeaderCTA: FC = () => {
  const t = useTranslations('header')

  return (
    <a
      href={SITE.discord}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-accent/90 hover:shadow-md"
    >
      {t('cta')}
    </a>
  )
}
