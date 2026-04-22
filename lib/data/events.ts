/* ------------------------------------------------------------------ */
/*  Tipos                                                              */
/* ------------------------------------------------------------------ */

export type CalendarEvent = {
  day: string
  month: string
  weekday: string
  title: string
  time: string
  place: string
  tag: string
}

/* ------------------------------------------------------------------ */
/*  Próximos eventos                                                   */
/* ------------------------------------------------------------------ */

export const UPCOMING_EVENTS: CalendarEvent[] = [
  {
    day: "22",
    month: "Abr",
    weekday: "Miércoles",
    title: "Jornada de Investigación Científica 2026",
    time: "08:30 a.m. – 04:00 p.m.",
    place: "Auditorio Padre Camilo Thomén",
    tag: "Académico",
  },
  {
    day: "05",
    month: "May",
    weekday: "Martes",
    title: "Feria de Admisiones: Carreras de Grado y Postgrado",
    time: "09:00 a.m. – 02:00 p.m.",
    place: "Plaza central del campus",
    tag: "Admisiones",
  },
  {
    day: "18",
    month: "May",
    weekday: "Lunes",
    title: "Misa universitaria por el Día del Estudiante",
    time: "11:00 a.m.",
    place: "Capilla Santa María, UCATECI",
    tag: "Pastoral",
  },
  {
    day: "07",
    month: "Jun",
    weekday: "Domingo",
    title: "Graduación Extraordinaria · Promoción 2025-III",
    time: "04:00 p.m.",
    place: "Gran Teatro del Cibao",
    tag: "Institucional",
  },
]
