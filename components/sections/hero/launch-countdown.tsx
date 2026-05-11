'use client'

import { useEffect, useMemo, useState } from 'react'

function pad2(n: number) {
  return String(n).padStart(2, '0')
}

function getParts(target: Date) {
  const now = new Date()
  const totalMs = Math.max(0, target.getTime() - now.getTime())
  const totalSeconds = Math.floor(totalMs / 1000)

  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { totalMs, days, hours, minutes, seconds }
}

export function LaunchCountdown() {
  const target = useMemo(() => new Date('2026-07-01T00:00:00'), [])
  const [parts, setParts] = useState<ReturnType<typeof getParts> | null>(null)

  useEffect(() => {
    setParts(getParts(target))

    const id = window.setInterval(() => setParts(getParts(target)), 250)
    return () => window.clearInterval(id)
  }, [target])

  if (!parts || parts.totalMs <= 0) return null

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-5 py-4 shadow-xl">
        <div className="grid grid-cols-4 gap-2">
          <TimeCell value={String(parts.days)} label="Days" />
          <TimeCell value={pad2(parts.hours)} label="Hours" />
          <TimeCell value={pad2(parts.minutes)} label="Min" />
          <TimeCell value={pad2(parts.seconds)} label="Sec" />
        </div>
      </div>
    </div>
  )
}

function TimeCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-black/15 border border-white/10 px-3 py-3">
      <div className="text-white text-2xl md:text-3xl font-bold tabular-nums leading-none">{value}</div>
      <div className="text-white/60 text-[11px] mt-2 font-medium tracking-wide">{label}</div>
    </div>
  )
}
