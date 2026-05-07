export function PlasticOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute -top-[30%] left-[-35%] w-[140%] h-[80%] rotate-[12deg] bg-gradient-to-b from-white/35 via-white/8 to-transparent blur-[0.5px] opacity-60" />
    </div>
  )
}
