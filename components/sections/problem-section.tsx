'use client'

import Image from 'next/image'
import { MapPin, ShieldCheck, Sparkles } from 'lucide-react'
import { PhoneFrame } from '@/components/sections/problem/phone-frame'
import { StatPill } from '@/components/sections/problem/stat-pill'
import { StoryPanel } from '@/components/sections/problem/story-panel'

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#053d70] to-background" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionIntro />

        <div className="mt-12 md:mt-16 relative">
          <Atmosphere />
          <FlightPaths />

          <div className="relative">
            <DesktopStory />
            <FloatingPhone />
            <MobileStory />
          </div>

          <StatsRow />
        </div>
      </div>
    </section>
  )
}

function SectionIntro() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight text-balance">
        Your layover can be more
        <br className="hidden sm:block" /> than just time between flights.
      </h2>

      <p className="mt-5 text-lg md:text-xl text-white/75 leading-relaxed text-balance">
        Birdmember helps crew connect instantly
        <br className="hidden sm:block" /> during layovers around the world.
      </p>
    </div>
  )
}

function Atmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute left-[8%] top-[10%] w-[520px] h-[520px] rounded-full border border-white/10 animate-radar-pulse opacity-20" style={{ animationDuration: '3.8s' }} />
      <div className="absolute right-[6%] bottom-[6%] w-[360px] h-[360px] rounded-full border border-white/10 animate-radar-pulse-delayed opacity-12" style={{ animationDuration: '5.1s' }} />
    </div>
  )
}

function FlightPaths() {
  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true">
      <path d="M40 220 C 260 90, 420 110, 620 210" className="animate-flight-path" stroke="rgba(241, 135, 13, 0.45)" strokeWidth="2" fill="none" />
      <path d="M180 520 C 380 360, 620 360, 980 170" className="animate-flight-path-delayed" stroke="rgba(58, 143, 206, 0.40)" strokeWidth="2" fill="none" />
    </svg>
  )
}

function DesktopStory() {
  return (
    <div className="relative hidden md:flex items-stretch gap-10">
      <StoryPanel variant="before" />
      <StoryPanel variant="after" />
    </div>
  )
}

function FloatingPhone() {
  return (
    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
      <div className="relative">
        <div className="absolute -inset-10 rounded-[52px] bg-black/20 blur-3xl opacity-60" aria-hidden="true" />
        <PhoneFrame>
          <Image
            src="/ui-discover-mock.png"
            alt="Birdmember app: discover crew nearby"
            width={468}
            height={1024}
            className="block w-full h-auto"
            priority={false}
          />
        </PhoneFrame>
      </div>
    </div>
  )
}

function MobileStory() {
  return (
    <div className="md:hidden space-y-6">
      <MobileBeforePanel />

      <div className="relative mx-auto w-[280px] rounded-[40px] border border-white/18 bg-white/8 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
        <PhoneFrame compact>
          <Image
            src="/ui-discover-mock.png"
            alt="Birdmember app: discover crew nearby"
            width={468}
            height={1024}
            className="block w-full h-auto"
            priority={false}
          />
        </PhoneFrame>
      </div>

      <MobileAfterPanel />
    </div>
  )
}

function MobileBeforePanel() {
  return (
    <div className="relative min-h-[360px] rounded-[28px] overflow-hidden shadow-2xl shadow-black/25">
      <div className="absolute inset-0 bg-gradient-to-b from-[#072a4a] via-[#061f36] to-[#041628]" aria-hidden="true" />
      <div className="absolute inset-0 px-7 py-8" aria-hidden="true">
        <div className="relative h-full w-full border border-white/10 bg-black/10">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl opacity-20" />
            <div className="absolute top-[22%] left-[14%] w-2 h-2 rounded-full bg-secondary/80 blur-[1px] opacity-70" />
            <div className="absolute top-[30%] left-[28%] w-1.5 h-1.5 rounded-full bg-white/80 blur-[1px] opacity-55" />
            <div className="absolute top-[36%] left-[20%] w-1 h-1 rounded-full bg-primary/80 blur-[1px] opacity-55" />
            <div className="absolute bottom-[22%] left-[22%] w-2 h-2 rounded-full bg-white/60 blur-[1px] opacity-45" />
            <div className="absolute bottom-[18%] left-[40%] w-1.5 h-1.5 rounded-full bg-primary/70 blur-[1px] opacity-45" />
          </div>
          <div className="absolute inset-y-0 left-0 w-[18%] bg-black/25" />
          <div className="absolute bottom-8 left-8">
            <div className="relative">
              <div className="w-14 h-16 rounded-[18px] bg-black/45 blur-[0.2px]" />
              <div className="absolute -right-5 bottom-3 w-9 h-5 rounded-full bg-primary/30 blur-xl opacity-70" />
              <div className="absolute -right-3 bottom-4 w-3 h-5 rounded-sm bg-white/15 border border-white/10" />
            </div>
          </div>
          <div className="absolute -top-[30%] left-[-30%] w-[160%] h-[80%] rotate-[10deg] bg-gradient-to-b from-white/10 via-white/0 to-transparent opacity-25" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" aria-hidden="true" />
      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3 py-2 text-white/80 text-xs font-medium">
        Most layovers
      </div>
    </div>
  )
}

function MobileAfterPanel() {
  return (
    <div className="relative min-h-[360px] rounded-[28px] overflow-hidden shadow-2xl shadow-black/25">
      <Image
        src="/crew-dinner-table.png"
        alt="Crew dinner after Birdmember"
        fill
        className="object-cover"
        style={{ objectPosition: 'center' }}
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/45 via-black/20 to-black/10" aria-hidden="true" />
      <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3 py-2 text-white/80 text-xs font-medium">
        With Birdmember
      </div>
    </div>
  )
}

function StatsRow() {
  return (
    <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-white/75">
      <StatPill icon={<MapPin className="w-4 h-4" aria-hidden="true" />} label="150+ cities" />
      <StatPill icon={<span className="w-4 h-4 rounded-full border border-white/20 inline-block" aria-hidden="true" />} label="20K+ crew members" />
      <StatPill icon={<ShieldCheck className="w-4 h-4" aria-hidden="true" />} label="Verified crew only" />
      <StatPill icon={<Sparkles className="w-4 h-4" aria-hidden="true" />} label="Real connections" />
    </div>
  )
}
