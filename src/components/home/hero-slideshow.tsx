"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";

const SLIDE_DURATION = 5000;

type Slide = { src: string; alt: string };

export function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex((i + slides.length) % slides.length),
    [slides.length]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Keeps running while the cursor is over the hero — no hover pause.
  useEffect(() => {
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, next]);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-foreground">
      {slides.map((slide, i) => (
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-foreground/25" />

      <div className="absolute inset-x-0 bottom-0 z-10 hidden md:block">
        <Container className="flex items-center justify-between pb-8">
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className="h-[3px] w-10 overflow-hidden rounded-full bg-background/25"
              >
                <motion.span
                  className="block h-full bg-background"
                  initial={false}
                  animate={{ width: i <= index ? "100%" : "0%" }}
                  transition={
                    i === index
                      ? { duration: SLIDE_DURATION / 1000, ease: "linear" }
                      : { duration: 0.3 }
                  }
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex size-10 items-center justify-center rounded-full border border-background/30 text-background transition-colors hover:bg-background/10"
            >
              <ChevronLeft className="size-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex size-10 items-center justify-center rounded-full border border-background/30 text-background transition-colors hover:bg-background/10"
            >
              <ChevronRight className="size-4" strokeWidth={1.75} />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
