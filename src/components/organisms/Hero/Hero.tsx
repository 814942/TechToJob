import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { buttonVariants } from '@/components/atoms/Button'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const Hero: FC = () => {
  const t = useTranslations('hero')

  return (
    <section className="flex min-h-screen items-center justify-center">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-6 text-lg text-primary/80 md:text-xl">
            {t('subtitle')}
          </p>
          <div className="mt-8">
            <a
              href={SITE.discord}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "w-full md:w-auto"
              )}
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
