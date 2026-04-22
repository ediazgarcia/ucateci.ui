"use client"

import { useState } from "react"
import { Play, MapPin, Building, Microscope, Leaf, Users, ChevronRight, X, BookOpen } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CAMPUS_DATA, type CampusData } from "@/lib/data"

export function CampusVirtualTour({ campusId }: { campusId: "ceb" | "constanza" }) {
  const campus = CAMPUS_DATA[campusId]

  const isCEB = campus.id === "ceb"
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const locations = isCEB ? [
    { title: "Edificio Principal", icon: Building, desc: "Aulas modernas y oficinas administrativas" },
    { title: "Laboratorios", icon: Microscope, desc: "Ciencias, informática y robótica" },
    { title: "Áreas Deportivas", icon: Users, desc: "Canchas múltiples y áreas recreativas" },
    { title: "Capilla", icon: Building, desc: "Espacio para la reflexión y el encuentro" },
  ] : [
    { title: "Edificio Académico", icon: Building, desc: "Aulas equipadas para educación superior" },
    { title: "Centro de Investigación", icon: Microscope, desc: "Laboratorios especializados" },
    { title: "Área Agrícola", icon: Leaf, desc: "Espacios para prácticas de campo" },
    { title: "Biblioteca", icon: BookOpen, desc: "Centro de recursos para el aprendizaje" },
  ]

  return (
    <section className="bg-brand-navy py-16 md:py-24 text-white overflow-hidden relative" id="tour">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4 block">
              Explora Nuestro Campus
            </span>
            <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl mb-6 leading-tight">
              Tour Virtual {isCEB ? "del CEB" : "Constanza"}
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {isCEB 
                ? "Te invitamos a conocer nuestras modernas instalaciones, diseñadas específicamente para brindar un ambiente seguro, cómodo y estimulante para el aprendizaje de nuestros estudiantes."
                : "Descubre nuestras instalaciones diseñadas para la educación superior y la investigación. Un campus que se integra con el entorno natural de Constanza."
              }
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {locations.map((loc, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="bg-brand-gold/20 p-2 rounded-lg text-brand-gold shrink-0">
                    <loc.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{loc.title}</h4>
                    <p className="text-sm text-white/60 leading-tight">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button 
                onClick={() => setIsVideoOpen(true)}
                size="lg" 
                className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-semibold"
              >
                <Play className="w-4 h-4 mr-2" />
                Iniciar Recorrido
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                <MapPin className="w-4 h-4 mr-2" />
                Ver en Mapa
              </Button>
            </div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="aspect-[4/3] w-full relative">
              <Image
                src="/ucateci/campus-aerial.jpg"
                alt={`Vista aérea del campus ${campus.shortName}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-brand-navy/20 transition-colors duration-500" />
              
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center group/btn"
                aria-label="Reproducir video del tour"
              >
                <div className="w-20 h-20 rounded-full bg-brand-gold/90 text-brand-navy flex items-center justify-center shadow-xl group-hover/btn:scale-110 group-hover/btn:bg-brand-gold transition-all duration-300">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden relative shadow-2xl ring-1 ring-white/20">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
              aria-label="Cerrar video"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src={isCEB 
                ? "https://www.youtube.com/embed/uQwSIVamo98?autoplay=1"
                : "https://www.youtube.com/embed/BiNRCwijXew?autoplay=1"
              } 
              title={`Tour Virtual ${campus.shortName}`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}
