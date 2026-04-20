"use client"

import { useState } from "react"
import { Play, MapPin, Camera, ArrowUpRight, Eye, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TOUR_POINTS = [
  {
    id: "entrada",
    title: "Entrada Principal",
    description: "Bienvenidos al Centro Educacional Bonao",
    position: { x: 15, y: 85 },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "patio",
    title: "Patio Central",
    description: "El corazón de nuestras actividades recreativas",
    position: { x: 35, y: 65 },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "aulas",
    title: "Aulas Modernas",
    description: "Espacios diseñados para el aprendizaje",
    position: { x: 65, y: 45 },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "laboratorios",
    title: "Laboratorios",
    description: "Ciencia, tecnología y experimentación",
    position: { x: 85, y: 35 },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "gimnasio",
    title: "Gimnasio",
    description: "Deportes y educación física",
    position: { x: 55, y: 75 },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "biblioteca",
    title: "Biblioteca",
    description: "Centro de conocimiento y lectura",
    position: { x: 75, y: 55 },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

const FEATURES = [
  {
    icon: Camera,
    title: "360° Interactivo",
    description: "Explora cada rincón con navegación completa",
  },
  {
    icon: Eye,
    title: "Vista Detallada",
    description: "Descubre todos los espacios educativos",
  },
  {
    icon: Navigation,
    title: "Navegación Fácil",
    description: "Puntos de interés marcados en el mapa",
  },
]

export function CEBVirtualTour() {
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const selectedTourPoint = TOUR_POINTS.find(point => point.id === selectedPoint)

  return (
    <section className="bg-muted/30 py-16 md:py-24" id="tour">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Tour Virtual</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Conoce Nuestras Instalaciones
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Realiza un recorrido virtual por el Centro Educacional Bonao y descubre
            los espacios donde tu hijo aprenderá, crecerá y se desarrollará.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {FEATURES.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main Tour Section */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Map Section */}
            <div className="relative bg-muted p-6">
              <div className="aspect-square relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg overflow-hidden">
                {/* Campus Map Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Mapa del Campus</p>
                    <p className="text-sm">Haz clic en los puntos marcados</p>
                  </div>
                </div>

                {/* Tour Points */}
                {TOUR_POINTS.map((point) => (
                  <button
                    key={point.id}
                    onClick={() => setSelectedPoint(point.id)}
                    className={cn(
                      "absolute w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all duration-200 hover:scale-110",
                      selectedPoint === point.id
                        ? "bg-primary border-primary shadow-primary/50"
                        : "bg-white hover:bg-primary/20"
                    )}
                    style={{
                      left: `${point.position.x}%`,
                      top: `${point.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    aria-label={`Ver ${point.title}`}
                  >
                    <MapPin className={cn(
                      "w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                      selectedPoint === point.id ? "text-white" : "text-primary"
                    )} />
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Haz clic en los puntos marcados para explorar cada área
                </p>
              </div>
            </div>

            {/* Info Panel */}
            <div className="p-6 flex flex-col">
              {selectedTourPoint ? (
                <>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {selectedTourPoint.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {selectedTourPoint.description}
                    </p>

                    {/* Video Preview */}
                    <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <Play className="w-12 h-12 text-primary mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Tour Virtual</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setIsVideoOpen(true)}
                      className="flex-1"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Ver Tour
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/campus/ceb#contacto">
                        Más Info
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-center">
                  <div>
                    <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Selecciona un punto de interés
                    </h3>
                    <p className="text-muted-foreground">
                      Haz clic en cualquier punto marcado en el mapa para explorar esa área del campus.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para conocer el CEB en persona?
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Programa una visita guiada y conoce de cerca las instalaciones donde tu hijo aprenderá y crecerá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/campus/ceb#contacto">
                  Agendar Visita
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Camera className="w-4 h-4 mr-2" />
                Más Fotos
              </Button>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && selectedTourPoint && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">{selectedTourPoint.title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsVideoOpen(false)}
                >
                  ✕
                </Button>
              </div>
              <div className="aspect-video">
                <iframe
                  src={selectedTourPoint.video}
                  className="w-full h-full"
                  allowFullScreen
                  title={`Tour virtual: ${selectedTourPoint.title}`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}