"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Tag = "h1" | "h2" | "h3" | "p" | "span";

const MOTION_TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

export function RevealText({
  text,
  as = "h2",
  className,
  wordClassName,
  delay = 0,
  stagger = 0.05,
}: {
  text: string;
  as?: Tag;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  const Tag = MOTION_TAGS[as];

  return (
    <Tag
      className={cn("flex flex-wrap", className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="mr-[0.28em] overflow-hidden pb-[0.15em]"
        >
          <motion.span
            className={cn("inline-block will-change-transform", wordClassName)}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.85,
              ease: EASE,
              delay: delay + i * stagger,
            }}
            aria-hidden="true"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
