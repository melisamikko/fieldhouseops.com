import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const INTRINSIC_WIDTH = 615
const INTRINSIC_HEIGHT = 127

type BrandLogoProps = {
  className?: string
  /** Display height in pixels; width scales with aspect ratio */
  height?: number
  priority?: boolean
}

export default function BrandLogo({
  className,
  height = 32,
  priority = false,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Fieldhouse Ops home"
      className={cn('inline-flex items-center', className)}
    >
      <Image
        src="/fieldhouse-ops-logo.png"
        alt="Fieldhouse Ops"
        width={INTRINSIC_WIDTH}
        height={INTRINSIC_HEIGHT}
        className="w-auto"
        style={{ height }}
        quality={100}
        unoptimized
        priority={priority}
      />
    </Link>
  )
}
