"use client"

import Link from "next/link"

export default function EliminacionDatos() {
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Eliminación de Datos Personales</h1>
          <p className="text-xl text-slate-300 mb-12">Derechos de privacidad y solicitud de eliminación</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Tu Derecho a la Eliminación</h2>
              <p className="text-slate-300 leading-relaxed">
                De conformidad con el GDPR (Reglamento General de Protección de Datos), CCPA (Ley de Privacidad del
                Consumidor de California) y otras regulaciones similares, tienes derecho a solicitar la eliminación de
                tus datos personales que hemos recopilado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Datos que Podemos Eliminar</h2>
              <p className="text-slate-300 leading-relaxed mb-4">Podemos eliminar los siguientes datos personales:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Nombre y información de contacto</li>
                <li>Historial de comunicaciones y mensajes</li>
                <li>Datos de proyectos y consultas realizadas</li>
                <li>Información de navegación y cookies</li>
                <li>Cualquier otra información personal almacenada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Datos que Podemos Conservar</h2>
              <p className="text-slate-300 leading-relaxed mb-4">Por obligaciones legales, podemos retener:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Registros de transacciones para propósitos fiscales</li>
                <li>Información requerida por ley (cumplimiento normativo)</li>
                <li>Datos anonimizados para estadísticas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Proceso de Solicitud</h2>
              <p className="text-slate-300 leading-relaxed mb-4">Para solicitar la eliminación de tus datos:</p>
              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li>Envía una solicitud a: privacidad@opsafy.com</li>
                <li>Proporciona tu nombre completo y correo electrónico</li>
                <li>Describe qué datos deseas eliminar</li>
                <li>Incluye una foto de tu identificación para verificar tu identidad</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Tiempo de Respuesta</h2>
              <p className="text-slate-300 leading-relaxed">
                Responderemos a tu solicitud dentro de 24 horas hábiles para confirmar la identidad. Una vez verificado,
                procederemos a eliminar tus datos dentro de 30 días calendarios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Confirmación de Eliminación</h2>
              <p className="text-slate-300 leading-relaxed">
                Recibirás un certificado digital confirmando la eliminación completa de tus datos personales de nuestros
                sistemas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Alternativas de Contacto</h2>
              <p className="text-slate-300 leading-relaxed mb-4">También puedes contactarnos por:</p>
              <ul className="space-y-2 text-slate-300">
                <li>WhatsApp: +52 81 1985 9387</li>
                <li>Email: privacidad@opsafy.com</li>
                <li>Formulario en línea en nuestro sitio web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Derechos Adicionales</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Además del derecho a la eliminación, tienes derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Acceder a una copia de tus datos personales</li>
                <li>Solicitar la rectificación de datos incorrectos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Limitar el uso de tus datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Protección de Datos</h2>
              <p className="text-slate-300 leading-relaxed">
                Todos tus datos son tratados con máxima confidencialidad. Tu solicitud será procesada de manera segura y
                solo por personal autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contacto y Reclamaciones</h2>
              <p className="text-slate-300 leading-relaxed">
                Si tienes preguntas o deseas presentar una reclamación, contacta a nuestra oficina de privacidad:
              </p>
              <div className="mt-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <p className="text-slate-300">Email: privacidad@opsafy.com</p>
                <p className="text-slate-300">WhatsApp: +52 81 1985 9387</p>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 rounded-xl border border-slate-700 bg-slate-800/50">
            <p className="text-slate-400 text-sm">
              Última actualización: Enero 2025. Este documento cumple con GDPR, CCPA y regulaciones de privacidad de
              datos aplicables.
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
