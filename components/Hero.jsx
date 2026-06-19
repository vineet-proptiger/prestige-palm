'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { heroImages } from '../lib/images'

const slides = [
  { img: heroImages.banner },
  { img: heroImages.banner2 }
]

const Hero = ({ setIsOpen }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero-container">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-container {
          position: relative;
          margin-top: 80px;
          height: auto;
          overflow: hidden;
          background: #111;
          display: block;
        }

        /* Dark gradient overlay — bottom heavy so text is legible */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.45) 55%,
            rgba(0,0,0,0.10) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* Content block — sits over the image */
        .hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding: 0 44px 72px;
        }

        /* Main title */
        .hero-title {
          font-family: var(--font-jost), Montserrat, sans-serif;
          font-size: clamp(22px, 3vw, 42px);
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          line-height: 1.08;
          margin: 0 0 6px;
          text-shadow: 0 2px 16px rgba(0,0,0,0.5);
        }

        /* Subtitle */
        .hero-subtitle {
          font-family: var(--font-jost), Montserrat, sans-serif;
          font-size: clamp(11px, 1.4vw, 18px);
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 12px;
          opacity: 0.92;
          text-shadow: 0 1px 8px rgba(0,0,0,0.4);
        }

        /* Price line */
        .hero-price-line {
          font-family: var(--font-sans), Open Sans, sans-serif;
          font-size: clamp(13px, 1.5vw, 18px);
          color: rgba(255,255,255,0.88);
          margin: 0 0 22px;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        @keyframes heroPriceBlink {
          0%, 75% { 
            opacity: 1; 
            text-shadow: 0 0 8px rgba(255,255,255,0.6); 
          }
          76%, 100% { 
            opacity: 0; 
            text-shadow: none; 
          }
        }

        .hero-price-amt {
          font-family: var(--font-jost), Montserrat, sans-serif;
          font-size: clamp(18px, 2.5vw, 32px);
          font-weight: 800;
          color: #fff;
          animation: heroPriceBlink 1.4s infinite;
          display: inline-block;
        }

        /* CTA Row */
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* Hero buttons use global btn-brand / btn-gold-outline classes */

        /* First button — white text + white border on dark hero bg */
        .hero-btn-one {
          color: #fff !important;
          border-color: rgba(255,255,255,0.9) !important;
          background: transparent !important;
        }
        .hero-btn-one:hover {
          background: var(--color-brand) !important;
          color: #fff !important;
          border-color: var(--color-brand) !important;
        }

        /* RERA text */
        .hero-rera {
          font-family: var(--font-sans), Open Sans, sans-serif;
          font-size: 11.5px;
          color: rgba(255,255,255,0.75);
          white-space: nowrap;
        }

        .slide-layer {
          position: relative;
          width: 100%;
          opacity: 0;
          display: none;
          transition: opacity 1s ease-in-out;
        }
        .slide-layer.active {
          opacity: 1;
          display: block;
        }

        .hero-image {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ─── Desktop ─── */
        @media (min-width: 1024px) {
          .hero-container {
            aspect-ratio: 21/9;
          }
          .slide-layer {
            position: absolute;
            height: 100%;
          }
          .hero-image {
            height: 100%;
            object-fit: cover;
            object-position: center 80%;
          }
        }

        .carousel-dots {
          position: absolute;
          bottom: 24px;
          right: 44px;
          display: flex;
          gap: 8px;
          z-index: 20;
        }
        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: background 0.3s;
        }
        .carousel-dot.active {
          background: #fff;
        }

        /* ─── Tablet ─── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-container {
            aspect-ratio: 16/7;
          }
          .slide-layer {
            position: absolute;
            height: 100%;
          }
          .hero-image {
            height: 100%;
            object-fit: cover;
            object-position: center 80%;
          }
          .hero-content {
            padding: 0 28px 56px !important;
          }
        }

        /* ─── Mobile ─── */
        @media (max-width: 767px) {
          .hero-container {
            margin-top: 0px !important;
            padding-top: 80px !important;
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
          }

          .hero-overlay {
            display: none !important;
          }

          .hero-content {
            position: static !important;
            background: #111827;
            padding: 24px 20px 28px !important;
          }

          .hero-cta-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
            width: 100%;
          }

          .hero-cta-row > button,
          .hero-cta-row > a {
            width: 100% !important;
            justify-content: center !important;
            text-align: center;
            padding: 12px 10px !important;
            font-size: 11px !important;
            white-space: normal !important;
          }

          .hero-rera {
            font-size: 10px !important;
          }

          .carousel-dots {
            bottom: unset;
            top: 90px;
            right: 12px;
          }
        }
      `}} />

      {slides.map((slide, index) => (
        <div key={index} className={`slide-layer ${index === currentSlide ? 'active' : ''}`}>
          <Image
            src={slide.img}
            alt={`Banner ${index + 1}`}
            width={1920}
            height={800}
            className="hero-image"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── Dark overlay for text legibility ── */}
      <div className="hero-overlay" />

      {/* ── Content overlay ── */}
      <div className="hero-content">

        {/* Main Heading */}
        <h1 className="hero-title">
          Prestige Palm Court, Madhavaram
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          By Prestige Group<br/>  
          <span style={{ fontSize: '0.85em', fontWeight: 500, textTransform: 'none' }}>At Madhavaram, North Chennai</span>
        </p>

        {/* Price Line */}
        <p className="hero-price-line">
          Premium 2, 3 &amp; 4 BHK Homes Starting at&nbsp;
          <span className="hero-price-amt">₹ 80 Lacs*</span>
        </p>

        {/* Bullet Points */}
        <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            'Get Early Bird Advantage',
            "Madhavaram's Largest Residential Community",
            'Book With EOI - ₹9 Lakhs'
          ].map((text, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand, #A9262D)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, backgroundColor: '#fff', borderRadius: '50%', padding: '2px' }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ fontFamily: 'var(--font-sans), Open Sans, sans-serif', fontSize: 'clamp(13px, 1.5vw, 18px)', fontWeight: '500', letterSpacing: '0.02em', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div className="hero-cta-row">

          {/* Button 1 — Unlock Pricing: white text on dark hero bg */}
          <button
            onClick={() => setIsOpen(true)}
            className="btn-gold-outline hero-btn-one"
            style={{ fontSize: '12px', padding: '11px 22px' }}
          >
            Unlock Pricing &amp; Floor Plans
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>

          {/* Button 2 — WhatsApp (global btn-brand) */}
          <a
            href="https://wa.me/919718344024?text=Hi%20I%20am%20interested%20in%20Prestige%20Palm%20Court%20Madhavaram%20North%20Chennai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand"
            style={{ fontSize: '12px', padding: '11px 22px' }}
          >
            {/* WhatsApp icon */}
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp for Instant Details
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero

