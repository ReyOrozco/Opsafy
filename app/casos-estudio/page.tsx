"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CasosEstudio() {
  const cases = [
    {
      id: 1,
      title: "Transformación Digital de Empresa Logística",
      industry: "Logística",
      challenge: "Sistema de gestión obsoleto, procesos manuales lentos, falta de visibilidad en envíos",
      solution: "Implementación de plataforma cloud integrada con tracking en tiempo real",
      results: [
        "Reducción de 45% en tiempo de procesamiento",
        "Aumento de 60% en visibilidad de envíos",
        "Ahorro de $250k anuales en operaciones",
        "Incremento de satisfacción de clientes a 95%",
      ],
    },
    {
      id: 2,
      title: "E-commerce Escalable para Retailer Nacional",
      industry: "E-commerce",
      challenge: "Plataforma antigua que caía bajo alta demanda, experiencia de usuario pobre",
      solution: "Desarrollo de plataforma nueva con arquitectura cloud escalable y UX moderno",
      results: [
        "Incremento de 300% en capacidad de transacciones",
        "Reducción de 50% en tiempo de carga",
        "Aumento de 150% en conversiones",
        "Mejor experiencia de usuario medida en NPS",
      ],
    },
    {
      id: 3,
      title: "Implementación de IA para Predicción de Demanda",
      industry: "Manufactura",
      challenge: "Sobrestock y stock-out recurrentes, pronósticos basados en intuición",
      solution: "Implementación de modelo de ML para predicción de demanda con datos históricos",
      results: [
        "Precisión de pronóstico mejorada a 92%",
        "Reducción de 35% en costos de inventario",
        "Disminución de 80% en desabastecimientos",
        "Mejora de flujo de caja por $500k",
      ],
    },
    {
      id: 4,
      title: "Automatización de Procesos Administrativos",
      industry: "Consultoría",
      challenge: "Procesos administrativos manuales consumían 40% del tiempo del equipo",
      solution: "Implementación de RPA y automatización de flujos de trabajo",
      results: [
        "Automatización de 70% de tareas administrativas",
        "Liberación de 400 horas/mes de tiempo de equipo",
        "Reducción de errores en 95%",
        "ROI positivo en 6 meses",
      ],
    },
    {
      id: 5,
      title: "Reestructuración Organizacional y Optimización",
      industry: "Servicios Financieros",
      challenge: "Organización con duplicidad de funciones, comunicación deficiente",
      solution: "Diagnóstico, rediseño organizacional e implementación de nuevos procesos",
      results: [
        "Reducción de costos de 25% sin despidos",
        "Mejora en tiempo de respuesta a clientes de 60%",
        "Incremento de productividad de 35%",
        "Mejor satisfacción de empleados",
      ],
    },
    {
      id: 6,
      title: "Integración de Sistemas para Grupo Empresarial",
      industry: "Multiindustria",
      challenge: "Múltiples sistemas desconectados, falta de visibilidad consolidada",
      solution: "Desarrollo de integración centralizada con APIs y data warehouse",
      results: [
        "Integración de 12 sistemas distintos",
        "Reportes consolidados en tiempo real",
        "Reducción de 70% en manual data entry",
        "Mejor toma de decisiones por executives",
      ],
    },
  ]

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
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Casos de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Estudio</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Conoce cómo hemos transformado negocios en diferentes industrias
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-24 bg-slate-800/50 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="p-8 rounded-xl border border-slate-700 bg-slate-900/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-sm text-cyan-400 mb-4">
                  {caseStudy.industry}
                </div>

                <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-300 mb-2">Desafío</h4>
                    <p className="text-slate-400">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-300 mb-2">Solución</h4>
                    <p className="text-slate-400">{caseStudy.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-300 mb-3">Resultados</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex gap-3 text-slate-400">
                          <span className="text-cyan-400 font-bold flex-shrink-0">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Quieres resultados similares?</h2>
          <p className="text-lg text-slate-300 mb-10">Contáctanos para una consulta personalizada</p>
          <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-cyan-500/20 mx-auto">
            Agendar Consulta
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
