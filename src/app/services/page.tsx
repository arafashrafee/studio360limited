import type { Metadata } from "next";
import { ServiceSection } from "@/components/services/service-section";
import { ProcessStrip } from "@/components/services/process-strip";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, construction, interior design, project management, and renovation & remodeling.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-28">
      <div className="divide-y divide-line">
        {services.map((service) => (
          <ServiceSection key={service.title} service={service} />
        ))}
      </div>

      <ProcessStrip />
    </div>
  );
}
