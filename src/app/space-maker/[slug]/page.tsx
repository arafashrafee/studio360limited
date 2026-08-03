import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionKicker } from "@/components/ui/section-kicker";
import { CTA } from "@/components/home/cta";
import { HouseCard } from "@/components/space-maker/house-card";
import { HouseDetail } from "@/components/space-maker/house-detail";
import {
  getHouseBySlug,
  getRelatedHouses,
  spaceMakerHouses,
} from "@/lib/data/space-maker-houses";

export function generateStaticParams() {
  return spaceMakerHouses.map((house) => ({ slug: house.projectSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const house = getHouseBySlug(slug);
  if (!house) return {};
  return {
    title: `${house.name} — Space Maker`,
    description: `${house.style} house, ${house.bedrooms} bedrooms, ${house.sizeSqft.toLocaleString("en-IN")} sqft — part of Studio360's Space Maker full-package home service.`,
  };
}

export default async function SpaceMakerHousePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const house = getHouseBySlug(slug);
  if (!house) notFound();

  const related = getRelatedHouses(slug, 3);

  return (
    <div className="pb-28 pt-24 md:pb-36 md:pt-28">
      <Container>
        <nav className="mb-8 flex items-center gap-2 text-sm text-stone">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="size-3.5" strokeWidth={1.75} />
          <Link href="/space-maker" className="transition-colors hover:text-foreground">
            Space Maker
          </Link>
          <ChevronRight className="size-3.5" strokeWidth={1.75} />
          <span className="text-foreground">{house.name}</span>
        </nav>

        <HouseDetail house={house} />
      </Container>

      {related.length > 0 && (
        <Container className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-20">
          <SectionKicker label="More Houses" className="mb-10" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedHouse) => (
              <HouseCard key={relatedHouse.projectSlug} house={relatedHouse} />
            ))}
          </div>
        </Container>
      )}

      <div className="mt-24 md:mt-32">
        <CTA />
      </div>
    </div>
  );
}
