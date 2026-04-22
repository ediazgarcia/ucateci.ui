import {
  GraduationCap,
  BookOpen,
  Globe2,
  Calculator,
  Microscope,
  Palette,
  Trophy,
  Heart,
  Award,
  Building2,
  Users,
  MapPin,
  Cpu,
  Tractor,
  Droplets,
  Mountain,
  Music,
  Briefcase,
  Laptop,
  Leaf,
} from "lucide-react"
import type { MegaColumn, MegaMenu } from "./navigation"

export type SearchItem = { name: string; href: string }

export type CampusHeaderData = {
  phone: string
  email: string
  address: string
  megaMenus: MegaMenu[]
  searchItems: {
    servicios: SearchItem[]
    paginas: SearchItem[]
    actividades: string[]
  }
}

export type CampusSlide = {
  eyebrow: string
  title: string
  subtitle: string
  cta: { label: string; href: string }
  secondary: { label: string; href: string }
  video?: string
  image: string
}

export type CampusLevel = {
  level: string
  grades: string
  description: string
  icon: React.ElementType
}

export type CampusSpecialization = {
  title: string
  description: string
  icon: React.ElementType
}

export type CampusProgram = {
  title: string
  description: string
  features: string[]
}

export type CampusData = {
  id: string
  name: string
  shortName: string
  type: "recinto" | "centro"
  header: CampusHeaderData
  heroSlides: CampusSlide[]
  academics: {
    title: string
    description: string
    levels: CampusLevel[]
    specializations: CampusSpecialization[]
    programs: CampusProgram[]
    calendarLink?: string
  }
}

export const CEB_DATA: CampusData = {
  id: "ceb",
  name: "Centro Educacional Bonao",
  shortName: "Campus Bonao",
  type: "centro",
  header: {
    phone: "+1 (809) 123-4567",
    email: "info@cebucateci.edu.do",
    address: "Bonao, República Dominicana",
    megaMenus: [
      {
        label: "Nosotros",
        href: "/campus/ceb#acerca",
        columns: [
          {
            heading: "Nuestra Institución",
            items: [
              { title: "Historia", href: "/campus/ceb#acerca", icon: Building2, description: "Más de 20 años educando" },
              { title: "Misión y Visión", href: "/campus/ceb#acerca", icon: BookOpen },
              { title: "Valores Cristianos", href: "/campus/ceb#acerca", icon: Heart },
              { title: "Equipo Directivo", href: "/campus/ceb#acerca", icon: Users },
            ],
          },
          {
            heading: "Instalaciones",
            items: [
              { title: "Aulas Modernas", href: "/campus/ceb#tour", icon: Building2 },
              { title: "Laboratorios", href: "/campus/ceb#tour", icon: Microscope },
              { title: "Biblioteca", href: "/campus/ceb#tour", icon: BookOpen },
              { title: "Áreas Deportivas", href: "/campus/ceb#tour", icon: Trophy },
            ],
          },
        ],
        featured: {
          title: "Excelencia Educativa desde 2003",
          description: "Formando líderes con valores cristianos en el corazón del Cibao.",
          href: "/campus/ceb#acerca",
          image: "/ucateci/students-campus.jpg",
        },
      },
      {
        label: "Oferta Académica",
        href: "/campus/ceb#academics",
        columns: [
          {
            heading: "Niveles Educativos",
            items: [
              { title: "Inicial (3-5 años)", href: "/campus/ceb#academics", icon: Heart, description: "Fundamentos del aprendizaje" },
              { title: "Primaria (6-12 años)", href: "/campus/ceb#academics", icon: BookOpen, description: "Educación básica integral" },
              { title: "Secundaria (13-18 años)", href: "/campus/ceb#academics", icon: GraduationCap, description: "Preparación universitaria" },
            ],
          },
          {
            heading: "Especializaciones",
            items: [
              { title: "Bachillerato en Ciencias", href: "/campus/ceb#academics", icon: Microscope },
              { title: "Bachillerato en Humanidades", href: "/campus/ceb#academics", icon: Globe2 },
              { title: "Técnico en Informática", href: "/campus/ceb#academics", icon: Cpu },
              { title: "Inglés Avanzado", href: "/campus/ceb#academics", icon: Globe2 },
            ],
          },
        ],
        featured: {
          title: "Admisiones Abiertas",
          description: "Únete a nuestra comunidad educativa. Cupos limitados disponibles.",
          href: "/campus/ceb#contacto",
          image: "/ucateci/graduation.jpg",
        },
      },
      {
        label: "Vida Estudiantil",
        href: "/campus/ceb#vida",
        columns: [
          {
            heading: "Actividades",
            items: [
              { title: "Deportes", href: "/campus/ceb#vida", icon: Trophy, description: "Fútbol, baloncesto, voleibol" },
              { title: "Artes Plásticas", href: "/campus/ceb#vida", icon: Palette, description: "Pintura, dibujo, escultura" },
              { title: "Música y Canto", href: "/campus/ceb#vida", icon: Music, description: "Coro y clases de instrumentos" },
              { title: "Club de Lectura", href: "/campus/ceb#vida", icon: BookOpen, description: "Fomento de la lectura" },
            ],
          },
          {
            heading: "Servicios",
            items: [
              { title: "Pastoral Estudiantil", href: "/campus/ceb#vida", icon: Heart, description: "Valores cristianos" },
              { title: "Orientación Vocacional", href: "/campus/ceb#vida", icon: Users },
              { title: "Biblioteca Digital", href: "/campus/ceb#academics", icon: BookOpen },
              { title: "Servicio Social", href: "/campus/ceb#vida", icon: Heart },
            ],
          },
        ],
        featured: {
          title: "Más que estudiar",
          description: "Descubre todas las actividades que complementan tu formación académica.",
          href: "/campus/ceb#vida",
          image: "/ucateci/student-life.jpg",
        },
      },
      {
        label: "Admisiones",
        href: "/campus/ceb#contacto",
        columns: [
          {
            heading: "Proceso",
            items: [
              { title: "Requisitos de Ingreso", href: "/campus/ceb#contacto", icon: BookOpen },
              { title: "Fechas Importantes", href: "/campus/ceb#contacto", icon: BookOpen },
              { title: "Becas y Ayudas", href: "/campus/ceb#contacto", icon: GraduationCap },
              { title: "Formulario en Línea", href: "/campus/ceb#contacto", icon: Laptop },
            ],
          },
          {
            heading: "Información",
            items: [
              { title: "Horarios de Visita", href: "/campus/ceb#contacto", icon: MapPin },
              { title: "Costos y Pagos", href: "/campus/ceb#contacto", icon: Calculator },
              { title: "Contacto Directo", href: "/campus/ceb#contacto", icon: BookOpen },
              { title: "Preguntas Frecuentes", href: "/campus/ceb#contacto", icon: Users },
            ],
          },
        ],
        featured: {
          title: "Tu futuro comienza aquí",
          description: "Inicia tu proceso de admisión y forma parte de nuestra familia educativa.",
          href: "/campus/ceb#contacto",
          image: "/ucateci/students-campus.jpg",
        },
      },
    ],
    searchItems: {
      servicios: [
        { name: "Portal del Estudiante", href: "/campus/ceb#acceso" },
        { name: "Biblioteca Digital", href: "/campus/ceb#academics" },
        { name: "Correo Institucional", href: "/campus/ceb#contacto" },
        { name: "Calendario Académico", href: "/campus/ceb#academics" },
      ],
      paginas: [
        { name: "Acerca del CEB", href: "/campus/ceb#acerca" },
        { name: "Oferta Académica", href: "/campus/ceb#academics" },
        { name: "Vida Estudiantil", href: "/campus/ceb#vida" },
        { name: "Tour Virtual", href: "/campus/ceb#tour" },
        { name: "Admisiones", href: "/campus/ceb#contacto" },
        { name: "Contacto", href: "/campus/ceb#contacto" },
      ],
      actividades: [
        "Deportes",
        "Artes Plásticas",
        "Música",
        "Club de Lectura",
        "Pastoral",
        "Servicio Social",
        "Tecnología",
        "Inglés Conversacional",
      ],
    },
  },
  heroSlides: [
    {
      eyebrow: "Centro Educacional Bonao",
      title: "Excelencia académica desde 1971",
      subtitle:
        "Formamos líderes con carácter y principios. Educación bilingüe integral que combina valores cristianos, innovación pedagógica y desarrollo humano completo.",
      cta: { label: "Solicitar admisión", href: "/campus/ceb#contacto" },
      secondary: { label: "Conocer más", href: "/campus/ceb#acerca" },
      video: "https://www.youtube.com/embed/uQwSIVamo98?autoplay=1&mute=1&loop=1&playlist=uQwSIVamo98&controls=0&rel=0&playsinline=1",
      image: "/ucateci/students-campus.jpg",
    },
    {
      eyebrow: "Educación Bilingüe",
      title: "Preparados para el mundo global",
      subtitle:
        "Desde nivel inicial hasta bachillerato, nuestros estudiantes dominan el español y el inglés, preparándose para universidades de prestigio internacional.",
      cta: { label: "Ver programas", href: "/campus/ceb#academics" },
      secondary: { label: "Instalaciones", href: "/campus/ceb#vida" },
      image: "/ucateci/library.jpg",
    },
    {
      eyebrow: "Valores Cristianos",
      title: "Formación integral con propósito",
      subtitle:
        "Más que conocimientos, formamos personas íntegras, responsables y comprometidas con su comunidad. Una educación que transforma vidas.",
      cta: { label: "Nuestra misión", href: "/campus/ceb#acerca" },
      secondary: { label: "Admisiones", href: "/campus/ceb#contacto" },
      image: "/ucateci/campus-aerial.jpg",
    },
  ],
  academics: {
    title: "Educación de Excelencia",
    description: "Desde nivel inicial hasta bachillerato, ofrecemos una educación escolar integral que prepara a nuestros estudiantes para los desafíos universitarios y de la vida.",
    levels: [
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
    ],
    specializations: [
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
    ],
    programs: [
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
    ],
  }
}

export const CONSTANZA_DATA: CampusData = {
  id: "constanza",
  name: "Recinto Académico UCATECI-Constanza",
  shortName: "Campus Constanza",
  type: "recinto",
  header: {
    phone: "+1 (809) 539-2836",
    email: "info@constanza.ucateci.edu.do",
    address: "Constanza, República Dominicana",
    megaMenus: [
      {
        label: "Acerca del Campus",
        href: "/campus/constanza#acerca",
        columns: [
          {
            heading: "Nuestra Institución",
            items: [
              { title: "Historia", href: "/campus/constanza#acerca", icon: Building2, description: "Comprometidos con Constanza" },
              { title: "Misión y Visión", href: "/campus/constanza#acerca", icon: BookOpen },
              { title: "Educación Sostenible", href: "/campus/constanza#acerca", icon: Leaf },
              { title: "Equipo Directivo", href: "/campus/constanza#acerca", icon: Users },
            ],
          },
          {
            heading: "Enfoques Estratégicos",
            items: [
              { title: "Agricultura", href: "/campus/constanza#acerca", icon: Tractor },
              { title: "Gestión del Agua", href: "/campus/constanza#acerca", icon: Droplets },
              { title: "Ambiente", href: "/campus/constanza#acerca", icon: Mountain },
              { title: "Agroecoturismo", href: "/campus/constanza#acerca", icon: Globe2 },
            ],
          },
        ],
        featured: {
          title: "Educación sostenible para el desarrollo",
          description: "Contribuyendo al crecimiento exponencial de Constanza en agricultura, agua, ambiente y agroecoturismo.",
          href: "/campus/constanza#acerca",
          image: "/ucateci/campus-aerial.jpg",
        },
      },
      {
        label: "Oferta Académica",
        href: "/campus/constanza#academics",
        columns: [
          {
            heading: "Grado",
            items: [
              { title: "Licenciaturas", href: "/campus/constanza#academics", icon: GraduationCap, description: "Programas de 4 años" },
              { title: "Ingenierías", href: "/campus/constanza#academics", icon: Cpu, description: "Especializaciones técnicas" },
              { title: "Ciencias Ambientales", href: "/campus/constanza#academics", icon: Leaf, description: "Sostenibilidad y medio ambiente" },
              { title: "Administración", href: "/campus/constanza#academics", icon: Calculator, description: "Gestión empresarial" },
            ],
          },
          {
            heading: "Posgrado",
            items: [
              { title: "Maestrías", href: "/campus/constanza#academics", icon: BookOpen },
              { title: "Especializaciones", href: "/campus/constanza#academics", icon: Microscope },
              { title: "Doctorados", href: "/campus/constanza#academics", icon: GraduationCap },
              { title: "Diplomados", href: "/campus/constanza#academics", icon: Trophy },
            ],
          },
        ],
        featured: {
          title: "Admisiones Abiertas",
          description: "Únete a nuestra comunidad académica. Programas enfocados en el desarrollo sostenible.",
          href: "/campus/constanza#contacto",
          image: "/ucateci/graduation.jpg",
        },
      },
      {
        label: "Vida Estudiantil",
        href: "/campus/constanza#vida",
        columns: [
          {
            heading: "Actividades",
            items: [
              { title: "Clubes Ambientales", href: "/campus/constanza#vida", icon: Leaf, description: "Conservación y sostenibilidad" },
              { title: "Investigación", href: "/campus/constanza#vida", icon: Microscope, description: "Proyectos de campo" },
              { title: "Deportes", href: "/campus/constanza#vida", icon: Trophy, description: "Actividades recreativas" },
              { title: "Voluntariado", href: "/campus/constanza#vida", icon: Heart, description: "Servicio comunitario" },
            ],
          },
          {
            heading: "Servicios",
            items: [
              { title: "Biblioteca", href: "/campus/constanza#academics", icon: BookOpen },
              { title: "Laboratorios", href: "/campus/constanza#academics", icon: Microscope },
              { title: "Centro de Investigación", href: "/campus/constanza#vida", icon: Building2 },
              { title: "Orientación Profesional", href: "/campus/constanza#vida", icon: Users },
            ],
          },
        ],
        featured: {
          title: "Más que estudiar",
          description: "Descubre actividades que complementan tu formación académica en sostenibilidad.",
          href: "/campus/constanza#vida",
          image: "/ucateci/student-life.jpg",
        },
      },
      {
        label: "Admisiones",
        href: "/campus/constanza#contacto",
        columns: [
          {
            heading: "Proceso",
            items: [
              { title: "Requisitos de Ingreso", href: "/campus/constanza#contacto", icon: BookOpen },
              { title: "Fechas Importantes", href: "/campus/constanza#contacto", icon: BookOpen },
              { title: "Becas y Ayudas", href: "/campus/constanza#contacto", icon: GraduationCap },
              { title: "Formulario en Línea", href: "/campus/constanza#contacto", icon: Laptop },
            ],
          },
          {
            heading: "Información",
            items: [
              { title: "Horarios de Visita", href: "/campus/constanza#contacto", icon: MapPin },
              { title: "Costos y Pagos", href: "/campus/constanza#contacto", icon: Calculator },
              { title: "Contacto Directo", href: "/campus/constanza#contacto", icon: BookOpen },
              { title: "Preguntas Frecuentes", href: "/campus/constanza#contacto", icon: Users },
            ],
          },
        ],
        featured: {
          title: "Tu futuro comienza aquí",
          description: "Inicia tu proceso de admisión y forma parte de nuestra comunidad académica.",
          href: "/campus/constanza#contacto",
          image: "/ucateci/students-campus.jpg",
        },
      },
    ],
    searchItems: {
      servicios: [
        { name: "Portal del Estudiante", href: "/campus/constanza#acceso" },
        { name: "Biblioteca Digital", href: "/campus/constanza#academics" },
        { name: "Correo Institucional", href: "/campus/constanza#contacto" },
        { name: "Calendario Académico", href: "/campus/constanza#academics" },
      ],
      paginas: [
        { name: "Acerca del Campus", href: "/campus/constanza#acerca" },
        { name: "Oferta Académica", href: "/campus/constanza#academics" },
        { name: "Vida Estudiantil", href: "/campus/constanza#vida" },
        { name: "Tour Virtual", href: "/campus/constanza#tour" },
        { name: "Admisiones", href: "/campus/constanza#contacto" },
        { name: "Contacto", href: "/campus/constanza#contacto" },
      ],
      actividades: [
        "Clubes Ambientales",
        "Investigación de Campo",
        "Deportes",
        "Voluntariado",
        "Tecnología",
        "Inglés Conversacional",
      ],
    },
  },
  heroSlides: [
    {
      eyebrow: "Recinto Académico UCATECI-Constanza",
      title: "Educación sostenible para el desarrollo",
      subtitle:
        "Centro de educación superior que impulsa iniciativas en agricultura, gestión del agua, ambiente y agroecoturismo. Creemos en Constanza, en el valor de su gente y la riqueza de su tierra.",
      cta: { label: "Solicitar admisión", href: "/campus/constanza#contacto" },
      secondary: { label: "Conocer más", href: "/campus/constanza#acerca" },
      video: "https://www.youtube.com/embed/BiNRCwijXew?autoplay=1&mute=1&loop=1&playlist=BiNRCwijXew&controls=0&rel=0&playsinline=1",
      image: "/ucateci/campus-aerial.jpg",
    },
    {
      eyebrow: "Enfoques Estratégicos",
      title: "Desarrollo sostenible en cuatro ámbitos",
      subtitle:
        "Nuestros programas académicos están diseñados para potenciar el crecimiento de Constanza en agricultura sostenible, gestión eficiente del agua, conservación ambiental y agroecoturismo.",
      cta: { label: "Ver programas", href: "/campus/constanza#academics" },
      secondary: { label: "Instalaciones", href: "/campus/constanza#vida" },
      image: "/ucateci/research-lab.jpg",
    },
    {
      eyebrow: "Educación con propósito",
      title: "La principal vía para asegurar el desarrollo",
      subtitle:
        "La educación es la principal vía para asegurar el desarrollo de los pueblos. Formamos profesionales comprometidos con el progreso sostenible de Constanza y de toda la nación.",
      cta: { label: "Nuestra misión", href: "/campus/constanza#acerca" },
      secondary: { label: "Admisiones", href: "/campus/constanza#contacto" },
      image: "/ucateci/student-life.jpg",
    },
  ],
  academics: {
    title: "Educación Superior para el Desarrollo Sostenible",
    description: "Programas académicos de nivel superior especializados en agricultura, gestión del agua, ambiente y agroecoturismo, formando profesionales comprometidos con el desarrollo de Constanza.",
    levels: [
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
    ],
    specializations: [
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
    ],
    programs: [
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
    ],
    calendarLink: "https://ucateci.edu.do/images/2026/Calendarioacademico/-Calendario_Academico_2026_act.pdf"
  }
}

export const CAMPUS_DATA = {
  ceb: CEB_DATA,
  constanza: CONSTANZA_DATA,
}
