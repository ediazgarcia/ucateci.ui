"use client"

import { Calendar, Clock, MapPin, ArrowUpRight } from "lucide-react"

const events = [
  {
    day: "22",
    month: "Abr",
    weekday: "Miércoles",
    title: "Jornada de Investigación Científica 2026",
    time: "08:30 a.m. – 04:00 p.m.",
    place: "Auditorio Padre Camilo Thomén",
    tag: "Académico",
  },
  {
    day: "05",
    month: "May",
    weekday: "Martes",
    title: "Feria de Admisiones: Carreras de Grado",
    time: "09:00 a.m. – 02:00 p.m.",
    place: "Plaza central del campus",
    tag: "Admisiones",
  },
  {
    day: "18",
    month: "May",
    weekday: "Lunes",
    title: "Misa universitaria por el Día del Estudiante",
    time: "11:00 a.m.",
    place: "Capilla Santa María, UCATECI",
    tag: "Pastoral",
  },
  {
    day: "07",
    month: "Jun",
    weekday: "Domingo",
    title: "Graduación Extraordinaria · Promoción 2025-III",
    time: "04:00 p.m.",
    place: "Gran Teatro del Cibao",
    tag: "Institucional",
  },
]

export function EventsCalendar() {
  return (
    <section
      id="eventos"
      className="relative py-16 md:py-24 bg-brand-navy text-brand-cream overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-gold via-brand-red to-brand-gold" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2">
              Próximos eventos
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance">
              Agenda universitaria
            </h2>
            <p className="mt-2 text-brand-cream/75 max-w-xl">
              Actividades académicas, culturales, pastorales e institucionales
              para toda la comunidad UCATECI.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-brand-cream transition-colors"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Ver calendario completo
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="grid md:grid-cols-2 gap-4">
          {events.map((e) => (
            <li key={e.title}>
              <a
                href="#"
                className="group flex items-stretch gap-5 rounded-2xl bg-brand-navy-deep/50 border border-brand-cream/10 p-5 hover:border-brand-gold/40 hover:bg-brand-navy-deep/80 transition-colors"
              >
                <div className="flex flex-col items-center justify-center rounded-xl bg-brand-cream text-brand-navy shrink-0 w-20 py-3">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-brand-red">
                    {e.month}
                  </span>
                  <span className="font-serif text-3xl font-bold leading-none">
                    {e.day}
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {e.weekday}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="inline-block text-[10px] uppercase tracking-widest font-semibold rounded-full bg-brand-gold/20 text-brand-gold px-2.5 py-0.5 mb-2">
                    {e.tag}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-brand-cream leading-snug group-hover:text-brand-gold transition-colors">
                    {e.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-brand-cream/70">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
                      {e.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
                      {e.place}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-brand-cream/40 group-hover:text-brand-gold self-start transition-colors"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
