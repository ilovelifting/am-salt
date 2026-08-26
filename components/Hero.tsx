import { HeroPacket } from "./HeroPacket";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.copy}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Electrolytes for the first hour
        </div>
        <h1 className={styles.h1}>Hydrate your brain first.</h1>
        <p className={styles.lede}>
          You wake up down a liter of water and short on sodium. That&rsquo;s
          the fog you&rsquo;re drinking coffee at. One packet, sixteen
          ounces, before anything else.
        </p>
        <div className={styles.ctaRow}>
          <a href="#preorder" className={styles.primaryCta}>
            Preorder your box
          </a>
          <a href="#science" className={styles.secondaryCta}>
            Read the research
          </a>
        </div>
        <div className={styles.tags}>
          <div>NO SUGAR</div>
          <div>NO STEVIA</div>
          <div>SODIUM ON THE LABEL</div>
        </div>
      </div>
      <div className={styles.art}>
        <HeroPacket />
      </div>
    </div>
  );
}
