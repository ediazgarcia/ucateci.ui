"use client"
import { InnerPageLayout } from "@/components/ucateci/inner-page-layout"
import { Users, GraduationCap, Building, Star, Award, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

const autoridades = [
  { nombre: "S. E. R. Mons. Carlos Tomás Morel Diplán", cargo: "Rector de la UCATECI", destacado: true, icon: <Star /> },
  { nombre: "Rvdo. P. Dr. Francisco Antonio Jiménez", cargo: "Vicerrector ejecutivo", destacado: true, icon: <Award /> },
  { nombre: "Sr. Inocencio Then Martínez, MAG.", cargo: "Vicerrector de Asuntos Académicos de Grado", icon: <GraduationCap /> },
  { nombre: "Sr. Eleucadio Javier Castillo Coste, MAG.", cargo: "Vicerrector de Asuntos Financieros y Administrativos", icon: <Building /> },
  { nombre: "Sra. Heidy María Fernández, MAG.", cargo: "Decana de la Escuela de Estudios de Posgrado", icon: <BookOpen /> },
  { nombre: "Sr. Juan de Jesús Santos Santos, Ph. D.", cargo: "Decano de la Facultad de Ciencias Humanas y Sociales", icon: <Users /> },
  { nombre: "Dr. Bienvenido Antonio Veras Estévez", cargo: "Decano de la Facultad de Ciencias de la Salud", icon: <Users /> },
  { nombre: "Sra. Hilda Altagracia Bloise Bretón de Florencio, Ph. D.", cargo: "Decana de la Facultad de Negocios", icon: <Users /> },
  { nombre: "Sra. Aleska Yesly Chávez Rodríguez, MAG.", cargo: "Decana de la Facultad de las Ingenierías", icon: <Users /> },
  { nombre: "Sr. César Andrés Canela Acosta, MAG.", cargo: "Decano de estudiantes", icon: <Users /> },
  { nombre: "Sr. Jacinto Alejandro Núñez Suazo, MAG.", cargo: "Coordinador del Programa de Educación Superior para Adultos (PESA)", icon: <Users /> },
  { nombre: "Sra. Michaele Karina Abreu Tejada, Ph. D.", cargo: "Directora del Departamento de Investigación", icon: <Users /> },
  { nombre: "Sr. Francisco Antonio Peguero de los Santos, Ph. D.", cargo: "Director del Departamento de Admisiones", icon: <Users /> },
  { nombre: "Sra. Mildred Quezada Santana, MAG.", cargo: "Directora del Departamento Registro", icon: <Users /> },
  { nombre: "Sra. Yohanna Yudelka Paulino Salcedo de Rojas, MAG.", cargo: "Directora de Biblioteca", icon: <Users /> },
  { nombre: "Sra. Jenny Abigail Restituyo Jiménez, MAG.", cargo: "Directora del Departamento de Estudios Generales", icon: <Users /> },
  { nombre: "Sr. Chrispher Eduardo Burgos Marte, MAG.", cargo: "Director del Departamento de Tecnología Educativa", icon: <Users /> },
  { nombre: "Sra. Anabel Almánzar, Ph. D.", cargo: "Directora del Departamento de Desarrollo Curricular", icon: <Users /> },
  { nombre: "Sr. Eleuterio Ferreira Calderón, Ph. D.", cargo: "Director del Centro de Didáctica e Innovación Académica (CEDIA)", icon: <Users /> },
  { nombre: "Sra. Mercedes Aurelia Muñoz Estévez, MAG.", cargo: "Directora del Departamento de Movilidad Académica e Internacionalización", icon: <Users /> },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
}

export default function AutoridadesAcademicasPage() {
  const destacados = autoridades.filter(a => a.destacado)
  const regulares = autoridades.filter(a => !a.destacado)

  return (
    <InnerPageLayout 
      title="Autoridades Académicas"
      subtitle="Conozca el equipo directivo que guía los pasos de nuestra institución hacia la excelencia."
      icon={<Users className="w-10 h-10 text-brand-navy dark:text-brand-gold" />}
    >
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="mb-16 mt-8"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {destacados.map((autoridad, index) => (
            <motion.div 
              key={index}
              variants={itemVariant}
              className="relative group bg-gradient-to-br from-brand-navy to-brand-navy-deep dark:from-zinc-900 dark:to-zinc-800 p-8 md:p-10 rounded-[2rem] shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/20 rounded-bl-full pointer-events-none transition-transform group-hover:scale-125" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col h-full relative z-10 text-white">
                <div className="bg-white/10 p-4 rounded-2xl w-fit mb-6 backdrop-blur-md border border-white/20 text-brand-gold">
                  {autoridad.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 drop-shadow-sm mt-0">
                  {autoridad.nombre}
                </h3>
                <p className="text-white/80 text-lg font-medium tracking-wide">
                  {autoridad.cargo}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
        </div>
        <div className="relative bg-background px-6">
          <h2 className="text-xl font-bold text-muted-foreground uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-brand-navy to-brand-gold m-0">
            Consejo Directivo y Decanatos
          </h2>
        </div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {regulares.map((autoridad, index) => (
          <motion.div 
            key={index} 
            variants={itemVariant}
            className="group flex flex-col p-6 bg-white dark:bg-zinc-900/40 rounded-3xl shadow-sm border border-zinc-200/80 dark:border-zinc-800/80 transition-all hover:border-brand-gold/50 hover:shadow-lg hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            <div className="flex items-start gap-4 h-full">
              <div className="p-3 bg-brand-navy/5 dark:bg-white/5 rounded-xl text-brand-navy dark:text-brand-gold transition-colors group-hover:bg-brand-navy group-hover:text-white shrink-0">
                {autoridad.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-navy dark:text-white m-0 leading-tight mb-2 group-hover:text-brand-red transition-colors">
                  {autoridad.nombre}
                </h3>
                <p className="text-muted-foreground text-sm m-0 leading-snug font-medium">
                  {autoridad.cargo}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </InnerPageLayout>
  )
}
