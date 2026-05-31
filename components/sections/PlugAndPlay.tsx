import { Plug } from 'lucide-react'
import { integrations } from '@/lib/integrations'

export default function PlugAndPlay() {
  return (
    <section id="integrations" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-5">
            <Plug size={22} className="text-accent" aria-hidden />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Plug-and-Play
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Works With the Tools You Already Use
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We connect your field service platform and GoHighLevel into one automated system —
            no rip-and-replace, no starting from scratch.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {integrations.map(({ name, logo }) => (
            <img
              key={name}
              src={logo}
              alt={name}
              className="h-10 sm:h-12 w-auto max-w-full object-contain"
            />
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-10 max-w-xl mx-auto">
          Don&apos;t see your platform?{' '}
          <span className="text-primary font-medium">
            We integrate with most tools via API, Zapier, or Make.
          </span>
        </p>
      </div>
    </section>
  )
}
