"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function ConsultoriaAdministrativa() {
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
              Consultoría{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Administrativa
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Optimizamos tus procesos administrativos y organizacionales para maximizar la eficiencia y productividad
              de tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-slate-800/50 border-t border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestro Enfoque</h2>
              <div className="space-y-4">
                {[
                  "Diagnóstico exhaustivo de procesos administrativos actuales",
                  "Identificación de ineficiencias y oportunidades de mejora",
                  "Diseño de procesos optimizados y estandarizados",
                  "Implementación con capacitación del equipo",
                  "Monitoreo continuo y ajustes según resultados",
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Servicios de Consultoría</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Análisis y Optimización de Procesos",
                    description: "Evaluación detallada de flujos de trabajo para identificar y eliminar ineficiencias.",
                  },
                  {
                    title: "Restructuración Organizacional",
                    description: "Rediseño de estructuras organizacionales para mejorar comunicación y eficiencia.",
                  },
                  {
                    title: "Implementación de Sistemas de Calidad",
                    description: "Certificaciones ISO y sistemas de calidad adaptados a tu industria.",
                  },
                  {
                    title: "Mejora Continua",
                    description: "Implementación de metodologías Lean y Six Sigma para optimización constante.",
                  },
                  {
                    title: "Gestión de Recursos Humanos",
                    description: "Optimización de procesos de selección, capacitación y evaluación de personal.",
                  },
                  {
                    title: "Gestión Financiera y Presupuestaria",
                    description: "Análisis y optimización de costos y flujos financieros.",
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
              <h2 className="text-3xl font-bold mb-6">Resultados Esperados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Reducción de costos operacionales (15-40%)",
                  "Aumento de productividad del equipo (20-35%)",
                  "Reducción de tiempos de procesos (30-50%)",
                  "Mejora en la calidad de servicios",
                  "Mayor satisfacción del cliente",
                  "Mejor retención del talento",
                ].map((result, index) => (
                  <div key={index} className="flex gap-3 p-4 rounded-lg border border-slate-700 bg-slate-900/50">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <p className="text-slate-300">{result}</p>
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
          <h2 className="text-4xl font-bold mb-6">Optimiza tu operación administrativa</h2>
          <p className="text-lg text-slate-300 mb-10">Nuestros consultores expertos están listos para ayudarte</p>
          <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-cyan-500/20 mx-auto">
            Solicitar Consulta Gratuita
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
