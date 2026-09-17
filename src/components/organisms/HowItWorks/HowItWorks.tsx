import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { StepCard } from '@/components/molecules/StepCard'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'

export const HowItWorks: FC = () => {
  const t = useTranslations('howItWorks')

  const steps = t.raw('steps') as Array<{ title: string; description: string }>

  return (
    <section className="bg-surface-alt py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeader title={t('title')} subtitle={t('subtitle')} />
        </AnimatedSection>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.1}>
              <StepCard
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
