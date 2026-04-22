import { Calendar, BookOpen } from "lucide-react"
import { CAMPUS_DATA, type CampusData } from "@/lib/data"

type CampusAcademicsProps = {
  campusId: "ceb" | "constanza"
}

export function CampusAcademics({ campusId }: CampusAcademicsProps) {
  const campus = CAMPUS_DATA[campusId]
  const { academics } = campus

  return (
    <section className="bg-muted/30 py-16 md:py-24" id="academics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Oferta Académica</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            {academics.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {academics.description}
          </p>
        </div>

        {/* Educational Levels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Niveles Académicos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academics.levels.map((level, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <level.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{level.level}</h4>
                <p className="text-sm font-medium text-accent mb-2">{level.grades}</p>
                <p className="text-muted-foreground text-sm">{level.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Especializaciones Estratégicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academics.specializations.map((spec, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border hover:shadow-lg transition-shadow text-center md:text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <spec.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{spec.title}</h4>
                <p className="text-muted-foreground text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Programas Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academics.programs.map((program, index) => (
              <div key={index} className="bg-background p-8 rounded-lg border hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-4">{program.title}</h4>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Calendar / Call to Action */}
        {academics.calendarLink ? (
          <div className="bg-background rounded-lg p-8 border text-center mt-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Calendario Académico 2026</h3>
            <p className="text-muted-foreground mb-6">
              Mantente al día con las fechas importantes del año académico.
            </p>
            <a
              href={academics.calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
            >
              <BookOpen className="w-4 h-4" />
              Descargar Calendario Completo
            </a>
          </div>
        ) : (
          <div className="text-center bg-primary text-white p-8 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">¿Listo para unirte a nuestra comunidad educativa?</h3>
            <p className="mb-6 text-primary-foreground/90">
              Descubre cómo el {campus.shortName} puede transformar tu futuro.
            </p>
            <a href={`/campus/${campus.id}#contacto`} className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Información
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
