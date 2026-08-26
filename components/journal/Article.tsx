import Link from "next/link";
import type { JournalPost } from "@/lib/journal";
import { CiteText } from "./CiteText";
import styles from "./Article.module.css";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function Article({ post }: { post: JournalPost }) {
  return (
    <article className={styles.wrap}>
      <header className={styles.header}>
        <div className={styles.eyebrow}>The Journal</div>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.dek}>{post.dek}</p>
        <div className={styles.meta}>
          {formatDate(post.publishedAt)} · {post.readMinutes} min read
        </div>
      </header>

      <div className={styles.body}>
        {post.body.map((block, i) => {
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
                  <li key={j}>
                    <CiteText text={item} />
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p className={styles.p} key={i}>
              <CiteText text={block.text} />
            </p>
          );
        })}
      </div>

      <div className={styles.productCta}>
        <div className={styles.productCtaText}>
          <div className={styles.productCtaLabel}>Speaking of which</div>
          <p>
            Water and sodium before coffee is step one above &mdash; AM Salt
            is just that step, pre-measured, in a stick you can dissolve in
            thirty seconds.
          </p>
        </div>
        <Link href="/#preorder" className={styles.productCtaButton}>
          See the packet
        </Link>
      </div>

      <div className={styles.references}>
        <div className={styles.referencesLabel}>References</div>
        <ol className={styles.referencesList}>
          {post.references.map((ref) => (
            <li key={ref.id} id={`ref-${ref.id}`}>
              {ref.text}
            </li>
          ))}
        </ol>
      </div>

      <Link href="/journal" className={styles.backLink}>
        ‹ Back to the Journal
      </Link>
    </article>
  );
}
