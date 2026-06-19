'use client'
import React from 'react'
import {
  Dumbbell, Waves, Sparkles, Activity,
  Landmark, Music, Footprints, Flower2
} from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'


const CurvedCorners = ({ bg = '#fff', color = '#e5e7eb' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopLeftRadius: '18px' },
  ]
  return corners.map((c, i) => (
    <span key={i} style={{ position: 'absolute', ...c, width: '22px', height: '22px', background: bg, display: 'block' }} />
  ))
}

const newAmenities = [
  { icon: Landmark,   title: 'CLUBHOUSE',              desc: 'A grand, elegantly designed clubhouse for community events, social gatherings, and celebrations.' },
  { icon: Music,      title: 'MUSIC ROOM',             desc: 'A dedicated music room equipped with instruments and acoustic spaces for artistic expression.' },
  { icon: Activity,   title: 'SKATING RINK',           desc: 'A smooth and spacious skating rink for endless fun, fitness, and active recreation.' },
  { icon: Dumbbell,   title: 'GYMNASIUM',              desc: 'A state-of-the-art fully equipped gymnasium for fitness enthusiasts seeking a premium workout.' },
  { icon: Footprints, title: 'REFLEXOLOGY TRACK',      desc: 'A thoughtfully designed reflexology track promoting wellness, circulation, and relaxation with every step.' },
  { icon: Sparkles,   title: 'SPA',                    desc: 'Exclusive spa and wellness centre for rejuvenation, relaxation, and holistic well-being every day.' },
  { icon: Waves,      title: 'SWIMMING POOL',          desc: 'A stunning swimming pool offering breathtaking views and a refreshing escape from the city.' },
  { icon: Flower2,    title: 'YOGA PAVILION',          desc: 'A serene yoga pavilion perfect for mindfulness, meditation, and inner peace amidst nature.' },
]

const Amenities = () => {
  return (
    <section id="amenities" style={{
      padding: '72px 0',
      background: '#fff',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
            color: '#684C1B', letterSpacing: '0.22em', textTransform: 'uppercase', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            LIFESTYLE AMENITIES – Experience More Every Day
          </h2>
        </div>

        {/* Grid Container */}
        <div data-aos="fade-up" data-aos-delay="100" style={{
          position: 'relative',
          border: '1px solid #e5e7eb',
          margin: '0 auto',
        }}>
          <CurvedCorners color="#e5e7eb" bg="#fff" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#e5e7eb]">
            {newAmenities.map((item, idx) => (
              <div key={idx} className="bg-white flex flex-col items-center group" style={{
                padding: '48px 24px',
                textAlign: 'center',
              }}>
                {/* Icon */}
                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-300" style={{ background: '#C9A96E' }}>
                  <item.icon size={36} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: F_JOST, fontSize: '15px', fontWeight: '600',
                  color: '#684C1B', letterSpacing: '0.12em', margin: '0 0 12px'
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: F_SANS, fontSize: '13px', color: '#6b7280',
                  lineHeight: 1.6, margin: 0,
                  textAlign: 'justify'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Amenities
