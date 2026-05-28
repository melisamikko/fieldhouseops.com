'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bold text-sm tracking-widest text-white uppercase"
          >
            Fieldhouse Ops
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === href ? 'text-white' : 'text-muted hover:text-white'
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="/about#book" size="sm">Book a Call</Button>
          </div>

          <button
            className="md:hidden text-muted hover:text-white transition-colors"
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
                  pathname === href ? 'text-white' : 'text-muted hover:text-white'
                )}
              >
                {label}
              </Link>
            ))}
            <Button href="/about#book" size="sm" className="w-full" onClick={() => setOpen(false)}>
              Book a Call
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
