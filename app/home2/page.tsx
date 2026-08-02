import Link from "next/link";

const imgFill: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

export default function Home2() {
  return (
    <>
      {/* ── Hero Section ────────────────────────────────── */}
      <section style={{ background: 'var(--linen)', padding: '100px 60px 60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ marginBottom: 100 }}>
            <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 64, fontWeight: 400, lineHeight: 1, color: 'var(--ink)', marginBottom: 32 }}>
              Textiles<br />& Objects<br />with Origin
            </h1>
          </div>

          {/* Asymmetric Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40, alignItems: 'start' }}>
            {/* Large image on left */}
            <div style={{ height: 600, overflow: 'hidden' }}>
              <img src="/values-1.jpg" alt="Artisan craft" style={imgFill} />
            </div>

            {/* Text and smaller image on right */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, paddingTop: 20 }}>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.8, color: 'var(--slate)' }}>
                We partner directly with artisan communities across Argentina, securing singular handmade pieces that honor traditional craft while supporting sustainable livelihoods.
              </p>

              <div style={{ height: 350, overflow: 'hidden' }}>
                <img src="/values-2.jpg" alt="Details" style={imgFill} />
              </div>

              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', marginBottom: 12, textTransform: 'uppercase' }}>Three Principles</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <li>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 4 }}>Direct Alliance</p>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.6, color: 'var(--slate)' }}>We bypass traditional supply chains.</p>
                  </li>
                  <li>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 4 }}>Absolute Equity</p>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.6, color: 'var(--slate)' }}>Makers set their own pricing.</p>
                  </li>
                  <li>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 4 }}>Cultural Preservation</p>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.6, color: 'var(--slate)' }}>Protecting generational techniques.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Collections - Asymmetric ───────────────────── */}
      <section style={{ background: 'white', padding: '120px 60px', borderTop: '1px solid var(--sand)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 40, fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 20 }}>
            Collections
          </h2>
          <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 14, lineHeight: 1.8, color: 'var(--slate)', maxWidth: 700, marginBottom: 80 }}>
            Curated with intention. Each edition refined for contemporary environments.
          </p>

          {/* Asymmetric grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 0.9fr', gap: 32, gridTemplateRows: 'auto auto' }}>
            {/* Item 1 - tall left */}
            <div style={{ gridColumn: 1, gridRow: '1 / 3' }}>
              <div style={{ height: 700, overflow: 'hidden', marginBottom: 24 }}>
                <img src="/product-1.jpg" alt="Fibers" style={imgFill} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontWeight: 300, color: 'var(--ink)', marginBottom: 12 }}>
                Fibers & Textiles
              </h3>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.7, color: 'var(--slate)' }}>
                Hand-woven pieces from northern Argentina, showcasing traditional techniques passed through generations.
              </p>
            </div>

            {/* Item 2 - medium center top */}
            <div>
              <div style={{ height: 450, overflow: 'hidden', marginBottom: 20 }}>
                <img src="/values-3.jpg" alt="Clay" style={imgFill} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontWeight: 300, color: 'var(--ink)', marginBottom: 12 }}>
                Clay & Objects
              </h3>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.7, color: 'var(--slate)' }}>
                Handcrafted ceramics blending ancestral methods with modern form.
              </p>
            </div>

            {/* Item 3 - small right */}
            <div>
              <div style={{ height: 380, overflow: 'hidden', marginBottom: 16 }}>
                <img src="/product-2.jpg" alt="Details" style={imgFill} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 18, fontWeight: 300, color: 'var(--ink)', marginBottom: 8 }}>
                Artisan Collabs
              </h3>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.6, color: 'var(--slate)' }}>
                Limited editions with contemporary makers.
              </p>
            </div>

            {/* Item 4 - bottom right, spans 2 */}
            <div style={{ gridColumn: '2 / 4' }}>
              <div style={{ height: 300, overflow: 'hidden', marginBottom: 20 }}>
                <img src="/product-3.jpg" alt="Process" style={imgFill} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', marginBottom: 8, textTransform: 'uppercase' }}>Process</p>
                  <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.7, color: 'var(--slate)' }}>
                    Each collection begins with research and direct connection to artisan communities.
                  </p>
                </div>
                <Link
                  href="/products"
                  style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 24px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent', cursor: 'pointer', height: 'fit-content' }}
                >
                  Explore all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Journal - Asymmetric ───────────────────────── */}
      <section style={{ background: 'var(--linen)', padding: '120px 60px', borderTop: '1px solid var(--sand)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr 1fr', gap: 40, alignItems: 'start' }}>
            {/* Left - tall image */}
            <div>
              <div style={{ height: 600, overflow: 'hidden', marginBottom: 20 }}>
                <img src="/values-2.jpg" alt="Journal" style={imgFill} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 18, fontWeight: 300, color: 'var(--ink)', marginBottom: 8 }}>
                Weaving Heritage
              </h3>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.6, color: 'var(--slate)' }}>
                Textile traditions across generations.
              </p>
            </div>

            {/* Center - medium image + text */}
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', marginBottom: 16, textTransform: 'uppercase' }}>The Journal</p>
              <div style={{ height: 400, overflow: 'hidden', marginBottom: 24 }}>
                <img src="/product-1.jpg" alt="Article" style={imgFill} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 20, fontWeight: 300, lineHeight: 1.3, color: 'var(--ink)', marginBottom: 12 }}>
                The Clay Makers
              </h3>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.7, color: 'var(--slate)', marginBottom: 24 }}>
                Meet the artisans shaping our ceramic collections and their creative process.
              </p>
              <Link
                href="/thejournal"
                style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none' }}
              >
                Read more →
              </Link>
            </div>

            {/* Right - smaller images stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <article>
                <div style={{ height: 280, overflow: 'hidden', marginBottom: 12 }}>
                  <img src="/product-2.jpg" alt="Feature" style={imgFill} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 15, fontWeight: 300, color: 'var(--ink)', marginBottom: 6 }}>
                  Sustainable Craft
                </h4>
                <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 11, lineHeight: 1.6, color: 'var(--slate)' }}>
                  Tradition meets innovation.
                </p>
              </article>

              <article>
                <div style={{ height: 280, overflow: 'hidden', marginBottom: 12 }}>
                  <img src="/product-3.jpg" alt="Feature" style={imgFill} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 15, fontWeight: 300, color: 'var(--ink)', marginBottom: 6 }}>
                  Direct Stories
                </h4>
                <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 11, lineHeight: 1.6, color: 'var(--slate)' }}>
                  From our collaborators.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────── */}
      <section style={{ background: 'var(--ink)', padding: '100px 60px', borderTop: '1px solid var(--sand)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 44, fontWeight: 400, lineHeight: 1.1, color: 'var(--linen)', marginBottom: 20 }}>
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
