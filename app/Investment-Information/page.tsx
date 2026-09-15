import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import InvestmentOverview from "@/components/Investment-Information/InvestmentOverview";
import InvestmentSectors from "@/components/Investment-Information/InvestmentSectors";
import OurInvestment from "@/components/Investment-Information/OurInvestment";
import WhyInvest from "@/components/Investment-Information/WhyInvest";



export default function page() {
    return (

        <>
            <Highlight
                label="Investment Information"
                title="Empowering Sustainable Investments for Long-Term Growth"
                description="Monarch Global Investments is a diversified investment and holding company focused on identifying, developing and supporting sustainable business opportunities across Education, Agriculture, Energy and Tourism."
                tagLine="Vision. Strategy. Sustainable Growth."
                image="/Investment/InvestmentInformation.png"
            />
            <InvestmentOverview />
            <WhyInvest />
            <InvestmentSectors />
            <OurInvestment />
            <Footer />
        </>
    );
}
