'use client';

import { useState } from 'react';

type Slide = { src: string; alt: string; objectPosition?: string };

export default function ProductCarousel({ slides, containerStyle }: { slides: Slide[]; containerStyle?: React.CSSProperties }) {
  const [current, setCurrent] = useState(0);

  const goTo = (i: number) => setCurrent((i + slides.length) % slides.length);

  return (
    <div className="card-photo-h" style={{ height: '75vh', minHeight: 600, overflow: 'hidden', background: 'var(--bone)', position: 'relative', ...containerStyle }}>
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: slide.objectPosition ?? 'center',
            display: 'block', opacity: current === i ? 1 : 0, transition: 'opacity 0.5s ease',
          }}
        />
      ))}

      {/* Arrows */}
      <button
        onClick={() => goTo(current - 1)}
        style={{ position: 'absolute', top: '50%', left: 16, transform: 'translateY(-50%)', zIndex: 2, background: 'transparent', border: '1px solid rgba(247,244,238,0.6)', color: 'var(--linen)', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 14 }}
      >←</button>
      <button
        onClick={() => goTo(current + 1)}
        style={{ position: 'absolute', top: '50%', right: 16, transform: 'translateY(-50%)', zIndex: 2, background: 'transparent', border: '1px solid rgba(247,244,238,0.6)', color: 'var(--linen)', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 14 }}
      >→</button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 2 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{ width: 6, height: 6, borderRadius: '50%', border: '1px solid var(--linen)', background: current === i ? 'var(--linen)' : 'transparent', cursor: 'pointer', padding: 0 }}
          />
        ))}
      </div>
    </div>
  );
}
