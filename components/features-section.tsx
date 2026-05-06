'use client'

import { useEffect, useRef, useState } from 'react'
import { Radar, Calendar, MessageCircle, ShieldCheck } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 px-4 relative overflow-hidden" aria-label="Core features of the airline crew app">
      {/* Background */}
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
          {/* Radar Feature */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-colors" aria-hidden="true" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Radar className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                See who&apos;s in your layover city
              </h3>
              <p className="text-white/70 mb-6">
                Real-time radar shows verified crew members nearby during your layover.
              </p>
              
              {/* Radar UI Mockup */}
              <RadarMockup />
            </div>
          </div>

          {/* Trips Feature */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-secondary/20 transition-colors" aria-hidden="true" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-secondary" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                Plan your layovers
              </h3>
              <p className="text-white/70 mb-6">
                Add your upcoming trips and see who else will be there.
              </p>
              
              {/* Timeline UI Mockup */}
              <TimelineMockup />
            </div>
          </div>

          {/* Chat Feature */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-colors" aria-hidden="true" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                Start instantly
              </h3>
              <p className="text-white/70 mb-6">
                Connect with a tap. No awkward intros needed.
              </p>
              
              {/* Chat UI Mockup */}
              <ChatMockup />
            </div>
          </div>

          {/* Verification Feature */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-secondary/20 transition-colors" aria-hidden="true" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-secondary" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                Only verified airline crew
              </h3>
              <p className="text-white/70 mb-6">
                Every member is verified. No passengers. No fakes.
              </p>
              
              {/* Verification UI Mockup */}
              <VerificationMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RadarMockup() {
  const [activeCards, setActiveCards] = useState([false, false, false])

  useEffect(() => {
    const intervals = [
      setTimeout(() => setActiveCards(prev => [true, prev[1], prev[2]]), 500),
      setTimeout(() => setActiveCards(prev => [prev[0], true, prev[2]]), 1200),
      setTimeout(() => setActiveCards(prev => [prev[0], prev[1], true]), 1800),
    ]
    return () => intervals.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative h-48 bg-background/50 rounded-2xl overflow-hidden">
      {/* Radar circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border border-secondary/30 animate-radar-pulse" />
        <div className="absolute w-32 h-32 rounded-full border border-secondary/30 animate-radar-pulse-delayed" />
      </div>
      
      {/* Profile dots */}
      <div 
        className={`absolute top-8 left-12 transition-all duration-500 ${activeCards[0] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/30">
          <span className="text-white text-xs font-bold">JD</span>
        </div>
      </div>
      <div 
        className={`absolute top-16 right-16 transition-all duration-500 ${activeCards[1] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center shadow-lg shadow-secondary/30">
          <span className="text-white text-xs font-bold">SK</span>
        </div>
      </div>
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 ${activeCards[2] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
          <span className="text-white text-xs font-bold">MR</span>
        </div>
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
