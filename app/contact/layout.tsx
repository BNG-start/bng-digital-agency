import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

export const metadata: Metadata = {
  title: 'Contact — BNG Digital Agency',
  description: "Discutons de votre projet digital. Contactez BNG Digital Agency à Bamako pour vos besoins en développement web, branding, marketing digital et production vidéo.",
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/contact` } } : {}),
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
