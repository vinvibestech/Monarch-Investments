import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import ConnectingInvestment from "@/components/services-&-products/ConnectingInvestment";
import ProductsSection from "@/components/services-&-products/ProductsSection";
import ServicesSection from "@/components/services-&-products/ServicesSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Services & Solutions | Monarch Investments",
  description:
    "Explore Monarch Investments' services and solutions, including investment consulting, strategic partnerships and sustainable project development.",
  keywords: [
    "investment consulting UAE",
    "Monarch services",
    "business development solutions",
    "strategic investment consulting",
    "sustainable development services",
  ],
};


export default function page() {
    return (

        <>
            <Highlight
                label="Services & Products"
                title="Opportunities Across Industries. Solutions for Tomorrow."
                description="Monarch Global Investments brings together diverse business interests, industry expertise and strategic opportunities across key sectors. Through our diversified portfolio, we focus on developing meaningful business solutions, fostering partnerships and supporting sustainable growth."
                tagLine="Explore our sectors, discover our areas of activity and connect with us to explore potential collaborations."
                image="/service/servicepage.png"
            />
            <ServicesSection />
            <ProductsSection />
            <ConnectingInvestment/>
            <Footer />
        </>
    );
}
