import { type FC } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { Button } from '@/components/atoms/Button'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'
import { SITE } from '@/lib/constants'

const accentWordsMap: Record<string, string[]> = {
  en: ['build'],
  es: ['construir'],
}

export const CallToAction: FC = () => {
  const t = useTranslations('cta')
  const locale = useLocale()
  const accentWords = accentWordsMap[locale] || accentWordsMap.en

  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <AnimatedSection>
          <SectionHeader
            title={t('title')}
            subtitle={t('subtitle')}
            dark
            accentWords={accentWords}
          />
          <div className="mt-8">
            <a
              href={SITE.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="primary" size="lg">
                {t('cta')}
              </Button>
            </a>
        </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
