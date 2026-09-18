import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface TournamentCardProps {
  title: string
  description: string
  status: 'open' | 'closed'
  statusLabel: string
  deadline: string
  deadlineLabel: string
  className?: string
}

export const TournamentCard: FC<TournamentCardProps> = ({
  title,
  description,
  status,
  statusLabel,
  deadline,
  deadlineLabel,
  className,
}) => {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-md',
        className
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <span
          className={cn(
            'rounded-full px-3 py-1 text-xs font-semibold',
            status === 'open'
              ? 'bg-accent text-primary'
              : 'bg-muted/20 text-primary'
          )}
        >
          {statusLabel}
        </span>
      </div>
      <p className="mb-4 text-muted">{description}</p>
      <p className="text-sm text-muted">
        {deadlineLabel} {deadline}
      </p>
    </div>
  )
}
