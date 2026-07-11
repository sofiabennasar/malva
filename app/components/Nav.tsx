'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 48px',
        transition: 'background 0.3s',
        background: scrolled ? 'rgba(94,97,73,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontSize: 22,
          fontWeight: 300,
          letterSpacing: '0.02em',
          color: 'var(--ink)',
          lineHeight: 1,
          opacity: scrolled ? 1 : 0,
          pointerEvents: scrolled ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
      >
        estudio malva<span style={{ color: 'var(--clay)' }}>.</span>
      </span>

      <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}>
        {[
          { href: '/', label: 'Inicio' },
          { href: '/products', label: 'Portafolio' },
          { href: '/about', label: 'Nosotros' },
          { href: '/contact', label: 'Contacto' },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              style={{
                fontFamily: 'var(--font-archivo)',
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: '0.05em',
                color: 'var(--linen)',
                opacity: 0.75,
                transition: 'opacity 0.15s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
