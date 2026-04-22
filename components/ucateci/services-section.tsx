import { SERVICES } from "@/lib/data"

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-10">
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-widest text-brand-red font-semibold mb-2">
              Servicios al estudiante
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy text-balance">
              Acompañamiento integral para tu formación universitaria
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-muted-foreground leading-relaxed">
              En UCATECI entendemos que la educación va más allá del aula.
              Descubre los servicios académicos, pastorales y profesionales que
              complementan tu desarrollo como persona y futuro profesional.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc, href }) => (
            <a
              key={title}
              href={href}
              className="group rounded-2xl border border-border bg-card p-6 flex flex-col hover:border-brand-navy hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-5 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-brand-navy leading-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {desc}
              </p>
              <span className="mt-4 text-sm font-semibold text-brand-red group-hover:text-brand-navy transition-colors">
                Conoce más &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
