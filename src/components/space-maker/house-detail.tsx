"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Check,
  Repeat,
  Heart,
  Share2,
  Printer,
  Mail,
  Ruler,
  Maximize2,
  Building2,
  Bed,
} from "lucide-react";
import type { SpaceMakerHouse } from "@/types";
import { cn } from "@/lib/utils";
import { getHouseContent } from "@/lib/data/space-maker-houses";

const currency = new Intl.NumberFormat("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const TABS = [
  { key: "description", label: "Description" },
  { key: "features", label: "Features" },
  { key: "materialSpecs", label: "Material Specs" },
  { key: "customization", label: "Customization" },
  { key: "terms", label: "Terms" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export function HouseDetail({ house }: { house: SpaceMakerHouse }) {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabKey>("description");
  const [added, setAdded] = useState(false);
  const [compared, setCompared] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const content = getHouseContent(house);
  const gallery = house.gallery;

  function showImage(index: number) {
    setActiveImage(((index % gallery.length) + gallery.length) % gallery.length);
  }

  function handleAddToCart() {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function handleShare(channel: "facebook" | "print" | "email") {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    if (channel === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else if (channel === "print") {
      window.print();
    } else {
      window.location.href = `mailto:?subject=${encodeURIComponent(house.name)}&body=${encodeURIComponent(url)}`;
    }
  }

  const specs = [
    { icon: Ruler, label: "Plot Size", value: `${house.plotSizeDecimal} Decimal` },
    { icon: Maximize2, label: "Floor Area", value: `${house.sizeSqft.toLocaleString("en-IN")} sqft` },
    { icon: Building2, label: "Building Height", value: house.height },
    { icon: Bed, label: "Bedrooms", value: `${house.bedrooms}` },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-concrete-light">
            <Image
              src={gallery[activeImage]}
              alt={`${house.name} — image ${activeImage + 1}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
              className="object-cover"
            />

            {gallery.length > 1 && (
              <>
                <button
                  aria-label="Previous image"
                  onClick={() => showImage(activeImage - 1)}
                  className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
                >
                  <ChevronLeft className="size-4" strokeWidth={1.75} />
                </button>
                <button
                  aria-label="Next image"
                  onClick={() => showImage(activeImage + 1)}
                  className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
                >
                  <ChevronRight className="size-4" strokeWidth={1.75} />
                </button>
              </>
            )}
          </div>

          {gallery.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {gallery.map((image, i) => (
                <button
                  key={image}
                  aria-label={`View image ${i + 1}`}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative size-16 shrink-0 overflow-hidden rounded-lg border-2 bg-concrete-light transition-colors",
                    activeImage === i ? "border-foreground" : "border-transparent hover:border-line"
                  )}
                >
                  <Image src={image} alt="" fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone">
            {house.style}
          </p>
          <h1 className="mt-2 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            {house.name}
          </h1>

          <div className="mt-3 flex items-center gap-2 text-stone-light">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4" strokeWidth={1.5} />
            ))}
            <span className="text-sm text-stone">(0 Reviews)</span>
          </div>

          <p className="mt-5 font-display text-2xl font-medium text-accent">
            ৳ {currency.format(house.price)}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full border border-line">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex size-10 items-center justify-center text-stone transition-colors hover:text-foreground"
              >
                <Minus className="size-3.5" strokeWidth={1.75} />
              </button>
              <span className="w-8 text-center text-sm tabular-nums">{quantity}</span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => q + 1)}
                className="flex size-10 items-center justify-center text-stone transition-colors hover:text-foreground"
              >
                <Plus className="size-3.5" strokeWidth={1.75} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="inline-flex items-center gap-2.5 rounded-full bg-foreground px-7 py-3.5 text-sm text-background transition-colors duration-300 hover:bg-stone"
            >
              {added ? (
                <>
                  <Check className="size-4" strokeWidth={1.75} />
                  Added
                </>
              ) : (
                <>
                  <ShoppingCart className="size-4" strokeWidth={1.75} />
                  Add to Cart
                </>
              )}
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-foreground px-7 py-3.5 text-sm text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              Buy Now
            </Link>
          </div>

          <div className="mt-5 flex items-center gap-5 text-sm text-stone">
            <button
              onClick={() => setCompared((v) => !v)}
              className={cn(
                "flex items-center gap-1.5 transition-colors hover:text-foreground",
                compared && "text-foreground"
              )}
            >
              <Repeat className="size-4" strokeWidth={1.75} />
              Compare
            </button>
            <button
              onClick={() => setWishlisted((v) => !v)}
              className={cn(
                "flex items-center gap-1.5 transition-colors hover:text-foreground",
                wishlisted && "text-accent"
              )}
            >
              <Heart className={cn("size-4", wishlisted && "fill-accent")} strokeWidth={1.75} />
              Wishlist
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3 border-y border-line py-4 text-sm text-stone">
            <span>Share:</span>
            <button
              aria-label="Share on Facebook"
              onClick={() => handleShare("facebook")}
              className="flex size-8 items-center justify-center rounded-full border border-line transition-colors hover:text-foreground"
            >
              <Share2 className="size-3.5" strokeWidth={1.75} />
            </button>
            <button
              aria-label="Print"
              onClick={() => handleShare("print")}
              className="flex size-8 items-center justify-center rounded-full border border-line transition-colors hover:text-foreground"
            >
              <Printer className="size-3.5" strokeWidth={1.75} />
            </button>
            <button
              aria-label="Share by email"
              onClick={() => handleShare("email")}
              className="flex size-8 items-center justify-center rounded-full border border-line transition-colors hover:text-foreground"
            >
              <Mail className="size-3.5" strokeWidth={1.75} />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {specs.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-xl border border-line px-3 py-4 text-center"
              >
                <Icon className="size-5 text-stone" strokeWidth={1.5} />
                <span className="text-xs text-stone">{label}</span>
                <span className="text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-8 md:mt-20">
        <div className="flex flex-wrap gap-2 border-b border-line pb-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors duration-300",
                activeTab === tab.key
                  ? "bg-foreground text-background"
                  : "text-stone hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-2xl py-8">
          {activeTab === "description" &&
            content.description.map((paragraph, i) => (
              <p key={i} className="mb-5 text-[15px] leading-relaxed text-foreground/85 last:mb-0">
                {paragraph}
              </p>
            ))}

          {activeTab !== "description" && (
            <ul className="flex flex-col gap-3">
              {content[activeTab].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
