"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const NAV_GROUPS: { label: string; href: string }[][] = [
  [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ],
  [
    { label: "Contact", href: "/contact" },
    { label: "Start a Project", href: "/contact" },
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
          <Logo className={cn("transition-all duration-500", !solid && "drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]")} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "relative z-10 flex size-10 items-center justify-center text-accent transition-all duration-300",
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
            className="fixed inset-0 -z-10 flex flex-col justify-center bg-background px-8 sm:px-12 md:px-16"
          >
            <nav className="flex flex-col gap-10">
              {NAV_GROUPS.map((group, gi) => (
                <div key={gi} className="flex flex-col gap-2.5">
                  {group.map((link, i) => {
                    const active = isActive(pathname, link.href);
                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * (gi * 3 + i), duration: 0.4 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "text-lg font-medium uppercase tracking-[0.06em] transition-colors hover:text-stone md:text-xl",
                            active ? "text-foreground" : "text-foreground/80"
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
