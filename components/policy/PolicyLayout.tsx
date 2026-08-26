import Link from "next/link";
import type { PolicyPage } from "@/lib/policies";
import styles from "./PolicyLayout.module.css";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function PolicyLayout({ page }: { page: PolicyPage }) {
  return (
    <article className={styles.wrap}>
      <header className={styles.header}>
        <h1 className={styles.title}>{page.title}</h1>
        <p className={styles.dek}>{page.dek}</p>
        <div className={styles.meta}>
          Last updated {formatDate(page.updatedAt)}
        </div>
      </header>

      <div className={styles.body}>
        {page.body.map((block, i) => {
          if (block.type === "h2") {
            return (
              <h2 className={styles.h2} key={i}>
                {block.text}
              </h2>
            );
          }
          if (block.type === "list") {
            return (
              <ul className={styles.list} key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          }
          return (
            <p className={styles.p} key={i}>
              {block.text}
            </p>
          );
        })}
      </div>

      <Link href="/" className={styles.backLink}>
        ‹ Back home
      </Link>
    </article>
  );
}
