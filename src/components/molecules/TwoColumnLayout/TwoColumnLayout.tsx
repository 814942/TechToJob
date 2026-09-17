import { type FC, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TwoColumnLayoutProps {
  left: ReactNode
  right: ReactNode
  reverse?: boolean
  className?: string
}

export const TwoColumnLayout: FC<TwoColumnLayoutProps> = ({
  left,
  right,
  reverse = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 items-center gap-8 md:grid-cols-2',
        reverse && 'md:[&>*:first-child]:order-2',
        className
      )}
    >
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}
