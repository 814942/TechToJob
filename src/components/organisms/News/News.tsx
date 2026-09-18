import { type FC } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { NewsCard } from '@/components/molecules/NewsCard'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'

interface NewsItem {
  title: string
  date: string
  category: string
  excerpt: string
}

const accentWordsMap: Record<string, string[]> = {
  en: ['News'],
  es: ['Noticias'],
}

export const News: FC = () => {
  const t = useTranslations('news')
  const locale = useLocale()
  const accentWords = accentWordsMap[locale] || accentWordsMap.en
  const items = t.raw('items') as NewsItem[]

  return (
    <section id="news" className="bg-surface-alt py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeader
            title={t('title')}
            subtitle={t('subtitle')}
            accentWords={accentWords}
          />
        </AnimatedSection>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <NewsCard
                title={item.title}
                date={item.date}
                category={item.category}
                excerpt={item.excerpt}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
