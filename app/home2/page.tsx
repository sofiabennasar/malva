import Link from "next/link";
import { products } from "@/lib/products";

export default function Home2() {
  // Featured products for the grid
  const featured = [products[0], products[1], products[4], products[6]];

  return (
    <div style={{ background: 'var(--linen)', minHeight: '100vh' }}>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section style={{ padding: '120px 72px 80px', textAlign: 'center', borderBottom: '1px solid var(--sand)' }}>
        <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 300, letterSpacing: '0.02em', color: 'var(--ink)', lineHeight: 0.6, marginBottom: 24 }}>
          <span style={{ fontSize: 56, display: 'block' }}>estudio</span>
          <span style={{ fontSize: 56, display: 'block' }}>malva<span style={{ color: 'var(--clay)', fontSize: '1.4em', lineHeight: 1 }}>.</span></span>
        </div>
        <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.7 }}>
          Raw Textures. Modern Spaces.
        </p>
      </section>

      {/* ── Intro ──────────────────────────────────────────────────– */}
      <section style={{ padding: '80px 72px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 14, lineHeight: 2, color: 'var(--ink)', marginBottom: 32, fontStyle: 'italic' }}>
          Objects with origin. We travel directly to remote artisan communities across Argentina to secure singular, handmade pieces for curated environments, ensuring absolute transparency and integrity in every texture.
        </p>
        <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.8, color: 'var(--slate)', maxWidth: 700, margin: '0 auto' }}>
          By blending the craftsmanship of our past with contemporary design, we honor generational techniques at risk of disappearing. Each collection represents a direct alliance with makers, workshops, and families where these objects are born — creating a bridge between heritage and the homes of today.
        </p>
      </section>

      {/* ── Featured Products Grid ─────────────────────────────────– */}
      <section style={{ padding: '80px 72px', background: 'var(--linen)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48, maxWidth: 1200, margin: '0 auto' }}>
          {featured.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: 'var(--bone)' }}>
                <img
                  src={product.slides[0].src}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: product.slides[0].objectPosition ?? 'center', display: 'block' }}
                />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: 8 }}>
                  {product.num}
                </p>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 18, fontWeight: 300, lineHeight: 1.3, color: 'var(--ink)', margin: 0 }}>
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Journal Preview ────────────────────────────────────────– */}
      <section style={{ padding: '80px 72px', borderTop: '1px solid var(--sand)', borderBottom: '1px solid var(--sand)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48, alignItems: 'center' }}>
            <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--bone)' }}>
              <img
                src="/story-1.jpg"
                alt="Journal preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)' }}>
                The Journal
              </p>
              <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 32, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)', margin: 0 }}>
                Weaving Heritage Into Tomorrow
              </h2>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.8, color: 'var(--slate)' }}>
                Discover the stories behind each collection. Learn about the artisans, the techniques passed down through generations, and how tradition meets contemporary design in every handmade piece.
              </p>
              <Link
                href="/thejournal"
                style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none', marginTop: 12, width: 'fit-content' }}
              >
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values (Sparse) ────────────────────────────────────────– */}
      <section style={{ padding: '100px 72px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 60 }}>
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 20, fontWeight: 300, color: 'var(--ink)', lineHeight: 1.4, marginBottom: 12 }}>
              Direct Alliance
            </p>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.8, color: 'var(--slate)' }}>
              We bypass traditional supply chains, working directly with artisans and families where each object is crafted.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 20, fontWeight: 300, color: 'var(--ink)', lineHeight: 1.4, marginBottom: 12 }}>
              Absolute Equity
            </p>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.8, color: 'var(--slate)' }}>
              Makers set their own pricing. We ensure direct, fair compensation that honors the true value of their craft.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 20, fontWeight: 300, color: 'var(--ink)', lineHeight: 1.4, marginBottom: 12 }}>
              Culture Preserved
            </p>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, lineHeight: 1.8, color: 'var(--slate)' }}>
              By protecting generational techniques, we bring time-honored crafts into contemporary spaces, keeping heritage vibrant.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────– */}
      <section style={{ padding: '80px 72px', textAlign: 'center', borderTop: '1px solid var(--sand)' }}>
        <Link
          href="/products"
          style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '16px 48px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent', cursor: 'pointer', textDecoration: 'none' }}
        >
          See collection
        </Link>
      </section>

    </div>
  );
}
