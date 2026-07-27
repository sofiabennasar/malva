import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";
import ProductCarousel from "@/app/components/ProductCarousel";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: `${product.name} — Estudio Malva` };
}

const specRowStyle: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: '110px 1fr',
  padding: '16px 0', borderBottom: '1px solid var(--sand)', alignItems: 'baseline',
};

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="pg" style={{ background: 'var(--linen)', padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* Header */}
      <div className="hdr" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '36px 64px', alignItems: 'center', gap: 16 }}>
        <Link href="/" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 300, letterSpacing: '0.02em', color: 'var(--ink)', lineHeight: 0.6 }}>
          <span style={{ fontSize: 33, display: 'block' }}>estudio</span>
          <span style={{ fontSize: 33, display: 'block' }}>malva<span style={{ color: 'var(--clay)', fontSize: '1.4em', lineHeight: 1 }}>.</span></span>
        </Link>
        <Link
          href="/products"
          style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.7 }}
        >
          ← Collection
        </Link>
      </div>

      {/* Main: carousel left, details right */}
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '80vh', alignItems: 'center', gap: 16 }}>

        {/* Carousel — centered in left half */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', minHeight: 300 }}>
          <ProductCarousel
            slides={product.slides}
            isPortrait={product.portraitMode}
            containerStyle={product.portraitMode ? { width: '100%', maxWidth: '100%', flex: 'none' } : { height: '78vh', minHeight: 300, width: '100%', maxWidth: '100%', aspectRatio: '3/4', flex: 'none' }}
          />
        </div>

        {/* Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, padding: '8px 32px 8px 0', width: '100%', minHeight: 'auto' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: 10 }}>
            {product.num}
          </p>
          <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(28px, 2.8vw, 42px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 32 }}>
            {product.name}
          </h1>

          {/* Specs */}
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--sand)', marginBottom: 40 }}>
            <div style={specRowStyle}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.55 }}>Material</span>
              <span style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.6, color: 'var(--ink)' }}>{product.material}</span>
            </div>
            <div style={specRowStyle}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.55 }}>Size</span>
              <span style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.6, color: 'var(--ink)' }}>{product.size}</span>
            </div>
            <div style={{ ...specRowStyle, borderBottom: 'none', alignItems: 'start', paddingTop: 20 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.55, paddingTop: 2 }}>Technique</span>
              <span style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.8, color: 'var(--slate)' }}>{product.technique}</span>
            </div>
          </div>

          {/* Inquire */}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }} className="product-inquire-btn">
            <Link
              href={`/contact?category=${product.categorySlug}&product=${encodeURIComponent(product.name)}`}
              style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 32px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent', cursor: 'pointer', width: 'fit-content' }}
            >
              Inquire
            </Link>
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.4, marginTop: 40 }}>
            Argentina · 2026
          </p>
        </div>

      </div>

    </div>
  );
}
