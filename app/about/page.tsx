import Link from "next/link";

export const metadata = {
  title: "Acerca de | Estudio Malva",
  description: "Conoce a Estudio Malva, nuestro equipo y servicios de diseño creativo",
};

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-paper py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-fraunces text-6xl italic text-ink mb-8">
            Sobre Estudio Malva
          </h1>
          <p className="font-archivo text-lg leading-relaxed text-slate max-w-3xl">
            Cada pieza es producida por artesanos en el norte de Argentina usando
            técnicas pasadas de generación en generación. Somos un estudio dedicado
            a celebrar lo hecho a mano, lo imperfecto, lo que permanece.
          </p>
        </div>
      </section>

      {/* Mission & Values Grid */}
      <section className="grid md:grid-cols-2">
        <div className="bg-sand p-16 md:p-24 flex flex-col justify-center min-h-96">
          <h2 className="font-fraunces text-4xl italic text-ink mb-8">Nuestra Misión</h2>
          <p className="font-archivo text-base leading-relaxed text-slate">
            Crear experiencias visuales que conecten forma y función, transformando
            conceptos en diseño que respeta la materia y genera significado.
          </p>
        </div>
        <div className="bg-moss p-16 md:p-24 flex flex-col justify-center min-h-96">
          <h2 className="font-fraunces text-4xl italic text-paper mb-8">Nuestros Valores</h2>
          <ul className="font-archivo text-base leading-relaxed space-y-4 text-paper">
            <li className="flex gap-3">
              <span>→</span> <span>Respeto por la materia</span>
            </li>
            <li className="flex gap-3">
              <span>→</span> <span>Atención al detalle</span>
            </li>
            <li className="flex gap-3">
              <span>→</span> <span>Colaboración sincera</span>
            </li>
            <li className="flex gap-3">
              <span>→</span> <span>Durabilidad y impacto</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-fraunces text-5xl italic text-ink mb-16">
            Nuestros Servicios
          </h2>
          <div className="space-y-20">
            {[
              {
                title: "Branding",
                items: ["Logos", "Identidad visual", "Libros de marca", "Naming"],
                color: "border-l-4 border-clay"
              },
              {
                title: "Diseño Digital",
                items: ["Sitios web", "Aplicaciones", "UX/UI", "Prototipado"],
                color: "border-l-4 border-moss"
              },
              {
                title: "Diseño Gráfico",
                items: ["Diseño editorial", "Packaging", "Ilustración", "Campaña"],
                color: "border-l-4 border-slate"
              }
            ].map((service, idx) => (
              <div key={idx} className={`pl-8 ${service.color}`}>
                <h3 className="font-archivo font-semibold text-sm tracking-wide uppercase text-slate mb-6">
                  {service.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.items.map((item, i) => (
                    <p key={i} className="font-archivo text-ink">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-linen py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-fraunces text-5xl italic text-ink mb-16">El Equipo</h2>
          <div className="flex gap-16 items-center">
            <div className="w-40 h-40 bg-slate flex-shrink-0"></div>
            <div>
              <h3 className="font-fraunces text-3xl italic text-ink mb-2">
                Sofia Bennasar
              </h3>
              <p className="font-archivo font-semibold text-sm tracking-wide uppercase text-slate mb-6">
                Directora Creativa
              </p>
              <p className="font-archivo text-base leading-relaxed text-slate">
                Apasionada por el diseño que cuenta historias y respeta lo artesanal.
                Cree que la mejor solución es siempre la más simple, la más honesta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-fraunces text-5xl italic mb-8">Trabajemos Juntos</h2>
          <p className="font-archivo text-lg leading-relaxed mb-10 max-w-2xl">
            Estamos listos para escuchar tu proyecto y ayudarte a hacerlo realidad.
          </p>
          <Link
            href="/contact"
            className="inline-block font-archivo font-semibold text-sm tracking-wide uppercase px-6 py-3 bg-clay text-paper hover:bg-sand transition"
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
}
