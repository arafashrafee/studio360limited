import { Container } from "@/components/ui/container";
import { ImageReveal } from "@/components/ui/image-reveal";
import { FadeIn } from "@/components/ui/fade-in";
import { RevealText } from "@/components/ui/reveal-text";
import type { Service } from "@/types";

export function ServiceSection({ service }: { service: Service }) {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="group/service grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-12">
          <FadeIn className="md:col-span-3 lg:col-span-2">
            <ImageReveal
              src={service.image}
              alt={service.title}
              className="aspect-[3/4] w-full max-w-[8.75rem] md:max-w-[10.5rem]"
              sizes="(min-width: 768px) 168px, 140px"
              imgClassName="grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/service:grayscale-0"
            />
          </FadeIn>

          <div className="min-w-0 md:col-span-8 md:col-start-5 lg:col-span-8 lg:col-start-5 md:text-right">
            <span className="font-display text-sm text-stone-light">
              {service.index}
            </span>
            <RevealText
              text={service.title}
              as="h2"
              className="mt-3 font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.08] tracking-tight md:justify-end"
            />
            <FadeIn delay={0.15}>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-stone md:ml-auto">
                {service.description}
              </p>
              <ul className="mt-5 flex max-w-md flex-col gap-1.5 text-[13px] leading-relaxed text-stone-light md:ml-auto">
                {service.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
