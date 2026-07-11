import Link from "next/link";

export const metadata = {
  title: "Products — Estudio Malva",
};

const products = [
  {
    num: "001",
    name: "Baskets",
    desc: "A collection of structural, hand-woven floor containers defined by rigid geometries and raw plant materiality. Each piece operates as a functional object, emphasizing volume, texture, and self-supporting form.",
    img: "/product-1.jpg",
    alt: "Baskets",
    href: "/products/baskets",
  },
  {
    num: "002",
    name: "Textiles",
    desc: "A collection of low-profile, structured textiles developed in northern Argentina. Each piece is defined by its raw materiality, manual tension-loom construction, and structural drape.",
    img: "/product-2.jpg",
    alt: "Lama Fabrics",
    imgPosition: "center bottom",
    href: "/products/textile",
  },
  {
    num: "003",
    name: "Ceramics",
    desc: "A collection of structural, hand-formed vessels defined by heavy mineral mass and raw clay materiality. Each piece operates as a functional object, emphasizing volume, unglazed texture, and self-supporting geometric form.",
    img: "/product-3.jpg",
    alt: "Ceramics",
    href: "/products/ceramics",
  },
  {
    num: "004",
    name: "Wood",
    desc: "A collection of high-mass, structural objects defined by linear geometry and raw timber materiality. Sourced from native, high-density wood species in Argentina, each piece is shaped by hand to emphasize grain direction, volumetric weight, and self-supporting form.",
    img: "/product-4.jpg",
    alt: "Wood",
    href: "/products/wood",
  },
];

export default function Portfolio() {
  return (
    <div className="pg" style={{ background: 'var(--moss)', padding: 72, display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* Header card */}
      <div className="hdr" style={{ background: 'var(--linen)', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '48px 52px', alignItems: 'center' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1.1, color: 'var(--ink)' }}>
          <span style={{ fontSize: 33, display: 'block' }}>estudio</span>
          <span style={{ fontSize: 33, display: 'block' }}>malva<span style={{ color: 'var(--clay)', fontSize: '1.4em', lineHeight: 1 }}>.</span></span>
        </Link>
        <div className="hdr-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 }}>
          <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)', textAlign: 'right' }}>
            Initial <em style={{ fontStyle: 'italic', color: 'var(--slate)' }}>Editions</em>
          </h1>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--clay)', border: '1px solid var(--clay)', padding: '6px 14px' }}>
            Samples · In Development
          </span>
        </div>
      </div>

      {/* Product grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

        {/* Row 1 */}
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }}>
          {products.slice(0, 2).map((p) => (
            <ProductCard key={p.num} product={p} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }}>
          {products.slice(2, 4).map((p) => (
            <ProductCard key={p.num} product={p} />
          ))}
        </div>

      </div>

    </div>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div style={{ background: 'var(--linen)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '55vh', minHeight: 380, background: 'var(--sand)', position: 'relative', overflow: 'hidden' }}>
        <img
          src={product.img}
          alt={product.alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: product.imgPosition ?? 'center', display: 'block' }}
        />
      </div>
      <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', gap: 6, borderTop: '1px solid var(--bone)', flex: 1 }}>
        <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 22, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)' }}>
          {product.name}
        </h2>
        <p style={{ fontSize: 12, lineHeight: 1.7, color: 'var(--slate)', marginTop: 4, marginBottom: 16 }}>
          {product.desc}
        </p>
        <div style={{ marginTop: 'auto', paddingTop: 16 }}>
          <Link
            href={product.href}
            style={{ fontFamily: 'var(--font-archivo)', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '10px 22px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent', display: 'inline-block' }}
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
