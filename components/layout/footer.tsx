import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/birdmember-logo-horizontal.svg"
              alt="Birdmember — only flight crew"
              width={3000}
              height={800}
              className="h-14 w-auto max-w-full md:h-16"
            />
          </Link>

          {/* Tagline */}
          <p className="text-white/60 text-sm">
            The verified global crew network
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Birdmember. Crew only platform.
          </p>
        </div>
      </div>
    </footer>
  )
}
