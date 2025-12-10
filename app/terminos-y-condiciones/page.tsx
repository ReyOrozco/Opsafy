"use client"

import Link from "next/link"

export default function Terminos() {
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

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-12">Términos y Condiciones</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Aceptación de Términos</h2>
              <p className="text-slate-300 leading-relaxed">
                Al acceder y utilizar el sitio web de OPSAFY, aceptas estar sujeto a estos términos y condiciones. Si no
                aceptas alguna parte de estos términos, te pedimos que no utilices nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Servicio de Consultoría</h2>
              <p className="text-slate-300 leading-relaxed">
                OPSAFY proporciona servicios de consultoría, desarrollo y automatización. Todos nuestros servicios se
                proporcionan "tal cual" sin garantías. Nos esforzamos por mantener la más alta calidad en nuestro
                trabajo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Propiedad Intelectual</h2>
              <p className="text-slate-300 leading-relaxed">
                Todo el contenido del sitio web, incluyendo texto, gráficos, logos y software, es propiedad de OPSAFY o
                de sus proveedores de contenido. Queda prohibida la reproducción sin consentimiento escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitación de Responsabilidad</h2>
              <p className="text-slate-300 leading-relaxed">
                En ningún caso OPSAFY será responsable por daños indirectos, incidentales, especiales, consecuentes o
                punitivos que resulten de tu uso o incapacidad de usar los servicios, incluso si OPSAFY ha sido
                notificado de la posibilidad de tales daños.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Obligaciones del Cliente</h2>
              <p className="text-slate-300 leading-relaxed mb-4">El cliente se compromete a:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Proporcionar información precisa y completa</li>
                <li>Cuidar la confidencialidad de credenciales de acceso</li>
                <li>Cumplir con todas las leyes y regulaciones aplicables</li>
                <li>No utilizar los servicios para actividades ilegales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Confidencialidad</h2>
              <p className="text-slate-300 leading-relaxed">
                OPSAFY se compromete a mantener la confidencialidad de toda la información proporcionada por el cliente.
                No compartiremos información confidencial con terceros sin consentimiento escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Terminación de Servicios</h2>
              <p className="text-slate-300 leading-relaxed">
                OPSAFY se reserva el derecho de rescindir servicios si el cliente viola estos términos. El cliente puede
                rescindir en cualquier momento con notificación escrita.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Cambios en Términos</h2>
              <p className="text-slate-300 leading-relaxed">
                OPSAFY se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán
                efectivos inmediatamente al ser publicados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Ley Aplicable</h2>
              <p className="text-slate-300 leading-relaxed">
                Estos términos se regirán por las leyes de tu país. Cualquier disputa será resuelta en los tribunales
                competentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contacto</h2>
              <p className="text-slate-300 leading-relaxed">
                Para preguntas sobre estos términos, contáctanos en info@opsafy.com
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 rounded-xl border border-slate-700 bg-slate-800/50">
            <p className="text-slate-400 text-sm">
              Última actualización: Enero 2025. Estos términos han sido redactados para proporcionar una guía clara
              sobre nuestros servicios y responsabilidades.
            </p>
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
