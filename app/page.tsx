import Link from "next/link";
import HeroGallery from "./components/HeroGallery";
import NewsletterModal from "./components/NewsletterModal";

const imgFill: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="home-hero-section" style={{ background: 'var(--linen)', padding: '72px 72px 72px' }}>
        <div className="home-hero-card" style={{ background: 'var(--bone)', display: 'flex', flexDirection: 'column', padding: '16px 16px 0' }}>

          <HeroGallery />

          <div className="home-hero-bar" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', minHeight: 150, marginTop: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '28px 32px', fontFamily: 'var(--font-fraunces)', fontWeight: 300, letterSpacing: '0.02em', color: 'var(--ink)', lineHeight: 1.1 }}>
              <span style={{ fontSize: 33 }}>estudio</span>
              <span style={{ fontSize: 33 }}>malva<span style={{ color: 'var(--clay)' }}>.</span></span>
            </div>
            <div className="home-hero-bar-right" style={{ padding: '28px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, alignItems: 'flex-end' }}>
              <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(17px, 1.6vw, 24px)', fontWeight: 300, lineHeight: 1.25, color: 'var(--ink)', textAlign: 'right' }}>
                Raw Textures. Modern Spaces.
              </h1>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.85, color: 'var(--slate)', maxWidth: 480, textAlign: 'right' }}>
                At Estudio Malva, we believe a home should be shaped by stories. We travel directly to remote artisan communities across Argentina to bring you singular, handmade objects. No middlemen, no compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="values-section" style={{ background: 'var(--linen)', padding: '0 72px 72px' }} id="story">
        <div className="values-grid" style={{ background: 'var(--bone)', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(3, 260px)' }}>

          {/* Row 1 */}
          <div className="values-img" style={{ gridColumn: 1, gridRow: 1, overflow: 'hidden' }}>
            <img src="/values-1.jpg" alt="" style={{ ...imgFill, objectPosition: 'left bottom' }} />
          </div>
          <div className="values-cell" style={{ gridColumn: 2, gridRow: 1, padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', marginBottom: 16 }}>01</p>
            <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 22, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)', marginBottom: 14 }}>Direct<br />Alliance</h3>
            <p style={{ fontSize: 12, lineHeight: 1.8, color: 'var(--slate)' }}>We bypass traditional supply chains entirely, working directly with the artisans, workshops, and families where each object is crafted.</p>
          </div>
          <div className="values-empty" style={{ gridColumn: 3, gridRow: 1 }} />
          <div className="values-empty" style={{ gridColumn: 4, gridRow: 1 }} />
          <div className="values-empty" style={{ gridColumn: 5, gridRow: 1 }} />

          {/* Row 2 */}
          <div className="values-empty" style={{ gridColumn: 1, gridRow: 2 }} />
          <div className="values-empty" style={{ gridColumn: 2, gridRow: 2 }} />
          <div className="values-empty" style={{ gridColumn: 3, gridRow: 2 }} />
          <div className="values-img" style={{ gridColumn: 4, gridRow: 2, overflow: 'hidden' }}>
            <img src="/values-2.jpg" alt="" style={imgFill} />
          </div>
          <div className="values-cell" style={{ gridColumn: 5, gridRow: 2, padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', marginBottom: 16 }}>02</p>
            <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 22, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)', marginBottom: 14 }}>Absolute<br />Equity</h3>
            <p style={{ fontSize: 12, lineHeight: 1.8, color: 'var(--slate)' }}>We honor the autonomy of the makers to set their own pricing, ensuring direct, fair compensation that respects the true value of their craft.</p>
          </div>

          {/* Row 3 */}
          <div className="values-empty" style={{ gridColumn: 1, gridRow: 3 }} />
          <div className="values-cell" style={{ gridColumn: 2, gridRow: 3, padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', marginBottom: 16 }}>03</p>
            <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 22, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)', marginBottom: 14 }}>Culture<br />Preserved</h3>
            <p style={{ fontSize: 12, lineHeight: 1.8, color: 'var(--slate)' }}>By protecting generational techniques at risk of disappearing, we bring time-honored crafts into contemporary spaces to keep local heritage vibrant and self-sustaining.</p>
          </div>
          <div className="values-img" style={{ gridColumn: 3, gridRow: 3, overflow: 'hidden' }}>
            <img src="/values-3.jpg" alt="" style={{ ...imgFill, objectPosition: 'left bottom' }} />
          </div>
          <div className="values-empty" style={{ gridColumn: 4, gridRow: 3 }} />
          <div className="values-cell" style={{ gridColumn: 5, gridRow: 3, display: 'flex', alignItems: 'flex-end', padding: '36px 32px' }}>
            <Link
              href="/thejournal"
              style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 32px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent', cursor: 'pointer' }}
            >
              The Journal
            </Link>
          </div>

        </div>
      </section>

      {/* ── Making in Progress + Wave ────────────────────── */}
      <section className="making-section" style={{ background: 'var(--linen)', padding: '0 72px 72px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} id="journal">

        {/* Left: 3 vertical photos + text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div className="making-photos" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, flex: 1 }}>
            <div style={{ minHeight: 500, overflow: 'hidden' }}>
              <img src="/product-1.jpg" alt="" style={imgFill} />
            </div>
            <div style={{ minHeight: 500, overflow: 'hidden' }}>
              <img src="/product-2.jpg" alt="" style={imgFill} />
            </div>
            <div style={{ minHeight: 500, overflow: 'hidden' }}>
              <img src="/product-3.jpg" alt="" style={imgFill} />
            </div>
          </div>
          <div style={{ padding: '4px 0 24px', display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
            <p style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', fontSize: 15, color: 'var(--ink)', lineHeight: 1.65 }}>
              Currently in development. Our initial editions are coming soon.
            </p>
            <Link
              href="/products"
              style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 32px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent' }}
            >
              See products
            </Link>
          </div>
        </div>

        {/* Right: Wave card (dark) */}
        <div style={{ display: 'flex' }}>
          <div style={{ background: 'var(--ink)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '52px 48px 24px', width: '100%', flex: 1 }}>
            <div style={{ width: 36, height: 2, background: 'var(--clay)', marginBottom: 28 }} />
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: 16 }}>
              Evolving the Craft
            </p>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(30px, 3.2vw, 48px)', fontWeight: 300, lineHeight: 1.15, color: 'var(--linen)', marginBottom: 20 }}>
              Generation <em style={{ fontStyle: 'italic', color: 'var(--sand)' }}>Next</em>
            </h2>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(247,244,238,0.55)', maxWidth: 340, marginBottom: 36 }}>
              Discover the innovative creations of a new generation of artisans, blending time-honored heritage with recycled plastic to rewrite the rules of traditional design.
            </p>
            <NewsletterModal />
          </div>
        </div>

      </section>
    </>
  );
}
