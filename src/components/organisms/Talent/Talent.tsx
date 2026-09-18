import { type FC } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { FeatureList } from '@/components/molecules/FeatureList'
import { TwoColumnLayout } from '@/components/molecules/TwoColumnLayout'
import { Button } from '@/components/atoms/Button'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'
import { SITE } from '@/lib/constants'

const accentWordsMap: Record<string, string[]> = {
  en: ['talent'],
  es: ['talento'],
}

export const Talent: FC = () => {
  const t = useTranslations('talent')
  const locale = useLocale()
  const accentWords = accentWordsMap[locale] || accentWordsMap.en

  const left = (
    <div className="space-y-6">
      <SectionHeader
        title={t('title')}
        subtitle={t('subtitle')}
        className="text-left"
        accentWords={accentWords}
      />
      <FeatureList features={t.raw('features') as string[]} />
      <div>
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
    </div>
  )

  const right = (
    <div className="flex items-center justify-center">
      <Image
        src="/assets/SVG/ProfileMockup.svg"
        alt={t('placeholder')}
        width={400}
        height={320}
        className="h-auto w-full max-w-md"
      />
    </div>
  )

  return (
    <section id="talent" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <TwoColumnLayout left={left} right={right} />
        </AnimatedSection>
      </div>
    </section>
  )
}
