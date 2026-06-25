'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { galleryImages } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'


const CarouselSection = ({ setIsOpen }) => {
  const [index, setIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [selectedImgIndex, setSelectedImgIndex] = useState(null)
  const [userInteracted, setUserInteracted] = useState(0)

  const numItems = galleryImages.length;
  const extendedImages = [
    galleryImages[numItems - 1],
    ...galleryImages,
    galleryImages[0],
    galleryImages[1]
  ].filter(Boolean);

  const getRealIndex = (idx) => {
    if (idx === 0) return numItems - 1;
    if (idx >= numItems + 1) return (idx - 1) % numItems;
    return idx - 1;
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedImgIndex === null) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImgIndex(null)
      if (e.key === 'ArrowRight') setSelectedImgIndex((prev) => (prev + 1) % galleryImages.length)
      if (e.key === 'ArrowLeft') setSelectedImgIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImgIndex])

  const nextLightboxImg = (e) => {
    e.stopPropagation()
    setSelectedImgIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevLightboxImg = (e) => {
    e.stopPropagation()
    setSelectedImgIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const nextSlide = () => {
    if (!isTransitioning) return;
    setIndex((prev) => prev + 1);
    setUserInteracted(Date.now());
  }

  const prevSlide = () => {
    if (!isTransitioning) return;
    setIndex((prev) => prev - 1);
    setUserInteracted(Date.now());
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000); // Autoplay every 4s
    return () => clearInterval(timer);
  }, [userInteracted]);

  // Handle the seamless jump
  useEffect(() => {
    let timeout;
    if (index === 0) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(numItems);
      }, 700);
    } else if (index === numItems + 1) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [index, numItems]);

  // Re-enable transition after jump
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  return (
    <section id="homes-designed" style={{
      padding: '42px 0 72px 0',
      background: '#f9f9f9',
      color: '#121212',
      fontFamily: "'bozon-reg', 'Austin', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
      fontSize: '15px',
      lineHeight: '150%',
      margin: 0,
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progressLine {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}} />
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* ── Header Row ── */}
        <div className="flex items-center justify-between mb-8 gap-6 w-full min-h-[50px]">

          {/* Centered Heading */}
          <div className="flex-1 flex justify-center lg:pl-32">
            <h2 style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '24px',
              color: '#3A2A0E', letterSpacing: '0.1em', margin: 0,
            }} className="text-center">Glimpses of Masterpiece</h2>
          </div>

          {/* Right side Buttons */}
          <div className="flex items-center">
            <button className="btn-brand hidden sm:flex" onClick={() => setIsOpen(true)} style={{ padding: '12px 24px', fontSize: '12px' }}>
              ENQUIRE NOW
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Main Sliding Track Gallery (Premium & Zero-Flash) ── */}
        <div className="relative w-full overflow-hidden rounded-lg carousel-container">
          <style dangerouslySetInnerHTML={{ __html: `
            .carousel-container { --slide-w: 100%; }
            @media (min-width: 768px) { .carousel-container { --slide-w: 65%; } }
          `}} />
          <div 
            className={`flex w-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ 
              transform: `translateX(calc(-${index} * (var(--slide-w) + 16px)))`,
              willChange: 'transform',
              gap: '16px'
            }}
          >
            {extendedImages.map((img, idx) => (
              <div 
                key={idx} 
                className="relative flex-shrink-0 group overflow-hidden bg-gray-200 cursor-pointer"
                style={{ width: 'var(--slide-w)', aspectRatio: '16/9' }}
                onClick={() => setSelectedImgIndex(getRealIndex(idx))}
              >
                <Image
                  src={img.src}
                  alt={img.alt || `Gallery Image ${idx + 1}`}
                  fill
                  priority={idx === 0 || idx === 1 || Math.abs(idx - index) <= 1} // Preload active and adjacent images for instant rendering
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 900px"
                  className="object-cover select-none pointer-events-none transition-transform duration-[800ms] ease-out group-hover:scale-110"
                />
                
                {/* Image Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-8 lg:p-10 pb-5 md:pb-10 flex flex-col justify-end"
                     style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)', minHeight: '40%' }}>
                    <h3 className="text-white text-base md:text-2xl font-bold mb-1 tracking-wide" style={{ fontFamily: F_JOST }}>{img.title}</h3>
                    <p className="text-white/90 text-[11px] md:text-base leading-snug md:leading-relaxed max-w-2xl font-sans">{img.desc}</p>
                    
                    {/* Progress Bar Container */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 md:h-1.5 bg-white/20">
                      {getRealIndex(idx) === getRealIndex(index) && (
                        <div 
                          className="h-full bg-white" 
                          style={{
                            width: '100%',
                            animation: 'progressLine 4s linear forwards'
                          }}
                        />
                      )}
                    </div>
                </div>

                {/* Vertical Text */}
                <div 
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 text-xs tracking-widest hidden md:block" 
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
                >
                  Artistic Impression
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Arrows ── */}
        <div className="flex items-center gap-3 mt-6 ml-2">
          <button onClick={prevSlide} className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-200 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button onClick={nextSlide} className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-200 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

      </div>

      {/* ── Lightbox Modal ── */}
      {selectedImgIndex !== null && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImgIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-[10000] p-2 bg-black/40 rounded-full"
            onClick={() => setSelectedImgIndex(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* Left Arrow */}
          <button 
            className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-[10000] p-2 bg-black/40 rounded-full"
            onClick={prevLightboxImg}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-[10000] p-2 bg-black/40 rounded-full"
            onClick={nextLightboxImg}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          {/* Image Counter */}
          <div 
            className="absolute top-6 left-6 text-white/70 font-medium tracking-widest text-xs p-2 bg-black/40 rounded"
            style={{ fontFamily: F_JOST }}
          >
            {selectedImgIndex + 1} / {galleryImages.length}
          </div>

          {/* Center Content */}
          <div className="relative w-full max-w-[90vw] max-h-[80vh] flex flex-col items-center justify-center">
            <img 
              src={galleryImages[selectedImgIndex].src} 
              alt={galleryImages[selectedImgIndex].alt || 'Gallery Preview'} 
              className="max-w-full max-h-[80vh] object-contain shadow-2xl transition-all duration-300 rounded"
              onClick={(e) => e.stopPropagation()} 
            />
            {/* Alt Text Caption */}
            <div 
              className="mt-4 text-center text-white/80 text-xs md:text-sm tracking-wide max-w-[80vw]"
              style={{ fontFamily: F_JOST }}
            >
              {galleryImages[selectedImgIndex].alt}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CarouselSection
