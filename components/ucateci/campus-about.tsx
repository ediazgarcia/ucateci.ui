"use client"

import { Award, BookOpen, Globe2, HeartHandshake, Users, Target, Eye, Star, Leaf, Droplets, Mountain, Tractor } from "lucide-react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CAMPUS_DATA, type CampusData } from "@/lib/data"

export function CampusAbout({ campusId }: { campusId: "ceb" | "constanza" }) {
  const campus = CAMPUS_DATA[campusId]

  const { ref, isVisible } = useScrollAnimation()
  const isCEB = campus.id === "ceb"

  const features = isCEB ? [
    {
      icon: BookOpen,
      title: "Educación Bilingüe",
      description: "Programa académico en español e inglés desde nivel inicial hasta secundaria.",
    },
    {
      icon: Award,
      title: "Excelencia Académica",
      description: "Más de 50 años formando líderes con los más altos estándares educativos.",
    },
    {
      icon: Users,
      title: "Formación Integral",
      description: "Desarrollo intelectual, ético, moral, afectivo, social, espiritual y físico.",
    },
    {
      icon: HeartHandshake,
      title: "Valores Cristianos",
      description: "Educación basada en principios cristianos y formación de carácter.",
    },
    {
      icon: Globe2,
      title: "Campus Moderno",
      description: "Instalaciones modernas y seguras en el corazón de Bonao.",
    },
    {
      icon: Target,
      title: "Preparación Universitaria",
      description: "Excelente preparación para el ingreso a universidades de prestigio.",
    },
  ] : [
    {
      icon: Leaf,
      title: "Educación Sostenible",
      description: "Programas académicos enfocados en el desarrollo sostenible y la conservación ambiental.",
    },
    {
      icon: Tractor,
      title: "Agricultura Moderna",
      description: "Formación especializada en técnicas agrícolas sostenibles y tecnología agrícola.",
    },
    {
      icon: Droplets,
      title: "Gestión del Agua",
      description: "Especialización en manejo eficiente de recursos hídricos y sistemas de riego.",
    },
    {
      icon: Mountain,
      title: "Conservación Ambiental",
      description: "Estudios en ecología, biodiversidad y desarrollo sostenible del territorio.",
    },
    {
      icon: Globe2,
      title: "Agroecoturismo",
      description: "Desarrollo de proyectos turísticos sostenibles vinculados al sector agrícola.",
    },
    {
      icon: Target,
      title: "Compromiso con Constanza",
      description: "Contribución activa al crecimiento económico y social del municipio.",
    },
  ]

  const stats = isCEB ? [
    { number: "50+", label: "Años de Excelencia" },
    { number: "1000+", label: "Estudiantes" },
    { number: "50+", label: "Profesores Calificados" },
    { number: "95%", label: "Tasa de Graduación" },
  ] : [
    { number: "2024", label: "Año de Fundación" },
    { number: "500+", label: "Estudiantes" },
    { number: "30+", label: "Profesores Especializados" },
    { number: "4", label: "Ámbitos Estratégicos" },
  ]

  const mission = isCEB 
    ? "Proveer a sus estudiantes de las herramientas necesarias para convertirse en líderes con carácter y principios, desarrollando sus potencialidades a través del trabajo constante y la autodisciplina."
    : "La educación es la principal vía para asegurar el desarrollo de los pueblos y de su gente. Como recinto académico UCATECI-Constanza, nos comprometemos a formar profesionales altamente capacitados en los ámbitos estratégicos de agricultura, gestión del agua, ambiente y agroecoturismo."

  const vision = isCEB
    ? "Ser uno de los mejores colegios bilingües de la República Dominicana, formando estudiantes capaces de alcanzar la excelencia en todas las áreas."
    : "Ser el centro de educación superior líder en Constanza, reconocido por su excelencia académica y su contribución al desarrollo sostenible del municipio, formando profesionales innovadores y comprometidos con el progreso de la región."

  const values = isCEB
    ? "Auto disciplina, Honestidad, Responsabilidad, Integridad, Amabilidad, Iniciativa, Respeto, Compañerismo, Trabajo en equipo, Alegría, Empatía y Bondad."
    : "Excelencia académica, compromiso con el desarrollo sostenible, innovación, responsabilidad social, integridad, trabajo en equipo y respeto por el medio ambiente. Creemos en Constanza, en el valor de su gente y la riqueza de su tierra."

  return (
    <section className="bg-background py-16 md:py-24" id="acerca">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Sobre Nosotros</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            {campus.name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {isCEB 
              ? "Una institución educativa comprometida con la formación integral de estudiantes desde nivel inicial hasta secundaria, con énfasis en valores cristianos y excelencia académica."
              : "Un centro de educación superior comprometido con el desarrollo sostenible de Constanza, formando profesionales especializados en agricultura, gestión del agua, ambiente y agroecoturismo."
            }
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 transition-transform group-hover:scale-110 group-hover:text-accent">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="group bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/5 group-hover:bg-primary/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Vision Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Misión", text: mission },
            { icon: Eye, title: "Visión", text: vision },
            { icon: isCEB ? HeartHandshake : Star, title: "Valores", text: values }
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-b from-card to-muted/20 p-8 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-serif">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Constanza Strategic Focus (Only renders if not CEB) */}
        {!isCEB && (
          <div className="mt-16 bg-muted/30 rounded-3xl p-8 md:p-12 border border-border">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">Ámbitos de Acción</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">Enfoques Principales que Garantizan la Sostenibilidad</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Nuestro recinto académico desarrolla iniciativas orientadas en cuatro ámbitos en los que Constanza presenta oportunidades de crecimiento exponencial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Tractor, title: "Agricultura", desc: "Técnicas agrícolas sostenibles y tecnología.", color: "text-green-600", bg: "bg-green-100" },
                { icon: Droplets, title: "Gestión del Agua", desc: "Manejo eficiente de recursos hídricos.", color: "text-blue-600", bg: "bg-blue-100" },
                { icon: Mountain, title: "Ambiente", desc: "Ecología y desarrollo sostenible del territorio.", color: "text-emerald-600", bg: "bg-emerald-100" },
                { icon: Globe2, title: "Agroecoturismo", desc: "Desarrollo turístico vinculado al sector agrícola.", color: "text-amber-600", bg: "bg-amber-100" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 shadow-sm`}>
                    <item.icon className={`w-10 h-10 ${item.color}`} />
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
