import { Stethoscope, Cog, BookOpen, Building2 } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Tipos                                                              */
/* ------------------------------------------------------------------ */

export type FacultyKey = "salud" | "ingenieria" | "humanidades" | "economicas"
export type Modality = "Presencial" | "Semipresencial"

export type Career = {
  name: string
  duration: string
  modality: Modality
  faculty: FacultyKey
  trending?: boolean
}

export type Faculty = {
  key: FacultyKey
  name: string
  short: string
  icon: React.ElementType
  description: string
  color: string
}

/* ------------------------------------------------------------------ */
/*  Facultades                                                         */
/* ------------------------------------------------------------------ */

export const FACULTIES: Faculty[] = [
  {
    key: "salud",
    name: "Ciencias de la Salud",
    short: "Salud",
    icon: Stethoscope,
    description:
      "Formamos profesionales comprometidos con el cuidado integral de la persona, con sólida base científica, ética y humanista.",
    color: "bg-brand-red/10 text-brand-red",
  },
  {
    key: "ingenieria",
    name: "Ciencias de la Ingeniería",
    short: "Ingeniería",
    icon: Cog,
    description:
      "Ingenieros capaces de diseñar soluciones tecnológicas sostenibles que impulsan el desarrollo del país y la región.",
    color: "bg-brand-navy/10 text-brand-navy",
  },
  {
    key: "humanidades",
    name: "Ciencias y Humanidades",
    short: "Humanidades",
    icon: BookOpen,
    description:
      "Profesionales de la educación, la comunicación y las ciencias sociales al servicio del bien común y la cultura.",
    color: "bg-brand-gold/20 text-brand-navy",
  },
  {
    key: "economicas",
    name: "Ciencias Económicas y Sociales",
    short: "Económicas",
    icon: Building2,
    description:
      "Líderes para la gestión empresarial, la administración pública y el desarrollo económico con enfoque ético.",
    color: "bg-brand-navy/10 text-brand-navy",
  },
]

/* ------------------------------------------------------------------ */
/*  Catálogo de carreras                                               */
/* ------------------------------------------------------------------ */

export const CAREERS: Career[] = [
  // Ciencias de la Salud
  { name: "Doctor en Medicina", duration: "6 años", modality: "Presencial", faculty: "salud", trending: true },
  { name: "Licenciatura en Enfermería", duration: "4 años", modality: "Presencial", faculty: "salud" },
  { name: "Doctor en Odontología", duration: "5 años", modality: "Presencial", faculty: "salud", trending: true },
  { name: "Licenciatura en Bioanálisis", duration: "4 años", modality: "Presencial", faculty: "salud" },
  { name: "Licenciatura en Farmacia", duration: "4 años", modality: "Presencial", faculty: "salud" },
  { name: "Licenciatura en Imágenes Médicas", duration: "4 años", modality: "Presencial", faculty: "salud" },
  { name: "Licenciatura en Terapia Física", duration: "4 años", modality: "Presencial", faculty: "salud" },
  { name: "Licenciatura en Nutrición y Dietética", duration: "4 años", modality: "Presencial", faculty: "salud" },

  // Ingeniería
  { name: "Ingeniería Civil", duration: "5 años", modality: "Presencial", faculty: "ingenieria", trending: true },
  { name: "Ingeniería Industrial", duration: "5 años", modality: "Presencial", faculty: "ingenieria" },
  { name: "Ingeniería Sistemas y Computación", duration: "4 años", modality: "Presencial", faculty: "ingenieria", trending: true },
  { name: "Ingeniería Electromecánica", duration: "5 años", modality: "Presencial", faculty: "ingenieria" },
  { name: "Ingeniería Agronómica", duration: "5 años", modality: "Presencial", faculty: "ingenieria" },
  { name: "Arquitectura", duration: "5 años", modality: "Presencial", faculty: "ingenieria" },
  { name: "Licenciatura en Informática", duration: "4 años", modality: "Semipresencial", faculty: "ingenieria" },

  // Humanidades
  { name: "Licenciatura en Educación Inicial", duration: "4 años", modality: "Semipresencial", faculty: "humanidades" },
  { name: "Licenciatura en Educación Básica", duration: "4 años", modality: "Semipresencial", faculty: "humanidades" },
  { name: "Licenciatura en Lenguas Modernas", duration: "4 años", modality: "Presencial", faculty: "humanidades" },
  { name: "Licenciatura en Comunicación Social", duration: "4 años", modality: "Presencial", faculty: "humanidades" },
  { name: "Licenciatura en Psicología", duration: "4 años", modality: "Presencial", faculty: "humanidades", trending: true },
  { name: "Licenciatura en Filosofía", duration: "4 años", modality: "Presencial", faculty: "humanidades" },
  { name: "Licenciatura en Teología", duration: "4 años", modality: "Presencial", faculty: "humanidades" },

  // Económicas
  { name: "Licenciatura en Administración de Empresas", duration: "4 años", modality: "Presencial", faculty: "economicas", trending: true },
  { name: "Licenciatura en Contabilidad", duration: "4 años", modality: "Presencial", faculty: "economicas" },
  { name: "Licenciatura en Mercadeo", duration: "4 años", modality: "Presencial", faculty: "economicas" },
  { name: "Licenciatura en Negocios Internacionales", duration: "4 años", modality: "Presencial", faculty: "economicas" },
  { name: "Licenciatura en Economía", duration: "4 años", modality: "Presencial", faculty: "economicas" },
  { name: "Licenciatura en Derecho", duration: "4 años", modality: "Presencial", faculty: "economicas", trending: true },
]
