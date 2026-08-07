'use client';

import Link from "next/link";
import { useState } from "react";

const imgFill: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

export default function Collections2() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* ── Header ──────────────────────────────────────── */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '8px 60px 16px 60px', background: '#ffffff', zIndex: 1000 }}>
        <div style={{ width: 508, fontFamily: 'var(--font-fraunces)', fontSize: 40, fontWeight: 300, color: 'var(--ink)', letterSpacing: '0.02em', whiteSpace: 'nowrap', lineHeight: 1, display: 'flex', alignItems: 'flex-end' }}>
          estudio malva<span style={{ color: 'var(--clay)', fontSize: '1.3em' }}>.</span>
        </div>
        <nav style={{ display: 'flex', gap: 50, alignItems: 'flex-end' }}>
          <Link href="#collections" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'collections' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('collections')} onMouseLeave={() => setHoveredNav(null)}>
            Collections
          </Link>
          <Link href="#journal" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'journal' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('journal')} onMouseLeave={() => setHoveredNav(null)}>
            The Journal
          </Link>
          <Link href="#care" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'care' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('care')} onMouseLeave={() => setHoveredNav(null)}>
            Care & Maintenance
          </Link>
          <Link href="/contact" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'contact' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('contact')} onMouseLeave={() => setHoveredNav(null)}>
            Contact
          </Link>
        </nav>
      </header>

      {/* ── Intro Section ──────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '60px 60px', marginTop: 50 }}>
        <div style={{ marginLeft: '33.33%', maxWidth: '66.67%' }}>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 40, fontWeight: 300, color: 'var(--ink)', lineHeight: 1.2, margin: '0 0 20px 0', letterSpacing: '0.02em' }}>
            INITIAL EDITION
          </h1>
          <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
            A collection of one-of-a-kind samples developed to explore the materials, techniques, and creative possibilities of the artisans we work with. Together, these pieces mark the beginning of the collections to come.
          </p>
        </div>
      </section>

      {/* ── Collections Grid ──────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '60px 60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Row 1 */}
          <div style={{ display: 'flex', gap: 0, alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-1-1.jpg" alt="Collection 1-1" style={imgFill} />
            </div>
            <div style={{ width: 20 }} />
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-1-2.jpg" alt="Collection 1-2" style={imgFill} />
            </div>
            <div style={{ width: 163 }} />
            <div style={{ width: 485, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-1-3.jpg" alt="Collection 1-3" style={imgFill} />
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-2-1.jpg" alt="Collection 2-1" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-2-2.jpg" alt="Collection 2-2" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-2-3.jpg" alt="Collection 2-3" style={imgFill} />
            </div>
          </div>

          {/* Row 3 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 595, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-3-1.jpg" alt="Collection 3-1" style={imgFill} />
            </div>
            <div style={{ width: 595, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-3-2.jpg" alt="Collection 3-2" style={imgFill} />
            </div>
          </div>

          {/* Row 4 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-4-1.jpg" alt="Collection 4-1" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-4-2.jpg" alt="Collection 4-2" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-4-3.jpg" alt="Collection 4-3" style={imgFill} />
            </div>
          </div>

          {/* Row 5 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 501, height: 612, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-5-1.jpg" alt="Collection 5-1" style={imgFill} />
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ width: 328, height: 612, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-5-2.jpg" alt="Collection 5-2" style={imgFill} />
            </div>
            <div style={{ width: 37 }} />
            <div style={{ width: 328, height: 612, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-5-3.jpg" alt="Collection 5-3" style={imgFill} />
            </div>
          </div>

          {/* Row 6 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 328, height: 498, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-6-1.jpg" alt="Collection 6-1" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 498, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-6-2.jpg" alt="Collection 6-2" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 498, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-6-3.jpg" alt="Collection 6-3" style={imgFill} />
            </div>
          </div>

          {/* Row 7 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-7-1.jpg" alt="Collection 7-1" style={imgFill} />
            </div>
            <div style={{ width: 20 }} />
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-7-2.jpg" alt="Collection 7-2" style={imgFill} />
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ width: 520, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-7-3.jpg" alt="Collection 7-3" style={imgFill} />
            </div>
          </div>

          {/* Row 8 */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 298, height: 447, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-8-1.jpg" alt="Collection 8-1" style={imgFill} />
            </div>
            <div style={{ width: 20 }} />
            <div style={{ width: 298, height: 447, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-8-2.jpg" alt="Collection 8-2" style={imgFill} />
            </div>
          </div>

          {/* Row 9 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-9-1.jpg" alt="Collection 9-1" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-9-2.jpg" alt="Collection 9-2" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd' }}>
              <img src="/c-9-3.jpg" alt="Collection 9-3" style={imgFill} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer style={{ background: '#ffffff', padding: '150px 60px 30px 60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Three-Column Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginBottom: 20 }}>

            {/* Left Column - Contact */}
            <div>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
                <a href="mailto:sales@estudiomalva.com" style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)' }}>
                  sales@estudiomalva.com
                </a>
              </p>
            </div>

            {/* Middle Column - Made in Argentina */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, textAlign: 'center' }}>
                Made in Argentina
              </p>
            </div>

            {/* Right Column - Social */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
    </div>
  );
}
