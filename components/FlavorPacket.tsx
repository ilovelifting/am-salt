import { FoilCap } from "./FoilCap";
import styles from "./FlavorPacket.module.css";

export function FlavorPacket({
  short,
  bg,
  fg,
}: {
  short: string;
  bg: string;
  fg: string;
}) {
  return (
    <div className={styles.wrap}>
      <FoilCap height={14} />
      <div className={styles.body} style={{ background: bg, color: fg }}>
        <div className={styles.inner}>
          <div className={styles.metaRow}>
            <span>AM SALT</span>
            <span>6.4 G</span>
          </div>
          <div className={styles.title}>{short}</div>
        </div>
      </div>
      <FoilCap height={14} />
    </div>
  );
}
