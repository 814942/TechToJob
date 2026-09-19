import { type FC, type ReactNode } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { ExternalButton } from '@/components/atoms/ExternalButton'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'
import { SITE } from '@/lib/constants'

const accentWordsMap: Record<string, string[]> = {
  en: ['CVs into the void'],
  es: ['CVs al vacío'],
}

const renderTitleWithAccents = (
  title: string,
  accentWords?: string[]
): ReactNode => {
  if (!accentWords || accentWords.length === 0) {
    return title
  }

  const words = title.split(' ')
  const normalize = (value: string) =>
    value.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase()
  const accents = accentWords.map((accent) => accent.split(' ').map(normalize))
  const nodes: ReactNode[] = []

  for (let index = 0; index < words.length; ) {
    const accent = accents.find((candidate) =>
      candidate.every(
        (part, offset) => normalize(words[index + offset] ?? '') === part
      )
    )

    if (accent) {
      nodes.push(
        <span key={index} className="text-accent underline">
          {words.slice(index, index + accent.length).join(' ')}
        </span>
      )
      index += accent.length
    } else {
      nodes.push(words[index])
      index += 1
    }

    if (index < words.length) nodes.push(' ')
  }

  return nodes
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
