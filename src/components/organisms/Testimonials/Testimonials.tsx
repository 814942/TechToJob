import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { TestimonialCard } from '@/components/molecules/TestimonialCard'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'

interface TestimonialItem {
  name: string
  role: string
  quote: string
}

export const Testimonials: FC = () => {
  const t = useTranslations('testimonials')
  const items = t.raw('items') as TestimonialItem[]

  return (
    <section id="testimonials" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeader title={t('title')} subtitle={t('subtitle')} />
        </AnimatedSection>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.1} className="h-full">
              <TestimonialCard
                name={item.name}
                role={item.role}
                quote={item.quote}
                className="h-full"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
