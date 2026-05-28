import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: Props) {
  return (
    <div className={cn('bg-surface border border-border rounded-xl p-6', className)}>
      {children}
    </div>
  )
}
