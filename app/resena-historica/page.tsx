"use client"
import { InnerPageLayout } from "@/components/ucateci/inner-page-layout"
import { Building2, Calendar, Award, Crown, Repeat } from "lucide-react"
import { motion } from "framer-motion"

const timeline = [
  {
    year: "1969 - 1970s",
    title: "El Origen de una Idea",
    icon: <Calendar className="w-6 h-6" />,
    content: "La Universidad tiene su origen en el interés del pueblo vegano por la educación. Monseñor Juan Antonio Flores Santana lideró la iniciativa al ver que un significativo porcentaje del estudiantado debía trasladarse a Santo Domingo. Así comenzó la gestación para obtener el decreto que permitiría una universidad en La Vega."
  },
  {
    year: "1983",
    title: "Nacimiento de INTECI",
    icon: <Award className="w-6 h-6" />,
    content: "El 25 de febrero de 1983, mediante el Decreto 820 del Poder Ejecutivo, se autorizó la apertura del Instituto Tecnológico del Cibao (INTECI) con una matrícula inicial de 643 estudiantes en carreras clave."
  },
  {
    year: "1986",
    title: "Evolución a UTECI",
    icon: <Repeat className="w-6 h-6" />,
    content: "El Instituto Tecnológico del Cibao cambió su nombre mediante el Decreto 764, pasando a ser la Universidad Tecnológica del Cibao (UTECI), marcando una nueva etapa en su crecimiento académico."
  },
  {
    year: "1988",
    title: "Inauguración del Campus",
    icon: <Building2 className="w-6 h-6" />,
    content: "Se inaugura el actual Campus Universitario, sede central en La Vega, brindando un entorno propicio para el desarrollo de la academia, atrayendo a estudiantes de toda la región central y del Cibao."
  },
  {
    year: "2002",
    title: "Declaración como UCATECI",
    icon: <Crown className="w-6 h-6" />,
    content: "Gracias a las gestiones del entonces Obispo de La Vega, Monseñor Antonio Camilo González, la institución fue elevada y declarada oficialmente Universidad Católica Tecnológica del Cibao (UCATECI)."
  },
  {
    year: "2015",
    title: "Transformación Institucional",
    icon: <Repeat className="w-6 h-6" />,
    content: "La Universidad inicia un ambicioso Proceso de Transformación Institucional: rediseño de filosofía, estructura, cultura corporativa y actualización de su simbología, adaptándose a las demandas contemporáneas."
  }
]

export default function ResenaHistoricaPage() {
  return (
    <InnerPageLayout 
      title="Reseña Histórica"
      subtitle="Más de cuatro décadas forjando profesionales y liderando el desarrollo académico en la región del Cibao."
      icon={<Building2 className="w-10 h-10 text-brand-navy dark:text-brand-gold" />}
    >
      <div className="max-w-4xl mx-auto py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xl md:text-2xl text-brand-navy dark:text-zinc-300 font-light leading-relaxed m-0">
            Desde nuestros humildes inicios impartiendo docencia en locales facilitados por ciudadanos altruistas, hasta convertirnos en el corazón académico de La Vega.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-brand-gold/30 dark:border-white/10 ml-6 md:ml-12 pl-8 md:pl-16 space-y-16">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="relative group"
            >
              {/* Timeline dot/icon */}
              <div className="absolute -left-[58px] md:-left-[90px] top-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-zinc-900 border-4 border-brand-gold dark:border-brand-navy-deep flex items-center justify-center text-brand-navy dark:text-brand-gold z-10 transition-transform group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white shadow-lg">
                {item.icon}
              </div>

              <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 group-hover:border-brand-gold/30">
                <span className="inline-block py-1 px-4 rounded-full bg-brand-red/10 text-brand-red font-bold text-sm mb-4 tracking-wider">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-4 mt-0">
                  {item.title}
                </h3>
                <p className="text-muted-foreground m-0 text-lg leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-10 bg-gradient-to-br from-brand-navy to-brand-navy-deep rounded-[2rem] text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
          <h3 className="text-2xl font-bold mb-4 relative z-10 mt-0">El Legado Continúa</h3>
          <p className="text-white/80 text-lg m-0 relative z-10">
            Bajo la actual dirección de Mons. Carlos Tomás Morel Diplán, UCATECI sigue su proceso de innovación, asegurando que su misión y valores católicos formen a las futuras generaciones de dominicanos.
          </p>
        </motion.div>
      </div>
    </InnerPageLayout>
  )
}
