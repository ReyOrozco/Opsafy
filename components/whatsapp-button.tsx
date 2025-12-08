"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const whatsappNumber = "528119859387" // México +52 81 1985 9387
  const message = "Hola Opsafy, me gustaría conocer más sobre vuestros servicios"
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="absolute right-16 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Contáctanos por WhatsApp
      </span>
    </a>
  )
}
