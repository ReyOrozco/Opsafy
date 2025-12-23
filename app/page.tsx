"use client"

import Link from "next/link"
import { ChevronRight, Code, Zap, TrendingUp, Users, Award, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-slate-950">
                O
              </div>
              <span className="text-xl font-bold">OPSAFY</span>
            </div>

            <nav className="hidden md:flex gap-8">
              <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Inicio
              </Link>
              <Link
                href="/servicios/desarrollo-digital"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Servicios
              </Link>
              <Link href="/casos-estudio" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Casos
              </Link>
              <Link href="/nosotros" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Nosotros
              </Link>
              <Link href="/contacto" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Contacto
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-cyan-400">
                ☰
              </button>
              <Link
                href="/contacto"
                className="hidden md:inline-block bg-cyan-500 text-slate-950 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <Link href="/" className="block text-slate-300 hover:text-cyan-400">
                Inicio
              </Link>
              <Link href="/servicios/desarrollo-digital" className="block text-slate-300 hover:text-cyan-400">
                Servicios
              </Link>
              <Link href="/casos-estudio" className="block text-slate-300 hover:text-cyan-400">
                Casos
              </Link>
              <Link href="/nosotros" className="block text-slate-300 hover:text-cyan-400">
                Nosotros
              </Link>
              <Link href="/contacto" className="block text-slate-300 hover:text-cyan-400">
                Contacto
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Tecnología con <span className="text-cyan-400">visión</span> para transformar y vivir mejor
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Soluciones tecnológicas, administrativas y logísticas para impulsar el crecimiento de tu empresa con
                acompañamiento humano, transparencia y resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="bg-cyan-500 text-slate-950 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Descubre cómo optimizar tu negocio <ChevronRight size={20} />
                </Link>
                <Link
                  href="/casos-estudio"
                  className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Ver casos de estudio <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 h-full flex flex-col justify-center items-center text-center">
                <Code size={64} className="text-cyan-400 mb-4" />
                <p className="text-slate-300">Tu imagen o logo de demostración aquí</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-20 pt-20 border-t border-slate-800">
            <div>
              <div className="text-3xl font-bold text-cyan-400">+500</div>
              <div className="text-slate-400 text-sm">Proyectos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">+200</div>
              <div className="text-slate-400 text-sm">Clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">+10</div>
              <div className="text-slate-400 text-sm">Años</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-slate-400 text-sm">Soporte</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">99%</div>
              <div className="text-slate-400 text-sm">Satisfacción</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">5⭐</div>
              <div className="text-slate-400 text-sm">Calificación</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Ofrecemos soluciones integrales para impulsar el crecimiento de tu empresa
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Desarrollo Digital",
                desc: "Aplicaciones web y móviles personalizadas",
                icon: Code,
                href: "/servicios/desarrollo-digital",
              },
              {
                title: "Soluciones Logísticas",
                desc: "Optimización de procesos y cadena de suministro",
                icon: TrendingUp,
                href: "/servicios/soluciones-logisticas",
              },
              {
                title: "Consultoría Administrativa",
                desc: "Estrategia empresarial y transformación digital",
                icon: Users,
                href: "/servicios/consultoria-administrativa",
              },
              {
                title: "Aceleración Tecnológica",
                desc: "Implementación de tecnología de punta",
                icon: Zap,
                href: "/servicios/aceleracion-tecnologica",
              },
              {
                title: "Automatización de Procesos",
                desc: "Aumenta eficiencia y reduce costos operativos",
                icon: Award,
                href: "/servicios/desarrollo-digital",
              },
              {
                title: "Transformación Digital",
                desc: "Moderniza tu negocio con soluciones innovadoras",
                icon: TrendingUp,
                href: "/servicios/aceleracion-tecnologica",
              },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group bg-slate-950 border border-slate-800 p-8 rounded-xl hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <service.icon size={40} className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Por qué elegirnos</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                "Experiencia comprobada en más de 500 proyectos exitosos",
                "Equipo altamente especializado y certificado",
                "Soluciones personalizadas para cada cliente",
                "Transparencia total en procesos y resultados",
                "Soporte continuo y acompañamiento humano",
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight size={16} className="text-slate-950" />
                  </div>
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-slate-800 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-center">
                <Award size={64} className="text-cyan-400 mx-auto mb-4" />
                <p className="text-slate-300">Certificaciones y reconocimientos internacionales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl text-slate-300 mb-8">Contacta con nuestro equipo de expertos hoy mismo</p>
          <Link
            href="/contacto"
            className="inline-block bg-cyan-500 text-slate-950 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
          >
            Iniciar Consulta Gratuita
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold mb-4">OPSAFY</h3>
              <p className="text-slate-400 text-sm">Soluciones tecnológicas para el crecimiento empresarial</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Servicios</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/servicios/desarrollo-digital" className="hover:text-cyan-400 transition-colors">
                    Desarrollo Digital
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/consultoria-administrativa" className="hover:text-cyan-400 transition-colors">
                    Consultoría
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/soluciones-logisticas" className="hover:text-cyan-400 transition-colors">
                    Logística
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/nosotros" className="hover:text-cyan-400 transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/casos-estudio" className="hover:text-cyan-400 transition-colors">
                    Casos de Estudio
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-cyan-400 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/politica-de-privacidad" className="hover:text-cyan-400 transition-colors">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-y-condiciones" className="hover:text-cyan-400 transition-colors">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="/eliminacion-datos" className="hover:text-cyan-400 transition-colors">
                    Eliminación de Datos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">© 2025 Opsafy. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://facebook.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Facebook
              </a>
              <a href="https://twitter.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://instagram.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
