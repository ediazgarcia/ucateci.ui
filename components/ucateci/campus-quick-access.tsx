"use client"

import { useState } from "react"
import {
  Monitor,
  BookMarked,
  Mail,
  CreditCard,
  FileText,
  CalendarDays,
  GraduationCap,
  Users,
  Briefcase,
  LogIn,
  ArrowUpRight,
  Heart,
  Home,
  Microscope,
  Globe,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CAMPUS_DATA, type CampusData } from "@/lib/data"

type RoleKey = "estudiantes" | "padres" | "docentes" | "aspirantes"

const roles: { key: RoleKey; label: string; icon: React.ElementType }[] = [
  { key: "estudiantes", label: "Estudiantes", icon: GraduationCap },
  { key: "padres", label: "Padres", icon: Home },
  { key: "docentes", label: "Docentes", icon: Users },
  { key: "aspirantes", label: "Aspirantes", icon: LogIn },
]

export function CampusQuickAccess({ campusId }: { campusId: "ceb" | "constanza" }) {
  const campus = CAMPUS_DATA[campusId]

  const [activeRole, setActiveRole] = useState<RoleKey>("estudiantes")

  const isCEB = campus.id === "ceb"

  const links: Record<
    RoleKey,
    { title: string; desc: string; icon: React.ElementType; href: string; tag?: string }[]
  > = {
    estudiantes: [
      {
        title: "Portal del Estudiante",
        desc: isCEB ? "Notas, horarios y actividades escolares" : "Notas, horarios y actividades académicas",
        icon: Monitor,
        href: `/campus/${campus.id}#vida`,
      },
      {
        title: "Biblioteca Digital",
        desc: "Libros, recursos y materiales de estudio",
        icon: BookMarked,
        href: `/campus/${campus.id}#academics`,
      },
      {
        title: "Correo Institucional",
        desc: "Comunicación oficial de la institución",
        icon: Mail,
        href: `/campus/${campus.id}#contacto`,
      },
      {
        title: "Calendario Académico",
        desc: "Horarios de clases y eventos",
        icon: CalendarDays,
        href: `/campus/${campus.id}#academics`,
      },
      {
        title: isCEB ? "Actividades Extracurriculares" : "Investigación",
        desc: isCEB ? "Deportes, arte y clubs estudiantiles" : "Proyectos de investigación y laboratorios",
        icon: isCEB ? Heart : Microscope,
        href: `/campus/${campus.id}#vida`,
      },
      {
        title: "Recursos Académicos",
        desc: "Materiales de apoyo y guías de estudio",
        icon: FileText,
        href: `/campus/${campus.id}#academics`,
      },
    ],
    padres: [
      {
        title: "Portal de Padres",
        desc: "Seguimiento académico de sus hijos",
        icon: Monitor,
        href: `/campus/${campus.id}#contacto`,
      },
      {
        title: "Calendario Escolar",
        desc: "Fechas importantes y eventos",
        icon: CalendarDays,
        href: `/campus/${campus.id}#academics`,
      },
      {
        title: "Comunicados",
        desc: "Información importante de la institución",
        icon: Mail,
        href: `/campus/${campus.id}#contacto`,
      },
      {
        title: "Pagos en Línea",
        desc: "Mensualidades y servicios",
        icon: CreditCard,
        href: `/campus/${campus.id}#contacto`,
      },
      {
        title: "Actividades Familiares",
        desc: "Eventos y reuniones para padres",
        icon: Heart,
        href: `/campus/${campus.id}#vida`,
      },
      {
        title: isCEB ? "Contacto Directo" : "Orientación Vocacional",
        desc: isCEB ? "Comuníquese con los docentes" : "Apoyo para el desarrollo profesional",
        icon: isCEB ? Users : Briefcase,
        href: `/campus/${campus.id}#contacto`,
      },
    ],
    docentes: [
      {
        title: "Portal Docente",
        desc: "Gestión académica y evaluación",
        icon: Monitor,
        href: `/campus/${campus.id}#contacto`,
      },
      {
        title: "Recursos Pedagógicos",
        desc: "Materiales didácticos y guías",
        icon: BookMarked,
        href: `/campus/${campus.id}#academics`,
      },
      {
        title: "Correo Institucional",
        desc: "Comunicación oficial de la institución",
        icon: Mail,
        href: `/campus/${campus.id}#contacto`,
      },
      {
        title: "Calendario Docente",
        desc: "Reuniones, evaluaciones y eventos",
        icon: CalendarDays,
        href: `/campus/${campus.id}#academics`,
      },
      {
        title: "Desarrollo Profesional",
        desc: "Capacitaciones y formación continua",
        icon: GraduationCap,
        href: `/campus/${campus.id}#acerca`,
      },
      {
        title: isCEB ? "Comunidad Educativa" : "Investigación",
        desc: isCEB ? "Colaboración docente y networking" : "Proyectos de investigación",
        icon: isCEB ? Users : Microscope,
        href: `/campus/${campus.id}#vida`,
      },
    ],
    aspirantes: [
      {
        title: "Proceso de Admisión",
        desc: "Guía completa para ingresar",
        icon: LogIn,
        href: `/campus/${campus.id}#contacto`,
        tag: "Abierto",
      },
      {
        title: "Oferta Académica",
        desc: "Programas de estudio disponibles",
        icon: GraduationCap,
        href: `/campus/${campus.id}#academics`,
      },
      {
        title: isCEB ? "Valores y Filosofía" : "Tour Virtual",
        desc: isCEB ? "La esencia educativa de nuestra institución" : "Conoce nuestras instalaciones",
        icon: isCEB ? Heart : Globe,
        href: isCEB ? `/campus/${campus.id}#acerca` : `/campus/${campus.id}#tour`,
      },
      {
        title: "Requisitos de Ingreso",
        desc: "Documentación necesaria",
        icon: FileText,
        href: `/campus/${campus.id}#contacto`,
      },
      {
        title: "Becas y Ayudas",
        desc: "Oportunidades de financiamiento",
        icon: CreditCard,
        href: `/campus/${campus.id}#contacto`,
      },
      {
        title: "Contacto Admisiones",
        desc: "Asesoría personalizada",
        icon: Mail,
        href: `/campus/${campus.id}#contacto`,
      },
    ],
  }

  return (
    <section id="acceso" aria-labelledby="acceso-title" className="relative -mt-10 md:-mt-16 lg:-mt-20 z-10">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 p-6 md:p-8 border-b border-border bg-muted/20">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                Acceso rápido
              </div>
              <h2 id="acceso-title" className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
                ¿Quién eres en {campus.shortName}?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                Selecciona tu perfil para encontrar los servicios y recursos más importantes del {campus.type}.
              </p>
            </div>
            <div
              role="tablist"
              aria-label="Perfiles de usuario"
              className="inline-flex flex-wrap rounded-full bg-muted p-1"
            >
              {roles.map((role) => {
                const active = activeRole === role.key
                return (
                  <button
                    key={role.key}
                    role="tab"
                    aria-selected={active ? true : false}
                    onClick={() => setActiveRole(role.key)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-primary text-primary-foreground shadow"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <role.icon className="h-4 w-4" />
                    {role.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {links[activeRole].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <link.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg text-primary group-hover:text-primary/90 transition-colors">
                          {link.title}
                        </h3>
                        {link.tag && (
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary border border-primary/20">
                            {link.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground group-hover:text-muted-foreground/90 transition-colors">
                        {link.desc}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground/40 group-hover:text-primary transition-colors mt-1" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm font-medium text-muted-foreground mb-4">
                ¿No encuentras lo que buscas en el {campus.type}?
              </p>
              <Button asChild variant="outline" className="border-primary/20 hover:bg-primary/5">
                <Link href={`/campus/${campus.id}#contacto`}>
                  Ir a Mesa de Ayuda
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
