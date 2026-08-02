import { Container } from "@/components/ui/container";
import { SectionKicker } from "@/components/ui/section-kicker";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";
import { teamGroups } from "@/lib/data/team";

export function AboutTeam() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="mb-16 max-w-xl md:mb-20">
          <SectionKicker label="Our People" className="mb-6" />
          <RevealText
            text="One team, from sketch to handover."
            as="h2"
            className="font-display text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.05] tracking-tight"
          />
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-stone">
            Studio360 keeps design, engineering, and delivery under one roof
            — no handoffs between disconnected consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 border-t border-line pt-12 sm:grid-cols-2">
          {teamGroups.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.08}>
              <span className="text-sm text-stone-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium tracking-tight">
                {group.title}
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-stone">
                {group.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
