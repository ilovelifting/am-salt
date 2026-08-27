import { benefits } from "@/lib/benefits";
import styles from "./BenefitsList.module.css";

export function BenefitsList() {
  return (
    <div className={styles.grid}>
      {benefits.map((benefit, i) => (
        <div className={styles.card} key={benefit.id}>
          <div className={styles.index}>
            {String(i + 1).padStart(2, "0")} / {String(benefits.length).padStart(2, "0")}
          </div>
          <h2 className={styles.title}>{benefit.title}</h2>
          <p className={styles.body}>{benefit.body}</p>
        </div>
      ))}
    </div>
  );
}
