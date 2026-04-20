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
      desc: "Notas, horarios y actividades escolares",
      icon: Monitor,
      href: "/campus/ceb#vida",
    },
    {
      title: "Biblioteca Digital",
      desc: "Libros, recursos y materiales de estudio",
      icon: BookMarked,
      href: "/campus/ceb#vida",
    },
    {
      title: "Correo Institucional",
      desc: "Comunicación oficial del colegio",
      icon: Mail,
      href: "/campus/ceb#contacto",
    },
    {
      title: "Calendario Académico",
      desc: "Horarios de clases y eventos escolares",
      icon: CalendarDays,
      href: "/campus/ceb#academics",
    },
    {
      title: "Actividades Extracurriculares",
      desc: "Deportes, arte y clubs estudiantiles",
      icon: Heart,
      href: "/campus/ceb#vida",
    },
    {
      title: "Recursos Académicos",
      desc: "Materiales de apoyo y guías de estudio",
      icon: FileText,
      href: "/campus/ceb#academics",
    },
  ],
  padres: [
    {
      title: "Portal de Padres",
      desc: "Seguimiento académico de sus hijos",
      icon: Monitor,
      href: "/campus/ceb#contacto",
    },
    {
      title: "Calendario Escolar",
      desc: "Fechas importantes y eventos",
      icon: CalendarDays,
      href: "/campus/ceb#academics",
    },
    {
      title: "Comunicados",
      desc: "Información importante del colegio",
      icon: Mail,
      href: "/campus/ceb#contacto",
    },
    {
      title: "Pagos en Línea",
      desc: "Mensualidades y servicios escolares",
      icon: CreditCard,
      href: "/campus/ceb#contacto",
    },
    {
      title: "Actividades Familiares",
      desc: "Eventos y reuniones para padres",
      icon: Users,
      href: "/campus/ceb#vida",
    },
    {
      title: "Contacto Directo",
      desc: "Comuníquese con los docentes",
      icon: Heart,
      href: "/campus/ceb#contacto",
    },
  ],
  docentes: [
    {
      title: "Portal Docente",
      desc: "Gestión académica y administrativa",
      icon: Monitor,
      href: "/campus/ceb#contacto",
    },
    {
      title: "Recursos Pedagógicos",
      desc: "Materiales didácticos y guías",
      icon: BookMarked,
      href: "/campus/ceb#academics",
    },
    {
      title: "Correo Institucional",
      desc: "Comunicación oficial @cebucateci.edu.do",
      icon: Mail,
      href: "/campus/ceb#contacto",
    },
    {
      title: "Calendario Docente",
      desc: "Reuniones, evaluaciones y eventos",
      icon: CalendarDays,
      href: "/campus/ceb#academics",
    },
    {
      title: "Desarrollo Profesional",
      desc: "Capacitaciones y formación continua",
      icon: GraduationCap,
      href: "/campus/ceb#acerca",
    },
    {
      title: "Comunidad Educativa",
      desc: "Colaboración docente y networking",
      icon: Users,
      href: "/campus/ceb#vida",
    },
  ],
  aspirantes: [
    {
      title: "Proceso de Admisión",
      desc: "Guía completa para ingresar al CEB",
      icon: LogIn,
      href: "/campus/ceb#contacto",
      tag: "Abierto",
    },
    {
      title: "Oferta Académica",
      desc: "Niveles educativos y especializaciones",
      icon: GraduationCap,
      href: "/campus/ceb#academics",
    },
    {
      title: "Valores y Filosofía",
      desc: "La esencia educativa del CEB",
      icon: Heart,
      href: "/campus/ceb#acerca",
    },
    {
      title: "Requisitos de Ingreso",
      desc: "Documentación necesaria",
      icon: FileText,
      href: "/campus/ceb#contacto",
    },
    {
      title: "Visita Virtual",
      desc: "Conoce nuestras instalaciones",
      icon: Monitor,
      href: "/campus/ceb#tour",
    },
    {
      title: "Contacto Admisiones",
      desc: "Asesoría personalizada",
      icon: Mail,
      href: "/campus/ceb#contacto",
    },
  ],
}

export function CEBQuickAccess() {
  const [role, setRole] = useState<RoleKey>("estudiantes")
  const items = links[role]

  return (
    <section
      id="acceso"
      aria-labelledby="acceso-title"
      className="relative -mt-10 md:-mt-16 lg:-mt-20 z-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 p-6 md:p-8 border-b border-border">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                Acceso rápido
              </div>
              <h2
                id="acceso-title"
                className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance"
              >
                ¿Quién eres en CEBUCATECI?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                Selecciona tu perfil para acceder a los servicios y recursos más relevantes de nuestra comunidad educativa.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Perfiles de usuario"
              className="inline-flex flex-wrap rounded-full bg-muted p-1 gap-1"
            >
              {roles.map(({ key, label, icon: Icon }) => {
                const active = role === key
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setRole(key)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-primary text-primary-foreground shadow"
                        : "text-foreground/70 hover:text-primary"
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-muted/40 p-6 text-primary">
            <div className="sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Servicios para {roles.find(r => r.key === role)?.label.toLowerCase()}
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button asChild variant="outline" size="sm">
                  <Link href="/campus/ceb#contacto">
                    Ver todos
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group relative overflow-hidden rounded-xl border border-border bg-background p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-primary group-hover:text-primary/80 transition-colors">
                          {item.title}
                        </h3>
                        {item.tag && (
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}