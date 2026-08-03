import type { NewsArticle } from "@/types";

// Placeholder posts — edit title/excerpt/content/date, swap coverImage per article.
export const newsArticles: NewsArticle[] = [
  {
    slug: "studio360-regional-expansion",
    title: "Studio360 opens planning services in Chattogram and Sylhet",
    excerpt:
      "We're extending turnkey planning and delivery to clients outside Dhaka for the first time.",
    date: "2026-06-12",
    category: "Announcement",
    coverImage: "/projects/aholi-mansion/1.png",
    content: [
      "Placeholder body copy. Replace with the real announcement text.",
      "Add as many paragraphs as the story needs.",
    ],
  },
  {
    slug: "fifty-projects-milestone",
    title: "Crossing fifty completed projects",
    excerpt:
      "A look back at the residential, commercial, and civic work that got us here.",
    date: "2026-04-03",
    category: "Milestone",
    coverImage: "/projects/habib/1.png",
    content: [
      "Placeholder body copy. Replace with the real story text.",
      "Add as many paragraphs as the story needs.",
    ],
  },
  {
    slug: "engineering-division-launch",
    title: "Bringing structural engineering in-house",
    excerpt:
      "Why we built a dedicated engineering division instead of outsourcing it.",
    date: "2026-01-20",
    category: "Studio",
    coverImage: "/projects/united-city/1.png",
    content: [
      "Placeholder body copy. Replace with the real story text.",
      "Add as many paragraphs as the story needs.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3) {
  return newsArticles.filter((article) => article.slug !== slug).slice(0, limit);
}
