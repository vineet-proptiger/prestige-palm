'use client'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopLeftRadius: '18px' },
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

const infoItems = [
  { label: 'LOCATION',   value: <>MADHAVARAM,<br/> NORTH CHENNAI</> },
  { label: 'TYPE',       value: '2, 3 & 4 BHK'  },
  { label: 'DEVELOPMENT', value: 'PREMIUM RESIDENTIAL' },
]

const Overview = ({ setIsOpen }) => (
  <section
    id="overview"
    style={{ background: '#fff', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}
  >
    <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
      
      {/* ── Section Heading ── */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
        <h2 style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#3A2A0E', letterSpacing: '0.22em',
          textTransform: 'uppercase', margin: '0 0 10px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          WELCOME TO PRESTIGE PALM COURT
        </h2>
        {/* <h3 style={{
          fontFamily: F_JOST, fontWeight: '600', fontSize: '16px',
          color: '#A9262D', letterSpacing: '0.05em',
          textTransform: 'capitalize', margin: 0,
        }}>
          Premium Residences at Madhavaram
        </h3> */}
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        
        {/* ── Left Side: Text Content ── */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          
          {/* Paragraphs */}
          <p style={{
            fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
            lineHeight: 1.9,
            marginTop: 0, marginBottom: '20px',
            textAlign: 'justify',
          }}>
            Prestige Palm Court is an upcoming premium residential development by the Prestige Group, gracefully positioned along the Grand Northern Trunk Road in Madhavaram, North Chennai. Spanning a vast, thoughtfully planned landscape, the project brings together elegant architecture, vastu-compliant residences, and expansive open spaces to create a refined urban retreat. Offering spacious 2, 3, and 4 BHK apartments, each home is designed to invite natural light, comfort, and a sense of quiet sophistication into everyday living.
          </p>
          <p style={{
            fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
            lineHeight: 1.9,
            marginTop: 0, marginBottom: '32px',
            textAlign: 'justify',
          }}>
            Set within one of North Chennai's fastest-growing corridors, Prestige Palm Court enjoys excellent connectivity to the Madhavaram Metro Line, major road networks, and the city's central business and transit hubs. The neighbourhood is surrounded by well-established social infrastructure, ensuring every convenience is at your doorstep.
          </p>

          {/* Info Box */}
          <div
            style={{
              position: 'relative',
              border: '1px solid #D5C2A8',
              overflow: 'hidden',
            }}
          >
            <CurvedCorners />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px]" style={{ background: '#D5C2A8' }}>
            {infoItems.map((item, i) => (
              <div key={i} className="bg-white flex flex-col justify-center" style={{
                padding: '20px 16px',
                textAlign: 'left',
              }}>
                <p style={{
                  fontFamily: F_JOST, fontSize: '10px', fontWeight: '500',
                  color: '#b5a99a', letterSpacing: '0.18em',
                  textTransform: 'uppercase', margin: '0 0 8px',
                }}>
                  {item.label}:
                </p>
                <p className="whitespace-normal break-words" style={{
                  fontFamily: F_JOST, fontSize: '12px', fontWeight: '700',
                  color: '#3A2A0E', letterSpacing: '0.05em',
                  textTransform: 'uppercase', margin: 0,
                  wordBreak: 'break-word', overflowWrap: 'break-word'
                }}>
                  {item.value}
                </p>
              </div>
            ))}
            </div>
          </div>

        </div>

        {/* ── Right Side: Image ── */}
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '4/3' }}>
            <Image 
              src={overviewImage} 
              alt="Prestige Palm Court Overview" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default Overview
