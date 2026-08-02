import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  icon?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  icon = true,
}: ButtonProps) {
  const base =
    "group/btn inline-flex items-center gap-2.5 text-sm tracking-wide transition-all duration-300 ease-out";

  const variants = {
    primary:
      "bg-foreground text-background px-7 py-3.5 rounded-full hover:bg-stone",
    light:
      "bg-background text-foreground px-7 py-3.5 rounded-full hover:bg-concrete-light",
    ghost:
      "text-foreground border-b border-foreground/30 pb-1 hover:border-foreground",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          strokeWidth={1.75}
        />
      )}
    </Link>
  );
}
