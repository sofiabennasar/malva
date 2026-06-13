import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estudio Malva | Diseño Creativo",
  description: "Estudio Malva - Diseño creativo y servicios de diseño profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Malva
            </Link>
            <div className="flex gap-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
                Inicio
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition">
                Portafolio
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">
                Acerca de
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">
                Contacto
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-50 border-t border-gray-200 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-12 text-center text-gray-600 text-sm">
            <p>&copy; 2026 Estudio Malva. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
