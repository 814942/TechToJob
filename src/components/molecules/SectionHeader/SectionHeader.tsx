import { type FC, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle: string
  className?: string
  dark?: boolean
  accentWords?: string[]
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
    // Strip punctuation for matching but keep original for rendering
    const stripped = word.replace(/[^\w]/g, '').toLowerCase()
    const isAccent = accentWords.some(
      (accent) => accent.toLowerCase() === stripped
    )
    if (isAccent) {
      return (
        <span key={i} className="text-accent">
          {word}
        </span>
      )
    }
    // Keep spaces between words
    return i < words.length - 1 ? `${word} ` : word
  })
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
  dark = false,
  accentWords,
}) => {
  return (
    <div className={cn('text-center', className)}>
      <h2
        className={cn(
          'text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl',
          dark ? 'text-white' : 'text-primary'
        )}
      >
        {renderTitleWithAccents(title, accentWords)}
      </h2>
      <p
        className={cn(
          'mt-4 text-lg',
          dark ? 'text-white/70' : 'text-muted'
        )}
      >
        {subtitle}
      </p>
    </div>
  )
}
