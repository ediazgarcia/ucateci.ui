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
  Leaf,
  Droplets,
  Mountain,
  Tractor,
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

const CONSTANZA_MEGA_MENUS: MegaMenu[] = [
  {
    label: "Acerca del Campus",
    href: "/campus/constanza#acerca",
    columns: [
      {
        heading: "Nuestra Institución",
        items: [
          { title: "Historia", href: "/campus/constanza#acerca", icon: Building2, description: "Comprometidos con Constanza" },
          { title: "Misión y Visión", href: "/campus/constanza#acerca", icon: BookOpen },
          { title: "Educación Sostenible", href: "/campus/constanza#acerca", icon: Leaf },
          { title: "Equipo Directivo", href: "/campus/constanza#acerca", icon: Users },
        ],
      },
      {
        heading: "Enfoques Estratégicos",
        items: [
          { title: "Agricultura", href: "/campus/constanza#acerca", icon: Tractor },
          { title: "Gestión del Agua", href: "/campus/constanza#acerca", icon: Droplets },
          { title: "Ambiente", href: "/campus/constanza#acerca", icon: Mountain },
          { title: "Agroecoturismo", href: "/campus/constanza#acerca", icon: Globe },
        ],
      },
    ],
    featured: {
      title: "Educación sostenible para el desarrollo",
      description: "Contribuyendo al crecimiento exponencial de Constanza en agricultura, agua, ambiente y agroecoturismo.",
      href: "/campus/constanza#acerca",
      image: "/ucateci/campus-aerial.jpg",
    },
  },
  {
    label: "Oferta Académica",
    href: "/campus/constanza#academics",
    columns: [
      {
        heading: "Grado",
        items: [
          { title: "Licenciaturas", href: "/campus/constanza#academics", icon: GraduationCap, description: "Programas de 4 años" },
          { title: "Ingenierías", href: "/campus/constanza#academics", icon: Cpu, description: "Especializaciones técnicas" },
          { title: "Ciencias Ambientales", href: "/campus/constanza#academics", icon: Leaf, description: "Sostenibilidad y medio ambiente" },
          { title: "Administración", href: "/campus/constanza#academics", icon: Calculator, description: "Gestión empresarial" },
        ],
      },
      {
        heading: "Posgrado",
        items: [
          { title: "Maestrías", href: "/campus/constanza#academics", icon: BookOpen },
          { title: "Especializaciones", href: "/campus/constanza#academics", icon: Microscope },
          { title: "Doctorados", href: "/campus/constanza#academics", icon: GraduationCap },
          { title: "Diplomados", href: "/campus/constanza#academics", icon: Trophy },
        ],
      },
    ],
    featured: {
      title: "Admisiones 2026 Abiertas",
      description: "Únete a nuestra comunidad académica. Programas enfocados en el desarrollo sostenible.",
      href: "/campus/constanza#contacto",
      image: "/ucateci/graduation.jpg",
    },
  },
  {
    label: "Vida Estudiantil",
    href: "/campus/constanza#vida",
    columns: [
      {
        heading: "Actividades",
        items: [
          { title: "Clubes Ambientales", href: "/campus/constanza#vida", icon: Leaf, description: "Conservación y sostenibilidad" },
          { title: "Investigación", href: "/campus/constanza#vida", icon: Microscope, description: "Proyectos de campo" },
          { title: "Deportes", href: "/campus/constanza#vida", icon: Trophy, description: "Actividades recreativas" },
          { title: "Voluntariado", href: "/campus/constanza#vida", icon: Heart, description: "Servicio comunitario" },
        ],
      },
      {
        heading: "Servicios",
        items: [
          { title: "Biblioteca", href: "/campus/constanza#academics", icon: BookOpen },
          { title: "Laboratorios", href: "/campus/constanza#academics", icon: Microscope },
          { title: "Centro de Investigación", href: "/campus/constanza#vida", icon: Building2 },
          { title: "Orientación Profesional", href: "/campus/constanza#vida", icon: Users },
        ],
      },
    ],
    featured: {
      title: "Más que estudiar",
      description: "Descubre actividades que complementan tu formación académica en sostenibilidad.",
      href: "/campus/constanza#vida",
      image: "/ucateci/student-life.jpg",
    },
  },
  {
    label: "Admisiones",
    href: "/campus/constanza#contacto",
    columns: [
      {
        heading: "Proceso",
        items: [
          { title: "Requisitos de Ingreso", href: "/campus/constanza#contacto", icon: BookOpen },
          { title: "Fechas Importantes", href: "/campus/constanza#contacto", icon: Calendar },
          { title: "Becas y Ayudas", href: "/campus/constanza#contacto", icon: GraduationCap },
          { title: "Formulario en Línea", href: "/campus/constanza#contacto", icon: LogIn },
        ],
      },
      {
        heading: "Información",
        items: [
          { title: "Horarios de Visita", href: "/campus/constanza#contacto", icon: MapPin },
          { title: "Costos y Pagos", href: "/campus/constanza#contacto", icon: Calculator },
          { title: "Contacto Directo", href: "/campus/constanza#contacto", icon: Phone },
          { title: "Preguntas Frecuentes", href: "/campus/constanza#contacto", icon: Users },
        ],
      },
    ],
    featured: {
      title: "Tu futuro comienza aquí",
      description: "Inicia tu proceso de admisión y forma parte de nuestra comunidad académica.",
      href: "/campus/constanza#contacto",
      image: "/ucateci/students-campus.jpg",
    },
  },
]

const CONSTANZA_SEARCH_ITEMS = {
  servicios: [
    { name: "Portal del Estudiante", href: "/campus/constanza#acceso" },
    { name: "Biblioteca Digital", href: "/campus/constanza#academics" },
    { name: "Correo Institucional", href: "/campus/constanza#contacto" },
    { name: "Calendario Académico", href: "/campus/constanza#academics" },
  ],
  paginas: [
    { name: "Acerca del Campus", href: "/campus/constanza#acerca" },
    { name: "Oferta Académica", href: "/campus/constanza#academics" },
    { name: "Vida Estudiantil", href: "/campus/constanza#vida" },
    { name: "Tour Virtual", href: "/campus/constanza#tour" },
    { name: "Admisiones", href: "/campus/constanza#contacto" },
    { name: "Contacto", href: "/campus/constanza#contacto" },
  ],
  actividades: [
    "Clubes Ambientales",
    "Investigación de Campo",
    "Deportes",
    "Voluntariado",
    "Tecnología",
    "Inglés Conversacional",
  ],
}

export function ConstanzaHeader() {
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
      {/* Top Bar */}
      <div className="hidden md:block bg-primary py-2 text-primary-foreground">
        <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (809) 539-2836</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@constanza.ucateci.edu.do</span>
              </div>
              <div className="hidden lg:flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Constanza, República Dominicana</span>
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
      <header className="sticky top-0 z-50 border-b bg-background/95 shadow-[0_18px_40px_-38px_rgba(15,23,42,0.85)] backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/campus/constanza" className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-lg">UCATECI</div>
                  <div className="text-xs text-muted-foreground">Constanza</div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {CONSTANZA_MEGA_MENUS.map((menu) => (
                <div key={menu.label} className="relative">
                  <button
                    onMouseEnter={() => setActiveMenu(menu.label)}
                    onMouseLeave={() => setActiveMenu(null)}
                    className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <span>{menu.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpen(true)}
                className="hidden sm:flex"
              >
                <Search className="w-4 h-4 mr-2" />
                Buscar
                <Kbd className="ml-2">⌘K</Kbd>
              </Button>

              <div className="hidden md:flex items-center space-x-2">
                <Button asChild size="sm">
                  <Link href="/campus/constanza#contacto">
                    Solicitar Información
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Mobile Menu */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden" aria-label="Abrir menú">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-sm">
                  <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                  <div className="flex flex-col space-y-4 mt-6">
                    {CONSTANZA_MEGA_MENUS.map((menu) => (
                      <div key={menu.label}>
                        <Link
                          href={menu.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        >
                          {menu.label}
                        </Link>
                      </div>
                    ))}
                    <div className="pt-4 border-t">
                      <Button asChild className="w-full">
                        <Link href="/campus/constanza#contacto" onClick={() => setMobileOpen(false)}>
                          Solicitar Información
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        {activeMenu && (
          <div
            className="absolute top-full left-0 right-0 bg-background border-b shadow-lg"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-8 xl:px-10 py-8">
              {CONSTANZA_MEGA_MENUS.find((menu) => menu.label === activeMenu) && (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Columns */}
                  <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CONSTANZA_MEGA_MENUS
                      .find((menu) => menu.label === activeMenu)
                      ?.columns.map((column, columnIndex) => (
                        <div key={columnIndex}>
                          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">
                            {column.heading}
                          </h3>
                          <ul className="space-y-3">
                            {column.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  href={item.href}
                                  className="flex items-start space-x-3 group hover:text-primary transition-colors"
                                >
                                  {item.icon && (
                                    <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary mt-0.5 flex-shrink-0" />
                                  )}
                                  <div>
                                    <div className="font-medium text-sm">{item.title}</div>
                                    {item.description && (
                                      <div className="text-xs text-muted-foreground mt-1">
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

                  {/* Featured */}
                  {CONSTANZA_MEGA_MENUS.find((menu) => menu.label === activeMenu)?.featured && (
                    <div className="lg:col-span-1">
                      <div className="bg-muted rounded-lg p-6">
                        <h3 className="font-semibold text-lg mb-2">
                          {CONSTANZA_MEGA_MENUS.find((menu) => menu.label === activeMenu)?.featured?.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {CONSTANZA_MEGA_MENUS.find((menu) => menu.label === activeMenu)?.featured?.description}
                        </p>
                        <Button asChild size="sm">
                          <Link href={CONSTANZA_MEGA_MENUS.find((menu) => menu.label === activeMenu)?.featured?.href || ""}>
                            Conocer más
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
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
        <CommandInput placeholder="Buscar en el campus..." />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          <CommandGroup heading="Servicios">
            {CONSTANZA_SEARCH_ITEMS.servicios.map((item) => (
              <CommandItem key={item.name} onSelect={() => navigate(item.href)}>
                <span>{item.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Páginas">
            {CONSTANZA_SEARCH_ITEMS.paginas.map((item) => (
              <CommandItem key={item.name} onSelect={() => navigate(item.href)}>
                <span>{item.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actividades">
            {CONSTANZA_SEARCH_ITEMS.actividades.map((activity) => (
              <CommandItem key={activity} onSelect={() => navigate("/campus/constanza#vida")}>
                <span>{activity}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
