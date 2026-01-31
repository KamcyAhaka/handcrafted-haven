import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Handcrafted Haven | Artisan Marketplace",
  description:
    "Discover unique handcrafted items from talented artisans. Handcrafted Haven connects creators with consumers who value sustainability and quality craftsmanship.",
  keywords: [
    "handcrafted",
    "artisan",
    "marketplace",
    "handmade",
    "sustainable",
    "crafts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.variable}>{children}</body>
    </html>
  );
}
