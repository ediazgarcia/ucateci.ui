"use client"
import { InnerPageLayout } from "@/components/ucateci/inner-page-layout"
import { GraduationCap, Download, ChevronRight, Compass } from "lucide-react"
import { motion } from "framer-motion"

export default function ManualEstudiantePage() {
  return (
    <InnerPageLayout 
      title="Manual del Estudiante"
      subtitle="Tu guía indispensable para navegar el primer año y adaptarte con éxito a la vida universitaria."
      icon={<GraduationCap className="w-10 h-10 text-brand-navy dark:text-brand-gold" />}
    >
      <div className="flex flex-col items-center justify-center py-12 max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white dark:bg-zinc-900 border border-brand-navy/10 dark:border-white/10 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden group"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent pointer-events-none" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-gold/20 rounded-full blur-[100px] pointer-events-none" 
          />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="h-28 w-28 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-brand-gold/30 text-white"
            >
              <Compass className="h-14 w-14" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-6 tracking-tight mt-0">
              Guía de Nuevo Ingreso
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl font-medium leading-relaxed">
              Un recurso esencial diseñado especialmente para ti. Contiene información sobre servicios, procesos de matriculación, mapas del campus y consejos invaluables.
            </p>
            
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn flex items-center gap-3 px-8 py-4 bg-brand-navy dark:bg-brand-gold hover:bg-brand-navy-deep dark:hover:bg-yellow-500 text-white dark:text-brand-navy rounded-full font-bold text-lg transition-all shadow-xl"
            >
              <Download className="h-6 w-6" />
              Descargar Manual
              <ChevronRight className="h-5 w-5 opacity-50 group-hover/btn:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </InnerPageLayout>
  )
}
