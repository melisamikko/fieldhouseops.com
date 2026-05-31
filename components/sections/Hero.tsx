import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
      <Image
        src="/hero.jpeg"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-24">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          Do you want to{' '}
          <span className="text-accent">scale your business?</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI-powered operations for small businesses that are ready to scale without hiring.
        </p>

        <Button href="https://api.leadconnectorhq.com/widget/booking/AbI2CP9wUW3wzclGFr49" size="lg" className="uppercase tracking-wider">
          I&apos;m ready to scale
        </Button>
      </div>
    </section>
  )
}
