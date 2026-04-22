import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const ITEMS = [
  {
    title: "Deportes y recreación",
    subtitle: "5 disciplinas · ligas internas",
    image: "/ucateci/student-life.jpg",
    size: "col-span-2 row-span-2",
    href: "#deportes",
  },
  {
    title: "Pastoral universitaria",
    subtitle: "Retiros, voluntariado y acompañamiento espiritual",
    image: "/ucateci/graduation.jpg",
    size: "",
    href: "#pastoral",
  },
  {
    title: "Arte y cultura",
    subtitle: "Coro, danza, teatro y expresión artística",
    image: "/ucateci/library.jpg",
    size: "",
    href: "#cultura",
  },
  {
    title: "Movilidad internacional",
    subtitle: "25+ convenios activos con universidades",
    image: "/ucateci/students-campus.jpg",
    size: "col-span-2",
    href: "#movilidad",
  },
]

export function StudentLife() {
  return (
    <section className="bg-background py-16 md:py-24" id="vida">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Vida universitaria</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl text-balance">
              La formación integral va más allá del aula
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Deportes, expresión artística, pastoral y voluntariado. Descubre todo lo que la comunidad UCATECI te ofrece para
              crecer como persona y desarrollar tu vocación de servicio.
            </p>
          </div>
          <Link
            href="#vida"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Explorar actividades <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid auto-rows-[12rem] grid-cols-2 gap-4 md:auto-rows-[14rem] md:grid-cols-4">
          {ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden rounded-2xl ${item.size}`}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-4 text-primary-foreground md:p-5">
                <div className="font-serif text-lg font-semibold leading-tight md:text-xl">{item.title}</div>
                <div className="mt-1 text-xs text-primary-foreground/80">{item.subtitle}</div>
              </div>
              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
