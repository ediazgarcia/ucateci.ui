"use client"

import { HeroCarousel, type HeroSlide } from "@/components/ucateci/hero-carousel"

const TOUR_VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/dU4VSuoAo40?autoplay=1&mute=1&loop=1&playlist=dU4VSuoAo40&controls=0&rel=0&playsinline=1"

const slides: HeroSlide[] = [
  {
    eyebrow: "CEB-UCATECI · Bonao",
    title: "Un colegio que forma líderes con valores, excelencia y propósito",
    subtitle:
      "Desde inicial hasta bachillerato, vivimos una experiencia educativa cercana, moderna y segura, pensada para acompañar el crecimiento de cada estudiante y su familia.",
    highlights: ["Bilingüe", "STEAM", "Valores y liderazgo"],
    miniCards: [
      { label: "Niveles", value: "4", detail: "Inicial, primaria, secundaria y bachillerato" },
      { label: "Enfoque", value: "STEAM", detail: "Tecnología, ciencia, creatividad y pensamiento crítico" },
      { label: "Experiencia", value: "Integral", detail: "Valores, arte, deporte y acompañamiento personal" },
    ],
    cta: { label: "Solicitar información", href: "#admisiones" },
    secondary: { label: "Explorar programas", href: "#oferta" },
    video: TOUR_VIDEO_EMBED_URL,
    image: "/ucateci/campus-aerial.jpg",
  },
  {
    eyebrow: "Formación integral",
    title: "Aprende, crea y crece en un entorno inspirador",
    subtitle:
      "Tecnología, arte, deporte, lectura y convivencia escolar se unen para desarrollar habilidades, confianza y una sólida formación académica.",
    highlights: ["Arte y deporte", "Tecnología", "Acompañamiento escolar"],
    miniCards: [
      { label: "Programas", value: "6", detail: "Propuestas educativas para cada etapa del colegio" },
      { label: "Metodología", value: "Activa", detail: "Aprendizaje práctico, creativo y significativo" },
      { label: "Apoyo", value: "Personalizado", detail: "Orientación y acompañamiento a cada estudiante" },
    ],
    cta: { label: "Ver programas", href: "#oferta" },
    secondary: { label: "Tour virtual", href: "#tour" },
    image: "/ucateci/students-campus.jpg",
  },
  {
    eyebrow: "Comunidad CEB",
    title: "Una educación con impacto en Bonao y en todo el Cibao",
    subtitle:
      "Ciencia, cultura, pastoral y servicio comunitario fortalecen a nuestros estudiantes para que sean responsables, preparados y comprometidos con su entorno.",
    highlights: ["Servicio comunitario", "Pastoral", "Innovación educativa"],
    miniCards: [
      { label: "Comunidad", value: "CEB", detail: "Familias, docentes y estudiantes unidos por valores" },
      { label: "Impacto", value: "Local", detail: "Formación con propósito para Bonao y el Cibao" },
      { label: "Futuro", value: "Claro", detail: "Preparación para seguir creciendo con confianza" },
    ],
    cta: { label: "Conocer más", href: "#noticias" },
    secondary: { label: "Contáctanos", href: "#contacto" },
    image: "/ucateci/research-lab.jpg",
  },
]

export function HeroSection() {
  return <HeroCarousel ariaLabel="Destacados CEB-UCATECI" slides={slides} accentLabel="Portal académico CEB-UCATECI" />
}
