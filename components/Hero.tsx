import { HeroPacket } from "./HeroPacket";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div id="hero" className={styles.hero}>
      <div className={styles.copy}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Overnight rehydration
        </div>
        <h1 className={styles.h1}>
          Your morning tiredness now has a{" "}
          <span className={styles.hl}>sixteen-ounce fix</span>.
        </h1>
        <div className={styles.body}>
          <p className={styles.lede}>
            You know the first hour. The one you spend waiting to feel like
            yourself.
          </p>
          <p className={styles.lede}>
            This is the fix for that hour. Water and electrolytes before
            the caffeine &mdash; no jolt, no crash, no waiting until eleven
            to feel human. Just a morning that starts when you do.
          </p>
          <p className={styles.kicker}>
            One stick. One glass. One better first hour.
          </p>
        </div>
        <div className={styles.ctaRow}>
          <a href="#preorder" className={styles.primaryCta}>
            Fix Your First Hour
          </a>
          <a href="#panel" className={styles.secondaryCta}>
            See the exact formula
          </a>
        </div>
        <div className={styles.tags}>
          <div>NO SUGAR</div>
          <div>NO CRASH</div>
          <div>FULLY ALERT</div>
        </div>
      </div>
      <div className={styles.art}>
        <HeroPacket />
      </div>
    </div>
  );
}
