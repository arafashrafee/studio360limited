import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutTimeline } from "@/components/about/about-timeline";
import { AboutValues } from "@/components/about/about-values";
import { AboutTeam } from "@/components/about/about-team";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Studio360 Ltd is an architecture and engineering consultancy built on precision, in-house engineering, and single-point accountability.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutTimeline />
      <AboutValues />
      <AboutTeam />
      <CTA />
    </>
  );
}
