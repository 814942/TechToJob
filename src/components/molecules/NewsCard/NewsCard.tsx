import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface NewsCardProps {
  title: string
  date: string
  category: string
  excerpt: string
  className?: string
}

export const NewsCard: FC<NewsCardProps> = ({
  title,
  date,
  category,
  excerpt,
  className,
}) => {
  const formattedDate = new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))

  return (
    <div
      className={cn(
        'rounded-xl border border-border/50 bg-surface/60 p-6 shadow-md backdrop-blur-md transition-shadow hover:shadow-lg',
        className
      )}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
          {category}
        </span>
        <time className="text-sm text-muted" dateTime={date}>
          {formattedDate}
        </time>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-primary">{title}</h3>
      <p className="text-muted">{excerpt}</p>
    </div>
  )
}
