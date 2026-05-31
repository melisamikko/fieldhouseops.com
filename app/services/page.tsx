import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import PlugAndPlay from '@/components/sections/PlugAndPlay'
import Platforms from '@/components/sections/Platforms'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services — Fieldhouse Ops',
  description:
    'Done-for-you sales automation and CRM setup. We specialize in GoHighLevel and HubSpot.',
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

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden bg-background bg-grid">
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          <div className="w-[700px] h-[300px] bg-accent/8 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
            Full-Funnel Automation,
            <br />
            <span className="text-accent">Built for Your Business</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            We build automated sales systems inside GoHighLevel and HubSpot — from first click to
            booked appointment.
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
              <h2 className="text-4xl font-bold text-primary mt-3 mb-6">
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
                      <span className="font-semibold text-primary">{title}</span>
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
                      <div className="text-primary font-medium text-sm">{step}</div>
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

      <PlugAndPlay />
      <Platforms />
      <CTASection />
    </>
  )
}
