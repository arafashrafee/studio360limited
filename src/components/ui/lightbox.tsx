"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type LightboxContextValue = {
  images: string[];
  open: (index: number) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error(
      "Lightbox components must be used inside <LightboxProvider>",
    );
  }
  return context;
}

export function LightboxProvider({
  images,
  alt,
  onIndexChange,
  children,
}: {
  images: string[];
  alt: string;
  onIndexChange?: (index: number) => void;
  children: React.ReactNode;
}) {
  const [index, setIndex] = useState<number | null>(null);

  const open = useCallback((next: number) => setIndex(next), []);
  const close = useCallback(() => setIndex(null), []);

  const step = useCallback(
    (delta: number) =>
      setIndex((current) =>
        current === null
          ? current
          : (current + delta + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    onIndexChange?.(index);
  }, [index, onIndexChange]);

  useEffect(() => {
    if (index === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, close, step]);

  return (
    <LightboxContext.Provider value={{ images, open }}>
      {children}

      {index !== null &&
        createPortal(
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} gallery`}
          >
            <motion.div
              key={index}
              className="relative h-full w-full"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <Image
                src={images[index]}
                alt={`${alt} — image ${index + 1}`}
                fill
                sizes="100vw"
                priority
                className="object-contain p-4 md:p-12"
                onClick={(event) => event.stopPropagation()}
              />
            </motion.div>

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-background/25 text-background transition-colors hover:bg-background hover:text-foreground md:right-8 md:top-8"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-background/25 text-background transition-colors hover:bg-background hover:text-foreground md:left-8"
                >
                  <ChevronLeft className="size-5" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-background/25 text-background transition-colors hover:bg-background hover:text-foreground md:right-8"
                >
                  <ChevronRight className="size-5" strokeWidth={1.5} />
                </button>

                <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium uppercase tracking-[0.24em] text-background/70">
                  {index + 1} / {images.length}
                </p>
              </>
            )}
          </motion.div>,
          document.body,
        )}
    </LightboxContext.Provider>
  );
}

export function LightboxTrigger({
  src,
  label,
  className,
  children,
}: {
  src: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { images, open } = useLightbox();
  const index = images.indexOf(src);

  return (
    <button
      type="button"
      onClick={() => open(index === -1 ? 0 : index)}
      aria-label={`View ${label} full screen`}
      className={cn("block cursor-zoom-in", className)}
    >
      {children}
    </button>
  );
}
