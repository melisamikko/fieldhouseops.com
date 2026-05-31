import type { Metadata } from 'next'
import GHLEmbed from '@/components/ui/GHLEmbed'

export const metadata: Metadata = {
  title: 'About — Fieldhouse Ops',
  description:
    'Learn about Fieldhouse Ops and book a free strategy call to get started with sales automation.',
}

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden bg-background bg-grid">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[400px] bg-cyan/5 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
            Built for the People
            <br />
            <span className="text-accent">Who Hate Busywork</span>
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            Fieldhouse Ops exists because too many businesses are losing deals to slow follow-up,
            inconsistent nurture, and manual processes that should have been automated yesterday.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-muted leading-relaxed text-lg">
            <p>
              We're a specialized automation shop with deep expertise in GoHighLevel and HubSpot.
              We've spent years building sales and marketing systems for businesses across
              industries — and we know exactly what works.
            </p>
            <p>
              Our model is simple:{' '}
              <span className="text-primary font-medium">
                we do it for you, or we teach you how
              </span>
              . Either way, you end up with a working automation system that fills your pipeline
              without you having to chase every lead manually.
            </p>
            <p>
              We build everything inside your CRM — not some third-party tool you have to learn and
              maintain. When we hand it off, it's yours and it runs.
            </p>
          </div>
        </div>
      </section>

      <section id="book" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] bg-accent/5 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Let's Talk About Your Business
            </h2>
            <p className="text-lg text-muted max-w-xl mx-auto">
              Book a free 30-minute strategy call. We'll look at your current process and tell you
              exactly what we'd build.
            </p>
          </div>
          <GHLEmbed type="calendar" height={700} />
        </div>
      </section>

      <section className="py-20 bg-surface border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Prefer to Send a Message?</h2>
            <p className="text-muted">
              Use the form below or email us directly at{' '}
              <a
                href="mailto:hello@fieldhouseops.com"
                className="text-accent hover:underline"
              >
                hello@fieldhouseops.com
              </a>
            </p>
          </div>
          <GHLEmbed type="form" height={500} />
        </div>
      </section>
    </>
  )
}
