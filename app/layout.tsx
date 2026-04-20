import type { Metadata } from "next"
import { Open_Sans, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Body — limpia, legible, neutra institucional
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
})

// Display — geometrica robusta, evoca el wordmark "UCATECI"
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portal UCATECI — Universidad Católica del Cibao",
  description:
    "Portal oficial interactivo de la UCATECI. Acceso a Aula Virtual, Portal de Estudiantes, oferta académica, biblioteca, noticias y servicios universitarios.",
  generator: "v0.app",
  keywords: [
    "UCATECI",
    "Universidad Católica del Cibao",
    "Universidad Católica Tecnológica del Cibao",
    "La Vega",
    "República Dominicana",
    "Aula Virtual",
    "Portal Estudiantes",
    "Oferta Académica",
  ],
}

export const viewport = {
  themeColor: "#1F5BA8",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${openSans.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
