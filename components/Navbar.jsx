'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { logoImages } from '../lib/images'

const NAV_TEXT = '#684C1B'
const F_JOST   = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS   = 'var(--font-sans), Open Sans, sans-serif'


const aStyle = {
  fontFamily: F_JOST, fontSize: '13px', fontWeight: '600',
  color: NAV_TEXT, letterSpacing: '0.08em',
  textDecoration: 'none', cursor: 'pointer',
  transition: 'color 0.2s',
}

const Navbar = ({ setIsOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hover   = e => (e.currentTarget.style.color = '#A9262D')
  const unhover = e => (e.currentTarget.style.color = NAV_TEXT)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: '#fff',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.06)',
      borderBottom: '1px solid rgba(104,76,27,0.12)',
    }}>

      {/* ── Desktop bar: all items flow naturally centered ── */}
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        height: '80px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px',
        gap: '0',
        position: 'relative',
      }}>

        {/* LEFT LINKS */}
        <div
          className="hidden lg:flex"
          style={{ alignItems: 'center', gap: '36px', marginRight: '52px' }}
        >
          <a href="#overview"   style={aStyle} onMouseEnter={hover} onMouseLeave={unhover}>OVERVIEW</a>
          <a href="#masterplan" style={aStyle} onMouseEnter={hover} onMouseLeave={unhover}>FLOOR PLANS</a>
        </div>

        {/* CENTER LOGO */}
        <a href="#" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <style>{`
            .nav-logo { height: 42px; width: auto; display: block; }
            @media (max-width: 767px) {
              .nav-logo { height: 32px; }
            }
          `}</style>
          <img
            src={logoImages.tarc}
            alt="Prestige Palm Court"
            className="nav-logo"
          />
        </a>

        {/* RIGHT LINKS */}
        <div
          className="hidden lg:flex"
          style={{ alignItems: 'center', gap: '36px', marginLeft: '52px' }}
        >
          <a href="#amenities" style={aStyle} onMouseEnter={hover} onMouseLeave={unhover}>AMENITIES</a>
          <a href="#homes-designed" style={aStyle} onMouseEnter={hover} onMouseLeave={unhover}>GALLERY</a>
        </div>

        {/* DESKTOP PHONE BUTTON — Far Right */}
        <div className="hidden lg:flex" style={{ position: 'absolute', right: '32px' }}>
          <a href="tel:9718344024" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--color-brand)',
            color: '#fff',
            padding: '9px 22px',
            borderRadius: '50px',
            fontFamily: F_JOST,
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '0.04em',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(169, 38, 45, 0.2)',
            border: '2px solid transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.color = 'var(--color-brand)';
            e.currentTarget.style.borderColor = 'var(--color-brand)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(169, 38, 45, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--color-brand)';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(169, 38, 45, 0.2)';
          }}
          >
            <Phone size={15} fill="currentColor" />
            9718344024
          </a>
        </div>

        {/* MOBILE: hamburger pushed to right */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            marginLeft: 'auto',
            background: 'none', border: '1px solid #e5e7eb',
            borderRadius: '6px', padding: '6px',
            color: NAV_TEXT, cursor: 'pointer',
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #f0f0f0' }}>
          {[
            { label: 'OVERVIEW',    href: '#overview' },
            { label: 'FLOOR PLANS', href: '#masterplan' },
            { label: 'AMENITIES',   href: '#amenities' },
            { label: 'GALLERY',     href: '#homes-designed' },
          ].map(({ label, href }, i) => (
            <a key={i} href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', padding: '14px 24px',
                fontFamily: F_JOST, fontSize: '13px', fontWeight: '600',
                color: NAV_TEXT, borderBottom: '1px solid #f5f5f5',
                letterSpacing: '0.06em', textDecoration: 'none',
              }}
            >{label}</a>
          ))}
          {/* Mobile drawer call CTA */}
          <div style={{ padding: '16px 24px', borderBottom: '1px solid #f5f5f5', display: 'flex', justifyContent: 'center' }}>
            <a href="tel:9718344024" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: 'var(--color-brand)',
              color: '#fff',
              padding: '8px 20px',
              borderRadius: '50px',
              fontFamily: F_JOST,
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '2px solid transparent',
              boxShadow: '0 4px 12px rgba(169, 38, 45, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = 'var(--color-brand)';
              e.currentTarget.style.borderColor = 'var(--color-brand)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-brand)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            >
              <Phone size={15} fill="currentColor" />
              9718344024
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
