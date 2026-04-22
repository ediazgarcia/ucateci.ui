"use client"

import { useState } from "react"
import { ArrowRight, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CAMPUS_DATA, type CampusData } from "@/lib/data"

type Category = "Todas" | "Avisos" | "Académicas" | "Eventos"

export function CampusNews({ campusId }: { campusId: "ceb" | "constanza" }) {
  const campus = CAMPUS_DATA[campusId]

  const isCEB = campus.id === "ceb"
  const [filter, setFilter] = useState<Category>("Todas")
  
  const categories: Category[] = ["Todas", "Avisos", "Académicas", "Eventos"]

  const newsItems = isCEB ? [
    {
      title: "Nuevo ciclo de inscripciones 2026-2027 en el CEB",
      excerpt: "Abierta la matrícula para el próximo año escolar con cupos limitados en primaria y secundaria.",
      category: "Avisos" as Category,
      date: "18 Abr 2026",
      featured: true,
    },
    {
      title: "Jornada deportiva interclases en el campus",
      excerpt: "Este fin de semana, los estudiantes competirán en fútbol, voleibol y atletismo.",
      category: "Eventos" as Category,
      date: "12 Abr 2026",
    },
    {
      title: "Entrega de resultados de primer trimestre",
      excerpt: "Las calificaciones ya están disponibles en el portal del estudiante para revisión familiar.",
      category: "Académicas" as Category,
      date: "05 Abr 2026",
    },
    {
      title: "Taller de orientación vocacional para los padres",
      excerpt: "Convocatoria dirigida a familias para apoyar la elección de bachillerato y formación integral.",
      category: "Eventos" as Category,
      date: "28 Mar 2026",
    },
  ] : [
    {
      title: "Nueva pasantía de investigación en agricultura sostenible",
      excerpt: "Abierta la convocatoria para participar en el proyecto de invernaderos inteligentes con tecnología IoT.",
      category: "Académicas" as Category,
      date: "15 Abr 2026",
      featured: true,
    },
    {
      title: "Feria de Emprendimiento Universitario 2026",
      excerpt: "Estudiantes presentarán sus proyectos innovadores enfocados en soluciones para el sector agropecuario.",
      category: "Eventos" as Category,
      date: "10 Abr 2026",
    },
    {
      title: "Apertura de inscripciones para postgrado",
      excerpt: "Conoce los requisitos para nuestra nueva Maestría en Gestión Sostenible de Recursos Hídricos.",
      category: "Avisos" as Category,
      date: "02 Abr 2026",
    },
    {
      title: "Conferencia Internacional sobre Biodiversidad",
      excerpt: "Contaremos con ponentes de la región para debatir sobre la conservación del ecosistema de Constanza.",
      category: "Eventos" as Category,
      date: "25 Mar 2026",
    },
  ]

  const filtered = newsItems.filter((n) => filter === "Todas" || n.category === filter)
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
              Lo último de {campus.shortName}
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Mantente informado con los avisos, eventos y novedades {isCEB ? "académicas" : "universitarias"} de nuestro campus.
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
                  aria-selected={active ? true : false}
                  onClick={() => setFilter(c)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
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
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-10 text-center text-muted-foreground">
            No hay noticias en esta categoría por el momento.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featured && (
              <article className="md:col-span-2 lg:col-span-2 group rounded-3xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="relative aspect-[16/9] lg:aspect-[21/9] bg-gradient-to-br from-brand-navy to-brand-navy-deep overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,white_1px,transparent_0)] bg-[length:18px_18px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/90 px-3 py-1 text-xs font-bold text-brand-navy uppercase tracking-wider">
                      <Tag className="h-3 w-3" aria-hidden="true" />
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white border border-white/20 px-3 py-1 text-xs font-medium">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {featured.date}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary leading-tight text-balance group-hover:text-brand-navy-light transition-colors mb-4">
                      {featured.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {featured.excerpt}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors w-fit"
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
                  className="group rounded-2xl border border-border bg-card p-6 flex flex-col sm:flex-row lg:flex-row gap-5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="h-16 w-16 md:h-20 md:w-20 shrink-0 rounded-xl bg-primary/5 flex flex-col items-center justify-center border border-primary/10">
                    <span className="font-serif text-2xl md:text-3xl text-primary font-bold">
                      {n.date.split(" ")[0]}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground">
                      {n.date.split(" ")[1]}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-accent">
                        {n.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-primary leading-snug group-hover:text-primary/80 transition-colors mb-2">
                      {n.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {n.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="border-primary/20 hover:bg-primary/5 rounded-full px-8">
            Ver todas las noticias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
