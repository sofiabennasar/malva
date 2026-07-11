import Link from "next/link";
import ProductCarousel from "@/app/components/ProductCarousel";

export const metadata = {
  title: "Baskets — Estudio Malva",
};

const basket001 = [
  { src: "/basket-2.jpg", alt: "Basket 001", objectPosition: "bottom center" },
  { src: "/basket-4.jpg", alt: "Basket 001 detail", objectPosition: "bottom center" },
];

const basket002 = [
  { src: "/basket-3.jpg", alt: "Basket 002", objectPosition: "bottom center" },
  { src: "/basket-5.jpg", alt: "Basket 002 detail", objectPosition: "bottom center" },
];

const specRowStyle: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: '120px 1fr',
  padding: '14px 0', borderBottom: '1px solid var(--bone)', alignItems: 'baseline',
};

export default function Baskets() {
  return (
    <div className="pg" style={{ background: 'var(--moss)', padding: 72, display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* Header */}
      <div className="hdr" style={{ background: 'var(--linen)', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '36px 52px', alignItems: 'center' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1.1, color: 'var(--ink)' }}>
          <span style={{ fontSize: 33, display: 'block' }}>estudio</span>
          <span style={{ fontSize: 33, display: 'block' }}>malva<span style={{ color: 'var(--clay)' }}>.</span></span>
        </Link>
        <Link
          href="/products"
          className="hdr-back"
          style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.7 }}
        >
          ← All Products
        </Link>
      </div>

      {/* Hero */}
      <div className="two-col hero-h" style={{ background: 'var(--linen)', padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, height: '55vh' }}>
        <div style={{ background: 'var(--sand)', overflow: 'hidden' }}>
          <img src="/basket-1.jpg" alt="Baskets — Estudio Malva" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom center', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '36px 28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)' }}>
              Baskets · Initial Edition
            </span>
            <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)' }}>
              Woven<br /><em style={{ fontStyle: 'italic', color: 'var(--slate)' }}>by hand</em>
            </h1>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--slate)' }}>
              A collection of structural, hand-woven floor containers defined by rigid geometries and raw plant materiality. Each piece operates as a functional object, emphasizing volume, texture, and self-supporting form.
            </p>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.45 }}>
            Argentina · 2026
          </span>
        </div>
      </div>

      {/* Section label */}
      <div className="sec-label" style={{ background: 'var(--linen)', padding: '32px 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)' }}>
          Baskets · Initial Edition
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--slate)', opacity: 0.5 }}>
          2 pieces
        </span>
      </div>

      {/* Product cards */}
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

        {/* Basket 001 */}
        <div style={{ background: 'var(--linen)', display: 'flex', flexDirection: 'column' }}>
          <ProductCarousel slides={basket001} />
          <div style={{ padding: '12px 20px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(16px, 1.5vw, 22px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 32 }}>
              Basket 001
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--bone)', marginBottom: 12 }}>
              <div style={specRowStyle}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.55 }}>Material</span>
                <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--ink)' }}>Wild-Harvested Carandillo Palm Fiber</span>
              </div>
              <div style={specRowStyle}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.55 }}>Size</span>
                <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--ink)' }}>17" x 13" x 13"</span>
              </div>
              <div style={specRowStyle}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.55 }}>Technique</span>
                <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--ink)' }}>A rigid basket bag constructed using a flat-interlocking weave. The wide, satin-textured palm fibers are tightly compressed to create a smooth, dense surface grid, providing the minimalist cube with clean edge-alignment and self-supporting structural weight</span>
              </div>
            </div>
            <div style={{ marginTop: 'auto' }}>
              <Link
                href="/contact?category=baskets&product=Basket+001"
                style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 32px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent' }}
              >
                Inquire
              </Link>
            </div>
          </div>
        </div>

        {/* Basket 002 */}
        <div style={{ background: 'var(--linen)', display: 'flex', flexDirection: 'column' }}>
          <ProductCarousel slides={basket002} />
          <div style={{ padding: '12px 20px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(16px, 1.5vw, 22px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 32 }}>
              Basket 002
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--bone)', marginBottom: 12 }}>
              <div style={specRowStyle}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.55 }}>Material</span>
                <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--ink)' }}>Wild-Harvested Carandillo Palm Fiber</span>
              </div>
              <div style={specRowStyle}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.55 }}>Size</span>
                <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--ink)' }}>12" x 10" x 6"</span>
              </div>
              <div style={specRowStyle}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.55 }}>Technique</span>
                <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--ink)' }}>A cylindrical vessel utilizing a continuous plaiting technique. The flat fiber profile allows for a low-profile, uniform wall thickness that retains a sharp geometric silhouette while emphasizing the raw material's subtle, natural pale-straw tone</span>
              </div>
            </div>
            <div style={{ marginTop: 'auto' }}>
              <Link
                href="/contact?category=baskets&product=Basket+002"
                style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 32px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent' }}
              >
                Inquire
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
