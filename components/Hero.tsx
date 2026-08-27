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
            It isn&rsquo;t the first hour you lose. It&rsquo;s everything
            downstream of it &mdash; the focus, the patience, the whole day
            spent catching up on water you gave away overnight.
          </p>
          <p className={styles.lede}>
            Water and electrolytes before the caffeine, so you start level
            instead of behind. No jolt. No crash. No four o&rsquo;clock
            where you&rsquo;re running on fumes and a third coffee.
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
