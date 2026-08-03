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
      <span>{label}</span>
    </div>
  );
}
