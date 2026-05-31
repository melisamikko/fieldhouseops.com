import { CheckCircle2 } from 'lucide-react'

const tracks = [
  {
    title: 'Lead Capture & Booking',
    items: [
      'Instant response to all inquiries (text/voice/chat)',
      'Smart calendar booking with territory routing',
      'Smart lead qualification & source connection',
    ],
  },
  {
    title: 'Service Delivery',
    items: [
      'Day-of confirmations and arrival notifications',
      'Intelligent rescheduling and no-show recovery',
      'Upsell opportunities and add-on recommendations',
    ],
  },
  {
    title: 'Customer Retention',
    items: [
      'Strategic review and referral requests',
      'Lost estimate recovery and win-back campaigns',
      'Membership renewals and seasonal service reminders',
    ],
  },
]

export default function Platforms() {
  return (
    <section className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
            Full-Funnel Automation
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            Complete Customer Journey Automation
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Our automation platform covers every stage of the customer journey, from initial contact
            to long-term relationship building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="rounded-2xl border border-border bg-background p-8"
            >
              <h3 className="text-xl font-bold text-primary mb-6">{track.title}</h3>
              <ul className="space-y-4">
                {track.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
