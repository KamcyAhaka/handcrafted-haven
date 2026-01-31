import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={`${styles.ctaDecor} ${styles.ctaDecor1}`} />
      <div className={`${styles.ctaDecor} ${styles.ctaDecor2}`} />

      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>
          Ready to Share Your Craft?
        </h2>
        <p className={styles.ctaDescription}>
          Join our growing community of artisans and reach customers who
          appreciate handmade quality. Setting up your shop is free and takes
          just a few minutes.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/register" className={styles.ctaBtnPrimary}>
            Start Selling Today
          </Link>
          <Link href="/about" className={styles.ctaBtnSecondary}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
