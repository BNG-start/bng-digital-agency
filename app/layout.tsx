import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: 'BNG Digital Agency — Excellence digitale à Bamako & à l’international',
    template: '%s | BNG Digital Agency',
  },
  description:
    'BNG Digital Agency à Bamako : création de sites web Next.js, branding, marketing digital et production vidéo. Des expériences numériques premium qui captivent et convertissent, au Mali et à l’international.',
  keywords: [
    'agence digitale Bamako',
    'création site web Mali',
    'développement web Next.js',
    'branding Mali',
    'marketing digital Bamako',
    'production vidéo Bamako',
    'BNG Digital Agency',
  ],
  authors: [{ name: 'BNG Digital Agency' }],
  creator: 'BNG Digital Agency',
  robots: { index: true, follow: true },
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'BNG Digital Agency',
    title: 'BNG Digital Agency — Excellence digitale à Bamako & à l’international',
    description:
      'Création web, branding, marketing digital et production vidéo. BNG propulse les entreprises maliennes vers des sommets internationaux.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BNG Digital Agency',
    description: 'Excellence digitale à Bamako & à l’international : web, branding, marketing, vidéo.',
  },
}

export const viewport = {
  themeColor: '#0A0A0A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#0A0A0A] text-white"> 
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
