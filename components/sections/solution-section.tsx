'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function SolutionSection() {
  const scrollToWaitlist = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Keep blue identity; add subtle depth only */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#053d70] to-background" aria-hidden="true" />

      {/* Atmospheric pulses */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-[10%] top-[22%] w-[520px] h-[520px] rounded-full border border-white/10 animate-radar-pulse opacity-25" style={{ animationDuration: '3.2s' }} />
      </div>

      {/* Flight paths */}
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-start">
          {/* Copy / CTA */}
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
                onClick={scrollToWaitlist}
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

          {/* Polaroid composition */}
          <div className="relative lg:pt-6">
            <div className="relative mx-auto max-w-[720px] h-[700px] sm:h-[740px]">
              {/* Base glow */}
              <div className="absolute inset-0 rounded-[48px] bg-white/5 blur-3xl opacity-60" aria-hidden="true" />

              <div className="absolute left-[1%] top-[0%] animate-float rotate-[-4deg]" style={{ animationDuration: '7.4s' }}>
                <Polaroid
                  imageSrc="/crew-shanghai-selfie.png"
                  imageAlt="Crew selfie in the city"
                  captionTop="Tokyo • 01:47 AM"
                  captionBottom="JL + NH crew"
                />
              </div>

              <div className="absolute right-[2%] top-[4%] animate-float-delayed rotate-[3deg]" style={{ animationDuration: '8.3s' }}>
                <Polaroid
                  imageSrc="/crew-dinner-table.png"
                  imageAlt="Crew dinner during layover"
                  captionTop="Dubai • 10:32 PM"
                  captionBottom="EK + QR crew"
                  tape
                />
              </div>

              <div className="absolute left-[6%] bottom-[-2%] animate-float-delayed-2 rotate-[2deg]" style={{ animationDuration: '9.1s' }}>
                <Polaroid
                  imageSrc="/crew-paris-cafe.png"
                  imageAlt="Crew café moment"
                  captionTop="Singapore • 03:21 PM"
                  captionBottom="SQ + TR crew"
                />
              </div>

              <div className="absolute left-[40%] top-[40%] animate-float rotate-[1deg]" style={{ animationDuration: '9.4s' }}>
                <Polaroid
                  imageSrc="/crew-market-walk.png"
                  imageAlt="Crew sightseeing moment"
                  captionTop="Istanbul • 11:58 PM"
                  captionBottom="TK • PC crew"
                  tape
                />
              </div>

              <div className="absolute right-[4%] bottom-[4%] animate-float rotate-[-2deg]" style={{ animationDuration: '10.2s' }}>
                <PolaroidLocked />
              </div>

            </div>

            {/* Mobile: stacked + overlap */}
            <div className="lg:hidden mt-10 grid grid-cols-1 gap-4">
              <div className="relative">
                <div className="absolute -top-2 left-6 w-[92%] h-[92%] rounded-[38px] bg-white/5 blur-2xl opacity-70" aria-hidden="true" />
                <div className="relative flex flex-col gap-4">
                  <div className="animate-float rotate-[-2deg]" style={{ animationDuration: '7.6s' }}>
                    <Polaroid
                      imageSrc="/crew-cafe-pilot.png"
                      imageAlt="Crew coffee moment"
                      captionTop="Tokyo • 01:47 AM"
                      captionBottom="Met through Birdmember"
                    />
                  </div>
                  <div className="animate-float-delayed rotate-[2deg]" style={{ animationDuration: '8.4s' }}>
                    <Polaroid
                      imageSrc="/crew-market-walk.png"
                      imageAlt="Crew sightseeing moment"
                      captionTop="Dubai • 10:32 PM"
                      captionBottom="EK • LH • QR crews nearby"
                      tape
                    />
                  </div>
                  <div className="animate-float-delayed-2 rotate-[-1deg]" style={{ animationDuration: '9.2s' }}>
                    <PolaroidLocked />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Polaroid({
  imageSrc,
  imageAlt,
  captionTop,
  captionBottom,
  tape,
}: {
  imageSrc: string
  imageAlt: string
  captionTop: string
  captionBottom: string
  tape?: boolean
}) {
  return (
    <div className="relative w-[260px] sm:w-[280px]">
      {tape && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 rounded-md bg-white/60 rotate-[4deg] shadow-sm"
          aria-hidden="true"
        />
      )}

      <div className="bg-white text-[#0b1b2a] shadow-2xl shadow-black/30 border border-black/15 overflow-hidden">
        <PlasticOverlay />
        {/* Polaroid top frame */}
        <div className="p-4 pb-2">
          <div className="relative overflow-hidden border border-black/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={560}
              height={420}
              className="w-full h-[170px] object-cover"
              priority={false}
            />
          </div>
        </div>

        {/* Polaroid bottom frame (thicker) */}
        <div className="px-4 pb-6 pt-1">
          <div className="text-[12px] font-semibold tracking-wide">{captionTop}</div>
          <div className="text-[12px] text-black/70 font-medium mt-1">{captionBottom}</div>
        </div>
      </div>
    </div>
  )
}

function PolaroidLocked() {
  return (
    <div className="relative w-[240px] sm:w-[260px]">
      <div className="bg-white text-[#0b1b2a] shadow-2xl shadow-black/30 border border-black/15 overflow-hidden">
        <PlasticOverlay />
        <div className="p-4 pb-2">
          <div className="relative overflow-hidden h-[170px] bg-[#0b1b2a] flex items-center justify-center border border-black/10">
            <div className="absolute inset-0 opacity-70" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/0" />
              <div className="absolute -top-16 -right-12 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
            </div>
            <div className="relative text-center">
              <div className="mx-auto w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M17 11V8a5 5 0 0 0-10 0v3" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M7 11h10v9H7z" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-white font-semibold text-sm">More crew nearby</div>
              <div className="text-white/65 text-xs mt-1">Unlock with verification</div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-6 pt-1">
          <div className="text-[12px] font-semibold tracking-wide">Crew-only visibility</div>
          <div className="text-[12px] text-black/70 font-medium mt-1">Hidden nearby crew</div>
        </div>
      </div>
    </div>
  )
}

function PlasticOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* main plastic reflection */}
      <div className="absolute -top-[30%] left-[-35%] w-[140%] h-[80%] rotate-[12deg] bg-gradient-to-b from-white/35 via-white/8 to-transparent blur-[0.5px] opacity-60" />
    </div>
  )
}
