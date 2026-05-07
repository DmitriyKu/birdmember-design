'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PolaroidCollage } from '@/components/sections/solution/polaroid-collage'

export function SolutionSection() {
  const scrollToWaitlist = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#053d70] to-background" aria-hidden="true" />
      <Atmosphere />
      <FlightPaths />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-start">
          <SolutionCopy onCtaClick={scrollToWaitlist} />
          <PolaroidCollage />
        </div>
      </div>
    </section>
  )
}

function Atmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute left-[10%] top-[22%] w-[520px] h-[520px] rounded-full border border-white/10 animate-radar-pulse opacity-25" style={{ animationDuration: '3.2s' }} />
    </div>
  )
}

function FlightPaths() {
  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true">
      <path
        d="M60 240 C 260 80, 420 90, 640 210"
        className="animate-flight-path"
        stroke="rgba(241, 135, 13, 0.5)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M180 520 C 380 380, 620 360, 980 160"
        className="animate-flight-path-delayed"
        stroke="rgba(58, 143, 206, 0.45)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M520 620 C 680 480, 820 420, 1100 340"
        className="animate-flight-path-delayed-2"
        stroke="rgba(241, 135, 13, 0.35)"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

function SolutionCopy({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <div className="text-center lg:text-left">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs tracking-wide font-medium text-white/80">THE LAYOVER YOU DESERVE</span>
      </div>

      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight text-balance">
        The best layovers
        <br />
        <span className="text-primary">start with the right crew.</span>
      </h2>

      <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0 text-balance">
        <span className="text-white font-semibold">Birdmember</span> helps verified crew members meet instantly during layovers around the world.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
        <Button
          size="lg"
          onClick={onCtaClick}
          className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full font-semibold group shadow-lg hover:shadow-primary/40 hover:shadow-xl transition-all duration-300"
        >
          Join the crew
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-3 text-white/70 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          Live crew visibility in major hubs
        </div>
      </div>
    </div>
  )
}
