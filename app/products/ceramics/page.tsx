import Link from "next/link";
import ProductCarousel from "@/app/components/ProductCarousel";

export const metadata = {
  title: "Ceramics — Estudio Malva",
};

const specRow: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: '120px 1fr',
  padding: '14px 0', borderBottom: '1px solid var(--bone)', alignItems: 'baseline',
};
const specLabel: React.CSSProperties = {
  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em',
  textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.55,
};
const specValue: React.CSSProperties = { fontSize: 13, lineHeight: 1.5, color: 'var(--ink)' };

const products = [
  {
    name: "Vase 001",
    inquiry: "Vase+001",
    slides: [
      { src: "/ceramics-1.jpg",  alt: "Vase 001" },
      { src: "/ceramics-1b.jpg", alt: "Vase 001 detail" },
      { src: "/ceramics-1c.jpg", alt: "Vase 001 detail 2" },
    ],
    specs: { Material: "Natural clay", Size: "TBD", Technique: "Unglazed ceramic crafted from natural clay and shaped by hand." },
  },
  {
    name: "Vase 002",
    inquiry: "Vase+002",
    slides: [
      { src: "/ceramics-2.jpg",  alt: "Vase 002" },
      { src: "/ceramics-2b.jpg", alt: "Vase 002 detail" },
    ],
    specs: { Material: "Terracotta", Size: "TBD", Technique: "Terracotta ceramic crafted from natural clay and shaped by hand." },
  },
  {
    name: "Taza 001",
    inquiry: "Taza+001",
    slides: [
      { src: "/ceramics-3.jpg",  alt: "Taza 001" },
      { src: "/ceramics-3b.jpg", alt: "Taza 001 detail" },
      { src: "/ceramics-3c.jpg", alt: "Taza 001 detail 2" },
    ],
    specs: { Material: "Natural clay", Size: "TBD", Technique: "Glazed ceramic crafted from natural clay and shaped by hand." },
  },
];

export default function Ceramics() {
  return (
    <div style={{ background: 'var(--moss)', padding: 72, display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* Header */}
      <div style={{ background: 'var(--linen)', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '36px 52px', alignItems: 'center' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1.1, color: 'var(--ink)' }}>
          <span style={{ fontSize: 33, display: 'block' }}>estudio</span>
          <span style={{ fontSize: 33, display: 'block' }}>malva<span style={{ color: 'var(--clay)' }}>.</span></span>
        </Link>
        <Link href="/products" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.7 }}>
          ← All Products
        </Link>
      </div>

      {/* Hero */}
      <div style={{ background: 'var(--linen)', padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, height: '55vh' }}>
        <div style={{ background: 'var(--sand)', overflow: 'hidden' }}>
          <img src="/ceramics-hero.jpg" alt="Ceramics — Estudio Malva" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '36px 28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)' }}>
              Ceramics · Initial Edition
            </span>
            <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)' }}>
              Fired<br /><em style={{ fontStyle: 'italic', color: 'var(--slate)' }}>by hand</em>
            </h1>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--slate)' }}>
              Built from local clay and fired in hand-built kilns. Each piece carries the marks of the earth it came from.
            </p>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.45 }}>
            Argentina · 2026
          </span>
        </div>
      </div>

      {/* Section label */}
      <div style={{ background: 'var(--linen)', padding: '32px 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)' }}>
          Ceramics · Initial Edition
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--slate)', opacity: 0.5 }}>
          3 pieces
        </span>
      </div>

      {/* Product cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {products.map((p) => (
          <div key={p.name} style={{ background: 'var(--linen)', display: 'flex', flexDirection: 'column' }}>
            <ProductCarousel slides={p.slides} />
            <div style={{ padding: '12px 20px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(16px, 1.5vw, 22px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 32 }}>
                {p.name}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--bone)', marginBottom: 12 }}>
                {Object.entries(p.specs).map(([label, value]) => (
                  <div key={label} style={specRow}>
                    <span style={specLabel}>{label}</span>
                    <span style={specValue}>{value}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 'auto' }}>
                <Link
                  href={`/contact?category=ceramics&product=${p.inquiry}`}
                  style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 32px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent' }}
                >
                  Inquire
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
