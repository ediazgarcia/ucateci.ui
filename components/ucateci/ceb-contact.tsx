import { Calendar, Clock, FileText, GraduationCap, MapPin, Mail, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactInquiryForm } from "@/components/ucateci/contact-inquiry-form"

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Direccion",
    details: ["Centro Educacional de Bonao", "Bonao, Republica Dominicana"],
  },
  {
    icon: Phone,
    title: "Telefonos",
    details: ["Recepcion: +1 (809) 123-4567", "Admisiones: +1 (809) 123-4568"],
  },
  {
    icon: Mail,
    title: "Correo",
    details: ["info@cebucateci.edu.do", "admissions@cebucateci.edu.do"],
  },
  {
    icon: Clock,
    title: "Horario de oficina",
    details: ["Lunes a viernes: 7:00 a.m. - 4:00 p.m.", "Sabados: 8:00 a.m. - 12:00 p.m."],
  },
]

const ADMISSION_STEPS = [
  {
    step: 1,
    title: "Comparte tus datos",
    description: "Completa el formulario y guardaremos tu progreso si necesitas salir antes de terminar.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Conversa con el colegio",
    description: "Respondemos tus dudas en lenguaje claro y te indicamos que documentos preparar.",
    icon: Users,
  },
  {
    step: 3,
    title: "Evalua la mejor opcion",
    description: "Revisamos nivel, acompanamiento familiar y necesidades academicas del estudiante.",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Agenda tu visita",
    description: "Conoce el campus, el equipo docente y las actividades extracurriculares antes de decidir.",
    icon: MapPin,
  },
]

const REQUIREMENTS = [
  "Certificado de nacimiento original",
  "Certificado de vacunacion al dia",
  "Historial academico anterior",
  "Fotografias tamano carne",
  "Formulario de admision completo",
  "Pago de matricula inicial",
]

const PROGRAM_OPTIONS = [
  { value: "inicial", label: "Nivel inicial" },
  { value: "primaria", label: "Primaria" },
  { value: "secundaria", label: "Secundaria" },
  { value: "bachillerato", label: "Bachillerato" },
  { value: "orientacion", label: "Quiero orientacion para elegir nivel" },
]

export function CEBContact() {
  return (
    <section className="bg-muted/30 py-16 md:py-24" id="contacto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contacto y admisiones</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
            Recibe orientacion antes de tomar la decision
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Te ayudamos a resolver dudas, conocer requisitos y organizar tu proceso de ingreso sin perder informacion.
          </p>
        </div>

        <div className="mb-16 grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.4)] md:p-8">
              <h3 className="text-2xl font-bold text-primary">Informacion de contacto</h3>
              <div className="mt-8 space-y-6">
                {CONTACT_INFO.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <info.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{info.title}</h4>
                      <div className="mt-1 space-y-1">
                        {info.details.map((detail) => (
                          <p key={detail} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-primary/10 bg-primary p-6 text-primary-foreground shadow-[0_24px_50px_-34px_rgba(15,23,42,0.45)] md:p-8">
              <h3 className="text-2xl font-bold">Atencion rapida</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                Si prefieres hablar con alguien hoy mismo, puedes llamarnos o solicitar una visita guiada al campus.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="secondary" className="rounded-full">
                  <a href="tel:+18091234567">
                    <Phone className="h-4 w-4" />
                    Llamar ahora
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/40 bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  <a href="mailto:admissions@cebucateci.edu.do">
                    <Mail className="h-4 w-4" />
                    Escribir por correo
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <ContactInquiryForm
            storageKey="ceb-contact-form"
            campusLabel="CEBUCATECI"
            campusEmail="admissions@cebucateci.edu.do"
            primaryPhone="+1 (809) 123-4567"
            programOptions={PROGRAM_OPTIONS}
          />
        </div>

        <div className="mb-16">
          <h3 className="text-center text-2xl font-bold text-primary">Proceso de admision</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ADMISSION_STEPS.map((step) => (
              <article key={step.step} className="rounded-[1.5rem] border border-border bg-card p-6 text-center shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <step.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Paso {step.step}</p>
                <h4 className="mt-2 text-lg font-semibold text-primary">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-border bg-background p-8 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.35)]">
          <h3 className="text-center text-2xl font-bold text-primary">Requisitos de admision</h3>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-primary">Documentos requeridos</h4>
              <ul className="mt-4 space-y-3">
                {REQUIREMENTS.map((requirement) => (
                  <li key={requirement} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Lo que mas preguntan las familias</h4>
              <div className="rounded-2xl border border-border bg-muted/35 p-4">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-primary">Fechas y cupos</p>
                    <p className="mt-1 text-sm text-muted-foreground">Te indicamos la disponibilidad real del nivel que buscas antes de que completes todo el proceso.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-muted/35 p-4">
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-primary">Acompanamiento familiar</p>
                    <p className="mt-1 text-sm text-muted-foreground">Podemos coordinar una conversacion con madres, padres o tutores para resolver dudas juntos.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-muted/35 p-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-primary">Siguientes pasos claros</p>
                    <p className="mt-1 text-sm text-muted-foreground">Despues de escribirnos, te diremos exactamente que documentos preparar y a quien contactar.</p>
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
