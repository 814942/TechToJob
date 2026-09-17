import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { TournamentCard } from '@/components/molecules/TournamentCard'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'
import { tournaments } from '@/data/tournaments'

export const Tournaments: FC = () => {
  const t = useTranslations('tournaments')

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeader title={t('title')} subtitle={t('subtitle')} />
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
