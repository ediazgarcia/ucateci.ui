"use client"

import { HeroCarousel, type HeroSlide } from "@/components/ucateci/hero-carousel"

const TOUR_VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/uQwSIVamo98?autoplay=1&mute=1&loop=1&playlist=uQwSIVamo98&controls=0&rel=0&playsinline=1"

const slides: HeroSlide[] = [
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
  return (
    <HeroCarousel
      ariaLabel="Centro Educacional Bonao"
      slides={slides}
      primaryButtonClassName="bg-primary text-primary-foreground hover:bg-primary/90"
      accentLabel="Campus Bonao"
    />
  )
}
