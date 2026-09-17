import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle: string
  className?: string
  dark?: boolean
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
  dark = false,
}) => {
  return (
    <div className={cn('text-center', className)}>
      <h2
        className={cn(
          'text-3xl font-bold md:text-4xl',
          dark ? 'text-white' : 'text-primary'
        )}
      >
        {title}
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
