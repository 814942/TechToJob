import { type FC, type ReactNode } from 'react'
import { Button, type ButtonProps } from '@/components/atoms/Button'
import { cn } from '@/lib/utils'

interface ExternalButtonProps extends Omit<ButtonProps, 'children'> {
  href: string
  children: ReactNode
  linkClassName?: string
}

export const ExternalButton: FC<ExternalButtonProps> = ({
  href,
  children,
  linkClassName,
  ...buttonProps
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('inline-block', linkClassName)}
    >
      <Button {...buttonProps}>{children}</Button>
    </a>
  )
}