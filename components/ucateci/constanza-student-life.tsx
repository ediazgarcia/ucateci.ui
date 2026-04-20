import { Users, Trophy, Palette, Music, Heart, Globe, Camera, Gamepad2, BookOpen, Leaf, Droplets, Mountain, Tractor, Microscope } from "lucide-react"

const ACTIVITIES = [
  {
    icon: Leaf,
    title: "Clubes Ambientales",
    description: "Conservación, reforestación y educación ambiental",
    color: "bg-green-500",
  },
  {
    icon: Microscope,
    title: "Investigación",
    description: "Proyectos de investigación aplicada y científica",
    color: "bg-blue-500",
  },
  {
    icon: Trophy,
    title: "Deportes",
    description: "Actividades deportivas recreativas y competitivas",
    color: "bg-orange-500",
  },
  {
    icon: Heart,
    title: "Voluntariado",
    description: "Servicio comunitario y desarrollo social",
    color: "bg-red-500",
  },
  {
    icon: Tractor,
    title: "Prácticas Agrícolas",
    description: "Trabajo en fincas y proyectos agrícolas",
    color: "bg-yellow-500",
  },
  {
    icon: Droplets,
    title: "Gestión del Agua",
    description: "Proyectos de conservación y uso eficiente del agua",
    color: "bg-cyan-500",
  },
  {
    icon: Globe,
    title: "Agroecoturismo",
    description: "Desarrollo de rutas turísticas sostenibles",
    color: "bg-purple-500",
  },
  {
    icon: BookOpen,
    title: "Seminarios",
    description: "Conferencias y talleres especializados",
    color: "bg-indigo-500",
  },
]

const FACILITIES = [
  {
    title: "Laboratorios Especializados",
    description: "Equipados para investigación en agricultura y ciencias ambientales",
    image: "/ucateci/research-lab.jpg",
  },
  {
    title: "Biblioteca Digital",
    description: "Acceso a recursos científicos y académicos especializados",
    image: "/ucateci/library.jpg",
  },
  {
    title: "Centro de Investigación",
    description: "Espacio para proyectos de investigación aplicada",
    image: "/ucateci/students-campus.jpg",
  },
  {
    title: "Fincas Experimentales",
    description: "Áreas para prácticas agrícolas y proyectos de campo",
    image: "/ucateci/students-campus.jpg",
  },
]

export function ConstanzaStudentLife() {
  return (
    <section className="bg-background py-16 md:py-24" id="vida">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Vida Estudiantil</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Desarrollo Integral y Sostenible
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            En UCATECI-Constanza creemos que la formación profesional va de la mano con el desarrollo personal
            y el compromiso con la sostenibilidad. Ofrecemos actividades que complementan tu educación académica.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Actividades y Proyectos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ACTIVITIES.map((activity, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow text-center">
                <div className={`w-16 h-16 ${activity.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{activity.title}</h4>
                <p className="text-muted-foreground text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Instalaciones Especializadas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.map((facility, index) => (
              <div key={index} className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Imagen del campus</div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-2">{facility.title}</h4>
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pastoral and Support */}
        <div className="bg-muted/30 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Apoyo al Estudiante</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contamos con servicios de apoyo diseñados para garantizar tu éxito académico y personal
              durante tu formación universitaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Orientación Profesional</h4>
              <p className="text-sm text-muted-foreground">Asesoría para el desarrollo de carrera y empleabilidad.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Bienestar Estudiantil</h4>
              <p className="text-sm text-muted-foreground">Apoyo psicológico y servicios de salud estudiantil.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Tutorías Académicas</h4>
              <p className="text-sm text-muted-foreground">Apoyo adicional en materias específicas y estudio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}