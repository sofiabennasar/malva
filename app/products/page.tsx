import Link from "next/link";

export const metadata = {
  title: "Collection — Estudio Malva",
};

const products = [
  { num: "001", name: "Basket 001", img: "/basket-2.jpg", imgPosition: "bottom center", href: "/products/baskets" },
  { num: "002", name: "Basket 002", img: "/basket-3.jpg", imgPosition: "bottom center", href: "/products/baskets" },
  { num: "003", name: "Throw 001",  img: "/llama-1.jpg",  href: "/products/textile" },
  { num: "004", name: "Throw 002",  img: "/llama-2.jpg",  href: "/products/textile" },
  { num: "005", name: "Throw 003",  img: "/llama-3.jpg",  href: "/products/textile" },
  { num: "006", name: "Rug 001",    img: "/rug-1.jpg",    imgPosition: "left center", href: "/products/textile" },
  { num: "007", name: "Quilt 001",  img: "/brushed-1.jpg", imgPosition: "bottom center", href: "/products/textile" },
  { num: "008", name: "Quilt 002",  img: "/brushed-2.jpg", imgPosition: "bottom center", href: "/products/textile" },
  { num: "009", name: "Bag 001",    img: "/bag-1.jpg",    href: "/products/textile" },
  { num: "010", name: "Bag 002",    img: "/bag-2.jpg",    href: "/products/textile" },
  { num: "011", name: "Vase 001",   img: "/ceramics-1.jpg", href: "/products/ceramics" },
  { num: "012", name: "Vase 002",   img: "/ceramics-2.jpg", href: "/products/ceramics" },
  { num: "013", name: "Taza 001",   img: "/ceramics-3.jpg", href: "/products/ceramics" },
  { num: "014", name: "Stool 001",  img: "/wood-1.jpg",   href: "/products/wood" },
  { num: "015", name: "Knife 001",  img: "/wood-2.jpg",   href: "/products/wood" },
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
            <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: 'var(--bone)' }}>
              <img
                src={p.img}
                alt={p.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.imgPosition ?? 'center', display: 'block' }}
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
