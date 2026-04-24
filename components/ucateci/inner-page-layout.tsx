"use client"
import { ReactNode } from "react"
import { SiteHeader } from "@/components/ucateci/site-header"
import { SiteFooter } from "@/components/ucateci/site-footer"
import { PageShell } from "@/components/ucateci/page-shell"
import { AnnouncementBar } from "@/components/ucateci/announcement-bar"
import { Reveal } from "@/components/ucateci/reveal"
import { BackToTop } from "@/components/ucateci/back-to-top"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen } from "lucide-react"

interface InnerPageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  icon?: React.ReactNode
  backgroundImage?: string
}

export function InnerPageLayout({ title, subtitle, children, icon, backgroundImage }: InnerPageLayoutProps) {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 300])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  
  return (
    <PageShell accent="brand">
      <AnnouncementBar />
      <SiteHeader />
      
      {/* Espectacular Hero para Páginas Internas */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          {backgroundImage ? (
             <img 
               src={backgroundImage}
               alt=""
               className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-20 mix-blend-overlay"
             />
          ) : (
             <div className="absolute inset-0 bg-noise opacity-40 dark:opacity-20" />
          )}
          
          {/* Gradient overlay para fundir con el fondo principal */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/10 via-background/80 to-background dark:from-brand-navy/30 dark:via-background/90" />
          
          {/* Elementos decorativos flotantes (Orbitales) */}
          <motion.div 
            animate={{ 
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.2, 1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -right-[5%] w-[40vw] h-[40vw] rounded-full bg-brand-gold/15 blur-[120px]"
          />
          <motion.div 
            animate={{ 
              rotate: [360, 270, 180, 90, 0],
              scale: [1, 1.15, 1, 1.15, 1]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-red/10 blur-[140px]"
          />
        </motion.div>

        <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-5xl text-center">
          <Reveal>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
               className="mx-auto mb-8 flex justify-center items-center w-24 h-24 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/50 dark:border-white/10 text-brand-gold shadow-[0_0_40px_rgba(212,164,55,0.2)]"
            >
               {icon || <BookOpen className="w-10 h-10 text-brand-navy dark:text-brand-gold" />}
            </motion.div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-navy-deep to-brand-gold dark:from-white dark:via-zinc-300 dark:to-brand-gold mb-6 drop-shadow-sm pb-2">
              {title}
            </h1>
          </Reveal>
          
          {subtitle && (
            <Reveal delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-10">
                {subtitle}
              </p>
            </Reveal>
          )}
          
          <Reveal delay={0.3}>
             <div className="mt-8 h-1.5 w-24 bg-gradient-to-r from-brand-red to-brand-gold mx-auto rounded-full shadow-[0_0_20px_rgba(212,164,55,0.6)]" />
          </Reveal>
        </div>
      </div>
      
      <main className="relative pb-32 -mt-10 z-20">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <Reveal delay={0.4}>
            <div className="surface-card p-8 md:p-12 lg:p-16 
                            prose prose-lg dark:prose-invert max-w-none 
                            prose-headings:text-brand-navy dark:prose-headings:text-white
                            prose-a:text-brand-gold hover:prose-a:text-brand-red
                            text-foreground
                            relative overflow-hidden group">
              {/* Sutil gradiente interno de la tarjeta */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent dark:from-white/5 pointer-events-none" />
              
              <div className="relative z-10">
                {children}
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      
      <SiteFooter />
      <BackToTop />
    </PageShell>
  )
}
