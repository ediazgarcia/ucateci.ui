"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 280)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver al inicio"
      className="fixed bottom-4 right-20 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-navy text-brand-cream shadow-xl transition-transform hover:-translate-y-0.5 hover:bg-brand-navy-deep sm:right-24 md:bottom-6 md:right-28"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
