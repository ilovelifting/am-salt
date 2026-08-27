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
            Tear one open. Sixteen ounces of water. Drink it before you
            touch the coffee.
          </p>
          <p className={styles.lede}>
            Sodium, potassium and magnesium put back what eight hours of
            sleep took out of you. No jolt, no crash, no four o&rsquo;clock
            running on fumes and a third coffee &mdash; just a day that
            starts level and stays there.
          </p>
          <p className={styles.kicker}>
            One stick. One glass. A day that doesn&rsquo;t fall behind.
          </p>
        </div>
        <div className={styles.ctaRow}>
          <a href="#preorder" className={styles.primaryCta}>
            Start The Day Ahead
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
