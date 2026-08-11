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
  description: "Singular, handmade objects sourced directly from artisan communities across Argentina.",
  openGraph: {
    title: "Estudio Malva",
    description: "Singular, handmade objects sourced directly from artisan communities across Argentina.",
    url: "https://estudiomalva.com",
    siteName: "Estudio Malva",
    type: "website",
    images: [
      {
        url: "https://estudiomalva.com/og-image.svg",
        width: 1200,
        height: 1200,
        alt: "Estudio Malva",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${archivo.variable} ${jetbrainsMono.variable} ${dmSans.variable}`}>
      <body style={{ margin: 0, background: '#ffffff', color: 'var(--ink)', fontFamily: 'var(--font-archivo)', fontSize: 16, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>
        <StickyHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
