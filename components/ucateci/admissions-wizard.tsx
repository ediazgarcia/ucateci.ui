"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2, ChevronLeft, ChevronRight, GraduationCap, User, BookOpen, Send, Sparkles } from "lucide-react"

const STEPS = [
  { id: 1, title: "Nivel", icon: GraduationCap },
  { id: 2, title: "Datos", icon: User },
  { id: 3, title: "Programa", icon: BookOpen },
  { id: 4, title: "Listo", icon: CheckCircle2 },
]

export function AdmissionsWizard({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    level: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    document: "",
    program: "",
  })

  const nextStep = () => setStep((s) => Math.min(s + 1, 4))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      setTimeout(() => setStep(1), 300)
    }
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-semibold text-brand-navy">¿Qué nivel te interesa?</h3>
              <p className="text-sm text-muted-foreground">Selecciona el nivel académico al que deseas aplicar.</p>
            </div>
            <RadioGroup
              value={formData.level}
              onValueChange={(val) => setFormData({ ...formData, level: val })}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                { id: "grado", label: "Grado", desc: "Licenciaturas e Ingenierías" },
                { id: "postgrado", label: "Postgrado", desc: "Maestrías y Especialidades" },
                { id: "tecnico", label: "Técnico Superior", desc: "Carreras cortas de 2 años" },
                { id: "continua", label: "Educación Continua", desc: "Diplomados y Cursos" },
              ].map((item) => (
                <div key={item.id}>
                  <RadioGroupItem value={item.id} id={item.id} className="peer sr-only" />
                  <Label
                    htmlFor={item.id}
                    className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-brand-red peer-data-[state=checked]:bg-brand-red/5 [&:has([data-state=checked])]:border-brand-red cursor-pointer transition-all"
                  >
                    <GraduationCap className="mb-3 h-8 w-8 text-brand-gold" />
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-xs text-center text-muted-foreground mt-1">{item.desc}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-semibold text-brand-navy">Datos Personales</h3>
              <p className="text-sm text-muted-foreground">Queremos conocerte mejor.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nombres</Label>
                <Input
                  id="firstName"
                  placeholder="Ej. María"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Apellidos</Label>
                <Input
                  id="lastName"
                  placeholder="Ej. Pérez"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="maria@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  placeholder="(809) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="document">Cédula o Pasaporte</Label>
                <Input
                  id="document"
                  placeholder="000-0000000-0"
                  value={formData.document}
                  onChange={(e) => setFormData({ ...formData, document: e.target.value })}
                />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-semibold text-brand-navy">Programa de Interés</h3>
              <p className="text-sm text-muted-foreground">Elige la carrera o programa que deseas estudiar.</p>
            </div>
            <div className="space-y-4">
              <Label>Carrera/Programa</Label>
              <RadioGroup
                value={formData.program}
                onValueChange={(val) => setFormData({ ...formData, program: val })}
                className="grid gap-3"
              >
                {[
                  "Medicina",
                  "Ingeniería de Sistemas",
                  "Odontología",
                  "Psicología",
                  "Administración de Empresas",
                  "Arquitectura",
                ].map((prog) => (
                  <div key={prog} className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 shadow-sm hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => setFormData({ ...formData, program: prog })}>
                    <RadioGroupItem value={prog} id={prog} />
                    <Label htmlFor={prog} className="flex-1 cursor-pointer font-medium">{prog}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6 py-6 animate-in zoom-in-95 duration-500 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold/20">
              <Sparkles className="h-10 w-10 text-brand-gold" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-3xl font-semibold text-brand-navy">¡Casi listo, {formData.firstName || "futuro estudiante"}!</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Hemos preparado tu perfil para <strong>{formData.program || "el programa seleccionado"}</strong>. Confirma para enviar tu solicitud.
              </p>
            </div>
            <div className="bg-muted p-4 rounded-xl text-left text-sm mt-6">
              <div className="grid grid-cols-2 gap-2">
                <span className="text-muted-foreground">Nivel:</span>
                <span className="font-medium capitalize">{formData.level || "-"}</span>
                <span className="text-muted-foreground">Nombre:</span>
                <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                <span className="text-muted-foreground">Correo:</span>
                <span className="font-medium">{formData.email || "-"}</span>
                <span className="text-muted-foreground">Programa:</span>
                <span className="font-medium">{formData.program || "-"}</span>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-background">
        <div className="hidden sm:flex flex-col bg-brand-navy text-brand-cream p-6 pb-8 border-b border-brand-cream/10 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-red/20 blur-3xl" />
          <DialogTitle className="font-serif text-2xl font-bold tracking-tight relative z-10">Solicitud de Admisión</DialogTitle>
          <DialogDescription className="text-brand-cream/70 relative z-10">
            Únete a la familia UCATECI. Completa los pasos a continuación.
          </DialogDescription>
          
          <div className="mt-8 relative z-10">
            <div className="flex justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-brand-cream/20 -translate-y-1/2" />
              {STEPS.map((s, idx) => {
                const isActive = step === s.id
                const isCompleted = step > s.id
                return (
                  <div key={s.id} className="relative flex flex-col items-center gap-2">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                        isActive
                          ? "border-brand-gold bg-brand-navy text-brand-gold"
                          : isCompleted
                          ? "border-brand-gold bg-brand-gold text-brand-navy"
                          : "border-brand-cream/30 bg-brand-navy text-brand-cream/30"
                      }`}
                    >
                      <s.icon className="h-4 w-4" />
                    </div>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider ${
                        isActive ? "text-brand-gold" : isCompleted ? "text-brand-cream" : "text-brand-cream/30"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="sm:hidden p-6 pb-2">
          <DialogTitle className="font-serif text-xl font-bold text-brand-navy">Solicitud de Admisión</DialogTitle>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-semibold text-brand-red">Paso {step} de 4</span>
            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-red transition-all duration-300" 
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          {renderStepContent()}
        </div>

        <div className="flex items-center justify-between border-t bg-muted/30 p-4 px-6">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={step === 1}
            className={step === 1 ? "opacity-0 pointer-events-none" : ""}
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Atrás
          </Button>

          {step < 4 ? (
            <Button 
              onClick={nextStep} 
              className="bg-brand-red hover:bg-brand-red/90 text-white min-w-[120px]"
              disabled={
                (step === 1 && !formData.level) ||
                (step === 2 && (!formData.firstName || !formData.lastName)) ||
                (step === 3 && !formData.program)
              }
            >
              Siguiente <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={() => setOpen(false)} className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 min-w-[120px] font-semibold">
              <Send className="mr-2 h-4 w-4" /> Enviar Solicitud
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
