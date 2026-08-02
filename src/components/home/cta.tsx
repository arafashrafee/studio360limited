import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionKicker } from "@/components/ui/section-kicker";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";

export function CTA() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-foreground py-28">
      <Image
        src="/projects/al-alakaba/1.png"
        alt="Concept study for a mixed-use tower"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/90 to-foreground/70" />

      <Container className="relative z-10 text-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <SectionKicker label="Let's Talk" light className="mb-8" />
          <RevealText
            text="Let’s Build Something Exceptional."
            as="h2"
            className="justify-center text-center font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-background"
          />
          <FadeIn delay={0.4} className="mt-8 max-w-md">
            <p className="text-[15px] leading-relaxed text-background/70">
              From first sketch to final handover, we partner with clients
              who care as much about how a building is used as how it looks.
            </p>
          </FadeIn>
          <FadeIn delay={0.55} className="mt-10">
            <Button href="/contact" variant="light">
              Start Your Project
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
