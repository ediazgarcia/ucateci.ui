"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, GraduationCap } from "lucide-react"
import { CAMPUS_DATA, type CampusData } from "@/lib/data"

export function CampusFooter({ campusId }: { campusId: "ceb" | "constanza" }) {
  const campus = CAMPUS_DATA[campusId]

  const isCEB = campus.id === "ceb"

  const links = {
    acerca: [
      { label: "Historia", href: `/campus/${campus.id}#acerca` },
      { label: "Misión y Visión", href: `/campus/${campus.id}#acerca` },
      { label: "Valores", href: `/campus/${campus.id}#acerca` },
      { label: "Directorio", href: `/campus/${campus.id}#contacto` },
    ],
    academico: isCEB ? [
      { label: "Nivel Inicial", href: `/campus/${campus.id}#academics` },
      { label: "Primaria", href: `/campus/${campus.id}#academics` },
      { label: "Secundaria", href: `/campus/${campus.id}#academics` },
      { label: "Bachillerato", href: `/campus/${campus.id}#academics` },
    ] : [
      { label: "Grado", href: `/campus/${campus.id}#academics` },
      { label: "Posgrado", href: `/campus/${campus.id}#academics` },
      { label: "Diplomados", href: `/campus/${campus.id}#academics` },
      { label: "Educación Continua", href: `/campus/${campus.id}#academics` },
    ],
    enlaces: [
      { label: "Portal Institucional", href: "/" },
      { label: "Tour Virtual", href: `/campus/${campus.id}#tour` },
      { label: "Vida Estudiantil", href: `/campus/${campus.id}#vida` },
      { label: "Admisiones", href: `/campus/${campus.id}#contacto` },
    ]
  }

  return (
    <footer className="bg-brand-navy pt-20 pb-10 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <Link href={`/campus/${campus.id}`} className="flex items-center gap-3 mb-6">
              {isCEB ? (
                <>
                  <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white p-1">
                    <Image src="/Logo-UCATECI.png" alt="Logo" fill className="object-contain" />
                  </div>
                  <div className="font-bold text-xl text-white">CEBUCATECI</div>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-brand-navy" />
                  </div>
                  <div>
                    <div className="font-bold text-lg leading-tight text-white">UCATECI</div>
                    <div className="text-xs text-brand-gold">Constanza</div>
                  </div>
                </>
              )}
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              {isCEB 
                ? "Formando líderes con carácter y principios desde 1971. Excelencia académica y valores cristianos."
                : "Impulsando el desarrollo sostenible a través de la educación superior, la investigación y la innovación."
              }
            </p>
            <div className="flex gap-4">
              {([
                { Icon: Facebook, name: "Facebook" },
                { Icon: Instagram, name: "Instagram" },
                { Icon: Twitter, name: "Twitter" },
                { Icon: Youtube, name: "YouTube" },
              ] as const).map(({ Icon, name }) => (
                <a
                  key={name}
                  href="#"
                  aria-label={`Visitar ${name}`}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors text-white/80"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white border-b border-white/10 pb-2 inline-block">Sobre Nosotros</h4>
            <ul className="space-y-3">
              {links.acerca.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/70 hover:text-brand-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white border-b border-white/10 pb-2 inline-block">
              {isCEB ? "Niveles Educativos" : "Oferta Académica"}
            </h4>
            <ul className="space-y-3">
              {links.academico.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/70 hover:text-brand-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white border-b border-white/10 pb-2 inline-block">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-tight">{campus.header.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-white/70 text-sm">{campus.header.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href={`mailto:${campus.header.email}`} className="text-white/70 text-sm hover:text-brand-gold transition-colors">
                  {campus.header.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} UCATECI - {campus.name}. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Políticas de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
