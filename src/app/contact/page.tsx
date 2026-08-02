import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionKicker } from "@/components/ui/section-kicker";
import { RevealText } from "@/components/ui/reveal-text";
import { ContactForm } from "@/components/contact/contact-form";
import { OfficeInfo } from "@/components/contact/office-info";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Studio360 Ltd about your next architecture, interior, or engineering project.",
};

export default function ContactPage() {
  return (
    <div className="pb-28 pt-36 md:pb-36 md:pt-44">
      <Container>
        <div className="max-w-2xl">
          <SectionKicker label="Contact" className="mb-6" />
          <RevealText
            text="Let’s talk about your project."
            as="h1"
            className="font-display text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight"
          />
          <p className="mt-7 text-[15px] leading-relaxed text-stone">
            Tell us about your site and timeline. We respond to every serious
            inquiry within one business day.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <ContactForm />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <OfficeInfo />
          </div>
        </div>
      </Container>
    </div>
  );
}
