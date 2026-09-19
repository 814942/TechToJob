'use client'

import { type ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import type { Messages } from 'next-intl'
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'

interface ProvidersProps {
  children: ReactNode
  locale: string
  messages: Messages
  timeZone: string
}

export const Providers = ({ children, locale, messages, timeZone }: ProvidersProps) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <LazyMotion features={domAnimation}>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </NextIntlClientProvider>
  )
}