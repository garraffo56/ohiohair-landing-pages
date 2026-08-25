import Script from 'next/script'
import DniSwap from '@/components/DniSwap'
import GaTag from '@/components/GaTag'
import Fab from '@/components/fab/Fab'
import PixelGate from '@/components/PixelGate'
import './globals.css'

export const metadata = {
  // Without metadataBase, Next resolves relative metadata URLs against
  // http://localhost:3000 and the deployed pages advertise that to the public
  // internet. Verified live 2026-08-25: og:image was
  // http://localhost:3000/images/ohio-logo.png on every /c route.
  metadataBase: new URL('https://hair.ohiohairsolutions.com'),
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
        <DniSwap />
        {children}
      </body>
    </html>
  )
}
