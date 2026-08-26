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
          Caffeine on top of dehydration is just anxiety with extra steps.
          Hydrate first and the caffeine finally does what you wanted it to
          do &mdash; alert, not wired.
        </div>
      </div>
    </section>
  );
}
