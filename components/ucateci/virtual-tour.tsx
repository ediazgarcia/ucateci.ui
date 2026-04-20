"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { MapPin, Navigation, PlayCircle } from "lucide-react"

const DRONE_360_EMBED_URL =
  "https://www.youtube.com/embed/dU4VSuoAo40?autoplay=1&mute=0&loop=1&playlist=dU4VSuoAo40&controls=1&rel=0&playsinline=1&enablejsapi=1"

const POINTS = [
  {
    id: "rectoria",
    label: "Rectoría",
    description: "Edificio principal con oficinas administrativas y la capilla universitaria.",
    image: "/ucateci/campus-aerial.jpg",
    x: 22,
    y: 38,
  },
  {
    id: "biblioteca",
    label: "Biblioteca Central",
    description: "Más de 40,000 volúmenes y acceso a bases de datos internacionales.",
    image: "/ucateci/library.jpg",
    x: 55,
    y: 30,
  },
  {
    id: "medicina",
    label: "Facultad de Medicina",
    description: "Laboratorios de última generación y simuladores clínicos.",
    image: "/ucateci/research-lab.jpg",
    x: 72,
    y: 55,
  },
  {
    id: "deportes",
    label: "Área Deportiva",
    description: "Canchas, gimnasio y espacios de recreación al aire libre.",
    image: "/ucateci/student-life.jpg",
    x: 38,
    y: 70,
  },
]

export function VirtualTour() {
  const [active, setActive] = useState(POINTS[0].id)
  const [isTourInView, setIsTourInView] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const point = POINTS.find((p) => p.id === active) ?? POINTS[0]

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTourInView(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-primary py-16 text-primary-foreground md:py-24" id="tour">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Tour Virtual</span>
            <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl lg:text-5xl text-balance">
              Descubre nuestro campus sin salir de casa
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/85">
              Recorre los espacios donde tus hijos estudiarán. Explora aulas, laboratorios, biblioteca y zonas
              deportivas con un clic y visualiza un video 360 con dron en reproducción automática.
            </p>

            <div className="mt-8 space-y-2">
              {POINTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  aria-pressed={p.id === active}
                  className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                    p.id === active
                      ? "border-accent bg-accent/10"
                      : "border-primary-foreground/15 bg-primary-foreground/5 hover:border-primary-foreground/30"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      p.id === active ? "bg-accent text-accent-foreground" : "bg-primary-foreground/10"
                    }`}
                  >
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{p.label}</div>
                    <div className="text-xs text-primary-foreground/75 line-clamp-1">{p.description}</div>
                  </div>
                  {p.id === active && <Navigation className="h-4 w-4 text-accent" aria-hidden="true" />}
                </button>
              ))}
            </div>

            <Link
              href="#tour-360-video"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <PlayCircle className="h-4 w-4" /> Iniciar video 360° con dron
            </Link>
          </div>

          <div className="relative space-y-4">
            <div
              id="tour-360-video"
              className="overflow-hidden rounded-3xl border border-primary-foreground/15 bg-black shadow-xl"
            >
              <div className="relative aspect-video">
                <iframe
                  ref={iframeRef}
                  src={isTourInView ? DRONE_360_EMBED_URL : "about:blank"}
                  title="Video 360 con dron para tour virtual de UCATECI"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-foreground">
                  {isTourInView
                    ? "Video 360° · con audio"
                    : "Video 360° pausado fuera de la sección"}
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5">
              <img
                src={point.image || "/placeholder.svg"}
                alt={`Vista de ${point.label}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

              {/* Hotspots */}
              {POINTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  aria-label={`Ver ${p.label}`}
                  className="absolute"
                  style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <span className="relative flex h-4 w-4">
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        p.id === active ? "animate-ping bg-accent" : "bg-primary-foreground/60"
                      }`}
                    />
                    <span
                      className={`relative inline-flex h-4 w-4 rounded-full ring-2 ring-primary-foreground ${
                        p.id === active ? "bg-accent" : "bg-primary-foreground"
                      }`}
                    />
                  </span>
                </button>
              ))}

              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/95 p-4 text-foreground backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">Punto de interés</div>
                <div className="mt-1 font-serif text-lg font-semibold text-primary">{point.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{point.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
