"use client"
import { InnerPageLayout } from "@/components/ucateci/inner-page-layout"
import { Heart, Lightbulb, Target, Sparkles, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
}

const valores = [
  "Excelencia", "Calidad", "Transparencia", "Responsabilidad", 
  "Integridad", "Respeto", "Creatividad", "Equidad"
]

export default function FilosofiaPage() {
  return (
    <InnerPageLayout 
      title="Filosofía Institucional" 
      subtitle="Conozca los principios que rigen nuestro quehacer académico y social."
      icon={<Heart className="w-10 h-10 text-brand-red dark:text-brand-gold" />}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-brand-navy/5 to-transparent dark:from-white/5 p-8 rounded-3xl border border-brand-navy/10 dark:border-white/10 mb-16 overflow-hidden"
      >
        <div className="absolute -right-10 -top-10 text-brand-gold/10">
          <Sparkles className="w-40 h-40" />
        </div>
        <p className="text-2xl text-brand-navy-deep dark:text-zinc-300 font-light leading-relaxed relative z-10 m-0">
          La filosofía de la <span className="font-semibold text-brand-navy dark:text-white">Universidad Católica del Cibao (UCATECI)</span>, está inspirada en el humanismo-cristiano, la búsqueda de la verdad científica y el fomento de los valores, en procura de la dignidad humana y la sostenibilidad.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-8 md:grid-cols-2 mt-12"
      >
        <motion.div variants={item} className="group relative bg-white dark:bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-2xl hover:border-brand-gold/50 hover:-translate-y-2 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/5 rounded-bl-[100%] transition-transform group-hover:scale-110" />
          <div className="mb-6 inline-flex p-4 rounded-2xl bg-brand-navy/10 text-brand-navy dark:bg-brand-gold/10 dark:text-brand-gold relative z-10">
            <Target className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-4 relative z-10 mt-0">Misión</h2>
          <p className="text-muted-foreground text-lg relative z-10">
            Formar profesionales íntegros y competentes en su disciplina, capaces de ejercer su profesión apegados a los valores, para la transformación social y la convivencia humana.
          </p>
        </motion.div>

        <motion.div variants={item} className="group relative bg-white dark:bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-2xl hover:border-brand-gold/50 hover:-translate-y-2 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-[100%] transition-transform group-hover:scale-110" />
          <div className="mb-6 inline-flex p-4 rounded-2xl bg-brand-gold/10 text-brand-gold dark:bg-brand-navy/30 dark:text-brand-gold relative z-10">
            <Lightbulb className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-4 relative z-10 mt-0">Visión</h2>
          <p className="text-muted-foreground text-lg relative z-10">
            Ser una Institución de educación superior reconocida por su Excelencia Académica, la Calidad de los Servicios, la Transparencia en la Gestión y su Responsabilidad Social.
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-16 bg-brand-navy text-white p-10 md:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/ucateci/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute -top-[50%] -right-[10%] w-[100%] h-[200%] bg-gradient-to-b from-brand-gold/20 to-transparent rotate-45 pointer-events-none" />
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center relative z-10 mt-0">Nuestros Valores</h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10"
        >
          {valores.map((valor) => (
            <motion.div 
              key={valor} 
              variants={item}
              className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-colors hover:bg-white/20"
            >
              <CheckCircle2 className="w-8 h-8 text-brand-gold mb-3 opacity-80" />
              <span className="font-semibold text-lg">{valor}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </InnerPageLayout>
  )
}
