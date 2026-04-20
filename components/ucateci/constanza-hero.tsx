"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle, Sparkles, Leaf, Droplets, Mountain, Tractor } from "lucide-react"
import { Button } from "@/components/ui/button"

const TOUR_VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/dU4VSuoAo40?autoplay=1&mute=1&loop=1&playlist=dU4VSuoAo40&controls=0&rel=0&playsinline=1"

const SLIDES = [
  {
    eyebrow: "Recinto Académico UCATECI-Constanza",
    title: "¡Educación sostenible para el desarrollo!",
    subtitle:
      "Centro de educación superior que desarrolla iniciativas orientadas en agricultura, gestión del agua, ambiente y agroecoturismo. Creemos en Constanza, en el valor de su gente y la riqueza de su tierra.",
    cta: { label: "Solicitar admisión", href: "/campus/constanza#contacto" },
    secondary: { label: "Conocer más", href: "/campus/constanza#acerca" },
    video: TOUR_VIDEO_EMBED_URL,
    image: "/ucateci/campus-constanza.jpg",
  },
  {
    eyebrow: "Enfoques Estratégicos",
    title: "Desarrollo sostenible en cuatro ámbitos",
    subtitle:
      "Nuestros programas académicos están diseñados para potenciar el crecimiento exponencial de Constanza en agricultura sostenible, gestión eficiente del agua, conservación ambiental y desarrollo del agroecoturismo.",
    cta: { label: "Ver programas", href: "/campus/constanza#academics" },
    secondary: { label: "Instalaciones", href: "/campus/constanza#vida" },
    image: "/ucateci/agriculture.jpg",
  },
  {
    eyebrow: "Educación con Propósito",
    title: "La principal vía para asegurar el desarrollo",
    subtitle:
      "La educación es la principal vía para asegurar el desarrollo de los pueblos y de su gente. Constituye nuestra misión formar profesionales comprometidos con el progreso sostenible de Constanza.",
    cta: { label: "Nuestra misión", href: "/campus/constanza#acerca" },
    secondary: { label: "Admisiones", href: "/campus/constanza#contacto" },
    image: "/ucateci/sustainable-campus.jpg",
  },
]

export function ConstanzaHero() {
  const [index, setIndex] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 7000)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [])

  const go = (dir: -1 | 1) => {
    if (timer.current) clearInterval(timer.current)
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length)
    timer.current = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 7000)
  }

  const slide = SLIDES[index]

  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-transparent text-brand-cream" aria-label="Recinto Académico UCATECI-Constanza">
      <div className="absolute inset-0 w-full h-full">
        {SLIDES.map((s, i) => (
          <div
            key={s.title}
            className={`absolute inset-0 transition-all duration-1000 ${i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
            aria-hidden={i !== index}
          >
            <div className="absolute inset-0 overflow-hidden bg-black">
              {s.video ? (
                <iframe
                  src={s.video}
                  title={`Video de fondo: ${s.title}`}
                  className="absolute left-1/2 top-1/2 min-h-[150%] min-w-[150%] h-auto w-auto -translate-x-1/2 -translate-y-1/2 scale-[1.1]"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img src={s.image || "/placeholder.svg"} alt="" className="absolute inset-0 h-full w-full object-cover" />
              )}
            </div>
            {!s.video && (
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 via-brand-navy/30 to-brand-navy/15" />
            )}
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red" />

      <div className="relative mx-auto flex min-h-[70vh] w-full flex-col justify-center px-4 py-16 md:px-6 md:py-20 lg:py-24">
        <div className="flex max-w-3xl flex-col">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-brand-gold">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {slide.eyebrow}
          </div>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-cream/90 md:text-xl">
            {slide.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button asChild size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90">
              <Link href={slide.cta.href}>
                {slide.cta.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-navy">
              <Link href={slide.secondary.href}>
                {slide.secondary.label}
              </Link>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => go(-1)}
            className="h-12 w-12 rounded-full border border-brand-cream/20 bg-brand-navy/20 text-brand-cream hover:bg-brand-navy/40 hover:text-brand-gold"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (timer.current) clearInterval(timer.current)
                  setIndex(i)
                  timer.current = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 7000)
                }}
                className={`h-3 w-3 rounded-full transition-all ${
                  i === index ? "bg-brand-gold scale-125" : "bg-brand-cream/40 hover:bg-brand-cream/60"
                }`}
                aria-label={`Ir al slide ${i + 1}`}
              />
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => go(1)}
            className="h-12 w-12 rounded-full border border-brand-cream/20 bg-brand-navy/20 text-brand-cream hover:bg-brand-navy/40 hover:text-brand-gold"
            aria-label="Siguiente slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-8 w-5 items-end justify-center rounded-full border-2 border-brand-cream/30">
          <div className="h-2 w-1 rounded-full bg-brand-cream/60" />
        </div>
      </div>
    </section>
  )
}