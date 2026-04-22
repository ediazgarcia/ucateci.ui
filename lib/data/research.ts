import { Beaker, BookOpenCheck, FlaskConical, LineChart, Microscope } from "lucide-react"

export type ResearchCenter = {
  icon: React.ElementType
  name: string
  area: string
  projects: number
}

export const RESEARCH_CENTERS: ResearchCenter[] = [
  { icon: Microscope, name: "Centro de Salud Pública", area: "Ciencias de la Salud", projects: 14 },
  { icon: Beaker, name: "Centro de Innovación Agrícola", area: "Ciencias Agropecuarias", projects: 9 },
  { icon: LineChart, name: "Observatorio Económico del Cibao", area: "Ciencias Económicas", projects: 11 },
  { icon: BookOpenCheck, name: "Centro de Estudios Educativos", area: "Humanidades", projects: 7 },
]

export const RESEARCH_STATS = [
  { value: "41", label: "Proyectos activos" },
  { value: "120+", label: "Publicaciones" },
  { value: "18", label: "Convenios" },
]
