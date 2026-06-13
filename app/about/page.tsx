import Link from "next/link";

export const metadata = {
  title: "Acerca de | Estudio Malva",
  description: "Conoce a Estudio Malva, nuestro equipo y servicios de diseño creativo",
};

export default function About() {
  const services = [
    {
      title: "Branding",
      description: "Creamos identidades visuales únicas que definen y posicionan tu marca en el mercado",
      items: ["Logos", "Identidad visual", "Libros de marca", "Naming"]
    },
    {
      title: "Diseño Digital",
      description: "Experiencias web y móviles que conectan con tu audiencia",
      items: ["Sitios web", "Aplicaciones", "UX/UI", "Prototipado"]
    },
    {
      title: "Diseño Gráfico",
      description: "Comunicación visual efectiva para tus materiales de marketing",
      items: ["Diseño editorial", "Packaging", "Ilustración", "Materiales promocionales"]
    }
  ];

  const team = [
    {
      name: "Sofia Bennasar",
      role: "Directora Creativa",
      bio: "Apasionada por el diseño que cuenta historias y conecta emociones"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Sobre Estudio Malva</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Somos un estudio de diseño dedicado a transformar ideas en soluciones visuales
            memorables. Desde 2020, hemos trabajado con clientes diversos para crear diseño
            que inspira, comunica y genera impacto.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Crear experiencias visuales que conecten marca y audiencia, transformando
                conceptos en diseño que genera valor y significado.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="font-bold">→</span> Creatividad estratégica
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">→</span> Atención al detalle
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">→</span> Colaboración sincera
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">→</span> Impacto measurable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nuestros Servicios</h2>
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">El Equipo</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="flex gap-8 items-center">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Trabajemos Juntos</h2>
          <p className="text-lg text-gray-300 mb-8">
            Estamos listos para ayudarte a hacer realidad tu proyecto
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
}
