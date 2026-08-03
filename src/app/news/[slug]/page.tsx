import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionKicker } from "@/components/ui/section-kicker";
import { NewsCard } from "@/components/news/news-card";
import { getArticleBySlug, getRelatedArticles, newsArticles } from "@/lib/data/news";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);

  return (
    <div className="pb-28 md:pb-36">
      <section className="relative flex h-[60svh] min-h-[380px] w-full items-end overflow-hidden bg-foreground pt-24">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/10 to-foreground/20" />

        <Container className="relative z-10 pb-12 md:pb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-background/70">
            {article.category} — {formatDate(article.date)}
          </p>
          <RevealText
            text={article.title}
            as="h1"
            className="max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight text-background"
          />
        </Container>
      </section>

      <Container className="mt-14 md:mt-20">
        <div className="max-w-2xl">
          {article.content.map((paragraph, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <p className="mb-6 text-[17px] leading-relaxed text-foreground/85 last:mb-0">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>

      {related.length > 0 && (
        <Container className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-20">
          <SectionKicker label="More News" className="mb-10" />
          <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedArticle, i) => (
              <NewsCard key={relatedArticle.slug} article={relatedArticle} index={i} />
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}
