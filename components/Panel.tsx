import { panel } from "@/lib/content";
import styles from "./Panel.module.css";

export function Panel() {
  return (
    <section id="panel" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.intro}>
          <div className={styles.eyebrow}>Everything. On the label.</div>
          <h2 className={styles.h2}>Nothing hidden in a blend.</h2>
          <p className={styles.body}>
            Every milligram is on the label because there&rsquo;s nothing to
            hide. No proprietary formula. No &ldquo;blend.&rdquo; No
            sweetener pretending to be a flavor.
          </p>
        </div>
        <div className={styles.rows}>
          {panel.map((row) => (
            <div className={styles.row} key={row.name}>
              <div className={styles.name}>{row.name}</div>
              <div className={styles.dots} />
              <div className={styles.amount}>{row.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
