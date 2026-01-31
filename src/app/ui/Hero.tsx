import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroDecor} ${styles.heroDecor1}`} />
      <div className={`${styles.heroDecor} ${styles.heroDecor2}`} />

      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <span className={styles.heroTagline}>
            Artisan Marketplace
          </span>
          <h1 className={styles.heroTitle}>
            Discover{" "}
            <span className={styles.heroTitleAccent}>Unique Handcrafted</span>{" "}
            Treasures
          </h1>
          <p className={styles.heroDescription}>
            Connect with talented artisans and find one-of-a-kind pieces that
            tell a story. Every purchase supports independent creators and
            sustainable craftsmanship.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/products" className="btn btn-primary btn-lg">
              Explore Products
            </Link>
            <Link href="/sell" className="btn btn-outline btn-lg">
              Become a Seller
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImagePlaceholder}>
              🏺
              <span className={styles.heroImageText}>Handcrafted with Love</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
