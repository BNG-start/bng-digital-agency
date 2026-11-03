import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

export const metadata: Metadata = {
  title: 'Mentions légales & confidentialité',
  description:
    "Mentions légales, protection des données personnelles et propriété intellectuelle du site BNG Digital Agency.",
  robots: { index: false, follow: true },
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/legal` } } : {}),
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children
}
