"use client";

import { useActionState } from "react";
import { preorderAction, type PreorderState } from "@/app/actions";
import { flavors } from "@/lib/content";
import { formatPricing } from "@/lib/pricing";
import styles from "./Preorder.module.css";

const initialState: PreorderState = { status: "idle" };

export function Preorder({ initialCount }: { initialCount: number }) {
  const [state, formAction, pending] = useActionState(
    preorderAction,
    initialState
  );
  const { priceLabel, perDay, oneTime } = formatPricing();
  const count = state.count ?? initialCount;

  return (
    <section id="preorder" className={styles.section}>
      <div className={styles.intro}>
        <h2 className={styles.h2}>Thirty better mornings.</h2>
        <p className={styles.body}>
          One box, one stick a day. Reserve yours and we&rsquo;ll email you
          before your card is ever charged. That&rsquo;s it, that&rsquo;s
          the preorder.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.priceRow}>
          <div className={styles.price}>{priceLabel}</div>
          <div className={styles.priceUnit}>/ 30 STICKS</div>
        </div>
        <div className={styles.perDay}>{perDay} PER MORNING</div>

        {state.status === "success" ? (
          <div className={styles.success} role="status">
            {state.message}
          </div>
        ) : (
          <form action={formAction} className={styles.form}>
            <input
              type="text"
              name="company"
              className={styles.honeypot}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className={styles.input}
            />
            <label className={styles.label} htmlFor="flavor">
              Flavor preference
            </label>
            <select
              id="flavor"
              name="flavor"
              defaultValue="no-preference"
              className={styles.select}
            >
              <option value="no-preference">No preference</option>
              {flavors.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
            </select>
            <button type="submit" disabled={pending} className={styles.cta}>
              {pending ? "Reserving…" : "Reserve my box"}
            </button>
            {state.status === "error" && (
              <p className={styles.error} role="alert">
                {state.message}
              </p>
            )}
          </form>
        )}

        <div className={styles.fine}>
          Estimated price at launch: {oneTime}. Your card is charged only
          when your box ships.
        </div>
        {count > 0 && (
          <div className={styles.count}>
            {count.toLocaleString()}{" "}
            {count === 1 ? "person is" : "people are"} already ahead of you
          </div>
        )}
      </div>
    </section>
  );
}
