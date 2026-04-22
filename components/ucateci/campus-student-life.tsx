"use client"

import { useState } from "react"
import { Trophy, Palette, Music, BookOpen, Heart, Users, Microscope, Leaf, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CAMPUS_DATA, type CampusData } from "@/lib/data"

export function CampusStudentLife({ campusId }: { campusId: "ceb" | "constanza" }) {
  const campus = CAMPUS_DATA[campusId]

  const isCEB = campus.id === "ceb"
  const [activeTab, setActiveTab] = useState(0)

  const categories = isCEB ? [
    {
      id: "deportes",
      title: "Deportes",
      icon: Trophy,
      description: "Desarrollo físico y trabajo en equipo a través de diversas disciplinas deportivas.",
      image: "/ucateci/student-life.jpg",
      activities: ["Fútbol sala y campo", "Baloncesto", "Voleibol", "Ajedrez", "Atletismo"],
    },
    {
      id: "artes",
      title: "Artes y Cultura",
      icon: Palette,
      description: "Espacios para la expresión creativa y el desarrollo del talento artístico.",
      image: "/ucateci/campus-aerial.jpg",
      activities: ["Artes Plásticas", "Teatro", "Danza Folklórica", "Coro Estudiantil", "Banda de Música"],
    },
    {
      id: "pastoral",
      title: "Pastoral",
      icon: Heart,
      description: "Formación espiritual y vivencia de los valores cristianos en comunidad.",
      image: "/ucateci/students-campus.jpg",
      activities: ["Retiros Espirituales", "Misas Mensuales", "Grupos Juveniles", "Servicio Social", "Campamentos"],
    },
    {
      id: "clubes",
      title: "Clubes Académicos",
      icon: BookOpen,
      description: "Grupos extracurriculares para profundizar en áreas de interés específico.",
      image: "/ucateci/library.jpg",
      activities: ["Club de Lectura", "Club de Ciencias", "Robótica", "Debate Escolar", "Periodismo"],
    },
  ] : [
    {
      id: "investigacion",
      title: "Investigación",
      icon: Microscope,
      description: "Participación en proyectos de investigación aplicada al desarrollo sostenible.",
      image: "/ucateci/research-lab.jpg",
      activities: ["Proyectos de Campo", "Laboratorios", "Publicaciones", "Seminarios", "Congresos Estudiantiles"],
    },
    {
      id: "ambiente",
      title: "Sostenibilidad",
      icon: Leaf,
      description: "Iniciativas y grupos dedicados a la conservación y conciencia ambiental.",
      image: "/ucateci/campus-aerial.jpg",
      activities: ["Clubes Ecológicos", "Reforestación", "Reciclaje", "Huertos Universitarios", "Campañas de Concienciación"],
    },
    {
      id: "voluntariado",
      title: "Voluntariado",
      icon: Heart,
      description: "Servicio comunitario y proyectos de impacto social en Constanza.",
      image: "/ucateci/students-campus.jpg",
      activities: ["Apoyo Comunitario", "Alfabetización", "Asistencia Técnica", "Brigadas de Salud", "Rescate Ambiental"],
    },
    {
      id: "deportes",
      title: "Deportes y Recreación",
      icon: Trophy,
      description: "Actividades deportivas y recreativas para el bienestar físico y mental.",
      image: "/ucateci/student-life.jpg",
      activities: ["Torneos Intramuros", "Senderismo", "Ciclismo de Montaña", "Acondicionamiento Físico", "Juegos Recreativos"],
    },
  ]

  return (
    <section className="bg-muted/30 py-16 md:py-24" id="vida">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Vida Estudiantil</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl">Más allá de las Aulas</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
            {isCEB 
              ? "Complementamos la excelencia académica con una rica variedad de actividades extracurriculares que promueven el desarrollo integral de nuestros estudiantes."
              : "Complementamos la formación académica con actividades de investigación, servicio comunitario y desarrollo sostenible que enriquecen la experiencia universitaria."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {categories.map((category, index) => {
              const isActive = activeTab === index
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md transform translate-x-2"
                      : "bg-background border border-border text-foreground hover:border-primary/50 hover:bg-muted"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? "bg-white/20" : "bg-primary/10 text-primary"}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <div className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm h-full flex flex-col">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={categories[activeTab].image}
                  alt={categories[activeTab].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex items-center gap-3 mb-2 text-white/90">
                    {(() => {
                      const ActiveIcon = categories[activeTab].icon;
                      return <ActiveIcon className="w-6 h-6 text-accent" />;
                    })()}
                    <span className="font-semibold uppercase tracking-wider text-sm">{categories[activeTab].title}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Experiencia {isCEB ? "Estudiantil" : "Universitaria"}</h3>
                  <p className="text-white/80 max-w-xl">
                    {categories[activeTab].description}
                  </p>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="font-semibold text-primary mb-4 text-lg border-b pb-2">Actividades Destacadas</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {categories[activeTab].activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground group">
                      <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">{activity}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Button className="group" variant="outline">
                    Conocer más sobre {categories[activeTab].title.toLowerCase()}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
