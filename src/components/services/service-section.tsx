import { Container } from "@/components/ui/container";
import { ImageReveal } from "@/components/ui/image-reveal";
import { FadeIn } from "@/components/ui/fade-in";
import { RevealText } from "@/components/ui/reveal-text";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

export function ServiceSection({
  service,
  reverse = false,
}: {
  service: Service;
  reverse?: boolean;
}) {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8">
          <div
            className={cn(
              "md:col-span-5",
              reverse ? "md:order-2 md:col-start-8" : "md:col-start-1"
            )}
          >
            <span className="font-display text-sm text-stone-light">
              {service.index}
            </span>
            <RevealText
              text={service.title}
              as="h2"
              className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.75rem)] font-medium leading-[1.08] tracking-tight"
            />
            <FadeIn delay={0.15}>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-stone">
                {service.description}
              </p>
            </FadeIn>
          </div>

          <div
            className={cn(
              "group/service md:col-span-4",
              reverse ? "md:order-1 md:col-start-1" : "md:col-start-9"
            )}
          >
            <ImageReveal
              src={service.image}
              alt={service.title}
              className="aspect-[4/5]"
              imgClassName="grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/service:grayscale-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
