'use client'
import { Suspense } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

// ── DESIGN TOKENS (from live start.ohiohairsolutions.com capture 2026-07-17) ──
const GOLD  = '#D9B26A'
const INK   = '#1a1a1a'
const TEXT  = '#333333'
const GREY  = '#F7F7F7'
const MIST  = '#F4F1EA'
const WHITE = '#ffffff'
const STAR  = '#D9B26A'

const H_FONT = "'Gilda Display', Georgia, serif"
const B_FONT = "'Roboto', sans-serif"

const PHONE_DISPLAY = '(234) 404-5506'
const PHONE_TEL = '+12344045506'

function CtaButton({ label, href = '#consult-form' }: { label: string; href?: string }) {
  return (
    <a href={href} style={{
      display: 'inline-block', background: GOLD, color: INK, fontFamily: B_FONT,
      fontWeight: 700, fontSize: 15, letterSpacing: '0.4px', textTransform: 'uppercase',
      padding: '15px 30px', borderRadius: 62, textDecoration: 'none',
    }}>{label}</a>
  )
}

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3 }} aria-label="5 star rating">
      {[0,1,2,3,4].map(i => (
        <svg key={i} width="17" height="17" viewBox="0 0 20 20" fill={STAR} aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

function Circle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 96, height: 96, borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{children}</div>
  )
}

const ic = { width: 44, height: 44, viewBox: '0 0 24 24', fill: 'none' as const, stroke: INK, strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
const CalendarGlyph = () => (<svg {...ic} aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /><path d="M9 15l2 2 4-4" /></svg>)
const PatientGlyph = () => (<svg {...ic} aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-3.9 3.6-7 8-7s8 3.1 8 7" /><path d="M15.5 11.5l1.5 1.5 3-3" /></svg>)
const DoctorGlyph = () => (<svg {...ic} aria-hidden="true"><circle cx="12" cy="7" r="4" /><path d="M5 21v-2a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v2" /><path d="M12 13v4M10 15h4" /></svg>)
const PlanGlyph = () => (<svg {...ic} aria-hidden="true"><path d="M9 3h6v4H9z" /><path d="M5 7h14v14H5z" /><path d="M9 13h6M9 17h4" /></svg>)

export interface OhioLPProps {
  heroFormId: string
  bottomFormId: string
  h1?: string
  heroSub?: string
}

export default function OhioLP({
  heroFormId,
  bottomFormId,
  h1 = 'MEDICAL EVALUATION FOR THINNING HAIR & HAIR LOSS CONDITIONS',
  heroSub = 'Discover what causes hair loss and learn which treatment options fit each patient’s goals and hair biology.',
}: OhioLPProps) {
  return (
    <main style={{ fontFamily: B_FONT, color: TEXT, background: WHITE }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* NAV */}
      <nav className="ohio-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 48px', background: WHITE, borderBottom: '1px solid #ece7dc' }}>
        <img src="/images/ohio-logo.png" alt="Ohio Hair Solutions" className="ohio-nav-logo" style={{ height: 48, width: 'auto' }} />
        <div className="ohio-nav-btns" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <a href="#consult-form" className="ohio-nav-btn" style={{ background: GOLD, color: INK, fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.4px', padding: '12px 22px', borderRadius: 62, textDecoration: 'none' }}>Request Your Consultation</a>
          <a href={`tel:${PHONE_TEL}`} className="ohio-nav-btn" style={{ border: `2px solid ${INK}`, color: INK, fontWeight: 700, fontSize: 14, padding: '10px 20px', borderRadius: 62, textDecoration: 'none' }}>{PHONE_DISPLAY}</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: MIST }}>
        <div className="ohio-hero-grid ohio-pad" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 44, alignItems: 'stretch', maxWidth: 1200, margin: '0 auto', padding: '44px 48px 52px' }}>
          <div>
            <h1 className="ohio-hero-h1" style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 42, lineHeight: 1.18, color: INK, maxWidth: 560 }}>{h1}</h1>
            <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.55, maxWidth: 520 }}>{heroSub}</p>
            <p style={{ marginTop: 10, fontSize: 16, lineHeight: 1.55, maxWidth: 520 }}>Request a consultation to understand hair loss and explore the available options.</p>
            <div className="ohio-hero-photo" style={{ position: 'relative', marginTop: 26, borderRadius: 12, overflow: 'hidden', minHeight: 330 }}>
              <img src="/images/hero-clinic.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              <div className="ohio-hero-trust" style={{ position: 'absolute', right: 16, bottom: 16, background: WHITE, borderRadius: 10, boxShadow: '0 8px 26px rgba(40,30,10,0.18)', padding: '14px 16px', maxWidth: 280 }}>
                <Stars />
                <div style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 15, color: INK, marginTop: 8 }}>Patient-Centered Care</div>
                <div style={{ fontSize: 13, lineHeight: 1.45, marginTop: 4 }}>Patients appreciate our personalized, doctor-led approach.</div>
              </div>
            </div>
          </div>
          <div id="consult-form" style={{ background: WHITE, borderRadius: 12, boxShadow: '0 10px 34px rgba(40,30,10,0.10)', padding: '26px 24px', alignSelf: 'start' }}>
            <h2 style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 22, color: INK, textAlign: 'center', marginBottom: 14 }}>Request Your Hair Consultation</h2>
            <GhlForm formId={heroFormId} height={400} formName="Request Your Hair Consultation - Ohio" />
          </div>
        </div>
      </section>

      {/* PATIENT-CENTERED CARE */}
      <section style={{ background: WHITE, padding: '54px 24px', textAlign: 'center' }}>
        <h2 className="ohio-h2" style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 30, color: INK }}>Patient-Centered Care</h2>
        <p style={{ marginTop: 8, fontSize: 16 }}>Patients appreciate our personalized, doctor-led approach.</p>
        <img src="/images/reviews-strip.png" alt="Patient review ratings" style={{ margin: '18px auto 0', height: 48, width: 'auto' }} />
      </section>

      {/* STEPS */}
      <section style={{ background: MIST }}>
        <div className="ohio-pad" style={{ maxWidth: 1100, margin: '0 auto', padding: '58px 48px 64px', textAlign: 'center' }}>
          <h2 className="ohio-h2" style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 32, color: INK }}>A Personalized Hair Loss Plan Is Just Three Steps Away</h2>
          <p style={{ marginTop: 10, fontSize: 17 }}>It&rsquo;s simpler than you think, and it all starts with a conversation.</p>
          <div className="ohio-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginTop: 40 }}>
            {[
              { t: 'Schedule Your Evaluation', d: 'Pick a time that works best for you.', icon: <CalendarGlyph /> },
              { t: 'Share Your Goals', d: 'Tell us what you want to improve.', icon: <PatientGlyph /> },
              { t: 'Hair Loss Assessment', d: 'A provider examines thinning patterns.', icon: <DoctorGlyph /> },
              { t: 'Personalized Treatment Plan', d: 'Get a plan tailored to your needs.', icon: <PlanGlyph /> },
            ].map(s => (
              <div key={s.t} style={{ background: WHITE, borderRadius: 12, padding: '26px 18px', boxShadow: '0 4px 18px rgba(40,30,10,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}><Circle>{s.icon}</Circle></div>
                <div style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 17, color: INK, marginTop: 16 }}>{s.t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.5, marginTop: 8 }}>{s.d}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 44 }}>
            <div style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 22, color: INK }}>No Pressure. No Obligation. Just Honest Answers About Your Options.</div>
            <p style={{ marginTop: 8, fontSize: 16 }}>You&rsquo;re in the right place.</p>
            <div style={{ marginTop: 18 }}><CtaButton label="Request Your Evaluation" /></div>
            <p style={{ marginTop: 10, fontSize: 13.5, color: '#8a7a55' }}>Fast. Private. No obligation.</p>
          </div>
        </div>
      </section>

      {/* DR. ADLAKHA */}
      <section className="ohio-pad" style={{ maxWidth: 1100, margin: '0 auto', padding: '58px 48px' }}>
        <div className="ohio-bio-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 44, alignItems: 'center' }}>
          <img src="/images/dr-adlakha.png" alt="Dr. Vidhi Adlakha, Ohio Hair Solutions" style={{ borderRadius: 12, width: '100%', height: 'auto', background: MIST }} />
          <div>
            <h2 className="ohio-h2" style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 30, color: INK }}>Dr. Adlakha: Specialist in Hair Loss Evaluation &amp; Treatment Planning</h2>
            <div style={{ fontFamily: B_FONT, fontWeight: 700, fontSize: 12.5, color: '#a0823f', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: 10 }}>Verified patient experiences from real consultations and care.</div>
            <p style={{ marginTop: 14, fontSize: 15.5, lineHeight: 1.65 }}>Dr. Vidhi Adlakha is a board-certified physician with advanced medical training and a patient-focused approach to hair loss and alopecia care. She works with individuals experiencing thinning hair or hair loss to provide personalized, non-surgical treatment plans grounded in medical evaluation and safety.</p>
            <p style={{ marginTop: 12, fontSize: 15.5, lineHeight: 1.65 }}>Dr. Adlakha grew up in Ontario, Canada, and earned her Bachelor&rsquo;s degree in Health Sciences from the University of Waterloo. She completed medical school at Des Moines University, College of Osteopathic Medicine, followed by a General Surgery residency at Affinity Medical Center in Ohio, where she served as Chief Resident. She later completed advanced fellowship training, building a strong foundation in anatomy, clinical decision-making, and patient care.</p>
            <p style={{ marginTop: 12, fontSize: 15.5, lineHeight: 1.65 }}>With a commitment to regulatory accuracy and ethical care, Dr. Adlakha focuses on non-invasive, medically appropriate options for managing hair loss and alopecia. She emphasizes individualized consultations, education, and realistic expectations, helping patients better understand their condition and available treatment pathways.</p>
            <p style={{ marginTop: 12, fontSize: 15.5, lineHeight: 1.65 }}>Dr. Adlakha is dedicated to ongoing education and staying current with established, evidence-based approaches to hair loss management. She is known for her attention to detail, professionalism, and commitment to patient safety, providing care that is thoughtful, conservative, and tailored to each individual&rsquo;s needs.</p>
            <div style={{ marginTop: 20 }}><CtaButton label="Request Your Evaluation" /></div>
          </div>
        </div>
      </section>

      {/* FINANCING */}
      <section style={{ background: GREY }}>
        <div className="ohio-fin-grid ohio-pad" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 44, alignItems: 'center', maxWidth: 1100, margin: '0 auto', padding: '58px 48px' }}>
          <div>
            <h2 className="ohio-h2" style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 30, color: INK }}>Getting Help for Hair Loss Can Be More Affordable Than You Think</h2>
            <p style={{ marginTop: 10, fontSize: 16 }}>Flexible monthly plans built for real patients.</p>
            <div style={{ marginTop: 22, fontSize: 15 }}>As low as</div>
            <div style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 46, color: '#a0823f' }}>$188/mo</div>
            <div style={{ borderTop: `2px solid ${GOLD}`, maxWidth: 320, margin: '14px 0' }} />
            <div style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 18, color: INK }}>Fast, Simple Payment Plans</div>
            <p style={{ marginTop: 10, fontSize: 12.5, lineHeight: 1.5, color: '#8a7a55', maxWidth: 520 }}>The above payment was calculated at 21.90% APR over 60 months. This purchase would have a total cost of $11,453. A down payment in the amount of monthly payment amount is due at the time of purchase. Payment amount rounded up to nearest whole number. 0% APR and other promotional rates subject to eligibility.</p>
            <div style={{ marginTop: 20 }}><CtaButton label="Request Your Evaluation" /></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/images/hero-clinic.png" alt="" style={{ borderRadius: 12, width: '100%', maxWidth: 440, height: 'auto', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* BOTTOM FORM */}
      <section className="ohio-pad" style={{ maxWidth: 760, margin: '0 auto', padding: '58px 48px 66px', textAlign: 'center' }}>
        <h2 className="ohio-h2" style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 30, color: INK }}>Why Patients Feel Confident Choosing Our Team</h2>
        <p style={{ marginTop: 8, fontSize: 16 }}>Real capabilities. Real safety. Real patient-first care.</p>
        <div style={{ background: WHITE, borderRadius: 12, boxShadow: '0 10px 34px rgba(40,30,10,0.10)', padding: '26px 24px', marginTop: 28, textAlign: 'left', border: '1px solid #ece7dc' }}>
          <h3 style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 21, color: INK, textAlign: 'center', marginBottom: 14 }}>Request Your Hair Consultation</h3>
          <GhlForm formId={bottomFormId} height={496} formName="Footer Form - Ohio" />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: MIST }}>
        <div className="ohio-footer-row ohio-pad" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1100, margin: '0 auto', padding: '26px 48px', gap: 24 }}>
          <img src="/images/ohio-logo.png" alt="Ohio Hair Solutions" style={{ height: 38, width: 'auto' }} />
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={`tel:${PHONE_TEL}`} style={{ color: '#a0823f', fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>{PHONE_DISPLAY}</a>
            <a href="/privacy-policy" style={{ color: TEXT, textDecoration: 'none', fontSize: 13 }}>Privacy Policy</a>
            <a href="/cookie-policy" style={{ color: TEXT, textDecoration: 'none', fontSize: 13 }}>Cookie Policy</a>
          </div>
          <div style={{ fontSize: 12.5, color: '#8a7a55' }}>&copy; 2026 Ohio Hair Solutions</div>
        </div>
      </footer>
    </main>
  )
}
