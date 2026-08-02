"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ProjectTile } from "@/components/projects/project-tile";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types";

export function ProjectsGrid({
  projects,
  categories,
}: {
  projects: Project[];
  categories: ProjectCategory[];
}) {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active, projects]
  );

  return (
    <div>
      <div className="no-scrollbar flex items-center gap-6 overflow-x-auto md:gap-8">
        {(["All", ...categories] as const).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "shrink-0 text-sm transition-colors duration-300",
              active === category
                ? "font-semibold text-foreground"
                : "font-normal text-stone hover:text-foreground/70"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.p
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 text-sm text-stone"
      >
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </motion.p>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:mt-14 md:grid-cols-4 md:gap-x-8 lg:grid-cols-6"
        >
          {filtered.map((project, i) => (
            <ProjectTile key={project.slug} project={project} index={i} priority={i < 6} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
