import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

export const metadata: Metadata = {
  title: 'Mini-jeux de marque — Jeux concours à vos couleurs',
  description:
    "Des mini-jeux à vos couleurs pour vos concours et vos réseaux sociaux : vos clients jouent, partagent leur score et vous laissent leur email. Démos jouables.",
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/mini-jeux` } } : {}),
}

export default function MiniJeuxLayout({ children }: { children: React.ReactNode }) {
  return children
}
