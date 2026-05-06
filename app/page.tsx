import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { SolutionSection } from '@/components/solution-section'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorks } from '@/components/how-it-works'
import { TrustSection } from '@/components/trust-section'
import { SocialProof } from '@/components/social-proof'
import { EarlyAccess } from '@/components/early-access'
import { Footer } from '@/components/footer'
import { StickyCTA } from '@/components/sticky-cta'

export default function Home() {
  return (
    <main className="relative">
      <Header />
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
