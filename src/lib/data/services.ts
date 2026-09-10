import type { Service } from "@/types";

export const services: Service[] = [
  {
    index: "01",
    title: "Architecture",
    description:
      "We take a building from first sketch to construction documents — residences, hospitals, and mixed-use work included. Concept, planning, and detailing stay with the same team, so what is drawn is what can be built.",
    scope: [
      "Concept and schematic design",
      "Planning and authority drawings",
      "Construction documentation",
    ],
    image: "/service/architecture.png",
  },
  {
    index: "02",
    title: "Construction",
    description:
      "We build under one roof, from groundbreaking to handover. Site supervision, programme, and finish quality sit with the people who designed the work, so design intent does not get lost on site.",
    scope: [
      "Full-package building delivery",
      "Site supervision and quality control",
      "Handover and snagging",
    ],
    image: "/service/construction.png",
  },
  {
    index: "03",
    title: "Interior Design",
    description:
      "Interiors are planned as part of the architecture, not applied after. We set layout, light, materials, and furniture so rooms hold up to daily use — not only to photographs.",
    scope: [
      "Spatial and furniture planning",
      "Material and finish strategy",
      "Joinery and lighting detailing",
    ],
    image: "/service/interior-design.png",
  },
  {
    index: "04",
    title: "Project Management",
    description:
      "One point of coordination across architects, engineers, contractors, and consultants. We keep programme, cost, and decisions in one place so the project stays on track from briefing to handover.",
    scope: [
      "Programme and cost control",
      "Consultant and contractor coordination",
      "Client reporting and decision tracking",
    ],
    image: "/service/engineering.png",
  },
  {
    index: "05",
    title: "Renovation & Remodeling",
    description:
      "We rework existing homes and buildings to match how they need to work now. Surveys, new layouts, structure, and interiors are handled together so the old fabric and the new work read as one building.",
    scope: [
      "Existing-building survey and assessment",
      "Layout, structure, and interior reworking",
      "Phased construction in occupied buildings",
    ],
    image: "/service/space-maker.png",
  },
];
