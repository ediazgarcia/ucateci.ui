"use client"

import { useState } from "react"
import { Quote } from "lucide-react"
import { TESTIMONIALS } from "@/lib/data"

export function Testimonials() {
  const [active, setActive] = useState(0)
  const t = TESTIMONIALS[active]

  return (
    <section className="bg-background py-16 md:py-24" id="testimonios">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Voces de la comunidad académica</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
              Historias que inspiran vocación
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Escucha a nuestros egresados contar cómo la formación integral de UCATECI transformó su trayectoria profesional, académica y personal.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {TESTIMONIALS.map((tt, i) => (
                <button
                  key={tt.name}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active ? true : false}
                  aria-label={`Ver testimonio de ${tt.name}`}
                  className={`flex items-center gap-4 rounded-2xl border p-3 text-left transition-all ${
                    i === active
                      ? "border-accent bg-accent/5 shadow-sm"
                      : "border-border bg-card hover:border-accent/40"
                  }`}
                >
                  <img
                    src={tt.image || "/placeholder.svg"}
                    alt={`${tt.name}, ${tt.role}`}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{tt.name}</div>
                    <div className="text-xs text-muted-foreground">{tt.role}</div>
                  </div>
                  <span
                    className={`h-2 w-2 rounded-full ${i === active ? "bg-accent" : "bg-muted"}`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>

          <figure className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_0)] bg-[length:24px_24px]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/70" />

            <div className="relative">
              <Quote className="h-10 w-10 text-accent" aria-hidden="true" />
              <blockquote className="mt-5 font-serif text-xl leading-relaxed text-pretty md:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-primary-foreground/20 pt-6">
                <img
                  src={t.image || "/placeholder.svg"}
                  alt={t.name}
                  className="h-14 w-14 rounded-full border-2 border-accent object-cover"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-primary-foreground/80">
                    {t.role} · {t.year}
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
