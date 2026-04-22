"use client"

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CAMPUS_DATA, type CampusData } from "@/lib/data"

export function CampusContact({ campusId }: { campusId: "ceb" | "constanza" }) {
  const campus = CAMPUS_DATA[campusId]

  const isCEB = campus.id === "ceb"

  return (
    <section className="bg-background py-16 md:py-24" id="contacto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contacto</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl text-balance">
            Comunícate con {campus.shortName}
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte en tu proceso de admisión a {isCEB ? "nuestro colegio" : "la universidad"}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Información General</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Dirección</h4>
                    <p className="text-muted-foreground">
                      {campus.header.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Teléfonos</h4>
                    <p className="text-muted-foreground">{campus.header.phone}</p>
                    <p className="text-muted-foreground">Ext. Admisiones: 204</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Correo Electrónico</h4>
                    <a href={`mailto:${campus.header.email}`} className="text-accent hover:underline">
                      {campus.header.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horario de Atención</h4>
                    <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sábados: 8:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map (Placeholder) */}
            <div className="h-64 bg-muted rounded-3xl border border-border overflow-hidden relative shadow-sm">
              <iframe
                title="Mapa de ubicación del campus"
                src={isCEB 
                  ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.205934164104!2d-70.395159185108!3d18.922268987176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaab4e1d3d6b0e9%3A0x6a1b2a3b4c5d6e7f!2sUCATECI!5e0!3m2!1ses-419!2sdo!4v1650000000000!5m2!1ses-419!2sdo"
                  : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.205934164104!2d-70.735159185108!3d18.912268987176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaab4e1d3d6b0e9%3A0x6a1b2a3b4c5d6e7f!2sUCATECI%20Constanza!5e0!3m2!1ses-419!2sdo!4v1650000000000!5m2!1ses-419!2sdo"
                }
                width="100%" 
                height="100%" 
                className="border-0 absolute inset-0" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-2">Envíanos un mensaje</h3>
            <p className="text-muted-foreground mb-8">Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="flex h-12 w-full rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" 
                    placeholder="Ej. Juan Pérez" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="flex h-12 w-full rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" 
                    placeholder="ejemplo@correo.com" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Teléfono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="flex h-12 w-full rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" 
                    placeholder="(809) 000-0000" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-medium text-foreground">Área de interés</label>
                  <select 
                    id="interest" 
                    defaultValue=""
                    className="flex h-12 w-full rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring appearance-none"
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="admisiones">Información de Admisiones</option>
                    <option value="oferta">{isCEB ? "Niveles Educativos" : "Oferta Académica"}</option>
                    <option value="pagos">Pagos y Facturación</option>
                    <option value="otro">Otro motivo</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="flex w-full rounded-xl border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none" 
                  placeholder="Escribe tu mensaje aquí..." 
                />
              </div>

              <Button type="button" className="w-full h-12 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Tus datos están protegidos según nuestra política de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
