import { Megaphone, Sparkles } from "lucide-react"

const messages = [
  "Admisiones abiertas cuatrimestre mayo-agosto 2026",
  "Convocatoria Fondo de Investigación hasta el 30 de mayo",
  "Jornada de Investigación Científica el 22 de abril",
  "Nuevos postgrados en Ciencias de la Salud disponibles",
  "Becas deportivas y culturales UCATECI 2026",
]

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-brand-navy-deep via-brand-navy to-brand-navy">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(212,175,55,0.12),transparent_50%)]" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="relative flex items-center gap-6 py-2.5 text-sm font-medium">
        <div className="flex items-center gap-2 pl-6 shrink-0">
          <span className="flex h-8 items-center gap-2 rounded-full bg-brand-gold/15 px-4 ring-1 ring-brand-gold/20">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
            <span className="uppercase tracking-wider text-brand-gold font-semibold">Anuncios</span>
          </span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="marquee flex gap-20 whitespace-nowrap">
            {[...messages, ...messages].map((m, i) => (
              <span key={i} className="inline-flex items-center gap-4 text-brand-cream/95 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}