import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BNG Digital Agency',
    short_name: 'BNG',
    description:
      'Agence digitale premium à Bamako : création web, branding, marketing digital et production vidéo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [{ src: '/icon.png', sizes: 'any', type: 'image/png' }],
  }
}
