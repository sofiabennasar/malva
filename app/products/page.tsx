import Link from "next/link";

export const metadata = {
  title: "Collection — Estudio Malva",
};

const categories = [
  {
    label: "Baskets",
    href: "/products/baskets",
    products: [
      { num: "001", name: "Basket 001", img: "/basket-2.jpg", imgPosition: "bottom center" },
      { num: "002", name: "Basket 002", img: "/basket-3.jpg", imgPosition: "bottom center" },
    ],
  },
  {
    label: "Textiles",
    href: "/products/textile",
    products: [
      { num: "001", name: "Throw 001",  img: "/llama-1.jpg" },
      { num: "002", name: "Throw 002",  img: "/llama-2.jpg" },
      { num: "003", name: "Throw 003",  img: "/llama-3.jpg" },
      { num: "004", name: "Rug 001",    img: "/rug-1.jpg",     imgPosition: "left center" },
      { num: "005", name: "Quilt 001",  img: "/brushed-1.jpg", imgPosition: "bottom center" },
      { num: "006", name: "Quilt 002",  img: "/brushed-2.jpg", imgPosition: "bottom center" },
      { num: "007", name: "Bag 001",    img: "/bag-1.jpg" },
      { num: "008", name: "Bag 002",    img: "/bag-2.jpg" },
    ],
  },
  {
    label: "Ceramics",
    href: "/products/ceramics",
    products: [
      { num: "001", name: "Vase 001",  img: "/ceramics-1.jpg" },
      { num: "002", name: "Vase 002",  img: "/ceramics-2.jpg" },
      { num: "003", name: "Taza 001",  img: "/ceramics-3.jpg" },
    ],
  },
  {
    label: "Wood",
    href: "/products/wood",
    products: [
      { num: "001", name: "Stool 001", img: "/wood-1.jpg" },
      { num: "002", name: "Knife 001", img: "/wood-2.jpg" },
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

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat.label} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Category label row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 4px', borderBottom: '1px solid var(--sand)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--slate)' }}>
              {cat.label}
            </span>
            <Link
              href={cat.href}
              style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--clay)', opacity: 0.8 }}
            >
              View all →
            </Link>
          </div>

          {/* Product grid */}
          <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {cat.products.map((p) => (
              <Link
                key={p.name}
                href={cat.href}
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
      ))}

    </div>
  );
}
