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
      <section style={{ background: 'white', padding: '120px 60px 60px', marginTop: 60 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-end', minHeight: 700 }}>
            {/* Left text - positioned lower */}
            <div>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', marginBottom: 0 }}>
                We source singular, handmade objects directly from artisan communities across Argentina. Each piece is selected for its origin, materiality, and craftsmanship, creating thoughtful collections with transparent sourcing and cultural integrity.
              </p>
            </div>
            {/* Right large image */}
            <div style={{ height: 650, overflow: 'hidden' }}>
              <img src="/values-1.jpg" alt="Featured textiles" style={imgFill} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ──────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF', padding: '60px 60px 40px' }} id="collections">
        <div style={{ maxWidth: 1400, margin: '0 auto', marginBottom: 40 }}>
          <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.9, color: 'var(--slate)', maxWidth: 800 }}>
            Our first editions are currently in development. We are exploring the structural qualities of native fibers, clay, and traditional craft, refining each collection for contemporary environments.
          </p>
        </div>
      </section>

      {/* ── Three Column Masonry Layout (NOT ALIGNED) ───── */}
      <section style={{ background: '#FFFFFF', padding: '0 60px 80px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>

            {/* Column 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ height: 480, overflow: 'hidden' }}>
                <img src="/product-1.jpg" alt="Woven detail" style={imgFill} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', textTransform: 'uppercase', marginBottom: 12 }}>
                  [THE JOURNAL]
                </p>
              </div>
              <div style={{ height: 350, overflow: 'hidden' }}>
                <img src="/values-2.jpg" alt="Textile" style={imgFill} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.7, color: 'var(--slate)' }}>
                  Exploring textile traditions passed down through generations.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 100 }}>
              <div style={{ height: 420, overflow: 'hidden' }}>
                <img src="/basket-2.jpg" alt="Basket" style={imgFill} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', textTransform: 'uppercase', marginBottom: 12 }}>
                  [SEE COLLECTION]
                </p>
              </div>
              <div style={{ height: 380, overflow: 'hidden' }}>
                <img src="/product-2.jpg" alt="Ceramic" style={imgFill} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.7, color: 'var(--slate)' }}>
                  Handcrafted ceramics and vessels blending ancestral methods with modern form.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 40 }}>
              <div style={{ height: 500, overflow: 'hidden' }}>
                <img src="/values-3.jpg" alt="Detail" style={imgFill} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.7, color: 'var(--slate)', marginBottom: 16 }}>
                  Raw textures. Modern spaces.
                </p>
              </div>
              <div style={{ height: 320, overflow: 'hidden' }}>
                <img src="/product-3.jpg" alt="Product" style={imgFill} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three Principles ────────────────────────────── */}
      <section style={{ background: 'white', padding: '80px 60px', borderTop: '1px solid var(--sand)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 80 }}>
            <div>
              <div style={{ height: 350, overflow: 'hidden', marginBottom: 20 }}>
                <img src="/brushed-1.jpg" alt="Direct Alliance" style={imgFill} />
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', color: 'var(--clay)', textTransform: 'uppercase', marginBottom: 12 }}>
                Direct Alliance
              </p>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.8, color: 'var(--slate)' }}>
                We work directly with the artisans, workshops, and families where each object is crafted.
              </p>
            </div>
            <div>
              <div style={{ height: 350, overflow: 'hidden', marginBottom: 20 }}>
                <img src="/bag-1.jpg" alt="Fair Exchange" style={imgFill} />
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', color: 'var(--clay)', textTransform: 'uppercase', marginBottom: 12 }}>
                Fair Exchange
              </p>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.8, color: 'var(--slate)' }}>
                Makers set the value of their own work, ensuring direct and equitable compensation.
              </p>
            </div>
            <div>
              <div style={{ height: 350, overflow: 'hidden', marginBottom: 20 }}>
                <img src="/basket-1.jpg" alt="Living Craft" style={imgFill} />
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', color: 'var(--clay)', textTransform: 'uppercase', marginBottom: 12 }}>
                Living Craft
              </p>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.8, color: 'var(--slate)' }}>
                We support techniques and knowledge at risk of disappearing, bringing heritage into contemporary spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Journal Section ─────────────────────────────── */}
      <section style={{ background: '#FFFFFF', padding: '80px 60px', borderTop: '1px solid var(--sand)' }} id="journal">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginBottom: 80 }}>
            <div>
              <div style={{ height: 480, overflow: 'hidden', marginBottom: 20 }}>
                <img src="/brushed-1b.jpg" alt="Article" style={imgFill} />
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', color: 'var(--clay)', textTransform: 'uppercase', marginBottom: 8 }}>
                Feature
              </p>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 16, fontWeight: 300, lineHeight: 1.3, color: 'var(--ink)' }}>
                Weaving Heritage
              </h3>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', color: 'var(--clay)', textTransform: 'uppercase', marginBottom: 16 }}>
                The Journal
              </p>
              <div style={{ height: 420, overflow: 'hidden', marginBottom: 24 }}>
                <img src="/basket-3.jpg" alt="Article" style={imgFill} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)', marginBottom: 16 }}>
                The Clay Makers
              </h2>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.8, color: 'var(--slate)', marginBottom: 20 }}>
                Meet the artisans shaping our ceramic collections and their transformative creative process.
              </p>
              <Link
                href="/thejournal"
                style={{ fontFamily: 'var(--font-archivo)', fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none' }}
              >
                Read more →
              </Link>
            </div>
            <div>
              <div style={{ height: 380, overflow: 'hidden', marginBottom: 20 }}>
                <img src="/bag-2.jpg" alt="Article" style={imgFill} />
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', color: 'var(--clay)', textTransform: 'uppercase', marginBottom: 8 }}>
                Feature
              </p>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 16, fontWeight: 300, lineHeight: 1.3, color: 'var(--ink)', marginBottom: 12 }}>
                Sustainable Craft
              </h3>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 11, lineHeight: 1.6, color: 'var(--slate)' }}>
                How tradition and innovation intersect in contemporary design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────── */}
      <section style={{ background: 'var(--ink)', padding: '100px 60px', borderTop: '1px solid var(--sand)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 48, fontWeight: 400, lineHeight: 1, color: 'var(--linen)', marginBottom: 20 }}>
                Stay<br />Connected
              </h2>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.8, color: 'rgba(247,244,238,0.7)' }}>
                Receive stories from our collaborators and updates on new collections.
              </p>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  padding: '12px 14px',
                  fontFamily: 'var(--font-archivo)',
                  fontSize: 13,
                  border: '1px solid rgba(247,244,238,0.3)',
                  background: 'transparent',
                  color: 'var(--linen)',
                }}
              />
              <button
                type="submit"
                style={{
                  fontFamily: 'var(--font-archivo)',
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '12px 0',
                  border: '1px solid var(--linen)',
                  color: 'var(--ink)',
                  background: 'var(--linen)',
                  cursor: 'pointer',
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
