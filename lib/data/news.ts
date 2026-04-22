/* ------------------------------------------------------------------ */
/*  Tipos                                                              */
/* ------------------------------------------------------------------ */

export type NewsCategory = "Todas" | "Institucional" | "Académica" | "Investigación" | "Cultural"

export type NewsArticle = {
  title: string
  excerpt: string
  category: Exclude<NewsCategory, "Todas">
  date: string
  featured?: boolean
}

/* ------------------------------------------------------------------ */
/*  Categorías                                                         */
/* ------------------------------------------------------------------ */

export const NEWS_CATEGORIES: NewsCategory[] = [
  "Todas",
  "Institucional",
  "Académica",
  "Investigación",
  "Cultural",
]

/* ------------------------------------------------------------------ */
/*  Artículos                                                          */
/* ------------------------------------------------------------------ */

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    title: "UCATECI gradúa a más de 800 nuevos profesionales en acto solemne",
    excerpt:
      "La promoción más numerosa del año recibió sus títulos en una ceremonia celebrada en el campus central. La rectoría destacó el compromiso académico y la formación integral de los egresados.",
    category: "Institucional",
    date: "14 Abr 2026",
    featured: true,
  },
  {
    title: "Facultad de Ciencias de la Salud inaugura laboratorio de simulación clínica",
    excerpt:
      "El nuevo espacio de aprendizaje cuenta con simuladores de alta fidelidad para fortalecer la formación práctica en Medicina, Enfermería y Odontología.",
    category: "Académica",
    date: "08 Abr 2026",
  },
  {
    title: "Convocatoria abierta para el Fondo de Investigación UCATECI 2026",
    excerpt:
      "Docentes e investigadores pueden aplicar hasta el 30 de mayo con proyectos en salud, tecnología y ciencias sociales que impacten la región del Cibao.",
    category: "Investigación",
    date: "02 Abr 2026",
  },
  {
    title: "Semana Cultural de la Virgen de la Altagracia llena el campus de arte y espiritualidad",
    excerpt:
      "Conciertos, exposiciones y jornadas espirituales conmemoraron a la patrona de la República Dominicana, reafirmando la identidad católica de la universidad.",
    category: "Cultural",
    date: "21 Ene 2026",
  },
  {
    title: "Admisiones abiertas para el cuatrimestre mayo-agosto 2026",
    excerpt:
      "La universidad abre inscripciones para carreras de grado, postgrado y técnico superior. Becas disponibles por mérito académico.",
    category: "Institucional",
    date: "28 Mar 2026",
  },
  {
    title: "UCATECI firma convenio con hospital docente para rotaciones clínicas",
    excerpt:
      "El acuerdo ampliará las plazas de rotación en especialidades de alta demanda, fortaleciendo la formación médica de los estudiantes.",
    category: "Académica",
    date: "18 Mar 2026",
  },
]
