import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type StatusTone = "info" | "success" | "warning" | "error"

type StatusBannerProps = {
  title: string
  description?: string
  tone?: StatusTone
  actionLabel?: string
  onAction?: () => void
  className?: string
}

const styles: Record<
  StatusTone,
  {
    icon: typeof Info
    wrapper: string
    iconColor: string
    button: string
  }
> = {
  info: {
    icon: Info,
    wrapper: "border-brand-navy/15 bg-brand-navy/5 text-brand-navy",
    iconColor: "text-brand-navy",
    button: "border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-brand-cream",
  },
  success: {
    icon: CheckCircle2,
    wrapper: "border-emerald-500/20 bg-emerald-500/10 text-emerald-900",
    iconColor: "text-emerald-600",
    button: "border-emerald-500/20 text-emerald-700 hover:bg-emerald-600 hover:text-white",
  },
  warning: {
    icon: TriangleAlert,
    wrapper: "border-amber-500/25 bg-amber-500/10 text-amber-950",
    iconColor: "text-amber-600",
    button: "border-amber-500/20 text-amber-700 hover:bg-amber-500 hover:text-white",
  },
  error: {
    icon: AlertCircle,
    wrapper: "border-brand-red/20 bg-brand-red/10 text-brand-red",
    iconColor: "text-brand-red",
    button: "border-brand-red/20 text-brand-red hover:bg-brand-red hover:text-white",
  },
}

export function StatusBanner({
  title,
  description,
  tone = "info",
  actionLabel,
  onAction,
  className,
}: StatusBannerProps) {
  const Icon = styles[tone].icon

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-2xl border px-4 py-3 shadow-[0_16px_30px_-26px_rgba(15,23,42,0.45)] sm:flex-row sm:items-start sm:justify-between",
        styles[tone].wrapper,
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex gap-3">
        <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", styles[tone].iconColor)} aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold">{title}</p>
          {description ? <p className="mt-1 text-sm/6 opacity-85">{description}</p> : null}
        </div>
      </div>

      {actionLabel && onAction ? (
        <Button type="button" variant="outline" size="sm" className={cn("shrink-0 bg-transparent", styles[tone].button)} onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  )
}
