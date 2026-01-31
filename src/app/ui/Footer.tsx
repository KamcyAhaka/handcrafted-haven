import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <span className={styles.footerLogoIcon}>🏺</span>
              <span>Handcrafted Haven</span>
            </Link>
            <p className={styles.footerTagline}>
              Connecting talented artisans with customers who value
              sustainability and quality craftsmanship.
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h4>Shop</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/products">All Products</Link>
              </li>
              <li>
                <Link href="/categories">Categories</Link>
              </li>
              <li>
                <Link href="/artisans">Artisans</Link>
              </li>
              <li>
                <Link href="/new">New Arrivals</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Sell</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/sell">Start Selling</Link>
              </li>
              <li>
                <Link href="/seller-guide">Seller Guide</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/success-stories">Success Stories</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            © {currentYear} Handcrafted Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
