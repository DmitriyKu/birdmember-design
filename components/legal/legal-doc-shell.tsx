import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LegalDocFooter } from '@/components/legal/legal-doc-footer'

export function LegalDocShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-white/10 px-4 py-6">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link href="/" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            ← Back to Birdmember
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 md:py-16">
        <div className="mb-10 flex justify-center md:justify-start">
          <Link href="/" className="inline-flex">
            <Image
              src="/birdmember-footer-logo.png"
              alt="Birdmember — only flight crew"
              width={1024}
              height={282}
              className="h-14 w-auto max-w-full md:h-16"
              priority
            />
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <div className="mt-10 space-y-10 text-sm leading-relaxed text-white/80 md:text-base [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mt-8 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-white/95 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-inside [&_ul]:list-disc [&_ul]:space-y-2 [&_a]:text-secondary [&_a]:underline-offset-2 hover:[&_a]:text-white">
          {children}
        </div>
      </main>

      <LegalDocFooter />
    </div>
  )
}
