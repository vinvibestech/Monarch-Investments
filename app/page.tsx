import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import SectionHeader from "@/components/common/SectionHeader";
import About from "@/components/home/About";
import BuildingSection from "@/components/home/BuildingSection";
import BusinessSector from "@/components/home/BusinessSector";
import ContactUsSection from "@/components/home/ContactUsSection";
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
        label=" News & Insights"
        title="Latest News & Insights"
        description="Stay informed with the latest investment insights, industry trends, company news and developments across Education, Tourism, Energy and Agriculture."
      />
      <LatestNews
        limit={4}
        source="home"
      />
      <BuildingSection/>
      <ContactUsSection/>
      <Footer />
    </>
  );
}
