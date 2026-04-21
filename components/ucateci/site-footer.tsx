"use client"

import { useMemo, useState } from "react"
import {
  ArrowRight,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { StatusBanner } from "@/components/ucateci/status-banner"
import { usePersistedForm } from "@/hooks/use-persisted-form"

const columns = [
  {
    title: "Institucional",
    links: [
      { label: "Mision y vision", href: "#nosotros" },
      { label: "Historia", href: "#historia" },
      { label: "Rectoria", href: "#nosotros" },
      { label: "Transparencia", href: "#transparencia" },
      { label: "Identidad catolica", href: "#nosotros" },
      { label: "Memoria institucional", href: "#noticias" },
    ],
  },
  {
    title: "Academico",
    links: [
      { label: "Facultades", href: "#oferta" },
      { label: "Carreras de grado", href: "#oferta" },
      { label: "Postgrados", href: "#oferta" },
      { label: "Educacion continua", href: "#servicios" },
      { label: "Calendario academico", href: "#calendario" },
      { label: "Biblioteca digital", href: "#recursos" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Aula virtual", href: "#acceso" },
      { label: "Portal del estudiante", href: "#acceso" },
      { label: "Correo institucional", href: "#acceso" },
      { label: "Pagos en linea", href: "#acceso" },
      { label: "Bolsa de empleo", href: "#servicios" },
      { label: "Clinica universitaria", href: "#servicios" },
    ],
  },
  {
    title: "Campus y alianzas",
    links: [
      { label: "Campus La Vega", href: "#campus" },
      { label: "Campus Constanza", href: "/campus/constanza" },
      { label: "CEBUCATECI", href: "/campus/ceb" },
      { label: "Alianza con colegios", href: "#campus" },
      { label: "Extensiones y sedes", href: "#campus" },
    ],
  },
]

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
]

const newsletterInitialState = { email: "" }

export function SiteFooter() {
  const { value, setValue, reset } = usePersistedForm("ucateci-newsletter", newsletterInitialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ tone: "success" | "error" | "info"; title: string; description?: string } | null>(null)

  const isValidEmail = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email.trim()), [value.email])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isValidEmail) {
      setStatus({
        tone: "error",
        title: "Escribe un correo valido antes de suscribirte.",
        description: "Por ejemplo: nombre@correo.com",
      })
      return
    }

    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setStatus({
        tone: "error",
        title: "No pudimos completar la suscripcion.",
        description: "Verifica tu conexion y vuelve a intentarlo. Conservamos tu correo en este dispositivo.",
      })
      return
    }

    setIsSubmitting(true)
    setStatus({
      tone: "info",
      title: "Guardando tu suscripcion...",
      description: "En unos segundos quedaras registrado para recibir novedades de UCATECI.",
    })

    try {
      await new Promise((resolve) => setTimeout(resolve, 900))
      reset()
      setStatus({
        tone: "success",
        title: "Listo, ya quedaste suscrito.",
        description: "Recibiras noticias, convocatorias y eventos relevantes. No enviamos spam.",
      })
      toast.success("Suscripcion completada", {
        description: "Ahora recibiras novedades institucionales en tu correo.",
      })
    } catch {
      setStatus({
        tone: "error",
        title: "No pudimos guardar tu correo.",
        description: "Intentalo nuevamente en unos minutos.",
      })
      toast.error("No pudimos completar la suscripcion", {
        description: "Verifica tu conexion e intentalo otra vez.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer
      id="contacto"
      className="relative overflow-hidden bg-brand-navy-deep text-brand-cream"
      aria-labelledby="footer-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-noise opacity-20" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[-7rem] top-12 h-56 w-56 rounded-full bg-brand-gold/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-7rem] top-40 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl" />
      <h2 id="footer-heading" className="sr-only">
        Pie de pagina
      </h2>

      <div className="relative border-b border-brand-cream/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-brand-cream">Mantente al dia con UCATECI</h3>
            <p className="mt-2 max-w-md text-sm text-brand-cream/70">
              Recibe noticias institucionales, convocatorias academicas y eventos directamente en tu correo.
            </p>
            <p className="mt-3 text-xs text-brand-cream/55">Te enviaremos solo contenido relevante, sin saturar tu bandeja.</p>
          </div>

          <div className="space-y-4">
            {status ? <StatusBanner tone={status.tone} title={status.title} description={status.description} /> : null}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-2">
                <label htmlFor="newsletter-email" className="text-sm font-medium text-brand-cream">
                  Correo para recibir novedades
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={value.email}
                  onChange={(event) => setValue({ email: event.target.value })}
                  placeholder="nombre@correo.com"
                  className="h-12 rounded-2xl border-brand-cream/20 bg-brand-cream/10 px-5 text-brand-cream placeholder:text-brand-cream/45"
                  aria-invalid={value.email.length > 0 && !isValidEmail}
                />
                <p className={`text-xs ${value.email.length > 0 && !isValidEmail ? "text-rose-200" : "text-brand-cream/60"}`}>
                  {value.email.length > 0 && !isValidEmail
                    ? "Revisa el formato del correo para poder registrarte."
                    : "Usaremos este correo para avisarte sobre admisiones, eventos y recursos."}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" className="rounded-full bg-brand-red px-6 text-accent-foreground hover:bg-brand-red/90" disabled={!isValidEmail || isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Spinner className="h-4 w-4" />
                      Guardando...
                    </>
                  ) : (
                    <>
                      Suscribirme
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full border-brand-cream/25 bg-transparent text-brand-cream hover:bg-brand-cream hover:text-brand-navy"
                  onClick={() => {
                    reset()
                    setStatus({
                      tone: "info",
                      title: "Campo limpiado.",
                      description: "Puedes escribir otro correo cuando quieras.",
                    })
                  }}
                  disabled={!value.email}
                >
                  Limpiar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy ring-2 ring-brand-gold ring-offset-2 ring-offset-brand-navy-deep">
              <GraduationCap className="h-6 w-6 text-brand-gold" aria-hidden="true" />
            </div>
            <div>
              <div className="font-serif text-xl font-bold text-brand-cream">UCATECI</div>
              <div className="text-[11px] uppercase tracking-widest text-brand-gold">Fides et Ratio</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-brand-cream/70">
            Universidad Catolica Tecnologica del Cibao. Institucion de educacion superior al servicio de la verdad, formando lideres con excelencia academica, valores cristianos y compromiso social desde 1983.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-brand-cream/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
              Av. Universitaria, esq. Calle Victor Estrella, La Vega 41000, R.D.
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
              (809) 573-1020
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
              info@ucateci.edu.do
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cream/20 text-brand-cream/80 transition-colors hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="md:col-span-2">
            <h3 className="mb-4 font-serif font-semibold text-brand-gold">{column.title}</h3>
            <ul className="space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-brand-cream/75 transition-colors hover:text-brand-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <h3 className="mb-4 font-serif font-semibold text-brand-gold">Atencion</h3>
          <ul className="space-y-2.5 text-sm text-brand-cream/75">
            <li>Lun - Vie: 8:00 a.m. - 6:00 p.m.</li>
            <li>Sabados: 8:00 a.m. - 1:00 p.m.</li>
            <li>Domingos: Cerrado</li>
          </ul>
          <a href="#contacto" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-gold transition-colors hover:text-brand-cream">
            Ver opciones de contacto
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="relative border-t border-brand-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-brand-cream/60 sm:px-6 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} UCATECI · Universidad Catolica Tecnologica del Cibao. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#contacto" className="hover:text-brand-gold">
              Politica de privacidad
            </a>
            <a href="#contacto" className="hover:text-brand-gold">
              Terminos de uso
            </a>
            <a href="#contacto" className="hover:text-brand-gold">
              Accesibilidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
