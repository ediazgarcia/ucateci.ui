"use client"

import { HeroCarousel, type HeroSlide } from "@/components/ucateci/hero-carousel"

const TOUR_VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/dU4VSuoAo40?autoplay=1&mute=1&loop=1&playlist=dU4VSuoAo40&controls=0&rel=0&playsinline=1"

const slides: HeroSlide[] = [
  {
    eyebrow: "Admisiones 2026",
    title: "Tu futuro empieza en UCATECI",
    subtitle:
      "Más de 40 años formando profesionales íntegros en La Vega. Elige entre más de 45 carreras con acreditación nacional e internacional.",
    cta: { label: "Solicitar admisión", href: "#admisiones" },
    secondary: { label: "Ver carreras", href: "#oferta" },
    video: TOUR_VIDEO_EMBED_URL,
    image: "/ucateci/campus-aerial.jpg",
  },
  {
    eyebrow: "Vida Universitaria",
    title: "Más que estudiar, es vivir la universidad",
    subtitle:
      "Deportes, pastoral, arte, voluntariado y una comunidad que te acompaña en cada paso de tu formación profesional y humana.",
    cta: { label: "Explorar campus", href: "#vida" },
    secondary: { label: "Tour virtual", href: "#tour" },
    image: "/ucateci/students-campus.jpg",
  },
  {
    eyebrow: "Investigación",
    title: "Conocimiento con impacto social",
    subtitle:
      "Nuestros centros de investigación generan soluciones para la salud, el desarrollo económico y la educación en República Dominicana.",
    cta: { label: "Conocer investigación", href: "#investigacion" },
    secondary: { label: "Publicaciones", href: "#investigacion" },
    image: "/ucateci/research-lab.jpg",
  },
]

export function HeroSection() {
  return <HeroCarousel ariaLabel="Destacados UCATECI" slides={slides} accentLabel="Portal institucional" />
}
