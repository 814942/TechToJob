import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { Hash, MessageSquare, Users } from 'lucide-react'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { FeatureList } from '@/components/molecules/FeatureList'
import { TwoColumnLayout } from '@/components/molecules/TwoColumnLayout'
import { Button } from '@/components/atoms/Button'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'
import { SITE } from '@/lib/constants'

export const Networking: FC = () => {
  const t = useTranslations('networking')

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
    <section className="bg-surface-alt py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <TwoColumnLayout left={left} right={right} />
        </AnimatedSection>
      </div>
    </section>
  )
}
