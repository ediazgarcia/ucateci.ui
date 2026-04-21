"use client"

import { HeroCarousel, type HeroSlide } from "@/components/ucateci/hero-carousel"

const TOUR_VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/BiNRCwijXew?autoplay=1&mute=1&loop=1&playlist=BiNRCwijXew&controls=0&rel=0&playsinline=1"

const slides: HeroSlide[] = [
  {
    eyebrow: "Recinto Académico UCATECI-Constanza",
    title: "Educación sostenible para el desarrollo",
    subtitle:
      "Centro de educación superior que impulsa iniciativas en agricultura, gestión del agua, ambiente y agroecoturismo. Creemos en Constanza, en el valor de su gente y la riqueza de su tierra.",
    cta: { label: "Solicitar admisión", href: "/campus/constanza#contacto" },
    secondary: { label: "Conocer más", href: "/campus/constanza#acerca" },
    video: TOUR_VIDEO_EMBED_URL,
    image: "/ucateci/campus-aerial.jpg",
  },
  {
    eyebrow: "Enfoques Estratégicos",
    title: "Desarrollo sostenible en cuatro ámbitos",
    subtitle:
      "Nuestros programas académicos están diseñados para potenciar el crecimiento de Constanza en agricultura sostenible, gestión eficiente del agua, conservación ambiental y agroecoturismo.",
    cta: { label: "Ver programas", href: "/campus/constanza#academics" },
    secondary: { label: "Instalaciones", href: "/campus/constanza#vida" },
    image: "/ucateci/research-lab.jpg",
  },
  {
    eyebrow: "Educación con propósito",
    title: "La principal vía para asegurar el desarrollo",
    subtitle:
      "La educación es la principal vía para asegurar el desarrollo de los pueblos. Formamos profesionales comprometidos con el progreso sostenible de Constanza.",
    cta: { label: "Nuestra misión", href: "/campus/constanza#acerca" },
    secondary: { label: "Admisiones", href: "/campus/constanza#contacto" },
    image: "/ucateci/student-life.jpg",
  },
]

export function ConstanzaHero() {
  return (
    <HeroCarousel
      ariaLabel="Recinto Académico UCATECI-Constanza"
      slides={slides}
      primaryButtonClassName="bg-brand-gold text-brand-navy hover:bg-brand-gold/90"
      secondaryButtonClassName="border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-navy"
      overlayClassName="bg-[linear-gradient(115deg,rgba(8,63,47,0.88)_4%,rgba(11,37,73,0.72)_40%,rgba(11,37,73,0.28)_100%)]"
      showScrollCue
      accentLabel="Campus Constanza"
    />
  )
}
