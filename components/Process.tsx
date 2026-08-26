import { steps } from "@/lib/content";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>Before coffee, not instead of it.</h2>
      <div className={styles.list}>
        {steps.map((step) => (
          <div className={styles.step} key={step.n}>
            <div className={styles.n}>{step.n}</div>
            <div className={styles.copy}>
              <div className={styles.title}>{step.title}</div>
              <div className={styles.body}>{step.body}</div>
            </div>
          </div>
        ))}
        <div className={styles.note}>
          Caffeine on a dehydrated system is why the first cup can feel
          jittery and short-lived. Water and salt first; coffee lands
          better.
        </div>
      </div>
    </section>
  );
}
