"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function DesarrolloDigital() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-lg">O</div>
            <span className="text-xl font-bold">OPSAFY</span>
          </Link>
          <Link href="/" className="text-slate-300 hover:text-white transition-colors">
            ← Volver
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Desarrollo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Creamos soluciones digitales innovadoras que transforman la manera en que tu empresa opera y se conecta
              con sus clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-slate-800/50 border-t border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">¿Por qué elegir nuestro servicio?</h2>
              <div className="space-y-4">
                {[
                  "Soluciones personalizadas adaptadas a tus necesidades específicas",
                  "Equipo experto en tecnologías modernas y escalables",
                  "Acompañamiento integral desde el diseño hasta la implementación",
                  "Soporte continuo y mantenimiento profesional",
                  "Metodología ágil y transparencia en cada etapa",
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Servicios Incluidos</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Desarrollo de Aplicaciones Web",
                    description:
                      "Aplicaciones web modernas, responsivas y de alto rendimiento construidas con las últimas tecnologías.",
                  },
                  {
                    title: "Desarrollo de Aplicaciones Móviles",
                    description:
                      "Apps nativas e híbridas para iOS y Android que ofrecen experiencias de usuario excepcionales.",
                  },
                  {
                    title: "Sistemas de Gestión Empresarial",
                    description:
                      "Soluciones ERP personalizadas que integran todos los procesos de tu negocio en una plataforma unificada.",
                  },
                  {
                    title: "E-commerce y Plataformas Digitales",
                    description: "Tiendas online completas con sistemas de pago, inventario y logística integrados.",
                  },
                  {
                    title: "API y Integraciones",
                    description: "Conexiones seguras y eficientes entre tus sistemas y aplicaciones de terceros.",
                  },
                  {
                    title: "Consultoría Tecnológica",
                    description:
                      "Asesoramiento experto en arquitectura, tecnologías y mejores prácticas de desarrollo.",
                  },
                ].map((service, index) => (
                  <div key={index} className="p-6 rounded-xl border border-slate-700 bg-slate-900/50">
                    <h3 className="text-lg font-bold mb-3 text-cyan-400">{service.title}</h3>
                    <p className="text-slate-300">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestro Proceso</h2>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Descubrimiento", desc: "Comprendemos tus necesidades y objetivos de negocio" },
                  { step: "02", title: "Diseño", desc: "Creamos wireframes y prototipos validados con usuarios" },
                  { step: "03", title: "Desarrollo", desc: "Implementamos con código limpio y escalable" },
                  { step: "04", title: "Testing", desc: "Pruebas exhaustivas para garantizar calidad" },
                  { step: "05", title: "Despliegue", desc: "Lanzamiento seguro en ambiente de producción" },
                  { step: "06", title: "Soporte", desc: "Mantenimiento continuo y mejoras posteriores" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 pb-4 border-b border-slate-700 last:border-0">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-cyan-400">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para transformar tu negocio digitalmente?</h2>
          <p className="text-lg text-slate-300 mb-10">Contáctanos para una consulta gratuita sin compromisos</p>
          <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-cyan-500/20 mx-auto">
            Contactar Ahora
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
          <p>© 2025 OPSAFY. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
