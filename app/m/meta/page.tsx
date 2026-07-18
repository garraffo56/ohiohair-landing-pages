import type { Metadata } from 'next'
import OhioMetaLP from '@/components/OhioMetaLP'

export const metadata: Metadata = {
  title: 'Hair Restoration Consultation | See If You’re a Candidate | Ohio Hair Solutions',
  description:
    'A private, personalized consultation to evaluate your hair loss, treatment options, and expected results—guided by experienced medical professionals in Ohio. Not a sales appointment.',
  robots: 'noindex, nofollow',
  openGraph: {
    images: [{ url: 'https://hair.ohiohairsolutions.com/og/m-meta.webp', width: 1200, height: 630, alt: 'Hair restoration consultation at Ohio Hair Solutions' }],
  },
  twitter: { card: 'summary_large_image', images: ['https://hair.ohiohairsolutions.com/og/m-meta.webp'] },
}

export default function MMeta() {
  return <OhioMetaLP />
}
