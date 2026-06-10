"use client"

import { useMemo, useRef, useState } from "react"
import { ArrowUpRight, BookOpen, Cpu, Globe2, GraduationCap, Heart, Palette, Search, Sparkles, Trophy, Users, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

const PROGRAM_FOCUS = [
  { key: "todas", label: "Todos los enfoques" },
  { key: "bilingue", label: "Bilingüe" },
  { key: "steam", label: "STEAM" },
  { key: "valores", label: "Valores y Liderazgo" },
  { key: "arte", label: "Arte y Deporte" },
] as const

const PROGRAMS = [
  {
    name: "Programa Bilingüe",
    level: "Inicial a bachillerato",
    focus: "bilingue",
    description: "Fortalecemos la comunicación en español e inglés con un enfoque práctico y seguro para el aprendizaje global.",
    icon: Globe2,
    accent: "bg-brand-red/10 text-brand-red",
  },
  {
    name: "STEAM y Robótica",
    level: "Primaria y secundaria",
    focus: "steam",
    description: "Ciencia, tecnología, arte y matemáticas para desarrollar creatividad, pensamiento crítico y resolución de problemas.",
    icon: Cpu,
    accent: "bg-brand-navy/10 text-brand-navy",
  },
  {
    name: "Valores y Liderazgo",
    level: "Toda la comunidad escolar",
    focus: "valores",
    description: "Promovemos responsabilidad, disciplina, servicio y convivencia con una formación cristiana y humana integral.",
    icon: Heart,
    accent: "bg-brand-gold/20 text-brand-navy",
  },
  {
    name: "Arte, Música y Deporte",
    level: "Inicial a secundaria",
    focus: "arte",
    description: "Creamos espacios para la expresión, el movimiento, la creatividad y el bienestar integral de cada estudiante.",
    icon: Palette,
    accent: "bg-brand-navy/10 text-brand-navy",
  },
  {
    name: "Primaria Integral",
    level: "Primaria",
    focus: "steam",
    description: "Base sólida en lenguaje, matemáticas, ciencias y habilidades para aprender con confianza y entusiasmo.",
    icon: BookOpen,
    accent: "bg-brand-red/10 text-brand-red",
  },
  {
    name: "Secundaria de Excelencia",
    level: "Secundaria y bachillerato",
    focus: "valores",
    description: "Preparación académica, liderazgo y orientación para el siguiente paso con propósito y disciplina.",
    icon: Trophy,
    accent: "bg-brand-gold/20 text-brand-navy",
  },
] as const

export function AcademicOfferings() {
  const [active, setActive] = useState<(typeof PROGRAM_FOCUS)[number]["key"]>("todas")
  const [query, setQuery] = useState("")
  const resultsRef = useRef<HTMLDivElement>(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PROGRAMS.filter((item) => {
      if (active !== "todas" && item.focus !== active) return false
      if (q && !`${item.name} ${item.level} ${item.description}`.toLowerCase().includes(q)) return false
      return true
    })
  }, [active, query])

  const hasActiveFilters = active !== "todas" || query.trim().length > 0
  const filterSummary = [
    active !== "todas" ? `Enfoque: ${PROGRAM_FOCUS.find((item) => item.key === active)?.label}` : null,
    query.trim() ? `Búsqueda: "${query.trim()}"` : null,
  ].filter(Boolean) as string[]

  const clearFilters = () => {
    setActive("todas")
    setQuery("")
  }

  return (
    <section id="oferta" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Programas del colegio</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl text-balance">
            Explora cómo crecemos en el CEB Bonao
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Descubre nuestras propuestas educativas por enfoque, nivel y experiencia de aprendizaje, pensadas para acompañar el desarrollo integral de cada estudiante.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <InputGroup className="rounded-full bg-card shadow-md">
            <InputGroupAddon>
              <Search className="ml-1 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </InputGroupAddon>
            <InputGroupInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Escape" && query) setQuery("")
                if (event.key === "Enter" && results.length > 0) resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              placeholder="Buscar programa, enfoque o nivel (ej. STEAM, bilingüe, liderazgo)"
              aria-label="Buscar programa"
            />
            {query && (
              <InputGroupAddon align="inline-end">
                <button onClick={() => setQuery("")} aria-label="Limpiar búsqueda" className="rounded-full p-1 text-muted-foreground hover:bg-muted">
                  <X className="h-3.5 w-3.5" />
                </button>
              </InputGroupAddon>
            )}
          </InputGroup>

          <div className="mt-5 flex flex-wrap gap-2">
            {PROGRAM_FOCUS.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(item.key)}
                aria-pressed={active === item.key}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === item.key ? "bg-brand-navy text-brand-cream" : "border border-border bg-card text-foreground hover:border-brand-navy/40",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
              Enfoques escolares del CEB
            </div>
            <div className="text-xs font-medium text-muted-foreground" aria-live="polite">
              <span className="font-serif text-lg text-brand-navy">{results.length}</span>{" "}
              {results.length === 1 ? "programa encontrado" : "programas encontrados"}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">Usa Enter para ir directo a los resultados y Escape para limpiar la búsqueda.</p>
            <Button type="button" variant="outline" size="sm" onClick={clearFilters} disabled={!hasActiveFilters}>Limpiar filtros</Button>
          </div>
        </div>

        {filterSummary.length > 0 && (
          <div className="mx-auto mt-6 flex max-w-6xl flex-wrap gap-2">
            {filterSummary.map((item) => (
              <span key={item} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">{item}</span>
            ))}
          </div>
        )}

        <div ref={resultsRef} className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {results.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <Search className="mx-auto h-8 w-8 text-muted-foreground" aria-hidden="true" />
              <p className="mt-3 font-serif text-lg text-brand-navy">Sin resultados</p>
              <p className="mt-1 text-sm text-muted-foreground">No encontramos programas con los filtros actuales. Prueba con otra palabra o limpia los filtros.</p>
              <Button type="button" variant="outline" className="mt-5" onClick={clearFilters}>Ver todos los programas</Button>
            </div>
          )}

          {results.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.name} className="group relative flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", item.accent)}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-brand-gold/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-navy">{item.level}</span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-brand-navy">{item.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{PROGRAM_FOCUS.find((focus) => focus.key === item.focus)?.label}</p>
                <p className="mt-4 text-sm text-muted-foreground">{item.description}</p>
                <a href="#admisiones" className="mt-5 inline-flex items-center gap-1 border-t border-border pt-4 text-sm font-semibold text-brand-red transition-colors hover:text-brand-navy">
                  Conocer más
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            )
          })}
        </div>

        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-brand-gold/40 bg-brand-navy p-6 text-center text-brand-cream md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <GraduationCap className="h-10 w-10 text-brand-gold" aria-hidden="true" />
            <div>
              <div className="font-serif text-lg font-semibold">¿Ya descubriste el enfoque ideal para tu hijo o hija?</div>
              <div className="text-sm text-brand-cream/80">Solicita información y recibe orientación del equipo del colegio para el próximo año escolar.</div>
            </div>
          </div>
          <a href="#admisiones" className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-brand-red/90">
            Solicitar admisión <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
