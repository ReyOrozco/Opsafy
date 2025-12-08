"use client"

import type React from "react"

import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"

export default function NotificationForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simular envío de formulario
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setEmail("")
      setName("")
      setMessage("")
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error("Error al enviar formulario:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {submitted ? (
        <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
          <CheckCircle size={24} className="text-green-500" />
          <div>
            <p className="font-semibold text-green-400">¡Gracias por tu interés!</p>
            <p className="text-sm text-slate-300">Nos pondremos en contacto pronto</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div>
            <textarea
              placeholder="¿Cuál es tu pregunta o necesidad?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            {loading ? "Enviando..." : "Enviar Notificación"}
          </button>
        </form>
      )}
    </div>
  )
}
