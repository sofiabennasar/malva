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
      <section className="bg-paper py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-fraunces text-6xl italic text-ink mb-6">
            Contactanos
          </h1>
          <p className="font-archivo text-lg leading-relaxed text-slate max-w-2xl">
            ¿Listo para iniciar tu proyecto? Nos encantaría escuchar tu idea
            y ayudarte a hacerla realidad.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="bg-linen py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <p className="font-archivo font-semibold text-xs tracking-widest uppercase text-slate mb-3">
                Email
              </p>
              <a
                href="mailto:hello@estudiomalva.com"
                className="font-archivo text-ink hover:text-clay transition"
              >
                hello@estudiomalva.com
              </a>
            </div>
            <div>
              <p className="font-archivo font-semibold text-xs tracking-widest uppercase text-slate mb-3">
                Ubicación
              </p>
              <p className="font-archivo text-ink">
                Salta, Argentina
              </p>
            </div>
            <div>
              <p className="font-archivo font-semibold text-xs tracking-widest uppercase text-slate mb-4">
                Redes
              </p>
              <div className="flex gap-6">
                <a href="https://instagram.com/estudiomalva.ar" className="font-archivo text-sm text-slate hover:text-clay transition">
                  Instagram
                </a>
                <a href="#" className="font-archivo text-sm text-slate hover:text-clay transition">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-8">
            <div>
              <label htmlFor="name" className="block font-archivo font-semibold text-xs tracking-widest uppercase text-slate mb-4">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-0 py-3 border-b border-slate bg-transparent font-archivo text-ink focus:outline-none focus:border-clay transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-archivo font-semibold text-xs tracking-widest uppercase text-slate mb-4">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-0 py-3 border-b border-slate bg-transparent font-archivo text-ink focus:outline-none focus:border-clay transition"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-archivo font-semibold text-xs tracking-widest uppercase text-slate mb-4">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-0 py-3 border-b border-slate bg-transparent font-archivo text-ink focus:outline-none focus:border-clay transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-archivo font-semibold text-xs tracking-widest uppercase text-slate mb-4">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-0 py-3 border-b border-slate bg-transparent font-archivo text-ink focus:outline-none focus:border-clay transition resize-none"
              />
            </div>

            <div className="pt-8">
              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="font-archivo font-semibold text-sm tracking-wide uppercase px-6 py-3 bg-clay text-paper hover:bg-slate disabled:bg-slate transition"
              >
                {formStatus === "loading" && "Enviando..."}
                {formStatus === "success" && "¡Enviado!"}
                {formStatus === "error" && "Error al enviar"}
                {formStatus === "idle" && "Enviar"}
              </button>

              {formStatus === "success" && (
                <p className="font-archivo text-sm text-clay mt-4">
                  Gracias. Nos comunicaremos pronto.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-fraunces text-4xl italic text-ink mb-16">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-12">
            {[
              {
                q: "¿Cuáles son tus horarios?",
                a: "Respondemos consultas de lunes a viernes. Intentamos responder en 24 horas."
              },
              {
                q: "¿Cuál es el proceso?",
                a: "Comenzamos con una consulta para entender tu proyecto. Luego presentamos una propuesta."
              },
              {
                q: "¿Hacen auditorías?",
                a: "Sí. Hacemos auditorías de diseño y mejoras para proyectos existentes."
              },
              {
                q: "¿Cuánto cuesta?",
                a: "Los precios varían según el alcance. Contacta para una propuesta personalizada."
              }
            ].map((item, idx) => (
              <div key={idx} className="border-t border-bone pt-8">
                <h3 className="font-archivo font-semibold text-slate mb-4">
                  {item.q}
                </h3>
                <p className="font-archivo text-ink leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
