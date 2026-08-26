import { HeroPacket } from "./HeroPacket";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.copy}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Status: dehydrated
        </div>
        <h1 className={styles.h1}>
          Your brain is 73% water.
          <br />
          Coffee is 0% water.
        </h1>
        <p className={styles.lede}>
          You didn&rsquo;t wake up tired. You woke up down a liter of water
          and short on sodium, and called it tired. One packet, sixteen
          ounces, before you do anything else &mdash; including the coffee.
        </p>
        <div className={styles.ctaRow}>
          <a href="#preorder" className={styles.primaryCta}>
            Fix the actual problem
          </a>
          <a href="#science" className={styles.secondaryCta}>
            See the proof
          </a>
        </div>
        <div className={styles.tags}>
          <div>NOT A BLEND</div>
          <div>NOT PROPRIETARY</div>
          <div>JUST SODIUM</div>
        </div>
      </div>
      <div className={styles.art}>
        <HeroPacket />
      </div>
    </div>
  );
}
