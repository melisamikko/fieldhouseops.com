import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import Platforms from '@/components/sections/Platforms'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services — Fieldhouse Ops',
  description:
    'Done-for-you sales automation and CRM setup, or hands-on training. We specialize in GoHighLevel and HubSpot.',
}

const dfyDetails = [
  {
    title: 'Landing Pages',
    desc: 'High-converting pages built inside GHL or HubSpot — optimized for your offer.',
  },
  {
    title: 'Ad Campaigns',
    desc: 'We set up and manage your paid campaigns — Google, Meta, or both.',
  },
  {
    title: 'Nurture Sequences',
    desc: 'Multi-touch automated follow-up via email, SMS, and voicemail drops.',
  },
  {
    title: 'Appointment Setting',
    desc: 'Automated booking flows that put qualified prospects on your calendar.',
  },
  {
    title: 'Full Handoff',
    desc: 'We hand you a warm pipeline. You show up, do the work, close deals.',
  },
]

const flowSteps = [
  'Ad or Organic Lead',
  'Landing Page Capture',
  'Automated Nurture',
  'Appointment Booked',
  'You Close the Deal',
]

const teachOutcomes = [
  'A fully documented SOP for your automation system',
  'Hands-on training in GHL or HubSpot',
  'Campaign templates and workflow blueprints',
  'A working automation you can manage in-house',
  'Continued access to support and Q&A',
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden bg-background bg-grid">
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          <div className="w-[700px] h-[300px] bg-accent/8 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Full-Funnel Automation,
            <br />
            <span className="gradient-text-accent">Built for Your Business</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            We specialize in two things: building automated sales systems inside GoHighLevel and
            HubSpot, and teaching you how to run them yourself.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Done For You
              </span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6">
                We Build the Machine.
                <br />
                You Work the Pipeline.
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                From the first ad click to a booked appointment on your calendar — we design,
                build, and launch the entire automation system. Once it's live, it runs for you.
                You just show up and close.
              </p>
              <ul className="space-y-4">
                {dfyDetails.map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-accent mt-0.5 shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold text-white">{title}</span>
                      <span className="text-muted"> — {desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-10">
              <p className="text-center text-muted text-xs font-semibold uppercase tracking-wider mb-8">
                Your New Sales Flow
              </p>
              <div className="space-y-4">
                {flowSteps.map((step, i) => (
                  <div key={step}>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div className="text-white font-medium text-sm">{step}</div>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="ml-4 mt-1 w-px h-4 bg-accent/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl border border-border bg-surface p-10 order-2 lg:order-1">
              <p className="text-white font-semibold text-sm mb-6">What you'll walk away with:</p>
              <ul className="space-y-4">
                {teachOutcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span className="text-cyan shrink-0 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan">
                We Teach You
              </span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6">
                Learn to Own
                <br />
                Your Automation
              </h2>
              <p className="text-muted leading-relaxed">
                Prefer to run things in-house? We'll train you and your team to build, manage, and
                scale your automation yourself. Custom sessions, real walkthroughs, and templates
                you keep forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Platforms />
      <CTASection />
    </>
  )
}
