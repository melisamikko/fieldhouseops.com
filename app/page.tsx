import Hero from '@/components/sections/Hero'
import PainPoints from '@/components/sections/PainPoints'
import ServiceTracks from '@/components/sections/ServiceTracks'
import Platforms from '@/components/sections/Platforms'
import HowItWorks from '@/components/sections/HowItWorks'
import SocialProof from '@/components/sections/SocialProof'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <ServiceTracks />
      <Platforms />
      <HowItWorks />
      <SocialProof />
      <CTASection />
    </>
  )
}
