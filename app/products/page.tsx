import Link from "next/link";
import { products } from "@/lib/products";

export default function Products() {
  return (
    <div className="pg" style={{ background: 'var(--linen)', padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* Header */}
      <div style={{ background: 'var(--linen)', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '52px 64px', alignItems: 'center', gap: 32 }} className="products-header">
        <Link href="/" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 300, letterSpacing: '0.02em', color: 'var(--ink)', lineHeight: 0.6 }}>
          <span style={{ fontSize: 33, display: 'block' }}>estudio</span>
          <span style={{ fontSize: 33, display: 'block' }}>malva<span style={{ color: 'var(--clay)', fontSize: '1.4em', lineHeight: 1 }}>.</span></span>
        </Link>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
          <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(24px, 2.8vw, 40px)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)', textAlign: 'right' }}>
            INITIAL <em style={{ fontStyle: 'italic', color: 'var(--slate)' }}>EDITIONS</em>
          </h1>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)', border: '1px solid var(--clay)', padding: '5px 12px' }}>
            In Development
          </span>
        </div>
      </div>

      {/* Product grid */}
      <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {products.map((p) => (
          <Link
            key={p.name}
            href={`/products/${p.slug}`}
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', border: '1px solid var(--sand)', background: 'var(--linen)' }}
          >
            <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: 'var(--bone)' }}>
              <img
                src={p.slides[0].src}
                alt={p.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.slides[0].objectPosition ?? 'center', display: 'block' }}
              />
            </div>
            <div style={{ padding: '14px 16px 18px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)', margin: 0 }}>
                {p.num}
              </p>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 15, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)', margin: 0 }}>
                {p.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
