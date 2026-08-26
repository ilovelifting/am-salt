import { faq } from "@/lib/content";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section id="faq" className={styles.section}>
      <div className={styles.eyebrow}>Before you ask</div>
      <h2 className={styles.h2}>Questions, answered plainly.</h2>
      <div className={styles.list}>
        {faq.map((item) => (
          <div className={styles.item} key={item.q}>
            <div className={styles.q}>{item.q}</div>
            <div className={styles.a}>{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
