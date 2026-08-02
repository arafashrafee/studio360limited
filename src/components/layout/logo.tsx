import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("relative block h-9 w-[68px] shrink-0", className)}>
      <Image
        src="/logo.png"
        alt="Studio360 Ltd"
        fill
        priority
        sizes="68px"
        className="object-contain object-left"
      />
    </Link>
  );
}
