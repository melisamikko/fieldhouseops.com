'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bold text-sm tracking-widest text-primary uppercase"
          >
            Fieldhouse Ops
          </Link>

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === href ? 'text-primary' : 'text-muted hover:text-primary'
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-muted hover:text-primary transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-border space-y-4">
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block text-sm font-medium transition-colors',
                  pathname === href ? 'text-primary' : 'text-muted hover:text-primary'
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
