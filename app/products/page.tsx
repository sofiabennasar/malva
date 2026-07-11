import Link from "next/link";
import GridCarousel from "@/app/components/GridCarousel";

export const metadata = {
  title: "Collection — Estudio Malva",
};

const products = [
  {
    num: "001", name: "Basket 001", href: "/products/baskets",
    slides: [
      { src: "/basket-2.jpg", alt: "Basket 001", objectPosition: "bottom center" },
      { src: "/basket-4.jpg", alt: "Basket 001 detail", objectPosition: "bottom center" },
    ],
  },
  {
    num: "002", name: "Basket 002", href: "/products/baskets",
    slides: [
      { src: "/basket-3.jpg", alt: "Basket 002", objectPosition: "bottom center" },
      { src: "/basket-5.jpg", alt: "Basket 002 detail", objectPosition: "bottom center" },
    ],
  },
  {
    num: "003", name: "Throw 001", href: "/products/textile",
    slides: [
      { src: "/llama-1.jpg",  alt: "Throw 001" },
      { src: "/llama-1b.jpg", alt: "Throw 001 detail" },
    ],
  },
  {
    num: "004", name: "Throw 002", href: "/products/textile",
    slides: [
      { src: "/llama-2.jpg",  alt: "Throw 002" },
      { src: "/llama-2b.jpg", alt: "Throw 002 detail" },
    ],
  },
  {
    num: "005", name: "Throw 003", href: "/products/textile",
    slides: [
      { src: "/llama-3.jpg",  alt: "Throw 003" },
      { src: "/llama-3b.jpg", alt: "Throw 003 detail" },
      { src: "/llama-3c.jpg", alt: "Throw 003 detail 2" },
    ],
  },
  {
    num: "006", name: "Rug 001", href: "/products/textile",
    slides: [
      { src: "/rug-1.jpg",  alt: "Rug 001", objectPosition: "left center" },
      { src: "/rug-1b.jpg", alt: "Rug 001 detail", objectPosition: "bottom center" },
      { src: "/rug-1c.jpg", alt: "Rug 001 detail 2", objectPosition: "bottom center" },
      { src: "/rug-1d.jpg", alt: "Rug 001 detail 3", objectPosition: "bottom center" },
    ],
  },
  {
    num: "007", name: "Quilt 001", href: "/products/textile",
    slides: [
      { src: "/brushed-1.jpg",  alt: "Quilt 001", objectPosition: "bottom center" },
      { src: "/brushed-1b.jpg", alt: "Quilt 001 detail", objectPosition: "bottom center" },
      { src: "/brushed-1c.jpg", alt: "Quilt 001 detail 2", objectPosition: "bottom center" },
    ],
  },
  {
    num: "008", name: "Quilt 002", href: "/products/textile",
    slides: [
      { src: "/brushed-2.jpg",  alt: "Quilt 002", objectPosition: "bottom center" },
      { src: "/brushed-2b.jpg", alt: "Quilt 002 detail", objectPosition: "bottom center" },
      { src: "/brushed-2c.jpg", alt: "Quilt 002 detail 2", objectPosition: "bottom center" },
    ],
  },
  {
    num: "009", name: "Bag 001", href: "/products/textile",
    slides: [
      { src: "/bag-1.jpg",  alt: "Bag 001" },
      { src: "/bag-1b.jpg", alt: "Bag 001 detail" },
      { src: "/bag-1c.jpg", alt: "Bag 001 detail 2" },
      { src: "/bag-1d.jpg", alt: "Bag 001 detail 3", objectPosition: "bottom center" },
      { src: "/bag-1e.jpg", alt: "Bag 001 detail 4" },
      { src: "/bag-1f.jpg", alt: "Bag 001 detail 5" },
    ],
  },
  {
    num: "010", name: "Bag 002", href: "/products/textile",
    slides: [
      { src: "/bag-2.jpg",  alt: "Bag 002" },
      { src: "/bag-2b.jpg", alt: "Bag 002 detail" },
    ],
  },
  {
    num: "011", name: "Vase 001", href: "/products/ceramics",
    slides: [
      { src: "/ceramics-1.jpg",  alt: "Vase 001" },
      { src: "/ceramics-1b.jpg", alt: "Vase 001 detail" },
      { src: "/ceramics-1c.jpg", alt: "Vase 001 detail 2" },
    ],
  },
  {
    num: "012", name: "Vase 002", href: "/products/ceramics",
    slides: [
      { src: "/ceramics-2.jpg",  alt: "Vase 002" },
      { src: "/ceramics-2b.jpg", alt: "Vase 002 detail" },
      { src: "/ceramics-2c.jpg", alt: "Vase 002 detail 2" },
    ],
  },
  {
    num: "013", name: "Taza 001", href: "/products/ceramics",
    slides: [
      { src: "/ceramics-3.jpg",  alt: "Taza 001" },
      { src: "/ceramics-3b.jpg", alt: "Taza 001 detail" },
      { src: "/ceramics-3c.jpg", alt: "Taza 001 detail 2" },
      { src: "/ceramics-3d.jpg", alt: "Taza 001 detail 3" },
    ],
  },
  {
    num: "014", name: "Stool 001", href: "/products/wood",
    slides: [
      { src: "/wood-1.jpg",  alt: "Stool 001" },
      { src: "/wood-1b.jpg", alt: "Stool 001 detail" },
      { src: "/wood-1c.jpg", alt: "Stool 001 detail 2" },
    ],
  },
  {
    num: "015", name: "Knife 001", href: "/products/wood",
    slides: [
      { src: "/wood-2.jpg",  alt: "Knife 001" },
      { src: "/wood-2b.jpg", alt: "Knife 001 detail" },
      { src: "/wood-2c.jpg", alt: "Knife 001 detail 2" },
    ],
  },
];

export default function Products() {
  return (
    <div className="pg" style={{ background: 'var(--linen)', padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* Header */}
      <div style={{ background: 'var(--linen)', border: '1px solid var(--sand)', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '52px 64px', alignItems: 'center' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 300, letterSpacing: '0.02em', color: 'var(--ink)', lineHeight: 0.6 }}>
          <span style={{ fontSize: 33, display: 'block' }}>estudio</span>
          <span style={{ fontSize: 33, display: 'block' }}>malva<span style={{ color: 'var(--clay)', fontSize: '1.4em', lineHeight: 1 }}>.</span></span>
        </Link>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
          <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(24px, 2.8vw, 40px)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)', textAlign: 'right' }}>
            Initial <em style={{ fontStyle: 'italic', color: 'var(--slate)' }}>Editions</em>
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
            href={p.href}
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', border: '1px solid var(--sand)', background: 'var(--linen)' }}
          >
            <GridCarousel slides={p.slides} />
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
