'use client'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

// HIPAA carve-out (H-26 / medical §6 FM7): the Meta Pixel (fbq) loads site-wide
// for the /c/ funnel, but MUST NOT load on the /m/ paid-social pages — those are
// consult/form pages with health intent. Attribution for /m/ rides server-side
// CAPI instead. This gate returns null on /m/*, so window.fbq stays undefined
// there while /c/ pages are unaffected.
export default function PixelGate() {
  const pathname = usePathname()
  if (pathname?.startsWith('/m/')) return null

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '378986818283963');
fbq('track', 'PageView');`,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=378986818283963&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  )
}
