import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
}: Props) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer'

  const variants = {
    primary: 'bg-accent text-white glow-accent hover:bg-accent-hover',
    ghost: 'border border-border text-white hover:border-accent hover:text-accent',
  }

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
