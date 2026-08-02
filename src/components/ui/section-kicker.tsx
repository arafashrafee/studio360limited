import { cn } from "@/lib/utils";

export function SectionKicker({
  index,
  label,
  className,
  light = false,
}: {
  index?: string;
  label: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em]",
        light ? "text-background/60" : "text-stone",
        className
      )}
    >
      {index && <span className="tabular-nums">{index}</span>}
      <span className={cn("h-px w-8", light ? "bg-background/40" : "bg-stone-light")} />
      <span>{label}</span>
    </div>
  );
}
