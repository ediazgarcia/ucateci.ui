"use client"
import { InnerPageLayout } from "@/components/ucateci/inner-page-layout"
import { Scale, Download, ChevronRight, FileCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function ReglamentoAcademicoPage() {
  return (
    <InnerPageLayout 
      title="Reglamento Académico"
      subtitle="Normativas, políticas y procedimientos que rigen la vida académica en nuestra universidad."
      icon={<Scale className="w-10 h-10 text-brand-navy dark:text-brand-gold" />}
    >
      <div className="flex flex-col items-center justify-center py-12 max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-8 md:p-16 text-center shadow-xl relative overflow-hidden group"
        >
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-navy/5 dark:bg-brand-gold/5 rounded-bl-[100%] pointer-events-none transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red/5 rounded-tr-[100%] pointer-events-none transition-transform duration-700 group-hover:scale-110" />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="h-28 w-28 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-[2rem] flex items-center justify-center mb-10 shadow-lg"
            >
              <FileCheck className="h-14 w-14 text-brand-navy dark:text-brand-gold" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-6 tracking-tight mt-0">
              Reglamento General de Grado
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl font-medium leading-relaxed">
              Consulte el documento oficial que contiene sus derechos, deberes y todas las normativas académicas vigentes para estudiantes de grado.
            </p>
            
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn flex items-center gap-3 px-8 py-4 bg-brand-navy hover:bg-brand-navy-deep text-white rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-brand-navy/30"
            >
              <Download className="h-6 w-6" />
              Descargar Reglamento
              <ChevronRight className="h-5 w-5 opacity-50 group-hover/btn:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </InnerPageLayout>
  )
}
