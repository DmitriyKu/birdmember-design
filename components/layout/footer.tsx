import Image from 'next/image'

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/birdmember-logo.png"
              alt="Birdmember"
              width={240}
              height={62}
              className="h-10 w-auto"
            />
          </a>

          {/* Tagline */}
          <p className="text-white/60 text-sm">
            The verified global crew network
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Terms
            </a>
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
