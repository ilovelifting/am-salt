"use client";

import { useState } from "react";
import { faq } from "@/lib/content";
import styles from "./Faq.module.css";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.eyebrow}>Before you ask</div>
      <h2 className={styles.h2}>Questions, answered plainly.</h2>
      <div className={styles.list}>
        {faq.map((item, i) => {
          const open = openIndex === i;
          const panelId = `faq-panel-${i}`;
          return (
            <div className={styles.item} key={item.q}>
              <button
                type="button"
                className={styles.trigger}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
              >
                <span className={styles.q}>{item.q}</span>
                <span className={styles.chevron} data-open={open}>
                  ›
                </span>
              </button>
              <div id={panelId} className={styles.panel} data-open={open}>
                <div className={styles.panelInner}>
                  <p className={styles.a}>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
