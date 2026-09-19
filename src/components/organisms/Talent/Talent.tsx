import { type FC } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { FeatureList } from '@/components/molecules/FeatureList'
import { TwoColumnLayout } from '@/components/molecules/TwoColumnLayout'
import { ExternalButton } from '@/components/atoms/ExternalButton'
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
        <ExternalButton href={SITE.discord} variant="primary" size="lg">
          {t('cta')}
        </ExternalButton>
      </div>
    </div>
  )

  const right = (
    <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-surface-alt shadow-xl shadow-primary/5 transition-shadow hover:shadow-2xl">
      <Image
        src="/assets/SVG/ProfileMockup.svg"
        alt={t('placeholder')}
        width={352}
        height={272}
        className="block h-auto w-full"
      />
    </div>
  )

  return (
    <section id="talent" className="bg-surface py-[5.75rem]">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <TwoColumnLayout left={left} right={right} />
        </AnimatedSection>
      </div>
    </section>
  )
}
