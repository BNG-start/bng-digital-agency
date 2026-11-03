import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    console.warn(
      '[sitemap] NEXT_PUBLIC_SITE_URL n’est pas défini — le sitemap utilise des URLs relatives. Ajoutez votre domaine public dans .env.local.'
    )
  }
  const base = siteUrl ?? ''
  const routes = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/portfolio', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/legal', changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  return routes.map((route) => ({
    url: `${base}${route.path || '/'}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
