import Link from "next/link"

export default function Page() {
  return (
    <div>
      {/* ... existing code until footer ... */}

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* ... existing footer content ... */}
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/terminos-y-condiciones" className="hover:text-cyan-400 transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/politica-de-privacidad" className="hover:text-cyan-400 transition-colors">
                    Política de Privacidad
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
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
