import Link from "next/link";
import HeroGallery from "./components/HeroGallery";
import NewsletterModal from "./components/NewsletterModal";

const imgFill: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="home-hero-section" style={{ background: 'var(--linen)', padding: '20px 72px 72px' }}>
        <div className="home-hero-card" style={{ background: 'var(--linen)', border: '1px solid var(--sand)', display: 'flex', flexDirection: 'column', padding: '60px 60px 0' }}>

          <HeroGallery />

          <div className="home-hero-bar" style={{ display: 'grid', gridTemplateColumns: '1fr 650px', minHeight: 150, marginTop: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '28px 32px 28px 0', fontFamily: 'var(--font-fraunces)', fontWeight: 300, letterSpacing: '0.02em', color: 'var(--ink)', lineHeight: 0.6 }}>
              <span style={{ fontSize: 33 }}>estudio</span>
              <span style={{ fontSize: 33 }}>malva<span style={{ color: 'var(--clay)', fontSize: '1.4em', lineHeight: 1 }}>.</span></span>
            </div>
            <div className="home-hero-bar-right" style={{ padding: '28px 0 28px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 12, alignItems: 'flex-end', width: '100%' }}>
              <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(17px, 1.6vw, 24px)', fontWeight: 300, lineHeight: 1.25, color: 'var(--ink)', textAlign: 'right', textTransform: 'uppercase' }}>
                Raw Textures. Modern Spaces.
              </h1>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.85, color: 'var(--slate)', textAlign: 'right' }}>
                Objects with origin. We travel directly to remote artisan communities across Argentina to secure singular, handmade pieces for curated environments, ensuring absolute transparency and integrity in every texture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="values-section" style={{ background: 'var(--linen)', padding: '0 72px 72px' }} id="story">
        <div className="values-grid" style={{ background: 'var(--linen)', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(2, 260px)' }}>

          {/* Row 1 */}
          <div className="values-img" style={{ gridColumn: 1, gridRow: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/values-1.jpg" alt="" style={{ ...imgFill, objectPosition: 'left bottom', transform: 'scale(0.85)' }} />
          </div>
          <div className="values-cell" style={{ gridColumn: 2, gridRow: 1, padding: '36px 32px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', marginBottom: 16 }}>01</p>
            <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)', marginBottom: 14 }}>Direct<br />Alliance</h3>
            <p style={{ fontSize: 12, lineHeight: 1.8, color: 'var(--slate)' }}>We bypass traditional supply chains entirely, working directly with the artisans, workshops, and families where each object is crafted.</p>
          </div>
          <div className="values-empty" style={{ gridColumn: 3, gridRow: 1 }} />
          <div className="values-img" style={{ gridColumn: 4, gridRow: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/values-2.jpg" alt="" style={{ ...imgFill, transform: 'scale(0.85)' }} />
          </div>
          <div className="values-cell" style={{ gridColumn: 5, gridRow: 1, padding: '36px 32px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', marginBottom: 16 }}>02</p>
            <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)', marginBottom: 14 }}>Absolute<br />Equity</h3>
            <p style={{ fontSize: 12, lineHeight: 1.8, color: 'var(--slate)' }}>We honor the autonomy of the makers to set their own pricing, ensuring direct, fair compensation that respects the true value of their craft.</p>
          </div>

          {/* Row 2 */}
          <div className="values-empty" style={{ gridColumn: 1, gridRow: 2 }} />
          <div className="values-empty" style={{ gridColumn: 2, gridRow: 2 }} />
          <div className="values-img" style={{ gridColumn: 3, gridRow: 2, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/values-3.jpg" alt="" style={{ ...imgFill, objectPosition: 'left bottom', transform: 'scale(0.85)' }} />
          </div>
          <div className="values-cell" style={{ gridColumn: 4, gridRow: 2, padding: '36px 32px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', marginBottom: 16 }}>03</p>
            <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)', marginBottom: 14 }}>Culture<br />Preserved</h3>
            <p style={{ fontSize: 12, lineHeight: 1.8, color: 'var(--slate)' }}>By protecting generational techniques at risk of disappearing, we bring time-honored crafts into contemporary spaces to keep local heritage vibrant and self-sustaining.</p>
          </div>
          <div className="values-cell" style={{ gridColumn: 5, gridRow: 2, padding: '36px 32px', display: 'grid', alignContent: 'end' }}>
            <Link
              href="/thejournal"
              style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 32px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent', cursor: 'pointer' }}
            >
              The Journal
            </Link>
          </div>

        </div>
      </section>

      {/* ── Making in Progress + Generation Next ────────── */}
      <section className="making-section" style={{ background: 'var(--linen)', padding: '0 72px 72px', display: 'flex', flexDirection: 'column', gap: 16 }} id="journal">

        {/* Top: 3 photos, then text and button below */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div className="making-photos" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontStyle: 'italic', fontSize: 15, color: 'var(--ink)', lineHeight: 1.65 }}>
              Our initial editions are currently in development. We are in a discovery phase, studying the distinct structural qualities of native fibers, clay, and traditional craft. These inaugural collections are being refined for contemporary environments and will be available soon.
            </p>
            <Link
              href="/products"
              style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 32px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent', cursor: 'pointer', width: 'fit-content', whiteSpace: 'nowrap' }}
            >
              See collection
            </Link>
          </div>
        </div>

        {/* Bottom: Evolving the Craft full width */}
        <div style={{ background: 'var(--ink)', display: 'flex', flexDirection: 'column', padding: '48px 48px', gap: 16 }}>
          <div>
            <div style={{ width: 36, height: 2, background: 'var(--clay)', marginBottom: 16 }} />
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 20, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)' }}>
              Evolving the Craft
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48 }}>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.8, color: 'rgba(247,244,238,0.55)', flex: 1 }}>
              Discover the innovative creations of a new generation of artisans, blending time-honored heritage with recycled plastic to rewrite the rules of traditional design.
            </p>
            <NewsletterModal />
          </div>
        </div>

      </section>
    </>
  );
}
