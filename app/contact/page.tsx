'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)',
  background: 'transparent', border: 'none', borderBottom: '1px solid var(--sand)',
  padding: '10px 0', outline: 'none', width: '100%',
};
const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em',
  textTransform: 'uppercase', color: 'var(--slate)',
};

function ContactForm() {
  const params = useSearchParams();
  const [category, setCategory] = useState(params.get('category') ?? '');
  const [product, setProduct] = useState(params.get('product')?.replace(/\+/g, ' ') ?? '');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="pg" style={{ background: 'var(--moss)', padding: 72, display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* Header */}
      <div className="hdr" style={{ background: 'var(--linen)', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '36px 52px', alignItems: 'center' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1.1, color: 'var(--ink)' }}>
          <span style={{ fontSize: 33, display: 'block' }}>estudio</span>
          <span style={{ fontSize: 33, display: 'block' }}>malva<span style={{ color: 'var(--clay)' }}>.</span></span>
        </Link>
        <Link href="/" className="hdr-back" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate)', opacity: 0.7 }}>
          ← Home
        </Link>
      </div>

      {/* Contact card */}
      <div className="two-col" style={{ background: 'var(--linen)', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '70vh' }}>

        {/* Form side */}
        <div className="contact-side" style={{ padding: '72px 64px', display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 48 }}>
            Get in<br />touch.
          </h1>

          {submitted ? (
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontStyle: 'italic', fontSize: 18, color: 'var(--moss)' }}>
              Thank you — we'll be in touch soon.
            </p>
          ) : (
            <form
              style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}
              onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ firstName, lastName, email, category, product, message }),
                });
                setSending(false);
                setSubmitted(true);
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={labelStyle}>First name</label>
                  <input type="text" placeholder="Sofia" required style={inputStyle} value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={labelStyle}>Last name</label>
                  <input type="text" placeholder="Bennasar" required style={inputStyle} value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={labelStyle}>Email</label>
                <input type="email" placeholder="you@email.com" required style={inputStyle} value={email} onChange={e => setEmail(e.target.value)} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={labelStyle}>Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', color: category ? 'var(--ink)' : 'var(--sand)' } as React.CSSProperties}
                  >
                    <option value="">Select a category</option>
                    <option value="baskets">Baskets</option>
                    <option value="fiber">Fiber + Textile</option>
                    <option value="ceramics">Ceramics</option>
                    <option value="wood">Wood</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={labelStyle}>Product</label>
                  <input
                    type="text"
                    placeholder="e.g. Throw 001"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  placeholder="Tell us what you're looking for..."
                  style={{ ...inputStyle, resize: 'none', height: 100 }}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '14px 32px', background: 'var(--ink)', color: 'var(--linen)', border: 'none', cursor: sending ? 'default' : 'pointer', alignSelf: 'flex-start', marginTop: 8, opacity: sending ? 0.6 : 1 }}
              >
                {sending ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>

        {/* Info side */}
        <div className="contact-side" style={{ background: 'var(--ink)', padding: '72px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 48 }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontStyle: 'italic', fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 300, color: 'var(--linen)', lineHeight: 1.3, marginBottom: 'auto' }}>
            We source directly.<br /><span style={{ color: 'var(--clay)' }}>No middlemen, no compromise.</span>
          </p>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: 12 }}>Email</p>
            <a href="mailto:sales@estudiomalva.com" style={{ fontFamily: 'var(--font-archivo)', fontSize: 14, color: 'rgba(247,244,238,0.75)', lineHeight: 1.8 }}>
              sales@estudiomalva.com
            </a>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: 12 }}>Instagram</p>
            <a href="https://www.instagram.com/estudiomalva.ar" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-archivo)', fontSize: 14, color: 'rgba(247,244,238,0.75)', lineHeight: 1.8 }}>
              @estudiomalva.ar
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  );
}
