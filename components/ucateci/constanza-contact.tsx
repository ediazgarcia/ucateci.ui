import { MapPin, Phone, Mail, Clock, Calendar, FileText, Users, GraduationCap } from "lucide-react"

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Dirección",
    details: ["Ctra. Comandante Jiménez Moya, No. 34", "Colonia Española, Constanza", "República Dominicana"],
  },
  {
    icon: Phone,
    title: "Teléfonos",
    details: ["Recepción/Coordinación: +1 (809) 539-2836", "Admisiones/Registro: +1 (809) 539-2672", "Caja: +1 (809) 539-2866", "Flota Recinto: +1 (829) 932-5588"],
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    details: ["info@constanza.ucateci.edu.do", "admissions@constanza.ucateci.edu.do"],
  },
  {
    icon: Clock,
    title: "Horario de Oficina",
    details: ["Lunes a Viernes: 8:00 AM - 5:00 PM", "Sábados: 8:00 AM - 12:00 PM"],
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
    title: "Entrevista Académica",
    description: "Evaluación de antecedentes académicos y profesionales",
    icon: Users,
  },
  {
    step: 3,
    title: "Pruebas de Admisión",
    description: "Evaluación de conocimientos específicos del programa",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Visita al Campus",
    description: "Recorrido por nuestras instalaciones especializadas",
    icon: MapPin,
  },
]

const REQUIREMENTS = [
  "Título de bachillerato o equivalente",
  "Certificado de nacimiento original",
  "Historial académico universitario (si aplica)",
  "Fotografías tamaño carné",
  "Formulario de admisión completado",
  "Pago de matrícula inicial",
  "Entrevista personal",
]

export function ConstanzaContact() {
  return (
    <section className="bg-muted/30 py-16 md:py-24" id="contacto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contacto y Admisiones</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Únete a Nuestra Comunidad Académica
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Estamos aquí para responder tus preguntas y guiarte en el proceso de admisión.
            Forma parte del desarrollo sostenible de Constanza.
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
                      <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                />
              </div>
              <div>
                <label htmlFor="program" className="block text-sm font-medium text-primary mb-2">
                  Programa de Interés
                </label>
                <select
                  id="program"
                  name="program"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Selecciona un programa</option>
                  <option value="agricultura">Licenciatura en Agricultura</option>
                  <option value="ingenieria-ambiental">Ingeniería Ambiental</option>
                  <option value="gestion-agua">Maestría en Gestión del Agua</option>
                  <option value="agroecoturismo">Especialización en Agroecoturismo</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  placeholder="Cuéntanos sobre tu interés en nuestros programas..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
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
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{step.step}</div>
                <h4 className="font-semibold text-primary mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-background rounded-lg border p-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Requisitos de Admisión</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-4">Documentos Requeridos</h4>
              <ul className="space-y-2">
                {REQUIREMENTS.map((req, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Información Adicional</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-primary">Fechas de Admisión</div>
                    <div className="text-sm text-muted-foreground">Abiertas todo el año</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-primary">Cupos Limitados</div>
                    <div className="text-sm text-muted-foreground">Por programa académico</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <GraduationCap className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-primary">Becas Disponibles</div>
                    <div className="text-sm text-muted-foreground">Para estudiantes destacados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}