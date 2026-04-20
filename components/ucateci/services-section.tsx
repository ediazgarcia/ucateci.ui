import {
  Library,
  Microscope,
  HeartPulse,
  Globe2,
  Briefcase,
  Church,
  Trophy,
  MonitorPlay,
} from "lucide-react"

const services = [
  {
    icon: Library,
    title: "Biblioteca Dr. Jesús María de Peña",
    desc: "Más de 50,000 volúmenes físicos y acceso a bases de datos internacionales como EBSCO, ProQuest y JSTOR.",
    href: "#",
  },
  {
    icon: Microscope,
    title: "Centros de Investigación",
    desc: "Investigación aplicada en salud, tecnología, educación y ciencias sociales con publicaciones indexadas.",
    href: "#",
  },
  {
    icon: HeartPulse,
    title: "Clínica Universitaria",
    desc: "Atención médica, odontológica y psicológica para la comunidad UCATECI y el público en general.",
    href: "#",
  },
  {
    icon: Globe2,
    title: "Internacionalización",
    desc: "Programas de intercambio, doble titulación y convenios con más de 40 universidades del mundo.",
    href: "#",
  },
  {
    icon: Briefcase,
    title: "Bolsa de Empleo",
    desc: "Conectamos a estudiantes y egresados con empresas líderes del Cibao y el país.",
    href: "#",
  },
  {
    icon: Church,
    title: "Pastoral Universitaria",
    desc: "Acompañamiento espiritual, celebraciones litúrgicas y voluntariado social inspirado en el Evangelio.",
    href: "#",
  },
  {
    icon: Trophy,
    title: "Deportes y Cultura",
    desc: "Selecciones deportivas, grupos artísticos, coro universitario y actividades extracurriculares.",
    href: "#",
  },
  {
    icon: MonitorPlay,
    title: "Educación Virtual",
    desc: "Plataforma Moodle con cursos híbridos y totalmente en línea para mayor flexibilidad.",
    href: "#",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-10">
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-widest text-brand-red font-semibold mb-2">
              Servicios universitarios
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy text-balance">
              Una experiencia universitaria integral, dentro y fuera del aula
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-muted-foreground leading-relaxed">
              En UCATECI entendemos que la formación va más allá de las clases.
              Descubre los servicios que acompañan tu desarrollo académico,
              profesional, personal y espiritual.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc, href }) => (
            <a
              key={title}
              href={href}
              className="group rounded-2xl border border-border bg-card p-6 flex flex-col hover:border-brand-navy hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-5 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-brand-navy leading-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {desc}
              </p>
              <span className="mt-4 text-sm font-semibold text-brand-red group-hover:text-brand-navy transition-colors">
                Conoce más &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
