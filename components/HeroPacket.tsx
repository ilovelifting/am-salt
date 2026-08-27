import { FoilCap } from "./FoilCap";
import styles from "./HeroPacket.module.css";

export function HeroPacket() {
  return (
    <div className={styles.wrap}>
      <FoilCap width={18} />
      <div className={styles.body}>
        <div className={styles.metaRow}>
          <span>AM SALT</span>
          <span>STICK 01 / 6.4 G</span>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.copy}>
            <div className={styles.title}>Not Coffee</div>
            <div className={styles.sub}>
              Sodium. Potassium. Magnesium. Straight to your brain.
            </div>
          </div>
          <div className={styles.dot} />
        </div>
      </div>
      <FoilCap width={18} />
    </div>
  );
}
