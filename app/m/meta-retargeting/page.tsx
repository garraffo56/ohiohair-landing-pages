import type { Metadata } from 'next'
import OhioMetaRetargetingLP from '@/components/OhioMetaRetargetingLP'

export const metadata: Metadata = {
  title: 'See If You’re a Candidate | Hair Restoration in Ohio | Ohio Hair Solutions',
  description:
    'Worried about surgery or shaving? Get answers in 60 seconds. Ohio Hair Solutions protects your donor area and plans for natural-looking results based on your hair loss pattern.',
  robots: 'noindex, nofollow',
  openGraph: {
    images: [{ url: 'https://hair.ohiohairsolutions.com/og/m-meta-retargeting.webp', width: 1200, height: 630, alt: 'See if you’re a candidate for hair restoration in Ohio' }],
  },
  twitter: { card: 'summary_large_image', images: ['https://hair.ohiohairsolutions.com/og/m-meta-retargeting.webp'] },
}

export default function MMetaRetargeting() {
  return <OhioMetaRetargetingLP />
}
