import type { TeamGroup, TeamMember } from "@/types";

export const teamGroups: TeamGroup[] = [
  {
    title: "Design",
    description:
      "Architects and interior designers who take every project from first sketch through final material selection.",
  },
  {
    title: "Engineering",
    description:
      "Structural and MEP consultants embedded in the design process from day one, not brought in after the fact.",
  },
  {
    title: "Project Delivery",
    description:
      "Planning and turnkey coordination that keeps budget, timeline, and design intent aligned through handover.",
  },
  {
    title: "Site Supervision",
    description:
      "On-the-ground oversight during construction, protecting design decisions as they're built.",
  },
];

// Placeholder roster — replace name/role and drop matching photos into public/team/.
export const teamMembers: TeamMember[] = [
  {
    name: "Team Member 1",
    role: "Role",
    image: "/team/member-1.jpg",
    featured: true,
    socials: { dribbble: "#", x: "#", linkedin: "#" },
  },
  {
    name: "Team Member 2",
    role: "Role",
    image: "/team/member-2.jpg",
    socials: { dribbble: "#", x: "#", linkedin: "#" },
  },
  {
    name: "Team Member 3",
    role: "Role",
    image: "/team/member-3.jpg",
    socials: { dribbble: "#", x: "#", linkedin: "#" },
  },
  {
    name: "Team Member 4",
    role: "Role",
    image: "/team/member-4.jpg",
    socials: { dribbble: "#", x: "#", linkedin: "#" },
  },
];
