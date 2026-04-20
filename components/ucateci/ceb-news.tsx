"use client"

import { useState } from "react"
import { ArrowRight, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Category = "Todas" | "Avisos" | "Académicas" | "Eventos"

const news: {
  title: string
  excerpt: string
  category: Exclude<Category, "Todas">
  date: string
  featured?: boolean
}[] = [
  {
    title: "Nuevo ciclo de inscripciones 2026-2027 en el CEB",
    excerpt:
      "Abierta la matrícula para el próximo año escolar con cupos limitados en primaria y secundaria.",
    category: "Avisos",
    date: "18 Abr 2026",
    featured: true,
  },
  {
    title: "Jornada deportiva interclases en el campus",
    excerpt:
      "Este fin de semana, los estudiantes competirán en fútbol, voleibol y atletismo.",
    category: "Eventos",
    date: "12 Abr 2026",
  },
  {
    title: "Entrega de resultados de primer trimestre",
    excerpt:
      "Las calificaciones ya están disponibles en el portal del estudiante para revisión familiar.",
    category: "Académicas",
    date: "05 Abr 2026",
  },
  {
    title: "Taller de orientación vocacional para los padres",
    excerpt:
      "Convocatoria dirigida a familias para apoyar la elección de bachillerato y formación integral.",
    category: "Eventos",
    date: "28 Mar 2026",
  },
  {
    title: "Suspensión de clases por climatología el viernes",
    excerpt:
      "Debido a condiciones meteorológicas, el colegio permanecerá cerrado. Se reanuda el lunes.",
    category: "Avisos",
    date: "20 Mar 2026",
  },
]

const categories: Category[] = ["Todas", "Avisos", "Académicas", "Eventos"]

export function CEBNews() {
  const [filter, setFilter] = useState<Category>("Todas")
  const filtered = news.filter((n) => filter === "Todas" || n.category === filter)
  const [featured, ...rest] = filtered

  return (
    <section id="noticias" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              Noticias y avisos
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-balance">
              Lo último del Centro Educacional Bonao
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Mantente informado con los avisos, eventos y novedades académicas del CEB.
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
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-foreground/70 border-border hover:border-primary/30 hover:text-primary"
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
            {featured && (
              <article className="lg:col-span-2 group rounded-2xl overflow-hidden border border-border bg-card flex flex-col">
                <div className="relative aspect-[16/9] bg-primary overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/60"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "radial-gradient(circle at 30% 40%, white 1px, transparent 0)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-primary">
                      <Tag className="h-3 w-3" aria-hidden="true" />
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-foreground/10 text-primary border border-primary/20 px-3 py-1 text-xs">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {featured.date}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary leading-tight text-balance">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/90 transition-colors"
                  >
                    Leer nota completa
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {rest.slice(0, 3).map((n) => (
                <article
                  key={n.title}
                  className="group rounded-2xl border border-border bg-card p-5 flex gap-4 hover:border-primary/30 transition-colors"
                >
                  <div className="h-20 w-20 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-serif text-2xl text-primary">
                      {n.date.split(" ")[0]}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">
                        {n.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground">· {n.date}</span>
                    </div>
                    <h3 className="font-semibold text-primary leading-snug group-hover:text-primary/90 transition-colors">
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
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Ver todas las noticias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
