"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-lg">
                O
              </div>
              <span className="text-xl font-bold">OPSAFY</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {["Servicios", "Nosotros", "Valores", "Testimonios", "Contacto"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors">
                Contactar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-800">
              {["Servicios", "Nosotros", "Valores", "Testimonios", "Contacto"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  {item}
                </Link>
              ))}
              <button className="w-full mt-4 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors">
                Contactar
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Tecnología con visión para{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  transformar
                </span>{" "}
                y vivir mejor
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Soluciones tecnológicas, administrativas y logísticas para impulsar el crecimiento de tu empresa con
                acompañamiento humano, transparencia y resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                  Descubre cómo optimizar tu negocio
                  <ArrowRight size={20} />
                </button>
                <button className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors border border-slate-700">
                  Conoce nuestros servicios
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">+500</div>
                  <div className="text-sm text-slate-400">Proyectos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">+200</div>
                  <div className="text-sm text-slate-400">Clientes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">+10</div>
                  <div className="text-sm text-slate-400">Años</div>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative h-96 lg:h-full rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-slate-800 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-slate-700">OPSAFY</div>
                <p className="text-slate-500 mt-2">Soluciones de Automatización</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background gradient elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-slate-800/50 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nuestros Servicios</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para impulsar el crecimiento de tu empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Desarrollo Digital",
                description:
                  "Creamos soluciones digitales innovadoras que transforman la manera en que tu empresa opera y se conecta con sus clientes.",
                items: [
                  "Desarrollo de aplicaciones web y móviles",
                  "Sistemas de gestión empresarial",
                  "E-commerce y plataformas digitales",
                ],
              },
              {
                title: "Consultoría Administrativa",
                description:
                  "Optimizamos tus procesos administrativos y organizacionales para maximizar la eficiencia y productividad.",
                items: [
                  "Análisis y optimización de procesos",
                  "Restructuración organizacional",
                  "Implementación de sistemas de calidad",
                ],
              },
              {
                title: "Soluciones Logísticas",
                description:
                  "Diseñamos e implementamos sistemas logísticos inteligentes que optimizan tu cadena de suministro y distribución.",
                items: [
                  "Gestión de inventarios inteligente",
                  "Sistemas de tracking y trazabilidad",
                  "Optimización de rutas de distribución",
                ],
              },
              {
                title: "Aceleración Tecnológica",
                description:
                  "Impulsamos la transformación digital de tu empresa con tecnologías emergentes y estrategias de innovación.",
                items: [
                  "Estrategia de transformación digital",
                  "Implementación de IA y Machine Learning",
                  "Migración a la nube",
                ],
              },
              {
                title: "Automatización de Procesos",
                description:
                  "Automatizamos procesos manuales para reducir costos, mejorar la calidad y acelerar la ejecución.",
                items: [
                  "RPA (Robotic Process Automation)",
                  "Automatización de flujos de trabajo",
                  "Integración de sistemas",
                ],
              },
              {
                title: "Transformación Digital",
                description:
                  "Te acompañamos en todo tu proceso de transformación digital para que tu negocio sea más competitivo.",
                items: [
                  "Evaluación de madurez digital",
                  "Roadmap de transformación",
                  "Capacitación y cambio organizacional",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-900/80 transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Sobre Nosotros</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Opsafy nace de la palabra griega opsia, que significa visión. Es un símbolo de nuestra convicción por
                construir un futuro claro, estratégico y consciente en cada proyecto que emprendemos.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Además, Opsafy está formado por los iniciales de quienes inspiran esta visión: O – Orozco | P – Pesina |
                S – Sofía | A – Alain | F – Fernanda | Y – Yesenia.
              </p>
              <p className="text-slate-300 italic border-l-4 border-cyan-500 pl-6">
                "En Opsafy creemos que la tecnología debe servir a un propósito mayor: mejorar la vida de las personas y
                potenciar el crecimiento de las empresas con soluciones que realmente importen."
              </p>
            </div>
            <div className="order-1 lg:order-2 h-96 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-slate-800 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-slate-700 mb-2">Visión</div>
                <p className="text-slate-500">Estrategia y Consciencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="valores" className="py-24 bg-slate-800/50 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nuestros Valores</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">Los principios que guían nuestro trabajo</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Compromiso Humano",
                description: "Nuestros clientes, nuestros aliados, y nuestra familia son parte del mismo camino.",
              },
              {
                title: "Transparencia",
                description:
                  "Actuamos con honestidad, claridad y ética en cada proyecto. Construimos confianza, no solo soluciones.",
              },
              {
                title: "Innovación con Propósito",
                description:
                  "Usamos la tecnología no solo para automatizar, sino para mejorar la calidad de vida y facilitar lo importante.",
              },
              {
                title: "Pasión por Construir",
                description:
                  "Nos mueve la energía de hacer que las cosas funcionen, de resolver, de mejorar continuamente.",
              },
              {
                title: "Responsabilidad",
                description:
                  "Cada solución que entregamos tiene nuestro nombre y nuestra promesa. Cumplimos, sin excusas.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-slate-700 bg-slate-900/50 hover:border-cyan-500/50 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Listo para transformar tu negocio</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Descubre cómo podemos ayudarte a alcanzar tus objetivos con soluciones personalizadas y acompañamiento
            experto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
              Contactar Ahora
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors border border-slate-700">
              Ver casos de estudio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-bold">O</div>
                <span className="font-bold">OPSAFY</span>
              </div>
              <p className="text-slate-400 text-sm">
                Soluciones de automatización y desarrollo para transformar tu negocio
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Servicios</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Desarrollo Digital
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Consultoría
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Logística
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Aceleración Tecnológica
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contacto</h3>
              <p className="text-slate-400 text-sm mb-2">
                <strong>Email:</strong> info@opsafy.com
              </p>
              <p className="text-slate-400 text-sm">
                <strong>WhatsApp:</strong> +1 (123) 456-7890
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">© 2025 Opsafy. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
