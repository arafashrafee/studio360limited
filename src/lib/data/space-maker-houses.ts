import type { HouseSpec, SpaceMakerHouse } from "@/types";
import { getProjectBySlug } from "./projects";

const houseSpecs: HouseSpec[] = [
  {
    projectSlug: "triplex-residence-natore",
    name: "আপন নিবাস",
    style: "Triplex",
    height: "Triplex",
    bedrooms: 6,
    toilets: 6,
    sizeSqft: 5850,
    plotSizeDecimal: 8.5,
    price: 8250000,
  },
  {
    projectSlug: "nexus-boulevard",
    name: "স্বপ্ননীড়",
    style: "Villa",
    height: "Triplex",
    bedrooms: 6,
    toilets: 6,
    sizeSqft: 5400,
    plotSizeDecimal: 7.75,
    price: 7250000,
  },
  {
    projectSlug: "bahauddin-villa",
    name: "সুখনীড়",
    style: "Villa",
    height: "Duplex",
    bedrooms: 5,
    toilets: 4,
    sizeSqft: 3850,
    plotSizeDecimal: 5.5,
    price: 4950000,
  },
  {
    projectSlug: "aholi-mansion",
    name: "শান্তিকুঞ্জ",
    style: "Villa",
    height: "Triplex",
    bedrooms: 5,
    toilets: 5,
    sizeSqft: 4200,
    plotSizeDecimal: 6,
    price: 5850000,
  },
  {
    projectSlug: "habib",
    name: "কল্যাণ কুঞ্জ",
    style: "Duplex",
    height: "Duplex",
    bedrooms: 4,
    toilets: 4,
    sizeSqft: 3250,
    plotSizeDecimal: 4.5,
    price: 3550000,
  },
  {
    projectSlug: "jolshiri",
    name: "অমরাবতী",
    style: "Bungalow",
    height: "Single Storey",
    bedrooms: 3,
    toilets: 3,
    sizeSqft: 2250,
    plotSizeDecimal: 3.25,
    price: 2550000,
  },
  {
    projectSlug: "shuchana",
    name: "সৌধ",
    style: "Cottage",
    height: "Single Storey",
    bedrooms: 2,
    toilets: 2,
    sizeSqft: 1650,
    plotSizeDecimal: 2.24,
    price: 1650000,
  },
  {
    projectSlug: "green-bay",
    name: "ঐশ্বর্য",
    style: "Duplex",
    height: "Duplex",
    bedrooms: 4,
    toilets: 3,
    sizeSqft: 2950,
    plotSizeDecimal: 4,
    price: 3250000,
  },
  {
    projectSlug: "khorshed-alam-residence",
    name: "অনিন্দ্য",
    style: "Duplex",
    height: "Duplex",
    bedrooms: 4,
    toilets: 4,
    sizeSqft: 3100,
    plotSizeDecimal: 4.25,
    price: 3450000,
  },
  {
    projectSlug: "reza-residence",
    name: "সুধানীড়",
    style: "Bungalow",
    height: "Single Storey",
    bedrooms: 3,
    toilets: 3,
    sizeSqft: 2400,
    plotSizeDecimal: 3.5,
    price: 2650000,
  },
  {
    projectSlug: "united-city",
    name: "মঙ্গলম",
    style: "Villa",
    height: "Triplex",
    bedrooms: 5,
    toilets: 5,
    sizeSqft: 4650,
    plotSizeDecimal: 6.5,
    price: 6250000,
  },
  {
    projectSlug: "baki-house",
    name: "শুভালয়",
    style: "Cottage",
    height: "Single Storey",
    bedrooms: 2,
    toilets: 2,
    sizeSqft: 1550,
    plotSizeDecimal: 2,
    price: 1550000,
  },
];

export const spaceMakerHouses: SpaceMakerHouse[] = houseSpecs
  .map((spec) => {
    const project = getProjectBySlug(spec.projectSlug);
    if (!project) return null;
    return {
      ...spec,
      coverImage: project.coverImage,
      gallery: project.gallery,
    };
  })
  .filter((house): house is SpaceMakerHouse => house !== null);

export const houseStyles = [
  "Bungalow",
  "Duplex",
  "Triplex",
  "Villa",
  "Cottage",
] as const;

export function getHouseBySlug(slug: string) {
  return spaceMakerHouses.find((house) => house.projectSlug === slug);
}

export function getRelatedHouses(slug: string, limit = 3) {
  const current = getHouseBySlug(slug);
  if (!current) return [];
  const sameStyle = spaceMakerHouses.filter(
    (h) => h.projectSlug !== slug && h.style === current.style
  );
  const rest = spaceMakerHouses.filter(
    (h) => h.projectSlug !== slug && h.style !== current.style
  );
  return [...sameStyle, ...rest].slice(0, limit);
}

export function getHouseContent(house: SpaceMakerHouse) {
  return {
    description: [
      `${house.name} is a ${house.height.toLowerCase()} ${house.style.toLowerCase()} designed under Space Maker, our full-package home service — architecture, interiors, engineering, and construction delivered as one complete house.`,
      `Set on a ${house.plotSizeDecimal} decimal plot, the layout spreads ${house.sizeSqft.toLocaleString("en-IN")} sqft of living space across ${house.bedrooms} bedrooms and ${house.toilets} attached toilets, planned for natural light and cross-ventilation in every room.`,
    ],
    features: [
      `${house.bedrooms} bedrooms, each with an attached or shared toilet`,
      `${house.toilets} toilets fitted with branded sanitary ware`,
      `${house.height} massing with a private car porch`,
      "Landscaped front yard and boundary wall included",
      "Structural design certified for local seismic and wind loads",
    ],
    materialSpecs: [
      "RCC frame structure with brick-masonry infill walls",
      "First-class bricks with waterproofed exterior plaster and paint",
      "UPVC or aluminium windows with clear glazing",
      "Vitrified floor tiles throughout, anti-skid tiles in wet areas",
      "Concealed electrical and plumbing lines with modern fixtures",
    ],
    customization: [
      "Room layout, elevation color, and finish materials can be adjusted with our design team",
      "Interior packages (Essential / Signature / Premium) available at additional cost",
      "Optional add-ons: rooftop garden, solar panel setup, home automation",
    ],
    terms: [
      "Price includes architecture, engineering, and construction as quoted for the listed plot size — final cost is confirmed after a site visit.",
      "50% advance on agreement, staged payments through construction, balance on handover.",
      "Estimated delivery: 10–14 months from foundation, subject to site conditions.",
    ],
  };
}
