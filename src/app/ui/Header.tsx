import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🏺</span>
          <span>Handcrafted Haven</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/products" className={styles.navLink}>
            Browse
          </Link>
          <Link href="/artisans" className={styles.navLink}>
            Artisans
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/login" className="btn btn-outline">
            Sign In
          </Link>
          <button
            className={styles.mobileMenuBtn}
            aria-label="Open mobile menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
