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
      description: "Desarrollo de sistema de identidad completo para marca tecnológica",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Diseño de Sitio Web",
      category: "Digital",
      description: "Sitio web responsivo y optimizado para agencia creativa",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Campaña de Marketing",
      category: "Gráfico",
      description: "Materiales promocionales y diseño de campaña integrada",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Aplicación Móvil",
      category: "Digital",
      description: "Interfaz y experiencia de usuario para aplicación de productividad",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Libro de Marca",
      category: "Branding",
      description: "Guía completa de identidad visual y normas de uso",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Diseño Editorial",
      category: "Gráfico",
      description: "Diseño de revista y layout editorial profesional",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Nuestro Portafolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre los proyectos en los que hemos trabajado con dedicación y creatividad
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                {/* Placeholder for project image */}
                <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Proyecto {project.id}</span>
                </div>
                <div className="p-6 bg-white">
                  <span className="text-sm text-gray-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href="#"
                    className="text-gray-900 font-semibold hover:text-gray-600 transition"
                  >
                    Ver proyecto →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Nos gustaría ayudarte a dar vida a tu idea
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Empecemos a Trabajar
          </Link>
        </div>
      </section>
    </div>
  );
}
