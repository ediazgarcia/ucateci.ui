"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle, Sparkles } from "lucide-react"
import { useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

export type HeroSlide = {
  eyebrow: string
  title: string
  subtitle: string
  cta: { label: string; href: string }
  secondary: { label: string; href: string }
  image: string
  video?: string
}

type HeroCarouselProps = {
  ariaLabel: string
  slides: HeroSlide[]
  primaryButtonClassName?: string
  secondaryButtonClassName?: string
  overlayClassName?: string
  showScrollCue?: boolean
  accentLabel?: string
}

export function HeroCarousel({
  ariaLabel,
  slides,
  primaryButtonClassName,
  secondaryButtonClassName,
  overlayClassName,
  showScrollCue = false,
  accentLabel = "Explora el campus",
}: HeroCarouselProps) {
  const [index, setIndex] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const isMobile = useIsMobile()
  const reduceMotion = useReducedMotion()

  const restartTimer = () => {
    if (timer.current) {
      clearInterval(timer.current)
    }

    if (!reduceMotion) {
      timer.current = setInterval(() => setIndex((current) => (current + 1) % slides.length), 7000)
    }
  }

  useEffect(() => {
    restartTimer()

    return () => {
      if (timer.current) {
        clearInterval(timer.current)
      }
    }
  }, [reduceMotion, slides.length])

  const go = (direction: -1 | 1) => {
    setIndex((current) => (current + direction + slides.length) % slides.length)
    restartTimer()
  }

  const slide = slides[index]

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-brand-navy-deep text-brand-cream"
      aria-label={ariaLabel}
    >
      <div className="absolute inset-0">
        {slides.map((item, itemIndex) => {
          const active = itemIndex === index
          const showVideo = Boolean(item.video) && !isMobile && !reduceMotion

          return (
            <div
              key={item.title}
              aria-hidden={!active}
              className={cn(
                "absolute inset-0 transition-[opacity,transform] duration-[1200ms] ease-out",
                active ? "opacity-100 scale-105" : "pointer-events-none opacity-0 scale-100",
              )}
            >
              <div className="absolute inset-0 overflow-hidden bg-black">
                {showVideo ? (
                  <iframe
                    src={item.video}
                    title={`Video de fondo: ${item.title}`}
                    loading="lazy"
                    className="absolute left-1/2 top-1/2 h-auto min-h-[150%] min-w-[150%] w-auto -translate-x-1/2 -translate-y-1/2 scale-[1.1]"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    priority={itemIndex === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div
                className={cn(
                  "absolute inset-0 bg-[linear-gradient(115deg,rgba(11,37,73,0.92)_5%,rgba(11,37,73,0.74)_44%,rgba(11,37,73,0.28)_100%)]",
                  overlayClassName,
                )}
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-navy-deep/80 to-transparent" />
            </div>
          )
        })}
      </div>

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red" />

      <div className="relative mx-auto flex min-h-[78svh] w-full max-w-[96rem] flex-col justify-center px-4 pb-20 pt-24 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-navy/35 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-gold shadow-lg shadow-brand-navy/30 backdrop-blur-sm sm:text-xs">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {slide.eyebrow}
          </div>

          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            {slide.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-cream/88 sm:text-lg lg:text-xl">
            {slide.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              asChild
              size="lg"
              className={cn(
                "rounded-full bg-brand-red text-accent-foreground shadow-lg shadow-brand-red/20 transition-transform hover:-translate-y-0.5 hover:bg-brand-red/90",
                primaryButtonClassName,
              )}
            >
              <Link href={slide.cta.href}>
                {slide.cta.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className={cn(
                "rounded-full border-brand-cream/50 bg-brand-navy/45 text-brand-cream backdrop-blur-sm hover:border-brand-gold hover:bg-brand-cream/15 hover:text-brand-gold",
                secondaryButtonClassName,
              )}
            >
              <Link href={slide.secondary.href}>
                <PlayCircle className="h-4 w-4" />
                {slide.secondary.label}
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3" role="tablist" aria-label="Slides destacados">
            {slides.map((item, itemIndex) => (
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  setIndex(itemIndex)
                  restartTimer()
                }}
                aria-label={`Ir al slide ${itemIndex + 1}`}
                aria-selected={itemIndex === index}
                role="tab"
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  itemIndex === index
                    ? "w-12 bg-brand-gold shadow-lg shadow-brand-gold/40"
                    : "w-6 bg-brand-cream/40 hover:w-8 hover:bg-brand-cream/70",
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-xs font-medium uppercase tracking-[0.25em] text-brand-cream/65 sm:block">
              {accentLabel}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Slide anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-cream/35 bg-brand-navy/50 text-brand-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Siguiente slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-cream/35 bg-brand-navy/50 text-brand-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showScrollCue && (
        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-brand-cream/70 md:flex">
          <span>Desliza para explorar</span>
          <span className="flex h-8 w-5 items-end justify-center rounded-full border border-brand-cream/35 pb-1">
            <span className="h-2 w-1 rounded-full bg-brand-cream/70" />
          </span>
        </div>
      )}
    </section>
  )
}
