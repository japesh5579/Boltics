import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import PerformanceSection from "@/components/PerformanceSection";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import Gallery from "@/components/Gallery";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import DealerCTA from "@/components/DealerCTA";
import GetQuote from "@/components/GetQuote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryStrip />
        <PerformanceSection />
        <ManufacturingProcess />
        <Gallery />
        <Products />
        <WhyChooseUs />
        <Stats />
        <DealerCTA />
        <GetQuote />
      </main>
      <Footer />
    </>
  );
}
