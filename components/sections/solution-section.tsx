'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SolutionSection() {
  const scrollToWaitlist = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 md:py-32 px-4 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">
          Now there is.
        </h2>

        <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
          <span className="font-semibold text-white">Birdmember</span> shows you exactly which crew are in your layover city — and lets you connect instantly.
        </p>

        <Button
          size="lg"
          onClick={scrollToWaitlist}
          className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full font-semibold group"
        >
          Join the crew
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
