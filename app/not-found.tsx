import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "./not-found.module.css";
import pageStyles from "./page.module.css";

export default function NotFound() {
  return (
    <main className={pageStyles.page}>
      <Header />
      <section className={styles.section}>
        <div className={styles.eyebrow}>Status: not found</div>
        <h1 className={styles.h1}>404. Not on the label.</h1>
        <p className={styles.body}>
          Everything we&rsquo;ve got is on the label, and this page
          isn&rsquo;t on it. Might be a typo, might be a link that moved.
        </p>
        <Link href="/" className={styles.cta}>
          Back to the homepage
        </Link>
      </section>
      <Footer />
    </main>
  );
}
