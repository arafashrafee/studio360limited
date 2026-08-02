import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { projects, projectCategories } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A record of Studio360 Ltd's residential, commercial, and architectural work.",
};

export default function ProjectsPage() {
  return (
    <div className="pb-28 pt-32 md:pb-36 md:pt-40">
      <Container>
        <ProjectsGrid projects={projects} categories={projectCategories} />
      </Container>
    </div>
  );
}
