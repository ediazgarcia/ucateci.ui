"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Search,
  Menu,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  LogIn,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Heart,
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
import { CAMPUS_DATA, type CampusData } from "@/lib/data"
import { AdmissionsWizard } from "./admissions-wizard"

export function CampusHeader({ campusId }: { campusId: "ceb" | "constanza" }) {
  const campus = CAMPUS_DATA[campusId]

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

  const { header, shortName, type, id } = campus
  const isCEB = id === "ceb"

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary py-2 text-primary-foreground">
        <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>{header.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>{header.email}</span>
              </div>
              <div className="hidden lg:flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{header.address}</span>
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
        className="sticky top-0 z-50 border-b border-border/60 bg-background/95 shadow-[0_18px_40px_-38px_rgba(15,23,42,0.85)] backdrop-blur supports-[backdrop-filter]:bg-background/80"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto flex h-16 w-full max-w-[96rem] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 md:h-20">
          {/* Logo */}
          <Link href={`/campus/${id}`} className="flex items-center gap-3 shrink-0" aria-label={`${shortName} - Inicio`}>
            {isCEB ? (
              <>
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-muted/20 bg-white shadow-sm">
                  <Image src="/Logo-UCATECI.png" alt="Logo UCATECI" fill className="object-contain" />
                </div>
                <h1 className="text-lg font-semibold text-primary sm:text-xl">CEBUCATECI</h1>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-lg text-primary leading-tight">UCATECI</div>
                  <div className="text-xs text-muted-foreground">Constanza</div>
                </div>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-center" aria-label="Principal">
            <ul className="flex flex-nowrap items-center justify-center gap-2 text-sm xl:gap-4 2xl:gap-6">
              {header.megaMenus.map((menu) => (
                <li key={menu.label} className="flex-shrink-0">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveMenu(menu.label)}
                    onFocus={() => setActiveMenu(menu.label)}
                    aria-expanded={activeMenu === menu.label ? true : false}
                    aria-haspopup="menu"
                    className={`flex items-center gap-1 rounded-full px-4 py-2 font-medium transition-colors ${
                      activeMenu === menu.label
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "text-foreground/80 hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {menu.label}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center justify-end gap-3 sm:gap-4">
            <button
              onClick={() => setOpen(true)}
              aria-label={`Buscar en ${shortName}`}
              className="grid h-9 w-9 place-items-center rounded-full border border-input bg-muted/50 text-muted-foreground transition-colors hover:bg-muted md:h-10 md:w-10"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </button>

            <AdmissionsWizard>
              <Button
                size="sm"
                className="hidden bg-primary text-primary-foreground hover:bg-primary/90 md:inline-flex"
              >
                Admisiones
              </Button>
            </AdmissionsWizard>

            <Button asChild size="sm" variant="outline" className="hidden md:inline-flex bg-transparent">
              <Link href={`/campus/${id}#acceso`}>
                <LogIn className="h-3.5 w-3.5 mr-2" />
                <span>Portal</span>
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
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
                      <h2 className="text-lg font-bold text-primary">{shortName}</h2>
                      <p className="text-xs text-muted-foreground">Menú de Navegación</p>
                    </div>
                  </div>
                </SheetTitle>

                <div className="flex flex-col gap-6">
                  {header.megaMenus.map((menu) => (
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
                                onClick={() => setMobileOpen(false)}
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
                    <AdmissionsWizard>
                      <Button className="w-full">
                        Solicitar Admisión
                      </Button>
                    </AdmissionsWizard>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        {activeMenu && (
          <div className="absolute left-0 right-0 top-full z-50 border-b border-border bg-background shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {header.megaMenus.find((menu) => menu.label === activeMenu) && (
                <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-4">
                  {/* Columns */}
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {header.megaMenus
                        .find((menu) => menu.label === activeMenu)
                        ?.columns.map((column, columnIndex) => (
                          <div key={columnIndex}>
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                              {column.heading}
                            </h3>
                            <ul className="space-y-3">
                              {column.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    href={item.href}
                                    className="group flex items-start gap-3 rounded-md p-2 text-sm transition-colors hover:bg-muted"
                                  >
                                    {item.icon && (
                                      <div className="mt-0.5 rounded-md bg-primary/10 p-1.5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <item.icon className="h-4 w-4 shrink-0" />
                                      </div>
                                    )}
                                    <div>
                                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">{item.title}</div>
                                      {item.description && (
                                        <div className="text-xs text-muted-foreground/80 mt-1">
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

                  {/* Featured Card */}
                  {header.megaMenus.find((menu) => menu.label === activeMenu)?.featured && (
                    <div className="lg:col-span-1">
                      <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-deep text-brand-cream p-6 shadow-md relative group">
                        <div className="absolute top-0 right-0 opacity-10 p-4 transform translate-x-1/4 -translate-y-1/4">
                          <GraduationCap className="h-32 w-32" />
                        </div>
                        <div className="relative z-10">
                          <div className="text-[10px] uppercase tracking-widest font-semibold text-brand-gold mb-3">
                            Destacado
                          </div>
                          <h4 className="font-serif text-xl font-bold leading-tight mb-2">
                            {header.megaMenus.find((menu) => menu.label === activeMenu)?.featured?.title}
                          </h4>
                          <p className="text-sm text-brand-cream/80">
                            {header.megaMenus.find((menu) => menu.label === activeMenu)?.featured?.description}
                          </p>
                        </div>
                        <Link
                          href={header.megaMenus.find((menu) => menu.label === activeMenu)?.featured?.href || ""}
                          className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold group-hover:text-white transition-colors"
                        >
                          Explorar ahora
                          <ArrowRight className="h-4 w-4" />
                        </Link>
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
        <CommandInput placeholder={`Buscar en ${shortName}...`} />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          <CommandGroup heading="Servicios">
            {header.searchItems.servicios.map((item, index) => (
              <CommandItem key={index} onSelect={() => navigate(item.href)}>
                <BookOpen className="mr-2 h-4 w-4" />
                <span>{item.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Páginas">
            {header.searchItems.paginas.map((item, index) => (
              <CommandItem key={index} onSelect={() => navigate(item.href)}>
                <MapPin className="mr-2 h-4 w-4" />
                <span>{item.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Actividades">
            {header.searchItems.actividades.map((activity, index) => (
              <CommandItem key={index} onSelect={() => navigate(`/campus/${id}#vida`)}>
                <Heart className="mr-2 h-4 w-4" />
                <span>{activity}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Accesos directos">
            <CommandItem onSelect={() => navigate(`/campus/${id}#acceso`)}>
              <LogIn className="mr-2 h-4 w-4" />
              <span>Acceso Rápido</span>
              <Kbd>⌘K</Kbd>
            </CommandItem>
            <CommandItem onSelect={() => navigate(`/campus/${id}#contacto`)}>
              <Phone className="mr-2 h-4 w-4" />
              <span>Contactar Admisiones</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
