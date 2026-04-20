"use client"

import { useState } from "react"
import { Play, MapPin, Camera, ArrowUpRight, Eye, Navigation, Leaf, Droplets, Tractor, Microscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TOUR_POINTS = [
  {
    id: "entrada",
    title: "Entrada Principal",
    description: "Bienvenidos al Recinto Académico UCATECI-Constanza",
    position: { x: 15, y: 85 },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "edificios",
    title: "Edificios Académicos",
    description: "Aulas modernas y espacios de aprendizaje",
    position: { x: 35, y: 65 },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "laboratorios",
    title: "Laboratorios Especializados",
    description: "Investigación en agricultura y ciencias ambientales",
    position: { x: 65, y: 45 },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "fincas",
    title: "Fincas Experimentales",
    description: "Áreas para prácticas agrícolas y proyectos de campo",
    position: { x: 85, y: 35 },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "biblioteca",
    title: "Biblioteca Digital",
    description: "Centro de conocimiento especializado",
    position: { x: 55, y: 75 },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "centro-investigacion",
    title: "Centro de Investigación",
    description: "Espacio para proyectos de investigación aplicada",
    position: { x: 75, y: 55 },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export function ConstanzaVirtualTour() {
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const selectedTourPoint = TOUR_POINTS.find(point => point.id === selectedPoint)

  return (
    <section className="bg-muted/30 py-16 md:py-24" id="tour">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Tour Virtual</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Conoce Nuestras Instalaciones
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Explora virtualmente el Recinto Académico UCATECI-Constanza y descubre
            los espacios diseñados para tu formación en desarrollo sostenible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-background rounded-lg border p-6">
              <div className="relative aspect-square bg-gradient-to-br from-green-50 to-blue-50 rounded-lg overflow-hidden">
                {/* Campus Map Background */}
                <div className="absolute inset-0 bg-[url('/ucateci/campus-map-placeholder.jpg')] bg-cover bg-center opacity-20" />

                {/* Tour Points */}
                {TOUR_POINTS.map((point) => (
                  <button
                    key={point.id}
                    onClick={() => setSelectedPoint(point.id)}
                    className={cn(
                      "absolute w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all hover:scale-110",
                      selectedPoint === point.id
                        ? "bg-primary border-primary"
                        : "bg-white/80 hover:bg-white"
                    )}
                    style={{
                      left: `${point.position.x}%`,
                      top: `${point.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    aria-label={`Ver ${point.title}`}
                  >
                    <MapPin className="w-4 h-4 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </button>
                ))}

                {/* Selected Point Info */}
                {selectedTourPoint && (
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg">
                    <h4 className="font-semibold text-primary mb-1">{selectedTourPoint.title}</h4>
                    <p className="text-sm text-muted-foreground">{selectedTourPoint.description}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Map Legend */}
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white border-2 border-primary rounded-full" />
                <span>Punto de interés</span>
              </div>
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-primary" />
                <span>Haz clic para explorar</span>
              </div>
            </div>
          </div>

          {/* Tour Details */}
          <div className="space-y-6">
            {selectedTourPoint ? (
              <div>
                <div className="bg-background rounded-lg border p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Camera className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {selectedTourPoint.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {selectedTourPoint.description}
                      </p>
                    </div>
                  </div>

                  {/* Video Player */}
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                    {isPlaying ? (
                      <iframe
                        src={selectedTourPoint.video}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <Button
                          onClick={() => setIsPlaying(true)}
                          size="lg"
                          className="rounded-full w-16 h-16"
                        >
                          <Play className="w-8 h-8 ml-1" />
                        </Button>
                      </div>
                    )}
                  </div>

                  <Button className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Tour Completo
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-background rounded-lg border p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Selecciona un Punto de Interés
                </h3>
                <p className="text-muted-foreground">
                  Haz clic en los puntos marcados en el mapa para explorar
                  nuestras instalaciones y conocer más sobre cada área.
                </p>
              </div>
            )}

            {/* Quick Access */}
            <div className="bg-background rounded-lg border p-6">
              <h4 className="font-semibold text-primary mb-4">Acceso Rápido</h4>
              <div className="grid grid-cols-2 gap-4">
                {TOUR_POINTS.slice(0, 4).map((point) => (
                  <button
                    key={point.id}
                    onClick={() => setSelectedPoint(point.id)}
                    className="text-left p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="font-medium text-sm text-primary">{point.title}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {point.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">¿Listo para Visitarnos?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Programa una visita guiada y conoce de primera mano nuestras instalaciones
              especializadas en desarrollo sostenible.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="/campus/constanza#contacto">
                Agendar Visita
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}