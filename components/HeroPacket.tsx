import { FoilCap } from "./FoilCap";
import styles from "./HeroPacket.module.css";

export function HeroPacket() {
  return (
    <div className={styles.wrap}>
      <FoilCap height={20} />
      <div className={styles.body}>
        <div className={styles.inner}>
          <div className={styles.metaRow}>
            <span>AM SALT</span>
            <span>STICK 01 / 6.4 G</span>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.copy}>
              <div className={styles.title}>
                Brain
                <br />
                hydration
              </div>
              <div className={styles.sub}>
                Sodium, potassium, magnesium. Citrus. Before coffee.
              </div>
            </div>
            <div className={styles.dot} />
          </div>
        </div>
      </div>
      <FoilCap height={20} />
    </div>
  );
}
