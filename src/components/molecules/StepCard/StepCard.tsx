import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface StepCardProps {
  number: number
  title: string
  description: string
  className?: string
}

export const StepCard: FC<StepCardProps> = ({
  number,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn('text-center', className)}>
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-primary">
        {number}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-primary">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  )
}
