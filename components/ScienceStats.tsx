import { scienceStats, references } from "@/lib/content";
import styles from "./ScienceStats.module.css";

export function ScienceStats() {
  return (
    <section id="science" className={styles.section}>
      <div className={styles.eyebrow}>Why the first hour matters</div>
      <div className={styles.grid}>
        {scienceStats.map((s) => (
          <div className={styles.card} key={s.stat}>
            <div className={styles.stat}>
              {s.stat}
              <sup className={styles.refMark}>{s.refIndex}</sup>
            </div>
            <div className={styles.body}>{s.body}</div>
          </div>
        ))}
      </div>
      <ol className={styles.refs}>
        {references.map((r) => (
          <li key={r.id} id={`ref-${r.id}`}>
            {r.text}
          </li>
        ))}
      </ol>
    </section>
  );
}
