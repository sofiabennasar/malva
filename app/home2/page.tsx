import Link from "next/link";

const imgFill: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

export default function Home2() {
  return (
    <>
      {/* ── Hero Section ────────────────────────────────── */}
      <section style={{ background: 'var(--linen)', paddingTop: 120, paddingBottom: 80, paddingLeft: 80, paddingRight: 80 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 80 }}>
            <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 56, fontWeight: 400, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 24 }}>
              Textiles & Objects<br />with Origin
            </h1>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 16, lineHeight: 1.75, color: 'var(--slate)', maxWidth: 600 }}>
              We partner directly with artisan communities across Argentina, securing singular handmade pieces that honor traditional craft while supporting sustainable livelihoods.
            </p>
          </div>

          {/* Hero Image */}
          <div style={{ width: '100%', height: 500, overflow: 'hidden', marginBottom: 60 }}>
            <img src="/values-1.jpg" alt="Artisan craft" style={imgFill} />
          </div>

          {/* Quick Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 80 }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', color: 'var(--clay)', marginBottom: 12, textTransform: 'uppercase' }}>Direct Alliance</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--ink)' }}>
                We work directly with makers, eliminating traditional supply chains.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', color: 'var(--clay)', marginBottom: 12, textTransform: 'uppercase' }}>Absolute Equity</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--ink)' }}>
                Artisans set their own pricing, ensuring fair compensation for their craft.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', color: 'var(--clay)', marginBottom: 12, textTransform: 'uppercase' }}>Cultural Preservation</p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--ink)' }}>
                Protecting generational techniques for contemporary spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Practice ────────────────────────────────── */}
      <section style={{ background: 'white', padding: '120px 80px', borderTop: '1px solid var(--sand)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 32, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)', marginBottom: 28 }}>
                Our Practice
              </h2>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.8, color: 'var(--slate)', marginBottom: 20 }}>
                Each piece begins with research and direct connection. We travel to remote communities, study their craft traditions, and build lasting relationships with the artisans behind each object.
              </p>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.8, color: 'var(--slate)', marginBottom: 32 }}>
                Our curatorial process ensures that every item reflects the authentic voice of its maker while speaking to contemporary design sensibilities.
              </p>
              <Link
                href="/about"
                style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '14px 28px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent', cursor: 'pointer', whiteSpace: 'nowrap' }}
              >
                Read our story
              </Link>
            </div>
            <div style={{ height: 400, overflow: 'hidden' }}>
              <img src="/values-2.jpg" alt="The practice" style={imgFill} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Collections ─────────────────────────────────── */}
      <section style={{ background: 'var(--linen)', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 32, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)', marginBottom: 16 }}>
              Collections
            </h2>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.8, color: 'var(--slate)', maxWidth: 700 }}>
              Our inaugural collections explore native fibers, clay, and generational techniques. Each edition is curated with intention, refined for contemporary environments.
            </p>
          </div>

          {/* Collection Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40, marginBottom: 60 }}>
            <div>
              <div style={{ height: 450, overflow: 'hidden', marginBottom: 24 }}>
                <img src="/product-1.jpg" alt="Collection 1" style={imgFill} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 20, fontWeight: 300, color: 'var(--ink)', marginBottom: 12 }}>
                Fibers & Textiles
              </h3>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.7, color: 'var(--slate)' }}>
                Hand-woven pieces from northern Argentina, showcasing traditional fiber techniques.
              </p>
            </div>
            <div>
              <div style={{ height: 450, overflow: 'hidden', marginBottom: 24 }}>
                <img src="/product-2.jpg" alt="Collection 2" style={imgFill} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 20, fontWeight: 300, color: 'var(--ink)', marginBottom: 12 }}>
                Clay & Objects
              </h3>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.7, color: 'var(--slate)' }}>
                Handcrafted ceramics and vessels that blend ancestral methods with modern form.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              href="/products"
              style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '14px 28px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent', cursor: 'pointer' }}
            >
              View all collections
            </Link>
          </div>
        </div>
      </section>

      {/* ── Journal ─────────────────────────────────────── */}
      <section style={{ background: 'white', padding: '120px 80px', borderTop: '1px solid var(--sand)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 32, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)', marginBottom: 16 }}>
              The Journal
            </h2>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.8, color: 'var(--slate)', maxWidth: 700 }}>
              Stories from our collaborators, documentation of craft traditions, and reflections on design with purpose.
            </p>
          </div>

          {/* Journal Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {[1, 2, 3].map((i) => (
              <article key={i} style={{ cursor: 'pointer' }}>
                <div style={{ height: 300, overflow: 'hidden', marginBottom: 20 }}>
                  <img src={`/product-${i}.jpg`} alt={`Article ${i}`} style={imgFill} />
                </div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--clay)', marginBottom: 12, textTransform: 'uppercase' }}>
                  Feature
                </p>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 16, fontWeight: 300, lineHeight: 1.4, color: 'var(--ink)', marginBottom: 12 }}>
                  {['Weaving Heritage', 'The Clay Makers', 'Sustainable Craft'][i - 1]}
                </h3>
                <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.6, color: 'var(--slate)' }}>
                  {['Exploring textile traditions passed down through generations.', 'Meet the artisans shaping our ceramic collections.', 'How tradition and innovation intersect in contemporary design.'][i - 1]}
                </p>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <Link
              href="/thejournal"
              style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '14px 28px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent', cursor: 'pointer' }}
            >
              Read the journal
            </Link>
          </div>
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────── */}
      <section style={{ background: 'var(--ink)', padding: '120px 80px', borderTop: '1px solid var(--sand)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 40, fontWeight: 400, lineHeight: 1.2, color: 'var(--linen)', marginBottom: 24 }}>
            Stay Connected
          </h2>
          <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.8, color: 'rgba(247,244,238,0.7)', marginBottom: 40 }}>
            Receive stories from our collaborators and updates on new collections. No spam, just meaningful correspondence.
          </p>
          <form style={{ display: 'flex', gap: 12 }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: '14px 16px',
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
                padding: '14px 28px',
                border: '1px solid var(--linen)',
                color: 'var(--ink)',
                background: 'var(--linen)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
