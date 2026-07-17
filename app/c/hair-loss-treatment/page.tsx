import type { Metadata } from 'next'
import OhioLP from '@/components/OhioLP'

export const metadata: Metadata = {
  title: 'Hair Loss Treatment Options | Ohio Hair Solutions',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return (
    <OhioLP
      heroFormId="gfXQClpZJZctds8JMAlP"
      bottomFormId="FCdawfjQDBHKFZLLHz06"
      h1="HAIR LOSS TREATMENT PLANNING, LED BY A PHYSICIAN"
      heroSub="An evaluation-first approach: understand the cause, then review medically appropriate treatment options."
    />
  )
}
