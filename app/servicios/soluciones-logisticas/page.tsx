"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function SolucionesLogisticas() {
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
              Soluciones{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Logísticas
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Diseñamos e implementamos sistemas logísticos inteligentes que optimizan tu cadena de suministro y
              distribución.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-slate-800/50 border-t border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transformación Logística</h2>
              <div className="space-y-4">
                {[
                  "Optimización de cadena de suministro end-to-end",
                  "Reducción de costos de almacenamiento e inventario",
                  "Mejora en tiempos de entrega",
                  "Mayor visibilidad y control en tiempo real",
                  "Cumplimiento normativo y trazabilidad completa",
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Soluciones Logísticas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Gestión de Inventarios Inteligente",
                    description: "Sistemas automáticos que optimizan niveles de stock basados en demanda predictiva.",
                  },
                  {
                    title: "Sistemas de Tracking y Trazabilidad",
                    description: "Visibilidad en tiempo real de productos desde origen hasta destino final.",
                  },
                  {
                    title: "Optimización de Rutas de Distribución",
                    description: "Algoritmos avanzados que reducen distancias, combustible y tiempos de entrega.",
                  },
                  {
                    title: "Almacén Automatizado",
                    description: "Integración de sistemas de automatización para mejorar velocidad y precisión.",
                  },
                  {
                    title: "Integración con Proveedores",
                    description: "Conexión automática con sistemas de proveedores para abastecimiento eficiente.",
                  },
                  {
                    title: "Análisis de Datos Logísticos",
                    description: "Reportes y analytics para toma de decisiones informadas.",
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
              <h2 className="text-3xl font-bold mb-6">Beneficios Medibles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { metric: "40%", desc: "Reducción en costos de logística" },
                  { metric: "60%", desc: "Mejora en precisión de inventario" },
                  { metric: "35%", desc: "Reducción en tiempos de entrega" },
                  { metric: "50%", desc: "Menos errores en distribución" },
                  { metric: "25%", desc: "Aumento en capacidad de almacén" },
                  { metric: "100%", desc: "Trazabilidad de productos" },
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-xl border border-slate-700 bg-slate-900/50">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{item.metric}</div>
                    <p className="text-slate-300">{item.desc}</p>
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
          <h2 className="text-4xl font-bold mb-6">Optimiza tu logística hoy</h2>
          <p className="text-lg text-slate-300 mb-10">Descubre cómo podemos mejorar tu cadena de suministro</p>
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
