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
        <span key={index} className="text-accent">
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
          'text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl',
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
