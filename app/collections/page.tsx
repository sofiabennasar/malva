'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

const imgFill: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

interface Product {
  id: string;
  name: string;
  material: string;
  size: string;
  description: string;
  madeBy: string;
  madeIn: string;
  care: string;
  image: string;
}

const products: Product[] = [
  { id: 'c-1-1', name: 'BASKET 001', material: 'Carandillo Palm Fiber', size: '17" x 13" x 13"', description: 'A structured basket woven from wild-harvested carandillo palm fiber using a flat interlocking technique. The dense weave forms a sculptural silhouette, while a contrasting geometric band emphasizes the natural variation and texture of the material.', madeBy: 'Sofia', madeIn: 'Misiones, Argentina', care: 'Use a soft, dry cloth to remove dust from the weave. Do not submerge or soak natural-fiber baskets in water.\n\nKeep away from direct sunlight, which may fade natural tones and weaken the fibers over time. Avoid humid or damp environments, including bathrooms and basements, to prevent mold and mildew.\n\nStore in a well-ventilated space at a stable temperature. To preserve the shape, avoid placing heavy objects on top.', image: '/c-1-1.jpg' },
  { id: 'c-1-2', name: 'TEXTILE 001', material: 'Recycled Plastic', size: '48" x 72"', description: 'Contemporary textile woven from sustainably sourced recycled materials', madeBy: 'Weaving Studio', madeIn: 'Argentina', care: 'Gentle hand wash. Air dry completely.', image: '/c-1-2.jpg' },
  { id: 'c-1-3', name: 'VESSEL 001', material: 'Clay', size: '12" H x 10" W', description: 'Hand-thrown ceramic vessel with natural glazing', madeBy: 'Ceramics Workshop', madeIn: 'Argentina', care: 'Wash by hand. Not dishwasher safe.', image: '/c-1-3.jpg' },
  { id: 'c-2-1', name: 'BASKET 002', material: 'Palm Fiber', size: '15" x 11" x 11"', description: 'Woven palm fiber basket', madeBy: 'Artisan Collective', madeIn: 'Argentina', care: 'Keep dry and dust regularly.', image: '/c-2-1.jpg' },
  { id: 'c-2-2', name: 'TEXTILE 002', material: 'Recycled Plastic', size: '36" x 60"', description: 'Woven recycled textile', madeBy: 'Weaving Studio', madeIn: 'Argentina', care: 'Hand wash gently.', image: '/c-2-2.jpg' },
  { id: 'c-2-3', name: 'VESSEL 002', material: 'Ceramic', size: '10" H x 8" W', description: 'Ceramic vessel with natural finish', madeBy: 'Ceramics Workshop', madeIn: 'Argentina', care: 'Hand wash only.', image: '/c-2-3.jpg' },
  { id: 'c-3-1', name: 'WOVEN PANEL 001', material: 'Natural Fibers', size: '60" x 48"', description: 'Large woven panel with mixed natural fibers', madeBy: 'Weaving Studio', madeIn: 'Argentina', care: 'Dust with soft brush.', image: '/c-3-1.jpg' },
  { id: 'c-3-2', name: 'WOVEN PANEL 002', material: 'Natural Fibers', size: '60" x 48"', description: 'Large woven panel with natural dyes', madeBy: 'Weaving Studio', madeIn: 'Argentina', care: 'Protect from direct sunlight.', image: '/c-3-2.jpg' },
  { id: 'c-4-1', name: 'BASKET 003', material: 'Palm Fiber', size: '16" x 12" x 12"', description: 'Palm fiber storage basket', madeBy: 'Artisan Collective', madeIn: 'Argentina', care: 'Keep in dry environment.', image: '/c-4-1.jpg' },
  { id: 'c-4-2', name: 'TEXTILE 003', material: 'Recycled Plastic', size: '40" x 64"', description: 'Modern recycled plastic textile', madeBy: 'Weaving Studio', madeIn: 'Argentina', care: 'Gentle hand washing recommended.', image: '/c-4-2.jpg' },
  { id: 'c-4-3', name: 'VESSEL 003', material: 'Clay', size: '11" H x 9" W', description: 'Hand-thrown clay vessel', madeBy: 'Ceramics Workshop', madeIn: 'Argentina', care: 'Hand wash only.', image: '/c-4-3.jpg' },
  { id: 'c-5-1', name: 'LARGE BASKET 001', material: 'Palm Fiber', size: '20" x 16" x 16"', description: 'Large woven palm basket', madeBy: 'Artisan Collective', madeIn: 'Argentina', care: 'Dust regularly.', image: '/c-5-1.jpg' },
  { id: 'c-5-2', name: 'TEXTILE 004', material: 'Recycled Plastic', size: '44" x 68"', description: 'Woven recycled textile', madeBy: 'Weaving Studio', madeIn: 'Argentina', care: 'Hand wash gently.', image: '/c-5-2.jpg' },
  { id: 'c-5-3', name: 'TEXTILE 005', material: 'Recycled Plastic', size: '44" x 68"', description: 'Modern woven textile', madeBy: 'Weaving Studio', madeIn: 'Argentina', care: 'Protect from moisture.', image: '/c-5-3.jpg' },
  { id: 'c-6-1', name: 'VESSEL 004', material: 'Ceramic', size: '10" H x 8" W', description: 'Ceramic vessel with glaze', madeBy: 'Ceramics Workshop', madeIn: 'Argentina', care: 'Hand wash only.', image: '/c-6-1.jpg' },
  { id: 'c-6-2', name: 'VESSEL 005', material: 'Ceramic', size: '10" H x 8" W', description: 'Hand-thrown ceramic piece', madeBy: 'Ceramics Workshop', madeIn: 'Argentina', care: 'Hand wash carefully.', image: '/c-6-2.jpg' },
  { id: 'c-6-3', name: 'VESSEL 006', material: 'Clay', size: '10" H x 8" W', description: 'Ceramic vessel with natural finish', madeBy: 'Ceramics Workshop', madeIn: 'Argentina', care: 'Hand wash only.', image: '/c-6-3.jpg' },
  { id: 'c-7-1', name: 'BASKET 004', material: 'Palm Fiber', size: '14" x 10" x 10"', description: 'Compact palm fiber basket', madeBy: 'Artisan Collective', madeIn: 'Argentina', care: 'Keep dry.', image: '/c-7-1.jpg' },
  { id: 'c-7-2', name: 'BASKET 005', material: 'Palm Fiber', size: '14" x 10" x 10"', description: 'Woven palm basket', madeBy: 'Artisan Collective', madeIn: 'Argentina', care: 'Dust regularly.', image: '/c-7-2.jpg' },
  { id: 'c-7-3', name: 'LARGE PANEL 001', material: 'Natural Fibers', size: '64" x 48"', description: 'Large decorative woven panel', madeBy: 'Weaving Studio', madeIn: 'Argentina', care: 'Protect from sun exposure.', image: '/c-7-3.jpg' },
  { id: 'c-8-1', name: 'TEXTILE 006', material: 'Recycled Plastic', size: '36" x 54"', description: 'Medium woven textile', madeBy: 'Weaving Studio', madeIn: 'Argentina', care: 'Hand wash gently.', image: '/c-8-1.jpg' },
  { id: 'c-8-2', name: 'TEXTILE 007', material: 'Recycled Plastic', size: '36" x 54"', description: 'Woven recycled material', madeBy: 'Weaving Studio', madeIn: 'Argentina', care: 'Air dry thoroughly.', image: '/c-8-2.jpg' },
  { id: 'c-9-1', name: 'VESSEL 007', material: 'Ceramic', size: '9" H x 7" W', description: 'Ceramic vessel', madeBy: 'Ceramics Workshop', madeIn: 'Argentina', care: 'Hand wash only.', image: '/c-9-1.jpg' },
  { id: 'c-9-2', name: 'VESSEL 008', material: 'Clay', size: '9" H x 7" W', description: 'Hand-thrown clay piece', madeBy: 'Ceramics Workshop', madeIn: 'Argentina', care: 'Hand wash carefully.', image: '/c-9-2.jpg' },
  { id: 'c-9-3', name: 'VESSEL 009', material: 'Ceramic', size: '9" H x 7" W', description: 'Ceramic vessel with finish', madeBy: 'Ceramics Workshop', madeIn: 'Argentina', care: 'Hand wash only.', image: '/c-9-3.jpg' },
  { id: 'c-10-1', name: 'BASKET 006', material: 'Palm Fiber', size: '13" x 9" x 9"', description: 'Small palm fiber basket', madeBy: 'Artisan Collective', madeIn: 'Argentina', care: 'Keep in dry space.', image: '/c-10-1.jpg' },
  { id: 'c-10-2', name: 'LARGE TEXTILE 001', material: 'Recycled Plastic', size: '72" x 48"', description: 'Extra large woven textile', madeBy: 'Weaving Studio', madeIn: 'Argentina', care: 'Hand wash gently and air dry.', image: '/c-10-2.jpg' },
];

export default function Collections2() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    if (selectedProduct) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedProduct]);
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* ── Header ──────────────────────────────────────── */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '8px 60px 16px 60px', background: '#ffffff', zIndex: 1000 }}>
        <div style={{ width: 508, fontFamily: 'var(--font-fraunces)', fontSize: 40, fontWeight: 300, color: 'var(--ink)', letterSpacing: '0.02em', whiteSpace: 'nowrap', lineHeight: 1, display: 'flex', alignItems: 'flex-end' }}>
          estudio malva<span style={{ color: 'var(--clay)', fontSize: '1.3em' }}>.</span>
        </div>
        <nav style={{ display: 'flex', gap: 50, alignItems: 'flex-end' }}>
          <Link href="#collections" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'collections' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('collections')} onMouseLeave={() => setHoveredNav(null)}>
            Collections
          </Link>
          <Link href="#journal" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'journal' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('journal')} onMouseLeave={() => setHoveredNav(null)}>
            The Journal
          </Link>
          <Link href="#care" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'care' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('care')} onMouseLeave={() => setHoveredNav(null)}>
            Care & Maintenance
          </Link>
          <Link href="/contact" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'contact' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('contact')} onMouseLeave={() => setHoveredNav(null)}>
            Contact
          </Link>
        </nav>
      </header>

      {/* ── Intro Section ──────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '60px 60px', marginTop: 50 }}>
        <div style={{ marginLeft: '33.33%', maxWidth: '66.67%' }}>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 40, fontWeight: 300, color: 'var(--ink)', lineHeight: 1.2, margin: '0 0 20px 0', letterSpacing: '0.02em' }}>
            INITIAL EDITION
          </h1>
          <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
            A collection of one-of-a-kind samples developed to explore the materials, techniques, and creative possibilities of the artisans we work with. Together, these pieces mark the beginning of the collections to come.
          </p>
        </div>
      </section>

      {/* ── Collections Grid ──────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '60px 60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Row 1 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[0])}>
              <img src="/c-1-1.jpg" alt="Collection 1-1" style={imgFill} />
            </div>
            <div style={{ width: 20 }} />
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[1])}>
              <img src="/c-1-2.jpg" alt="Collection 1-2" style={imgFill} />
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ width: 485, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[2])}>
              <img src="/c-1-3.jpg" alt="Collection 1-3" style={imgFill} />
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[3])}>
              <img src="/c-2-1.jpg" alt="Collection 2-1" style={imgFill} />
            </div>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[4])}>
              <img src="/c-2-2.jpg" alt="Collection 2-2" style={imgFill} />
            </div>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[5])}>
              <img src="/c-2-3.jpg" alt="Collection 2-3" style={imgFill} />
            </div>
          </div>

          {/* Row 3 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 595, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[6])}>
              <img src="/c-3-1.jpg" alt="Collection 3-1" style={imgFill} />
            </div>
            <div style={{ width: 595, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[7])}>
              <img src="/c-3-2.jpg" alt="Collection 3-2" style={imgFill} />
            </div>
          </div>

          {/* Row 4 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[8])}>
              <img src="/c-4-1.jpg" alt="Collection 4-1" style={imgFill} />
            </div>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[9])}>
              <img src="/c-4-2.jpg" alt="Collection 4-2" style={imgFill} />
            </div>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[10])}>
              <img src="/c-4-3.jpg" alt="Collection 4-3" style={imgFill} />
            </div>
          </div>

          {/* Row 5 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 501, height: 612, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[11])}>
              <img src="/c-5-1.jpg" alt="Collection 5-1" style={imgFill} />
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ width: 328, height: 612, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[12])}>
              <img src="/c-5-2.jpg" alt="Collection 5-2" style={imgFill} />
            </div>
            <div style={{ width: 37 }} />
            <div style={{ width: 328, height: 612, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[13])}>
              <img src="/c-5-3.jpg" alt="Collection 5-3" style={imgFill} />
            </div>
          </div>

          {/* Row 6 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 328, height: 498, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[14])}>
              <img src="/c-6-1.jpg" alt="Collection 6-1" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 498, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[15])}>
              <img src="/c-6-2.jpg" alt="Collection 6-2" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 498, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[16])}>
              <img src="/c-6-3.jpg" alt="Collection 6-3" style={imgFill} />
            </div>
          </div>

          {/* Row 7 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[17])}>
              <img src="/c-7-1.jpg" alt="Collection 7-1" style={imgFill} />
            </div>
            <div style={{ width: 20 }} />
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[18])}>
              <img src="/c-7-2.jpg" alt="Collection 7-2" style={imgFill} />
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ width: 520, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[19])}>
              <img src="/c-7-3.jpg" alt="Collection 7-3" style={imgFill} />
            </div>
          </div>

          {/* Row 8 */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 298, height: 447, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[20])}>
              <img src="/c-8-1.jpg" alt="Collection 8-1" style={imgFill} />
            </div>
            <div style={{ width: 20 }} />
            <div style={{ width: 298, height: 447, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[21])}>
              <img src="/c-8-2.jpg" alt="Collection 8-2" style={imgFill} />
            </div>
          </div>

          {/* Row 9 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[22])}>
              <img src="/c-9-1.jpg" alt="Collection 9-1" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[23])}>
              <img src="/c-9-2.jpg" alt="Collection 9-2" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[24])}>
              <img src="/c-9-3.jpg" alt="Collection 9-3" style={imgFill} />
            </div>
          </div>

          {/* Row 10 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 311, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[25])}>
              <img src="/c-10-1.jpg" alt="Collection 10-1" style={imgFill} />
            </div>
            <div style={{ width: 329 }} />
            <div style={{ width: 591, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[26])}>
              <img src="/c-10-2.jpg" alt="Collection 10-2" style={imgFill} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Modal ──────────────────────────────────────── */}
      {selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }} onClick={() => setSelectedProduct(null)}>
          <div style={{ background: '#ffffff', width: '90%', height: '90%', maxWidth: 1400, overflow: 'auto', position: 'relative', display: 'flex', flexDirection: 'column' }} onClick={(e) => e.stopPropagation()}>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                position: 'absolute',
                top: 30,
                right: 30,
                background: 'none',
                border: 'none',
                fontSize: 32,
                cursor: 'pointer',
                color: '#000',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2001,
              }}
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div style={{ display: 'flex', gap: 40, padding: '60px', height: '100%' }}>

              {/* Left Column - Product Info */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, justifyContent: 'space-between', minWidth: 0 }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                    PRODUCT
                  </h2>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 38, fontWeight: 400, color: 'var(--ink)', margin: '12px 0 0 0', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {selectedProduct.name}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 32 }}>
                    <div>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.02em' }}>Material</p>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: '8px 0 0 0', lineHeight: 1.6 }}>{selectedProduct.material}</p>
                    </div>

                    <div>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.02em' }}>Size</p>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: '8px 0 0 0', lineHeight: 1.6 }}>{selectedProduct.size}</p>
                    </div>

                    <div>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.02em' }}>Description</p>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: '8px 0 0 0', lineHeight: 1.6 }}>{selectedProduct.description}</p>
                    </div>

                    <div>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.02em' }}>Made by</p>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: '8px 0 0 0', lineHeight: 1.6 }}>{selectedProduct.madeBy}</p>
                    </div>

                    <div>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.02em' }}>Made In</p>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: '8px 0 0 0', lineHeight: 1.6 }}>{selectedProduct.madeIn}</p>
                    </div>
                  </div>
                </div>

                <button style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', background: 'transparent', border: '1px solid var(--ink)', padding: '12px 20px', cursor: 'pointer', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }} onClick={() => window.location.href = '/contact'}>
                  [INQUIRE]
                </button>
              </div>

              {/* Center Column - Image */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e8e8e8', minWidth: 0 }}>
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>

              {/* Right Column - Care Instructions */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  <h3 style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                    Care
                  </h3>
                  <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, fontWeight: 400, color: 'var(--ink)', margin: '20px 0 0 0', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
                    {selectedProduct.care}
                  </p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ── Footer ──────────────────────────────────────── */}
      <footer style={{ background: '#ffffff', padding: '150px 60px 30px 60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Three-Column Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginBottom: 20 }}>

            {/* Left Column - Contact */}
            <div>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
                <a href="mailto:sales@estudiomalva.com" style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)' }}>
                  sales@estudiomalva.com
                </a>
              </p>
            </div>

            {/* Middle Column - Made in Argentina */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, textAlign: 'center' }}>
                Made in Argentina
              </p>
            </div>

            {/* Right Column - Social */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="https://instagram.com/estudio.malva" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1.85 }}>
                @estudio.malva
              </a>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 12, textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', margin: 0, opacity: 0.7 }}>
              © 2026 estudio malva. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
