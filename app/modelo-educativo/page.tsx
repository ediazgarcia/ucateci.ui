"use client"
import { InnerPageLayout } from "@/components/ucateci/inner-page-layout"
import { BookOpen, Download, ChevronRight, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function ModeloEducativoPage() {
  return (
    <InnerPageLayout 
      title="Modelo Educativo"
      subtitle="El fundamento pedagógico y filosófico que orienta la formación integral en UCATECI."
      icon={<BookOpen className="w-10 h-10 text-brand-navy dark:text-brand-gold" />}
    >
      <div className="flex flex-col items-center justify-center py-12 max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-gradient-to-br from-brand-navy to-brand-navy-deep dark:from-zinc-900 dark:to-zinc-800 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden group"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-[url('/ucateci/noise.png')] opacity-10 mix-blend-overlay" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[50%] -right-[20%] w-[100%] h-[200%] bg-gradient-to-b from-brand-gold/10 to-transparent pointer-events-none" 
          />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="h-28 w-28 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <FileText className="h-14 w-14 text-brand-gold" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Documento Institucional
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl font-light leading-relaxed">
              Descargue el documento completo del Modelo Educativo de UCATECI, el cual establece los principios pedagógicos, filosóficos y metodológicos que guían nuestro accionar académico.
            </p>
            
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn flex items-center gap-3 px-8 py-4 bg-brand-gold hover:bg-white text-brand-navy rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-brand-gold/50"
            >
              <Download className="h-6 w-6" />
              Descargar PDF
              <ChevronRight className="h-5 w-5 opacity-50 group-hover/btn:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </InnerPageLayout>
  )
}
