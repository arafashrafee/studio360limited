"use client";

import { useMemo, useState } from "react";
import { LayoutGrid, List, ChevronDown } from "lucide-react";
import type { HouseStyle, SpaceMakerHouse } from "@/types";
import { cn } from "@/lib/utils";
import { HouseCard } from "./house-card";

type SortKey = "featured" | "price-asc" | "price-desc" | "size-desc";

const CATEGORIES: { label: string; style: HouseStyle | "All" }[] = [
  { label: "All", style: "All" },
  { label: "Bungalow", style: "Bungalow" },
  { label: "Duplex", style: "Duplex" },
  { label: "Triplex", style: "Triplex" },
  { label: "Villa", style: "Villa" },
  { label: "Cottage", style: "Cottage" },
];

export function HouseCatalog({ houses }: { houses: SpaceMakerHouse[] }) {
  const [activeStyle, setActiveStyle] = useState<HouseStyle | "All">("All");
  const [sort, setSort] = useState<SortKey>("featured");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    const list = houses.filter(
      (house) => activeStyle === "All" || house.style === activeStyle
    );

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "size-desc") list.sort((a, b) => b.sizeSqft - a.sizeSqft);

    return list;
  }, [houses, activeStyle, sort]);

  return (
    <div>
      <div className="no-scrollbar flex items-center gap-6 overflow-x-auto md:gap-8">
        {CATEGORIES.map(({ label, style }) => (
          <button
            key={label}
            type="button"
            onClick={() => setActiveStyle(style)}
            className={cn(
              "shrink-0 text-sm transition-colors duration-300",
              activeStyle === style
                ? "font-semibold text-foreground"
                : "font-normal text-stone hover:text-foreground/70"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-stone">
        {filtered.length} {filtered.length === 1 ? "house" : "houses"}
      </p>

      <div className="pt-10">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
            <p className="font-display text-xl font-medium tracking-tight">
              All Houses <span className="text-stone">- {filtered.length} items</span>
            </p>

            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="appearance-none rounded-full border border-line bg-background py-2 pl-4 pr-9 text-sm text-foreground outline-none transition-colors hover:border-foreground/30"
                >
                  <option value="featured">Sort By: Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="size-desc">Size: Largest First</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-stone"
                  strokeWidth={1.75}
                />
              </div>

              <div className="flex items-center gap-1 rounded-full border border-line p-1">
                <button
                  onClick={() => setView("grid")}
                  aria-label="Grid view"
                  className={cn(
                    "rounded-full p-1.5 transition-colors",
                    view === "grid" ? "bg-foreground text-background" : "text-stone hover:text-foreground"
                  )}
                >
                  <LayoutGrid className="size-4" strokeWidth={1.75} />
                </button>
                <button
                  onClick={() => setView("list")}
                  aria-label="List view"
                  className={cn(
                    "rounded-full p-1.5 transition-colors",
                    view === "list" ? "bg-foreground text-background" : "text-stone hover:text-foreground"
                  )}
                >
                  <List className="size-4" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-sm text-stone">
              No houses match the selected filters.
            </p>
          ) : (
            <div
              className={cn(
                view === "grid"
                  ? "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
                  : "flex flex-col gap-4"
              )}
            >
              {filtered.map((house) => (
                <HouseCard key={house.projectSlug} house={house} view={view} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
