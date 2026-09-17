'use client'

import { type ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import type { Messages } from 'next-intl'
import { LazyMotion, domAnimation } from 'framer-motion'

interface ProvidersProps {
  children: ReactNode
  locale: string
  messages: Messages
}

export const Providers = ({ children, locale, messages }: ProvidersProps) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </NextIntlClientProvider>
  )
}