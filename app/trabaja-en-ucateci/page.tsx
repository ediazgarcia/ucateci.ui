"use client"
import { InnerPageLayout } from "@/components/ucateci/inner-page-layout"
import { Briefcase, Download, Mail, ChevronRight, FileText, MapPin, Clock, Search, Filter, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const vacantes = [
  {
    titulo: "Docente de Ingeniería de Sistemas",
    departamento: "Facultad de Ingenierías",
    ubicacion: "Sede Principal, La Vega",
    tipo: "Tiempo Completo",
    publicado: "Hace 2 días",
    estado: "Nueva"
  },
  {
    titulo: "Coordinador(a) Académico(a)",
    departamento: "Decanato de Estudiantes",
    ubicacion: "Recinto Constanza",
    tipo: "Tiempo Completo",
    publicado: "Hace 1 semana",
    estado: "Activa"
  },
  {
    titulo: "Analista de Tecnología Educativa",
    departamento: "Departamento de Tecnología",
    ubicacion: "Sede Principal, La Vega",
    tipo: "Medio Tiempo",
    publicado: "Hace 1 semana",
    estado: "Activa"
  },
  {
    titulo: "Docente Clínico - Odontología",
    departamento: "Facultad de Ciencias de la Salud",
    ubicacion: "Clínica UCATECI",
    tipo: "Tiempo Completo",
    publicado: "Hace 2 semanas",
    estado: "Cerrando pronto"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
}

export default function TrabajaEnUcateciPage() {
  return (
    <InnerPageLayout 
      title="Bolsa de Empleo" 
      subtitle="Descubre tu próximo paso profesional y forma parte del equipo que transforma la educación superior en el Cibao."
      icon={<Briefcase className="w-10 h-10 text-brand-navy dark:text-brand-gold" />}
    >
      
      {/* Buscador de Vacantes */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 -mt-6 bg-white dark:bg-zinc-900/50 p-4 rounded-2xl md:rounded-full shadow-lg border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row gap-4 relative z-20"
      >
        <div className="flex-1 flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-full px-6 py-3 border border-transparent focus-within:border-brand-gold/50 focus-within:ring-2 focus-within:ring-brand-gold/20 transition-all">
          <Search className="w-5 h-5 text-muted-foreground mr-3" />
          <input 
            type="text" 
            placeholder="Buscar por cargo, palabra clave o departamento..." 
            className="bg-transparent border-none outline-none w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-6 py-3 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-foreground font-medium rounded-full transition-colors">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filtros</span>
          </button>
          <button className="px-8 py-3 bg-brand-navy hover:bg-brand-navy-deep text-white font-medium rounded-full transition-colors">
            Buscar
          </button>
        </div>
      </motion.div>

      {/* Lista de Vacantes */}
      <div className="mb-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-brand-navy dark:text-white m-0">
              Vacantes Disponibles
            </h2>
            <p className="text-muted-foreground mt-2 m-0">
              Posiciones abiertas actualmente en nuestros diferentes campus.
            </p>
          </div>
          <p className="text-sm font-medium text-brand-gold hidden sm:block">
            {vacantes.length} resultados
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {vacantes.map((vacante, i) => (
            <motion.div 
              key={i}
              variants={itemVariant}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white dark:bg-zinc-900/40 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-brand-gold/50 hover:shadow-xl transition-all cursor-pointer overflow-hidden relative"
            >
              {/* Highlight bar en hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex-1 mb-4 md:mb-0 ml-2 md:ml-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-brand-navy dark:text-white group-hover:text-brand-red transition-colors m-0">
                    {vacante.titulo}
                  </h3>
                  {vacante.estado === "Nueva" && (
                    <span className="px-3 py-1 bg-brand-gold/20 text-yellow-700 dark:text-brand-gold text-xs font-bold rounded-full">
                      NUEVA
                    </span>
                  )}
                  {vacante.estado === "Cerrando pronto" && (
                    <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-bold rounded-full">
                      CIERRA PRONTO
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3">
                  <div className="flex items-center text-sm text-muted-foreground font-medium">
                    <Briefcase className="w-4 h-4 mr-2 text-brand-navy/60 dark:text-brand-gold/60" />
                    {vacante.departamento}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground font-medium">
                    <MapPin className="w-4 h-4 mr-2 text-brand-navy/60 dark:text-brand-gold/60" />
                    {vacante.ubicacion}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground font-medium">
                    <Clock className="w-4 h-4 mr-2 text-brand-navy/60 dark:text-brand-gold/60" />
                    {vacante.tipo}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:flex-col md:items-end gap-4 ml-2 md:ml-6 border-t md:border-t-0 border-zinc-100 dark:border-zinc-800 pt-4 md:pt-0">
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {vacante.publicado}
                </span>
                <button className="flex items-center text-brand-gold font-semibold group-hover:text-brand-red transition-colors">
                  Ver Detalles
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 border-2 border-zinc-200 dark:border-zinc-800 hover:border-brand-navy dark:hover:border-brand-gold rounded-full font-medium transition-colors">
            Cargar más vacantes
          </button>
        </div>
      </div>

      {/* Proceso y Requisitos (Original requirement) */}
      <div className="relative p-10 md:p-14 bg-brand-navy dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl overflow-hidden text-white">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 blur-3xl rounded-full" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 mt-0">
              ¿Cómo Aplicar Generalmente?
            </h2>
            <p className="text-white/80 text-lg mb-8 m-0">
              Si no encuentra una vacante específica pero desea pertenecer a nuestra base de datos, siga estos pasos para enviar su solicitud general.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-brand-gold/20 p-3 rounded-xl text-brand-gold shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg m-0 text-white">1. Descargar Formulario</h4>
                  <p className="text-white/70 m-0">Complete debidamente el Formulario de Solicitud de Empleo.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-brand-gold/20 p-3 rounded-xl text-brand-gold shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg m-0 text-white">2. Reunir Documentos</h4>
                  <p className="text-white/70 m-0">Adjunte CV actualizado y copias de títulos académicos.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-brand-gold/20 p-3 rounded-xl text-brand-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg m-0 text-white">3. Enviar a Gestión Humana</h4>
                  <p className="text-white/70 m-0">Envíe el expediente al departamento correspondiente.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10">
            <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mb-6 shadow-xl shadow-brand-gold/20">
              <FileText className="w-10 h-10 text-brand-navy" />
            </div>
            <h3 className="text-2xl font-bold text-white mt-0 mb-3">Formulario Oficial</h3>
            <p className="text-white/70 mb-8 m-0">
              Documento obligatorio para procesar cualquier solicitud.
            </p>
            <a 
              href="https://www.ucateci.edu.do/images/archivos/solicitud/Formulario-de-Solicitud-de-Empleo-UCATECI.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 bg-brand-gold hover:bg-white text-brand-navy rounded-full font-bold text-lg transition-all shadow-xl"
            >
              <Download className="h-5 w-5" />
              Descargar PDF
            </a>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  )
}
