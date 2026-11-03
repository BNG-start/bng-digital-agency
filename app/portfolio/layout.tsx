import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

export const metadata: Metadata = {
  title: 'Portfolio — Nos projets clients',
  description:
    "Explorez nos réalisations : Coulba Services, A&A Food', BBK Barber Shop, Dia'agro, Love Connect. Logiciel sur mesure, branding, packaging, web et vidéo par BNG Digital Agency à Bamako.",
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/portfolio` } } : {}),
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
