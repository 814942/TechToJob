'use client'

import { type FC, type FormEvent, useState } from 'react'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { Button } from '@/components/atoms/Button'
import { AnimatedSection } from '@/components/atoms/AnimatedSection'

export const Newsletter: FC = () => {
  const t = useTranslations('newsletter')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: integrate with newsletter service
    setEmail('')
  }

  return (
    <section className="bg-primary pb-12 pt-20">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <AnimatedSection>
          <SectionHeader
            title={t('title')}
            subtitle={t('subtitle')}
            dark
          />
          <form onSubmit={handleSubmit} className="mt-8">
            <label htmlFor="newsletter-email" className="sr-only">
              {t('placeholder')}
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('placeholder')}
                className="flex-1 rounded-lg border border-border bg-surface px-4 py-3 text-primary placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-glow"
              />
              <Button type="submit" variant="primary" size="md">
                {t('cta')}
              </Button>
            </div>
          </form>
          <p className="mt-4 text-sm text-white/60">{t('disclaimer')}</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
