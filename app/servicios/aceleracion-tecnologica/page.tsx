"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function AceleracionTecnologica() {
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
              Aceleración{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Tecnológica
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Impulsamos la transformación digital de tu empresa con tecnologías emergentes y estrategias de innovación.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-slate-800/50 border-t border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tu Transformación Digital Comienza Aquí</h2>
              <div className="space-y-4">
                {[
                  "Evaluación de madurez digital de tu organización",
                  "Identificación de oportunidades de tecnología emergente",
                  "Estrategia de transformación digital alineada con objetivos de negocio",
                  "Implementación de IA, Machine Learning y automación",
                  "Capacitación y cambio organizacional",
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Tecnologías Emergentes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Inteligencia Artificial y Machine Learning",
                    description:
                      "Implementación de modelos de IA para predicción, automatización y toma de decisiones inteligentes.",
                  },
                  {
                    title: "Cloud Computing y Migración a la Nube",
                    description: "Migración segura a plataformas cloud para mayor escalabilidad y flexibilidad.",
                  },
                  {
                    title: "Big Data y Analytics",
                    description: "Análisis avanzado de datos para insights que impulsen el crecimiento.",
                  },
                  {
                    title: "IoT (Internet of Things)",
                    description: "Conexión y análisis de dispositivos inteligentes para operaciones en tiempo real.",
                  },
                  {
                    title: "Ciberseguridad Avanzada",
                    description: "Protección de tu infraestructura contra amenazas de seguridad.",
                  },
                  {
                    title: "Blockchain y Seguridad",
                    description: "Soluciones descentralizadas para mayor transparencia y seguridad.",
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
              <h2 className="text-3xl font-bold mb-6">Nuestro Proceso de Transformación</h2>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Diagnóstico", desc: "Evaluación exhaustiva de tu situación actual" },
                  { step: "02", title: "Estrategia", desc: "Definición de roadmap de transformación" },
                  { step: "03", title: "Piloto", desc: "Implementación de proyecto piloto" },
                  { step: "04", title: "Escalamiento", desc: "Expansión a toda la organización" },
                  { step: "05", title: "Optimización", desc: "Mejora continua y ajustes" },
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
          <h2 className="text-4xl font-bold mb-6">Acelera tu transformación tecnológica</h2>
          <p className="text-lg text-slate-300 mb-10">Nuestros expertos te guiarán en cada paso del camino</p>
          <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-cyan-500/20 mx-auto">
            Iniciar Transformación
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
