import type React from "react"
import type { Metadata } from "next"
import { GeistSans, GeistMono } from "geist/font"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "OPSAFY | Soluciones de Automatización y Desarrollo Digital",
  description:
    "Soluciones tecnológicas, administrativas y logísticas para impulsar el crecimiento de tu empresa con acompañamiento humano, transparencia y resultados.",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "OPSAFY | Soluciones de Automatización",
    description: "Transformamos tu negocio con tecnología y visión",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#0095FF" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
