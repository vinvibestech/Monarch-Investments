import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import BuildingTogether from "@/components/Investment-Information/BuildingTogether";
import FinalCallToAction from "@/components/Investment-Information/FinalCallToAction";
import InvestmentOverview from "@/components/Investment-Information/InvestmentOverview";
import InvestmentSectors from "@/components/Investment-Information/InvestmentSectors";
import OurInvestment from "@/components/Investment-Information/OurInvestment";
import ResponsibleProgress from "@/components/Investment-Information/ResponsibleProgress";
import WhyInvest from "@/components/Investment-Information/WhyInvest";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Opportunities & Insights | Monarch Investments",
  description:
    "Discover investment information, strategic opportunities and insights across agriculture, education, renewable energy and sustainable tourism.",
  keywords: [
    "investment opportunities UAE",
    "Monarch Investments",
    "strategic investment",
    "sustainable investment opportunities",
    "investment information",
    "global investment sectors",
  ],
};


export default function page() {
    return (

        <>
            <Highlight
                label="Investment Information"
                title="Investing in Possibilities. Creating Lasting Value"
                description="At Monarch Global Investments, we focus on identifying promising opportunities, developing strategic partnerships and supporting ventures that contribute to sustainable growth."
                tagLine="Our investment interests span Education, Tourism, Energy and Agriculture, bringing together innovation, expertise and long-term vision."
                image="/Investment/InvestmentInformations.png"
            />
            <InvestmentOverview />
            <WhyInvest />
            <InvestmentSectors />
            <OurInvestment />
            <ResponsibleProgress/>
            <BuildingTogether/>
            <FinalCallToAction/>
            <Footer />
        </>
    );
}
