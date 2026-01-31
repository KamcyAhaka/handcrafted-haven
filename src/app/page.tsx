import Header from "@/app/ui/Header";
import Hero from "@/app/ui/Hero";
import Features from "@/app/ui/Features";
import CTA from "@/app/ui/CTA";
import Footer from "@/app/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
