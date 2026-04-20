import { Award, BookOpen, Globe2, Handshake, HeartHandshake, Sparkles } from "lucide-react"

const PILLARS = [
  {
    icon: Award,
    title: "Acreditación ADAAC",
    description:
      "Aseguramos la calidad académica con estándares internacionales reconocidos por el MESCyT y la ADAAC.",
  },
  {
    icon: HeartHandshake,
    title: "Formación integral",
    description: "Educamos profesionales con valores cristianos, sensibilidad social y compromiso ético.",
  },
  {
    icon: BookOpen,
    title: "Planes actualizados",
    description: "Currículos revisados con la industria y competencias clave para el mercado laboral actual.",
  },
  {
    icon: Globe2,
    title: "Movilidad internacional",
    description: "Convenios con universidades de Iberoamérica y Estados Unidos para intercambios académicos.",
  },
  {
    icon: Handshake,
    title: "Vinculación empresarial",
    description: "Prácticas profesionales y bolsa de empleo con las empresas más importantes del Cibao.",
  },
  {
    icon: Sparkles,
    title: "Becas y apoyo",
    description: "Amplio programa de becas académicas, deportivas y por mérito para nuestros estudiantes.",
  },
]

export function WhyUcateci() {
  return (
    <section className="bg-background py-16 md:py-24" id="por-que">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Por qué UCATECI</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Una educación que transforma vidas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Seis razones por las que miles de familias dominicanas eligen UCATECI para formar a la próxima generación
            de líderes.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 font-serif text-6xl font-bold text-muted/40">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
