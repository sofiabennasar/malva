'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const links = [
  ['/', 'Home'],
  ['/products', 'Products'],
  ['/thejournal', 'The Journal'],
  ['/contact', 'Contact'],
];

export default function StickyHeader() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Sticky header */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'var(--linen)', padding: '18px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid var(--bone)',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.35s ease',
      }}>
        <Link href="/" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, fontSize: 22, letterSpacing: '0.02em', color: 'var(--ink)', lineHeight: 1 }}>
          estudio malva<span style={{ color: 'var(--clay)' }}>.</span>
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--clay)', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}
        />
      </header>

      {/* Fullscreen menu overlay */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '50vh', zIndex: 200,
        background: 'var(--ink)',
        display: 'flex', flexDirection: 'column',
        padding: '28px 48px 40px',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.3s ease',
      }}>
        {/* Menu header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 72 }}>
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, fontSize: 22, color: 'var(--linen)', letterSpacing: '0.02em', lineHeight: 1 }}>
            estudio malva<span style={{ color: 'var(--clay)' }}>.</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--clay)', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}
          />
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-dm-sans)', fontStyle: 'italic', fontSize: 'clamp(17px, 1.8vw, 26px)', fontWeight: 300, color: 'var(--linen)', textDecoration: 'none', lineHeight: 1.15 }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <span style={{ marginTop: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(247,244,238,0.3)' }}>
          Made in Argentina
        </span>
      </div>
    </>
  );
}
