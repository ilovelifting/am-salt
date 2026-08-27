"use client";

import { useEffect, useState } from "react";
import { formatPricing } from "@/lib/pricing";
import styles from "./StickyCta.module.css";

export function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [inPreorder, setInPreorder] = useState(false);
  const { priceLabel, perDay } = formatPricing();

  useEffect(() => {
    const hero = document.getElementById("hero");
    const preorder = document.getElementById("preorder");
    if (!hero || !preorder) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px" }
    );
    const preorderObserver = new IntersectionObserver(
      ([entry]) => setInPreorder(entry.isIntersecting),
      { threshold: 0.15 }
    );

    heroObserver.observe(hero);
    preorderObserver.observe(preorder);
    return () => {
      heroObserver.disconnect();
      preorderObserver.disconnect();
    };
  }, []);

  const visible = pastHero && !inPreorder;

  return (
    <div className={styles.bar} data-visible={visible} aria-hidden={!visible}>
      <div className={styles.info}>
        <span className={styles.name}>AM Salt</span>
        <span className={styles.price}>
          {priceLabel}
          <span className={styles.per}> / 30 sticks &middot; {perDay} per morning</span>
        </span>
      </div>
      <a href="#preorder" className={styles.cta} tabIndex={visible ? 0 : -1}>
        Reserve my box
      </a>
    </div>
  );
}
