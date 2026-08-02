import { Container } from "@/components/ui/container";
import { SectionKicker } from "@/components/ui/section-kicker";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";
import { processSteps } from "@/lib/data/process";

export function ProcessStrip() {
  return (
    <section className="border-t border-line bg-paper py-28 md:py-36">
      <Container>
        <div className="mb-16 max-w-2xl md:mb-20">
          <SectionKicker label="Our Process" className="mb-6" />
          <RevealText
            text="A disciplined path from brief to building."
            as="h2"
            className="font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-tight"
          />
        </div>

        <div className="border-t border-line">
          {processSteps.map((step, i) => (
            <FadeIn key={step.index} delay={i * 0.05} y={20}>
              <div className="group grid grid-cols-1 gap-3 border-b border-line py-8 transition-colors duration-500 md:grid-cols-12 md:items-center md:gap-8 md:py-10">
                <span className="font-display text-2xl text-stone-light md:col-span-2 md:text-3xl">
                  {step.index}
                </span>
                <h3 className="font-display text-xl font-medium tracking-tight md:col-span-3">
                  {step.title}
                </h3>
                <p className="max-w-md text-[15px] leading-relaxed text-stone md:col-span-7">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
