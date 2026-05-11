import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

type StoryPanelProps = {
  variant: 'before' | 'after'
}

export function StoryPanel({ variant }: StoryPanelProps) {
  const isBefore = variant === 'before'

  return (
    <div
      className={[
        'relative flex-1 min-h-[520px] rounded-[32px] overflow-hidden shadow-2xl shadow-black/25',
        isBefore ? 'md:[border-top-right-radius:260px]' : 'md:[border-top-left-radius:260px]',
      ].join(' ')}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={isBefore ? '/layover-lonely.png' : '/crew-dinner-table.png'}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          style={{
            objectPosition: 'center',
            WebkitMaskImage:
              'linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%)',
            maskImage:
              'linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 22%, rgba(0,0,0,1) 100%)',
          }}
          priority={false}
        />
      </div>

      <div
        className={[
          'absolute top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3 py-2 text-white/80 text-xs font-medium',
          isBefore ? 'left-5' : 'right-5',
        ].join(' ')}
      >
        {isBefore ? 'Most layovers' : 'With Birdmember'}
      </div>

      <div className={['absolute left-5 right-5 bottom-5', isBefore ? '' : 'text-right'].join(' ')}>
        {isBefore ? <BeforeList /> : <AfterList />}
      </div>
    </div>
  )
}

function BeforeList() {
  return (
    <>
      <ul className="space-y-2 text-white/80 text-sm">
        {['Long hours alone', 'No one from your world', 'Another night in the hotel'].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 text-[10px]">×</span>
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-white/70 text-sm font-medium">Layovers can feel isolating.</p>
    </>
  )
}

function AfterList() {
  return (
    <>
      <ul className="space-y-2 text-white/80 text-sm">
        {['Crew you can trust', 'Plans that happen', 'Memories that stay'].map((item) => (
          <li key={item} className="flex items-center justify-end gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-white/80 text-sm font-medium">Layovers you&apos;ll actually look forward to.</p>
    </>
  )
}
