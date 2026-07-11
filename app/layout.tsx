import type { Metadata } from "next";
import { Fraunces, Archivo, JetBrains_Mono, DM_Sans } from "next/font/google";
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

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
    <html lang="es" className={`${fraunces.variable} ${archivo.variable} ${jetbrainsMono.variable} ${dmSans.variable}`}>
      <body style={{ margin: 0, background: 'var(--linen)', color: 'var(--ink)', fontFamily: 'var(--font-archivo)', fontSize: 16, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>
        <StickyHeader />
        <main>{children}</main>

        <footer style={{ background: 'var(--linen)', borderTop: '1px solid var(--sand)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              <Link href="/" style={{ fontFamily: 'var(--font-fraunces)', fontSize: 20, fontWeight: 300, color: 'var(--clay)', lineHeight: 1, textDecoration: 'none' }}>.</Link>
              <Link href="/products" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 15, textTransform: 'uppercase', color: 'var(--ink)', opacity: 0.65, textDecoration: 'none' }}>Products</Link>
              <Link href="/thejournal" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 15, textTransform: 'uppercase', color: 'var(--ink)', opacity: 0.65, textDecoration: 'none' }}>The Journal</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              <Link href="/contact" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 15, textTransform: 'uppercase', color: 'var(--ink)', opacity: 0.65, textDecoration: 'none' }}>Contact</Link>
              <a href="https://www.instagram.com/estudio.malva?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 15, textTransform: 'uppercase', color: 'var(--ink)', opacity: 0.65, textDecoration: 'none' }}>Instagram</a>
            </div>
          </div>
          <div className="footer-bottom-row" style={{ padding: '16px 48px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
