'use client';

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)',
  background: 'transparent', border: 'none', borderBottom: '1px solid #ccc',
  padding: '8px 0', outline: 'none', width: '100%',
};

function ContactForm() {
  const params = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', product: '', message: '' });
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const productParam = params.get('product');
    if (productParam) {
      setFormData(prev => ({ ...prev, product: decodeURIComponent(productParam) }));
    }
  }, [params]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: isMobile ? '8px 16px 12px 16px' : '8px 60px 16px 60px', background: '#ffffff', zIndex: 1000, flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 12 : 0 }}>
        <Link href="/" style={{ width: isMobile ? '100%' : 508, fontFamily: 'var(--font-fraunces)', fontSize: isMobile ? 24 : 40, fontWeight: 300, color: 'var(--ink)', letterSpacing: '0.02em', whiteSpace: 'nowrap', lineHeight: 1, display: 'flex', alignItems: 'flex-end', justifyContent: isMobile ? 'center' : 'flex-start', textDecoration: 'none' }}>
          estudio malva<span style={{ color: 'var(--clay)', fontSize: '1.3em' }}>.</span>
        </Link>
        <nav style={{ display: 'flex', gap: isMobile ? 16 : 50, alignItems: 'flex-end', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-end', width: isMobile ? '100%' : 'auto' }}>
          <Link href="/collections" style={{ fontFamily: 'var(--font-archivo)', fontSize: isMobile ? 14 : 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1 }}>
            Collections
          </Link>
          <Link href="/thejournal" style={{ fontFamily: 'var(--font-archivo)', fontSize: isMobile ? 14 : 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1 }}>
            Journal
          </Link>
          <Link href="/contact" style={{ fontFamily: 'var(--font-archivo)', fontSize: isMobile ? 14 : 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1 }}>
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div style={{ display: 'flex', paddingTop: isMobile ? 100 : 80, minHeight: '100vh', flexDirection: isMobile ? 'column' : 'row' }}>
        {/* Left: Image */}
        <div style={{ flex: 1, overflow: 'hidden', background: '#f5f5f5', height: isMobile ? 300 : '100%' }}>
          <img
            src="/contact.jpg"
            alt="Fibers"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Right: Contact Info & Form */}
        <div style={{ flex: 1, padding: isMobile ? '30px 16px' : '60px', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
          {/* Contact Info */}
          <div style={{ marginBottom: 60 }}>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', margin: '0 0 8px 0', fontWeight: 400 }}>
              @estudio.malva
            </p>
            <a href="mailto:sales@estudiomalva.com" style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', textDecoration: 'none', display: 'block' }}>
              sales@estudiomalva.com
            </a>
          </div>

          {/* Form */}
          {submitted ? (
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 14, color: 'var(--ink)', margin: 0 }}>
                Thank you for reaching out. We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '40px', minHeight: 320, justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
                <input
                  type="text"
                  required
                  style={inputStyle}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                <input
                  type="email"
                  required
                  style={inputStyle}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Product</label>
                <input
                  type="text"
                  style={inputStyle}
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
                <textarea
                  required
                  style={{ ...inputStyle, resize: 'none', height: 100, borderBottom: '1px solid #ccc' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 400, color: 'var(--ink)', background: 'none', border: 'none', cursor: sending ? 'default' : 'pointer', alignSelf: 'flex-start', padding: 0, opacity: sending ? 0.7 : 1, textDecoration: 'none' }}
              >
                {sending ? '[SENDING]' : '[SEND]'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: '#ffffff', borderTop: '1px solid #f0f0f0', padding: isMobile ? '30px 16px' : '60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: isMobile ? 'flex' : 'grid', gridTemplateColumns: isMobile ? undefined : '1fr 1fr 1fr', gap: isMobile ? 20 : 60, marginBottom: 40, flexDirection: isMobile ? 'column' : undefined, textAlign: isMobile ? 'center' : undefined, alignItems: isMobile ? 'center' : undefined }}>
          {/* Left Column - Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, marginBottom: 8 }}>Email</p>
            <a href="mailto:sales@estudiomalva.com" style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1.85 }}>
              sales@estudiomalva.com
            </a>
          </div>

          {/* Middle Column - Location */}
          <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'center', alignItems: 'flex-start' }}>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.85, color: 'var(--ink)', margin: 0, textAlign: 'center' }}>
              Made in Argentina
            </p>
          </div>

          {/* Right Column - Social */}
          <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end' }}>
            <a href="https://instagram.com/estudio.malva" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1.85 }}>
              @estudio.malva
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 12, textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', margin: 0, opacity: 0.7 }}>
            © 2026 estudio malva. All rights reserved.
          </p>
        </div>
      </footer>
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
