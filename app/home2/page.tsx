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
          <Link href="#collections" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1 }} onMouseEnter={() => setHoveredNav('collections')} onMouseLeave={() => setHoveredNav(null)}>
            {hoveredNav === 'collections' ? '[Collections]' : 'Collections'}
          </Link>
          <Link href="#journal" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1 }} onMouseEnter={() => setHoveredNav('journal')} onMouseLeave={() => setHoveredNav(null)}>
            {hoveredNav === 'journal' ? '[The Journal]' : 'The Journal'}
          </Link>
          <Link href="#care" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1 }} onMouseEnter={() => setHoveredNav('care')} onMouseLeave={() => setHoveredNav(null)}>
            {hoveredNav === 'care' ? '[Care & Maintenance]' : 'Care & Maintenance'}
          </Link>
          <Link href="/contact" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1 }} onMouseEnter={() => setHoveredNav('contact')} onMouseLeave={() => setHoveredNav(null)}>
            {hoveredNav === 'contact' ? '[Contact]' : 'Contact'}
          </Link>
        </nav>
      </header>

      {/* ── Hero ────────────────────────────────────────── */}
      <section style={{ background: 'white', padding: '60px 60px', marginTop: 15 }}>
        <div style={{ display: 'flex', gap: 80, alignItems: 'flex-end' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', marginBottom: 0 }}>
              We source singular, handmade objects directly from artisan communities across Argentina. Each piece is selected for its origin, materiality, and craftsmanship, creating thoughtful collections with transparent sourcing and cultural integrity.
            </p>
          </div>
          <div style={{ width: 885, height: 662, overflow: 'hidden', flexShrink: 0 }}>
            <img src="/hero.jpg" alt="Featured textiles" style={imgFill} />
          </div>
        </div>
      </section>
    </>
  );
}
