import Script from 'next/script'
import GaTag from '@/components/GaTag'
import Fab from '@/components/fab/Fab'
import PixelGate from '@/components/PixelGate'
import './globals.css'

export const metadata = {
  openGraph: {
    images: [{ url: '/images/ohio-logo.png', width: 1016, height: 239, alt: 'Ohio Hair Solutions' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel moved into PixelGate so it is suppressed on /m/ medical
            paid-social pages (HIPAA carve-out, H-26). /c/ funnel unaffected. */}
      </head>
      <body>
          <GaTag />
        <PixelGate />
        <Fab client="ohio-hair" />
        {children}
      </body>
    </html>
  )
}
