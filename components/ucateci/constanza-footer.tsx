import Link from "next/link"
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Heart, Leaf, Droplets, Mountain, Tractor, Globe } from "lucide-react"

const QUICK_LINKS = [
  { name: "Acerca del Campus", href: "/campus/constanza#acerca" },
  { name: "Oferta Académica", href: "/campus/constanza#academics" },
  { name: "Vida Estudiantil", href: "/campus/constanza#vida" },
  { name: "Admisiones", href: "/campus/constanza#contacto" },
]

const ACADEMIC_PROGRAMS = [
  { name: "Grado", href: "/campus/constanza#academics" },
  { name: "Posgrado", href: "/campus/constanza#academics" },
  { name: "Investigación", href: "/campus/constanza#academics" },
  { name: "Diplomados", href: "/campus/constanza#academics" },
]

const CONTACT_INFO = [
  { icon: MapPin, text: "Constanza, República Dominicana" },
  { icon: Phone, text: "+1 (809) 539-2836" },
  { icon: Mail, text: "info@constanza.ucateci.edu.do" },
]

const STRATEGIC_AREAS = [
  { icon: Tractor, name: "Agricultura" },
  { icon: Droplets, name: "Gestión del Agua" },
  { icon: Mountain, name: "Ambiente" },
  { icon: Globe, name: "Agroecoturismo" },
]

export function ConstanzaFooter() {
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
                <h3 className="text-xl font-bold">UCATECI</h3>
                <p className="text-sm text-primary-foreground/80">Constanza</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Educación sostenible para el desarrollo. Formando profesionales
              especializados en agricultura, gestión del agua, ambiente y agroecoturismo.
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

          {/* Strategic Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ámbitos Estratégicos</h4>
            <div className="space-y-3">
              {STRATEGIC_AREAS.map((area, index) => (
                <div key={index} className="flex items-center">
                  <area.icon className="w-4 h-4 mr-3 text-primary-foreground/80" />
                  <span className="text-primary-foreground/80 text-sm">{area.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-primary-foreground/80 text-sm">
                © 2026 UCATECI-Constanza. Todos los derechos reservados.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Términos de Uso
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>para Constanza</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}