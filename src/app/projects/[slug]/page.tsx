import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ImageReveal } from "@/components/ui/image-reveal";
import { LightboxProvider, LightboxTrigger } from "@/components/ui/lightbox";
import { FadeIn } from "@/components/ui/fade-in";
import { RevealText } from "@/components/ui/reveal-text";
import { SectionKicker } from "@/components/ui/section-kicker";
import { ProjectCard } from "@/components/projects/project-card";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];
  const related = getRelatedProjects(slug, 3);

  const facts = [
    { label: "Category", value: project.category },
    { label: "Typology", value: project.typology },
    { label: "Location", value: project.location },
  ];

  return (
    <LightboxProvider images={project.gallery} alt={project.title}>
      <div className="pb-28 md:pb-36">
        <section className="relative flex h-svh min-h-[560px] w-full items-end overflow-hidden bg-foreground pt-24">
          <LightboxTrigger
            src={project.coverImage}
            label={project.title}
            className="absolute inset-0 size-full"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/10 to-foreground/20" />
          </LightboxTrigger>

          <Container className="pointer-events-none relative z-10 pb-12 md:pb-16">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-background/70">
              {project.category}
            </p>
            <RevealText
              text={project.title}
              as="h1"
              className="max-w-3xl font-display text-[clamp(2.25rem,5.5vw,4.75rem)] font-medium leading-[1.02] tracking-tight text-background"
            />
          </Container>
        </section>

        <Container className="mt-14 md:mt-20">
          <div className="grid grid-cols-1 gap-12 border-b border-line pb-16 md:grid-cols-12 md:gap-8 md:pb-20">
            <div className="grid grid-cols-3 gap-6 md:col-span-4 md:grid-cols-1 md:gap-8">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone">
                    {fact.label}
                  </p>
                  <p className="mt-2 font-display text-lg tracking-tight">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="md:col-span-7 md:col-start-6">
              {project.description.map((paragraph, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <p className="mb-6 max-w-2xl text-[17px] leading-relaxed text-foreground/85 last:mb-0">
                    {paragraph}
                  </p>
                </FadeIn>
              ))}

              <div className="mt-8 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-line px-4 py-1.5 text-xs text-stone"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2">
            {project.gallery.slice(1).map((image, i) => (
              <LightboxTrigger
                key={image}
                src={image}
                label={`${project.title} — detail ${i + 1}`}
                className={
                  i % 3 === 0
                    ? "aspect-[4/5] w-full md:col-span-2 md:aspect-[16/9]"
                    : "aspect-[4/5] w-full"
                }
              >
                <ImageReveal
                  src={image}
                  alt={`${project.title} — detail ${i + 1}`}
                  className="size-full"
                  delay={i * 0.05}
                />
              </LightboxTrigger>
            ))}
          </div>
        </Container>

        {related.length > 0 && (
          <Container className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-20">
            <SectionKicker label="More Projects" className="mb-10" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedProject, i) => (
                <ProjectCard
                  key={relatedProject.slug}
                  project={relatedProject}
                  index={i}
                  imageClassName="aspect-[4/5]"
                />
              ))}
            </div>
          </Container>
        )}

        <Container className="mt-24 border-t border-line pt-10 md:mt-32">
          <div className="grid grid-cols-2 divide-x divide-line">
            <Link
              href={`/projects/${prev.slug}`}
              className="group/nav flex flex-col gap-2 pr-6 text-left"
            >
              <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-stone">
                <ChevronLeft className="size-3.5" strokeWidth={2} />
                Previous
              </span>
              <span className="font-display text-lg tracking-tight transition-colors group-hover/nav:text-stone md:text-2xl">
                {prev.title}
              </span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group/nav flex flex-col items-end gap-2 pl-6 text-right"
            >
              <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-stone">
                Next
                <ChevronRight className="size-3.5" strokeWidth={2} />
              </span>
              <span className="font-display text-lg tracking-tight transition-colors group-hover/nav:text-stone md:text-2xl">
                {next.title}
              </span>
            </Link>
          </div>
        </Container>
      </div>
    </LightboxProvider>
  );
}
