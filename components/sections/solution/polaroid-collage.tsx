import { Polaroid } from '@/components/sections/solution/polaroid'
import { PolaroidLocked } from '@/components/sections/solution/polaroid-locked'

export function PolaroidCollage() {
  return (
    <div className="relative lg:pt-6">
      <div className="relative mx-auto max-w-[720px] h-[700px] sm:h-[740px] hidden lg:block">
        <div className="absolute inset-0 rounded-[48px] bg-white/5 blur-3xl opacity-60" aria-hidden="true" />

        <div className="absolute left-[1%] top-[0%] animate-float rotate-[-4deg]" style={{ animationDuration: '7.4s' }}>
          <Polaroid
            imageSrc="/crew-shanghai-selfie.png"
            imageAlt="Crew selfie in the city"
            captionTop="Tokyo • 01:47 AM"
            captionBottom="JL + NH crew"
          />
        </div>

        <div className="absolute right-[2%] top-[4%] animate-float-delayed rotate-[3deg]" style={{ animationDuration: '8.3s' }}>
          <Polaroid
            imageSrc="/crew-dinner-table.png"
            imageAlt="Crew dinner during layover"
            captionTop="Dubai • 10:32 PM"
            captionBottom="EK + QR crew"
            tape
          />
        </div>

        <div className="absolute left-[6%] bottom-[-2%] animate-float-delayed-2 rotate-[2deg]" style={{ animationDuration: '9.1s' }}>
          <Polaroid
            imageSrc="/crew-paris-cafe.png"
            imageAlt="Crew café moment"
            captionTop="Singapore • 03:21 PM"
            captionBottom="SQ + TR crew"
          />
        </div>

        <div className="absolute left-[40%] top-[40%] animate-float rotate-[1deg]" style={{ animationDuration: '9.4s' }}>
          <Polaroid
            imageSrc="/crew-market-walk.png"
            imageAlt="Crew sightseeing moment"
            captionTop="Istanbul • 11:58 PM"
            captionBottom="TK • PC crew"
            tape
          />
        </div>

        <div className="absolute right-[4%] bottom-[4%] animate-float rotate-[-2deg]" style={{ animationDuration: '10.2s' }}>
          <PolaroidLocked />
        </div>
      </div>

      <MobilePolaroidCollage />
    </div>
  )
}

function MobilePolaroidCollage() {
  return (
    <div className="lg:hidden mt-10">
      <div className="relative mx-auto max-w-[320px] min-h-[420px]">
        <div className="absolute inset-0 rounded-[38px] bg-white/5 blur-2xl opacity-70" aria-hidden="true" />

        <div className="absolute left-1/2 top-0 -translate-x-1/2 animate-float rotate-[-2deg]" style={{ animationDuration: '7.6s' }}>
          <Polaroid
            imageSrc="/crew-dinner-table.png"
            imageAlt="Crew dinner during layover"
            captionTop="Dubai • 10:32 PM"
            captionBottom="Met through Birdmember"
            tape
          />
        </div>

        <div className="absolute left-1/2 top-[210px] -translate-x-1/2 animate-float-delayed rotate-[2deg] scale-[0.92]" style={{ animationDuration: '8.4s' }}>
          <PolaroidLocked />
        </div>
      </div>
    </div>
  )
}
