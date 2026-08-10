'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Journal() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll('[data-scroll-animate]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    images.forEach((img) => observer.observe(img));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <style>{`
        @keyframes scrollSlideUp {
          from {
            opacity: 0;
            transform: translateY(200px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        [data-scroll-animate] {
          opacity: 0;
          transform: translateY(200px);
        }
        [data-scroll-animate].animate-in {
          animation: scrollSlideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          animation-delay: var(--delay, 0s);
        }
      `}</style>

      {/* Header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: isMobile ? '8px 20px 12px 20px' : '8px 60px 16px 60px', background: '#ffffff', zIndex: 1000, flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 12 : 0 }}>
        <Link href="/" style={{ width: isMobile ? '100%' : 508, fontFamily: 'var(--font-fraunces)', fontSize: isMobile ? 24 : 40, fontWeight: 300, color: 'var(--ink)', letterSpacing: '0.02em', whiteSpace: 'nowrap', lineHeight: 1, display: 'flex', alignItems: 'flex-end', justifyContent: isMobile ? 'center' : 'flex-start', textDecoration: 'none' }}>
          estudio malva<span style={{ color: 'var(--clay)', fontSize: '1.3em' }}>.</span>
        </Link>
        <nav style={{ display: 'flex', gap: isMobile ? 16 : 50, alignItems: 'flex-end', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-end', width: isMobile ? '100%' : 'auto' }}>
          <Link href="/collections" style={{ fontFamily: 'var(--font-archivo)', fontSize: isMobile ? 14 : 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'collections' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('collections')} onMouseLeave={() => setHoveredNav(null)}>
            Collections
          </Link>
          <Link href="/thejournal" style={{ fontFamily: 'var(--font-archivo)', fontSize: isMobile ? 14 : 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'journal' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('journal')} onMouseLeave={() => setHoveredNav(null)}>
            Journal
          </Link>
          <Link href="/contact" style={{ fontFamily: 'var(--font-archivo)', fontSize: isMobile ? 14 : 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'contact' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('contact')} onMouseLeave={() => setHoveredNav(null)}>
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ display: 'flex', alignItems: 'stretch', minHeight: '80vh', marginTop: 50 }}>
        {/* Left: Text */}
        <div style={{ flex: 1, padding: '60px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#ffffff' }}>
          <div style={{ maxWidth: 600 }}>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 16, lineHeight: 1.85, color: 'var(--ink)', margin: '0 0 24px 0' }}>
              Founded by Mora and Sofia, two Argentinian creatives building a direct bridge between Buenos Aires and Los Angeles, we work closely with independent makers to uncover exceptional materials, traditional techniques, and timeless forms.
            </p>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 16, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
              The result is a curated collection of pieces that honor their origins while feeling at home in contemporary spaces.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div style={{ flex: 1, overflow: 'hidden', background: '#f5f5f5' }}>
          <img
            src="/journal-hero.jpg"
            alt="Studio workspace"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* Content Section with Images and Text */}
      <section style={{ background: '#ffffff', padding: '80px 60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* First Row: Left Image + Text */}
          <div style={{ display: 'flex', gap: 60, marginBottom: 180, alignItems: 'flex-start' }}>
            {/* Left Image */}
            <div data-scroll-animate style={{ flex: 0.5, '--delay': '0s' } as React.CSSProperties}>
              <img
                src="/journal-artisan-1.jpg"
                alt="Artisan at loom"
                style={{ width: '100%', height: 500, objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Text */}
            <div style={{ flex: 0.5, display: 'flex', alignItems: 'center', marginTop: 250 }}>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 16, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
                By creating direct opportunities for artisans and bringing their work to new audiences, we help strengthen the local economies that sustain these practices. These techniques are part of Argentina's living cultural story, and sharing them beyond their place of origin allows that knowledge to remain visible, valued, and in motion.
              </p>
            </div>
          </div>

          {/* Second Row: Two Images */}
          <div style={{ display: 'flex', gap: 60, alignItems: 'flex-start' }}>
            {/* Left Image - 2/3 width */}
            <div data-scroll-animate style={{ flex: 2, '--delay': '0.1s' } as React.CSSProperties}>
              <img
                src="/journal-artisan-3.jpg"
                alt="Artisan work"
                style={{ width: '100%', height: 500, objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Right Image - 1/3 width */}
            <div data-scroll-animate style={{ flex: 1, '--delay': '0.2s' } as React.CSSProperties}>
              <img
                src="/journal-artisan-2.jpg"
                alt="Dyed fibers"
                style={{ width: '100%', height: 500, objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#ffffff', borderTop: '1px solid #f0f0f0', padding: '60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 60, marginBottom: 40 }}>
          {/* Left Column - Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, marginBottom: 8 }}>Email</p>
            <a href="mailto:sales@estudiomalva.com" style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1.85 }}>
              sales@estudiomalva.com
            </a>
          </div>

          {/* Middle Column - Location */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.85, color: 'var(--ink)', margin: 0, textAlign: 'center' }}>
              Made in Argentina
            </p>
          </div>

          {/* Right Column - Social */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="https://instagram.com/estudio.malva" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1.85 }}>
              @estudio.malva
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 12, textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', margin: 0, opacity: 0.7 }}>
            © 2026 estudio malva. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
