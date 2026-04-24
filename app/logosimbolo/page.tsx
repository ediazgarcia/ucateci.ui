"use client"
import { InnerPageLayout } from "@/components/ucateci/inner-page-layout"
import Image from "next/image"
import { motion } from "framer-motion"
import { Palette } from "lucide-react"

const colors = [
  {
    name: "Azul Royal",
    bgClass: "bg-brand-navy",
    textClass: "text-brand-navy",
    description: "Representa el saber, la verdad científica y la profundidad académica de nuestra institución.",
    delay: 0.1
  },
  {
    name: "Rojo Institucional",
    bgClass: "bg-brand-red",
    textClass: "text-brand-red",
    description: "Simboliza la fuerza, el dinamismo, el espíritu de servicio y el compromiso social.",
    delay: 0.2
  },
  {
    name: "Amarillo Vaticano",
    bgClass: "bg-brand-gold",
    textClass: "text-brand-gold",
    description: "Incorporado en 2015 para representar la naturaleza católica y la fe que inspira nuestra filosofía.",
    delay: 0.3
  }
]

export default function LogosimboloPage() {
  return (
    <InnerPageLayout 
      title="Identidad Visual"
      subtitle="El logosímbolo es la representación gráfica central de nuestra esencia y valores."
      icon={<Palette className="w-10 h-10 text-brand-navy dark:text-brand-gold" />}
    >
      <div className="flex flex-col lg:flex-row gap-16 items-center my-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="w-full lg:w-1/2 flex justify-center relative"
        >
          {/* Animated glow behind logo */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-brand-gold/20 blur-3xl rounded-full"
          />
          <div className="bg-white dark:bg-white/5 p-16 rounded-[3rem] shadow-2xl border border-zinc-100 dark:border-white/10 relative z-10 w-full max-w-md aspect-square flex items-center justify-center group overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative w-full h-full">
               <Image 
                 src="/ucateci/ucateci-logo.png" 
                 alt="Logosímbolo de UCATECI" 
                 fill
                 className="object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
               />
             </div>
          </div>
        </motion.div>
        
        <div className="w-full lg:w-1/2 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-brand-navy dark:text-white m-0 mb-6">
              El Emblema de UCATECI
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              En el año 2015, como parte de la Actualización Simbólica de la Institución, nuestro logo fue rediseñado con el fin de proyectar una imagen más moderna y acorde a nuestra naturaleza.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Se suprimió el término "tecnológica" para reflejar fielmente nuestra realidad de Universidad integral, y se adaptaron los colores corporativos para abrazar nuestra identidad cristiana.
            </p>
          </motion.div>
          
          <div className="space-y-6 pt-8">
            <h3 className="text-2xl font-bold text-brand-navy dark:text-white m-0 mb-4">
              Nuestros Colores
            </h3>
            {colors.map((color, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: color.delay }}
                className="flex items-start gap-6 p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div 
                  className={`w-16 h-16 rounded-2xl shadow-inner shrink-0 relative overflow-hidden ${color.bgClass}`}
                >
                  <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className={`text-xl font-bold m-0 mb-2 ${color.textClass}`}>
                    {color.name}
                  </h4>
                  <p className="text-muted-foreground m-0 leading-relaxed">
                    {color.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </InnerPageLayout>
  )
}
