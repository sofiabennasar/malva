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

        <footer style={{ background: 'var(--linen)', borderTop: '1px solid var(--sand)', padding: '16px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: 'var(--clay)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', color: 'var(--slate)', opacity: 0.6, textTransform: 'uppercase' }}>Made in Argentina</span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', color: 'var(--slate)', opacity: 0.6, textTransform: 'uppercase' }}>© Estudio Malva</span>
        </footer>
      </body>
    </html>
  );
}
