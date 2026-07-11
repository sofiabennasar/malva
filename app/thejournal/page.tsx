import Link from "next/link";
import TechniqueCarousel from "@/app/components/TechniqueCarousel";

export const metadata = {
  title: "Our Story — Estudio Malva",
};

export default function TheJournal() {
  return (
    <div className="pg" style={{ background: 'var(--moss)', padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* ── Card 1: Text left, image right ───────────── */}
      <div className="two-col" style={{ background: 'var(--linen)', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '80vh' }}>
        <div className="journal-text-pad" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '52px 64px' }}>
          <Link href="/" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, letterSpacing: '0.02em', color: 'var(--ink)', lineHeight: 1.1 }}>
            <span style={{ fontSize: 33, display: 'block' }}>estudio</span>
            <span style={{ fontSize: 33, display: 'block' }}>malva<span style={{ color: 'var(--clay)' }}>.</span></span>
          </Link>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div style={{ width: 32, height: 1, background: 'var(--clay)', marginBottom: 4 }} />
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(22px, 2.4vw, 34px)', fontWeight: 300, lineHeight: 1.25, color: 'var(--ink)', marginBottom: 8 }}>
              We source handmade objects directly from artisan communities across Argentina.
            </p>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 14, lineHeight: 1.9, color: 'var(--slate)' }}>
              Founded by Mora and Sofia, two Argentinian creatives building a direct bridge between Buenos Aires and Los Angeles, we work closely with independent makers to uncover exceptional materials, traditional techniques, and timeless forms.
            </p>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 14, lineHeight: 1.9, color: 'var(--slate)' }}>
              The result is a curated collection of pieces that honor their origins while feeling at home in contemporary spaces.
            </p>
          </div>

        </div>

        <div className="journal-img" style={{ background: 'var(--sand)', position: 'relative', overflow: 'hidden' }}>
          <img src="/story-1.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      {/* ── Card 2: Tagline ──────────────────────────── */}
      <div className="journal-tagline" style={{ background: 'var(--ink)', padding: '24px 64px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 'clamp(8px, 1.25vw, 18px)', fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.1, margin: 0 }}>
          <span style={{ color: 'var(--linen)' }}>Made in </span><span style={{ color: 'var(--clay)' }}>Argentina</span>
        </p>
      </div>

      {/* ── Technique Carousel ───────────────────────── */}
      <TechniqueCarousel />

      {/* ── Card 3: Photo + CTA ──────────────────────── */}
      <div className="two-col" style={{ background: 'var(--linen)', display: 'grid', gridTemplateColumns: '2fr 1fr', minHeight: 360 }}>
        <div style={{ background: 'var(--bone)', position: 'relative', overflow: 'hidden' }}>
          <img src="/story-2.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div className="journal-cta-pad" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '48px 48px', gap: 16 }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--slate)', marginBottom: 8 }}>
            Explore
          </p>
          <Link
            href="/products"
            style={{ display: 'inline-block', fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 32px', border: '1px solid var(--ink)', color: 'var(--ink)', background: 'transparent' }}
          >
            See Products
          </Link>
        </div>
      </div>

    </div>
  );
}
