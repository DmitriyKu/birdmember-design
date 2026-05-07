import type { ReactNode } from 'react'

export function PhoneFrame({ children, compact }: { children: ReactNode; compact?: boolean }) {
  const size = compact ? 'w-full' : 'w-[224px]'

  return (
    <div
      className={[
        'relative rounded-[44px] bg-[#0b0f15] shadow-2xl shadow-black/60',
        'transform-gpu',
        '[-webkit-mask-image:-webkit-radial-gradient(white,black)]',
        size,
      ].join(' ')}
    >
      {!compact && (
        <>
          <div className="absolute -left-1 top-20 h-10 w-1 rounded-full bg-white/10" aria-hidden="true" />
          <div className="absolute -right-1 top-28 h-14 w-1 rounded-full bg-white/10" aria-hidden="true" />
        </>
      )}

      <div className="p-[6px] rounded-[44px] bg-gradient-to-b from-white/10 via-white/5 to-white/8">
        <div className="relative rounded-[38px] overflow-hidden bg-black">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[6px] h-[14px] w-[72px] rounded-full bg-black/85 border border-white/10"
            aria-hidden="true"
          />

          {children}

          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -top-[35%] left-[-40%] w-[160%] h-[85%] rotate-[12deg] bg-gradient-to-b from-white/18 via-white/6 to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </div>
  )
}
