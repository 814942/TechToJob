import { type AnchorHTMLAttributes, type FC, type ReactNode } from 'react'
import { buttonVariants } from '@/components/atoms/Button'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

interface ExternalButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'>,
    VariantProps<typeof buttonVariants> {
  href: string
  children: ReactNode
  className?: string
  linkClassName?: string
}

export const ExternalButton: FC<ExternalButtonProps> = ({
  href,
  children,
  linkClassName,
  className,
  ...buttonProps
}) => {
  const { variant, size, ...anchorProps } = buttonProps

  return (
    <a
      {...anchorProps}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant, size }),
        'w-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 md:w-auto',
        className,
        linkClassName
      )}
    >
      {children}
    </a>
  )
}