"use client"

import { useState } from "react"
import {
  ChevronDown,
  FileText,
  BookOpenText,
  FileSearch,
  ScrollText,
} from "lucide-react"
import { cn } from "@/lib/utils"

const resources = [
  {
    icon: FileText,
    title: "Reglamento académico estudiantil",
    desc: "Derechos, deberes y procedimientos académicos vigentes.",
    tag: "PDF",
  },
  {
    icon: BookOpenText,
    title: "Manual del estudiante de nuevo ingreso",
    desc: "Guía completa para tus primeros pasos en UCATECI.",
    tag: "PDF",
  },
  {
    icon: ScrollText,
    title: "Calendario académico 2026",
    desc: "Cuatrimestres, periodos de inscripción y entrega de notas.",
    tag: "PDF",
  },
  {
    icon: FileSearch,
    title: "Guía de prácticas profesionales",
    desc: "Requisitos, convenios y formatos oficiales.",
    tag: "PDF",
  },
]

const faqs = [
  {
    q: "¿Cómo inicio sesión en el Aula Virtual?",
    a: "Ingresa con tu correo institucional y contraseña. Si es la primera vez, utiliza la opción 'Recuperar contraseña' o escribe a soporte@ucateci.edu.do.",
  },
  {
    q: "¿Dónde pago la mensualidad?",
    a: "Puedes pagar desde el Portal del Estudiante con tarjeta de crédito/débito o en los bancos asociados presentando tu factura UCATECI.",
  },
  {
    q: "¿Cómo solicito un récord de notas?",
    a: "Accede al Portal del Estudiante › Servicios › Solicitud de documentos, paga el arancel y recibirás la notificación cuando esté listo.",
  },
  {
    q: "¿Qué es la POMA y cuándo se aplica?",
    a: "La POMA es la Prueba de Orientación y Medición Académica. Se aplica en fechas establecidas al inicio de cada proceso de admisión. Consulta calendario.",
  },
  {
    q: "¿Hay becas disponibles?",
    a: "Sí. UCATECI ofrece becas académicas, deportivas, culturales y convenios con instituciones como MESCyT. Consulta el programa de becas en Admisiones.",
  },
]

export function ResourcesSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="recursos" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
        {/* Resources */}
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-widest text-brand-red font-semibold mb-2">
            Recursos descargables
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy text-balance">
            Documentos oficiales a un clic
          </h2>
          <p className="mt-2 text-muted-foreground">
            Guías, reglamentos y manuales institucionales disponibles para toda
            la comunidad.
          </p>

          <ul className="mt-6 grid gap-3">
            {resources.map(({ icon: Icon, title, desc, tag }) => (
              <li key={title}>
                <a
                  href="#"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-brand-red/40 hover:shadow-sm transition-all"
                >
                  <div className="h-11 w-11 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-brand-navy leading-tight">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold rounded-full bg-brand-navy/5 text-brand-navy px-2.5 py-1">
                    {tag}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-widest text-brand-red font-semibold mb-2">
            Preguntas frecuentes
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy text-balance">
            Las dudas más comunes, resueltas
          </h2>
          <p className="mt-2 text-muted-foreground">
            Si no encuentras lo que buscas, escríbenos a{" "}
            <a
              className="font-semibold text-brand-red hover:underline"
              href="mailto:info@ucateci.edu.do"
            >
              info@ucateci.edu.do
            </a>
            .
          </p>

          <ul className="mt-6 rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
            {faqs.map((f, i) => {
              const open = openIdx === i
              return (
                <li key={f.q}>
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/60 transition-colors"
                  >
                    <span className="font-semibold text-brand-navy">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-brand-red shrink-0 transition-transform",
                        open && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="min-h-0">
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
