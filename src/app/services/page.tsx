import type { Metadata } from "next";
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
    <div className="pt-24 md:pt-28">
      {services.map((service, i) => (
        <ServiceSection key={service.title} service={service} reverse={i % 2 === 1} />
      ))}

      <ProcessStrip />
      <CTA />
    </div>
  );
}
