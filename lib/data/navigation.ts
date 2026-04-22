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
        heading: "La Universidad",
        items: [
          { title: "Historia", href: "#historia", icon: Building2, description: "Más de 40 años de excelencia académica" },
          { title: "Misión y Visión", href: "#mision", icon: BookOpen },
          { title: "Fides et Ratio", href: "#lema", icon: GraduationCap },
          { title: "Autoridades", href: "#autoridades", icon: Users },
        ],
      },
      {
        heading: "Institucional",
        items: [
          { title: "Acreditaciones", href: "#acreditaciones", icon: Globe, description: "MESCyT, ADAAC, AUSJAL" },
          { title: "Transparencia", href: "#transparencia", icon: Scale },
          { title: "Campus La Vega", href: "#campus", icon: MapPin },
          { title: "Tour Virtual", href: "#tour", icon: Globe },
        ],
      },
    ],
    featured: {
      title: "40+ Años Formando Profesionales Íntegros",
      description: "Conoce el legado católico y la vocación educativa que nos distingue en el Cibao.",
      href: "#historia",
      image: "/ucateci/campus-aerial.jpg",
    },
  },
  {
    label: "Oferta Académica",
    href: "#oferta",
    columns: [
      {
        heading: "Facultades",
        items: [
          { title: "Ciencias de la Salud", href: "#oferta", icon: Stethoscope, description: "Medicina, Odontología, Enfermería" },
          { title: "Humanidades", href: "#oferta", icon: BookOpen, description: "Derecho, Psicología, Educación" },
          { title: "Ingeniería", href: "#oferta", icon: Cpu, description: "Civil, Industrial, Sistemas" },
          { title: "Ciencias Económicas", href: "#oferta", icon: Calculator, description: "Administración, Contabilidad" },
        ],
      },
      {
        heading: "Programas",
        items: [
          { title: "Grado", href: "#oferta", icon: GraduationCap },
          { title: "Postgrado y Maestrías", href: "#postgrado", icon: Microscope },
          { title: "Educación Continua", href: "#continua", icon: BookOpen },
          { title: "Técnicos Superiores", href: "#tecnicos", icon: Users },
        ],
      },
    ],
    featured: {
      title: "Admisiones 2026 — Forma Parte de UCATECI",
      description: "Inicia tu camino académico. Solicita admisión en línea y accede a becas por mérito.",
      href: "#admisiones",
      image: "/ucateci/students-campus.jpg",
    },
  },
  {
    label: "Investigación",
    href: "#investigacion",
    columns: [
      {
        heading: "Investigación",
        items: [
          { title: "Centros de Investigación", href: "#investigacion", icon: Microscope },
          { title: "Revista Científica", href: "#investigacion", icon: BookOpen },
          { title: "Publicaciones", href: "#investigacion", icon: BookOpen },
          { title: "Semilleros", href: "#investigacion", icon: Users },
        ],
      },
      {
        heading: "Innovación",
        items: [
          { title: "Vinculación Empresarial", href: "#empresas", icon: Building2 },
          { title: "Emprendimiento", href: "#emprendimiento", icon: ArrowRight },
          { title: "Proyectos Comunitarios", href: "#comunidad", icon: Heart },
          { title: "Convenios Internacionales", href: "#convenios", icon: Globe },
        ],
      },
    ],
    featured: {
      title: "Investigación con impacto social",
      description: "Generamos conocimiento aplicado para transformar la sociedad dominicana.",
      href: "#investigacion",
      image: "/ucateci/research-lab.jpg",
    },
  },
  {
    label: "Vida Universitaria",
    href: "#vida",
    columns: [
      {
        heading: "Servicios Académicos",
        items: [
          { title: "Biblioteca", href: "#servicios", icon: BookOpen },
          { title: "Clínica UCATECI", href: "#servicios", icon: Stethoscope },
          { title: "Pastoral Universitaria", href: "#servicios", icon: Heart },
          { title: "Deportes", href: "#vida", icon: Users },
        ],
      },
      {
        heading: "Plataformas Estudiantiles",
        items: [
          { title: "Aula Virtual", href: "#acceso", icon: Globe },
          { title: "Portal del Estudiante", href: "#acceso", icon: Users },
          { title: "Becas y Ayudas Económicas", href: "#admisiones", icon: GraduationCap },
          { title: "Movilidad Internacional", href: "#vida", icon: Globe },
        ],
      },
    ],
    featured: {
      title: "Más que una carrera, una experiencia formativa",
      description: "Descubre la formación integral que UCATECI ofrece a sus estudiantes.",
      href: "#vida",
      image: "/ucateci/student-life.jpg",
    },
  },
  {
    label: "Campus y Alianzas",
    href: "#campus",
    columns: [
      {
        heading: "Sedes Académicas",
        items: [
          { title: "Campus La Vega", href: "#la-vega", icon: MapPin, description: "Sede principal — La Vega" },
          { title: "Recinto Constanza", href: "/campus/constanza", icon: MapPin, description: "Formación con enfoque rural y ambiental" },
        ],
      },
      {
        heading: "Alianzas Educativas",
        items: [
          { title: "Centro Educacional Bonao (CEBUCATECI)", href: "/campus/ceb", icon: BookOpen, description: "Centro educativo aliado" },
          { title: "Convenios con colegios", href: "#alianzas", icon: Globe, description: "Articulación con programas preuniversitarios" },
          { title: "Extensiones y sedes", href: "#extensiones", icon: Building2 },
        ],
      },
    ],
    featured: {
      title: "Red de campus y alianzas estratégicas",
      description: "Conoce nuestras sedes, extensiones y alianzas con instituciones educativas en todo el país.",
      href: "#campus",
      image: "/ucateci/campus-aerial.jpg",
    },
  },
]

/* ------------------------------------------------------------------ */
/*  Búsqueda rápida (Command palette)                                 */
/* ------------------------------------------------------------------ */

export const SEARCH_ITEMS = {
  carreras: [
    "Medicina",
    "Odontología",
    "Enfermería",
    "Derecho",
    "Psicología",
    "Administración de Empresas",
    "Contabilidad",
    "Ingeniería Civil",
    "Ingeniería Industrial",
    "Ingeniería de Sistemas",
    "Educación Básica",
    "Arquitectura",
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
    { name: "Admisiones", href: "#admisiones" },
    { name: "Becas", href: "#admisiones" },
    { name: "Tour Virtual", href: "#tour" },
    { name: "Noticias", href: "#noticias" },
    { name: "Contacto", href: "#contacto" },
    { name: "Transparencia", href: "#transparencia" },
  ],
}
