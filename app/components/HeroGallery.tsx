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

  // Secondary panel is 75% height of 66vh = ~49.5vh tall, width ~28vw
  const rotatedSlideSm = (i: number): React.CSSProperties => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '50vh',
    height: '35vw',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    opacity: active === i ? 1 : 0,
    transition: 'opacity 1.4s ease',
    transform: 'translate(-50%, -50%) rotate(-90deg)',
  });

  return (
    <div className="hero-gallery" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 4, height: '66vh', minHeight: 400, alignItems: 'end' }}>
      {/* Main panel */}
      <div style={{ height: '100%', background: 'var(--sand)', position: 'relative', overflow: 'hidden' }}>
        <img src="/hero-1.jpg" alt="" style={{ position: 'absolute', top: '50%', left: '50%', width: '66vh', height: '70vw', objectFit: 'cover', objectPosition: 'center 65%', display: 'block', opacity: active === 0 ? 1 : 0, transition: 'opacity 1.4s ease', transform: 'translate(-50%, -50%) rotate(-90deg)' }} />
        <img src="/hero-3.jpg" alt="" style={{ ...rotatedSlide(1), objectFit: 'cover', objectPosition: 'center 40%' }} />
      </div>
      {/* Secondary panel */}
      <div className="hero-gallery-secondary" style={{ height: '75%', background: 'var(--bone)', position: 'relative', overflow: 'hidden' }}>
        <img src="/hero-2.jpg" alt="" style={{ ...rotatedSlideSm(0), objectFit: 'cover', objectPosition: 'center center' }} />
        <img src="/hero-4.jpg" alt="" style={rotatedSlideSm(1)} />
      </div>
    </div>
  );
}
