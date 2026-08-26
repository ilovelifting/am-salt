import Link from "next/link";
import type { JournalPost } from "@/lib/journal";
import styles from "./JournalCard.module.css";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function JournalCard({ post }: { post: JournalPost }) {
  return (
    <Link href={`/journal/${post.slug}`} className={styles.card}>
      <div className={styles.meta}>
        {formatDate(post.publishedAt)} · {post.readMinutes} min read
      </div>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.dek}>{post.dek}</p>
      <div className={styles.readMore}>
        Read the piece <span aria-hidden="true">→</span>
      </div>
    </Link>
  );
}
