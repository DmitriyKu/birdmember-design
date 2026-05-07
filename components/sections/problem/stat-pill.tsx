import type { ReactNode } from 'react'

export function StatPill({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
      <div className="text-white/55">{icon}</div>
      <div className="text-sm font-medium text-white/75">{label}</div>
    </div>
  )
}
