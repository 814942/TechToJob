'use client'

import { type ReactNode, useEffect, useState } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface AnimatedSectionProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  delay?: number
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  ...rest
}: AnimatedSectionProps) => {
  const prefersReduced = useReducedMotion()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  // SSR fallback: render without animation
  if (!isMounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
