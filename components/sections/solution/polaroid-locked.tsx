import { PlasticOverlay } from '@/components/sections/solution/plastic-overlay'

export function PolaroidLocked() {
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
