import { Award, CheckCircle2, Trophy } from "lucide-react"

const ACCREDITATIONS = [
  {
    title: "MESCyT",
    subtitle: "Ministerio de Educación Superior",
    description: "Universidad reconocida oficialmente por el Estado dominicano desde 1983",
  },
  {
    title: "ADAAC",
    subtitle: "Acreditación de Calidad",
    description: "Certificación de excelencia y mejora continua académica",
  },
  {
    title: "AUSJAL",
    subtitle: "Red de Universidades Jesuitas",
    description: "Miembro de la red latinoamericana de instituciones de educación superior",
  },
  {
    title: "ODUCAL",
    subtitle: "Universidades Católicas",
    description: "Organización de universidades católicas de América Latina y el Caribe",
  },
]

const RANKINGS = [
  { value: "Top 10", label: "Universidades Dominicanas", source: "Webometrics 2025" },
  { value: "#1", label: "En el Cibao Central", source: "QS Latinoamérica" },
  { value: "5 ★", label: "Satisfacción estudiantil", source: "Encuesta Nacional 2025" },
]

export function Rankings() {
  return (
    <section className="bg-muted/40 py-16 md:py-20" id="acreditaciones">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Calidad académica certificada</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl text-balance">
              Excelencia reconocida a nivel nacional e internacional
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              UCATECI cuenta con acreditaciones y membresías que avalan nuestra calidad educativa, permitiendo a
              nuestros egresados competir con confianza en los escenarios profesionales más exigentes.
            </p>

            <div className="mt-8 space-y-3">
              {RANKINGS.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Trophy className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-bold text-primary">{r.value}</span>
                      <span className="text-sm font-semibold text-foreground">{r.label}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Fuente: {r.source}</div>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
            {ACCREDITATIONS.map((a) => (
              <div
                key={a.title}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-accent/20">
                  <Award className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-serif text-2xl font-bold text-primary">{a.title}</h3>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">{a.subtitle}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
