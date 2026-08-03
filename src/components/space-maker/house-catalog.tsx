"use client";

import { useMemo, useState } from "react";
import { LayoutGrid, List, ChevronDown } from "lucide-react";
import type { HouseHeight, HouseStyle, SpaceMakerHouse } from "@/types";
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

const HEIGHT_OPTIONS: HouseHeight[] = ["Single Storey", "Duplex", "Triplex"];
const BEDROOM_OPTIONS = [2, 3, 4, 5, 6];
const TOILET_OPTIONS = [2, 3, 4, 5, 6];
const SIZE_OPTIONS: { label: string; test: (sqft: number) => boolean }[] = [
  { label: "Under 2,000 sqft", test: (s) => s < 2000 },
  { label: "2,000 – 3,500 sqft", test: (s) => s >= 2000 && s < 3500 },
  { label: "3,500 – 5,000 sqft", test: (s) => s >= 3500 && s < 5000 },
  { label: "Above 5,000 sqft", test: (s) => s >= 5000 },
];

function FilterGroup({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="group border-b border-line py-4" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
        {title}
        <ChevronDown className="size-4 text-stone transition-transform duration-300 group-open:rotate-180" strokeWidth={1.75} />
      </summary>
      <div className="mt-3 flex flex-col gap-2.5">{children}</div>
    </details>
  );
}

function CheckboxRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-stone transition-colors hover:text-foreground">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="size-3.5 rounded-sm border-line accent-foreground"
      />
      {label}
    </label>
  );
}

function toggleSetValue<T>(set: Set<T>, value: T) {
  const next = new Set(set);
  if (next.has(value)) {
    next.delete(value);
  } else {
    next.add(value);
  }
  return next;
}

export function HouseCatalog({ houses }: { houses: SpaceMakerHouse[] }) {
  const [activeStyle, setActiveStyle] = useState<HouseStyle | "All">("All");
  const [heights, setHeights] = useState<Set<HouseHeight>>(new Set());
  const [bedrooms, setBedrooms] = useState<Set<number>>(new Set());
  const [toilets, setToilets] = useState<Set<number>>(new Set());
  const [sizes, setSizes] = useState<Set<number>>(new Set());
  const [sort, setSort] = useState<SortKey>("featured");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    let list = houses.filter((house) => {
      if (activeStyle !== "All" && house.style !== activeStyle) return false;
      if (heights.size > 0 && !heights.has(house.height)) return false;
      if (bedrooms.size > 0 && !bedrooms.has(house.bedrooms)) return false;
      if (toilets.size > 0 && !toilets.has(house.toilets)) return false;
      if (
        sizes.size > 0 &&
        !SIZE_OPTIONS.some(
          (option, index) => sizes.has(index) && option.test(house.sizeSqft)
        )
      )
        return false;
      return true;
    });

    list = [...list];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "size-desc") list.sort((a, b) => b.sizeSqft - a.sizeSqft);

    return list;
  }, [houses, activeStyle, heights, bedrooms, toilets, sizes, sort]);

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

      <div className="grid grid-cols-1 gap-10 pt-10 lg:grid-cols-[240px_1fr]">
        <aside className="lg:pr-6">
          <FilterGroup title="Building Height">
            {HEIGHT_OPTIONS.map((option) => (
              <CheckboxRow
                key={option}
                label={option}
                checked={heights.has(option)}
                onChange={() => setHeights((prev) => toggleSetValue(prev, option))}
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Bedrooms">
            {BEDROOM_OPTIONS.map((option) => (
              <CheckboxRow
                key={option}
                label={`${option} Bedrooms`}
                checked={bedrooms.has(option)}
                onChange={() => setBedrooms((prev) => toggleSetValue(prev, option))}
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Toilets">
            {TOILET_OPTIONS.map((option) => (
              <CheckboxRow
                key={option}
                label={`${option} Toilets`}
                checked={toilets.has(option)}
                onChange={() => setToilets((prev) => toggleSetValue(prev, option))}
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Size" defaultOpen={false}>
            {SIZE_OPTIONS.map((option, index) => (
              <CheckboxRow
                key={option.label}
                label={option.label}
                checked={sizes.has(index)}
                onChange={() => setSizes((prev) => toggleSetValue(prev, index))}
              />
            ))}
          </FilterGroup>
        </aside>

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
