import Script from 'next/script'
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P3PDGL3J');`,
          }}
        />
        {/* Meta Pixel moved into PixelGate so it is suppressed on /m/ medical
            paid-social pages (HIPAA carve-out, H-26). /c/ funnel unaffected. */}
      </head>
      <body>
        <PixelGate />
        <Fab client="ohio-hair" />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3PDGL3J"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
