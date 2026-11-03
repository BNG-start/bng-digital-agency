import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'BNG Digital Agency — Excellence digitale à Bamako & à l’international'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0A0A0A',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              backgroundColor: '#2563EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              fontWeight: 900,
            }}
          >
            B
          </div>
          <div style={{ fontSize: '28px', letterSpacing: '6px', color: '#2563EB', fontWeight: 700 }}>
            DIGITAL AGENCY
          </div>
        </div>
        <div style={{ fontSize: '72px', fontWeight: 900, lineHeight: 1.1 }}>
          Excellence digitale
        </div>
        <div style={{ fontSize: '40px', color: '#9CA3AF', marginTop: '16px' }}>
          Bamako • International
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
