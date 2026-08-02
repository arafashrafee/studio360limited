import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { RevealText } from "@/components/ui/reveal-text";
import { ServiceSection } from "@/components/services/service-section";
import { ProcessStrip } from "@/components/services/process-strip";
import { CTA } from "@/components/home/cta";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, construction, interior design, engineering, and Space Maker — our full-package home service.",
};

export default function ServicesPage() {
  return (
    <div>
      <div className="pb-16 pt-36 md:pb-20 md:pt-44">
        <Container>
          <RevealText
            text="Full-service consultancy, from first sketch to final handover."
            as="h1"
            className="max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight"
          />
        </Container>
      </div>

      {services.map((service, i) => (
        <ServiceSection key={service.title} service={service} reverse={i % 2 === 1} />
      ))}

      <ProcessStrip />
      <CTA />
    </div>
  );
}
