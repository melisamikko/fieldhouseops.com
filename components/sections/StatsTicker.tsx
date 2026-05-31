'use client'

import { useEffect, useState } from 'react'

interface Stat {
  prefix: string
  value: number
  suffix: string
  description: string
  currency?: boolean
}

const slides = [
  {
    label: 'The Problem Right Now',
    stats: [
      { prefix: '', value: 62, suffix: '%', description: 'of your calls go unanswered — every single one is a lost customer' },
      { prefix: '', value: 67, suffix: '%', description: 'of callers who hit voicemail will never call back' },
      { prefix: '$', value: 1200, suffix: '', description: 'in revenue lost per missed lead, every month', currency: true },
    ] as Stat[],
  },
  {
    label: 'What Changes With Voice AI',
    stats: [
      { prefix: '', value: 100, suffix: '%', description: 'of calls answered — 24/7, zero hold time, zero voicemails' },
      { prefix: '', value: 94, suffix: '%', description: 'of callers prefer AI over being put on hold or hitting voicemail' },
      { prefix: '', value: 25, suffix: '+', description: 'languages your AI speaks — it sounds like your audience' },
    ] as Stat[],
  },
  {
    label: 'Already Happening at Scale',
    stats: [
      { prefix: '', value: 200, suffix: 'K+', description: 'appointments booked automatically — while businesses sleep' },
      { prefix: '', value: 175, suffix: 'K+', description: 'hours saved for businesses already using Voice AI' },
      { prefix: '< ', value: 10, suffix: ' min', description: 'to go live — your competitors already have' },
    ] as Stat[],
  },
]

function StatItem({ stat, animKey }: { stat: Stat; animKey: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)
    const duration = 2500
    const target = stat.value
    let startTime: number | null = null
    let rafId: number

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4) // easeOutQuart
      setCount(Math.round(eased * target))
      if (progress < 1) rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [animKey, stat.value])

  const display = stat.currency ? count.toLocaleString() : count

  return (
    <div>
      <p className="text-5xl sm:text-6xl font-bold text-primary leading-none mb-3 tabular-nums">
        {stat.prefix}{display}{stat.suffix}
      </p>
      <p className="text-sm text-primary/70 leading-snug max-w-[240px]">
        {stat.description}
      </p>
    </div>
  )
}

export default function StatsTicker() {
  const [active, setActive] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
      setAnimKey((prev) => prev + 1)
    }, 10000)
    return () => clearInterval(id)
  }, [])

  const { label, stats } = slides[active]

  function goTo(i: number) {
    setActive(i)
    setAnimKey((prev) => prev + 1)
  }

  return (
    <section className="bg-[#EDEDEF] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#888] mb-6">
          {label}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} animKey={animKey} />
          ))}
        </div>

        <div className="flex items-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === active ? 'bg-primary' : 'bg-primary/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
