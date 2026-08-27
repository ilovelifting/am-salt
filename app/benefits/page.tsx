import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BenefitsList } from "@/components/benefits/BenefitsList";
import pageStyles from "../page.module.css";
import styles from "./benefits.module.css";

export const metadata: Metadata = {
  title: "Benefits — AM Salt",
  description:
    "Six specific reasons water and sodium before coffee actually work — not vibes, not a mood board.",
};

export default function BenefitsPage() {
  return (
    <main className={pageStyles.page}>
      <Header />
      <section className={styles.intro}>
        <div className={styles.eyebrow}>Benefits</div>
        <h1 className={styles.h1}>Why this actually works.</h1>
        <p className={styles.body}>
          Not vibes, not a wellness-brand mood board &mdash; six specific
          reasons, backed by real research.{" "}
          <Link href="/research" className={styles.researchLink}>
            See the studies
          </Link>
          .
        </p>
      </section>

      <BenefitsList />

      <div className={styles.ctaWrap}>
        <div className={styles.productCta}>
          <div className={styles.productCtaText}>
            <div className={styles.productCtaLabel}>Ready when you are</div>
            <p>
              One box, one stick a day. Reserve yours and we&rsquo;ll email
              you before your card is ever charged.
            </p>
          </div>
          <Link href="/#preorder" className={styles.productCtaButton}>
            Reserve a box
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
