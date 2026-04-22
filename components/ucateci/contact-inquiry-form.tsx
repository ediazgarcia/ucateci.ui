"use client"

import { useEffect, useMemo, useState } from "react"
import { Mail, MessageSquareText, Phone, RotateCcw, SendHorizontal } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { ConfirmActionDialog } from "@/components/ucateci/confirm-action-dialog"
import { StatusBanner } from "@/components/ucateci/status-banner"
import { cn } from "@/lib/utils"
import { usePersistedForm } from "@/hooks/use-persisted-form"

type ProgramOption = {
  value: string
  label: string
}

type ContactInquiryFormProps = {
  storageKey: string
  campusLabel: string
  campusEmail: string
  primaryPhone: string
  programOptions: ProgramOption[]
  accentClassName?: string
}

type ContactFormValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  program: string
  preferredContact: "email" | "phone"
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  program: "",
  preferredContact: "email",
  message: "",
}

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneDigits = values.phone.replace(/\D/g, "")

  if (values.firstName.trim().length < 2) {
    errors.firstName = "Escribe tu nombre para poder identificar tu solicitud."
  }

  if (values.lastName.trim().length < 2) {
    errors.lastName = "Agrega al menos un apellido."
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Usa un correo valido, por ejemplo nombre@correo.com."
  }

  if (values.preferredContact === "phone" && phoneDigits.length < 10) {
    errors.phone = "Si prefieres llamada, necesitamos un telefono con al menos 10 digitos."
  }

  if (!values.program) {
    errors.program = "Selecciona el programa que mas te interesa."
  }

  if (values.message.trim().length < 20) {
    errors.message = "Cuéntanos un poco mas para darte una respuesta util."
  }

  return errors
}

export function ContactInquiryForm({
  storageKey,
  campusLabel,
  campusEmail,
  primaryPhone,
  programOptions,
  accentClassName,
}: ContactInquiryFormProps) {
  const { value: formValues, setValue: setFormValues, reset, didRestoreDraft, setDidRestoreDraft } = usePersistedForm(
    storageKey,
    initialValues,
  )
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ tone: "info" | "success" | "warning" | "error"; title: string; description?: string } | null>(null)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [recoverableDraft, setRecoverableDraft] = useState<ContactFormValues | null>(null)

  const errors = useMemo(() => validate(formValues), [formValues])
  const isValid = Object.keys(errors).length === 0
  const isDirty = JSON.stringify(formValues) !== JSON.stringify(initialValues)
  const selectedProgramLabel = programOptions.find((option) => option.value === formValues.program)?.label

  useEffect(() => {
    if (didRestoreDraft) {
      setStatus({
        tone: "info",
        title: "Recuperamos tu borrador.",
        description: "Puedes seguir donde lo dejaste. El borrador se guarda automaticamente en este dispositivo.",
      })
      setDidRestoreDraft(false)
    }
  }, [didRestoreDraft, setDidRestoreDraft])

  const updateField = <T extends keyof ContactFormValues>(field: T, nextValue: ContactFormValues[T]) => {
    setFormValues((currentValue) => ({ ...currentValue, [field]: nextValue }))
  }

  const markTouched = (field: keyof ContactFormValues) => {
    setTouched((currentValue) => ({ ...currentValue, [field]: true }))
  }

  const resetForm = () => {
    if (isDirty) {
      setRecoverableDraft(formValues)
    }

    reset()
    setTouched({})
    setStatus({
      tone: "warning",
      title: "Formulario limpiado.",
      description: "Si fue accidental, puedes recuperar el ultimo borrador.",
    })
  }

  const restoreDraft = () => {
    if (!recoverableDraft) return

    setFormValues(recoverableDraft)
    setTouched({})
    setStatus({
      tone: "info",
      title: "Restauramos el borrador anterior.",
      description: "Revisa la informacion y continua cuando quieras.",
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextTouched = Object.keys(initialValues).reduce<Partial<Record<keyof ContactFormValues, boolean>>>(
      (accumulator, key) => ({ ...accumulator, [key]: true }),
      {},
    )
    setTouched(nextTouched)

    if (!isValid) {
      setStatus({
        tone: "error",
        title: "Revisa los campos marcados antes de enviar.",
        description: "Corrige los datos y vuelve a intentarlo. Conservamos tu borrador para que no pierdas nada.",
      })
      return
    }

    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setStatus({
        tone: "error",
        title: "No pudimos enviar tu solicitud en este momento.",
        description: "Verifica tu conexion y vuelve a intentarlo. Tu borrador sigue guardado.",
      })
      return
    }

    setIsSubmitting(true)
    setStatus({
      tone: "info",
      title: "Enviando tu solicitud...",
      description: "Estamos preparando tu mensaje para el equipo de admisiones.",
    })

    try {
      await new Promise((resolve) => setTimeout(resolve, 1100))

      setRecoverableDraft(formValues)
      reset()
      setTouched({})
      setStatus({
        tone: "success",
        title: "Recibimos tu mensaje correctamente.",
        description: `El equipo de ${campusLabel} te respondera pronto por ${
          formValues.preferredContact === "phone" ? "telefono" : "correo"
        }.`,
      })
      toast.success("Mensaje enviado", {
        description: "Tu solicitud quedo registrada y el equipo de admisiones la revisara pronto.",
      })
    } catch {
      setStatus({
        tone: "error",
        title: "No pudimos completar la accion.",
        description: "Intentalo de nuevo en unos minutos. Tu borrador sigue disponible.",
      })
      toast.error("No pudimos enviar tu mensaje", {
        description: "Revisa tu conexion e intentalo nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldError = (field: keyof ContactFormValues) => (touched[field] ? errors[field] : undefined)

  return (
    <div className={cn("rounded-[1.75rem] border border-border bg-card p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.4)] md:p-8", accentClassName)}>
      <div className="flex flex-col gap-4 border-b border-border pb-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-bold text-primary">Envia tu consulta</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Completa el formulario con tus datos y te ayudaremos a elegir el programa adecuado.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Borrador automatico</p>
            <p className="mt-1">Tus datos se guardan mientras completas el formulario.</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${campusEmail}`}
            className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-muted/30"
          >
            <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>{campusEmail}</span>
          </a>
          <a
            href={`tel:${primaryPhone.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-muted/30"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>{primaryPhone}</span>
          </a>
        </div>

        {status ? (
          <StatusBanner
            tone={status.tone}
            title={status.title}
            description={status.description}
            actionLabel={recoverableDraft ? "Recuperar borrador" : undefined}
            onAction={recoverableDraft ? restoreDraft : undefined}
          />
        ) : null}
      </div>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor={`${storageKey}-firstName`} className="text-sm font-medium text-foreground">
              Nombre
            </label>
            <Input
              id={`${storageKey}-firstName`}
              value={formValues.firstName}
              onChange={(event) => updateField("firstName", event.target.value)}
              onBlur={() => markTouched("firstName")}
              placeholder="Ejemplo: Ana"
              aria-invalid={Boolean(fieldError("firstName"))}
            />
            <p className={cn("text-xs", fieldError("firstName") ? "text-brand-red" : "text-muted-foreground")}>
              {fieldError("firstName") ?? "Como aparece en tus documentos de admision."}
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor={`${storageKey}-lastName`} className="text-sm font-medium text-foreground">
              Apellido
            </label>
            <Input
              id={`${storageKey}-lastName`}
              value={formValues.lastName}
              onChange={(event) => updateField("lastName", event.target.value)}
              onBlur={() => markTouched("lastName")}
              placeholder="Ejemplo: Perez"
              aria-invalid={Boolean(fieldError("lastName"))}
            />
            <p className={cn("text-xs", fieldError("lastName") ? "text-brand-red" : "text-muted-foreground")}>
              {fieldError("lastName") ?? "Nos ayuda a encontrarte con mas rapidez."}
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor={`${storageKey}-email`} className="text-sm font-medium text-foreground">
              Correo electronico
            </label>
            <Input
              id={`${storageKey}-email`}
              type="email"
              inputMode="email"
              autoComplete="email"
              value={formValues.email}
              onChange={(event) => updateField("email", event.target.value)}
              onBlur={() => markTouched("email")}
              placeholder="nombre@correo.com"
              aria-invalid={Boolean(fieldError("email"))}
            />
            <p className={cn("text-xs", fieldError("email") ? "text-brand-red" : "text-muted-foreground")}>
              {fieldError("email") ?? "Te enviaremos una confirmacion y los siguientes pasos."}
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor={`${storageKey}-phone`} className="text-sm font-medium text-foreground">
              Telefono
            </label>
            <Input
              id={`${storageKey}-phone`}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={formValues.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              onBlur={() => markTouched("phone")}
              placeholder="Ejemplo: 809-555-1234"
              aria-invalid={Boolean(fieldError("phone"))}
            />
            <p className={cn("text-xs", fieldError("phone") ? "text-brand-red" : "text-muted-foreground")}>
              {fieldError("phone") ?? "Solo es obligatorio si prefieres que te llamemos."}
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="space-y-2">
            <label htmlFor={`${storageKey}-program`} className="text-sm font-medium text-foreground">
              Programa de interes
            </label>
            <Select value={formValues.program} onValueChange={(nextValue) => updateField("program", nextValue)}>
              <SelectTrigger id={`${storageKey}-program`} aria-invalid={Boolean(fieldError("program"))} className="w-full">
                <SelectValue placeholder="Selecciona un programa" />
              </SelectTrigger>
              <SelectContent>
                {programOptions.map((program) => (
                  <SelectItem key={program.value} value={program.value}>
                    {program.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className={cn("text-xs", fieldError("program") ? "text-brand-red" : "text-muted-foreground")}>
              {fieldError("program") ?? "Asi podremos enviarte informacion mas precisa."}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-sm font-medium text-foreground">Prefieres respuesta por</span>
            <div className="flex rounded-2xl border border-border bg-muted p-1">
              {[
                { value: "email", label: "Correo", icon: Mail },
                { value: "phone", label: "Llamada", icon: Phone },
              ].map((option) => {
                const Icon = option.icon
                const isActive = formValues.preferredContact === option.value
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField("preferredContact", option.value as ContactFormValues["preferredContact"])}
                    className={cn(
                      "flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                      isActive ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
                    )}
                    aria-pressed={isActive ? true : false}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {option.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {selectedProgramLabel ? (
          <div className="rounded-2xl border border-border bg-muted/35 px-4 py-3 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Programa seleccionado:</span> {selectedProgramLabel}
          </div>
        ) : null}

        <div className="space-y-2">
          <label htmlFor={`${storageKey}-message`} className="text-sm font-medium text-foreground">
            Mensaje
          </label>
          <Textarea
            id={`${storageKey}-message`}
            rows={5}
            value={formValues.message}
            onChange={(event) => updateField("message", event.target.value)}
            onBlur={() => markTouched("message")}
            placeholder={`Cuéntanos que deseas saber sobre ${campusLabel}. Ejemplo: horarios, costos, becas o requisitos.`}
            aria-invalid={Boolean(fieldError("message"))}
          />
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <p className={fieldError("message") ? "text-brand-red" : "text-muted-foreground"}>
              {fieldError("message") ?? "Mientras mas contexto nos compartas, mas util sera la respuesta."}
            </p>
            <span className="text-muted-foreground">{formValues.message.trim().length}/20 minimo</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="outline" onClick={() => setIsConfirmOpen(true)} disabled={!isDirty || isSubmitting}>
              <RotateCcw className="h-4 w-4" />
              Limpiar formulario
            </Button>
            {recoverableDraft ? (
              <Button type="button" variant="ghost" onClick={restoreDraft} disabled={isSubmitting}>
                Recuperar borrador
              </Button>
            ) : null}
          </div>

          <Button type="submit" className="min-w-[12rem]" disabled={!isValid || isSubmitting}>
            {isSubmitting ? (
              <>
                <Spinner className="h-4 w-4" />
                Enviando...
              </>
            ) : (
              <>
                <SendHorizontal className="h-4 w-4" />
                Enviar consulta
              </>
            )}
          </Button>
        </div>

        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <MessageSquareText className="h-4 w-4" aria-hidden="true" />
          Te responderemos con lenguaje claro y los siguientes pasos recomendados.
        </p>
      </form>

      <ConfirmActionDialog
        open={isConfirmOpen}
        onOpenChange={setIsConfirmOpen}
        title="Limpiar formulario"
        description="Se borraran los datos visibles. Si quieres, luego podras recuperar el ultimo borrador desde este mismo formulario."
        confirmLabel="Limpiar ahora"
        onConfirm={resetForm}
        destructive
      />
    </div>
  )
}
