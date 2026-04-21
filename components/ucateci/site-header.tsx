"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  GraduationCap,
  Search,
  Menu,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  BookOpen,
  Users,
  Microscope,
  Heart,
  Building2,
  Calculator,
  Scale,
  Stethoscope,
  Cpu,
  Globe,
  LogIn,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

type MegaColumn = {
  heading: string
  items: { title: string; href: string; description?: string; icon?: React.ComponentType<{ className?: string }> }[]
}

type MegaMenu = {
  label: string
  href: string
  columns: MegaColumn[]
  featured?: { title: string; description: string; href: string; image: string }
}

const MEGA_MENUS: MegaMenu[] = [
  {
    label: "Nosotros",
    href: "#nosotros",
    columns: [
      {
        heading: "La Universidad",
        items: [
          { title: "Historia", href: "#historia", icon: Building2, description: "Más de 40 años de excelencia" },
          { title: "Misión y Visión", href: "#mision", icon: BookOpen },
          { title: "Fides et Ratio", href: "#lema", icon: GraduationCap },
          { title: "Autoridades", href: "#autoridades", icon: Users },
        ],
      },
      {
        heading: "Institucional",
        items: [
          { title: "Acreditaciones", href: "#acreditaciones", icon: Globe, description: "MESCyT, ADAAC, AUSJAL" },
          { title: "Transparencia", href: "#transparencia", icon: Scale },
          { title: "Campus La Vega", href: "#campus", icon: MapPin },
          { title: "Tour Virtual", href: "#tour", icon: Globe },
        ],
      },
    ],
    featured: {
      title: "40+ Años Formando Líderes",
      description: "Conoce el legado católico que nos distingue en el Cibao.",
      href: "#historia",
      image: "/ucateci/campus-aerial.jpg",
    },
  },
  {
    label: "Oferta Académica",
    href: "#oferta",
    columns: [
      {
        heading: "Facultades",
        items: [
          { title: "Ciencias de la Salud", href: "#oferta", icon: Stethoscope, description: "Medicina, Odontología, Enfermería" },
          { title: "Humanidades", href: "#oferta", icon: BookOpen, description: "Derecho, Psicología, Educación" },
          { title: "Ingeniería", href: "#oferta", icon: Cpu, description: "Civil, Industrial, Sistemas" },
          { title: "Ciencias Económicas", href: "#oferta", icon: Calculator, description: "Administración, Contabilidad" },
        ],
      },
      {
        heading: "Programas",
        items: [
          { title: "Grado", href: "#oferta", icon: GraduationCap },
          { title: "Postgrado y Maestrías", href: "#postgrado", icon: Microscope },
          { title: "Educación Continua", href: "#continua", icon: BookOpen },
          { title: "Técnicos Superiores", href: "#tecnicos", icon: Users },
        ],
      },
    ],
    featured: {
      title: "Admisiones 2026 Abiertas",
      description: "Solicita tu admisión en línea. 20% de descuento por pronto pago.",
      href: "#admisiones",
      image: "/ucateci/students-campus.jpg",
    },
  },
  {
    label: "Investigación",
    href: "#investigacion",
    columns: [
      {
        heading: "Investigación",
        items: [
          { title: "Centros de Investigación", href: "#investigacion", icon: Microscope },
          { title: "Revista Científica", href: "#investigacion", icon: BookOpen },
          { title: "Publicaciones", href: "#investigacion", icon: BookOpen },
          { title: "Semilleros", href: "#investigacion", icon: Users },
        ],
      },
      {
        heading: "Innovación",
        items: [
          { title: "Vinculación Empresarial", href: "#empresas", icon: Building2 },
          { title: "Emprendimiento", href: "#emprendimiento", icon: ArrowRight },
          { title: "Proyectos Comunitarios", href: "#comunidad", icon: Heart },
          { title: "Convenios Internacionales", href: "#convenios", icon: Globe },
        ],
      },
    ],
    featured: {
      title: "Investigación con impacto",
      description: "Generamos conocimiento para transformar la sociedad dominicana.",
      href: "#investigacion",
      image: "/ucateci/research-lab.jpg",
    },
  },
  {
    label: "Vida Universitaria",
    href: "#vida",
    columns: [
      {
        heading: "Servicios",
        items: [
          { title: "Biblioteca", href: "#servicios", icon: BookOpen },
          { title: "Clínica UCATECI", href: "#servicios", icon: Stethoscope },
          { title: "Pastoral Universitaria", href: "#servicios", icon: Heart },
          { title: "Deportes", href: "#vida", icon: Users },
        ],
      },
      {
        heading: "Estudiantes",
        items: [
          { title: "Aula Virtual", href: "#acceso", icon: Globe },
          { title: "Portal del Estudiante", href: "#acceso", icon: Users },
          { title: "Becas y Ayudas", href: "#admisiones", icon: GraduationCap },
          { title: "Movilidad Internacional", href: "#vida", icon: Globe },
        ],
      },
    ],
    featured: {
      title: "Más que una carrera",
      description: "Descubre la experiencia completa que UCATECI te ofrece.",
      href: "#vida",
      image: "/ucateci/student-life.jpg",
    },
  },
  {
    label: "Campus y Alianzas",
    href: "#campus",
    columns: [
      {
        heading: "Campus",
        items: [
          { title: "Campus La Vega", href: "#la-vega", icon: MapPin, description: "Sede principal en La Vega" },
          { title: "Campus Constanza", href: "/campus/constanza", icon: MapPin, description: "Formación con enfoque rural y ambiental" },
        ],
      },
      {
        heading: "Alianzas",
        items: [
          { title: "Centro Educacional Bonao (CEBUCATECI)", href: "/campus/ceb", icon: BookOpen, description: "Centro educativo aliado" },
          { title: "Convenios con colegios", href: "#alianzas", icon: Globe, description: "Articulación con colegios y programas preuniversitarios" },
          { title: "Extensiones y sedes", href: "#extensiones", icon: Building2 },
        ],
      },
    ],
    featured: {
      title: "Campus y alianzas estratégicas",
      description: "Conoce nuestras sedes, extensiones y alianzas con centros educativos en todo el país.",
      href: "#campus",
      image: "/ucateci/campus-aerial.jpg",
    },
  },
]

const SEARCH_ITEMS = {
  carreras: [
    "Medicina",
    "Odontología",
    "Enfermería",
    "Derecho",
    "Psicología",
    "Administración de Empresas",
    "Contabilidad",
    "Ingeniería Civil",
    "Ingeniería Industrial",
    "Ingeniería de Sistemas",
    "Educación Básica",
    "Arquitectura",
  ],
  servicios: [
    { name: "Aula Virtual", href: "#acceso" },
    { name: "Portal del Estudiante", href: "#acceso" },
    { name: "Biblioteca Digital", href: "#servicios" },
    { name: "Correo Institucional", href: "#acceso" },
    { name: "Pagos en Línea", href: "#acceso" },
    { name: "Calendario Académico", href: "#calendario" },
  ],
  paginas: [
    { name: "Admisiones", href: "#admisiones" },
    { name: "Becas", href: "#admisiones" },
    { name: "Tour Virtual", href: "#tour" },
    { name: "Noticias", href: "#noticias" },
    { name: "Contacto", href: "#contacto" },
    { name: "Transparencia", href: "#transparencia" },
  ],
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const navigate = (href: string) => {
    setOpen(false)
    setActiveMenu(null)
    setMobileOpen(false)
    router.push(href)
  }

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-brand-navy-deep text-brand-cream/90">
        <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-3 px-2 sm:px-4 lg:px-6 xl:px-8 py-2 text-xs">
          <div className="flex min-w-0 items-center gap-3 md:gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
              (809) 573-1020
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
              info@ucateci.edu.do
            </span>
            <span className="hidden lg:flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand-gold" aria-hidden="true" />
              La Vega, RD
            </span>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="#transparencia" className="hover:text-brand-gold">
              Transparencia
            </Link>
            <Link href="#contacto" className="hover:text-brand-gold">
              Contacto
            </Link>
            <span className="hidden xl:block h-3 w-px bg-brand-cream/30" aria-hidden="true" />
            <div className="hidden xl:flex items-center gap-2">
              <Link href="#" aria-label="Facebook" className="hover:text-brand-gold">
                <Facebook className="h-3.5 w-3.5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-brand-gold">
                <Instagram className="h-3.5 w-3.5" />
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:text-brand-gold">
                <Youtube className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        id="inicio"
        className="sticky top-0 z-40 border-b border-border/60 bg-background/95 shadow-[0_18px_40px_-38px_rgba(15,23,42,0.85)] backdrop-blur supports-[backdrop-filter]:bg-background/80"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto flex h-16 w-full max-w-[96rem] items-center gap-2 px-2 sm:px-4 lg:px-6 xl:px-8 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Logo-UCATECI - Inicio">
            <div className="relative h-10 w-32 overflow-hidden rounded-lg bg-white p-1 sm:h-11 sm:w-36 md:h-12 md:w-40 xl:h-14 xl:w-48">
              <Image
                src="/Logo-UCATECI.png"
                alt="Logo UCATECI"
                fill
                sizes="(max-width: 1024px) 10rem, 12rem"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex min-w-0 flex-1 items-center justify-center overflow-hidden px-2" aria-label="Principal">
            <ul className="flex max-w-full min-w-0 items-center justify-center gap-1 whitespace-nowrap text-[11px] xl:gap-2 xl:text-[12px] 2xl:gap-3 2xl:text-[13px]">
              {MEGA_MENUS.map((menu) => (
                <li key={menu.label} className="flex-shrink-0">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveMenu(menu.label)}
                    onFocus={() => setActiveMenu(menu.label)}
                    aria-expanded={activeMenu === menu.label}
                    className="rounded-full px-1.5 py-1.5 text-[12px] font-semibold text-foreground/80 transition-colors hover:bg-muted hover:text-brand-navy data-[active=true]:bg-muted data-[active=true]:text-brand-navy 2xl:px-2 2xl:text-[13px]"
                    data-active={activeMenu === menu.label}
                  >
                    {menu.label}
                  </button>
                </li>
              ))}
              <li className="flex-shrink-0">
                <Link
                  href="#noticias"
                  className="rounded-full px-1.5 py-1.5 text-[12px] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-brand-navy 2xl:px-2 2xl:text-[13px]"
                >
                  Noticias
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  href="#contacto"
                  className="rounded-full px-1.5 py-1.5 text-[12px] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-brand-navy 2xl:px-2 2xl:text-[13px]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Actions */}
          <div className="ml-auto flex shrink-0 items-center justify-end gap-1.5 sm:gap-2 xl:gap-2.5">
            <button
              onClick={() => setOpen(true)}
              aria-label="Buscar en UCATECI"
              className="grid h-9 w-9 place-items-center rounded-full border border-input bg-muted/50 text-muted-foreground transition-colors hover:bg-muted md:h-10 md:w-10"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Buscar carreras, servicios</span>
            </button>

            <Button
              asChild
              size="sm"
              className="hidden bg-brand-red text-accent-foreground hover:bg-brand-red/90 md:inline-flex"
            >
              <Link href="#admisiones">Admisiones</Link>
            </Button>

            <Button asChild size="sm" variant="outline" className="hidden md:inline-flex bg-transparent">
              <Link href="#acceso">
                <LogIn className="h-3.5 w-3.5" />
                <span>Portal</span>
              </Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Abrir menú">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
                <SheetTitle className="font-serif text-xl text-brand-navy">UCATECI</SheetTitle>
                <div className="mt-6 flex flex-col gap-6">
                  {MEGA_MENUS.map((menu) => (
                    <div key={menu.label}>
                      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-red">
                        {menu.label}
                      </div>
                      <ul className="flex flex-col gap-1 border-l border-border pl-3">
                        {menu.columns
                          .flatMap((c) => c.items)
                          .map((item) => (
                            <li key={item.title + item.href}>
                              <Link
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-md py-1.5 text-sm text-foreground hover:text-brand-navy"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                  <div className="flex flex-col gap-2 border-t border-border pt-4">
                    <Button asChild className="bg-brand-red text-accent-foreground hover:bg-brand-red/90">
                      <Link href="#admisiones" onClick={() => setMobileOpen(false)}>
                        Solicitar Admisión
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="#acceso" onClick={() => setMobileOpen(false)}>
                        <LogIn className="h-4 w-4" /> Portal del Estudiante
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mega menu panel */}
        {activeMenu && (
          <div
            className="absolute left-0 right-0 top-full z-50 hidden border-t border-border bg-background shadow-2xl lg:block"
            onMouseEnter={() => setActiveMenu(activeMenu)}
          >
            <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[2fr_1fr]">
              {MEGA_MENUS.filter((m) => m.label === activeMenu).map((menu) => (
                <div key={menu.label} className="grid gap-8 md:grid-cols-2">
                  {menu.columns.map((col) => (
                    <div key={col.heading}>
                      <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-red">
                        {col.heading}
                      </div>
                      <ul className="flex flex-col gap-1">
                        {col.items.map((item) => {
                          const Icon = item.icon ?? ArrowRight
                          return (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                              >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-navy/10 text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-cream">
                                  <Icon className="h-4 w-4" />
                                </span>
                                <span>
                                  <span className="block text-sm font-medium text-foreground">{item.title}</span>
                                  {item.description && (
                                    <span className="mt-0.5 block text-xs text-muted-foreground">
                                      {item.description}
                                    </span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}

              {MEGA_MENUS.filter((m) => m.label === activeMenu).map((menu) =>
                menu.featured ? (
                  <Link
                    key={menu.label}
                    href={menu.featured.href}
                    className="group relative overflow-hidden rounded-xl min-h-48"
                  >
                    <Image
                      src={menu.featured.image || "/placeholder.svg"}
                      alt=""
                      fill
                      sizes="(max-width: 1280px) 100vw, 28rem"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent" />
                    <div className="relative flex h-full flex-col justify-end p-5 text-brand-cream">
                      <div className="font-serif text-lg font-semibold">{menu.featured.title}</div>
                      <p className="mt-1 text-sm text-brand-cream/85">{menu.featured.description}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-gold">
                        Conocer más <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                ) : null,
              )}
            </div>
          </div>
        )}
      </header>

      {/* Command palette */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscar carreras, servicios, páginas..." />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          <CommandGroup heading="Carreras">
            {SEARCH_ITEMS.carreras.map((c) => (
              <CommandItem key={c} onSelect={() => navigate("#oferta")}>
                <GraduationCap className="h-4 w-4" />
                <span>{c}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Servicios">
            {SEARCH_ITEMS.servicios.map((s) => (
              <CommandItem key={s.name} onSelect={() => navigate(s.href)}>
                <Globe className="h-4 w-4" />
                <span>{s.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Páginas">
            {SEARCH_ITEMS.paginas.map((p) => (
              <CommandItem key={p.name} onSelect={() => navigate(p.href)}>
                <ArrowRight className="h-4 w-4" />
                <span>{p.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
