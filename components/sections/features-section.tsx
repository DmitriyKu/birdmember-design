'use client'

import { useEffect, useState } from 'react'
import { Calendar, MessageCircle, Radar, ShieldCheck } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 px-4 relative overflow-hidden" aria-label="Core features of the airline crew app">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#053d70] to-background" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Built for cabin crew community
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to make the most of your layovers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard icon={Radar} tone="primary" title="See who&apos;s in your layover city" description="Real-time radar shows verified crew members nearby during your layover.">
            <RadarMockup />
          </FeatureCard>

          <FeatureCard icon={Calendar} tone="secondary" title="Plan your layovers" description="Add your upcoming trips and see who else will be there.">
            <TimelineMockup />
          </FeatureCard>

          <FeatureCard icon={MessageCircle} tone="primary" title="Start instantly" description="Connect with a tap. No awkward intros needed.">
            <ChatMockup />
          </FeatureCard>

          <FeatureCard icon={ShieldCheck} tone="secondary" title="Only verified airline crew" description="Every member is verified. No passengers. No fakes.">
            <VerificationMockup />
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}

type FeatureCardProps = {
  icon: React.ElementType
  tone: 'primary' | 'secondary'
  title: string
  description: string
  children: React.ReactNode
}

function FeatureCard({ icon: Icon, tone, title, description, children }: FeatureCardProps) {
  const glowClass = tone === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-secondary/10 group-hover:bg-secondary/20'
  const iconClass = tone === 'primary' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'

  return (
    <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden">
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 transition-colors ${glowClass}`} aria-hidden="true" />

      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${iconClass}`}>
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text-white/70 mb-6">{description}</p>

        {children}
      </div>
    </div>
  )
}

function RadarMockup() {
  const [activeCards, setActiveCards] = useState([false, false, false])

  useEffect(() => {
    const intervals = [
      setTimeout(() => setActiveCards((prev) => [true, prev[1], prev[2]]), 500),
      setTimeout(() => setActiveCards((prev) => [prev[0], true, prev[2]]), 1200),
      setTimeout(() => setActiveCards((prev) => [prev[0], prev[1], true]), 1800),
    ]

    return () => intervals.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative h-48 bg-background/50 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border border-secondary/30 animate-radar-pulse" />
        <div className="absolute w-32 h-32 rounded-full border border-secondary/30 animate-radar-pulse-delayed" />
      </div>

      <RadarAvatar className="top-8 left-12" active={activeCards[0]} initials="JD" tone="primary" />
      <RadarAvatar className="top-16 right-16" active={activeCards[1]} initials="SK" tone="secondary" />
      <RadarAvatar className="bottom-8 left-1/2 -translate-x-1/2" active={activeCards[2]} initials="MR" tone="mixed" />
    </div>
  )
}

function RadarAvatar({ className, active, initials, tone }: { className: string; active: boolean; initials: string; tone: 'primary' | 'secondary' | 'mixed' }) {
  const gradient = tone === 'primary' ? 'from-primary to-primary/60 shadow-primary/30' : tone === 'secondary' ? 'from-secondary to-secondary/60 shadow-secondary/30' : 'from-primary to-secondary shadow-primary/30'

  return (
    <div className={`absolute transition-all duration-500 ${className} ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
        <span className="text-white text-xs font-bold">{initials}</span>
      </div>
    </div>
  )
}

function TimelineMockup() {
  return (
    <div className="bg-background/50 rounded-2xl p-4 space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-bold text-sm">JFK</span>
        </div>
        <div className="flex-1">
          <p className="text-white text-sm font-medium">New York</p>
          <p className="text-white/50 text-xs">May 15-16 • 2 crew nearby</p>
        </div>
        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full bg-secondary border-2 border-background" />
          <div className="w-6 h-6 rounded-full bg-primary border-2 border-background" />
        </div>
      </div>
      <div className="flex items-center gap-3 opacity-60">
        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
          <span className="text-white/70 font-bold text-sm">DXB</span>
        </div>
        <div className="flex-1">
          <p className="text-white/70 text-sm font-medium">Dubai</p>
          <p className="text-white/40 text-xs">May 18-19</p>
        </div>
      </div>
    </div>
  )
}

function ChatMockup() {
  return (
    <div className="bg-background/50 rounded-2xl p-4 space-y-3">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">SK</span>
        </div>
        <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-2">
          <p className="text-white text-sm">Hey! I saw you&apos;re in JFK tomorrow too 👋</p>
        </div>
      </div>
      <div className="flex items-start gap-3 justify-end">
        <div className="bg-primary/80 rounded-2xl rounded-tr-none px-4 py-2">
          <p className="text-white text-sm">Yes! Want to grab coffee? ☕</p>
        </div>
      </div>
    </div>
  )
}

function VerificationMockup() {
  return (
    <div className="bg-background/50 rounded-2xl p-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white text-xl font-bold">JD</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-background flex items-center justify-center">
            <ShieldCheck className="w-3 h-3 text-white" />
          </div>
        </div>
        <div>
          <p className="text-white font-semibold">John Davis</p>
          <p className="text-white/60 text-sm">First Officer • Emirates</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs text-green-400 font-medium">✓ Verified Crew</span>
          </div>
        </div>
      </div>
    </div>
  )
}
