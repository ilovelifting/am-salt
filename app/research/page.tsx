import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { references } from "@/lib/content";
import { benefitReferences } from "@/lib/benefits";
import { journalPosts } from "@/lib/journal";
import pageStyles from "../page.module.css";
import styles from "./research.module.css";

export const metadata: Metadata = {
  title: "Research — AM Salt",
  description:
    "Every specific claim on this site, sourced in one place — instead of footnoted on every page.",
};

export default function ResearchPage() {
  return (
    <main className={pageStyles.page}>
      <Header />
      <div className={styles.wrap}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>Research</div>
          <h1 className={styles.title}>Don&rsquo;t take our word for it.</h1>
          <p className={styles.dek}>
            We&rsquo;d rather you go read the actual studies than trust a
            marketing page. So instead of footnoting every sentence on the
            site, we put all of it here, in one place.
          </p>
        </header>

        <div className={styles.group}>
          <div className={styles.groupLabel}>Cited on the homepage</div>
          <ol className={styles.list}>
            {references.map((ref) => (
              <li key={ref.id}>{ref.text}</li>
            ))}
          </ol>
        </div>

        <div className={styles.group}>
          <div className={styles.groupLabel}>Cited on the Benefits page</div>
          <ol className={styles.list}>
            {benefitReferences.map((ref) => (
              <li key={ref.id}>{ref.text}</li>
            ))}
          </ol>
        </div>

        <p className={styles.dek}>
          Want the longer version, with the actual reasoning and where the
          evidence gets thinner than people assume?{" "}
          {journalPosts[0] && (
            <Link href={`/journal/${journalPosts[0].slug}`}>
              Read the Journal
            </Link>
          )}
          .
        </p>

        <Link href="/" className={styles.backLink}>
          ‹ Back home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
