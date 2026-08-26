import styles from "./TrustBar.module.css";

const items = [
  {
    label: "Charged only when it ships",
    sub: "Not when you reserve",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3.5" y="8" width="11" height="7.5" rx="1" />
        <path d="M6 8V5.5a3 3 0 0 1 6 0V8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "30-day refund",
    sub: "No questions asked",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          d="M3.5 9a5.5 5.5 0 1 1 1.7 3.98"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M3.5 12.5V9h3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Ships in 3–5 days",
    sub: "From the continental US",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.5 5.5h7v6h-7z" strokeLinejoin="round" />
        <path d="M9.5 8h2.7l2.3 2.2v1.3h-5z" strokeLinejoin="round" />
        <circle cx="5.5" cy="13.2" r="1.3" />
        <circle cx="12" cy="13.2" r="1.3" />
      </svg>
    ),
  },
  {
    label: "Every ingredient on the label",
    sub: "Down to the milligram",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 2.5h10v13H4z" strokeLinejoin="round" />
        <path d="M6.3 6h5.4M6.3 8.7h5.4M6.3 11.4h3.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function TrustBar() {
  return (
    <div className={styles.bar}>
      {items.map((item) => (
        <div className={styles.item} key={item.label}>
          <span className={styles.icon} aria-hidden="true">
            {item.icon}
          </span>
          <span className={styles.text}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.sub}>{item.sub}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
