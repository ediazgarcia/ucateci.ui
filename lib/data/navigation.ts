import {
  BookOpen,
  Building2,
  Calculator,
  Cpu,
  Globe,
  GraduationCap,
  Heart,
  MapPin,
  Microscope,
  Scale,
  Stethoscope,
  Users,
  ArrowRight,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Tipos                                                              */
/* ------------------------------------------------------------------ */

export type MegaColumn = {
  heading: string
  items: {
    title: string
    href: string
    description?: string
    icon?: React.ComponentType<{ className?: string }>
  }[]
}

export type MegaMenu = {
  label: string
  href: string
  columns: MegaColumn[]
  featured?: {
    title: string
    description: string
    href: string
    image: string
  }
}

/* ------------------------------------------------------------------ */
/*  Mega menús del header principal                                    */
/* ------------------------------------------------------------------ */

export const MEGA_MENUS: MegaMenu[] = [
  {
    label: "Nosotros",
    href: "#nosotros",
    columns: [
      {
        heading: "Nuestro Colegio",
        items: [
          { title: "Historia", href: "/resena-historica", icon: Building2, description: "La trayectoria del Centro Educacional Bonao" },
          { title: "Misión y Visión", href: "/filosofia", icon: BookOpen },
          { title: "Valores y Filosofía", href: "/logosimbolo", icon: Heart },
          { title: "Autoridades", href: "/autoridades-academicas", icon: Users },
        ],
      },
      {
        heading: "Vida Escolar",
        items: [
          { title: "Modelo Educativo", href: "/modelo-educativo", icon: BookOpen },
          { title: "Reglamento del Colegio", href: "/reglamento-academico", icon: Scale },
          { title: "Manual del Estudiante", href: "/manual-estudiante", icon: GraduationCap },
          { title: "Biblioteca y Recursos", href: "#academics", icon: BookOpen },
        ],
      },
    ],
    featured: {
      title: "Un colegio con identidad, valores y excelencia",
      description: "Descubre la visión educativa que guía a cada estudiante de CEB Bonao.",
      href: "#acerca",
      image: "/ucateci/campus-aerial.jpg",
    },
  },
  {
    label: "Oferta Académica",
    href: "#oferta",
    columns: [
      {
        heading: "Niveles del Colegio",
        items: [
          { title: "Nivel Inicial", href: "#academics", icon: Heart, description: "Primeros años de aprendizaje" },
          { title: "Primaria", href: "#academics", icon: BookOpen, description: "Formación básica y sólida" },
          { title: "Secundaria", href: "#academics", icon: GraduationCap, description: "Preparación integral para el futuro" },
          { title: "Bachillerato", href: "#academics", icon: Users, description: "Formación preuniversitaria" },
        ],
      },
      {
        heading: "Programas Especiales",
        items: [
          { title: "Bilingüe", href: "#academics", icon: Globe, description: "Español e inglés" },
          { title: "STEAM y Robótica", href: "#academics", icon: Cpu, description: "Innovación y pensamiento creativo" },
          { title: "Arte y Música", href: "#vida", icon: BookOpen, description: "Expresión y talento" },
          { title: "Deportes y Valores", href: "#vida", icon: Heart, description: "Bienestar y liderazgo" },
        ],
      },
    ],
    featured: {
      title: "Una educación bilingüe y moderna para el colegio",
      description: "Primaria, secundaria y el nuevo programa STEAM para el futuro de nuestros estudiantes.",
      href: "#academics",
      image: "/ucateci/students-campus.jpg",
    },
  },
  {
    label: "STEAM y Tecnología",
    href: "#academics",
    columns: [
      {
        heading: "Innovación Escolar",
        items: [
          { title: "Robótica Educativa", href: "#academics", icon: Cpu, description: "Aprendizaje práctico y creativo" },
          { title: "Programación", href: "#academics", icon: BookOpen, description: "Pensamiento lógico y digital" },
          { title: "Proyectos STEAM", href: "#academics", icon: ArrowRight, description: "Solución de problemas reales" },
          { title: "Tecnología para el aula", href: "#academics", icon: Globe, description: "Herramientas modernas para aprender" },
        ],
      },
      {
        heading: "Aprendizaje Integral",
        items: [
          { title: "Ciencia y Matemáticas", href: "#academics", icon: Calculator },
          { title: "Arte y Creatividad", href: "#vida", icon: Heart },
          { title: "Inglés y Comunicación", href: "#academics", icon: Globe },
          { title: "Valores y Liderazgo", href: "#vida", icon: Users },
        ],
      },
    ],
    featured: {
      title: "El futuro del colegio empieza con STEAM",
      description: "Tecnología, creatividad y pensamiento crítico para nuestros estudiantes.",
      href: "#academics",
      image: "/ucateci/research-lab.jpg",
    },
  },
  {
    label: "Vida Estudiantil",
    href: "#vida",
    columns: [
      {
        heading: "Servicios del Colegio",
        items: [
          { title: "Biblioteca", href: "#academics", icon: BookOpen },
          { title: "Pastoral y Valores", href: "#vida", icon: Heart },
          { title: "Deportes", href: "#vida", icon: Users },
          { title: "Clubes y Actividades", href: "#vida", icon: Globe },
        ],
      },
      {
        heading: "Experiencia Estudiantil",
        items: [
          { title: "Aula Virtual", href: "#acceso", icon: Globe },
          { title: "Portal del Estudiante", href: "#acceso", icon: Users },
          { title: "Calendario Escolar", href: "#academics", icon: GraduationCap },
          { title: "Orientación y Bienestar", href: "#vida", icon: Heart },
        ],
      },
    ],
    featured: {
      title: "Una experiencia escolar integral y cercana",
      description: "Deportes, arte, valores y crecimiento personal en el colegio.",
      href: "#vida",
      image: "/ucateci/student-life.jpg",
    },
  },
  {
    label: "Campus y Alianzas",
    href: "#campus",
    columns: [
      {
        heading: "Cede Académica",
        items: [
          { title: "Campus La Vega", href: "#la-vega", icon: MapPin, description: "Sede principal — La Vega" },
        ],
      },
    ],
    featured: {
      title: "Cede Académica Principal",
      description: "Conoce la sede institucional de CEB-UCATECI en La Vega, con nuestros espacios de aprendizaje y servicio.",
      href: "#campus",
      image: "/ucateci/campus-aerial.jpg",
    },
  },
]

/* ------------------------------------------------------------------ */
/*  Búsqueda rápida (Command palette)                                 */
/* ------------------------------------------------------------------ */

export const SEARCH_ITEMS = {
  programas: [
    "Programa Bilingüe",
    "STEAM y Robótica",
    "Arte, Música y Deporte",
    "Valores y Liderazgo",
    "Primaria Integral",
    "Secundaria de Excelencia",
    "Campus y Alianzas",
  ],
  servicios: [
    { name: "Aula Virtual", href: "#acceso" },
    { name: "Portal del Estudiante", href: "#acceso" },
    { name: "Biblioteca Digital", href: "#servicios" },
    { name: "Correo Institucional", href: "#acceso" },
    { name: "Pagos en Línea", href: "#acceso" },
    { name: "Calendario Académico", href: "#calendario" },
  ],
  paginas: [
    { name: "Historia", href: "/resena-historica" },
    { name: "Filosofía Institucional", href: "/filosofia" },
    { name: "Autoridades", href: "/autoridades-academicas" },
    { name: "Modelo Educativo", href: "/modelo-educativo" },
    { name: "Reglamento Académico", href: "/reglamento-academico" },
    { name: "Manual del Estudiante", href: "/manual-estudiante" },
    { name: "Logosímbolo", href: "/logosimbolo" },
    { name: "Trabaja en UCATECI", href: "/trabaja-en-ucateci" },
    { name: "Admisiones", href: "#admisiones" },
    { name: "Becas", href: "#admisiones" },
    { name: "Tour Virtual", href: "#tour" },
    { name: "Noticias", href: "#noticias" },
    { name: "Contacto", href: "#contacto" },
    { name: "Transparencia", href: "#transparencia" },
  ],
}
