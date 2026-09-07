"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const NAV_GROUPS: { label: string; href: string; accent?: boolean }[][] = [
  [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "News", href: "/news" },
  ],
  [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  [
    { label: "Space Maker", href: "/space-maker", accent: true },
  ],
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        open
          ? "bg-transparent"
          : solid
            ? "border-b border-line bg-background/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between px-6 transition-all duration-500 sm:px-8",
          solid ? "h-[68px] md:h-20" : "h-20 md:h-24"
        )}
      >
        <div className={cn("transition-opacity duration-300", open && "pointer-events-none opacity-0")}>
          <Logo className="transition-all duration-500" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "relative z-10 flex size-10 items-center justify-center text-black transition-all duration-300",
            !solid && "drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]"
          )}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none fixed inset-0 -z-10 flex flex-col items-end justify-center bg-transparent px-6 sm:px-8"
          >
            <nav className="pointer-events-auto flex w-max max-w-[min(100%,20rem)] flex-col items-end gap-10 text-right">
              {NAV_GROUPS.map((group, gi) => (
                <div key={gi} className="flex flex-col items-end gap-2.5">
                  {group.map((link, i) => {
                    const active = isActive(pathname, link.href);
                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * (gi * 3 + i), duration: 0.4 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "inline-block rounded-md border border-white/20 bg-white/15 px-3 py-1.5 text-lg font-medium uppercase tracking-[0.06em] shadow-md shadow-black/10 backdrop-blur-md transition-colors hover:bg-white/20 md:text-xl",
                            link.accent
                              ? "text-accent hover:text-accent/80"
                              : cn(
                                  "hover:text-stone",
                                  active ? "text-foreground" : "text-foreground/80"
                                )
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
