"use client"

import Link from "next/link"

export default function Privacidad() {
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-12">Política de Privacidad</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Información que Recopilamos</h2>
              <p className="text-slate-300 leading-relaxed mb-4">Recopilamos información de varias maneras:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Información que proporcionas voluntariamente en formularios</li>
                <li>Información de uso del sitio (dirección IP, páginas visitadas, etc.)</li>
                <li>Información de contacto proporcionada en consultas</li>
                <li>Datos de sesión para mejorar tu experiencia</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Uso de la Información</h2>
              <p className="text-slate-300 leading-relaxed mb-4">Usamos la información para:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Responder a tus consultas y peticiones</li>
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Enviar actualizaciones sobre nuestros servicios</li>
                <li>Analizar el uso del sitio para mejorarlo</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Protección de Datos</h2>
              <p className="text-slate-300 leading-relaxed">
                Implementamos medidas técnicas y organizativas para proteger tu información personal contra acceso no
                autorizado, alteración, divulgación o destrucción. Utilizamos encriptación SSL en nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Compartir Información</h2>
              <p className="text-slate-300 leading-relaxed">
                No compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea requerido
                por ley o para proveedores de servicios necesarios bajo acuerdos de confidencialidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
              <p className="text-slate-300 leading-relaxed">
                Nuestro sitio utiliza cookies para mejorar tu experiencia. Puedes controlar las cookies a través de la
                configuración de tu navegador. Al continuar usando el sitio, aceptas el uso de cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Derechos del Usuario</h2>
              <p className="text-slate-300 leading-relaxed mb-4">Tienes derecho a:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Acceder a tus datos personales</li>
                <li>Solicitar la corrección de datos incorrectos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Enlaces a Terceros</h2>
              <p className="text-slate-300 leading-relaxed">
                Nuestro sitio contiene enlaces a otros sitios web. OPSAFY no es responsable por las prácticas de
                privacidad de sitios externos. Te recomendamos revisar la política de privacidad de cualquier sitio que
                visites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Retención de Datos</h2>
              <p className="text-slate-300 leading-relaxed">
                Retenemos tus datos personales solo mientras sea necesario para proporcionar nuestros servicios o
                cumplir con obligaciones legales. Puedes solicitar la eliminación en cualquier momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Cambios en la Política</h2>
              <p className="text-slate-300 leading-relaxed">
                Nos reservamos el derecho de actualizar esta política de privacidad. Los cambios serán publicados en
                esta página y serán efectivos inmediatamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contacto</h2>
              <p className="text-slate-300 leading-relaxed">
                Si tienes preguntas sobre nuestra política de privacidad o deseas ejercer tus derechos, contáctanos en:
              </p>
              <div className="mt-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <p className="text-slate-300">Email: privacidad@opsafy.com</p>
                <p className="text-slate-300">Dirección: Calle Principal 123, Ciudad, País</p>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 rounded-xl border border-slate-700 bg-slate-800/50">
            <p className="text-slate-400 text-sm">
              Última actualización: Enero 2025. Esta política cumple con GDPR, CCPA y otras regulaciones de privacidad
              aplicables.
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
