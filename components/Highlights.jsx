'use client'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const BORDER_COLOR = '#D5C2A8'
const BG = 'var(--color-cream-bg)' // #EAE5D9


/* Curved concave notch at each corner of the border box */
const CurvedCorners = ({ bg = BG }) => {
  const corners = [
    // top-left  → curve goes bottom-right
    {
      top: '-1px', left: '-1px',
      borderRight: `1px solid ${BORDER_COLOR}`,
      borderBottom: `1px solid ${BORDER_COLOR}`,
      borderBottomRightRadius: '18px'
    },
    // top-right → curve goes bottom-left
    {
      top: '-1px', right: '-1px',
      borderLeft: `1px solid ${BORDER_COLOR}`,
      borderBottom: `1px solid ${BORDER_COLOR}`,
      borderBottomLeftRadius: '18px'
    },
    // bottom-left → curve goes top-right
    {
      bottom: '-1px', left: '-1px',
      borderRight: `1px solid ${BORDER_COLOR}`,
      borderTop: `1px solid ${BORDER_COLOR}`,
      borderTopRightRadius: '18px'
    },
    // bottom-right → curve goes top-left
    {
      bottom: '-1px', right: '-1px',
      borderLeft: `1px solid ${BORDER_COLOR}`,
      borderTop: `1px solid ${BORDER_COLOR}`,
      borderTopLeftRadius: '18px'
    },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

/* SVG icons */
const IconBuilding = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-4h6v4" />
    <rect x="2" y="9" width="3" height="8" rx="1" />
    <rect x="19" y="9" width="3" height="8" rx="1" />
  </svg>
)
const IconTrees = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12" />
    <path d="M7 12l5-5 5 5" />
    <path d="M5 17l7-7 7 7" />
  </svg>
)
const IconHome = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)
const IconSmart = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M9 9l2 2 4-4" />
  </svg>
)
const IconMountain = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
  </svg>
)
const IconSunCloud = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    <path d="M16 12a4 4 0 0 0-8 0" />
    <path d="M5 18a4 4 0 0 1 3.5-3.9 6 6 0 0 1 11-.1 4 4 0 0 1-2.5 7.9H8a4 4 0 0 1-3-4" />
  </svg>
)
const IconWind = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
  </svg>
)
const IconLightning = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)
const IconWaves = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  </svg>
)

const highlights = [
  { title: 'Premium Development', desc: 'Expansive 8 acre premium residential development.', Icon: IconBuilding },
  { title: 'Vastu-Compliant Homes', desc: 'Thoughtfully planned 900 plus vastu-compliant homes.', Icon: IconSunCloud },
  { title: 'Spacious Residences', desc: 'Spacious 2, 3 and 4 BHK residences.', Icon: IconHome },
  { title: 'Well-Planned Layouts', desc: 'Well-planned layouts from 650 to 1850 sq. ft.', Icon: IconSmart },
  { title: 'Low-Density Living', desc: 'Low-density living with refined community design.', Icon: IconTrees },
  { title: 'Gated Community', desc: 'Gated community with premium lifestyle amenities.', Icon: IconWaves },
  { title: 'Seamless Connectivity', desc: 'Seamless connectivity to Chennai station and airport.', Icon: IconLightning },
  { title: 'High Appreciation', desc: 'High appreciation potential with rental demand.', Icon: IconMountain },
]

const Highlights = ({ setIsOpen }) => (
  <section id="highlights" style={{ background: BG, padding: '60px 0 72px' }}>
    <div className="px-4 sm:px-8" style={{ maxWidth: '1100px', margin: '0 auto' }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }} data-aos="fade-up">
        <h2 style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#684C1B', letterSpacing: '0.22em',
          textTransform: 'uppercase', margin: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          PROJECT HIGHLIGHTS &amp; USPs
        </h2>
      </div>

      {/* Bordered container with curved concave corner notches */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          position: 'relative',
          border: `1px solid ${BORDER_COLOR}`,
          overflow: 'hidden',
        }}
      >
        <CurvedCorners bg={BG} />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px]" style={{ background: BORDER_COLOR }}>
          {highlights.map(({ title, desc, Icon }, i) => (
            <div key={i} style={{
              padding: '36px 20px 28px',
              textAlign: 'center',
              background: BG,
            }}>
              {/* Dark red circle */}
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                background: 'var(--color-brand)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px',
              }}>
                <Icon />
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: F_JOST, fontSize: '12.5px', fontWeight: '700',
                color: '#3A2A0E', letterSpacing: '0.1em',
                textTransform: 'uppercase', margin: '0 0 12px',
              }}>{title}</h3>

              {/* Description */}
              <p style={{
                fontFamily: F_SANS, fontSize: '13px',
                color: '#4A4540',
                lineHeight: 1.65, margin: 0,
              }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
)

export default Highlights
