import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";
import { CTA } from "@/components/home/cta";
import { spaceMakerHouses } from "@/lib/data/space-maker-houses";
import { HouseCatalog } from "@/components/space-maker/house-catalog";

const SPACE_MAKER_INTRO =
  "Our full-package home service — architecture, interiors, engineering, and construction delivered as one complete house.";

export const metadata: Metadata = {
  title: "Space Maker",
  description: SPACE_MAKER_INTRO,
};

export default function SpaceMakerPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="pb-20 pt-14 md:pb-28 md:pt-20">
        <Container>
          <RevealText
            text="Space Maker"
            as="h1"
            className="font-display text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.05] tracking-tight"
          />
          <FadeIn delay={0.15}>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-stone">
              {SPACE_MAKER_INTRO}
            </p>
          </FadeIn>

          <div className="mt-14">
            <HouseCatalog houses={spaceMakerHouses} />
          </div>
        </Container>
      </section>

      <CTA />
    </div>
  );
}
