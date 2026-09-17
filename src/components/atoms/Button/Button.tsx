import { type ButtonHTMLAttributes, type FC, type ReactNode, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-semibold transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-primary hover:bg-accent/90',
        secondary:
          'border border-border bg-transparent text-primary hover:border-glow/50',
        ghost: 'bg-transparent text-primary hover:bg-primary/5',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          'w-full md:w-auto',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants, type ButtonProps }
