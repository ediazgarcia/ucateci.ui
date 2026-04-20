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
    title: "Admisiones 2026 abiertas en UCATECI-Constanza",
    excerpt:
      "Abierta la convocatoria para programas de grado y posgrado en desarrollo sostenible. Cupos limitados disponibles.",
    category: "Avisos",
    date: "18 Abr 2026",
    featured: true,
  },
  {
    title: "Proyecto de investigación en agricultura sostenible",
    excerpt:
      "Estudiantes del recinto participan en proyecto de investigación sobre técnicas agrícolas innovadoras.",
    category: "Académicas",
    date: "12 Abr 2026",
  },
  {
    title: "Calendario académico 2026 publicado",
    excerpt:
      "Ya está disponible el calendario académico completo para el año 2026 con todas las fechas importantes.",
    category: "Académicas",
    date: "05 Abr 2026",
  },
  {
    title: "Seminario sobre gestión del agua",
    excerpt:
      "Evento académico con expertos internacionales en manejo sostenible de recursos hídricos.",
    category: "Eventos",
    date: "28 Mar 2026",
  },
  {
    title: "Convenio con sector agroindustrial",
    excerpt:
      "Nuevo acuerdo de colaboración para prácticas profesionales en empresas del sector agrícola.",
    category: "Avisos",
    date: "20 Mar 2026",
  },
  {
    title: "Publicación de revista científica",
    excerpt:
      "Investigadores del recinto publican artículo sobre agroecoturismo en revista internacional.",
    category: "Académicas",
    date: "15 Mar 2026",
  },
]

export function ConstanzaNews() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todas")

  const filteredNews = activeCategory === "Todas"
    ? news
    : news.filter(item => item.category === activeCategory)

  const featuredNews = news.filter(item => item.featured)
  const regularNews = filteredNews.filter(item => !item.featured)

  return (
    <section className="bg-background py-16 md:py-24" id="news">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Noticias</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Lo Último del Campus
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Mantente informado sobre las últimas novedades, eventos académicos y
            logros de nuestra comunidad universitaria.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border bg-background p-1">
            {(["Todas", "Avisos", "Académicas", "Eventos"] as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "inline-flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && activeCategory !== "Todas" && filteredNews.some(item => item.featured) && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border p-8">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary uppercase tracking-wide">
                      {featuredNews[0].category}
                    </span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {featuredNews[0].date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {featuredNews[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {featuredNews[0].excerpt}
                  </p>
                  <Button>
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="hidden md:block w-48 h-32 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Imagen destacada</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map((item, index) => (
            <article key={index} className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">
                  {item.category}
                </span>
                <span className="text-sm text-muted-foreground">•</span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {item.excerpt}
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto font-medium">
                Leer más
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button variant="outline">
            Ver Todas las Noticias
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}