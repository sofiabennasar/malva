import type { Metadata } from "next";
import { Fraunces, Archivo, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import StickyHeader from "./components/StickyHeader";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Estudio Malva",
  description: "Objetos hechos a mano, directamente de comunidades artesanas de Argentina.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${archivo.variable} ${jetbrainsMono.variable}`}>
      <body style={{ margin: 0, background: 'var(--linen)', color: 'var(--ink)', fontFamily: 'var(--font-archivo)', fontSize: 16, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>
        <StickyHeader />
        <main>{children}</main>

        <footer className="footer-grid" style={{ background: 'var(--linen)', borderTop: '1px solid var(--sand)', padding: '48px 48px 36px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: 18, fontWeight: 300, letterSpacing: '0.04em', color: 'var(--ink)', marginBottom: 12 }}>
              Estudio Malva
            </p>
            <p style={{ fontSize: 13, color: 'var(--slate)', lineHeight: 1.6, maxWidth: 220 }}>
              Handmade objects sourced directly from artisan communities across Argentina.
            </p>
          </div>

          <div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><Link href="/" style={{ fontSize: 13, color: 'var(--ink)', opacity: 0.65, textDecoration: 'none' }}>Home</Link></li>
              <li><Link href="/products" style={{ fontSize: 13, color: 'var(--ink)', opacity: 0.65, textDecoration: 'none' }}>Products</Link></li>
              <li><Link href="/thejournal" style={{ fontSize: 13, color: 'var(--ink)', opacity: 0.65, textDecoration: 'none' }}>The Journal</Link></li>
            </ul>
          </div>

          <div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><Link href="/contact" style={{ fontSize: 13, color: 'var(--ink)', opacity: 0.65, textDecoration: 'none' }}>Contact Us</Link></li>
              <li><a href="https://www.instagram.com/estudiomalva.ar" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'var(--ink)', opacity: 0.65, textDecoration: 'none' }}>Instagram</a></li>
            </ul>
          </div>

          <div className="footer-bottom-row" style={{ gridColumn: '1 / -1', borderTop: '1px solid var(--bone)', paddingTop: 24, marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', color: 'var(--slate)', opacity: 0.6, textTransform: 'uppercase' }}>
              © 2026 Estudio Malva
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', color: 'var(--slate)', opacity: 0.6, textTransform: 'uppercase' }}>
              Made in Argentina
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
