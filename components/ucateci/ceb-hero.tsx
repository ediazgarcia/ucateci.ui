"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const TOUR_VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/dU4VSuoAo40?autoplay=1&mute=1&loop=1&playlist=dU4VSuoAo40&controls=0&rel=0&playsinline=1"

const SLIDES = [
  {
    eyebrow: "Centro Educacional Bonao",
    title: "Excelencia académica desde 1971",
    subtitle:
      "Formamos líderes con carácter y principios. Educación bilingüe integral que combina valores cristianos, innovación pedagógica y desarrollo humano completo.",
    cta: { label: "Solicitar admisión", href: "/campus/ceb#contacto" },
    secondary: { label: "Conocer más", href: "/campus/ceb#acerca" },
    video: TOUR_VIDEO_EMBED_URL,
    image: "/ucateci/students-campus.jpg",
  },
  {
    eyebrow: "Educación Bilingüe",
    title: "Preparados para el mundo global",
    subtitle:
      "Desde nivel inicial hasta bachillerato, nuestros estudiantes dominan el español y el inglés, preparándose para universidades de prestigio internacional.",
    cta: { label: "Ver programas", href: "/campus/ceb#academics" },
    secondary: { label: "Instalaciones", href: "/campus/ceb#vida" },
    image: "/ucateci/library.jpg",
  },
  {
    eyebrow: "Valores Cristianos",
    title: "Formación integral con propósito",
    subtitle:
      "Más que conocimientos, formamos personas íntegras, responsables y comprometidas con su comunidad. Una educación que transforma vidas.",
    cta: { label: "Nuestra misión", href: "/campus/ceb#acerca" },
    secondary: { label: "Admisiones", href: "/campus/ceb#contacto" },
    image: "/ucateci/campus-aerial.jpg",
  },
]

export function CEBHero() {
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
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-transparent text-brand-cream" aria-label="Centro Educacional Bonao">
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
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-cream md:text-xl">
            {slide.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-brand-red text-accent-foreground hover:bg-brand-red/90">
              <Link href={slide.cta.href}>
                {slide.cta.label}
                <ArrowRight className="h-5 w-5 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-brand-cream/50 bg-brand-navy/50 text-brand-cream backdrop-blur-sm hover:bg-brand-cream/15 hover:text-brand-gold hover:border-brand-gold"
            >
              <Link href={slide.secondary.href}>
                <PlayCircle className="h-4 w-4" />
                {slide.secondary.label}
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex items-center gap-3" role="tablist" aria-label="Slides">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir al slide ${i + 1}`}
                  aria-selected={i === index}
                  role="tab"
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-12 bg-brand-gold shadow-lg shadow-brand-gold/50" : "w-6 bg-brand-cream/40 hover:bg-brand-cream/70 hover:w-8"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-cream/50 bg-brand-navy/60 text-brand-cream backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-brand-gold hover:bg-brand-navy/80 hover:text-brand-gold"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Siguiente"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-cream/50 bg-brand-navy/60 text-brand-cream backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-brand-gold hover:bg-brand-navy/80 hover:text-brand-gold"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}