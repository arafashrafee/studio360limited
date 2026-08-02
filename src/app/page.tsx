import { HeroSlideshow } from "@/components/home/hero-slideshow";
import { getFeaturedProjects } from "@/lib/data/projects";

export default function Home() {
  const slides = getFeaturedProjects().map((project) => ({
    src: project.coverImage,
    alt: project.title,
  }));

  return <HeroSlideshow slides={slides} />;
}
