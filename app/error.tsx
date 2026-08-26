"use client";

import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import pageStyles from "./page.module.css";
import styles from "./not-found.module.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Server-side logging hook — swap for a real error tracker
    // (Sentry, etc.) before this needs to catch anything that matters.
    console.error(error);
  }, [error]);

  return (
    <main className={pageStyles.page}>
      <Header />
      <section className={styles.section}>
        <div className={styles.eyebrow}>Status: something broke</div>
        <h1 className={styles.h1}>Not the label&rsquo;s fault.</h1>
        <p className={styles.body}>
          Something went wrong loading this page. It&rsquo;s on us, not you
          &mdash; try again, and if it keeps happening, let support know.
        </p>
        <button type="button" onClick={reset} className={styles.cta}>
          Try again
        </button>
      </section>
      <Footer />
    </main>
  );
}
