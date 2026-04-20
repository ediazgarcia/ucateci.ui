"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  GraduationCap,
  Search,
  Menu,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
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
  Trophy,
  Palette,
  Music,
  Camera,
  Gamepad2,
  Calendar,
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
import { Kbd } from "@/components/ui/kbd"

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

const CEB_MEGA_MENUS: MegaMenu[] = [
  {
    label: "Acerca del CEB",
    href: "/campus/ceb#acerca",
    columns: [
      {
        heading: "Nuestra Institución",
        items: [
          { title: "Historia", href: "/campus/ceb#acerca", icon: Building2, description: "Más de 20 años educando" },
          { title: "Misión y Visión", href: "/campus/ceb#acerca", icon: BookOpen },
          { title: "Valores Cristianos", href: "/campus/ceb#acerca", icon: Heart },
          { title: "Equipo Directivo", href: "/campus/ceb#acerca", icon: Users },
        ],
      },
      {
        heading: "Instalaciones",
        items: [
          { title: "Aulas Modernas", href: "/campus/ceb#tour", icon: Building2 },
          { title: "Laboratorios", href: "/campus/ceb#tour", icon: Microscope },
          { title: "Biblioteca", href: "/campus/ceb#tour", icon: BookOpen },
          { title: "Áreas Deportivas", href: "/campus/ceb#tour", icon: Trophy },
        ],
      },
    ],
    featured: {
      title: "Excelencia Educativa desde 2003",
      description: "Formando líderes con valores cristianos en el corazón del Cibao.",
      href: "/campus/ceb#acerca",
      image: "/ucateci/students-campus.jpg",
    },
  },
  {
    label: "Oferta Académica",
    href: "/campus/ceb#academics",
    columns: [
      {
        heading: "Niveles Educativos",
        items: [
          { title: "Inicial (3-5 años)", href: "/campus/ceb#academics", icon: Heart, description: "Fundamentos del aprendizaje" },
          { title: "Primaria (6-12 años)", href: "/campus/ceb#academics", icon: BookOpen, description: "Educación básica integral" },
          { title: "Secundaria (13-18 años)", href: "/campus/ceb#academics", icon: GraduationCap, description: "Preparación universitaria" },
        ],
      },
      {
        heading: "Especializaciones",
        items: [
          { title: "Bachillerato en Ciencias", href: "/campus/ceb#academics", icon: Microscope },
          { title: "Bachillerato en Humanidades", href: "/campus/ceb#academics", icon: Globe },
          { title: "Técnico en Informática", href: "/campus/ceb#academics", icon: Cpu },
          { title: "Inglés Avanzado", href: "/campus/ceb#academics", icon: Globe },
        ],
      },
    ],
    featured: {
      title: "Admisiones 2026 Abiertas",
      description: "Únete a nuestra comunidad educativa. Cupos limitados disponibles.",
      href: "/campus/ceb#contacto",
      image: "/ucateci/graduation.jpg",
    },
  },
  {
    label: "Vida Estudiantil",
    href: "/campus/ceb#vida",
    columns: [
      {
        heading: "Actividades",
        items: [
          { title: "Deportes", href: "/campus/ceb#vida", icon: Trophy, description: "Fútbol, baloncesto, voleibol" },
          { title: "Artes Plásticas", href: "/campus/ceb#vida", icon: Palette, description: "Pintura, dibujo, escultura" },
          { title: "Música y Canto", href: "/campus/ceb#vida", icon: Music, description: "Coro y clases de instrumentos" },
          { title: "Club de Lectura", href: "/campus/ceb#vida", icon: BookOpen, description: "Fomento de la lectura" },
        ],
      },
      {
        heading: "Servicios",
        items: [
          { title: "Pastoral Estudiantil", href: "/campus/ceb#vida", icon: Heart, description: "Valores cristianos" },
          { title: "Orientación Vocacional", href: "/campus/ceb#vida", icon: Users },
          { title: "Biblioteca Digital", href: "/campus/ceb#academics", icon: BookOpen },
          { title: "Servicio Social", href: "/campus/ceb#vida", icon: Heart },
        ],
      },
    ],
    featured: {
      title: "Más que estudiar",
      description: "Descubre todas las actividades que complementan tu formación académica.",
      href: "/campus/ceb#vida",
      image: "/ucateci/student-life.jpg",
    },
  },
  {
    label: "Admisiones",
    href: "/campus/ceb#contacto",
    columns: [
      {
        heading: "Proceso",
        items: [
          { title: "Requisitos de Ingreso", href: "/campus/ceb#contacto", icon: BookOpen },
          { title: "Fechas Importantes", href: "/campus/ceb#contacto", icon: Calendar },
          { title: "Becas y Ayudas", href: "/campus/ceb#contacto", icon: GraduationCap },
          { title: "Formulario en Línea", href: "/campus/ceb#contacto", icon: LogIn },
        ],
      },
      {
        heading: "Información",
        items: [
          { title: "Horarios de Visita", href: "/campus/ceb#contacto", icon: MapPin },
          { title: "Costos y Pagos", href: "/campus/ceb#contacto", icon: Calculator },
          { title: "Contacto Directo", href: "/campus/ceb#contacto", icon: Phone },
          { title: "Preguntas Frecuentes", href: "/campus/ceb#contacto", icon: Users },
        ],
      },
    ],
    featured: {
      title: "Tu futuro comienza aquí",
      description: "Inicia tu proceso de admisión y forma parte de nuestra familia educativa.",
      href: "/campus/ceb#contacto",
      image: "/ucateci/students-campus.jpg",
    },
  },
]

const CEB_SEARCH_ITEMS = {
  servicios: [
    { name: "Portal del Estudiante", href: "/campus/ceb#acceso" },
    { name: "Biblioteca Digital", href: "/campus/ceb#academics" },
    { name: "Correo Institucional", href: "/campus/ceb#contacto" },
    { name: "Calendario Académico", href: "/campus/ceb#academics" },
  ],
  paginas: [
    { name: "Acerca del CEB", href: "/campus/ceb#acerca" },
    { name: "Oferta Académica", href: "/campus/ceb#academics" },
    { name: "Vida Estudiantil", href: "/campus/ceb#vida" },
    { name: "Tour Virtual", href: "/campus/ceb#tour" },
    { name: "Admisiones", href: "/campus/ceb#contacto" },
    { name: "Contacto", href: "/campus/ceb#contacto" },
  ],
  actividades: [
    "Deportes",
    "Artes Plásticas",
    "Música",
    "Club de Lectura",
    "Pastoral",
    "Servicio Social",
    "Tecnología",
    "Inglés Conversacional",
  ],
}

export function CEBHeader() {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

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

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (809) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@cebucateci.edu.do</span>
              </div>
              <div className="hidden lg:flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Bonao, República Dominicana</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="/" className="hover:text-primary-foreground/80 transition-colors">
                ← Volver a UCATECI
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto grid h-16 w-full max-w-[96rem] grid-cols-[auto_minmax(0,1fr)_auto] items-center justify-items-stretch gap-8 px-0 md:h-20">
          {/* Logo */}
          <Link href="/campus/ceb" className="flex items-center gap-3 shrink-0 justify-self-start -ml-20 xl:-ml-24" aria-label="CEBUCATECI - Inicio">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">CEBUCATECI</h1>
                <p className="text-xs text-muted-foreground">Centro Educacional de Bonao</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex min-w-0 w-full items-center justify-center px-0 justify-self-center" aria-label="Principal">
            <ul className="w-full max-w-[84rem] mx-auto flex flex-nowrap items-center justify-center gap-6 text-[12px] xl:gap-8 2xl:gap-10">
              {CEB_MEGA_MENUS.map((menu) => (
                <li key={menu.label} className="flex-shrink-0">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveMenu(menu.label)}
                    onFocus={() => setActiveMenu(menu.label)}
                    aria-expanded={activeMenu === menu.label}
                    className="rounded-full px-1.5 py-1.5 text-[12px] font-semibold text-foreground/80 transition-colors hover:bg-muted hover:text-primary data-[active=true]:bg-muted data-[active=true]:text-primary 2xl:px-2 2xl:text-[13px]"
                    data-active={activeMenu === menu.label}
                  >
                    {menu.label}
                  </button>
                </li>
              ))}
              <li className="flex-shrink-0">
                <Link
                  href="/campus/ceb#tour"
                  className="rounded-full px-1.5 py-1.5 text-[12px] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary 2xl:px-2 2xl:text-[13px]"
                >
                  Tour Virtual
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  href="/campus/ceb#noticias"
                  className="rounded-full px-1.5 py-1.5 text-[12px] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary 2xl:px-2 2xl:text-[13px]"
                >
                  Noticias
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  href="/campus/ceb#contacto"
                  className="rounded-full px-1.5 py-1.5 text-[12px] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary 2xl:px-2 2xl:text-[13px]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center justify-end gap-3 sm:gap-4 xl:gap-5 justify-self-end">
            <button
              onClick={() => setOpen(true)}
              aria-label="Buscar en CEBUCATECI"
              className="grid h-9 w-9 place-items-center rounded-full border border-input bg-muted/50 text-muted-foreground transition-colors hover:bg-muted md:h-10 md:w-10"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Buscar servicios, páginas</span>
            </button>

            <Button
              asChild
              size="sm"
              className="hidden bg-primary text-primary-foreground hover:bg-primary/90 md:inline-flex"
            >
              <Link href="/campus/ceb#contacto">Admisiones</Link>
            </Button>

            <Button asChild size="sm" variant="outline" className="hidden md:inline-flex bg-transparent">
              <Link href="/campus/ceb#acceso">
                <LogIn className="h-3.5 w-3.5" />
                <span>Portal</span>
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Abrir menú">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
                <SheetTitle className="text-left mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-primary">CEBUCATECI</h2>
                      <p className="text-xs text-muted-foreground">Centro Educacional de Bonao</p>
                    </div>
                  </div>
                </SheetTitle>

                <div className="flex flex-col gap-6">
                  {CEB_MEGA_MENUS.map((menu) => (
                    <div key={menu.label}>
                      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                        {menu.label}
                      </div>
                      <ul className="flex flex-col gap-1 border-l border-border pl-3">
                        {menu.columns
                          .flatMap((c) => c.items)
                          .map((item) => (
                            <li key={item.title + item.href}>
                              <Link
                                href={item.href}
                                className="block rounded-md py-1.5 text-sm text-foreground hover:text-primary"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}

                  <div className="mt-8 pt-8 border-t">
                    <Button className="w-full" asChild>
                      <Link href="/campus/ceb#contacto">Solicitar Admisión</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mega Menu */}
        {activeMenu && (
          <div className="absolute left-0 right-0 top-full z-50 border-b border-border bg-background shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {CEB_MEGA_MENUS.find((menu) => menu.label === activeMenu) && (
                <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-3">
                  {/* Columns */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {CEB_MEGA_MENUS
                        .find((menu) => menu.label === activeMenu)
                        ?.columns.map((column, columnIndex) => (
                          <div key={columnIndex}>
                            <h3 className="mb-3 text-sm font-semibold text-primary">
                              {column.heading}
                            </h3>
                            <ul className="space-y-2">
                              {column.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    href={item.href}
                                    className="group flex items-center gap-3 rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                                  >
                                    {item.icon && (
                                      <item.icon className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                                    )}
                                    <div>
                                      <div className="font-medium">{item.title}</div>
                                      {item.description && (
                                        <div className="text-xs text-muted-foreground/70">
                                          {item.description}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Featured */}
                  {CEB_MEGA_MENUS.find((menu) => menu.label === activeMenu)?.featured && (
                    <div className="lg:col-span-1">
                      <Link
                        href={CEB_MEGA_MENUS.find((menu) => menu.label === activeMenu)?.featured?.href || ""}
                        className="group block overflow-hidden rounded-lg border bg-muted/40 transition-colors hover:bg-muted"
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <div className="h-full w-full bg-muted flex items-center justify-center">
                            <BookOpen className="w-12 h-12 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-primary group-hover:text-primary/80 transition-colors">
                            {CEB_MEGA_MENUS.find((menu) => menu.label === activeMenu)?.featured?.title}
                          </h4>
                          <p className="mt-1 text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                            {CEB_MEGA_MENUS.find((menu) => menu.label === activeMenu)?.featured?.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Search Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscar en CEBUCATECI..." />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          <CommandGroup heading="Servicios">
            {CEB_SEARCH_ITEMS.servicios.map((item, index) => (
              <CommandItem key={index} onSelect={() => {
                window.location.href = item.href
                setOpen(false)
              }}>
                <Users className="mr-2 h-4 w-4" />
                <span>{item.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Páginas">
            {CEB_SEARCH_ITEMS.paginas.map((item, index) => (
              <CommandItem key={index} onSelect={() => {
                window.location.href = item.href
                setOpen(false)
              }}>
                <BookOpen className="mr-2 h-4 w-4" />
                <span>{item.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Actividades">
            {CEB_SEARCH_ITEMS.actividades.map((activity, index) => (
              <CommandItem key={index} onSelect={() => {
                window.location.href = "/campus/ceb#vida"
                setOpen(false)
              }}>
                <Heart className="mr-2 h-4 w-4" />
                <span>{activity}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Accesos directos">
            <CommandItem onSelect={() => {
              window.location.href = "/campus/ceb#acceso"
              setOpen(false)
            }}>
              <LogIn className="mr-2 h-4 w-4" />
              <span>Acceso Rápido</span>
              <Kbd>⌘K</Kbd>
            </CommandItem>
            <CommandItem onSelect={() => {
              window.location.href = "/campus/ceb#contacto"
              setOpen(false)
            }}>
              <Phone className="mr-2 h-4 w-4" />
              <span>Contactar Admisiones</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}