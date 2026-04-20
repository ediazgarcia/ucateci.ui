import { Award, BookOpen, Globe2, Handshake, HeartHandshake, Sparkles, Users, Target, Eye, Star, Calendar, MapPin } from "lucide-react"

const FEATURES = [
  {
    icon: BookOpen,
    title: "Educación Bilingüe",
    description: "Programa académico en español e inglés desde nivel inicial hasta secundaria.",
  },
  {
    icon: Award,
    title: "Excelencia Académica",
    description: "Más de 50 años formando líderes con los más altos estándares educativos.",
  },
  {
    icon: Users,
    title: "Formación Integral",
    description: "Desarrollo intelectual, ético, moral, afectivo, social, espiritual y físico.",
  },
  {
    icon: HeartHandshake,
    title: "Valores Cristianos",
    description: "Educación basada en principios cristianos y formación de carácter.",
  },
  {
    icon: Globe2,
    title: "Campus Moderno",
    description: "Instalaciones modernas y seguras en el corazón de Bonao.",
  },
  {
    icon: Target,
    title: "Preparación Universitaria",
    description: "Excelente preparación para el ingreso a universidades de prestigio.",
  },
]

const STATS = [
  { number: "50+", label: "Años de Excelencia" },
  { number: "1000+", label: "Estudiantes" },
  { number: "50+", label: "Profesores Calificados" },
  { number: "95%", label: "Tasa de Graduación" },
]

export function CEBAcerca() {
  return (
    <section className="bg-background py-16 md:py-24" id="acerca">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Sobre Nosotros</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Centro Educacional de Bonao
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Una institución educativa comprometida con la formación integral de estudiantes
            desde nivel inicial hasta secundaria, con énfasis en valores cristianos y excelencia académica.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {FEATURES.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Vision Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg border">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Proveer a sus estudiantes de las herramientas necesarias para convertirse en líderes con carácter y principios,
              desarrollando sus potencialidades a través del trabajo constante y la autodisciplina.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser uno de los mejores colegios bilingües de la República Dominicana,
              formando estudiantes capaces de alcanzar la excelencia en todas las áreas.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <HeartHandshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Auto disciplina, Honestidad, Responsabilidad, Integridad, Amabilidad,
              Iniciativa, Respeto, Compañerismo, Trabajo en equipo, Alegría, Empatía y Bondad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}