import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

export const metadata: Metadata = {
  title: 'Services — Création web, branding, marketing & vidéo',
  description:
    "Découvrez les expertises BNG : sites web Next.js ultra-performants, identités visuelles premium, marketing digital et production vidéo à Bamako et à l'international.",
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/services` } } : {}),
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
