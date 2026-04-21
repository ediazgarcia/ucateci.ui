"use client"

import { useMemo, useRef, useState } from "react"
import {
  Stethoscope,
  Cog,
  BookOpen,
  Building2,
  ArrowUpRight,
  GraduationCap,
  Search,
  Clock,
  MapPin,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

type FacultyKey = "salud" | "ingenieria" | "humanidades" | "economicas"
type Modality = "Presencial" | "Semipresencial"

type Career = {
  name: string
  duration: string
  modality: Modality
  faculty: FacultyKey
  trending?: boolean
}

const FACULTIES: {
  key: FacultyKey
  name: string
  short: string
  icon: React.ElementType
  description: string
  color: string
}[] = [
  {
    key: "salud",
    name: "Ciencias de la Salud",
    short: "Salud",
    icon: Stethoscope,
    description:
      "Formamos profesionales comprometidos con el cuidado integral de la persona, con sólida base científica, ética y humanista.",
    color: "bg-brand-red/10 text-brand-red",
  },
  {
    key: "ingenieria",
    name: "Ciencias de la Ingeniería",
    short: "Ingeniería",
    icon: Cog,
    description:
      "Ingenieros capaces de diseñar soluciones tecnológicas sostenibles que impulsan el desarrollo del país y la región.",
    color: "bg-brand-navy/10 text-brand-navy",
  },
  {
    key: "humanidades",
    name: "Ciencias y Humanidades",
    short: "Humanidades",
    icon: BookOpen,
    description:
      "Profesionales de la educación, la comunicación y las ciencias sociales al servicio del bien común y la cultura.",
    color: "bg-brand-gold/20 text-brand-navy",
  },
  {
    key: "economicas",
    name: "Ciencias Económicas y Sociales",
    short: "Económicas",
    icon: Building2,
    description:
      "Líderes para la gestión empresarial, la administración pública y el desarrollo económico con enfoque ético.",
    color: "bg-brand-navy/10 text-brand-navy",
  },
]

const CAREERS: Career[] = [
  { name: "Doctor en Medicina", duration: "6 años", modality: "Presencial", faculty: "salud", trending: true },
  { name: "Licenciatura en Enfermería", duration: "4 años", modality: "Presencial", faculty: "salud" },
  { name: "Doctor en Odontología", duration: "5 años", modality: "Presencial", faculty: "salud", trending: true },
  { name: "Licenciatura en Bioanálisis", duration: "4 años", modality: "Presencial", faculty: "salud" },
  { name: "Licenciatura en Farmacia", duration: "4 años", modality: "Presencial", faculty: "salud" },
  { name: "Licenciatura en Imágenes Médicas", duration: "4 años", modality: "Presencial", faculty: "salud" },
  { name: "Licenciatura en Terapia Física", duration: "4 años", modality: "Presencial", faculty: "salud" },
  { name: "Licenciatura en Nutrición y Dietética", duration: "4 años", modality: "Presencial", faculty: "salud" },

  { name: "Ingeniería Civil", duration: "5 años", modality: "Presencial", faculty: "ingenieria", trending: true },
  { name: "Ingeniería Industrial", duration: "5 años", modality: "Presencial", faculty: "ingenieria" },
  { name: "Ingeniería Sistemas y Computación", duration: "4 años", modality: "Presencial", faculty: "ingenieria", trending: true },
  { name: "Ingeniería Electromecánica", duration: "5 años", modality: "Presencial", faculty: "ingenieria" },
  { name: "Ingeniería Agronómica", duration: "5 años", modality: "Presencial", faculty: "ingenieria" },
  { name: "Arquitectura", duration: "5 años", modality: "Presencial", faculty: "ingenieria" },
  { name: "Licenciatura en Informática", duration: "4 años", modality: "Semipresencial", faculty: "ingenieria" },

  { name: "Licenciatura en Educación Inicial", duration: "4 años", modality: "Semipresencial", faculty: "humanidades" },
  { name: "Licenciatura en Educación Básica", duration: "4 años", modality: "Semipresencial", faculty: "humanidades" },
  { name: "Licenciatura en Lenguas Modernas", duration: "4 años", modality: "Presencial", faculty: "humanidades" },
  { name: "Licenciatura en Comunicación Social", duration: "4 años", modality: "Presencial", faculty: "humanidades" },
  { name: "Licenciatura en Psicología", duration: "4 años", modality: "Presencial", faculty: "humanidades", trending: true },
  { name: "Licenciatura en Filosofía", duration: "4 años", modality: "Presencial", faculty: "humanidades" },
  { name: "Licenciatura en Teología", duration: "4 años", modality: "Presencial", faculty: "humanidades" },

  { name: "Licenciatura en Administración de Empresas", duration: "4 años", modality: "Presencial", faculty: "economicas", trending: true },
  { name: "Licenciatura en Contabilidad", duration: "4 años", modality: "Presencial", faculty: "economicas" },
  { name: "Licenciatura en Mercadeo", duration: "4 años", modality: "Presencial", faculty: "economicas" },
  { name: "Licenciatura en Negocios Internacionales", duration: "4 años", modality: "Presencial", faculty: "economicas" },
  { name: "Licenciatura en Economía", duration: "4 años", modality: "Presencial", faculty: "economicas" },
  { name: "Licenciatura en Derecho", duration: "4 años", modality: "Presencial", faculty: "economicas", trending: true },
]

export function AcademicOfferings() {
  const [active, setActive] = useState<FacultyKey | "todas">("todas")
  const [modality, setModality] = useState<Modality | "todas">("todas")
  const [query, setQuery] = useState("")
  const resultsRef = useRef<HTMLDivElement>(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return CAREERS.filter((c) => {
      if (active !== "todas" && c.faculty !== active) return false
      if (modality !== "todas" && c.modality !== modality) return false
      if (q && !c.name.toLowerCase().includes(q)) return false
      return true
    })
  }, [active, modality, query])

  const facultyInfo = active !== "todas" ? FACULTIES.find((f) => f.key === active) : null
  const hasActiveFilters = active !== "todas" || modality !== "todas" || query.trim().length > 0
  const filterSummary = [
    active !== "todas" ? `Facultad: ${FACULTIES.find((faculty) => faculty.key === active)?.short}` : null,
    modality !== "todas" ? `Modalidad: ${modality}` : null,
    query.trim() ? `Busqueda: "${query.trim()}"` : null,
  ].filter(Boolean) as string[]

  const clearFilters = () => {
    setActive("todas")
    setModality("todas")
    setQuery("")
  }

  return (
    <section id="oferta" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Oferta académica</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl text-balance">
            Explora tu carrera ideal
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Filtra por facultad, modalidad o busca por nombre. Todas nuestras carreras están avaladas por el MESCyT.
          </p>
        </div>

        {/* Search + filters */}
        <div className="mx-auto mt-10 max-w-4xl">
          <InputGroup className="rounded-full bg-card shadow-md">
            <InputGroupAddon>
              <Search className="ml-1 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </InputGroupAddon>
            <InputGroupInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Escape" && query) {
                  setQuery("")
                }

                if (event.key === "Enter" && results.length > 0) {
                  resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
              placeholder="Buscar carrera (ej. Medicina, Civil, Derecho...)"
              aria-label="Buscar carrera"
            />
            {query && (
              <InputGroupAddon align="inline-end">
                <button
                  onClick={() => setQuery("")}
                  aria-label="Limpiar búsqueda"
                  className="rounded-full p-1 text-muted-foreground hover:bg-muted"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </InputGroupAddon>
            )}
          </InputGroup>

          {/* Faculty chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              onClick={() => setActive("todas")}
              aria-pressed={active === "todas"}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === "todas"
                  ? "bg-brand-navy text-brand-cream"
                  : "border border-border bg-card text-foreground hover:border-brand-navy/40",
              )}
            >
              Todas las facultades
            </button>
            {FACULTIES.map((f) => {
              const Icon = f.icon
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  aria-pressed={active === f.key}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active === f.key
                      ? "bg-brand-navy text-brand-cream"
                      : "border border-border bg-card text-foreground hover:border-brand-navy/40",
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {f.short}
                </button>
              )
            })}
          </div>

          {/* Modality + results count */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Modalidad:</span>
              {(["todas", "Presencial", "Semipresencial"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setModality(m)}
                  aria-pressed={modality === m}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                    modality === m
                      ? "bg-brand-red text-accent-foreground"
                      : "border border-border bg-card text-foreground hover:border-brand-red/40",
                  )}
                >
                  {m === "todas" ? "Todas" : m}
                </button>
              ))}
            </div>
            <div className="text-xs font-medium text-muted-foreground" aria-live="polite">
              <span className="font-serif text-lg text-brand-navy">{results.length}</span>{" "}
              {results.length === 1 ? "carrera encontrada" : "carreras encontradas"}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              Usa Enter para ir directamente a los resultados y Escape para limpiar la busqueda.
            </p>
            <Button type="button" variant="outline" size="sm" onClick={clearFilters} disabled={!hasActiveFilters}>
              Limpiar filtros
            </Button>
          </div>
        </div>

        {/* Active faculty banner */}
        {facultyInfo && (
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-border bg-card p-5 md:flex md:items-center md:gap-5">
            <div
              className={cn(
                "mb-3 flex h-12 w-12 items-center justify-center rounded-xl md:mb-0",
                facultyInfo.color,
              )}
            >
              <facultyInfo.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium uppercase tracking-widest text-brand-red">Facultad de</div>
              <h3 className="font-serif text-xl font-semibold text-brand-navy">{facultyInfo.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{facultyInfo.description}</p>
            </div>
          </div>
        )}

        {filterSummary.length > 0 && (
          <div className="mx-auto mt-6 flex max-w-6xl flex-wrap gap-2">
            {filterSummary.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Results grid */}
        <div ref={resultsRef} className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {results.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <Search className="mx-auto h-8 w-8 text-muted-foreground" aria-hidden="true" />
              <p className="mt-3 font-serif text-lg text-brand-navy">Sin resultados</p>
              <p className="mt-1 text-sm text-muted-foreground">
                No encontramos carreras con los filtros actuales. Prueba con otra palabra o limpia los filtros para volver a empezar.
              </p>
              <Button type="button" variant="outline" className="mt-5" onClick={clearFilters}>
                Ver todas las carreras
              </Button>
            </div>
          )}
          {results.map((c) => {
            const faculty = FACULTIES.find((f) => f.key === c.faculty)!
            const Icon = faculty.icon
            return (
              <article
                key={c.name}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", faculty.color)}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  {c.trending && (
                    <span className="rounded-full bg-brand-gold/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-navy">
                      Top
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-brand-navy">{c.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {faculty.short}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {c.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {c.modality}
                  </span>
                </div>
                <a
                  href="#admisiones"
                  className="mt-5 inline-flex items-center gap-1 border-t border-border pt-4 text-sm font-semibold text-brand-red transition-colors hover:text-brand-navy"
                >
                  Ver pensum y requisitos
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            )
          })}
        </div>

        {/* CTA strip */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-brand-gold/40 bg-brand-navy p-6 text-center text-brand-cream md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <GraduationCap className="h-10 w-10 text-brand-gold" aria-hidden="true" />
            <div>
              <div className="font-serif text-lg font-semibold">¿Ya te decidiste?</div>
              <div className="text-sm text-brand-cream/80">Completa tu solicitud en línea en menos de 10 minutos.</div>
            </div>
          </div>
          <a
            href="#admisiones"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-brand-red/90"
          >
            Solicitar admisión <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
