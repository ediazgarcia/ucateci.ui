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

/* ------------------------------------------------------------------ */
/*  Tipos                                                              */
/* ------------------------------------------------------------------ */

export type ServiceItem = {
  icon: React.ElementType
  title: string
  desc: string
  href: string
}

/* ------------------------------------------------------------------ */
/*  Servicios universitarios                                           */
/* ------------------------------------------------------------------ */

export const SERVICES: ServiceItem[] = [
  {
    icon: Library,
    title: "Biblioteca Dr. Jesús María de Peña",
    desc: "Más de 50,000 volúmenes físicos y acceso a bases de datos internacionales como EBSCO, ProQuest y JSTOR para la investigación académica.",
    href: "#",
  },
  {
    icon: Microscope,
    title: "Centros de Investigación",
    desc: "Investigación aplicada en salud, tecnología, educación y ciencias sociales con publicaciones indexadas y proyectos con impacto regional.",
    href: "#",
  },
  {
    icon: HeartPulse,
    title: "Clínica Universitaria",
    desc: "Atención médica, odontológica y psicológica para la comunidad UCATECI y el público en general, como parte de la proyección social.",
    href: "#",
  },
  {
    icon: Globe2,
    title: "Internacionalización",
    desc: "Programas de intercambio, doble titulación y convenios con más de 40 universidades del mundo para ampliar tu horizonte académico.",
    href: "#",
  },
  {
    icon: Briefcase,
    title: "Bolsa de Empleo",
    desc: "Conectamos a estudiantes y egresados con empresas líderes del Cibao y todo el país, facilitando la inserción laboral.",
    href: "#",
  },
  {
    icon: Church,
    title: "Pastoral Universitaria",
    desc: "Acompañamiento espiritual, celebraciones litúrgicas y voluntariado social inspirado en el Evangelio y la identidad católica.",
    href: "#",
  },
  {
    icon: Trophy,
    title: "Deportes y Cultura",
    desc: "Selecciones deportivas, grupos artísticos, coro universitario y actividades extracurriculares que enriquecen la formación integral.",
    href: "#",
  },
  {
    icon: MonitorPlay,
    title: "Educación Virtual",
    desc: "Plataforma Moodle con cursos híbridos y totalmente en línea, brindando flexibilidad a tu proceso de aprendizaje.",
    href: "#",
  },
]
