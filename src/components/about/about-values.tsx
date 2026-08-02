import { Container } from "@/components/ui/container";
import { SectionKicker } from "@/components/ui/section-kicker";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";

const PILLARS = [
  {
    label: "Mission",
    text: "To design and deliver buildings and interiors that solve real problems for the people who use them — with a level of precision that holds up long after opening day.",
  },
  {
    label: "Vision",
    text: "To be the consultancy clients call first when a project genuinely matters — because judgment, not just drafting, is what they're paying for.",
  },
  {
    label: "Values",
    text: "Precision over trend. Site-first thinking over signature style. Direct accountability from first sketch to final handover, with no gap between design and delivery.",
  },
];

export function AboutValues() {
  return (
    <section className="border-t border-line bg-paper py-24 md:py-32">
      <Container>
        <div className="mb-16 max-w-xl md:mb-20">
          <SectionKicker label="What Drives Us" className="mb-6" />
          <RevealText
            text="Mission, vision, and the values that don't move."
            as="h2"
            className="font-display text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.05] tracking-tight"
          />
        </div>

        <div className="grid grid-cols-1 gap-12 border-t border-line pt-12 md:grid-cols-3 md:gap-10">
          {PILLARS.map((pillar, i) => (
            <FadeIn key={pillar.label} delay={i * 0.1}>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone">
                {pillar.label}
              </p>
              <p className="mt-5 font-display text-xl font-medium leading-snug tracking-tight text-foreground">
                {pillar.text}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
