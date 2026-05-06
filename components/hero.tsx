'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Flight paths data
    const flightPaths = [
      { start: { x: 0.1, y: 0.3 }, end: { x: 0.9, y: 0.5 }, progress: 0, speed: 0.003 },
      { start: { x: 0.8, y: 0.2 }, end: { x: 0.2, y: 0.7 }, progress: 0.3, speed: 0.004 },
      { start: { x: 0.5, y: 0.1 }, end: { x: 0.6, y: 0.8 }, progress: 0.6, speed: 0.0035 },
      { start: { x: 0.15, y: 0.6 }, end: { x: 0.85, y: 0.3 }, progress: 0.15, speed: 0.0025 },
      { start: { x: 0.7, y: 0.7 }, end: { x: 0.3, y: 0.2 }, progress: 0.45, speed: 0.003 },
    ]

    // Dots for world map effect
    const dots: { x: number; y: number; radius: number; alpha: number }[] = []
    for (let i = 0; i < 100; i++) {
      dots.push({
        x: Math.random(),
        y: Math.random(),
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.1
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw dots
      dots.forEach(dot => {
        ctx.beginPath()
        ctx.arc(dot.x * canvas.width, dot.y * canvas.height, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(58, 143, 206, ${dot.alpha})`
        ctx.fill()
      })

      // Draw flight paths
      flightPaths.forEach(path => {
        const startX = path.start.x * canvas.width
        const startY = path.start.y * canvas.height
        const endX = path.end.x * canvas.width
        const endY = path.end.y * canvas.height

        // Calculate control point for curved path
        const midX = (startX + endX) / 2
        const midY = Math.min(startY, endY) - 100

        // Draw path
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.quadraticCurveTo(midX, midY, endX, endY)
        
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY)
        gradient.addColorStop(0, 'rgba(241, 135, 13, 0)')
        gradient.addColorStop(path.progress, 'rgba(241, 135, 13, 0.8)')
        gradient.addColorStop(Math.min(path.progress + 0.1, 1), 'rgba(241, 135, 13, 0)')
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw airplane dot
        const t = path.progress
        const planeX = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * midX + t * t * endX
        const planeY = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * midY + t * t * endY

        ctx.beginPath()
        ctx.arc(planeX, planeY, 4, 0, Math.PI * 2)
        ctx.fillStyle = '#F1870D'
        ctx.fill()
        
        // Glow effect
        ctx.beginPath()
        ctx.arc(planeX, planeY, 8, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(241, 135, 13, 0.3)'
        ctx.fill()

        // Update progress
        path.progress += path.speed
        if (path.progress > 1) path.progress = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const scrollToWaitlist = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section for airline crew networking app">
      {/* Animated Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Radar Pulse Effect */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none" aria-hidden="true">
        <div className="w-[600px] h-[600px] rounded-full border border-secondary/20 animate-radar-pulse" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-secondary/20 animate-radar-pulse-delayed" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-secondary/20 animate-radar-pulse-delayed-2" />
      </div>

      {/* Floating Profile Cards */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[15%] left-[10%] animate-float">
          <ProfileCard role="Pilot" airline="Emirates" />
        </div>
        <div className="absolute top-[25%] right-[8%] animate-float-delayed">
          <ProfileCard role="Cabin Crew" airline="British Airways" />
        </div>
        <div className="absolute bottom-[25%] left-[15%] animate-float-delayed-2 hidden md:block">
          <ProfileCard role="Captain" airline="Lufthansa" />
        </div>
        <div className="absolute bottom-[20%] right-[12%] animate-float hidden lg:block">
          <ProfileCard role="Cabin Crew" airline="Singapore Airlines" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-white">Crew only. Access is limited.</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
          The first verified global crew network
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-4 leading-relaxed">
          No more wasted layovers.
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Meet verified pilots and cabin crew in your city — instantly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button 
            size="lg" 
            onClick={scrollToWaitlist}
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-primary/50 hover:shadow-xl transition-all duration-300 animate-glow"
          >
            Apply for early access
          </Button>
        </div>

        <p className="text-white/60 text-sm">
          Launching soon on iOS & Android
        </p>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  )
}

function ProfileCard({ role, airline }: { role: string; airline: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl w-48">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
          <span className="text-white text-sm font-bold">
            {role === 'Pilot' || role === 'Captain' ? '✈️' : '👤'}
          </span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{role}</p>
          <p className="text-white/60 text-xs">{airline}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-white/70 text-xs">In city now</span>
      </div>
    </div>
  )
}
