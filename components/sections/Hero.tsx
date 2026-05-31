import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background bg-grid">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-24">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
          Do you want to{' '}
          <span className="text-accent">scale your business?</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          AI-powered operations for small businesses that are ready to scale without hiring.
        </p>

        <Button href="/about#book" size="lg" className="uppercase tracking-wider">
          I&apos;m ready to scale
        </Button>
      </div>
    </section>
  )
}
