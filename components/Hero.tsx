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
          You&rsquo;re not tired.
          <br />
          You&rsquo;re <span className={styles.hl}>dry</span>.
        </h1>
        <p className={styles.lede}>
          Eight hours without a sip leaves you down water and short on
          sodium. It feels exactly like being tired, so that&rsquo;s what
          you blame it on. One stick, sixteen ounces, before the coffee
          &mdash; and you get the first hour of your day back.
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
