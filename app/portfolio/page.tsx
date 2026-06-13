import Link from "next/link";

export const metadata = {
  title: "Portafolio | Estudio Malva",
  description: "Galería de proyectos y trabajos realizados por Estudio Malva",
};

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Identidad Visual Moderna",
      category: "Branding",
      color: "bg-sand"
    },
    {
      id: 2,
      title: "Diseño de Sitio Web",
      category: "Digital",
      color: "bg-moss"
    },
    {
      id: 3,
      title: "Campaña de Marketing",
      category: "Gráfico",
      color: "bg-slate"
    },
    {
      id: 4,
      title: "Aplicación Móvil",
      category: "Digital",
      color: "bg-clay"
    },
    {
      id: 5,
      title: "Libro de Marca",
      category: "Branding",
      color: "bg-bone"
    },
    {
      id: 6,
      title: "Diseño Editorial",
      category: "Gráfico",
      color: "bg-linen"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-linen py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-fraunces text-6xl italic text-ink mb-6">
            Nuestro Portafolio
          </h1>
          <p className="font-archivo text-lg leading-relaxed text-slate max-w-2xl">
            Trabajos realizados con dedicación y respeto por la materia.
            Cada proyecto cuenta una historia.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-paper py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div
                  className={`w-full h-80 ${project.color} flex items-end justify-start p-8 relative overflow-hidden hover:opacity-90 transition`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-ink transition"></div>
                  <div className="relative z-10">
                    <p className="font-archivo text-xs tracking-widest uppercase text-ink opacity-60 mb-3">
                      {project.category}
                    </p>
                    <h3 className="font-fraunces text-2xl italic text-ink">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-clay text-paper py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-fraunces text-5xl italic mb-6">¿Tienes un proyecto?</h2>
          <p className="font-archivo text-lg leading-relaxed mb-8 max-w-2xl">
            Nos gustaría ayudarte a transformar tu idea en algo tangible,
            algo que permanezca.
          </p>
          <Link
            href="/contact"
            className="inline-block font-archivo font-semibold text-sm tracking-wide uppercase px-6 py-3 bg-paper text-clay hover:bg-linen transition"
          >
            Empecemos
          </Link>
        </div>
      </section>
    </div>
  );
}
