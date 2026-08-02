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
