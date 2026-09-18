import { type FC } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { TournamentCard } from '@/components/molecules/TournamentCard'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'
import { tournaments } from '@/data/tournaments'

const accentWordsMap: Record<string, string[]> = {
  en: ['Tournaments'],
  es: ['Torneos'],
}

export const Tournaments: FC = () => {
  const t = useTranslations('tournaments')
  const locale = useLocale()
  const accentWords = accentWordsMap[locale] || accentWordsMap.en

  return (
    <section id="tournaments" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeader
            title={t('title')}
            subtitle={t('subtitle')}
            accentWords={accentWords}
          />
        </AnimatedSection>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament, index) => (
            <AnimatedSection key={tournament.title} delay={index * 0.1}>
              <TournamentCard
                title={tournament.title}
                description={tournament.description}
                status={tournament.status}
                statusLabel={t(`status.${tournament.status}`)}
                deadline={tournament.deadline}
                deadlineLabel={t('deadline')}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
