import styles from "./FoilCap.module.css";

export function FoilCap({ height }: { height: number }) {
  return <div className={styles.cap} style={{ height }} />;
}
