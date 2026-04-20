import { Award, BookOpen, Globe2, Handshake, HeartHandshake, Sparkles, Users, Target, Eye, Star, Calendar, MapPin, Leaf, Droplets, Mountain, Tractor } from "lucide-react"

const FEATURES = [
  {
    icon: Leaf,
    title: "Educación Sostenible",
    description: "Programas académicos enfocados en el desarrollo sostenible y la conservación ambiental.",
  },
  {
    icon: Tractor,
    title: "Agricultura Moderna",
    description: "Formación especializada en técnicas agrícolas sostenibles y tecnología agrícola.",
  },
  {
    icon: Droplets,
    title: "Gestión del Agua",
    description: "Especialización en manejo eficiente de recursos hídricos y sistemas de riego.",
  },
  {
    icon: Mountain,
    title: "Conservación Ambiental",
    description: "Estudios en ecología, biodiversidad y desarrollo sostenible del territorio.",
  },
  {
    icon: Globe2,
    title: "Agroecoturismo",
    description: "Desarrollo de proyectos turísticos sostenibles vinculados al sector agrícola.",
  },
  {
    icon: Target,
    title: "Compromiso con Constanza",
    description: "Contribución activa al crecimiento económico y social del municipio.",
  },
]

const STATS = [
  { number: "2024", label: "Año de Fundación" },
  { number: "500+", label: "Estudiantes" },
  { number: "30+", label: "Profesores Especializados" },
  { number: "4", label: "Ámbitos Estratégicos" },
]

export function ConstanzaAcerca() {
  return (
    <section className="bg-background py-16 md:py-24" id="acerca">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Sobre Nosotros</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Recinto Académico UCATECI-Constanza
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Un centro de educación superior comprometido con el desarrollo sostenible de Constanza,
            formando profesionales especializados en agricultura, gestión del agua, ambiente y agroecoturismo.
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
              La educación es la principal vía para asegurar el desarrollo de los pueblos y de su gente.
              Como recinto académico UCATECI-Constanza, nos comprometemos a formar profesionales
              altamente capacitados en los ámbitos estratégicos de agricultura, gestión del agua,
              ambiente y agroecoturismo.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser el centro de educación superior líder en Constanza, reconocido por su excelencia
              académica y su contribución al desarrollo sostenible del municipio, formando
              profesionales innovadores y comprometidos con el progreso de la región.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Excelencia académica, compromiso con el desarrollo sostenible, innovación,
              responsabilidad social, integridad, trabajo en equipo y respeto por el medio ambiente.
              Creemos en Constanza, en el valor de su gente y la riqueza de su tierra.
            </p>
          </div>
        </div>

        {/* Strategic Focus */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Enfoques Principales que Garantizan la Sostenibilidad</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Nuestro recinto académico desarrolla iniciativas orientadas en cuatro ámbitos en los que
              Constanza presenta oportunidades de crecimiento exponencial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tractor className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Agricultura</h4>
              <p className="text-sm text-muted-foreground">Técnicas agrícolas sostenibles y tecnología agrícola avanzada.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Gestión del Agua</h4>
              <p className="text-sm text-muted-foreground">Manejo eficiente de recursos hídricos y sistemas de riego innovadores.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Ambiente</h4>
              <p className="text-sm text-muted-foreground">Ecología, biodiversidad y desarrollo sostenible del territorio.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Agroecoturismo</h4>
              <p className="text-sm text-muted-foreground">Desarrollo de proyectos turísticos sostenibles vinculados al sector agrícola.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}