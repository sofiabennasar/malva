import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-linen px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-fraunces text-7xl italic leading-tight text-ink mb-8">
            Cerámica de la tierra
          </h1>
          <p className="font-archivo text-lg leading-relaxed text-slate max-w-2xl mb-12">
            Cada pieza es producida por artesanos en el norte de Argentina usando
            técnicas pasadas de generación en generación. Diseño que respeta la
            materia, que celebra lo hecho a mano. Generoso en forma, austero en
            ornamento.
          </p>
          <div className="flex gap-8">
            <Link
              href="/portfolio"
              className="font-archivo font-semibold text-sm tracking-wide uppercase px-6 py-3 bg-clay text-paper hover:bg-slate transition"
            >
              Ver Trabajos
            </Link>
            <Link
              href="/contact"
              className="font-archivo font-semibold text-sm tracking-wide uppercase px-6 py-3 border-2 border-ink text-ink hover:bg-ink hover:text-paper transition"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Two Truths */}
      <section className="grid md:grid-cols-2">
        <div className="bg-clay text-paper p-16 md:p-24 flex flex-col justify-center min-h-96">
          <h2 className="font-fraunces text-5xl italic mb-8">Raw</h2>
          <p className="font-archivo text-sm leading-relaxed">
            Textura, fibra, cerámica cocida, bordes irregulares, la marca de la mano.
            Este es el producto. Que sea táctil e imperfecto.
          </p>
        </div>
        <div className="bg-ink text-paper p-16 md:p-24 flex flex-col justify-center min-h-96">
          <h2 className="font-fraunces text-5xl italic mb-8">Modern</h2>
          <p className="font-archivo text-sm leading-relaxed">
            Espacio generoso, grid estricto, tipo plano, contención. Esto es el marco.
            Que sea tranquilo, agudo y contemporáneo.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-fraunces text-5xl italic text-ink mb-16">
            Nuestros Servicios
          </h2>
          <div className="space-y-12">
            {[
              {
                title: "Identidad Visual",
                description: "Branding, logos y sistemas de diseño que definen tu marca"
              },
              {
                title: "Diseño Digital",
                description: "Sitios web, aplicaciones y experiencias interactivas"
              },
              {
                title: "Diseño Gráfico",
                description: "Materiales de marketing, ilustración y diseño editorial"
              }
            ].map((service, i) => (
              <div key={i} className="border-t border-bone pt-12">
                <h3 className="font-archivo font-semibold text-sm tracking-wide uppercase text-slate mb-3">
                  {service.title}
                </h3>
                <p className="font-archivo text-lg leading-relaxed text-ink">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
