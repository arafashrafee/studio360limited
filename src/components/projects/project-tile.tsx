"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectTile({
  project,
  index,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 6) * 0.05 }}
    >
      <Link href={`/projects/${project.slug}`} className="group/tile flex flex-col items-center">
        <div className="relative aspect-square w-full overflow-hidden bg-paper">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 45vw"
            className="object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/tile:scale-105 group-hover/tile:grayscale-0"
          />
        </div>
        <span className="mt-3 h-4 text-center text-xs text-stone opacity-0 transition-opacity duration-300 group-hover/tile:opacity-100">
          {project.title}
        </span>
      </Link>
    </motion.div>
  );
}
