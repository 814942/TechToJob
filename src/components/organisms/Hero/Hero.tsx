import { type FC, type ReactNode } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { ExternalButton } from '@/components/atoms/ExternalButton'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'
import { SITE } from '@/lib/constants'

const accentWordsMap: Record<string, string[]> = {
  en: ['CVs', ''],
  es: ['CVs', ''],
}

const renderTitleWithAccents = (
  title: string,
  accentWords?: string[]
): ReactNode => {
  if (!accentWords || accentWords.length === 0) {
    return title
  }

  const words = title.split(' ')
  return words.map((word, i) => {
    const stripped = word.replace(/[^\w]/g, '').toLowerCase()
    const isAccent = accentWords.some(
      (accent) => accent.toLowerCase() === stripped
    )
    if (isAccent) {
      return (
        <span key={i} className="text-accent pr-5 underline">
          {word}
        </span>
      )
    }
    return i < words.length - 1 ? `${word} ` : word
  })
}

export const Hero: FC = () => {
  const t = useTranslations('hero')
  const locale = useLocale()
  const accentWords = accentWordsMap[locale] || accentWordsMap.en

  return (
    <section id="hero" className="flex min-h-screen items-center justify-center">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary md:text-7xl lg:text-8xl">
            {renderTitleWithAccents(t('title'), accentWords)}
          </h1>
          <p className="mt-6 text-lg text-primary/80 md:text-xl">
            {t('subtitle')}
          </p>
          <div className="mt-8">
            <ExternalButton href={SITE.discord} variant="primary" size="lg">
              {t('cta')}
            </ExternalButton>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
