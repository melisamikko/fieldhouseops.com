import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type BrandLogoProps = {
  className?: string
  /** Image height in pixels; width scales with aspect ratio */
  height?: number
  priority?: boolean
}

export default function BrandLogo({
  className,
  height = 32,
  priority = false,
}: BrandLogoProps) {
  const width = Math.round(height * (615 / 127))

  return (
    <Link
      href="/"
      aria-label="Fieldhouse Ops home"
      className={cn('inline-flex items-center', className)}
    >
      <Image
        src="/fieldhouse-ops-logo.png"
        alt="Fieldhouse Ops"
        width={width}
        height={height}
        className="w-auto"
        style={{ height }}
        priority={priority}
      />
    </Link>
  )
}
