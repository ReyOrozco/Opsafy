"use client"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contacto() {
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
              Ponte en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Contacto</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Estamos listos para hablar sobre tu proyecto y cómo podemos ayudarte
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-slate-800/50 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-slate-400">info@opsafy.com</p>
                      <p className="text-slate-400">soporte@opsafy.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-slate-400">+1 (123) 456-7890</p>
                      <p className="text-slate-400">Lunes a Viernes: 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Ubicación</h3>
                      <p className="text-slate-400">Calle Principal 123</p>
                      <p className="text-slate-400">Ciudad, País</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold mb-4">Síguenos</h3>
                <div className="flex gap-4">
                  {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6 p-8 rounded-xl border border-slate-700 bg-slate-900/50">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Servicio de Interés</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 transition-colors">
                    <option>Selecciona un servicio</option>
                    <option>Desarrollo Digital</option>
                    <option>Consultoría Administrativa</option>
                    <option>Soluciones Logísticas</option>
                    <option>Aceleración Tecnológica</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Mensaje</label>
                  <textarea
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto"
                    rows={5}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
                >
                  Enviar Mensaje
                </button>

                <p className="text-sm text-slate-500 text-center">Responderemos tu mensaje en menos de 24 horas</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "¿Cuál es el tiempo de implementación?",
                a: "Varía según el proyecto, pero típicamente entre 2-6 meses. Hacemos una evaluación personalizada.",
              },
              {
                q: "¿Ofrecen soporte post-implementación?",
                a: "Sí, ofrecemos soporte completo, mantenimiento y mejoras continuas según tus necesidades.",
              },
              {
                q: "¿Cuál es el costo de los servicios?",
                a: "El costo depende de la complejidad y alcance. Ofrecemos consulta gratuita para cotizar.",
              },
              {
                q: "¿Trabajan con empresas pequeñas?",
                a: "Sí, trabajamos con empresas de todos los tamaños. Adaptamos nuestros servicios a tu presupuesto.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-xl border border-slate-700 bg-slate-800/50">
                <h3 className="font-bold mb-3 text-cyan-400">{faq.q}</h3>
                <p className="text-slate-400">{faq.a}</p>
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
