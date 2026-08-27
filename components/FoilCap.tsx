import styles from "./FoilCap.module.css";

/**
 * The crimped foil seal at each end of a packet. Pass `height` for a packet
 * standing upright (seals across the top and bottom) or `width` for one
 * lying on its side (seals at the left and right ends) — the crimp lines
 * always run across the seal, so the two cases need different gradients.
 */
export function FoilCap(
  props: { height: number; width?: never } | { width: number; height?: never }
) {
  if (props.width !== undefined) {
    return (
      <div className={styles.capVertical} style={{ width: props.width }} />
    );
  }
  return <div className={styles.cap} style={{ height: props.height }} />;
}
