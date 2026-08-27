import { HeroPacket } from "./HeroPacket";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div id="hero" className={styles.hero}>
      <div className={styles.copy}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Status: dehydrated
        </div>
        <h1 className={styles.h1}>
          Your brain is <span className={styles.hl}>73% water</span>.
          <br />
          Coffee is 0% water.
        </h1>
        <p className={styles.lede}>
          You didn&rsquo;t wake up tired. You woke up down a liter of water
          and short on sodium &mdash; and called it tired. One packet,
          sixteen ounces, the second you&rsquo;re up. That&rsquo;s the
          difference between groggy and actually alert.
        </p>
        <div className={styles.ctaRow}>
          <a href="#preorder" className={styles.primaryCta}>
            Wake up alert
          </a>
          <a href="#science" className={styles.secondaryCta}>
            See the proof
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
