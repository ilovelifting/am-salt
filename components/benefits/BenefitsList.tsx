import { benefits } from "@/lib/benefits";
import styles from "./BenefitsList.module.css";

export function BenefitsList() {
  return (
    <div className={styles.grid}>
      {benefits.map((benefit) => (
        <div className={styles.card} key={benefit.id}>
          <h2 className={styles.title}>{benefit.title}</h2>
          <p className={styles.body}>{benefit.body}</p>
        </div>
      ))}
    </div>
  );
}
