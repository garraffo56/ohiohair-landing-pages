'use client'
import { Suspense } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

// Recreation of start.ohiohairsolutions.com/meta-retargeting/ (paid-social RT LP).
// Adlakha / Advanced FUE Hair Transplants in Ohio brand. Copy reproduced verbatim
// from source (medical copy NOT softened — Joe waived ad-policy softening for Meta),
// including the extra candidacy, testimonial, objection-handling, and "are you a
// candidate" blocks. No browser Meta Pixel — HIPAA carve-out (H-26, gated in
// PixelGate). Attribution rides server-side CAPI.

const GOLD = '#D9B26A'
const GOLD_DK = '#a0823f'
const INK = '#1a1a1a'
const TEXT = '#333333'
const MIST = '#F4F1EA'
const GREY = '#F7F7F7'
const WHITE = '#ffffff'
const H_FONT = "'Gilda Display', Georgia, serif"
const B_FONT = "'Roboto', sans-serif"

const PHONE_DISPLAY = '(234) 404-3349'
const PHONE_TEL = '+12344043349'
const HERO_FORM_ID = 'y2EdwjEQQoGwfAEzC5RV'
const BOTTOM_FORM_ID = 'ciFkpq788A16zuid0S7m'

const Check = ({ color = GOLD }: { color?: string }) => (
  <span style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, background: color, borderRadius: '50%', marginTop: 2 }}>
    <svg width="10" height="8" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 1L5 9L1 5" stroke={INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

const Cross = () => (
  <span style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, background: '#e6ddca', borderRadius: '50%', marginTop: 2 }}>
    <svg width="9" height="9" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2l8 8M10 2l-8 8" stroke="#8a7a55" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  </span>
)

function Cta({ label, href = '#rt-final-form', variant = 'solid' }: { label: string; href?: string; variant?: 'solid' | 'outline' }) {
  return (
    <a href={href} style={{
      display: 'inline-block',
      background: variant === 'solid' ? GOLD : 'transparent',
      color: INK,
      border: variant === 'outline' ? `2px solid ${GOLD}` : 'none',
      fontFamily: B_FONT, fontWeight: 700, fontSize: 14, letterSpacing: '0.4px',
      textTransform: 'uppercase', padding: '15px 30px', borderRadius: 62, textDecoration: 'none',
    }}>{label}</a>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left' }}>
      {items.map(it => (
        <div key={it} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <Check />
          <span style={{ fontSize: 15.5, color: TEXT, lineHeight: 1.55 }}>{it}</span>
        </div>
      ))}
    </div>
  )
}

const H2 = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <h2 className="ohio-h2" style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 32, color: INK, lineHeight: 1.22, ...style }}>{children}</h2>
)

export default function OhioMetaRetargetingLP() {
  return (
    <main style={{ fontFamily: B_FONT, color: TEXT, background: WHITE }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* NAV */}
      <nav className="ohio-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 48px', background: WHITE, borderBottom: '1px solid #ece7dc' }}>
        <img src="/img/m/logo-dark.webp" alt="Adlakha — Advanced FUE Hair Transplants in Ohio" className="ohio-nav-logo" style={{ height: 46, width: 'auto' }} />
        <div className="ohio-nav-btns" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="#rt-hero-form" className="ohio-nav-btn" style={{ background: GOLD, color: INK, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.4px', padding: '12px 22px', borderRadius: 62, textDecoration: 'none' }}>See If I’m A Candidate</a>
          <a href={`tel:${PHONE_TEL}`} className="ohio-nav-btn" style={{ border: `2px solid ${INK}`, color: INK, fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 62, textDecoration: 'none' }}>{PHONE_DISPLAY}</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: MIST }}>
        <div className="m-hero-grid ohio-pad" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 44, alignItems: 'start', maxWidth: 1200, margin: '0 auto', padding: '48px 48px 56px' }}>
          <div>
            <h1 style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 42, lineHeight: 1.16, color: INK, maxWidth: 560 }}>
              Worried about surgery or shaving? Get answers in 60 seconds.
            </h1>
            <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.6, color: TEXT, maxWidth: 520 }}>
              Ohio Hair Solutions protects your donor area and plans for natural-looking results&mdash;based on your hair loss pattern.
            </p>
            <div style={{ marginTop: 22 }}><Cta label="Check Eligibility" href="#rt-hero-form" /></div>

            {/* Best For / Not ideal if */}
            <div className="m-cards-grid" style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ background: WHITE, border: '1px solid #ece7dc', borderRadius: 12, padding: '20px 20px' }}>
                <div style={{ fontFamily: H_FONT, fontSize: 17, color: INK, marginBottom: 12 }}>Best For</div>
                <CheckList items={['Early to moderate loss', 'Want natural density', 'Prefer physician planning']} />
              </div>
              <div style={{ background: WHITE, border: '1px solid #ece7dc', borderRadius: 12, padding: '20px 20px' }}>
                <div style={{ fontFamily: H_FONT, fontSize: 17, color: INK, marginBottom: 12 }}>Not ideal if:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {['Seeking the cheapest option', 'Expect guaranteed density', 'Unwilling to follow long-term plan'].map(it => (
                    <div key={it} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <Cross />
                      <span style={{ fontSize: 15.5, color: TEXT, lineHeight: 1.55 }}>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p style={{ marginTop: 16, fontSize: 15, color: GOLD_DK, fontWeight: 700 }}>
              <a href="#rt-hero-form" style={{ color: GOLD_DK, textDecoration: 'none' }}>Not sure? Check candidacy &gt;</a>
            </p>
          </div>

          <div id="rt-hero-form" style={{ background: WHITE, borderRadius: 14, boxShadow: '0 12px 40px rgba(40,30,10,0.12)', padding: '26px 24px', alignSelf: 'start' }}>
            <h2 style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 21, color: INK, textAlign: 'center', marginBottom: 14 }}>See If I’m a Candidate</h2>
            <GhlForm formId={HERO_FORM_ID} height={400} formName="RT Hero - Ohio Meta Retargeting" />
          </div>
        </div>
      </section>

      {/* HAIR LOSS DOESN'T PAUSE */}
      <section className="m-perm-grid ohio-pad" style={{ background: WHITE, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'center', maxWidth: 1100, margin: '0 auto', padding: '62px 48px' }}>
        <div>
          <div style={{ fontFamily: B_FONT, fontWeight: 700, fontSize: 13, color: GOLD_DK, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>
            If You&rsquo;ve Been Waiting to &ldquo;Think About It&rdquo; — This Is Why
          </div>
          <H2 style={{ margin: '0 0 22px' }}>Hair Loss Doesn&rsquo;t Pause While You Decide</H2>
          <CheckList items={['Donor Hair Quality Declines Over Time', 'Earlier Intervention = More Natural Outcomes', 'Waiting Limits Future Options']} />
          <div style={{ marginTop: 26 }}><Cta label="See If I’m a Candidate" /></div>
        </div>
        <img src="/img/m/rt-fue.webp" alt="Physician marking the hairline before a hair restoration procedure" style={{ width: '100%', borderRadius: 12, display: 'block' }} />
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: MIST, padding: '62px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <H2 style={{ margin: '0 0 8px' }}>Real Patients. Real Experiences.</H2>
          <p style={{ fontSize: 16, color: TEXT, margin: '0 0 36px' }}>Verified patient experiences shared after their visit.</p>
          <div className="m-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {[
              ['Dr. Vidhi Adlakha took the time to explain everything clearly and made me feel comfortable throughout my visits. She answered all of my questions and created a welcoming, supportive experience.', 'Molly I.'],
              ['Dr. Adlakha was thoughtful, attentive, and took the time to explain what to expect. I felt heard, supported, and confident in her care throughout the entire experience.', 'Chrissy J.'],
              ['Dr. Adlakha is knowledgeable, attentive, and made me feel safe and cared for at every visit. I appreciate her professionalism and the time she takes with her patients.', 'B. R.'],
            ].map(([quote, name]) => (
              <div key={name} style={{ background: WHITE, border: '1px solid #ece7dc', borderRadius: 12, padding: '26px 24px', textAlign: 'left' }}>
                <div style={{ fontFamily: H_FONT, fontSize: 44, color: GOLD, lineHeight: 0.6, height: 24 }}>&ldquo;</div>
                <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.6, margin: '6px 0 16px' }}>{quote}</p>
                <div style={{ fontWeight: 700, color: INK, fontSize: 15 }}>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISN'T IT CHEAPER + CONCERNED ABOUT SHAVING */}
      <section className="m-two-col ohio-pad" style={{ background: WHITE, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start', maxWidth: 1100, margin: '0 auto', padding: '62px 48px' }}>
        <div style={{ background: GREY, border: '1px solid #ece7dc', borderRadius: 14, padding: '30px 28px' }}>
          <H2 style={{ fontSize: 26, margin: '0 0 18px' }}>Isn&rsquo;t It Cheaper Somewhere Else?&rdquo;</H2>
          <CheckList items={['Hair restoration is not a commodity']} />
          <p style={{ fontSize: 15.5, color: INK, fontWeight: 500, margin: '16px 0 8px' }}>Cost reflects:</p>
          <CheckList items={['The surgeon’s experience', 'Technique selection (FUE vs FUT)', 'Planning and long-term outcome']} />
          <p style={{ fontSize: 15.5, color: TEXT, margin: '16px 0', lineHeight: 1.6 }}>One procedure done right &gt; multiple corrections later</p>
          <p style={{ fontSize: 15.5, color: INK, fontWeight: 700, margin: 0, lineHeight: 1.6 }}>The real cost is choosing wrong&mdash;not choosing carefully.</p>
        </div>
        <div style={{ background: GREY, border: '1px solid #ece7dc', borderRadius: 14, padding: '30px 28px' }}>
          <H2 style={{ fontSize: 26, margin: '0 0 18px' }}>Concerned about shaving or downtime?</H2>
          <CheckList items={['Not every procedure requires full shaving']} />
          <p style={{ fontSize: 15.5, color: INK, fontWeight: 500, margin: '16px 0 8px' }}>Modern techniques prioritize:</p>
          <CheckList items={['Precise graft selection consistency (when appropriate)', 'Donor preservation-focused planning', 'Natural growth pattern placement strategy']} />
          <p style={{ fontSize: 15.5, color: INK, fontWeight: 500, margin: '16px 0 8px' }}>Consultation determines:</p>
          <CheckList items={['Technique', 'Shaving requirements', 'Expected outcome']} />
          <p style={{ fontSize: 14.5, color: TEXT, margin: '16px 0 0', lineHeight: 1.6 }}>
            Your consultation determines the best type of hair restoration procedure for your needs and whether a hybrid approach combining a surgical procedure with a non-surgical treatment is needed, all designed specifically for your hair loss pattern.
          </p>
        </div>
      </section>
      <div style={{ textAlign: 'center', paddingBottom: 8 }}><Cta label="Find Out What Applies To Me" /></div>

      {/* ARE YOU A CANDIDATE */}
      <section className="m-perm-grid ohio-pad" style={{ background: MIST, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'center', maxWidth: 1100, margin: '0 auto', padding: '62px 48px' }}>
        <img src="/img/m/rt-candidate.webp" alt="Hair restoration candidate" style={{ width: '100%', borderRadius: 12, display: 'block' }} />
        <div>
          <H2 style={{ margin: '0 0 20px' }}>Are You a Candidate For Hair Restoration?</H2>
          <CheckList items={['Your specific type of hair loss will be diagnosed', 'The extent of your current hair loss', 'The amount and quality of your donor hair region']} />
          <p style={{ fontSize: 15.5, color: INK, fontWeight: 700, margin: '20px 0 0', lineHeight: 1.6 }}>
            Hair restoration isn&rsquo;t for everyone&mdash;your candidacy determines the best method.
          </p>
          <div style={{ marginTop: 24 }}><Cta label="See If I’m a Candidate" /></div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="m-perm-grid ohio-pad" style={{ background: WHITE, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'center', maxWidth: 1100, margin: '0 auto', padding: '62px 48px' }}>
        <div>
          <H2 style={{ margin: '0 0 20px' }}>What happens next</H2>
          <CheckList items={['Review your hair loss pattern + donor supply', 'Confirm the treatment method, alone or hybrid, for your needs', 'Leave with a realistic plan + timeline (no commitment)']} />
          <p style={{ fontSize: 15, color: GOLD_DK, fontWeight: 700, margin: '20px 0 0' }}>Consult: ~30 minutes • Plan delivered same day</p>
        </div>
        <img src="/img/m/rt-consult.webp" alt="Patient in a hair restoration consultation" style={{ width: '100%', borderRadius: 12, display: 'block' }} />
      </section>

      {/* MEDICAL DECISION */}
      <section style={{ background: GREY, padding: '62px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <H2 style={{ margin: '0 0 20px' }}>Hair Restoration Is a Medical Decision</H2>
          <p style={{ fontSize: 15.5, color: INK, fontWeight: 500, margin: '0 0 14px' }}>Results depend on:</p>
          <div style={{ display: 'inline-block', textAlign: 'left' }}>
            <CheckList items={['Proper diagnosis', 'Long-term planning', 'Ethical candidacy screening']} />
          </div>
          <p style={{ fontSize: 15.5, color: TEXT, margin: '20px auto 26px', lineHeight: 1.65, maxWidth: 620 }}>
            Not everyone is an ideal candidate for hair restoration treatment. Consultations exist to protect the patient first.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Cta label="Schedule a Consultation" />
            <Cta label="See If I’m a Candidate" variant="outline" />
          </div>
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section className="m-final-grid ohio-pad" style={{ background: WHITE, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', maxWidth: 1080, margin: '0 auto', padding: '62px 48px' }}>
        <div>
          <H2 style={{ fontSize: 30, margin: '0 0 18px' }}>Hair loss changes over time&mdash;planning earlier preserves options.</H2>
          <CheckList items={['Donor supply is finite', 'Earlier planning can improve natural coverage strategy', 'A consult clarifies what’s realistic now']} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
            <a href={`tel:${PHONE_TEL}`} style={{ color: INK, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>{PHONE_DISPLAY}</a>
            <a href="mailto:info@ohiohairsolutions.com" style={{ color: INK, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>info@ohiohairsolutions.com</a>
            <span style={{ color: TEXT, fontSize: 15 }}>3951 Convenience Circle, Suite 101, Canton, OH 44718</span>
          </div>
        </div>
        <div id="rt-final-form" style={{ background: GREY, border: '1px solid #ece7dc', borderRadius: 14, padding: '26px 24px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: H_FONT, fontWeight: 400, fontSize: 21, color: INK, margin: '0 0 14px' }}>Schedule Your Consultation</h3>
          <GhlForm formId={BOTTOM_FORM_ID} height={470} formName="RT Footer - Ohio Meta Retargeting" />
          <p style={{ fontSize: 13, color: '#8a7a55', margin: '14px 0 0' }}>Confidential • No obligation • Personalized</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: MIST }}>
        <div className="ohio-footer-row ohio-pad" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1100, margin: '0 auto', padding: '26px 48px', gap: 24, flexWrap: 'wrap' }}>
          <img src="/img/m/logo-dark.webp" alt="Adlakha — Advanced FUE Hair Transplants in Ohio" style={{ height: 40, width: 'auto' }} />
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={`tel:${PHONE_TEL}`} style={{ color: GOLD_DK, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>{PHONE_DISPLAY}</a>
            <a href="/privacy-policy" style={{ color: TEXT, textDecoration: 'none', fontSize: 13 }}>Privacy Policy</a>
            <a href="/cookie-policy" style={{ color: TEXT, textDecoration: 'none', fontSize: 13 }}>Cookie Policy</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #e6ddca' }}>
          <div className="ohio-pad" style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 48px' }}>
            <p style={{ fontSize: 12, lineHeight: 1.7, margin: '0 0 12px', color: '#6b6250' }}>
              <strong style={{ color: INK }}>Medical Disclaimer:</strong> This website provides general information about hair restoration procedures. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Individual results may vary. Not all candidates are eligible for treatment. A medical consultation is required to determine candidacy.
            </p>
            <p style={{ fontSize: 12.5, color: '#8a7a55', margin: 0 }}>&copy; 2026 Ohio Hair Transplants. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
