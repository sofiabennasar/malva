'use client';

import { useState } from 'react';

const techniques = [
  {
    title: 'Llama Weaving',
    description: 'Fiber hand-spun from llama fleece and woven on manual tension looms. The natural color palette — ivory, grey, and deep brown — comes entirely from the animal\'s coat, with no synthetic dyes.',
  },
  {
    title: 'Chaguar Knotting',
    description: 'Wild chaguar plants are hand-harvested, stripped, and their fibers knotted into durable, textured forms. One of the oldest fiber traditions in northern Argentina, practiced by Wichí communities.',
  },
  {
    title: 'Natural Dyeing',
    description: 'Pigments extracted from native roots, bark, minerals, and plants are used to color wool and fiber. Each dye batch is unique — the result of season, water, and the hand of the maker.',
  },
  {
    title: 'Hand Brushing',
    description: 'After weaving, llama textiles are hand-brushed to raise the fiber pile, creating a dense, soft surface without mechanical processing. The technique amplifies warmth and tactile depth.',
  },
  {
    title: 'Carandillo Plaiting',
    description: 'Wide strips of carandillo palm leaf are interlocked using a flat plaiting technique. The satin-like surface and tight compression give these baskets their geometric precision and structural rigidity.',
  },
  {
    title: 'Algarrobo Carving',
    description: 'Native algarrobo wood — dense, slow-growing, and deeply grained — is hand-planed and shaped into structural objects. No veneer, no filler. The form reveals the material as it is.',
  },
];

const CARD_W = 200;
const CARD_H = 300;

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
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                  padding: '24px 20px',
                }}>
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

                {/* Back */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  background: 'var(--ink)',
                  display: 'flex', flexDirection: 'column',
                  overflow: 'hidden',
                }}>
                  <div style={{ flex: 1, background: 'var(--sand)', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.4 }}>
                        Image
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '16px 18px' }}>
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
