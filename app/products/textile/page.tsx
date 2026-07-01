import Link from "next/link";
import ProductCarousel from "@/app/components/ProductCarousel";

export const metadata = {
  title: "Textiles — Estudio Malva",
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
    name: "Throw 001",
    inquiry: "Throw+001",
    slides: [
      { src: "/llama-1.jpg",  alt: "Throw 001" },
      { src: "/llama-1b.jpg", alt: "Throw 001 detail" },
    ],
    specs: { Material: "Naturally Undyed Llama Fiber", Size: "2.3' x 7.2'", Technique: "A lightweight throw woven from undyed llama fiber. Soft, warm, and understated, it showcases the natural ivory tone of the animal's coat. Hand-spun and woven using traditional techniques passed down through generations" },
  },
  {
    name: "Throw 002",
    inquiry: "Throw+002",
    slides: [
      { src: "/llama-2.jpg",  alt: "Throw 002" },
      { src: "/llama-2b.jpg", alt: "Throw 002 detail" },
    ],
    specs: { Material: "Naturally Undyed Llama Fiber", Size: "2.3' x 7.2'", Technique: "Woven from undyed brown llama fiber sourced in the Argentine Andes. The rich color comes directly from the animal itself and requires no dyes or chemical treatments. Hand-spun and woven using traditional techniques passed down through generations" },
  },
  {
    name: "Throw 003",
    inquiry: "Throw+003",
    slides: [
      { src: "/llama-3.jpg",  alt: "Throw 003" },
      { src: "/llama-3b.jpg", alt: "Throw 003 detail" },
      { src: "/llama-3c.jpg", alt: "Throw 003 detail 2" },
    ],
    specs: { Material: "Wild-Harvested Chaguar Fiber", Size: "4.2' x 3.2'", Technique: "Handwoven from wild-harvested chaguar fiber and naturally dyed using pigments derived from native plants. Rich in texture and character, this piece reflects generations of textile knowledge from northern Argentina" },
  },
  {
    name: "Rug 001",
    inquiry: "Rug+001",
    slides: [
      { src: "/rug-1.jpg",  alt: "Rug 001", objectPosition: "left center" },
      { src: "/rug-1b.jpg", alt: "Rug 001 detail", objectPosition: "bottom center" },
      { src: "/rug-1c.jpg", alt: "Rug 001 detail 2", objectPosition: "bottom center" },
      { src: "/rug-1d.jpg", alt: "Rug 001 detail 3", objectPosition: "bottom center" },
    ],
    specs: { Material: "Naturally Dyed Baetón Wool", Size: "4' x 6'", Technique: "Handwoven in Santiago del Estero from sheep wool dyed with natural pigments derived from native plants, roots, and minerals. The graphic black-and-natural composition balances traditional craftsmanship with a contemporary aesthetic" },
  },
  {
    name: "Quilt 001",
    inquiry: "Quilt+001",
    slides: [
      { src: "/brushed-1.jpg",  alt: "Quilt 001", objectPosition: "bottom center" },
      { src: "/brushed-1b.jpg", alt: "Quilt 001 detail", objectPosition: "bottom center" },
      { src: "/brushed-1c.jpg", alt: "Quilt 001 detail 2", objectPosition: "bottom center" },
    ],
    specs: { Material: "Hand-Brushed Llama Fiber", Size: "9' x 9.5'", Technique: "A generously sized bed cover woven from undyed llama fiber. The bold black stripe is created using the natural shade of the animal's coat, without dyes. Designed as a warm, textural layer for the bed" },
  },
  {
    name: "Quilt 002",
    inquiry: "Quilt+002",
    slides: [
      { src: "/brushed-2.jpg",  alt: "Quilt 002", objectPosition: "bottom center" },
      { src: "/brushed-2b.jpg", alt: "Quilt 002 detail", objectPosition: "bottom center" },
      { src: "/brushed-2c.jpg", alt: "Quilt 002 detail 2", objectPosition: "bottom center" },
    ],
    specs: { Material: "Hand-Brushed Llama Fiber", Size: "9' x 9.5'", Technique: "Woven entirely from undyed llama fiber, this oversized bed cover celebrates the material in its purest form. Soft, warm, and naturally rich in texture, with color derived only from the llama's coat" },
  },
  {
    name: "Bag 001",
    inquiry: "Bag+001",
    slides: [
      { src: "/bag-1.jpg",  alt: "Bag 001" },
      { src: "/bag-1b.jpg", alt: "Bag 001 detail" },
      { src: "/bag-1c.jpg", alt: "Bag 001 detail 2" },
      { src: "/bag-1d.jpg", alt: "Bag 001 detail 3", objectPosition: "bottom center" },
      { src: "/bag-1e.jpg", alt: "Bag 001 detail 4" },
      { src: "/bag-1f.jpg", alt: "Bag 001 detail 5" },
    ],
    specs: { Material: "Wild-Harvested Chaguar Fiber with Natural Plant-Based Dyes", Size: '~19" Height', Technique: "A handwoven chaguar bag dyed with natural pigments and designed for everyday use. Lightweight yet durable, with a distinctly organic texture" },
  },
  {
    name: "Bag 002",
    inquiry: "Bag+002",
    slides: [
      { src: "/bag-2.jpg",  alt: "Bag 002" },
      { src: "/bag-2b.jpg", alt: "Bag 002 detail" },
    ],
    specs: { Material: "Wild-Harvested Chaguar Fiber and Handcrafted Alpaca Silver", Size: '11" x 7.5"', Technique: "Handwoven from natural chaguar fiber and finished with a handcrafted alpaca silver plate. A refined meeting of textile and metal traditions from northern Argentina" },
  },
];

export default function FiberTextile() {
  return (
    <div className="pg" style={{ background: 'var(--moss)', padding: 72, display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* Header */}
      <div className="hdr" style={{ background: 'var(--linen)', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '36px 52px', alignItems: 'center' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1.1, color: 'var(--ink)' }}>
          <span style={{ fontSize: 33, display: 'block' }}>estudio</span>
          <span style={{ fontSize: 33, display: 'block' }}>malva<span style={{ color: 'var(--clay)' }}>.</span></span>
        </Link>
        <Link href="/products" className="hdr-back" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.7 }}>
          ← All Products
        </Link>
      </div>

      {/* Hero */}
      <div className="two-col hero-h" style={{ background: 'var(--linen)', padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, height: '55vh' }}>
        <div style={{ background: 'var(--sand)', overflow: 'hidden' }}>
          <img src="/fiber-hero.jpg" alt="Textiles — Estudio Malva" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom center', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '36px 28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)' }}>
              Textiles · Initial Edition
            </span>
            <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)' }}>
              Made<br /><em style={{ fontStyle: 'italic', color: 'var(--slate)' }}>slowly</em>
            </h1>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--slate)' }}>
              Llama weaving, brushed llama, and hand-knotted rugs. Each piece made by hand in the north of Argentina, carrying the knowledge of generations.
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
          Textiles · Initial Edition
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--slate)', opacity: 0.5 }}>
          8 pieces
        </span>
      </div>

      {/* Product cards */}
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
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
                  href={`/contact?category=fiber&product=${p.inquiry}`}
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
