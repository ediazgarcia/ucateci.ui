"use client"

import { HeroCarousel } from "@/components/ucateci/hero-carousel"
import type { CampusSlide } from "@/lib/data"

type CampusHeroProps = {
  name: string
  shortName: string
  type: "recinto" | "centro"
  heroSlides: CampusSlide[]
}

export function CampusHero({ name, shortName, type, heroSlides }: CampusHeroProps) {
  const isRecinto = type === "recinto"
  
  return (
    <HeroCarousel
      ariaLabel={name}
      slides={heroSlides}
      primaryButtonClassName={
        isRecinto
          ? "bg-brand-gold text-brand-navy hover:bg-brand-gold/90"
          : "bg-primary text-primary-foreground hover:bg-primary/90"
      }
      secondaryButtonClassName={
        isRecinto
          ? "border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-navy"
          : undefined
      }
      overlayClassName={
        isRecinto
          ? "bg-[linear-gradient(115deg,rgba(8,63,47,0.88)_4%,rgba(11,37,73,0.72)_40%,rgba(11,37,73,0.28)_100%)]"
          : undefined
      }
      showScrollCue={isRecinto}
      accentLabel={shortName}
    />
  )
}
