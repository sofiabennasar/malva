'use client';

import { useState } from 'react';

type Slide = { src: string; alt: string; objectPosition?: string };

export default function GridCarousel({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);

  function goTo(i: number, e: React.MouseEvent) {
    e.preventDefault();
    setCurrent((i + slides.length) % slides.length);
  }

  return (
    <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: 'var(--bone)', position: 'relative' }}>
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: slide.objectPosition ?? 'center',
            display: 'block', opacity: current === i ? 1 : 0, transition: 'opacity 0.4s ease',
          }}
        />
      ))}

      {slides.length > 1 && (
        <>
          <button
            onClick={(e) => goTo(current - 1, e)}
            style={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', zIndex: 2, background: 'transparent', border: '1px solid rgba(247,244,238,0.55)', color: 'var(--linen)', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 11 }}
          >←</button>
          <button
            onClick={(e) => goTo(current + 1, e)}
            style={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', zIndex: 2, background: 'transparent', border: '1px solid rgba(247,244,238,0.55)', color: 'var(--linen)', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 11 }}
          >→</button>
          <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 5, zIndex: 2 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={(e) => goTo(i, e)}
                style={{ width: 5, height: 5, borderRadius: '50%', border: '1px solid var(--linen)', background: current === i ? 'var(--linen)' : 'transparent', cursor: 'pointer', padding: 0 }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
