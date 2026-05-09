'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'

type Phase = 'visible' | 'hiding' | 'hidden'
type HideStep = 'logo' | 'clouds'

type Cloud = {
  x: number
  y: number
  baseR: number
  delayMs: number
}

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n))
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function drawCloudHole(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  softness: number,
) {
  const grd = ctx.createRadialGradient(x, y, Math.max(0, r - softness), x, y, r)
  grd.addColorStop(0, 'rgba(0,0,0,1)')
  grd.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = grd
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.fill()
}

function CloudDissolveCanvas({ active, durationMs }: { active: boolean; durationMs: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = Math.min(2, window.devicePixelRatio || 1)
    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = '100%'
      canvas.style.height = '100%'
    }

    resize()
    window.addEventListener('resize', resize)

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const clouds: Cloud[] = [
      { x: 0.22, y: 0.32, baseR: 0.38, delayMs: 0 },
      { x: 0.72, y: 0.34, baseR: 0.42, delayMs: 120 },
      { x: 0.48, y: 0.72, baseR: 0.5, delayMs: 240 },
      { x: 0.06, y: 0.12, baseR: 0.55, delayMs: 60 },
      { x: 0.94, y: 0.14, baseR: 0.55, delayMs: 60 },
      { x: 0.08, y: 0.92, baseR: 0.6, delayMs: 120 },
      { x: 0.92, y: 0.9, baseR: 0.6, delayMs: 120 },
    ]

    const tick = (ts: number) => {
      if (startRef.current == null) startRef.current = ts
      const elapsed = ts - startRef.current

      // Paint opaque white overlay
      ctx.globalCompositeOperation = 'source-over'
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Punch out cloud holes
      ctx.globalCompositeOperation = 'destination-out'

      const maxDim = Math.max(window.innerWidth, window.innerHeight)
      const softness = Math.max(24, maxDim * 0.06)

      for (const c of clouds) {
        const localT = clamp01((elapsed - c.delayMs) / durationMs)
        const p = easeOutCubic(localT)
        const r = maxDim * c.baseR * p

        // Multi-puff cloud: 4 overlapping holes
        drawCloudHole(ctx, window.innerWidth * c.x, window.innerHeight * c.y, r, softness)
        drawCloudHole(ctx, window.innerWidth * (c.x + 0.06), window.innerHeight * (c.y - 0.03), r * 0.78, softness)
        drawCloudHole(ctx, window.innerWidth * (c.x - 0.05), window.innerHeight * (c.y + 0.02), r * 0.72, softness)
        drawCloudHole(ctx, window.innerWidth * (c.x + 0.02), window.innerHeight * (c.y + 0.06), r * 0.66, softness)
      }

      if (elapsed < durationMs + 600) {
        rafRef.current = window.requestAnimationFrame(tick)
      }
    }

    rafRef.current = window.requestAnimationFrame(tick)

    return () => {
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      startRef.current = null
      window.removeEventListener('resize', resize)
    }
  }, [active, durationMs])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />
}

export function InitialSplash({ children }: { children: React.ReactNode }) {
  const reducedMotion = useMemo(() => prefersReducedMotion(), [])
  const [phase, setPhase] = useState<Phase>('visible')
  const [hideStep, setHideStep] = useState<HideStep>('logo')

  useEffect(() => {
    const minVisibleMs = reducedMotion ? 0 : 2200
    const logoOutMs = reducedMotion ? 0 : 520
    const cloudsMs = reducedMotion ? 0 : 2400
    const hideAnimMs = logoOutMs + cloudsMs

    const t1 = window.setTimeout(() => setPhase('hiding'), minVisibleMs)
    const t2 = window.setTimeout(() => setPhase('hidden'), minVisibleMs + hideAnimMs)

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [reducedMotion])

  useEffect(() => {
    if (phase !== 'hiding' || reducedMotion) return
    setHideStep('logo')
    const t = window.setTimeout(() => setHideStep('clouds'), 520)
    return () => window.clearTimeout(t)
  }, [phase, reducedMotion])

  const showOverlay = phase !== 'hidden'
  const overlayHiding = phase === 'hiding'
  const showClouds = overlayHiding && hideStep === 'clouds'

  return (
    <div className={showOverlay ? 'overflow-hidden' : undefined}>
      {showOverlay && (
        <div
          aria-hidden="true"
          className={[
            'fixed inset-0 z-[100]',
            showClouds ? 'bg-transparent' : 'bg-white',
            'flex items-center justify-center',
            'transition-[opacity,transform,filter] duration-[2400ms] ease-out',
            reducedMotion ? 'transition-none' : '',
            overlayHiding ? 'opacity-100 scale-100 blur-0' : 'opacity-100 scale-100 blur-0',
          ].join(' ')}
        >
          {!reducedMotion && <CloudDissolveCanvas active={showClouds} durationMs={2400} />}

          <div className="flex flex-col items-center gap-6">
            <Image
              src="/birdmember-splash-white.png"
              alt=""
              width={560}
              height={386}
              priority
              className={[
                'h-28 w-auto md:h-40',
                'transition-[opacity,transform,filter] ease-out',
                reducedMotion ? 'transition-none' : '',
                overlayHiding
                  ? 'duration-[520ms] opacity-0 -translate-y-1 blur-[2px]'
                  : 'duration-500 opacity-100 translate-y-0 blur-0',
              ].join(' ')}
            />

            {!reducedMotion && (
              <div
                className={[
                  'flex items-center gap-2 text-sm font-medium text-black/60 tracking-wide transition-opacity duration-200 ease-out',
                  overlayHiding ? 'opacity-0' : 'opacity-100',
                ].join(' ')}
              >
                <span>Loading</span>
                <span className="inline-flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-black/40 animate-pulse" style={{ animationDelay: '0ms' }} />
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-black/40 animate-pulse" style={{ animationDelay: '180ms' }} />
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-black/40 animate-pulse" style={{ animationDelay: '360ms' }} />
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <div
        className={[
          'transition-opacity duration-500 ease-out',
          reducedMotion ? 'transition-none' : '',
          phase === 'visible' ? 'opacity-0' : 'opacity-100',
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  )
}
