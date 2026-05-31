import Hero from '@/components/sections/Hero'
import StatsTicker from '@/components/sections/StatsTicker'
import PlugAndPlay from '@/components/sections/PlugAndPlay'
import Platforms from '@/components/sections/Platforms'
import HowItWorks from '@/components/sections/HowItWorks'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsTicker />
      <PlugAndPlay />
      <Platforms />
      <HowItWorks />
      <FAQ />
      <CTASection />
    </>
  )
}
