import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-sm tracking-widest text-primary uppercase">Fieldhouse Ops</p>
            <p className="text-muted text-sm mt-1">AI Enablement & Sales Automation</p>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm text-muted hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-sm text-muted hover:text-primary transition-colors">Services</Link>
            <Link href="/about" className="text-sm text-muted hover:text-primary transition-colors">About</Link>
          </div>

          <a
            href="mailto:hello@fieldhouseops.com"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            hello@fieldhouseops.com
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Fieldhouse Ops. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
