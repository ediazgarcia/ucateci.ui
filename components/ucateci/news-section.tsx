"use client"

import { useState } from "react"
import { ArrowRight, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Category = "Todas" | "Institucional" | "Académica" | "Investigación" | "Cultural"

const news: {
  title: string
  excerpt: string
  category: Exclude<Category, "Todas">
  date: string
  featured?: boolean
}[] = [
  {
    title:
      "UCATECI gradúa a más de 800 nuevos profesionales en acto solemne",
    excerpt:
      "La promoción más numerosa del año recibió sus títulos en una ceremonia celebrada en el campus central. La rectoría destacó el compromiso académico de los egresados.",
    category: "Institucional",
    date: "14 Abr 2026",
    featured: true,
  },
  {
    title:
      "Facultad de Ciencias de la Salud inaugura laboratorio de simulación clínica",
    excerpt:
      "El nuevo espacio cuenta con maniquíes de alta fidelidad para formación práctica en Medicina, Enfermería y Odontología.",
    category: "Académica",
    date: "08 Abr 2026",
  },
  {
    title:
      "Convocatoria abierta para el Fondo de Investigación UCATECI 2026",
    excerpt:
      "Docentes e investigadores pueden aplicar hasta el 30 de mayo con proyectos en salud, tecnología y ciencias sociales.",
    category: "Investigación",
    date: "02 Abr 2026",
  },
  {
    title:
      "Semana Cultural de la Virgen de la Altagracia llena el campus de arte",
    excerpt:
      "Conciertos, exposiciones y jornadas espirituales conmemoraron a la patrona de la República Dominicana.",
    category: "Cultural",
    date: "21 Ene 2026",
  },
  {
    title:
      "Admisiones abiertas para el cuatrimestre mayo-agosto 2026",
    excerpt:
      "La universidad abre inscripciones para carreras de grado, postgrado y técnico superior. Cupos limitados.",
    category: "Institucional",
    date: "28 Mar 2026",
  },
  {
    title:
      "UCATECI firma acuerdo con hospital docente para prácticas de Medicina",
    excerpt:
      "El convenio ampliará las plazas de rotación clínica en especialidades de alta demanda.",
    category: "Académica",
    date: "18 Mar 2026",
  },
]

const categories: Category[] = [
  "Todas",
  "Institucional",
  "Académica",
  "Investigación",
  "Cultural",
]

export function NewsSection() {
  const [filter, setFilter] = useState<Category>("Todas")
  const filtered = news.filter(
    (n) => filter === "Todas" || n.category === filter
  )
  const [featured, ...rest] = filtered

  return (
    <section id="noticias" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-brand-red font-semibold mb-2">
              Noticias y avisos
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy text-balance">
              Lo que está pasando en UCATECI
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Actualidad institucional, logros académicos, investigación y vida
              universitaria.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar noticias por categoría"
            className="flex flex-wrap gap-2"
          >
            {categories.map((c) => {
              const active = filter === c
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(c)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-brand-navy text-brand-cream border-brand-navy"
                      : "bg-card text-foreground/70 border-border hover:border-brand-navy/30 hover:text-brand-navy"
                  )}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
            No hay noticias en esta categoría por el momento.
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured */}
            {featured && (
              <article className="lg:col-span-2 group rounded-2xl overflow-hidden border border-border bg-card flex flex-col">
                <div className="relative aspect-[16/9] bg-brand-navy overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-deep to-brand-red/60"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 40%, white 1px, transparent 0)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-brand-navy">
                      <Tag className="h-3 w-3" aria-hidden="true" />
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-cream/15 text-brand-cream border border-brand-cream/20 px-3 py-1 text-xs">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {featured.date}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy leading-tight text-balance">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-navy transition-colors"
                  >
                    Leer nota completa
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )}

            {/* Rest */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {rest.slice(0, 3).map((n) => (
                <article
                  key={n.title}
                  className="group rounded-2xl border border-border bg-card p-5 flex gap-4 hover:border-brand-navy/30 transition-colors"
                >
                  <div className="h-20 w-20 shrink-0 rounded-lg bg-gradient-to-br from-brand-navy to-brand-navy-deep flex items-center justify-center">
                    <span className="font-serif text-2xl text-brand-gold">
                      {n.date.split(" ")[0]}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-red">
                        {n.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        · {n.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-brand-navy leading-snug group-hover:text-brand-red transition-colors">
                      {n.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {n.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            className="border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-brand-cream"
          >
            Ver todas las noticias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
