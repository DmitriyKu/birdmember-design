import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { InitialSplash } from '@/components/splash/initial-splash'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const siteDescription =
  'The exclusive social network for verified airline crew. Connect with pilots and cabin crew during layovers. No passengers, no outsiders. Apply for early access.'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Birdmember',
  url: 'https://birdmember.com',
  logo: 'https://birdmember.com/birdmember-logo-horizontal.svg',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Birdmember',
  url: 'https://birdmember.com',
  description: siteDescription,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://birdmember.com'),
  title: {
    default: 'Birdmember | The First Verified Global Crew Network',
    template: '%s | Birdmember',
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
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
    url: '/',
    images: [
      {
        url: '/birdmember-logo-horizontal.svg',
        width: 3000,
        height: 800,
        alt: 'Birdmember',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birdmember | The First Verified Global Crew Network',
    description: 'Connect with verified pilots and cabin crew during layovers. Crew only.',
    images: ['/birdmember-logo-horizontal.svg'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <InitialSplash>{children}</InitialSplash>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
