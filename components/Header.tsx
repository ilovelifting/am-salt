import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.wordmark}>
        AM Salt
      </Link>
      <nav className={styles.nav}>
        <Link href="/#science">The proof</Link>
        <Link href="/benefits">Benefits</Link>
        <Link href="/#panel">What&rsquo;s actually in it</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/#preorder">Preorder</Link>
      </nav>
    </header>
  );
}
