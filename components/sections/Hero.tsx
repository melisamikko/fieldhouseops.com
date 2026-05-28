import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background bg-grid">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-8 uppercase tracking-wider">
          GoHighLevel + HubSpot Experts
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          We Automate Your Sales.
          <br className="hidden sm:block" />
          <span className="gradient-text-accent"> You Close the Deals.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Fieldhouse Ops builds and deploys full-funnel automation — from landing pages and ads to
          nurture campaigns and booked appointments. Handed right to you, ready to work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/about#book" size="lg">
            Book a Strategy Call
          </Button>
          <Button href="#how-it-works" variant="ghost" size="lg">
            See How It Works <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
