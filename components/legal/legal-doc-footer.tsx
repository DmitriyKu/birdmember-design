import Image from 'next/image'
import Link from 'next/link'

export function LegalDocFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 px-4 py-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/birdmember-logo-horizontal.svg"
            alt="Birdmember — only flight crew"
            width={3000}
            height={800}
            className="h-12 w-auto max-w-full md:h-14"
          />
        </Link>

        <p className="text-center text-sm text-white/60">The verified global crew network</p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link href="/privacy" className="text-white/60 transition-colors hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="text-white/60 transition-colors hover:text-white">
            Terms
          </Link>
          <Link href="/" className="text-white/60 transition-colors hover:text-white">
            Home
          </Link>
        </div>

        <p className="text-center text-sm text-white/40">
          © {new Date().getFullYear()} Birdmember. Crew only platform.
        </p>
      </div>
    </footer>
  )
}
