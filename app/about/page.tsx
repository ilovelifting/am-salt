import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import pageStyles from "../page.module.css";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About — AM Salt",
  description:
    "Why AM Salt exists, what's actually in it, and what we're deliberately not doing.",
};

export default function AboutPage() {
  return (
    <main className={pageStyles.page}>
      <Header />
      <div className={styles.wrap}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>About</div>
          <h1 className={styles.title}>
            We got tired of guessing what was in our drinks.
          </h1>
          <p className={styles.dek}>
            AM Salt started from one specific annoyance: nearly every morning
            &ldquo;wellness&rdquo; drink on the shelf hides its actual doses
            behind a proprietary blend. We wanted the opposite of that.
          </p>
        </header>

        <div className={styles.body}>
          <h2 className={styles.h2}>The idea, unglamorously stated</h2>
          <p className={styles.p}>
            You wake up dehydrated and short on sodium every single morning
            &mdash; that&rsquo;s just what eight hours of not drinking
            anything does to a body. Most people reach for coffee first,
            which doesn&rsquo;t fix that and can make the jitteriness worse.
            The fix is almost insultingly simple: water and electrolytes,
            before the caffeine, not instead of it. That&rsquo;s the entire
            product. We didn&rsquo;t set out to build a wellness brand; we
            set out to package a fix for one specific, boring, well-documented
            problem.
          </p>

          <h2 className={styles.h2}>What we&rsquo;re optimizing for</h2>
          <p className={styles.p}>
            Full transparency down to the milligram, real citations for every
            claim we make (you can read the sources yourself &mdash; check
            the <Link href="/#science">science section</Link> and the{" "}
            <Link href="/journal">journal</Link>), and a formula with nothing
            in it that isn&rsquo;t doing a specific, explainable job. If we
            can&rsquo;t explain why an ingredient is in the packet, it&rsquo;s
            not in the packet.
          </p>

          <h2 className={styles.h2}>What we&rsquo;re deliberately not doing</h2>
          <div className={styles.pairs}>
            <div className={styles.pairCol}>
              <div className={styles.pairLabel}>We do</div>
              <ul className={styles.pairList}>
                <li>List every ingredient and its exact amount</li>
                <li>Cite the actual research behind every claim</li>
                <li>Say plainly who should talk to a doctor first</li>
                <li>Charge your card only when your box ships</li>
              </ul>
            </div>
            <div className={styles.pairCol}>
              <div className={styles.pairLabel} data-tone="no">
                We don&rsquo;t
              </div>
              <ul className={styles.pairList}>
                <li>Hide amounts behind a &ldquo;proprietary blend&rdquo;</li>
                <li>Claim it cures, treats, or prevents anything</li>
                <li>Add sugar, stimulants, or anything unexplained</li>
                <li>Post reviews from people who haven&rsquo;t used it</li>
              </ul>
            </div>
          </div>

          <h2 className={styles.h2}>Where this actually is right now</h2>
          <p className={styles.p}>
            Honestly: pre-launch. This site runs a preorder, not a live
            store, because we&rsquo;d rather confirm real demand exists
            before committing to manufacturing at scale. Every preorder
            genuinely moves that decision &mdash; see{" "}
            <Link href="/shipping-returns">shipping &amp; returns</Link> for
            exactly how that works and when your card is actually charged.
          </p>
        </div>

        <div className={styles.productCta}>
          <div className={styles.productCtaText}>
            <div className={styles.productCtaLabel}>See for yourself</div>
            <p>
              Full ingredient panel, real citations, no blend hiding behind a
              proprietary name.
            </p>
          </div>
          <Link href="/#panel" className={styles.productCtaButton}>
            See the panel
          </Link>
        </div>

        <Link href="/" className={styles.backLink}>
          ‹ Back home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
