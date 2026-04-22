"use client"

import { HeroCarousel, type HeroSlide } from "@/components/ucateci/hero-carousel"

const TOUR_VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/dU4VSuoAo40?autoplay=1&mute=1&loop=1&playlist=dU4VSuoAo40&controls=0&rel=0&playsinline=1"

const slides: HeroSlide[] = [
  {
    eyebrow: "Admisiones 2026",
    title: "Tu futuro académico empieza en UCATECI",
    subtitle:
      "Más de 40 años formando profesionales íntegros en La Vega. Elige entre más de 45 carreras acreditadas por el MESCyT con formación en valores, investigación y compromiso social.",
    cta: { label: "Solicitar admisión", href: "#admisiones" },
    secondary: { label: "Explorar carreras", href: "#oferta" },
    video: TOUR_VIDEO_EMBED_URL,
    image: "/ucateci/campus-aerial.jpg",
  },
  {
    eyebrow: "Formación integral",
    title: "Más que estudiar, es vivir la universidad",
    subtitle:
      "Deportes, pastoral, arte, voluntariado y una comunidad educativa que te acompaña en cada paso de tu formación profesional, humana y espiritual.",
    cta: { label: "Explorar campus", href: "#vida" },
    secondary: { label: "Tour virtual", href: "#tour" },
    image: "/ucateci/students-campus.jpg",
  },
  {
    eyebrow: "Investigación",
    title: "Conocimiento con impacto social y regional",
    subtitle:
      "Nuestros centros de investigación generan soluciones para la salud, el desarrollo económico y la educación en República Dominicana. Ciencia al servicio del bien común.",
    cta: { label: "Conocer investigación", href: "#investigacion" },
    secondary: { label: "Publicaciones", href: "#investigacion" },
    image: "/ucateci/research-lab.jpg",
  },
]

export function HeroSection() {
  return <HeroCarousel ariaLabel="Destacados UCATECI" slides={slides} accentLabel="Portal académico institucional" />
}
