import { Container } from "@/components/ui/container";
import { SectionKicker } from "@/components/ui/section-kicker";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";
import { ImageReveal } from "@/components/ui/image-reveal";

export function AboutHero() {
  return (
    <section className="pb-24 pt-36 md:pb-32 md:pt-44">
      <Container>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <SectionKicker label="About Studio360" className="mb-6" />
            <RevealText
              text="Designing spaces people actually live in."
              as="h1"
              className="font-display text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-[1.05] tracking-tight"
            />
            <FadeIn delay={0.3}>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-stone">
                Studio360 Ltd was founded on a simple premise: architecture
                should serve the people who use it first, and photograph well
                second. That order of priorities still shapes every project
                we take on.
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-stone">
                We work across residential, commercial, and mixed-use
                typologies, with an in-house engineering team that keeps
                design intent intact from sketch to structure.
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <ImageReveal
              src="/projects/aholi-mansion/1.png"
              alt="Aholi Mansion, a Studio360 residential tower"
              className="aspect-[4/5]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
