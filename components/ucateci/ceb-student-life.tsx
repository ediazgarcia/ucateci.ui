import { Users, Trophy, Palette, Music, Heart, Globe, Camera, Gamepad2, BookOpen } from "lucide-react"

const ACTIVITIES = [
  {
    icon: Trophy,
    title: "Deportes",
    description: "Fútbol, baloncesto, voleibol, atletismo y más",
    color: "bg-blue-500",
  },
  {
    icon: Palette,
    title: "Artes Plásticas",
    description: "Pintura, dibujo, escultura y arte digital",
    color: "bg-purple-500",
  },
  {
    icon: Music,
    title: "Música",
    description: "Coro, banda musical, piano y guitarra",
    color: "bg-green-500",
  },
  {
    icon: BookOpen,
    title: "Club de Lectura",
    description: "Fomento de la lectura y literatura",
    color: "bg-red-500",
  },
  {
    icon: Globe,
    title: "Intercambios Culturales",
    description: "Actividades multiculturales y viajes",
    color: "bg-yellow-500",
  },
  {
    icon: Heart,
    title: "Servicio Comunitario",
    description: "Voluntariado y ayuda social",
    color: "bg-pink-500",
  },
  {
    icon: Camera,
    title: "Fotografía",
    description: "Club de fotografía y medios",
    color: "bg-indigo-500",
  },
  {
    icon: Gamepad2,
    title: "Tecnología",
    description: "Robótica, programación y juegos educativos",
    color: "bg-teal-500",
  },
]

const FACILITIES = [
  {
    title: "Laboratorios de Ciencia",
    description: "Equipados con material moderno para experimentos prácticos",
    image: "/ucateci/research-lab.jpg",
  },
  {
    title: "Biblioteca Digital",
    description: "Acceso a miles de libros y recursos electrónicos",
    image: "/ucateci/library.jpg",
  },
  {
    title: "Gimnasio Cubierto",
    description: "Espacio para actividades deportivas y eventos",
    image: "/ucateci/students-campus.jpg",
  },
  {
    title: "Aulas Tecnológicas",
    description: "Equipadas con pizarras digitales y computadoras",
    image: "/ucateci/students-campus.jpg",
  },
]

export function CEBStudentLife() {
  return (
    <section className="bg-background py-16 md:py-24" id="vida">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Vida Estudiantil</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Más que Estudiar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            En el CEB creemos que la educación va más allá del aula.
            Ofrecemos una experiencia completa que desarrolla el talento integral de cada estudiante.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Actividades Extracurriculares</h3>
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
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Instalaciones Modernas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FACILITIES.map((facility, index) => (
              <div key={index} className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground text-center">
                    <BookOpen className="w-12 h-12 mx-auto mb-2" />
                    <p>Imagen de {facility.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-primary mb-2">{facility.title}</h4>
                  <p className="text-muted-foreground">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Voces de Nuestros Estudiantes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">María González</p>
                  <p className="text-sm text-muted-foreground">Estudiante de 11° grado</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "El CEB me ha enseñado no solo conocimientos académicos, sino también valores que me acompañarán toda la vida."
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Carlos Rodríguez</p>
                  <p className="text-sm text-muted-foreground">Estudiante de 9° grado</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Las actividades extracurriculares me han ayudado a desarrollar mis talentos y hacer amigos increíbles."
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Ana Martínez</p>
                  <p className="text-sm text-muted-foreground">Estudiante de 12° grado</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Gracias al programa bilingüe del CEB, me siento preparada para estudiar en cualquier universidad del mundo."
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Únete a Nuestra Comunidad</h3>
          <p className="mb-6 text-primary-foreground/90">
            Descubre cómo el CEB puede ser el lugar perfecto para el desarrollo integral de tu hijo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Agendar Visita
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Solicitar Admisión
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}