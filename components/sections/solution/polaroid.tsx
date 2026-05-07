import Image from 'next/image'
import { PlasticOverlay } from '@/components/sections/solution/plastic-overlay'

export function Polaroid({
  imageSrc,
  imageAlt,
  captionTop,
  captionBottom,
  tape,
}: {
  imageSrc: string
  imageAlt: string
  captionTop: string
  captionBottom: string
  tape?: boolean
}) {
  return (
    <div className="relative w-[260px] sm:w-[280px]">
      {tape && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 rounded-md bg-white/60 rotate-[4deg] shadow-sm"
          aria-hidden="true"
        />
      )}

      <div className="bg-white text-[#0b1b2a] shadow-2xl shadow-black/30 border border-black/15 overflow-hidden">
        <PlasticOverlay />

        <div className="p-4 pb-2">
          <div className="relative overflow-hidden border border-black/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={560}
              height={420}
              className="w-full h-[170px] object-cover"
              priority={false}
            />
          </div>
        </div>

        <div className="px-4 pb-6 pt-1">
          <div className="text-[12px] font-semibold tracking-wide">{captionTop}</div>
          <div className="text-[12px] text-black/70 font-medium mt-1">{captionBottom}</div>
        </div>
      </div>
    </div>
  )
}
