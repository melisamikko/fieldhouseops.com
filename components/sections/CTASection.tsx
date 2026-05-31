type Props = {
  title?: string
  subtitle?: string
}

export default function CTASection({
  title = 'Ready to Stop Doing This Manually?',
  subtitle =
    "Book a free 30-minute strategy call. We'll audit your current process and show you exactly what we'd automate — no pitch, no pressure.",
}: Props) {
  return (
    <section id="book" className="py-24 relative overflow-hidden bg-[#001f3f]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">{subtitle}</p>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/AbI2CP9wUW3wzclGFr49"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white font-semibold text-lg px-10 py-4 rounded-xl hover:bg-accent/90 transition-colors"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  )
}
