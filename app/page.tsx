import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Diseño Creativo<br />que Inspira
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            En Estudio Malva transformamos tus ideas en experiencias visuales
            memorables. Trabajamos con dedicación para crear diseño que
            comunica, conecta y transforma.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Ver Portafolio
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
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
            <div key={i} className="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="text-gray-900 font-semibold hover:text-gray-600 transition"
          >
            Conocer más sobre nuestros servicios →
          </Link>
        </div>
      </section>
    </div>
  );
}
