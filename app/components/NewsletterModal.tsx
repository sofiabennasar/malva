'use client';

import { useState } from 'react';

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--clay)', border: '1px solid var(--clay)', padding: '14px 32px', display: 'inline-block', background: 'transparent', cursor: 'pointer', lineHeight: 'normal' }}
      >
        Coming Soon
      </button>

      {open && (
        <div
          onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}
          style={{ position: 'fixed', inset: 0, background: 'rgba(28,26,23,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200 }}
        >
          <div style={{ background: 'var(--linen)', padding: '56px 52px 48px', maxWidth: 480, width: '90%', position: 'relative' }}>
            <button
              onClick={() => setOpen(false)}
              style={{ position: 'absolute', top: 20, right: 24, background: 'none', border: 'none', fontSize: 14, color: 'var(--slate)', cursor: 'pointer', opacity: 0.5 }}
            >
              ✕
            </button>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: 20 }}>
              Estudio Malva
            </p>
            <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)', marginBottom: 20 }}>
              Be the first<br />to know.
            </h2>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--slate)', marginBottom: 32 }}>
              Sign up for our newsletter and get early access to new collections, artisan stories, and exclusive editions — straight from the source.
            </p>

            {!submitted ? (
              <form
                onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, padding: '14px 18px', border: '1px solid var(--sand)', background: 'transparent', color: 'var(--ink)', outline: 'none' }}
                />
                <button
                  type="submit"
                  style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 32px', background: 'var(--ink)', color: 'var(--linen)', border: 'none', cursor: 'pointer' }}
                >
                  Notify me
                </button>
              </form>
            ) : (
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontStyle: 'italic', fontSize: 15, color: 'var(--moss)', marginTop: 20 }}>
                You&apos;re on the list — thank you.
              </p>
            )}

            {!submitted && (
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sand)', marginTop: 16 }}>
                No spam. Unsubscribe any time.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
