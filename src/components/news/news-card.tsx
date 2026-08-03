"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/types";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsCard({
  article,
  index,
  className,
  imageClassName,
  priority = false,
}: {
  article: NewsArticle;
  index: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE, delay: (index % 4) * 0.08 }}
      className={cn("group/card", className)}
    >
      <Link href={`/news/${article.slug}`} className="block">
        <div
          className={cn(
            "relative overflow-hidden bg-concrete-light",
            imageClassName ?? "aspect-[4/3]"
          )}
        >
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/0 to-foreground/0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

          <div className="absolute right-5 top-5 flex size-10 translate-y-2 items-center justify-center rounded-full bg-background/90 opacity-0 backdrop-blur-sm transition-all duration-400 ease-out group-hover/card:translate-y-0 group-hover/card:opacity-100">
            <ArrowUpRight className="size-4" strokeWidth={1.75} />
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone">
            {article.category} — {formatDate(article.date)}
          </p>
          <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-foreground transition-colors md:text-xl">
            {article.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-stone">{article.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
}
