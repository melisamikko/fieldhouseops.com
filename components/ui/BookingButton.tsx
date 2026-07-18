import { ArrowRight } from 'lucide-react'
import { BOOKING_URL } from '@/lib/booking'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md'
}

const sizes = {
  sm: {
    button: 'gap-2.5 pl-5 pr-1 py-1 text-sm',
    circle: 'h-8 w-8',
    arrow: 14,
    exit: 'group-hover:translate-x-6',
    enter: '-translate-x-6',
  },
  md: {
    button: 'gap-4 pl-8 pr-1.5 py-1.5 text-base',
    circle: 'h-11 w-11',
    arrow: 18,
    exit: 'group-hover:translate-x-8',
    enter: '-translate-x-8',
  },
}

export default function BookingButton({ children, className, size = 'md' }: Props) {
  const s = sizes[size]

  return (
    <a
      href={BOOKING_URL}
      className={cn(
        'group glow-accent inline-flex items-center rounded-full bg-accent font-semibold text-white transition-colors hover:bg-accent-hover',
        s.button,
        className
      )}
    >
      {children}
      <span
        className={cn(
          'relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white',
          s.circle
        )}
      >
        <ArrowRight
          size={s.arrow}
          strokeWidth={3}
          className={cn(
            'text-accent transition-transform duration-300 ease-out motion-reduce:transform-none',
            s.exit
          )}
          aria-hidden
        />
        <ArrowRight
          size={s.arrow}
          strokeWidth={3}
          className={cn(
            'absolute text-accent transition-transform duration-300 ease-out group-hover:translate-x-0 motion-reduce:hidden',
            s.enter
          )}
          aria-hidden
        />
      </span>
    </a>
  )
}
