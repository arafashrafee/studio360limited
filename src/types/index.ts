export type ProjectCategory =
  | "Architecture"
  | "Interior"
  | "Commercial"
  | "Residential"
  | "Institutional";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  typology: string;
  location: string;
  coverImage: string;
  gallery: string[];
  excerpt: string;
  description: string[];
  services: string[];
  featured?: boolean;
}

export interface Service {
  index: string;
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface TeamGroup {
  title: string;
  description: string;
}

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
  content: string[];
}

export type HouseStyle = "Bungalow" | "Duplex" | "Triplex" | "Villa" | "Cottage";

export type HouseHeight = "Single Storey" | "Duplex" | "Triplex";

export interface HouseSpec {
  projectSlug: string;
  name: string;
  style: HouseStyle;
  height: HouseHeight;
  bedrooms: number;
  toilets: number;
  sizeSqft: number;
  plotSizeDecimal: number;
  price: number;
}

export interface SpaceMakerHouse extends HouseSpec {
  coverImage: string;
  gallery: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  featured?: boolean;
  socials?: {
    dribbble?: string;
    x?: string;
    linkedin?: string;
  };
}
