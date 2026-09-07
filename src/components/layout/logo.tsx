import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("relative block h-11 w-[87px] shrink-0", className)}>
      <img
        src="/logo.svg"
        alt="Studio360 Ltd"
        width={87}
        height={44}
        className="h-full w-full object-contain object-left"
        decoding="async"
        fetchPriority="high"
      />
    </Link>
  );
}
