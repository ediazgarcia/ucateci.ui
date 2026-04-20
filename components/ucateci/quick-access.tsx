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
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type RoleKey = "estudiantes" | "docentes" | "aspirantes" | "egresados"

const roles: { key: RoleKey; label: string; icon: React.ElementType }[] = [
  { key: "estudiantes", label: "Estudiantes", icon: GraduationCap },
  { key: "docentes", label: "Docentes", icon: Users },
  { key: "aspirantes", label: "Aspirantes", icon: LogIn },
  { key: "egresados", label: "Egresados", icon: Briefcase },
]

const links: Record<
  RoleKey,
  { title: string; desc: string; icon: React.ElementType; href: string; tag?: string }[]
> = {
  estudiantes: [
    {
      title: "Aula Virtual",
      desc: "Plataforma Moodle con tus asignaturas",
      icon: Monitor,
      href: "#",
      tag: "Moodle",
    },
    {
      title: "Portal del Estudiante",
      desc: "Notas, pagos, horarios y certificaciones",
      icon: FileText,
      href: "#",
    },
    {
      title: "Correo Institucional",
      desc: "Microsoft 365 @est.ucateci.edu.do",
      icon: Mail,
      href: "#",
    },
    {
      title: "Biblioteca Virtual",
      desc: "Libros, revistas y bases de datos",
      icon: BookMarked,
      href: "#",
    },
    {
      title: "Pagos en Línea",
      desc: "Mensualidades y servicios académicos",
      icon: CreditCard,
      href: "#",
    },
    {
      title: "Calendario Académico",
      desc: "Cuatrimestres, feriados y entregas",
      icon: CalendarDays,
      href: "#",
    },
  ],
  docentes: [
    {
      title: "Aula Virtual Docente",
      desc: "Gestiona tus cursos y estudiantes",
      icon: Monitor,
      href: "#",
    },
    {
      title: "Portal Docente",
      desc: "Registro de notas y asistencia",
      icon: FileText,
      href: "#",
    },
    {
      title: "Correo Institucional",
      desc: "@ucateci.edu.do",
      icon: Mail,
      href: "#",
    },
    {
      title: "Recursos Docentes",
      desc: "Formatos, guías y formación continua",
      icon: BookMarked,
      href: "#",
    },
    {
      title: "Investigación",
      desc: "Convocatorias y fondos de investigación",
      icon: Briefcase,
      href: "#",
      tag: "Nuevo",
    },
    {
      title: "Calendario Institucional",
      desc: "Reuniones y jornadas académicas",
      icon: CalendarDays,
      href: "#",
    },
  ],
  aspirantes: [
    {
      title: "Solicita tu Admisión",
      desc: "Inscríbete al próximo cuatrimestre",
      icon: LogIn,
      href: "#",
      tag: "Abierto",
    },
    {
      title: "Oferta Académica",
      desc: "Carreras de grado y postgrado",
      icon: GraduationCap,
      href: "#oferta",
    },
    {
      title: "Becas y Financiamiento",
      desc: "Programa de becas UCATECI y MESCyT",
      icon: CreditCard,
      href: "#",
    },
    {
      title: "Prueba de Admisión",
      desc: "Guía y fechas de la prueba POMA",
      icon: FileText,
      href: "#",
    },
    {
      title: "Visita el Campus",
      desc: "Agenda un tour guiado",
      icon: CalendarDays,
      href: "#",
    },
    {
      title: "Contactar Admisiones",
      desc: "Asesoría personalizada",
      icon: Mail,
      href: "#",
    },
  ],
  egresados: [
    {
      title: "Red Alumni UCATECI",
      desc: "Conecta con tu promoción",
      icon: Users,
      href: "#",
    },
    {
      title: "Certificaciones Oficiales",
      desc: "Solicita récord de notas y títulos",
      icon: FileText,
      href: "#",
    },
    {
      title: "Bolsa de Empleo",
      desc: "Oportunidades laborales exclusivas",
      icon: Briefcase,
      href: "#",
    },
    {
      title: "Educación Continua",
      desc: "Diplomados, maestrías y doctorados",
      icon: GraduationCap,
      href: "#",
    },
    {
      title: "Eventos de Egresados",
      desc: "Reuniones, charlas y networking",
      icon: CalendarDays,
      href: "#",
    },
    {
      title: "Contacto Alumni",
      desc: "Actualiza tus datos y mantente en contacto",
      icon: Mail,
      href: "#",
    },
  ],
}

export function QuickAccess() {
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
              <div className="text-xs uppercase tracking-widest text-brand-red font-semibold mb-2">
                Acceso rápido
              </div>
              <h2
                id="acceso-title"
                className="font-serif text-2xl md:text-3xl font-bold text-brand-navy text-balance"
              >
                ¿Quién eres hoy en UCATECI?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                Selecciona tu perfil para ver los servicios y enlaces más relevantes.
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
                        ? "bg-brand-navy text-brand-cream shadow"
                        : "text-foreground/70 hover:text-brand-navy"
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-muted/40 p-6 text-brand-navy">
            <div className="sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Campus y Alianzas
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-brand-navy">
                  Sedes, extensiones y colaboraciones estratégicas
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  Accede a los campus de La Vega y Constanza, nuestros centros educativos aliados y las extensiones académicas de UCATECI.
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button asChild className="rounded-full bg-brand-red text-accent-foreground hover:bg-brand-red/90">
                  <Link href="#campus">Ver Campus y Alianzas</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-border">
            {items.map(({ title, desc, icon: Icon, href, tag }) => (
              <a
                key={title}
                href={href}
                className="group relative flex items-start gap-4 p-6 hover:bg-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-inset"
              >
                <div className="h-11 w-11 shrink-0 rounded-lg bg-brand-navy/5 text-brand-navy flex items-center justify-center group-hover:bg-brand-red group-hover:text-accent-foreground transition-colors">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-brand-navy">{title}</h3>
                    {tag && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider rounded-full bg-brand-gold/20 text-brand-navy px-2 py-0.5">
                        {tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-muted-foreground group-hover:text-brand-red group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
