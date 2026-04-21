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
  Leaf,
  Globe,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type RoleKey = "estudiantes" | "padres" | "docentes" | "aspirantes"

const roles: { key: RoleKey; label: string; icon: React.ElementType }[] = [
  { key: "estudiantes", label: "Estudiantes", icon: GraduationCap },
  { key: "padres", label: "Padres", icon: Home },
  { key: "docentes", label: "Docentes", icon: Users },
  { key: "aspirantes", label: "Aspirantes", icon: LogIn },
]

const links: Record<
  RoleKey,
  { title: string; desc: string; icon: React.ElementType; href: string; tag?: string }[]
> = {
  estudiantes: [
    {
      title: "Portal del Estudiante",
      desc: "Notas, horarios y actividades académicas",
      icon: Monitor,
      href: "/campus/constanza#vida",
    },
    {
      title: "Biblioteca Digital",
      desc: "Libros, recursos y materiales de estudio",
      icon: BookMarked,
      href: "/campus/constanza#academics",
    },
    {
      title: "Correo Institucional",
      desc: "Comunicación oficial de la universidad",
      icon: Mail,
      href: "/campus/constanza#contacto",
    },
    {
      title: "Calendario Académico",
      desc: "Horarios de clases y eventos universitarios",
      icon: CalendarDays,
      href: "/campus/constanza#academics",
    },
    {
      title: "Investigación",
      desc: "Proyectos de investigación y laboratorios",
      icon: Microscope,
      href: "/campus/constanza#vida",
    },
    {
      title: "Recursos Académicos",
      desc: "Materiales de apoyo y guías de estudio",
      icon: FileText,
      href: "/campus/constanza#academics",
    },
  ],
  padres: [
    {
      title: "Portal de Padres",
      desc: "Seguimiento académico de sus hijos",
      icon: Monitor,
      href: "/campus/constanza#contacto",
    },
    {
      title: "Calendario Académico",
      desc: "Fechas importantes y eventos",
      icon: CalendarDays,
      href: "/campus/constanza#academics",
    },
    {
      title: "Comunicados",
      desc: "Información importante de la universidad",
      icon: Mail,
      href: "/campus/constanza#contacto",
    },
    {
      title: "Pagos en Línea",
      desc: "Mensualidades y servicios universitarios",
      icon: CreditCard,
      href: "/campus/constanza#contacto",
    },
    {
      title: "Actividades Familiares",
      desc: "Eventos y actividades para familias",
      icon: Heart,
      href: "/campus/constanza#vida",
    },
    {
      title: "Orientación Vocacional",
      desc: "Apoyo para el desarrollo profesional",
      icon: Briefcase,
      href: "/campus/constanza#vida",
    },
  ],
  docentes: [
    {
      title: "Portal Docente",
      desc: "Herramientas para la enseñanza y evaluación",
      icon: Monitor,
      href: "/campus/constanza#contacto",
    },
    {
      title: "Recursos Académicos",
      desc: "Materiales didácticos y guías pedagógicas",
      icon: BookMarked,
      href: "/campus/constanza#academics",
    },
    {
      title: "Calendario Académico",
      desc: "Horarios de clases y reuniones",
      icon: CalendarDays,
      href: "/campus/constanza#academics",
    },
    {
      title: "Investigación",
      desc: "Proyectos de investigación y publicaciones",
      icon: Microscope,
      href: "/campus/constanza#vida",
    },
    {
      title: "Correo Institucional",
      desc: "Comunicación oficial universitaria",
      icon: Mail,
      href: "/campus/constanza#contacto",
    },
    {
      title: "Desarrollo Profesional",
      desc: "Cursos y capacitaciones continuas",
      icon: GraduationCap,
      href: "/campus/constanza#vida",
    },
  ],
  aspirantes: [
    {
      title: "Proceso de Admisión",
      desc: "Requisitos y pasos para ingresar",
      icon: LogIn,
      href: "/campus/constanza#contacto",
    },
    {
      title: "Oferta Académica",
      desc: "Programas de grado y posgrado disponibles",
      icon: GraduationCap,
      href: "/campus/constanza#academics",
    },
    {
      title: "Calendario Académico",
      desc: "Fechas importantes de admisión",
      icon: CalendarDays,
      href: "/campus/constanza#academics",
    },
    {
      title: "Becas y Ayudas",
      desc: "Oportunidades de financiamiento",
      icon: CreditCard,
      href: "/campus/constanza#contacto",
    },
    {
      title: "Tour Virtual",
      desc: "Conoce nuestras instalaciones",
      icon: Globe,
      href: "/campus/constanza#tour",
    },
    {
      title: "Contacto Directo",
      desc: "Habla con nuestro equipo de admisiones",
      icon: Mail,
      href: "/campus/constanza#contacto",
    },
  ],
}

export function ConstanzaQuickAccess() {
  const [activeRole, setActiveRole] = useState<RoleKey>("estudiantes")

  return (
    <section id="acceso" aria-labelledby="acceso-title" className="relative -mt-10 md:-mt-16 lg:-mt-20 z-10">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 p-6 md:p-8 border-b border-border">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                Acceso rápido
              </div>
              <h2 id="acceso-title" className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
                ¿Quién eres en UCATECI-Constanza?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                Selecciona tu perfil para encontrar los servicios y recursos más importantes del campus.
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
                    aria-selected={active}
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

          <div className="p-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {links[activeRole].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group relative overflow-hidden rounded-3xl border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <link.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{link.title}</h3>
                        {link.tag && (
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                            {link.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{link.desc}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                ¿No encuentras lo que buscas?
              </p>
              <Button asChild>
                <Link href="/campus/constanza#contacto">
                  Contáctanos
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