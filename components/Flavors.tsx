import { flavors } from "@/lib/content";
import { FlavorPacket } from "./FlavorPacket";
import styles from "./Flavors.module.css";

export function Flavors() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>Two flavors. We stopped there.</div>
      <div className={styles.grid}>
        {flavors.map((f) => (
          <div className={styles.card} key={f.id}>
            <FlavorPacket short={f.short} bg={f.bg} fg={f.fg} />
            <div className={styles.copy}>
              <div className={styles.name}>{f.name}</div>
              <div className={styles.note}>{f.note}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
