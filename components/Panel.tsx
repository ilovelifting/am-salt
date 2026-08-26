import { panel } from "@/lib/content";
import styles from "./Panel.module.css";

export function Panel() {
  return (
    <section id="panel" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.intro}>
          <div className={styles.eyebrow}>Full panel, one stick</div>
          <h2 className={styles.h2}>Nothing hidden in a blend.</h2>
          <p className={styles.body}>
            Every milligram is on the front of the packet. No proprietary
            formula, no flavor filler, no sweetener.
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
