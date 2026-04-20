import Link from "next/link"
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Heart } from "lucide-react"

const QUICK_LINKS = [
  { name: "Acerca del CEB", href: "/campus/ceb#acerca" },
  { name: "Oferta Académica", href: "/campus/ceb#academics" },
  { name: "Vida Estudiantil", href: "/campus/ceb#vida" },
  { name: "Admisiones", href: "/campus/ceb#contacto" },
]

const ACADEMIC_PROGRAMS = [
  { name: "Nivel Inicial", href: "/campus/ceb#academics" },
  { name: "Primaria", href: "/campus/ceb#academics" },
  { name: "Secundaria", href: "/campus/ceb#academics" },
  { name: "Bachillerato", href: "/campus/ceb#academics" },
]

const CONTACT_INFO = [
  { icon: MapPin, text: "Bonao, República Dominicana" },
  { icon: Phone, text: "+1 (809) 123-4567" },
  { icon: Mail, text: "info@cebucateci.edu.do" },
]

export function CEBFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CEBUCATECI</h3>
                <p className="text-sm text-primary-foreground/80">Centro Educacional de Bonao</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Excelencia académica y formación integral desde 1971.
              Preparando líderes para el futuro con valores cristianos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programas Académicos</h4>
            <ul className="space-y-2">
              {ACADEMIC_PROGRAMS.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className="flex items-center">
                  <info.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span className="text-primary-foreground/80 text-sm">{info.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/campus/ceb#contacto"
                className="inline-flex items-center text-sm bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Solicitar Información
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © 2024 CEBUCATECI - Centro Educacional de Bonao.
              <span className="inline-flex items-center ml-2">
                Hecho con <Heart className="w-4 h-4 mx-1 text-red-400" /> para la educación
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/" className="text-primary-foreground/80 hover:text-white transition-colors">
                ← Volver a UCATECI
              </Link>
              <Link href="/campus/ceb#contacto" className="text-primary-foreground/80 hover:text-white transition-colors">
                Contacto
              </Link>
              <Link href="/campus/ceb#acerca" className="text-primary-foreground/80 hover:text-white transition-colors">
                Acerca
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}