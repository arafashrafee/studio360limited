import { existsSync } from "node:fs";
import { join } from "node:path";
import { Container } from "@/components/ui/container";
import { SectionKicker } from "@/components/ui/section-kicker";
import { ImageReveal } from "@/components/ui/image-reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";
import { ceoNote } from "@/lib/data/ceo";

function getCeoPortraitSrc() {
  const publicDir = join(process.cwd(), "public");
  for (const file of ["ceo.jpg", "ceo.jpeg", "ceo.png", "ceo.webp"]) {
    if (existsSync(join(publicDir, file))) return `/${file}`;
  }
  return null;
}

export function AboutHero() {
  const portrait = getCeoPortraitSrc();

  return (
    <section className="pb-24 pt-36 md:pb-32 md:pt-44">
      <Container>
        <div className="mb-14 max-w-3xl md:mb-20">
          <SectionKicker label="About Studio360" className="mb-6" />
          <RevealText
            text={ceoNote.heading}
            as="h1"
            className="font-display text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.05] tracking-tight"
          />
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl font-display text-[clamp(1.35rem,2.4vw,2.05rem)] font-medium leading-snug tracking-tight text-foreground">
              “{ceoNote.pullQuote}”
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-8">
          <FadeIn className="min-w-0 md:col-span-4">
            {portrait ? (
              <ImageReveal
                src={portrait}
                alt={`${ceoNote.name}, ${ceoNote.title}`}
                className="aspect-[3/4]"
                sizes="(min-width: 768px) 33vw, 100vw"
                imgClassName="object-cover object-top grayscale"
                priority
              />
            ) : (
              <div
                className="relative flex aspect-[3/4] flex-col items-center justify-center overflow-hidden bg-concrete-light"
                aria-label={`Portrait placeholder for ${ceoNote.name}`}
              >
                <span className="font-display text-6xl font-medium tracking-tight text-stone-light/90">
                  MB
                </span>
                <span className="mt-5 text-xs font-medium uppercase tracking-[0.22em] text-stone">
                  CEO Portrait
                </span>
              </div>
            )}
            <p className="mt-5 font-display text-lg font-medium tracking-tight">
              {ceoNote.name}
            </p>
            <p className="mt-1 text-sm text-stone">{ceoNote.title}</p>
          </FadeIn>

          <FadeIn delay={0.1} className="min-w-0 md:col-span-7 md:col-start-6">
            <div className="flex max-w-xl flex-col gap-5 text-[15px] leading-relaxed text-stone">
              {ceoNote.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <footer className="mt-12">
              <div className="mb-5 h-px w-10 bg-accent" aria-hidden="true" />
              <p className="font-display text-lg font-medium tracking-tight">
                {ceoNote.name}
              </p>
              <p className="mt-1 text-sm text-stone">{ceoNote.title}</p>
              <p className="text-sm text-stone">{ceoNote.company}</p>
            </footer>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
