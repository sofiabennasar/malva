'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

const imgFill: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

export default function Home() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [newsletterForm, setNewsletterForm] = useState({ name: '', email: '' });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowNewsletter(false);
    };
    if (showNewsletter) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showNewsletter]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowNewsletter(false);
    setNewsletterForm({ name: '', email: '' });
  };
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* ── Header ──────────────────────────────────────── */}
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

      {/* ── Hero ────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: isMobile ? '40px 20px' : '60px 60px', marginTop: isMobile ? 100 : 50 }}>
        <div style={{ display: 'flex', gap: 80, alignItems: 'flex-end', flexDirection: isMobile ? 'column' : 'row' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', marginBottom: 0 }}>
              We source singular, handmade objects directly from artisan communities across Argentina. Each piece is selected for its origin, materiality, and craftsmanship, creating thoughtful collections with transparent sourcing and cultural integrity.
            </p>
          </div>
          <div style={{ width: 885, height: 662, overflow: 'hidden', flexShrink: 0 }}>
            <img src="/hero-1.jpg" alt="Featured textiles" style={imgFill} />
          </div>
        </div>
      </section>

      {/* ── Body ────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: isMobile ? '8px 20px' : '8px 60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: isMobile ? 'flex' : 'grid', gridTemplateColumns: isMobile ? undefined : 'repeat(3, 380px)', gap: isMobile ? 30 : 40, justifyContent: isMobile ? undefined : 'space-between', flexDirection: isMobile ? 'column' : undefined }}>

            {/* Column 1 - LEFT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: isMobile ? 0 : 110, gridColumn: isMobile ? undefined : 1, gridRow: isMobile ? undefined : 2 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 20 : 110 }}>
                <Link href="/collections" style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, textAlign: 'center', textDecoration: 'none' }}>
                  [SEE COLLECTION]
                </Link>
                <div style={{ width: 380, height: 565, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
                  <img src="/1-1.jpg" alt="Collection" style={imgFill} />
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, marginTop: isMobile ? 20 : 107, textAlign: 'center' }}>
                Raw textures. Modern spaces.
              </p>
              <div style={{ width: 380, height: 565, overflow: 'hidden', flexShrink: 0, background: '#ddd', marginTop: isMobile ? 20 : 107 }}>
                <img src="/1-2.jpg" alt="Raw textures" style={imgFill} />
              </div>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, marginTop: isMobile ? 20 : 190 }}>
                Discover a new generation of artisans transforming recycled plastic through time-honored techniques and redefining the possibilities of traditional design.
              </p>
            </div>

            {/* Column 2 - MIDDLE */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: isMobile ? 0 : 0, gridColumn: isMobile ? undefined : 2, gridRow: isMobile ? undefined : 2 }}>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, marginTop: isMobile ? 0 : 200 }}>
                Our first editions are currently in development. We are exploring the structural qualities of native fibers, clay, and traditional craft, refining each collection for contemporary environments.
              </p>
              <div style={{ width: 380, height: 565, overflow: 'hidden', flexShrink: 0, background: '#ddd', marginTop: isMobile ? 20 : 110 }}>
                <img src="/2-1.jpg" alt="First editions" style={imgFill} />
              </div>
              <div style={{ width: 380, height: 565, overflow: 'hidden', flexShrink: 0, background: '#ddd', marginTop: isMobile ? 20 : 150 }}>
                <img src="/2-2.jpg" alt="Craft collection" style={imgFill} />
              </div>
              <button onClick={() => setShowNewsletter(true)} style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, marginTop: isMobile ? 20 : 135, textAlign: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                [COMING SOON]
              </button>
            </div>

            {/* Column 3 - RIGHT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: isMobile ? 0 : 0, gridColumn: isMobile ? undefined : 3, gridRow: isMobile ? undefined : 2 }}>
              <div style={{ width: 380, height: 565, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
                <img src="/3-1.jpg" alt="Column 3 image 1" style={imgFill} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 20 : 133, marginTop: isMobile ? 0 : 132 }}>
                <Link href="/thejournal" style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, textAlign: 'center', textDecoration: 'none' }}>
                  [THE JOURNAL]
                </Link>
                <div style={{ width: 380, height: 565, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
                  <img src="/3-2.jpg" alt="Journal" style={imgFill} />
                </div>
              </div>
              <div style={{ width: 380, height: 565, overflow: 'hidden', flexShrink: 0, background: '#ddd', marginTop: isMobile ? 20 : 75 }}>
                <img src="/3-3.jpg" alt="Column 3 image 3" style={imgFill} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: isMobile ? '8px 20px' : '8px 60px', marginTop: isMobile ? 80 : 120 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: isMobile ? 'flex' : 'grid', gridTemplateColumns: isMobile ? undefined : 'repeat(3, 380px)', gap: isMobile ? 30 : 40, justifyContent: isMobile ? undefined : 'space-between', flexDirection: isMobile ? 'column' : undefined }}>

            {/* Column 1 - Direct Alliance */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div style={{ width: 380, height: 565, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
                <img src="/v-1.jpg" alt="Direct Alliance" style={imgFill} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, fontWeight: 400 }}>
                  Direct Alliance
                </h3>
                <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
                  We work directly with the artisans, workshops, and families behind every object, creating transparent relationships beyond traditional supply chains.
                </p>
              </div>
            </div>

            {/* Column 2 - Fair Exchange */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div style={{ width: '100%', height: isMobile ? 250 : 565, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
                <img src="/v-2.jpg" alt="Fair Exchange" style={imgFill} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, fontWeight: 400 }}>
                  Fair Exchange
                </h3>
                <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
                  Makers set the value of their own work, ensuring direct and equitable compensation that honors their skill, time, and craftsmanship.
                </p>
              </div>
            </div>

            {/* Column 3 - Living Craft */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div style={{ width: '100%', height: isMobile ? 250 : 565, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
                <img src="/v-3.jpg" alt="Living Craft" style={imgFill} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, fontWeight: 400 }}>
                  Living Craft
                </h3>
                <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
                  We support techniques and knowledge at risk of disappearing, bringing traditional craft into contemporary spaces so it can continue to evolve and remain part of everyday life.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer style={{ background: '#ffffff', padding: isMobile ? '80px 20px 30px 20px' : '150px 60px 30px 60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Three-Column Layout */}
          <div style={{ display: isMobile ? 'flex' : 'grid', gridTemplateColumns: isMobile ? undefined : 'repeat(3, 1fr)', gap: isMobile ? 20 : 40, marginBottom: 20, flexDirection: isMobile ? 'column' : undefined, alignItems: isMobile ? 'center' : undefined, textAlign: isMobile ? 'center' : undefined }}>

            {/* Left Column - Contact */}
            <div>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
                <a href="mailto:sales@estudiomalva.com" style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)' }}>
                  sales@estudiomalva.com
                </a>
              </p>
            </div>

            {/* Middle Column - Made in Argentina */}
            <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'center', alignItems: 'flex-start' }}>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: isMobile ? 13 : 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, textAlign: 'center' }}>
                Made in Argentina
              </p>
            </div>

            {/* Right Column - Social */}
            <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end' }}>
              <a href="https://instagram.com/estudio.malva" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1.85 }}>
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
        </div>
      </footer>

      {/* ── Newsletter Modal ──────────────────────────────────────── */}
      {showNewsletter && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }} onClick={() => setShowNewsletter(false)}>
          <div style={{ background: '#ffffff', padding: '60px', maxWidth: 500, width: isMobile ? '90%' : '100%', position: 'relative', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowNewsletter(false)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: 'var(--ink)', padding: 0, width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              ×
            </button>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 32, fontWeight: 300, color: 'var(--ink)', margin: '0 0 30px 0', letterSpacing: '0.02em' }}>
              Be the first to know!
            </h2>
            <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Name</label>
                <input
                  type="text"
                  required
                  style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', background: 'transparent', border: 'none', borderBottom: '1px solid #ccc', padding: '8px 0', outline: 'none', width: '100%' }}
                  value={newsletterForm.name}
                  onChange={(e) => setNewsletterForm({ ...newsletterForm, name: e.target.value })}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Email</label>
                <input
                  type="email"
                  required
                  style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', background: 'transparent', border: 'none', borderBottom: '1px solid #ccc', padding: '8px 0', outline: 'none', width: '100%' }}
                  value={newsletterForm.email}
                  onChange={(e) => setNewsletterForm({ ...newsletterForm, email: e.target.value })}
                />
              </div>
              <button
                type="submit"
                style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '12px 24px', background: 'var(--ink)', color: '#ffffff', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
