import type { Metadata } from 'next'
import OhioLP from '@/components/OhioLP'

export const metadata: Metadata = {
  title: 'Hair Restoration | Ohio Hair Solutions',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return (
    <OhioLP
      heroFormId="gfXQClpZJZctds8JMAlP"
      bottomFormId="FCdawfjQDBHKFZLLHz06"
      h1="HAIR RESTORATION GUIDED BY A BOARD-CERTIFIED PHYSICIAN"
      heroSub="Doctor-led evaluation and personalized treatment planning for thinning hair, grounded in medical safety."
    />
  )
}
