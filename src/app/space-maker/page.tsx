import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";
import { CTA } from "@/components/home/cta";
import { services } from "@/lib/data/services";
import { spaceMakerHouses } from "@/lib/data/space-maker-houses";
import { HouseCatalog } from "@/components/space-maker/house-catalog";

const spaceMaker = services.find((service) => service.title === "Space Maker")!;

export const metadata: Metadata = {
  title: "Space Maker",
  description: spaceMaker.description,
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
              {spaceMaker.description}
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
