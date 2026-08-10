import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import SectionHeader from "@/components/common/SectionHeader";
import About from "@/components/home/About";
import BusinessSector from "@/components/home/BusinessSector";
import Hero from "@/components/home/Hero";
import LatestNews from "@/components/home/LatestNews";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (

    <>
      <Navbar />
      <Hero />
      <About />
      <BusinessSector />
      <WhyChoose />
      <SectionHeader
        label="Investment Overview"
        title="Invest with Confidence"
        description="Monarch Investments is committed to creating long-term value through diversified investments and strategic partnerships. We focus on identifying high-potential opportunities while maintaining transparency, innovation, and responsible investment practices."
      />
      <LatestNews
        limit={4}
        source="home"
      />
      <Footer />
    </>
  );
}
