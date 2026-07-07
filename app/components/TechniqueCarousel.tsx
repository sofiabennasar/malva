'use client';

import { useState } from 'react';

const techniques = [
  {
    title: 'Chaguar',
    description: 'Extracted from the resilient leaves of wild forest bromeliads, this ancient textile fiber is hand-stripped, sun-dehydrated, and manually spun into high-tensile cords by a specialized artisan workshop in the Chaco Salteño. The raw thread is either left in its unadulterated state or naturally saturated with regional botanical pigments before being hand-knotted into a lightweight, structural mesh that balances immense durability with organic elasticity.',
    map: '/map-01.jpg',
  },
  {
    title: 'Hand-Brushed Llama',
    description: 'Woven on manual tension looms by artisan workshops in Tucumán and Jujuy, this textile utilizes unadulterated, hand-spun llama fiber sorted into monochromatic lots to preserve its natural lanolin and irregular tonal variations. Once off the loom, a rigorous hand-brushing process applies controlled friction to raise the undercoat fibers, creating a high-pile surface that maximizes thermal efficiency and alters tactile density without structural degradation.',
    map: '/map-02.jpg',
  },
  {
    title: 'Naturally Undyed Llama Fiber',
    description: 'Woven on traditional manual looms by an artisan workshop in Salta, this textile utilizes raw, hand-spun llama fiber selected strictly by its natural color gradations to completely bypass synthetic dyes. The resulting weave maintains a dense, low-profile structure that highlights the intrinsic tensile strength and subtle, non-uniform texture of the unadulterated mountain fiber.',
    map: '/map-03.jpg',
  },
  {
    title: 'Fiber Weaving',
    description: 'Constructed from native palm fibers by an artisan in Misiones, these structural vessels are hand-woven utilizing high-tension interlacing techniques. The manual assembly process manipulates the raw, unadulterated plant fibers into a rigid geometric matrix, resulting in a durable, three-dimensional form defined by its natural structural friction.',
    map: '/map-04.jpg',
  },
  {
    title: 'Naturally Dyed Baetón Wool',
    description: 'This heavy-weight wool textile owes its exceptional durability to a manual high-compression weave executed on traditional looms by artisans in Santiago del Estero. Before entering the loom, the hand-spun yarn undergoes an organic saturation process, utilizing regional plant roots and crushed minerals that bond directly with the raw wool fibers to produce a deeply saturated, non-uniform chromatic profile.',
    map: '/map-05.jpg',
  },
  {
    title: 'Alpaca',
    description: 'This durable, non-ferrous alloy is manipulated through manual cold-working and precision striking to achieve its structural form and distinctive silvery luster. Without the use of casting machinery, specialized metalwork studios manually cut, texture, and high-polish the copper-nickel-zinc matrix, resulting in objects defined by a refined, architectural rigidity and subtle surface variations.',
    map: '/map-06.jpg',
  },
  {
    title: 'Natural Dyes',
    description: 'Bypassing all synthetic colorants, our collections utilize raw pigments extracted directly from local barks, roots, native seeds, and crushed minerals gathered across regional ecosystems. Through variable thermal baths and natural oxidation, these organic materials permanently bond with raw textile fibers, yielding a deeply saturated, living chromatic profile defined by its subtle, non-uniform tonal shifts.',
    map: '/map-07.jpg',
  },
];

const CARD_W = 400;
const CARD_H = 600;

export default function TechniqueCarousel() {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const count = techniques.length;

  function go(dir: 1 | -1) {
    setFlipped(false);
    setActive((prev) => (prev + dir + count) % count);
  }

  function handleCardClick(idx: number) {
    if (idx === active) {
      setFlipped((f) => !f);
    } else {
      setFlipped(false);
      setActive(idx);
    }
  }

  // Visible window: show active ±2 (5 cards), with wrapping
  const visible = [-2, -1, 0, 1, 2].map((offset) => ({
    offset,
    idx: (active + offset + count) % count,
  }));

  return (
    <div style={{ background: 'var(--moss)', padding: '64px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 48 }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--linen)', opacity: 0.5 }}>
        Techniques · Initial Edition
      </p>

      <div style={{ position: 'relative', width: '100%', height: CARD_H + 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Cards */}
        {visible.map(({ offset, idx }) => {
          const isCenter = offset === 0;
          const abs = Math.abs(offset);
          const scale = isCenter ? 1 : abs === 1 ? 0.78 : 0.58;
          const translateX = offset * (CARD_W * 0.72 + 24);
          const opacity = abs === 2 ? 0.45 : abs === 1 ? 0.75 : 1;
          const zIndex = 10 - abs;
          const t = techniques[idx];

          return (
            <div
              key={`${idx}-${offset}`}
              onClick={() => handleCardClick(idx)}
              style={{
                position: 'absolute',
                width: CARD_W,
                height: CARD_H,
                transform: `translateX(${translateX}px) scale(${scale})`,
                transition: 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.45s ease',
                opacity,
                zIndex,
                cursor: 'pointer',
                perspective: 1000,
              }}
            >
              {/* Inner flip container */}
              <div style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)',
                transform: isCenter && flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}>

                {/* Front */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backfaceVisibility: 'hidden',
                  background: 'var(--linen)',
                  display: 'flex', flexDirection: 'column',
                  overflow: 'hidden',
                }}>
                  <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                    <img src={t.map} alt={t.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                  </div>
                  <div style={{ padding: '24px 20px' }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: 10 }}>
                      {String(idx + 1).padStart(2, '0')}
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 18, fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)' }}>
                      {t.title}
                    </h3>
                    {isCenter && (
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.5, marginTop: 16 }}>
                        tap to learn more
                      </p>
                    )}
                  </div>
                </div>

                {/* Back */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  background: 'var(--ink)',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px 20px',
                  overflow: 'hidden',
                }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: 10 }}>
                      {String(idx + 1).padStart(2, '0')}
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 18, fontWeight: 300, lineHeight: 1.2, color: 'var(--linen)', marginBottom: 14 }}>
                      {t.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 11, lineHeight: 1.7, color: 'var(--linen)', opacity: 0.8 }}>
                      {t.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <div style={{ display: 'flex', gap: 16 }}>
        <button
          onClick={() => go(-1)}
          style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(247,244,238,0.3)', background: 'transparent', color: 'var(--linen)', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          ←
        </button>
        <button
          onClick={() => go(1)}
          style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(247,244,238,0.3)', background: 'transparent', color: 'var(--linen)', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: 8 }}>
        {techniques.map((_, i) => (
          <div
            key={i}
            onClick={() => { setFlipped(false); setActive(i); }}
            style={{ width: i === active ? 20 : 6, height: 6, borderRadius: 3, background: 'var(--linen)', opacity: i === active ? 0.9 : 0.25, cursor: 'pointer', transition: 'all 0.3s ease' }}
          />
        ))}
      </div>

    </div>
  );
}
