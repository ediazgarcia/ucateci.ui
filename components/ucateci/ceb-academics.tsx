import { GraduationCap, BookOpen, Globe2, Calculator, Stethoscope, Cpu, Palette, Music, Trophy, Heart, Award } from "lucide-react"

const LEVELS = [
  {
    level: "Nivel Inicial",
    grades: "Pre-Kinder a Kinder",
    description: "Fundamentos básicos y desarrollo de habilidades sociales",
    icon: Heart,
  },
  {
    level: "Primaria",
    grades: "1° a 6° grado",
    description: "Educación básica integral con enfoque bilingüe",
    icon: BookOpen,
  },
  {
    level: "Secundaria",
    grades: "7° a 8° grado",
    description: "Preparación académica avanzada y desarrollo de pensamiento crítico",
    icon: GraduationCap,
  },
  {
    level: "Bachillerato",
    grades: "9° a 12° grado",
    description: "Formación pre-universitaria con especializaciones",
    icon: Award,
  },
]

const SPECIALIZATIONS = [
  {
    title: "Ciencias y Matemáticas",
    icon: Calculator,
    description: "Preparación para carreras en ingeniería, medicina y ciencias puras",
  },
  {
    title: "Humanidades",
    icon: BookOpen,
    description: "Desarrollo de pensamiento crítico y habilidades comunicativas",
  },
  {
    title: "Arte y Música",
    icon: Palette,
    description: "Expresión artística y desarrollo de talento creativo",
  },
  {
    title: "Educación Física",
    icon: Trophy,
    description: "Desarrollo físico y valores deportivos",
  },
]

const PROGRAMS = [
  {
    title: "Programa Bilingüe",
    description: "Inmersión completa en inglés desde nivel inicial",
    features: ["Profesores nativos", "Materiales certificados", "Exámenes internacionales"],
  },
  {
    title: "Programa de Valores",
    description: "Formación cristiana integral",
    features: ["Capilla semanal", "Servicio comunitario", "Ética y moral"],
  },
  {
    title: "Programa Tecnológico",
    description: "Incorporación de tecnología en el aprendizaje",
    features: ["Aula digital", "Robótica educativa", "Plataformas virtuales"],
  },
]

export function CEBAcademics() {
  return (
    <section className="bg-muted/30 py-16 md:py-24" id="academics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Oferta Académica</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Educación de Excelencia
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Desde nivel inicial hasta bachillerato, ofrecemos una educación integral
            que prepara a nuestros estudiantes para los desafíos del futuro.
          </p>
        </div>

        {/* Educational Levels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Niveles Educativos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEVELS.map((level, index) => (
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
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Especializaciones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALIZATIONS.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{spec.title}</h4>
                <p className="text-muted-foreground text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Programas Especiales</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program, index) => (
              <div key={index} className="bg-background p-8 rounded-lg border">
                <h4 className="text-xl font-bold text-primary mb-4">{program.title}</h4>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">¿Listo para unirte a nuestra comunidad educativa?</h3>
          <p className="mb-6 text-primary-foreground/90">
            Descubre cómo el CEB puede transformar el futuro de tu hijo.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Solicitar Información
          </button>
        </div>
      </div>
    </section>
  )
}