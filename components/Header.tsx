import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wordmark}>AM Salt</div>
      <nav className={styles.nav}>
        <a href="#science">The science</a>
        <a href="#panel">What&rsquo;s in it</a>
        <a href="#preorder">Preorder</a>
      </nav>
    </header>
  );
}
