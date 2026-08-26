import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supportEmail } from "@/lib/site";
import pageStyles from "../page.module.css";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact — AM Salt",
  description:
    "Questions about an order, a refund, or anything else — here's how to reach a real person.",
};

export default function ContactPage() {
  return (
    <main className={pageStyles.page}>
      <Header />
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className={styles.title}>Talk to a real person.</h1>
          <p className={styles.dek}>
            No chatbot, no ticket number to memorize. Email goes to the same
            small team that runs this site.
          </p>
        </header>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardLabel}>Support</div>
            <div className={styles.cardValue}>
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </div>
            <div className={styles.cardNote}>
              Orders, refunds, flavor swaps, anything preorder-related.
              We reply within one business day.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardLabel}>Press &amp; wholesale</div>
            <div className={styles.cardValue}>
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </div>
            <div className={styles.cardNote}>
              Same inbox for now — flag it as press or wholesale in the
              subject line and it&rsquo;ll get routed to the right person.
            </div>
          </div>
        </div>

        <p className={styles.faqNote}>
          Common questions about ingredients, sodium content, and how
          preordering works are already answered on the{" "}
          <Link href="/#faq">FAQ</Link>.
        </p>

        <Link href="/" className={styles.backLink}>
          ‹ Back home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
