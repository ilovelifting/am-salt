import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Article } from "@/components/journal/Article";
import { getJournalPost, journalPosts } from "@/lib/journal";
import pageStyles from "../../page.module.css";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — AM Salt`,
    description: post.dek,
    openGraph: {
      title: post.title,
      description: post.dek,
      type: "article",
    },
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  return (
    <main className={pageStyles.page}>
      <Header />
      <Article post={post} />
      <Footer />
    </main>
  );
}
