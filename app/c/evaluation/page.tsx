import type { Metadata } from 'next'
import OhioLP from '@/components/OhioLP'

export const metadata: Metadata = {
  title: 'Hair Loss Medical Evaluation | Ohio Hair Solutions',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return (
    <OhioLP
      heroFormId="gfXQClpZJZctds8JMAlP"
      bottomFormId="FCdawfjQDBHKFZLLHz06"
      h1="MEDICAL EVALUATION FOR THINNING HAIR & HAIR LOSS CONDITIONS"
      heroSub="Discover what causes hair loss and learn which treatment options fit each patient’s goals and hair biology."
    />
  )
}
