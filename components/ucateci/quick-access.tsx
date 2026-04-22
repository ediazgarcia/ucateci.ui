"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  GraduationCap,
  Briefcase,
  Users,
  BookOpen,
  Calendar,
  CreditCard,
  FileText,
  Building,
  ArrowRight,
  Library,
  Mail,
  Laptop,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Profile = "estudiantes" | "docentes" | "egresados" | "aspirantes"

const PROFILES = [
  { id: "aspirantes", label: "Futuros Estudiantes" },
  { id: "estudiantes", label: "Estudiantes Actuales" },
  { id: "docentes", label: "Cuerpo Docente" },
  { id: "egresados", label: "Egresados" },
] as const

const DATA: Record<
  Profile,
  {
    title: string
    description: string
    links: { icon: any; label: string; href: string; desc: string }[]
    featured: { title: string; subtitle: string; href: string; action: string }
  }
> = {
  aspirantes: {
    title: "Bienvenido a tu futuro profesional",
    description: "Encuentra toda la información para iniciar tu vida universitaria en UCATECI.",
    links: [
      {
        icon: FileText,
        label: "Proceso de Admisión",
        href: "#admisiones",
        desc: "Requisitos y pasos a seguir",
      },
      {
        icon: BookOpen,
        label: "Oferta Académica",
        href: "#oferta",
        desc: "Conoce nuestras carreras",
      },
      {
        icon: CreditCard,
        label: "Becas y Ayudas",
        href: "#becas",
        desc: "Opciones de financiamiento",
      },
      {
        icon: Building,
        label: "Visita el Campus",
        href: "#tour",
        desc: "Agenda un recorrido",
      },
    ],
    featured: {
      title: "Admisiones 2026",
      subtitle: "Inscripciones abiertas para el próximo cuatrimestre",
      href: "#admisiones",
      action: "Solicitar admisión",
    },
  },
  estudiantes: {
    title: "Servicios académicos y administrativos",
    description: "Accede rápidamente a las plataformas y herramientas para tu día a día.",
    links: [
      {
        icon: Laptop,
        label: "Portal del Estudiante",
        href: "#portal",
        desc: "Calificaciones y selección",
      },
      {
        icon: BookOpen,
        label: "Aula Virtual",
        href: "#moodle",
        desc: "Clases y asignaciones",
      },
      {
        icon: Mail,
        label: "Correo Institucional",
        href: "#correo",
        desc: "Office 365 para estudiantes",
      },
      {
        icon: Library,
        label: "Biblioteca Virtual",
        href: "#biblioteca",
        desc: "Bases de datos y catálogos",
      },
      {
        icon: CreditCard,
        label: "Pagos en Línea",
        href: "#pagos",
        desc: "Caja virtual y estados",
      },
      {
        icon: Calendar,
        label: "Calendario Académico",
        href: "#calendario",
        desc: "Fechas importantes",
      },
    ],
    featured: {
      title: "Selección de Asignaturas",
      subtitle: "Consulta tu fecha y hora de selección en el portal",
      href: "#portal",
      action: "Ir al portal",
    },
  },
  docentes: {
    title: "Recursos para el cuerpo docente",
    description: "Herramientas para la gestión académica, investigación y apoyo pedagógico.",
    links: [
      {
        icon: Laptop,
        label: "Portal Docente",
        href: "#portal-docente",
        desc: "Gestión de calificaciones",
      },
      {
        icon: BookOpen,
        label: "Entorno Virtual",
        href: "#moodle-docente",
        desc: "Gestión de cursos",
      },
      {
        icon: FileText,
        label: "Investigación",
        href: "#investigacion",
        desc: "Fondo y publicaciones",
      },
      {
        icon: Mail,
        label: "Correo Administrativo",
        href: "#correo",
        desc: "Acceso a webmail",
      },
    ],
    featured: {
      title: "Calendario de Evaluaciones",
      subtitle: "Fechas límite de entrega de calificaciones",
      href: "#calendario-docente",
      action: "Ver calendario",
    },
  },
  egresados: {
    title: "Red de egresados UCATECI",
    description: "Mantente conectado con tu alma máter y accede a servicios exclusivos.",
    links: [
      {
        icon: Briefcase,
        label: "Bolsa de Empleo",
        href: "#empleos",
        desc: "Ofertas exclusivas",
      },
      {
        icon: FileText,
        label: "Solicitud de Documentos",
        href: "#documentos",
        desc: "Récord y certificaciones",
      },
      {
        icon: GraduationCap,
        label: "Educación Continua",
        href: "#postgrado",
        desc: "Maestrías y diplomados",
      },
      {
        icon: Users,
        label: "Asociación de Egresados",
        href: "#asociacion",
        desc: "Red de networking",
      },
    ],
    featured: {
      title: "Encuentro de Egresados",
      subtitle: "Revive tu experiencia universitaria este 2026",
      href: "#encuentro",
      action: "Más información",
    },
  },
}

export function QuickAccess() {
  const [active, setActive] = useState<Profile>("aspirantes")

  return (
    <section className="bg-background py-12 md:py-20" id="accesos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
            Accesos rápidos por perfil
          </h2>
          <p className="mt-2 text-muted-foreground text-sm md:text-base">
            Selecciona tu perfil para encontrar información personalizada
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
            {PROFILES.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={cn(
                  "flex-shrink-0 text-left px-5 py-3 rounded-xl font-medium transition-colors border",
                  active === p.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground/80 border-border hover:border-primary/30 hover:bg-muted"
                )}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid md:grid-cols-[1fr_280px] gap-6"
              >
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary">
                    {DATA[active].title}
                  </h3>
                  <p className="mt-2 text-muted-foreground mb-6">
                    {DATA[active].description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {DATA[active].links.map((link) => {
                      const Icon = link.icon
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                              {link.label}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {link.desc}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Featured Card */}
                <div className="bg-gradient-to-br from-brand-navy to-brand-navy-deep rounded-2xl p-6 text-brand-cream flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                    <GraduationCap className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-[10px] uppercase tracking-widest font-semibold text-brand-gold mb-2">
                      Destacado
                    </div>
                    <div className="font-serif text-lg font-bold leading-tight mb-2">
                      {DATA[active].featured.title}
                    </div>
                    <div className="text-sm text-brand-cream/80 line-clamp-3">
                      {DATA[active].featured.subtitle}
                    </div>
                  </div>
                  <Link
                    href={DATA[active].featured.href}
                    className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold group-hover:text-white transition-colors"
                  >
                    {DATA[active].featured.action}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
