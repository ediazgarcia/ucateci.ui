import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdmissionsWizard } from "./admissions-wizard"

const steps = [
  "Completa el formulario de interés escolar",
  "Presenta la documentación requerida para matrícula",
  "Recibe orientación sobre primaria, secundaria y STEAM",
  "Confirma tu ingreso al colegio",
]

export function AdmissionsCTA() {
  return (
    <section id="admisiones" className="py-16 md:py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-deep text-brand-cream p-8 md:p-12 lg:p-16">
          {/* Decorative gold ring */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[24px] border-brand-gold/20"
          />
          <div
            aria-hidden="true"
            className="absolute -right-10 top-40 h-40 w-40 rounded-full bg-brand-red/30 blur-3xl"
          />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 border border-brand-gold/30 px-3 py-1 text-xs font-semibold text-brand-gold mb-5">
                Admisiones 2026
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Tu proceso de ingreso al colegio empieza aquí.
              </h2>
              <p className="mt-4 text-brand-cream/80 leading-relaxed max-w-lg">
                En CEB Bonao ofrecemos un colegio bilingüe con formación en primaria y secundaria, apoyado en valores cristianos, excelencia académica y el próximo programa STEAM para preparar a nuestros estudiantes para el futuro.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <AdmissionsWizard>
                  <Button
                    size="lg"
                    className="bg-brand-red hover:bg-brand-red/90 text-accent-foreground"
                  >
                    Solicitar información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </AdmissionsWizard>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-cream/30 bg-transparent text-brand-cream hover:bg-brand-cream/10 hover:text-brand-gold"
                >
                  Conocer el colegio
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-brand-cream/5 border border-brand-cream/15 p-6 md:p-8 backdrop-blur">
              <h3 className="font-serif text-xl font-semibold text-brand-cream mb-5">
                Proceso de admisión en 4 pasos
              </h3>
              <ol className="space-y-4">
                {steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-serif font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1 flex items-center justify-between gap-2 border-b border-brand-cream/10 pb-3">
                      <span className="text-brand-cream">{s}</span>
                      <CheckCircle2
                        className="h-4 w-4 text-brand-gold/60 shrink-0"
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 pt-2 text-xs text-brand-cream/60">
                ¿Dudas sobre el proceso?{" "}
                <a
                  href="mailto:info@cebucateci.edu.do"
                  className="font-semibold text-brand-gold hover:underline"
                >
                  info@cebucateci.edu.do
                </a>{" "}
                · (809) 123-4567
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
