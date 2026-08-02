import { Container } from "@/components/ui/container";
import { SectionKicker } from "@/components/ui/section-kicker";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";
import { timeline } from "@/lib/data/timeline";

export function AboutTimeline() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="mb-16 max-w-xl md:mb-20">
          <SectionKicker label="Timeline" className="mb-6" />
          <RevealText
            text="How the studio grew."
            as="h2"
            className="font-display text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.05] tracking-tight"
          />
        </div>

        <div className="border-t border-line">
          {timeline.map((entry, i) => (
            <FadeIn key={entry.year} delay={i * 0.05} y={20}>
              <div className="grid grid-cols-1 gap-3 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10">
                <span className="font-display text-2xl tracking-tight text-stone-light md:col-span-2 md:text-3xl">
                  {entry.year}
                </span>
                <h3 className="font-display text-xl font-medium tracking-tight md:col-span-3">
                  {entry.title}
                </h3>
                <p className="max-w-md text-[15px] leading-relaxed text-stone md:col-span-6">
                  {entry.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
