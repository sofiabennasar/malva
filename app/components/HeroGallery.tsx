'use client';

import { useEffect, useState } from 'react';

const INTERVAL = 4500;

export default function HeroGallery() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % 2), INTERVAL);
    return () => clearInterval(id);
  }, []);

  // Rotating a landscape image -90deg to appear portrait.
  // Before rotation: element is width=66vh × height=70vw
  // After -90deg: visually appears as 70vw wide × 66vh tall — covers the container.
  const rotatedSlide = (i: number): React.CSSProperties => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '66vh',
    height: '70vw',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    opacity: active === i ? 1 : 0,
    transition: 'opacity 1.4s ease',
    transform: 'translate(-50%, -50%) rotate(-90deg)',
  });

  // Secondary panel: ~49.5vh tall, ~33vw wide. After -90deg rotation width↔height swap.
  // Pre-rotation: width (→ visual height) must cover 49.5vh, height (→ visual width) must cover 33vw
  const rotatedSlideSm = (i: number): React.CSSProperties => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '55vh',
    height: '40vw',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    opacity: active === i ? 1 : 0,
    transition: 'opacity 1.4s ease',
    transform: 'translate(-50%, -50%) rotate(-90deg)',
  });

  return (
    <div className="hero-gallery" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0, height: '66vh', minHeight: 400, alignItems: 'end', width: '100%' }}>
      {/* Full-width panel */}
      <div style={{ height: '100%', background: 'var(--sand)', position: 'relative', overflow: 'hidden', width: '100%' }}>
        <img src="/hero-1.jpg" alt="" style={{ position: 'absolute', top: '50%', right: 0, width: '75vw', height: '112.5vw', objectFit: 'cover', objectPosition: 'center 65%', display: 'block', opacity: active === 0 ? 1 : 0, transition: 'opacity 1.4s ease', transform: 'translateY(-50%) rotate(-90deg)' }} />
        <img src="/hero-3.jpg" alt="" style={{ position: 'absolute', top: '50%', right: 0, width: '75vw', height: '112.5vw', objectFit: 'cover', objectPosition: 'center 60%', display: 'block', opacity: active === 1 ? 1 : 0, transition: 'opacity 1.4s ease', transform: 'translateY(-50%) rotate(-90deg)' }} />
      </div>
    </div>
  );
}
