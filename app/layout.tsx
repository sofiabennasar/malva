import type { Metadata } from "next";
import { Fraunces, Archivo } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "300", "600"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Estudio Malva | Diseño Creativo",
  description: "Estudio Malva - Cerámica de la tierra. Diseño creativo en Salta, Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${archivo.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <header className="sticky top-0 z-50 bg-paper border-b border-linen">
          <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link href="/" className="font-fraunces text-3xl italic text-ink">
              malva<span className="text-clay">.</span>
            </Link>
            <div className="font-archivo flex gap-12 text-sm font-semibold tracking-wide uppercase">
              <Link href="/" className="text-slate hover:text-clay transition">
                Inicio
              </Link>
              <Link href="/portfolio" className="text-slate hover:text-clay transition">
                Portafolio
              </Link>
              <Link href="/about" className="text-slate hover:text-clay transition">
                Acerca de
              </Link>
              <Link href="/contact" className="text-slate hover:text-clay transition">
                Contacto
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-linen border-t border-bone">
          <div className="max-w-6xl mx-auto px-6 py-16 font-archivo text-xs tracking-widest uppercase text-slate">
            <p>&copy; 2026 Estudio Malva. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
