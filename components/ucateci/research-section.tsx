import Link from "next/link"
import { ArrowRight, FlaskConical, Users } from "lucide-react"
import { RESEARCH_CENTERS, RESEARCH_STATS } from "@/lib/data"

export function ResearchSection() {
  return (
    <section className="bg-muted/40 py-16 md:py-24" id="investigacion">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Investigación académica</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
              Conocimiento al servicio de la sociedad
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              UCATECI impulsa la investigación aplicada con centros que abordan los principales desafíos de salud,
              economía, educación y medio ambiente de República Dominicana, formando investigadores comprometidos con el desarrollo regional.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {RESEARCH_STATS.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-card p-4 text-center ring-1 ring-border">
                  <div className="font-serif text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#revista"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Ver revista científica <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#semilleros"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/40"
              >
                <Users className="h-4 w-4" /> Semilleros estudiantiles
              </Link>
            </div>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {RESEARCH_CENTERS.map((c) => {
                const Icon = c.icon
                return (
                  <article
                    key={c.name}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                        {c.projects} proyectos
                      </span>
                    </div>
                    <h3 className="mt-5 font-serif text-lg font-semibold text-primary">{c.name}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {c.area}
                    </p>
                    <Link
                      href="#centros"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                    >
                      Conocer más <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </article>
                )
              })}
            </div>

            <Link
              href="#publicaciones"
              className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-dashed border-accent/40 bg-card p-5 transition-colors hover:bg-accent/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <FlaskConical className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-serif text-lg font-semibold text-primary">
                    Revista Ciencia y Sociedad UCATECI
                  </div>
                  <div className="text-sm text-muted-foreground">Publicación semestral indexada · Volumen XXII</div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-primary" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
