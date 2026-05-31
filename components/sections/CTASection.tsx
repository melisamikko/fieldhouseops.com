import GHLEmbed from '@/components/ui/GHLEmbed'

type Props = {
  title?: string
  subtitle?: string
  embedCode?: string
}

export default function CTASection({
  title = 'Ready to Stop Doing This Manually?',
  subtitle =
    "Book a free 30-minute strategy call. We'll audit your current process and show you exactly what we'd automate — no pitch, no pressure.",
  embedCode,
}: Props) {
  return (
    <section id="book" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-lg text-muted max-w-xl mx-auto">{subtitle}</p>
        </div>
        <GHLEmbed type="calendar" embedCode={embedCode} height={700} />
      </div>
    </section>
  )
}
