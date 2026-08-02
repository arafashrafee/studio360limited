"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectCard({
  project,
  index,
  className,
  imageClassName,
  priority = false,
}: {
  project: Project;
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
      <Link href={`/projects/${project.slug}`} className="block">
        <div
          className={cn(
            "relative overflow-hidden bg-concrete-light",
            imageClassName
          )}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/0 to-foreground/0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

          <div className="absolute right-5 top-5 flex size-10 translate-y-2 items-center justify-center rounded-full bg-background/90 opacity-0 backdrop-blur-sm transition-all duration-400 ease-out group-hover/card:translate-y-0 group-hover/card:opacity-100">
            <ArrowUpRight className="size-4" strokeWidth={1.75} />
          </div>

          <div className="absolute inset-x-5 bottom-5 translate-y-3 opacity-0 transition-all duration-400 ease-out group-hover/card:translate-y-0 group-hover/card:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/95 px-5 py-2.5 text-[13px] font-medium tracking-wide text-foreground backdrop-blur-sm">
              View Project
            </span>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-display text-lg font-medium tracking-tight text-foreground transition-colors md:text-xl">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-stone">
            {project.category} — {project.location}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
