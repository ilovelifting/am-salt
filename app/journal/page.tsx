import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JournalCard } from "@/components/journal/JournalCard";
import { journalPosts } from "@/lib/journal";
import pageStyles from "../page.module.css";
import styles from "./journal.module.css";

export const metadata: Metadata = {
  title: "The Journal — AM Salt",
  description:
    "Research on actually waking up: cortisol, sleep inertia, light, hydration, and what's proven versus what's just popular advice.",
};

export default function JournalIndex() {
  return (
    <main className={pageStyles.page}>
      <Header />
      <section className={styles.intro}>
        <div className={styles.eyebrow}>The Journal</div>
        <h1 className={styles.h1}>Research on actually waking up.</h1>
        <p className={styles.body}>
          The same standard as the rest of this site: real citations, and
          honesty about what the evidence doesn&rsquo;t actually prove yet.
        </p>
      </section>
      <section className={styles.list}>
        {journalPosts.map((post) => (
          <JournalCard post={post} key={post.slug} />
        ))}
      </section>
      <Footer />
    </main>
  );
}
