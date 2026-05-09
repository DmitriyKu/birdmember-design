import { Polaroid } from '@/components/sections/solution/polaroid'
import { PolaroidLocked } from '@/components/sections/solution/polaroid-locked'

export function PolaroidCollage() {
  return (
    <div className="relative lg:pt-6">
      <div className="relative mx-auto max-w-[720px] h-[720px] sm:h-[760px] hidden lg:block">
        <div className="absolute inset-0 rounded-[48px] bg-white/5 blur-3xl opacity-60" aria-hidden="true" />

        <div className="absolute left-[-4%] top-[0%] animate-float rotate-[-4deg]" style={{ animationDuration: '7.4s' }}>
          <Polaroid
            imageSrc="/crew-shanghai-selfie.png"
            imageAlt="Crew selfie in the city"
            captionTop="Tokyo • 01:47 AM"
            captionBottom="JL + NH crew"
          />
        </div>

        <div className="absolute right-[-9%] top-[4%] animate-float-delayed rotate-[3deg]" style={{ animationDuration: '8.3s' }}>
          <Polaroid
            imageSrc="/crew-dinner-table.png"
            imageAlt="Crew dinner during layover"
            captionTop="Dubai • 10:32 PM"
            captionBottom="EK + QR crew"
            tape
          />
        </div>

        <div className="absolute left-[-2%] bottom-[-2%] animate-float-delayed-2 rotate-[2deg]" style={{ animationDuration: '9.1s' }}>
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

        <div
          className="absolute left-[22%] top-[14%] animate-float-delayed-2 rotate-[-5deg] scale-[0.94] z-[2]"
          style={{ animationDuration: '8.9s' }}
        >
          <Polaroid
            imageSrc="/crew-cafe-pilot.png"
            imageAlt="Crew at a café during layover"
            captionTop="Lisbon • 09:14 AM"
            captionBottom="TP + UX crew"
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
      <div className="relative mx-auto max-w-[320px] min-h-[540px]">
        <div className="absolute inset-0 rounded-[38px] bg-white/5 blur-2xl opacity-70" aria-hidden="true" />

        <div className="absolute left-[38%] top-0 -translate-x-1/2 animate-float rotate-[-2deg]" style={{ animationDuration: '7.6s' }}>
          <Polaroid
            imageSrc="/crew-dinner-table.png"
            imageAlt="Crew dinner during layover"
            captionTop="Dubai • 10:32 PM"
            captionBottom="Met through Birdmember"
            tape
          />
        </div>

        <div
          className="absolute right-[-28px] top-[165px] animate-float-delayed-2 rotate-[4deg] scale-[0.82]"
          style={{ animationDuration: '8.1s' }}
        >
          <Polaroid
            imageSrc="/crew-cafe-pilot.png"
            imageAlt="Crew at a café during layover"
            captionTop="Lisbon • 09:14 AM"
            captionBottom="TP + UX crew"
          />
        </div>

        <div className="absolute left-[40%] top-[320px] -translate-x-1/2 animate-float-delayed rotate-[2deg] scale-[0.92]" style={{ animationDuration: '8.4s' }}>
          <PolaroidLocked />
        </div>
      </div>
    </div>
  )
}
