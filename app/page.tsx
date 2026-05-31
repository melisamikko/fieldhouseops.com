import Hero from '@/components/sections/Hero'
import PainPoints from '@/components/sections/PainPoints'
import PlugAndPlay from '@/components/sections/PlugAndPlay'
import Platforms from '@/components/sections/Platforms'
import HowItWorks from '@/components/sections/HowItWorks'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <PlugAndPlay />
      <PainPoints />
      <Platforms />
      <HowItWorks />
      <FAQ />
      <CTASection />
    </>
  )
}
