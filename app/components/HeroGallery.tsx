'use client';

import { useEffect, useState } from 'react';

const INTERVAL = 4500;

export default function HeroGallery() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % 2), INTERVAL);
    return () => clearInterval(id);
  }, []);

  const slideStyle = (i: number): React.CSSProperties => ({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    opacity: active === i ? 1 : 0,
    transition: 'opacity 1.4s ease',
  });

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 4, height: '90vh', minHeight: 560, alignItems: 'end' }}>
      {/* Main panel */}
      <div style={{ height: '100%', background: 'var(--sand)', position: 'relative', overflow: 'hidden' }}>
        <img src="/hero-1.jpg" alt="" style={slideStyle(0)} />
        <img src="/hero-3.jpg" alt="" style={slideStyle(1)} />
      </div>
      {/* Secondary panel */}
      <div style={{ height: '85%', background: 'var(--bone)', position: 'relative', overflow: 'hidden' }}>
        <img src="/hero-2.jpg" alt="" style={{ ...slideStyle(0), objectPosition: 'center top' }} />
        <img src="/hero-4.jpg" alt="" style={{ ...slideStyle(1), objectPosition: 'center top' }} />
      </div>
    </div>
  );
}
