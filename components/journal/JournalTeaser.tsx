import { journalPosts } from "@/lib/journal";
import { JournalCard } from "./JournalCard";
import styles from "./JournalTeaser.module.css";

export function JournalTeaser() {
  const [latest] = journalPosts;
  if (!latest) return null;

  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>From the journal</div>
      <div className={styles.cardWrap}>
        <JournalCard post={latest} />
      </div>
    </section>
  );
}
