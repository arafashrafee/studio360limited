import { Container } from "@/components/ui/container";
import { SectionKicker } from "@/components/ui/section-kicker";
import { ImageReveal } from "@/components/ui/image-reveal";

export function AboutHero() {
  return (
    <section className="pb-24 pt-36 md:pb-32 md:pt-44">
      <Container>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <SectionKicker label="About Studio360" />
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ImageReveal
              src="/about.png"
              alt="Studio360 Ltd"
              className="aspect-video"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
