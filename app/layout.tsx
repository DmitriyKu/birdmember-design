import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'Birdmember | The First Verified Global Crew Network',
    template: '%s | Birdmember',
  },
  description:
    'The exclusive social network for verified airline crew. Connect with pilots and cabin crew during layovers. No passengers, no outsiders. Apply for early access.',
  applicationName: 'Birdmember',
  keywords: [
    'airline crew app',
    'pilot networking',
    'cabin crew community',
    'layover app',
    'crew social network',
    'verified crew network',
  ],
  authors: [{ name: 'Birdmember' }],
  creator: 'Birdmember',
  publisher: 'Birdmember',
  category: 'social networking',
  openGraph: {
    title: 'Birdmember | The First Verified Global Crew Network',
    description: 'Connect with verified pilots and cabin crew during layovers. Crew only.',
    type: 'website',
    siteName: 'Birdmember',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birdmember | The First Verified Global Crew Network',
    description: 'Connect with verified pilots and cabin crew during layovers. Crew only.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
