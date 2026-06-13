"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      // Simulate API call - in production, this would send to an email service
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submission:", data);
      setFormStatus("success");
      e.currentTarget.reset();

      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contactanos</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Listo para iniciar tu proyecto? Nos encantaría escuchar sobre tu idea.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:hello@estudiomalva.com" className="text-gray-600 hover:text-gray-900 transition">
                hello@estudiomalva.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ubicación</h3>
              <p className="text-gray-600">
                Buenos Aires, Argentina
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Redes Sociales</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm font-semibold">
                  Instagram
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm font-semibold">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition text-sm font-semibold">
                  Behance
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-600 transition font-semibold"
            >
              {formStatus === "loading" && "Enviando..."}
              {formStatus === "success" && "¡Mensaje enviado!"}
              {formStatus === "error" && "Error al enviar"}
              {formStatus === "idle" && "Enviar Mensaje"}
            </button>

            {formStatus === "success" && (
              <p className="text-green-600 text-sm">
                Gracias por contactarnos. Nos comunicaremos pronto.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-8">
            {[
              {
                q: "¿Cuáles son tus horarios de atención?",
                a: "Respondemos consultas de lunes a viernes de 9 a 18 horas. Intentamos responder dentro de 24 horas."
              },
              {
                q: "¿Cuál es el proceso para empezar un proyecto?",
                a: "Comenzamos con una consulta inicial para entender tu proyecto, objetivos y presupuesto. Luego presentamos una propuesta personalizada."
              },
              {
                q: "¿Ofrecen servicios de revisión de trabajos existentes?",
                a: "Sí, hacemos auditorías de diseño y proporciones mejoras para proyectos existentes."
              },
              {
                q: "¿Cuál es el costo promedio de un proyecto?",
                a: "Los precios varían según el alcance. Ofrecemos opciones desde presupuestos pequeños hasta proyectos completos."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
