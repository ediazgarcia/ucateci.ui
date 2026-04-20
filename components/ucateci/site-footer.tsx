"use client"

import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const columns = [
  {
    title: "Institucional",
    links: [
      "Misión y Visión",
      "Historia",
      "Rectoría",
      "Transparencia",
      "Identidad Católica",
      "Memoria Institucional",
    ],
  },
  {
    title: "Académico",
    links: [
      "Facultades",
      "Carreras de Grado",
      "Postgrados",
      "Educación Continua",
      "Calendario Académico",
      "Biblioteca Digital",
    ],
  },
  {
    title: "Servicios",
    links: [
      "Aula Virtual",
      "Portal del Estudiante",
      "Correo Institucional",
      "Pagos en Línea",
      "Bolsa de Empleo",
      "Clínica Universitaria",
    ],
  },
  {
    title: "Campus y Alianzas",
    links: [
      "Campus La Vega",
      "Campus Constanza",
      "Centro Educacional Bonao (CEBUCATECI)",
      "Alianza con colegios",
      "Extensiones y sedes",
    ],
  },
]

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
]

export function SiteFooter() {
  return (
    <footer
      id="contacto"
      className="bg-brand-navy-deep text-brand-cream"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Pie de página
      </h2>

      {/* Newsletter */}
      <div className="border-b border-brand-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-serif text-2xl font-bold text-brand-cream">
              Mantente al día con UCATECI
            </h3>
            <p className="mt-1 text-brand-cream/70 text-sm max-w-md">
              Recibe noticias institucionales, convocatorias académicas y eventos
              directamente en tu correo.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="tu@correo.com"
              className="flex-1 rounded-full bg-brand-cream/10 border border-brand-cream/20 px-5 py-3 text-sm text-brand-cream placeholder:text-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <Button
              type="submit"
              className="rounded-full bg-brand-red hover:bg-brand-red/90 text-accent-foreground px-6"
            >
              Suscribirme
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-brand-navy flex items-center justify-center ring-2 ring-brand-gold ring-offset-2 ring-offset-brand-navy-deep">
              <GraduationCap className="h-6 w-6 text-brand-gold" aria-hidden="true" />
            </div>
            <div>
              <div className="font-serif text-xl font-bold text-brand-cream">
                UCATECI
              </div>
              <div className="text-[11px] uppercase tracking-widest text-brand-gold">
                Fides et Ratio
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-brand-cream/70 leading-relaxed">
            Universidad Católica Tecnológica del Cibao. Institución de educación
            superior al servicio de la verdad, formando líderes con excelencia
            académica, valores cristianos y compromiso social desde 1983.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-brand-cream/80">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-brand-gold mt-0.5 shrink-0" aria-hidden="true" />
              Av. Universitaria, esq. Calle Víctor Estrella, La Vega 41000, R.D.
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-gold shrink-0" aria-hidden="true" />
              (809) 573-1020
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-gold shrink-0" aria-hidden="true" />
              info@ucateci.edu.do
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-9 w-9 rounded-full border border-brand-cream/20 flex items-center justify-center text-brand-cream/80 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-colors"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((c) => (
          <div key={c.title} className="md:col-span-2">
            <h3 className="font-serif font-semibold text-brand-gold mb-4">
              {c.title}
            </h3>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-brand-cream/75 hover:text-brand-gold transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <h3 className="font-serif font-semibold text-brand-gold mb-4">
            Atención
          </h3>
          <ul className="space-y-2.5 text-sm text-brand-cream/75">
            <li>Lun – Vie: 8:00 a.m. – 6:00 p.m.</li>
            <li>Sábados: 8:00 a.m. – 1:00 p.m.</li>
            <li>Domingos: Cerrado</li>
          </ul>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-gold hover:text-brand-cream transition-colors"
          >
            Ver mapa del campus
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-brand-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-cream/60">
          <p>
            © {new Date().getFullYear()} UCATECI · Universidad Católica
            Tecnológica del Cibao. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="hover:text-brand-gold">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-brand-gold">
              Términos de uso
            </a>
            <a href="#" className="hover:text-brand-gold">
              Accesibilidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
