"use client"

import Link from "next/link"
import { Heart, Zap, Target, Users } from "lucide-react"

export default function Nosotros() {
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
              Nuestra{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Historia</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Opsafy nace de la palabra griega "opsis", que significa visión. Es un símbolo de nuestra convicción por
              construir un futuro claro, estratégico y consciente.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-slate-800/50 border-t border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Quiénes Somos</h2>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              Opsafy es una empresa de consultoría y desarrollo tecnológico fundada por profesionales apasionados por la
              innovación y la transformación digital. Nuestro equipo está compuesto por expertos en distintas áreas:
              desarrollo, automatización, logística y consultoría administrativa.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Además, Opsafy está formado por los iniciales de quienes inspiran esta visión: O – Orozco | P – Pesina | S
              – Sofía | A – Alain | F – Fernanda | Y – Yesenia.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
            <div className="p-8 rounded-xl border border-slate-700 bg-slate-900/50">
              <p className="text-lg text-slate-300 italic">
                "En Opsafy creemos que la tecnología debe servir a un propósito mayor: mejorar la vida de las personas y
                potenciar el crecimiento de las empresas con soluciones que realmente importen."
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Compromiso Humano",
                  description: "Nuestros clientes, aliados y familia son parte del mismo camino.",
                },
                {
                  icon: Target,
                  title: "Transparencia",
                  description: "Honestidad y ética en cada proyecto. Construimos confianza, no solo soluciones.",
                },
                {
                  icon: Zap,
                  title: "Innovación",
                  description: "Usamos tecnología para mejorar la calidad de vida y facilitar lo importante.",
                },
                {
                  icon: Users,
                  title: "Pasión por Construir",
                  description: "Nos mueve hacer que las cosas funcionen, resolver y mejorar continuamente.",
                },
              ].map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div key={index} className="p-6 rounded-xl border border-slate-700 bg-slate-900/50">
                    <IconComponent className="text-cyan-400 mb-3" size={28} />
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-slate-400">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Por Qué Elegirnos</h2>
            <div className="space-y-4">
              {[
                "Más de 10 años de experiencia en transformación digital",
                "+500 proyectos exitosos en diferentes industrias",
                "+200 clientes satisfechos confiando en nosotros",
                "Equipo experto en tecnologías modernas",
                "Acompañamiento personalizado en cada proyecto",
                "Compromiso con resultados medibles y ROI",
                "Soporte continuo y mejora permanente",
                "Transparencia y comunicación clara en todo momento",
              ].map((reason, index) => (
                <div key={index} className="flex gap-3 p-4 rounded-lg border border-slate-700 bg-slate-900/50">
                  <span className="text-cyan-400 font-bold flex-shrink-0">✓</span>
                  <p className="text-slate-300">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Equipo</h2>
          <p className="text-lg text-slate-300 text-center mb-8">
            Profesionales apasionados dedicados a transformar tu negocio
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {["Orozco", "Pesina", "Sofía", "Alain", "Fernanda", "Yesenia"].map((name) => (
              <div
                key={name}
                className="text-center p-6 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-cyan-500/50 transition-all"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">{name[0]}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{name}</h3>
                <p className="text-sm text-slate-400">Experto en transformación digital</p>
              </div>
            ))}
          </div>
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
