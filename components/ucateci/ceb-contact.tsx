import { MapPin, Phone, Mail, Clock, Calendar, FileText, Users, GraduationCap } from "lucide-react"

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Dirección",
    details: ["Centro Educacional de Bonao", "Bonao, República Dominicana"],
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+1 (809) 123-4567", "+1 (809) 123-4568"],
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    details: ["info@cebucateci.edu.do", "admissions@cebucateci.edu.do"],
  },
  {
    icon: Clock,
    title: "Horario de Oficina",
    details: ["Lunes a Viernes: 7:00 AM - 4:00 PM", "Sábados: 8:00 AM - 12:00 PM"],
  },
]

const ADMISSION_STEPS = [
  {
    step: 1,
    title: "Solicitud en Línea",
    description: "Completa el formulario de admisión en nuestro sitio web",
    icon: FileText,
  },
  {
    step: 2,
    title: "Entrevista Familiar",
    description: "Reunión con la familia para conocer sus expectativas",
    icon: Users,
  },
  {
    step: 3,
    title: "Evaluación Académica",
    description: "Pruebas de nivel académico y conocimientos básicos",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Visita al Campus",
    description: "Recorrido por nuestras instalaciones y programa de bienvenida",
    icon: MapPin,
  },
]

const REQUIREMENTS = [
  "Certificado de nacimiento original",
  "Certificado de vacunación al día",
  "Historial académico anterior",
  "Fotografías tamaño carné",
  "Formulario de admisión completado",
  "Pago de matrícula inicial",
]

export function CEBContact() {
  return (
    <section className="bg-muted/30 py-16 md:py-24" id="contacto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contacto y Admisiones</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Únete a Nuestra Familia
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Estamos aquí para responder tus preguntas y guiarte en el proceso de admisión.
            ¡Esperamos conocerte pronto!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Información de Contacto</h3>
            <div className="space-y-6">
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Apellido</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+1 (809) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Proceso de Admisión</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADMISSION_STEPS.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Requisitos de Admisión</h3>
          <div className="bg-background p-8 rounded-lg border max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {REQUIREMENTS.map((requirement, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
          <p className="mb-6 text-primary-foreground/90">
            Agenda una visita a nuestro campus y conoce de primera mano la experiencia CEB.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <Calendar className="w-4 h-4 inline mr-2" />
              Agendar Visita
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              <FileText className="w-4 h-4 inline mr-2" />
              Solicitar Admisión
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}