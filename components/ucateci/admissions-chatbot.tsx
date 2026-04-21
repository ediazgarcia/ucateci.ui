"use client"

import { useEffect, useRef, useState } from "react"
import { Bot, MessageCircle, RotateCcw, Send, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"
import { ConfirmActionDialog } from "@/components/ucateci/confirm-action-dialog"
import { StatusBanner } from "@/components/ucateci/status-banner"
import { usePersistedForm } from "@/hooks/use-persisted-form"

type Msg = { role: "bot" | "user"; text: string; options?: { label: string; reply: string }[] }

const INITIAL: Msg[] = [
  {
    role: "bot",
    text: "Hola, soy UCATI. Puedo orientarte con admisiones, carreras, becas y formas de contacto. Elige una opcion o escribe tu pregunta.",
    options: [
      { label: "Proceso de admision", reply: "admision" },
      { label: "Ver carreras", reply: "carreras" },
      { label: "Becas y costos", reply: "becas" },
      { label: "Contactar", reply: "contacto" },
    ],
  },
]

const RESPONSES: Record<string, Msg> = {
  admision: {
    role: "bot",
    text:
      "El proceso de admision tiene cuatro pasos: completa tu solicitud, entrega documentos, presenta la evaluacion indicada y recibe tu confirmacion. Si quieres, te muestro los documentos necesarios o te llevo al formulario.",
    options: [
      { label: "Documentos requeridos", reply: "documentos" },
      { label: "Ir al formulario", reply: "formulario" },
    ],
  },
  carreras: {
    role: "bot",
    text:
      "Ofrecemos programas en salud, ingenieria, humanidades y ciencias economicas. Dime el area que mas te interesa y te guio rapido.",
    options: [
      { label: "Salud", reply: "salud" },
      { label: "Ingenieria", reply: "ingenieria" },
      { label: "Humanidades", reply: "humanidades" },
    ],
  },
  becas: {
    role: "bot",
    text:
      "Contamos con becas academicas, deportivas, culturales y apoyos por necesidad economica. Si quieres, te comparto los requisitos basicos.",
    options: [{ label: "Ver requisitos", reply: "requisitos-becas" }],
  },
  contacto: {
    role: "bot",
    text:
      "Puedes llamarnos al (809) 573-1020, escribir a admisiones@ucateci.edu.do o usar el formulario de contacto de esta pagina para guardar tu consulta.",
    options: [{ label: "Volver al inicio", reply: "inicio" }],
  },
  formulario: {
    role: "bot",
    text: "Perfecto. Desplazate a la seccion de admisiones o usa el formulario de contacto para guardar tu consulta y retomarla luego.",
    options: [{ label: "Volver al inicio", reply: "inicio" }],
  },
  documentos: {
    role: "bot",
    text:
      "Normalmente te pediremos acta de nacimiento, record de notas, certificado de pruebas nacionales, fotos y copia de cedula. Si tu caso es especial, un asesor te dira exactamente que falta.",
    options: [{ label: "Volver a admision", reply: "admision" }],
  },
  salud: {
    role: "bot",
    text: "En salud ofrecemos Medicina, Odontologia, Enfermeria, Bioanalisis y Terapia Fisica.",
    options: [{ label: "Ver otras areas", reply: "carreras" }],
  },
  ingenieria: {
    role: "bot",
    text: "En ingenieria puedes explorar Civil, Industrial, Sistemas, Electromecanica y Agronomia.",
    options: [{ label: "Ver otras areas", reply: "carreras" }],
  },
  humanidades: {
    role: "bot",
    text: "En humanidades puedes estudiar Derecho, Psicologia, Educacion, Comunicacion Social y Teologia.",
    options: [{ label: "Ver otras areas", reply: "carreras" }],
  },
  "requisitos-becas": {
    role: "bot",
    text:
      "Las becas academicas suelen pedir promedio minimo de 85. Para otras ayudas evaluamos tu situacion y la documentacion disponible. Si quieres, un asesor puede orientarte mejor.",
    options: [{ label: "Contactar admisiones", reply: "contacto" }],
  },
  inicio: INITIAL[0],
}

export function AdmissionsChatbot() {
  const { value, setValue, reset } = usePersistedForm("ucateci-chatbot", { messages: INITIAL, input: "" })
  const [open, setOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [status, setStatus] = useState<{ tone: "info" | "warning" | "error"; title: string; description?: string } | null>(null)
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [value.messages, open, isTyping])

  useEffect(() => {
    if (!open) return

    inputRef.current?.focus()

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [open])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const setInput = (nextValue: string) => {
    setValue((currentValue) => ({ ...currentValue, input: nextValue }))
  }

  const pushMessages = (...messages: Msg[]) => {
    setValue((currentValue) => ({ ...currentValue, messages: [...currentValue.messages, ...messages] }))
  }

  const simulateReply = (key: string, label?: string) => {
    const userMessage: Msg = { role: "user", text: label ?? key }
    const botMessage =
      RESPONSES[key] ??
      ({
        role: "bot",
        text:
          "No logre identificar tu solicitud. Prueba con palabras como admision, becas, carreras o contacto para ayudarte mejor.",
        options: [
          { label: "Proceso de admision", reply: "admision" },
          { label: "Becas y costos", reply: "becas" },
          { label: "Contactar", reply: "contacto" },
        ],
      } as Msg)

    pushMessages(userMessage)
    setIsTyping(true)
    setStatus({
      tone: "info",
      title: "UCATI esta preparando una respuesta.",
      description: "Puedes seguir escribiendo o elegir una sugerencia para ir mas rapido.",
    })

    timeoutRef.current = setTimeout(() => {
      pushMessages(botMessage)
      setIsTyping(false)
      setStatus(null)
    }, 550)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!value.input.trim()) {
      setStatus({
        tone: "warning",
        title: "Escribe una pregunta o usa una sugerencia.",
        description: "Por ejemplo: admision, becas, carreras o contacto.",
      })
      return
    }

    const normalizedKey = value.input.trim().toLowerCase()
    simulateReply(normalizedKey, value.input.trim())
    setInput("")
  }

  const resetConversation = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    reset()
    setStatus({
      tone: "info",
      title: "Reiniciamos la conversacion.",
      description: "Puedes empezar de nuevo sin perder la oportunidad de escribirnos despues.",
    })
    setIsTyping(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((currentValue) => !currentValue)}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente de admisiones"}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl ring-4 ring-accent/30 transition-transform hover:scale-105 sm:bottom-5 sm:right-5 md:h-16 md:w-16"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            1
          </span>
        )}
      </button>

      {open ? (
        <div className="fixed bottom-[5.5rem] left-3 right-3 z-50 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl sm:left-auto sm:right-5 sm:w-[calc(100vw-2.5rem)] sm:max-w-sm">
          <header className="flex items-center gap-3 border-b border-border bg-primary p-4 text-primary-foreground">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-serif text-sm font-semibold">
                UCATI <Sparkles className="h-3 w-3 text-accent" />
              </div>
              <div className="text-xs text-primary-foreground/75">Asistente de admisiones</div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="ml-auto text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={() => setIsConfirmOpen(true)}
              aria-label="Reiniciar conversacion"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </header>

          <div className="space-y-3 border-b border-border bg-card px-4 py-3">
            <p className="text-xs text-muted-foreground">
              Usa este asistente para orientarte rapido. Puedes cerrar con <kbd className="rounded border bg-muted px-1 py-0.5 text-[10px]">Esc</kbd>.
            </p>
            {status ? <StatusBanner tone={status.tone} title={status.title} description={status.description} /> : null}
          </div>

          <div className="flex max-h-[min(62vh,28rem)] flex-col gap-3 overflow-y-auto bg-muted/40 p-4">
            {value.messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex flex-col gap-2 ${message.role === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-card text-foreground ring-1 ring-border"
                  }`}
                >
                  {message.text}
                </div>
                {message.options ? (
                  <div className="flex flex-wrap gap-2">
                    {message.options.map((option) => (
                      <button
                        key={option.reply}
                        type="button"
                        onClick={() => simulateReply(option.reply, option.label)}
                        disabled={isTyping}
                        className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            {isTyping ? (
              <div className="flex items-start">
                <div className="rounded-2xl rounded-bl-sm bg-card px-3.5 py-2.5 text-sm text-foreground ring-1 ring-border">
                  <span className="inline-flex items-center gap-2">
                    <Spinner className="h-4 w-4" />
                    UCATI esta escribiendo...
                  </span>
                </div>
              </div>
            ) : null}

            <div ref={endRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border bg-card p-3">
            <InputGroup>
              <InputGroupInput
                ref={inputRef}
                value={value.input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Escribe tu pregunta. Ejemplo: becas"
                aria-label="Escribe tu pregunta"
                disabled={isTyping}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  type="submit"
                  size="icon-sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  aria-label="Enviar mensaje"
                  disabled={isTyping}
                >
                  {isTyping ? <Spinner className="h-3.5 w-3.5" /> : <Send className="h-3.5 w-3.5" />}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            <p className="mt-2 text-xs text-muted-foreground">Si no reconocemos tu mensaje, te ofreceremos opciones para continuar sin perder el hilo.</p>
          </form>

          <ConfirmActionDialog
            open={isConfirmOpen}
            onOpenChange={setIsConfirmOpen}
            title="Reiniciar conversacion"
            description="Se borrara la conversacion guardada en este dispositivo. Puedes volver a empezar de inmediato con las sugerencias iniciales."
            confirmLabel="Reiniciar ahora"
            onConfirm={resetConversation}
            destructive
          />
        </div>
      ) : null}
    </>
  )
}
