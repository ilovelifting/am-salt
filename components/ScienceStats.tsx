"use client";

import { useEffect, useRef, useState } from "react";
import { scienceStats, references } from "@/lib/content";
import styles from "./ScienceStats.module.css";

const SCRAMBLE_CHARS = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const REVEAL_MS = 650;

function useDecode(target: string, active: boolean, delayMs: number) {
  const [text, setText] = useState(target);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const chars = target.split("");
    let raf = 0;
    const startAt = performance.now() + delayMs;

    function tick(now: number) {
      const elapsed = now - startAt;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / REVEAL_MS, 1);
      const revealCount = Math.floor(progress * chars.length);
      setText(
        chars
          .map((ch, i) => {
            if (!/[a-zA-Z0-9]/.test(ch)) return ch;
            if (i < revealCount) return ch;
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join("")
      );
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setText(target);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, delayMs]);

  return text;
}

function StatCard({
  stat,
  index,
  active,
}: {
  stat: (typeof scienceStats)[number];
  index: number;
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const display = useDecode(stat.stat, active, index * 150);
  const ref = references.find((r) => r.id === stat.refIndex);
  const panelId = `source-${stat.refIndex}`;

  return (
    <div className={styles.card}>
      <div className={styles.reading}>
        Reading {String(index + 1).padStart(2, "0")} / 03
      </div>
      <div className={styles.stat}>
        {display}
        <sup className={styles.refMark}>{stat.refIndex}</sup>
      </div>
      <div className={styles.body}>{stat.body}</div>
      {ref && (
        <>
          <button
            type="button"
            className={styles.sourceToggle}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.chevron} data-open={open}>
              ›
            </span>
            {open ? "Hide source" : "Show source"}
          </button>
          <div
            id={panelId}
            className={styles.sourcePanel}
            data-open={open}
          >
            <div className={styles.sourceInner}>
              <p className={styles.sourceText}>{ref.text}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function ScienceStats() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="science" className={styles.section}>
      <div className={styles.eyebrow}>Three numbers. No philosophy.</div>
      <div className={styles.grid} ref={gridRef}>
        {scienceStats.map((s, i) => (
          <StatCard key={s.stat} stat={s} index={i} active={active} />
        ))}
      </div>
    </section>
  );
}
