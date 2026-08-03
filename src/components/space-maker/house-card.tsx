import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Images } from "lucide-react";
import type { SpaceMakerHouse } from "@/types";
import { cn } from "@/lib/utils";

const currency = new Intl.NumberFormat("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function HouseCard({
  house,
  view = "grid",
}: {
  house: SpaceMakerHouse;
  view?: "grid" | "list";
}) {
  return (
    <Link
      href={`/space-maker/${house.projectSlug}`}
      className={cn(
        "group block overflow-hidden border border-line bg-background transition-colors duration-300 hover:border-foreground/20",
        view === "list" && "flex flex-col sm:flex-row"
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden bg-concrete-light",
          view === "list" && "sm:aspect-[4/3] sm:w-64 sm:shrink-0"
        )}
      >
        <Image
          src={house.coverImage}
          alt={house.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {house.gallery.length > 1 && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-foreground/70 px-2.5 py-1 text-[11px] font-medium text-background backdrop-blur-sm">
            <Images className="size-3.5" strokeWidth={1.75} />
            <span>{house.gallery.length}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone">
          {house.style}
        </p>
        <h3 className="font-display text-lg font-medium leading-snug tracking-tight">
          {house.name}
        </h3>

        <div className="flex items-center gap-4 text-xs text-stone">
          <span className="flex items-center gap-1.5">
            <Bed className="size-3.5" strokeWidth={1.75} />
            {house.bedrooms} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="size-3.5" strokeWidth={1.75} />
            {house.toilets} Baths
          </span>
          <span>{house.sizeSqft.toLocaleString("en-IN")} sqft</span>
        </div>

        <p className="mt-1 text-base font-medium text-accent">
          ৳ {currency.format(house.price)}
        </p>
      </div>
    </Link>
  );
}
