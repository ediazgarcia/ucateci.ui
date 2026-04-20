import { GraduationCap, BookOpen, Globe2, Calculator, Stethoscope, Cpu, Palette, Music, Trophy, Heart, Award, Leaf, Droplets, Mountain, Tractor, Microscope, Building2, Calendar } from "lucide-react"

const LEVELS = [
  {
    level: "Grado",
    grades: "Licenciaturas e Ingenierías",
    description: "Programas de 4 años enfocados en desarrollo sostenible",
    icon: GraduationCap,
  },
  {
    level: "Posgrado",
    grades: "Maestrías y Especializaciones",
    description: "Formación avanzada para profesionales especializados",
    icon: BookOpen,
  },
  {
    level: "Doctorado",
    grades: "PhD y Doctorados",
    description: "Investigación avanzada y desarrollo de conocimiento",
    icon: Microscope,
  },
  {
    level: "Diplomados",
    grades: "Cursos Especializados",
    description: "Formación continua y actualización profesional",
    icon: Award,
  },
]

const SPECIALIZATIONS = [
  {
    title: "Agricultura Sostenible",
    icon: Tractor,
    description: "Técnicas agrícolas modernas, biotecnología y gestión agrícola",
  },
  {
    title: "Gestión del Agua",
    icon: Droplets,
    description: "Hidrología, sistemas de riego y manejo de recursos hídricos",
  },
  {
    title: "Ciencias Ambientales",
    icon: Mountain,
    description: "Ecología, conservación y desarrollo sostenible",
  },
  {
    title: "Agroecoturismo",
    icon: Globe2,
    description: "Desarrollo turístico sostenible y gestión de destinos",
  },
]

const PROGRAMS = [
  {
    title: "Investigación Aplicada",
    description: "Proyectos de investigación vinculados al desarrollo local",
    features: ["Laboratorios especializados", "Proyectos de campo", "Publicaciones científicas"],
  },
  {
    title: "Formación Práctica",
    description: "Enfoque en la aplicación práctica del conocimiento",
    features: ["Prácticas profesionales", "Proyectos comunitarios", "Empresas incubadas"],
  },
  {
    title: "Tecnología Avanzada",
    description: "Incorporación de tecnologías emergentes en la formación",
    features: ["Herramientas digitales", "Sistemas de información", "Innovación tecnológica"],
  },
]

export function ConstanzaAcademics() {
  return (
    <section className="bg-muted/30 py-16 md:py-24" id="academics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Oferta Académica</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Educación para el Desarrollo Sostenible
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Programas académicos especializados en agricultura, gestión del agua, ambiente y agroecoturismo,
            formando profesionales comprometidos con el desarrollo de Constanza.
          </p>
        </div>

        {/* Educational Levels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Niveles Académicos</h3>
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
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Especializaciones Estratégicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALIZATIONS.map((spec, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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
            {PROGRAMS.map((program, index) => (
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

        {/* Academic Calendar */}
        <div className="bg-background rounded-lg p-8 border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Calendario Académico 2026</h3>
            <p className="text-muted-foreground">
              Mantente al día con las fechas importantes del año académico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Inicio de Clases</h4>
              <p className="text-sm text-muted-foreground">Febrero 2026</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Exámenes Parciales</h4>
              <p className="text-sm text-muted-foreground">Mayo-Junio 2026</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Receso Verano</h4>
              <p className="text-sm text-muted-foreground">Julio-Agosto 2026</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Graduaciones</h4>
              <p className="text-sm text-muted-foreground">Diciembre 2026</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://ucateci.edu.do/images/2026/Calendarioacademico/-Calendario_Academico_2026_act.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
            >
              <BookOpen className="w-4 h-4" />
              Descargar Calendario Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}