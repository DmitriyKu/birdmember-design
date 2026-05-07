'use client'

import Image from 'next/image'
import { CheckCircle2, MapPin, ShieldCheck, Sparkles } from 'lucide-react'

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#053d70] to-background" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
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

        {/* Cinematic split storytelling */}
        <div className="mt-12 md:mt-16 relative">
          {/* Radar atmosphere (keep subtle) */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute left-[8%] top-[10%] w-[520px] h-[520px] rounded-full border border-white/10 animate-radar-pulse opacity-20" style={{ animationDuration: '3.8s' }} />
            <div className="absolute right-[6%] bottom-[6%] w-[360px] h-[360px] rounded-full border border-white/10 animate-radar-pulse-delayed opacity-12" style={{ animationDuration: '5.1s' }} />
          </div>

          {/* Subtle flight paths */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true">
            <path d="M40 220 C 260 90, 420 110, 620 210" className="animate-flight-path" stroke="rgba(241, 135, 13, 0.45)" strokeWidth="2" fill="none" />
            <path d="M180 520 C 380 360, 620 360, 980 170" className="animate-flight-path-delayed" stroke="rgba(58, 143, 206, 0.40)" strokeWidth="2" fill="none" />
          </svg>

          {/* 3-part cinematic composition (no outer boxed card) */}
          <div className="relative">
            {/* Panels row */}
            <div className="relative hidden md:flex items-stretch gap-10">
              {/* BEFORE panel */}
              <div className="relative flex-1 min-h-[520px] rounded-[32px] md:[border-top-right-radius:260px] overflow-hidden shadow-2xl shadow-black/25">
                {/* Image itself fades to transparent at bottom (no tinting) */}
                <div className="absolute inset-0" aria-hidden="true">
                  <Image
                    src="/layover-lonely.png"
                    alt=""
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: 'center',
                      WebkitMaskImage:
                        'linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%)',
                      maskImage:
                        'linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%)',
                    }}
                    priority={false}
                  />
                </div>

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3 py-2 text-white/80 text-xs font-medium">
                  Most layovers
                </div>

                <div className="absolute left-5 right-5 bottom-5">
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 text-[10px]">×</span>
                      Long hours alone
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 text-[10px]">×</span>
                      No one from your world
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 text-[10px]">×</span>
                      Another night in the hotel
                    </li>
                  </ul>

                  <p className="mt-4 text-white/70 text-sm font-medium">Layovers can feel isolating.</p>
                </div>
              </div>

              {/* AFTER panel */}
              <div className="relative flex-1 min-h-[520px] rounded-[32px] md:[border-top-left-radius:260px] overflow-hidden shadow-2xl shadow-black/25">
                <div className="absolute inset-0" aria-hidden="true">
                  <Image
                    src="/crew-dinner-table.png"
                    alt=""
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: 'center',
                      WebkitMaskImage:
                        'linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%)',
                      maskImage:
                        'linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%)',
                    }}
                    priority={false}
                  />
                </div>

                <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3 py-2 text-white/80 text-xs font-medium">
                  With Birdmember
                </div>

                <div className="absolute left-5 right-5 bottom-5 text-right">
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li className="flex items-center justify-end gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" aria-hidden="true" />
                      Crew you can trust
                    </li>
                    <li className="flex items-center justify-end gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" aria-hidden="true" />
                      Plans that happen
                    </li>
                    <li className="flex items-center justify-end gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" aria-hidden="true" />
                      Memories that stay
                    </li>
                  </ul>

                  <p className="mt-4 text-white/80 text-sm font-medium">Layovers you&apos;ll actually look forward to.</p>
                </div>
              </div>
            </div>

            {/* Floating phone overlapping both panels */}
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

            {/* Mobile layout (stacked, still cinematic) */}
            <div className="md:hidden space-y-6">
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
            </div>
          </div>

          {/* Stats row as independent glass pills */}
          <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-white/75">
            <Stat icon={<MapPin className="w-4 h-4" aria-hidden="true" />} label="150+ cities" />
            <Stat icon={<span className="w-4 h-4 rounded-full border border-white/20 inline-block" aria-hidden="true" />} label="20K+ crew members" />
            <Stat icon={<ShieldCheck className="w-4 h-4" aria-hidden="true" />} label="Verified crew only" />
            <Stat icon={<Sparkles className="w-4 h-4" aria-hidden="true" />} label="Real connections" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
      <div className="text-white/55">{icon}</div>
      <div className="text-sm font-medium text-white/75">{label}</div>
    </div>
  )
}

function PhoneFrame({ children, compact }: { children: React.ReactNode; compact?: boolean }) {
  const size = compact ? 'w-full' : 'w-[224px]'
  return (
    <div
      className={[
        'relative rounded-[44px] bg-[#0b0f15] shadow-2xl shadow-black/60',
        // Safari border-radius + overflow clipping fix
        'transform-gpu',
        '[-webkit-mask-image:-webkit-radial-gradient(white,black)]',
        size,
      ].join(' ')}
    >
      {/* side buttons hint */}
      {!compact && (
        <>
          <div className="absolute -left-1 top-20 h-10 w-1 rounded-full bg-white/10" aria-hidden="true" />
          <div className="absolute -right-1 top-28 h-14 w-1 rounded-full bg-white/10" aria-hidden="true" />
        </>
      )}

      {/* bezel */}
      <div className="p-[6px] rounded-[44px] bg-gradient-to-b from-white/10 via-white/5 to-white/8">
        <div className="relative rounded-[38px] overflow-hidden bg-black">
          {/* notch */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[6px] h-[14px] w-[72px] rounded-full bg-black/85 border border-white/10"
            aria-hidden="true"
          />
          {/* screen */}
          {children}
          {/* glass glare */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -top-[35%] left-[-40%] w-[160%] h-[85%] rotate-[12deg] bg-gradient-to-b from-white/18 via-white/6 to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </div>
  )
}
