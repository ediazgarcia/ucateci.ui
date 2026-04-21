import { cn } from "@/lib/utils"

type PageShellProps = {
  children: React.ReactNode
  className?: string
  accent?: "brand" | "emerald" | "sky"
}

const accents = {
  brand: {
    top: "from-brand-navy/14 via-brand-gold/8 to-transparent",
    left: "bg-brand-navy/10",
    right: "bg-brand-red/12",
  },
  emerald: {
    top: "from-emerald-500/14 via-brand-gold/10 to-transparent",
    left: "bg-emerald-400/12",
    right: "bg-brand-gold/12",
  },
  sky: {
    top: "from-sky-500/16 via-brand-navy/8 to-transparent",
    left: "bg-sky-400/12",
    right: "bg-brand-red/10",
  },
} as const

export function PageShell({ children, className, accent = "brand" }: PageShellProps) {
  const palette = accents[accent]

  return (
    <div className={cn("page-shell relative min-h-screen overflow-x-clip bg-background", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className={cn("absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b", palette.top)} />
        <div className={cn("floating-orb absolute -left-24 top-24 h-64 w-64 rounded-full blur-3xl", palette.left)} />
        <div
          className={cn(
            "floating-orb absolute right-[-6rem] top-[18rem] h-72 w-72 rounded-full blur-3xl",
            palette.right,
          )}
          style={{ animationDelay: "1.2s" }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      </div>
      <div className="relative isolate">{children}</div>
    </div>
  )
}
