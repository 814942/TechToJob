import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  photo?: string
  linkedin?: string
  className?: string
}

export const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  role,
  quote,
  photo,
  linkedin,
  className,
}) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className={cn(
        'flex h-full flex-col rounded-xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md',
        className
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary">
            {initials}
          </div>
        )}
        <div>
          <p className="font-semibold text-primary">{name}</p>
          <p className="text-sm text-muted">{role}</p>
        </div>
      </div>
      <blockquote className="italic text-muted">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-accent hover:underline"
        >
          LinkedIn
        </a>
      )}
    </div>
  )
}
