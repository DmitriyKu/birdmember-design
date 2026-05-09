'use client'

import Image from 'next/image'
import { CheckCircle2, Globe, Lock, ShieldCheck, Sparkles } from 'lucide-react'
import { animate, motion, type MotionValue, useMotionValue, useTransform } from 'framer-motion'
import { PhoneFrame } from '@/components/sections/problem/phone-frame'
import { StatPill } from '@/components/sections/problem/stat-pill'
import { StoryPanel } from '@/components/sections/problem/story-panel'
import { useEffect, useMemo, useRef, useState } from 'react'

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
  return <MobileCinematicCarousel />
}

function StatsRow() {
  return (
    <>
      {/* Desktop (unchanged) */}
      <div className="hidden md:grid mt-10 md:mt-12 grid-cols-2 md:grid-cols-4 gap-4 text-white/75">
        <StatPill icon={<Globe className="w-4 h-4" aria-hidden="true" />} label="Worldwide layovers" />
        <StatPill icon={<Lock className="w-4 h-4" aria-hidden="true" />} label="Crew-only access" />
        <StatPill icon={<ShieldCheck className="w-4 h-4" aria-hidden="true" />} label="Verified crew only" />
        <StatPill icon={<Sparkles className="w-4 h-4" aria-hidden="true" />} label="Real connections" />
      </div>

      {/* Mobile: lightweight chips */}
      <div className="md:hidden mt-10">
        <MobileStatsChips />
      </div>
    </>
  )
}

type MobileSlide = {
  key: string
  kind: 'image' | 'phone'
  image?: { src: string; alt: string }
}

function MobileCinematicCarousel() {
  const slides: MobileSlide[] = useMemo(
    () => [
      {
        key: 'lonely',
        kind: 'image',
        image: { src: '/layover-lonely.png', alt: 'Crew member alone during layover' },
      },
      {
        key: 'discover',
        kind: 'phone',
      },
      {
        key: 'together',
        kind: 'image',
        image: { src: '/crew-dinner-table.png', alt: 'Crew connection after Birdmember' },
      },
    ],
    [],
  )

  return (
    <div className="md:hidden mt-8">
      <MobileCarousel slides={slides} />
    </div>
  )
}

function MobileCarousel({ slides }: { slides: MobileSlide[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [containerW, setContainerW] = useState(0)
  const [index, setIndex] = useState(1)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ro = new ResizeObserver(() => setContainerW(el.clientWidth))
    ro.observe(el)
    setContainerW(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  const gap = 0
  // Tighter spacing when phone is centered so side cards sit closer
  const overlap = index === 1 ? 52 : 34
  // Wide enough for story photos, still shows clear side peeks (35–45%)
  const cardW = Math.max(236, Math.min(312, Math.floor(containerW * 0.64 || 276)))
  // Negative overlap: cards visually interlock like coverflow
  const step = cardW - overlap + gap
  const sidePad = Math.max(6, Math.floor((containerW - cardW) / 2))

  const x = useMotionValue<number>(-index * step)

  useEffect(() => {
    const controls = animate(x, -index * step, {
      type: 'spring',
      stiffness: 260,
      damping: 28,
      mass: 0.7,
    })
    return () => controls.stop()
  }, [index, step, x])

  const clampIndex = (next: number) => Math.max(0, Math.min(slides.length - 1, next))

  return (
    <div ref={containerRef} className="relative">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-stretch"
          style={{ x, paddingLeft: sidePad, paddingRight: sidePad, gap: `${gap}px` }}
          drag="x"
          dragElastic={0.08}
          dragMomentum={false}
          onDragEnd={(_, info) => {
            const current = -x.get() / step
            const flick = info.velocity.x
            const moved = info.offset.x

            let next = Math.round(current)
            if (Math.abs(flick) > 650 || Math.abs(moved) > cardW * 0.18) {
              next = flick < 0 ? Math.ceil(current) : Math.floor(current)
            }

            setIndex(clampIndex(next))
          }}
          aria-label="Story carousel"
        >
          {slides.map((slide, i) => (
            <MobileCarouselCard
              key={slide.key}
              slide={slide}
              i={i}
              x={x}
              step={step}
              width={cardW}
              overlap={overlap}
              phoneCentered={index === 1}
              activeIndex={index}
              onSelect={() => setIndex(i)}
            />
          ))}
        </motion.div>
      </div>

      {/* Pagination dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.key}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-colors ${i === index ? 'bg-white/85' : 'bg-white/25 hover:bg-white/35'}`}
          />
        ))}
      </div>
    </div>
  )
}

function MobileCarouselCard({
  slide,
  i,
  x,
  step,
  width,
  overlap,
  phoneCentered,
  activeIndex,
  onSelect,
}: {
  slide: MobileSlide
  i: number
  x: MotionValue<number>
  step: number
  width: number
  overlap: number
  phoneCentered: boolean
  activeIndex: number
  onSelect: () => void
}) {
  const current = useTransform(x, (v: number) => -v / step)
  const offset = useTransform(current, (c) => i - c)

  // Coverflow inward horizontal angle (rotateY), center stays flat; +10° vs before for sides
  const rotateY = useTransform(offset, (o) => {
    const a = Math.min(1, Math.abs(o))
    if (a < 0.12) return 0
    // Left card rotates toward center (right), right card rotates toward center (left)
    return o < 0 ? a * 45 : a * -45
  })
  // Pull side cards toward the center so spacing is visibly tighter (coverflow overlap)
  const pullX = useTransform(offset, (o) => {
    const a = Math.min(1, Math.abs(o))
    if (a < 0.08) return 0
    const tight = phoneCentered ? 1.32 : 1
    const amount = 26 * a * tight
    return o < 0 ? amount : -amount
  })
  const scale = useTransform(offset, (o) => {
    const a = Math.min(1, Math.abs(o))
    // Smooth scale — no step threshold (avoids size “jumps” mid-swipe)
    let base = 1 - a * 0.05
    if (slide.kind === 'image') {
      base *= 1 - a * 0.06
    }
    return base
  })
  const opacity = useTransform(offset, (o) => 1 - Math.min(0.28, Math.abs(o) * 0.2))
  const blur = useTransform(offset, (o) => Math.min(0.9, Math.abs(o) * 0.65))
  const filter = useTransform(blur, (b) => `blur(${b}px)`)
  const z = useTransform(offset, (o) => (Math.abs(o) < 0.2 ? 34 : 0))

  const isActive = i === activeIndex

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      className="relative shrink-0 text-left"
      style={{ width, marginLeft: i === 0 ? 0 : -overlap }}
      aria-current={isActive ? 'true' : undefined}
    >
      <motion.div
        className="relative flex h-[500px] w-full items-center justify-center overflow-visible bg-transparent"
        style={{
          // Ensure 3D is visible even when the track is translating.
          transformPerspective: 1200,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          rotateY,
          x: pullX,
          scale,
          z,
          opacity,
          filter,
          boxShadow: 'none',
        }}
      >
        {/* Card surface: slightly shorter when active; spring height avoids harsh jumps */}
        <motion.div
          className="relative w-full overflow-visible rounded-[28px] will-change-[height]"
          initial={false}
          animate={{ height: isActive ? 458 : 482 }}
          transition={{ type: 'spring', stiffness: 380, damping: 34, mass: 0.85 }}
        >
          {/* Inner clip layer so 3D transforms don't get cut off */}
          <div className="absolute inset-0 rounded-[28px] overflow-hidden">
            {slide.kind === 'image' && slide.image ? (
              <>
                <Image
                  src={slide.image.src}
                  alt={slide.image.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center' }}
                  priority={false}
                />
                {/* Match desktop StoryPanel copy */}
                {slide.key === 'lonely' ? (
                  <>
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 top-[38%] bg-gradient-to-t from-black/80 via-black/35 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5 text-[10px] font-medium text-white/80 backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:py-2 sm:text-xs">
                      Most layovers
                    </div>
                    <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-[1] sm:bottom-4 sm:left-4 sm:right-4">
                      <ul className="space-y-1.5 text-[11px] text-white/80 sm:space-y-2 sm:text-sm">
                        {['Long hours alone', 'No one from your world', 'Another night in the hotel'].map((item) => (
                          <li key={item} className="flex items-center gap-1.5 sm:gap-2">
                            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[8px] text-white/70 sm:h-4 sm:w-4 sm:text-[10px]">
                              ×
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2 text-[11px] font-medium text-white/70 sm:mt-4 sm:text-sm">Layovers can feel isolating.</p>
                    </div>
                  </>
                ) : null}
                {slide.key === 'together' ? (
                  <>
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 top-[38%] bg-gradient-to-t from-black/80 via-black/35 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5 text-[10px] font-medium text-white/80 backdrop-blur-md sm:right-4 sm:top-4 sm:px-3 sm:py-2 sm:text-xs">
                      With Birdmember
                    </div>
                    <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-[1] text-right sm:bottom-4 sm:left-4 sm:right-4">
                      <ul className="space-y-1.5 text-[11px] text-white/80 sm:space-y-2 sm:text-sm">
                        {['Crew you can trust', 'Plans that happen', 'Memories that stay'].map((item) => (
                          <li key={item} className="flex items-center justify-end gap-1.5 sm:gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-green-400 sm:h-4 sm:w-4" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2 text-[11px] font-medium text-white/80 sm:mt-4 sm:text-sm">
                        Layovers you&apos;ll actually look forward to.
                      </p>
                    </div>
                  </>
                ) : null}
              </>
            ) : null}
          </div>

          {/* Phone UI (center card content) */}
          {slide.kind === 'phone' ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[170px]">
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
            </div>
          ) : null}
        </motion.div>
      </motion.div>
    </motion.button>
  )
}

function MobileStatsChips() {
  const chips = [
    { label: 'Worldwide layovers', icon: <Globe className="w-4 h-4" aria-hidden="true" /> },
    { label: 'Crew-only access', icon: <Lock className="w-4 h-4" aria-hidden="true" /> },
    { label: 'Verified crew only', icon: <ShieldCheck className="w-4 h-4" aria-hidden="true" /> },
    { label: 'Real connections', icon: <Sparkles className="w-4 h-4" aria-hidden="true" /> },
  ]

  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 [grid-auto-rows:1fr]">
        {chips.map((c) => (
          <div
            key={c.label}
            className="flex h-full min-h-[4.75rem] w-full items-center justify-center gap-2 rounded-full border border-white/14 bg-white/5 px-3 py-2 text-center text-white/70 text-sm shadow-lg shadow-black/10 backdrop-blur-md sm:min-h-[3.5rem]"
          >
            <span className="shrink-0">{c.icon}</span>
            <span className="leading-snug text-balance">{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
