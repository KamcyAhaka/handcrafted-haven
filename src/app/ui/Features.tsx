import { 
  PiLeafLight, 
  PiUserCircleLight, 
  PiSparkleLight, 
  PiLockKeyLight, 
  PiStarLight, 
  PiChatCircleDotsLight 
} from "react-icons/pi";
import styles from "./Features.module.css";

const features = [
  {
    icon: PiLeafLight,
    title: "Sustainable",
    description:
      "Each piece is crafted with eco-friendly practices, supporting a healthier planet and mindful consumption.",
  },
  {
    icon: PiUserCircleLight,
    title: "Support Artisans",
    description:
      "Your purchase directly supports independent creators and helps preserve traditional craftsmanship.",
  },
  {
    icon: PiSparkleLight,
    title: "Unique Quality",
    description:
      "Every item is handmade with attention to detail, ensuring you receive something truly one-of-a-kind.",
  },
  {
    icon: PiLockKeyLight,
    title: "Secure Shopping",
    description:
      "Shop with confidence knowing your transactions are protected with industry-standard security.",
  },
  {
    icon: PiStarLight,
    title: "Verified Reviews",
    description:
      "Read authentic reviews from real customers to help you make informed purchasing decisions.",
  },
  {
    icon: PiChatCircleDotsLight,
    title: "Direct Connection",
    description:
      "Connect directly with artisans to learn about their stories, techniques, and inspiration.",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresInner}>
        <div className={styles.featuresHeader}>
          <span className={styles.featuresTagline}>Why Choose Us</span>
          <h2 className={styles.featuresTitle}>
            A Marketplace Built on Values
          </h2>
          <p className={styles.featuresDescription}>
            We&apos;re more than a marketplace. We&apos;re a community that
            celebrates creativity, sustainability, and the human touch behind
            every creation.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <IconComponent size={36} color="white" />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
