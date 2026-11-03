import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

export const metadata: Metadata = {
  title: "L'agence — Excellence digitale depuis Bamako",
  description:
    "BNG Digital Agency : mission, vision et valeurs d'une agence digitale premium basée à Bamako, au service de clients locaux et internationaux.",
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/about` } } : {}),
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
