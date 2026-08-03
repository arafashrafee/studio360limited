import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionKicker } from "@/components/ui/section-kicker";
import { RevealText } from "@/components/ui/reveal-text";
import { NewsCard } from "@/components/news/news-card";
import { newsArticles } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "News",
  description: "Updates and announcements from Studio360 Ltd.",
};

export default function NewsPage() {
  return (
    <div className="pb-28 pt-32 md:pb-36 md:pt-40">
      <Container>
        <div className="mb-16 max-w-xl md:mb-20">
          <SectionKicker label="News" className="mb-6" />
          <RevealText
            text="Updates from the studio."
            as="h1"
            className="font-display text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.05] tracking-tight"
          />
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article, i) => (
            <NewsCard key={article.slug} article={article} index={i} priority={i === 0} />
          ))}
        </div>
      </Container>
    </div>
  );
}
