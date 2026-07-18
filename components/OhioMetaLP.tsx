'use client'
import { Suspense } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

// Recreation of start.ohiohairsolutions.com/meta/ (paid-social consult LP) on the
// fleet. Adlakha / Advanced FUE Hair Transplants in Ohio brand. Copy reproduced
// verbatim from source (medical copy NOT softened — Joe waived ad-policy softening
// for Meta). No browser Meta Pixel on this page — HIPAA carve-out (H-26); the site
// pixel is gated off /m/ in PixelGate. Attribution rides server-side CAPI.

const GOLD = '#D9B26A'
const GOLD_DK = '#a0823f'
const INK = '#1a1a1a'
const TEXT = '#333333'
const MIST = '#F4F1EA'
const GREY = '#F7F7F7'
const NAVY = '#1a1a1a'
const WHITE = '#ffffff'
const H_FONT = "'Gilda Display', Georgia, serif"
const B_FONT = "'Roboto', sans-serif"

const PHONE_DISPLAY = '(234) 404-3349'
const PHONE_TEL = '+12344043349'
const HERO_FORM_ID = 'FGB68drSpkk4Wy3A9sSZ'
const BOTTOM_FORM_ID = '4jPEFBnceo2S8zDWaWcm'

const Check = () => (
  <span style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, background: GOLD, borderRadius: '50%' }}>
    <svg width="11" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 1L5 9L1 5" stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

function Cta({ label, href = '#final-form', dark = false }: { label: string; href?: string; dark?: boolean }) {
  return (
    <a href={href} style={{
      display: 'inline-block',
      background: dark ? 'transparent' : GOLD,
      color: dark ? WHITE : INK,
      border: dark ? `2px solid ${GOLD}` : 'none',
      fontFamily: B_FONT, fontWeight: 700, fontSize: 14, letterSpacing: '0.4px',
      textTransform: 'uppercase', padding: '15px 30px', borderRadius: 62, textDecoration: 'none',
    }}>{label}</a>
  )
}

export default function OhioMetaLP() {
  return (
    <main style={{ fontFamily: B_FONT, color: TEXT, background: WHITE }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* HERO with nav overlaid */}
      <section style={{ position: 'relative', background: '#0d0d0d', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/img/m/hero.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,10,12,0.86) 0%, rgba(10,10,12,0.68) 45%, rgba(10,10,12,0.42) 100%)' }} aria-hidden="true" />

        {/* NAV */}
        <nav className="ohio-nav" style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 48px', background: 'transparent' }}>
          <img src="/img/m/logo-light.webp" alt="Adlakha — Advanced FUE Hair Transplants in Ohio" className="ohio-nav-logo" style={{ height: 44, width: 'auto' }} />
          <div className="ohio-nav-btns" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a href="#consult-form" className="ohio-nav-btn" style={{ background: WHITE, color: INK, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.4px', padding: '12px 22px', borderRadius: 62, textDecoration: 'none' }}>Book a Consult</a>
            <a href={`tel:${PHONE_TEL}`} className="ohio-nav-btn" style={{ background: GOLD, color: INK, fontWeight: 700, fontSize: 13, padding: '12px 20px', borderRadius: 62, textDecoration: 'none' }}>{PHONE_DISPLAY}</a>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="m-hero-grid ohio-pad" style={{ position: 'relative', zIndex: 3, display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 44, alignItems: 'start', maxWidth: 1200, margin: '0 auto', padding: '54px 48px 68px' }}>
          <div>
            <h1 style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 44, lineHeight: 1.16, color: WHITE, maxWidth: 560 }}>
              See If Hair Restoration Is Right For You&mdash;Before You Commit to Surgery
            </h1>
            <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', maxWidth: 520 }}>
              A private, personalized consultation to evaluate your hair loss, treatment options, and expected results&mdash;guided by experienced medical professionals.
            </p>
            <div className="m-trust-grid" style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, maxWidth: 460 }}>
              {['Real procedures', 'Personalized care', 'Real patients', 'Performed in-clinic'].map(label => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Check />
                  <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.92)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="consult-form" style={{ background: WHITE, borderRadius: 14, boxShadow: '0 18px 50px rgba(0,0,0,0.35)', padding: '26px 24px', alignSelf: 'start' }}>
            <h2 style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 22, color: INK, textAlign: 'center', marginBottom: 4 }}>Request Your Consultation</h2>
            <p style={{ fontSize: 13.5, color: TEXT, textAlign: 'center', margin: '0 0 14px' }}>Every treatment plan is customized&mdash;no templates, no shortcuts.</p>
            <GhlForm formId={HERO_FORM_ID} height={400} formName="Request Your Consultation - Ohio Meta" />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF — Actual Patient Results */}
      <section style={{ background: WHITE, padding: '54px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="m-ba-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {['/img/m/ba1.webp', '/img/m/ba2.webp', '/img/m/ba3.webp'].map(src => (
              <div key={src}>
                <img src={src} alt="Actual patient results before and after" style={{ width: '100%', borderRadius: 12, display: 'block' }} />
                <p style={{ fontWeight: 700, color: INK, fontSize: 14, marginTop: 10 }}>Actual Patient Results</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12.5, color: '#8a7a55', marginTop: 16 }}>Individual results vary.</p>
        </div>
      </section>

      {/* THIS IS NOT A SALES APPOINTMENT */}
      <section style={{ background: MIST, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="ohio-h2" style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 32, color: INK, margin: '0 0 12px' }}>
            This Is Not a Sales Appointment
          </h2>
          <p style={{ fontSize: 16, color: TEXT, margin: '0 auto 36px', maxWidth: 640, lineHeight: 1.65 }}>
            A comprehensive medical consultation focused on your health, eligibility, and long-term success.
          </p>
          <div className="ohio-cards-grid m-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, textAlign: 'left' }}>
            {[
              ['Medical Eligibility', 'Determine whether you’re medically eligible'],
              ['Review Options', 'Review surgical and non-surgical options'],
              ['Realistic Outcomes', 'Understand realistic outcomes and timelines'],
              ['Safety & Planning', 'Discuss recovery, safety, and long-term planning'],
            ].map(([t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 14, background: WHITE, border: '1px solid #ece7dc', borderRadius: 12, padding: '20px 22px' }}>
                <Check />
                <div>
                  <h3 style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 18, color: INK, margin: '0 0 4px' }}>{t}</h3>
                  <p style={{ fontSize: 14.5, color: TEXT, margin: 0, lineHeight: 1.55 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15.5, color: INK, fontWeight: 700, margin: '32px auto 0', maxWidth: 640, lineHeight: 1.6 }}>
            A comprehensive medical consultation focused on your health, eligibility, and long-term success.
          </p>
        </div>
      </section>

      {/* PERMANENT */}
      <section className="m-perm-grid ohio-pad" style={{ background: WHITE, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'center', maxWidth: 1100, margin: '0 auto', padding: '64px 48px' }}>
        <img src="/img/m/consult.webp" alt="Patient in a hair restoration consultation" style={{ width: '100%', borderRadius: 12, display: 'block' }} />
        <div>
          <h2 className="ohio-h2" style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 30, color: INK, margin: '0 0 18px', lineHeight: 1.25 }}>
            Hair Restoration Is Permanent&mdash;Mistakes Are Too
          </h2>
          <p style={{ fontSize: 15.5, color: TEXT, margin: '0 0 14px', lineHeight: 1.7 }}>
            Hair restoration isn&rsquo;t cosmetic filler. It&rsquo;s a permanent medical procedure that requires careful planning and skilled execution.
          </p>
          <p style={{ fontSize: 15.5, color: INK, fontWeight: 500, margin: 0, lineHeight: 1.7 }}>
            This consultation exists to help you avoid rushed decisions, over-harvesting, and unnatural results&mdash;and to determine whether treatment makes sense for you at all.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: GREY, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <h2 className="ohio-h2" style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 32, color: INK, textAlign: 'center', margin: '0 0 40px' }}>
            How It Works
          </h2>
          <div className="m-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginBottom: 28 }}>
            {[
              ['1', 'Request a Consultation', 'Submit a short, private form.'],
              ['2', 'Speak With a Patient Advisor', 'Review your goals and next steps.'],
              ['3', 'In-Clinic Evaluation', 'Confirm candidacy and personalized options.'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, margin: '0 auto 16px', borderRadius: '50%', background: GOLD, color: INK, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800, fontFamily: H_FONT }}>{n}</div>
                <h3 style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 19, color: INK, margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 15, color: TEXT, margin: 0, lineHeight: 1.55 }}>{d}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 14, color: '#8a7a55', fontStyle: 'italic', margin: '0 0 24px' }}>
            No obligation. Private and confidential.
          </p>
          <div style={{ textAlign: 'center' }}><Cta label="See If I’m a Candidate" href="#final-form" /></div>
        </div>
      </section>

      {/* INCENTIVE */}
      <section style={{ background: NAVY, padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 26, color: WHITE, margin: '0 0 12px' }}>
            Limited Consultation Incentive Available
          </h2>
          <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.7 }}>
            Qualified candidates may be eligible for preferred pricing during their consultation.
          </p>
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section className="m-final-grid ohio-pad" style={{ background: WHITE, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', maxWidth: 1080, margin: '0 auto', padding: '64px 48px' }}>
        <div>
          <h2 className="ohio-h2" style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 34, color: INK, margin: '0 0 16px', lineHeight: 1.2 }}>
            If You&rsquo;re Going to Do This, Do It Informed
          </h2>
          <p style={{ fontSize: 15.5, color: TEXT, margin: '0 0 22px', lineHeight: 1.7 }}>
            Request your private evaluation with our medical team. No obligation, no pressure&mdash;just a clear, honest picture of your options.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href={`tel:${PHONE_TEL}`} style={{ color: INK, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>{PHONE_DISPLAY}</a>
            <a href="mailto:info@ohiohairsolutions.com" style={{ color: INK, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>info@ohiohairsolutions.com</a>
            <span style={{ color: TEXT, fontSize: 15 }}>3951 Convenience Circle, Suite 101, Canton, OH 44718</span>
          </div>
        </div>
        <div id="final-form" style={{ background: GREY, border: '1px solid #ece7dc', borderRadius: 14, padding: '26px 24px' }}>
          <h3 style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 21, color: INK, textAlign: 'center', margin: '0 0 14px' }}>Check My Eligibility</h3>
          <GhlForm formId={BOTTOM_FORM_ID} height={440} formName="Check My Eligibility - Ohio Meta" />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: NAVY, color: 'rgba(255,255,255,0.7)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 18 }}>
            <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/cookie-policy" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none' }}>Cookie Policy</a>
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.7, margin: '0 0 16px' }}>
            <strong style={{ color: WHITE }}>Medical Disclaimer:</strong> This website provides general information about hair restoration procedures. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Individual results may vary. Not all candidates are eligible for treatment. A medical consultation is required to determine candidacy.
          </p>
          <p style={{ fontSize: 12, margin: 0 }}>&copy; 2026 Ohio Hair Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
