import BusinessSectors from "@/components/about/BusinessSectors";
import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import SectionHeader from "@/components/common/SectionHeader";
import OurInvestment from "@/components/Investment-Information/OurInvestment";
import WhyInvest from "@/components/Investment-Information/WhyInvest";



export default function page() {
    return (

        <>
            <Highlight
                label="Investment Information"
                title="Empowering Sustainable Investments for Long-Term Growth"
                description="Monarch Investments provides strategic investment opportunities across Education, Tourism, Energy, and Agriculture, helping businesses and investors achieve sustainable growth through responsible and future-focused investments."
                image="/home/hero.png"
            />
            <SectionHeader
                label="Investment Overview"
                title="Invest with Confidence"
                description="Monarch Investments is committed to creating long-term value through diversified investments and strategic partnerships. We focus on identifying high-potential opportunities while maintaining transparency, innovation, and responsible investment practices."
            />
            <WhyInvest />
            <BusinessSectors/>
            <OurInvestment/>
            <Footer />
        </>
    );
}
