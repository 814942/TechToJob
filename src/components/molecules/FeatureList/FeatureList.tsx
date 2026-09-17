import { type FC } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureListProps {
  features: string[]
  className?: string
}

export const FeatureList: FC<FeatureListProps> = ({ features, className }) => {
  return (
    <ul className={cn('space-y-3', className)}>
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
          <span className="text-muted">{feature}</span>
        </li>
      ))}
    </ul>
  )
}
