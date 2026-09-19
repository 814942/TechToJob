import { type FC } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Hash, MessageSquare, Users } from 'lucide-react'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { FeatureList } from '@/components/molecules/FeatureList'
import { TwoColumnLayout } from '@/components/molecules/TwoColumnLayout'
import { ExternalButton } from '@/components/atoms/ExternalButton'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'
import { SITE } from '@/lib/constants'

const accentWordsMap: Record<string, string[]> = {
  en: ['Networking'],
  es: ['Networking'],
}

export const Networking: FC = () => {
  const t = useTranslations('networking')
  const locale = useLocale()
  const accentWords = accentWordsMap[locale] || accentWordsMap.en

  const iconGrid = [
    { Icon: Hash, label: t('iconLabels.channels') },
    { Icon: MessageSquare, label: t('iconLabels.discussions') },
    { Icon: Users, label: t('iconLabels.community') },
  ]

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
    <div className="grid grid-cols-3 gap-4">
      {iconGrid.map(({ Icon, label }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center rounded-xl bg-surface p-6 shadow-sm"
        >
          <Icon className="mb-2 h-8 w-8 text-accent" />
          <span className="text-sm font-medium text-muted">{label}</span>
        </div>
      ))}
    </div>
  )

  return (
    <section id="networking" className="bg-surface-alt py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <TwoColumnLayout left={left} right={right} />
        </AnimatedSection>
      </div>
    </section>
  )
}
