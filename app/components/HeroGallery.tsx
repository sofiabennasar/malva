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
    opacity: active === i ? 1 : 0,
    transition: 'opacity 1.4s ease',
  });

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 4, height: '66vh', minHeight: 400, alignItems: 'end' }}>
      {/* Main panel */}
      <div style={{ height: '100%', background: 'var(--sand)', position: 'relative', overflow: 'hidden' }}>
        {/* Replace with <img src="/images/hero-1.jpg" style={slideStyle(0)} alt="" /> when photos are ready */}
        <div style={{ ...slideStyle(0), background: 'var(--sand)' }} />
        <div style={{ ...slideStyle(1), background: 'var(--clay)', opacity: active === 1 ? 0.6 : 0 }} />
      </div>
      {/* Secondary panel */}
      <div style={{ height: '75%', background: 'var(--bone)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...slideStyle(0), background: 'var(--bone)' }} />
        <div style={{ ...slideStyle(1), background: 'var(--slate)', opacity: active === 1 ? 0.5 : 0 }} />
      </div>
    </div>
  );
}
