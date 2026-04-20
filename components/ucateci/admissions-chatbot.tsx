"use client"

import { useEffect, useRef, useState } from "react"
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react"
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupButton } from "@/components/ui/input-group"

type Msg = { role: "bot" | "user"; text: string; options?: { label: string; reply: string }[] }

const INITIAL: Msg[] = [
  {
    role: "bot",
    text: "¡Hola! Soy UCATI, tu asistente virtual. ¿En qué puedo ayudarte hoy?",
    options: [
      { label: "Proceso de admisión", reply: "admision" },
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
      "El proceso de admisión tiene 4 pasos: 1) Completa el formulario en línea, 2) Entrega documentos, 3) Presenta el examen POMA/PAA, 4) Recibe tu carta de aceptación. ¿Quieres empezar ahora?",
    options: [
      { label: "Iniciar formulario", reply: "formulario" },
      { label: "Documentos requeridos", reply: "documentos" },
    ],
  },
  carreras: {
    role: "bot",
    text:
      "Ofrecemos 45+ programas en Ciencias de la Salud, Ingeniería, Humanidades y Ciencias Económicas. ¿Qué área te interesa?",
    options: [
      { label: "Salud", reply: "salud" },
      { label: "Ingeniería", reply: "ingenieria" },
      { label: "Humanidades", reply: "humanidades" },
    ],
  },
  becas: {
    role: "bot",
    text:
      "Tenemos becas académicas (hasta 100%), deportivas, culturales y por necesidad económica. También un 20% de descuento por pronto pago. ¿Quieres aplicar?",
    options: [{ label: "Ver requisitos", reply: "requisitos-becas" }],
  },
  contacto: {
    role: "bot",
    text:
      "Puedes contactarnos al (809) 573-1020, escribir a admisiones@ucateci.edu.do o visitarnos en el Km. 2 Autopista Duarte, La Vega, RD.",
    options: [{ label: "Volver al inicio", reply: "inicio" }],
  },
  formulario: {
    role: "bot",
    text: "Perfecto. Te dirigiré al formulario de admisión en línea. ¡Te esperamos en UCATECI!",
  },
  documentos: {
    role: "bot",
    text:
      "Necesitas: Acta de nacimiento, Récord de notas del bachillerato, Certificado de pruebas nacionales, 2 fotos 2x2 y copia de cédula. ¿Algo más?",
    options: [{ label: "Volver", reply: "admision" }],
  },
  salud: {
    role: "bot",
    text:
      "En Salud ofrecemos: Medicina, Odontología, Enfermería, Bioanálisis y Terapia Física. Todas con alta demanda laboral.",
    options: [{ label: "Ver otras áreas", reply: "carreras" }],
  },
  ingenieria: {
    role: "bot",
    text: "En Ingeniería: Civil, Industrial, Sistemas, Electrónica y Agronómica. Con laboratorios modernos.",
    options: [{ label: "Ver otras áreas", reply: "carreras" }],
  },
  humanidades: {
    role: "bot",
    text: "En Humanidades: Derecho, Psicología, Educación, Comunicación Social y Teología.",
    options: [{ label: "Ver otras áreas", reply: "carreras" }],
  },
  "requisitos-becas": {
    role: "bot",
    text:
      "Becas académicas: promedio mínimo 85. Deportivas: carta de aval. Necesidad: evaluación socioeconómica. Aplicación abierta todo el año.",
  },
  inicio: INITIAL[0],
}

export function AdmissionsChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>(INITIAL)
  const [input, setInput] = useState("")
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open])

  const reply = (key: string, label?: string) => {
    const userMsg: Msg = { role: "user", text: label ?? key }
    const botMsg =
      RESPONSES[key] ??
      ({
        role: "bot",
        text:
          "Gracias por tu mensaje. Un asesor de admisiones se pondrá en contacto contigo. También puedes escribirnos a admisiones@ucateci.edu.do",
      } as Msg)
    setMessages((m) => [...m, userMsg, botMsg])
  }

  const send = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    const key = input.trim().toLowerCase()
    reply(key, input.trim())
    setInput("")
  }

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente de admisiones"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl ring-4 ring-accent/30 transition-transform hover:scale-105 md:h-16 md:w-16"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            1
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
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
            <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-primary-foreground/10 px-2 py-1 text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" aria-hidden="true" />
              En línea
            </span>
          </header>

          <div className="flex max-h-96 flex-col gap-3 overflow-y-auto bg-muted/40 p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col gap-2 ${m.role === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-card text-foreground ring-1 ring-border"
                  }`}
                >
                  {m.text}
                </div>
                {m.options && (
                  <div className="flex flex-wrap gap-2">
                    {m.options.map((o) => (
                      <button
                        key={o.reply}
                        onClick={() => reply(o.reply, o.label)}
                        className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent hover:text-accent-foreground"
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={send} className="border-t border-border bg-card p-3">
            <InputGroup>
              <InputGroupInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta..."
                aria-label="Escribir mensaje"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  type="submit"
                  size="icon-sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  aria-label="Enviar"
                >
                  <Send className="h-3.5 w-3.5" />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </form>
        </div>
      )}
    </>
  )
}
