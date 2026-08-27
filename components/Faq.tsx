"use client";

import Link from "next/link";
import { useState } from "react";
import { faq } from "@/lib/content";
import styles from "./Faq.module.css";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.head}>
        <div className={styles.eyebrow}>Before you ask</div>
        <h2 className={styles.h2}>Questions, answered plainly.</h2>
        <p className={styles.headBody}>
          No hedging, no fine print buried at the bottom of the page. If
          something here should worry you, we say so.
        </p>
        <Link href="/contact" className={styles.headLink}>
          Ask us something else
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className={styles.list}>
        {faq.map((item, i) => {
          const open = openIndex === i;
          const panelId = `faq-panel-${i}`;
          return (
            <div className={styles.item} key={item.q} data-open={open}>
              <button
                type="button"
                className={styles.trigger}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
              >
                <span className={styles.q}>{item.q}</span>
                <span className={styles.icon} data-open={open} aria-hidden="true" />
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
