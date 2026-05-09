import { Footer } from '@/components/layout/footer'

import { Hero } from '@/components/sections/hero'
import { ProblemSection } from '@/components/sections/problem-section'
import { SolutionSection } from '@/components/sections/solution-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { HowItWorks } from '@/components/sections/how-it-works'
import { TrustSection } from '@/components/sections/trust-section'
import { SocialProof } from '@/components/sections/social-proof'
import { EarlyAccess } from '@/components/sections/early-access'
import { StickyCTA } from '@/components/sections/sticky-cta'

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorks />
      <TrustSection />
      <SocialProof />
      <EarlyAccess />
      <Footer />
      <StickyCTA />
    </main>
  )
}
