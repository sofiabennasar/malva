'use client';

import Link from "next/link";
import { useState } from "react";

const imgFill: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

export default function Home2() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  return (
    <>
      {/* ── Header ──────────────────────────────────────── */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '8px 60px 16px 60px', background: 'white', zIndex: 1000 }}>
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

      {/* ── Hero ────────────────────────────────────────── */}
      <section style={{ background: 'white', padding: '60px 60px', marginTop: 50 }}>
        <div style={{ display: 'flex', gap: 80, alignItems: 'flex-end' }}>
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
      <section style={{ background: 'white', padding: '8px 60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 380px)', gap: 40, justifyContent: 'space-between' }}>

            {/* Column 1 - LEFT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: 110, gridColumn: 1, gridRow: 2 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 110 }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', textTransform: 'uppercase', margin: 0 }}>
                  [SEE COLLECTION]
                </p>
                <div style={{ width: 380, height: 566, background: '#ddd', overflow: 'hidden' }} />
              </div>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.8, color: 'var(--ink)', margin: 0, marginTop: 107, textAlign: 'center' }}>
                Raw textures. Modern spaces.
              </p>
              <div style={{ width: 380, height: 566, background: '#ddd', overflow: 'hidden', marginTop: 107 }} />
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.8, color: 'var(--ink)', margin: 0 }}>
                Discover a new generation of artisans transforming recycled plastic through time-honored techniques and redefining the possibilities of traditional design.
              </p>
            </div>

            {/* Column 2 - MIDDLE */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: 0, gridColumn: 2, gridRow: 2 }}>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
                Our first editions are currently in development. We are exploring the structural qualities of native fibers, clay, and traditional craft, refining each collection for contemporary environments.
              </p>
              <div style={{ width: 380, height: 566, background: '#ddd', overflow: 'hidden' }} />
              <div style={{ width: 380, height: 566, background: '#ddd', overflow: 'hidden' }} />
            </div>

            {/* Column 3 - RIGHT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: 0, gridColumn: 3, gridRow: 2 }}>
              <div style={{ width: 380, height: 566, background: '#ddd', overflow: 'hidden' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 133, marginTop: 132 }}>
                <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, textAlign: 'center' }}>
                  [THE JOURNAL]
                </p>
                <div style={{ width: 380, height: 566, background: '#ddd', overflow: 'hidden' }} />
              </div>
              <div style={{ width: 380, height: 566, background: '#ddd', overflow: 'hidden', marginTop: 75 }} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
