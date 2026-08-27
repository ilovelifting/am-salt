import Link from "next/link";
import styles from "./Footer.module.css";

const columns = [
  {
    label: "Shop",
    links: [
      { href: "/#preorder", text: "Preorder" },
      { href: "/benefits", text: "Benefits" },
      { href: "/#flavors", text: "Flavors" },
      { href: "/#panel", text: "Ingredients" },
    ],
  },
  {
    label: "Company",
    links: [
      { href: "/about", text: "About" },
      { href: "/journal", text: "Journal" },
      { href: "/research", text: "Research" },
      { href: "/contact", text: "Contact" },
    ],
  },
  {
    label: "Support",
    links: [
      { href: "/#faq", text: "FAQ" },
      { href: "/shipping-returns", text: "Shipping & returns" },
      { href: "/privacy", text: "Privacy policy" },
      { href: "/terms", text: "Terms of service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <div className={styles.wordmark}>AM Salt</div>
          <p className={styles.disclaimer}>
            Statements have not been evaluated by the FDA. This product is
            not intended to diagnose, treat, cure, or prevent any disease.
            It&rsquo;s salt water. Manage expectations accordingly.
          </p>
        </div>
        {columns.map((col) => (
          <nav className={styles.col} key={col.label} aria-label={col.label}>
            <div className={styles.colLabel}>{col.label}</div>
            {col.links.map((link) => (
              <Link href={link.href} key={link.href} className={styles.link}>
                {link.text}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div className={styles.bottom}>
        <div>© {new Date().getFullYear()} AM Salt</div>
        <div>Made for the first hour. Built for the rest of the day.</div>
      </div>
    </footer>
  );
}
