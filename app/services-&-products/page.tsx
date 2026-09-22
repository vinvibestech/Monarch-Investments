import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import ConnectingInvestment from "@/components/services-&-products/ConnectingInvestment";
import ProductsSection from "@/components/services-&-products/ProductsSection";
import ServicesSection from "@/components/services-&-products/ServicesSection";


export default function page() {
    return (

        <>
            <Highlight
                label="Services & Products"
                title="Strategic Solutions for Sustainable Growth"
                description="Monarch Global Investments provides strategic investment solutions, business support and innovative products designed to create long-term value across Education, Tourism, Energy and Agriculture."
                tagLine=""
                image="/service/BlogNews.png"
            />
            <ServicesSection />
            <ProductsSection />
            <ConnectingInvestment/>
            <Footer />
        </>
    );
}
