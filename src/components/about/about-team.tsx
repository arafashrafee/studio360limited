import { Container } from "@/components/ui/container";
import { SectionKicker } from "@/components/ui/section-kicker";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";
import { TeamCard } from "./team-card";
import { teamMembers } from "@/lib/data/team";

export function AboutTeam() {
  const featured = teamMembers.find((m) => m.featured);
  const rest = teamMembers.filter((m) => !m.featured);

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

        <div className="border-t border-line pt-12">
          {featured && (
            <FadeIn className="mx-auto mb-14 max-w-xl md:mb-20">
              <TeamCard member={featured} />
            </FadeIn>
          )}

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
            {rest.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.08}>
                <TeamCard member={member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
