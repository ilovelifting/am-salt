import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>AM Salt</div>
      <div className={styles.disclaimer}>
        Statements have not been evaluated by the FDA. This product is not
        intended to diagnose, treat, cure, or prevent any disease.
      </div>
      <div>© {new Date().getFullYear()}</div>
    </footer>
  );
}
