import BookingButton from '@/components/ui/BookingButton'
import TypewriterRole from '@/components/ui/TypewriterRole'

const STATS = [
  { number: '12+', label: 'field service platforms supported' },
  { number: '12+ yrs', label: 'building and automating systems' },
  { number: '$5M+', label: 'revenue generated for clients' },
  { number: '1M+', label: 'site impressions driven for clients' },
] as const

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div className="w-[min(90vw,700px)] h-[min(60vw,420px)] bg-accent/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1] mb-5">
          <span className="block">Your <TypewriterRole /></span>
          <span className="block">is <span className="text-accent">ready.</span></span>
        </h1>

        <div className="max-w-[640px] mx-auto mb-6">
          <p className="text-[17px] text-muted leading-[1.7]">
            AI-powered systems that capture every lead and book the job automatically, built for field service businesses ready to scale without hiring, including HVAC, plumbing and electrical.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[640px] mx-auto mb-8 sm:mb-10">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface border border-border rounded-xl px-3 py-5 text-center"
            >
              <p className="text-2xl font-medium text-primary mb-1">{stat.number}</p>
              <p className="text-[13px] text-muted leading-snug m-0">{stat.label}</p>
            </div>
          ))}
        </div>

        <BookingButton>Let&apos;s Talk</BookingButton>
      </div>
    </section>
  )
}
