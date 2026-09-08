import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import ProductsSection from "@/components/services-&-products/ProductsSection";
import ServicesSection from "@/components/services-&-products/ServicesSection";


export default function page() {
    return (

        <>
            <Highlight
                label="Services & Products"
                title="Strategic Solutions for Sustainable Growth"
                description="We provide investment solutions, business support, and innovative products that help businesses and investors create long-term value across Education, Tourism, Energy, and Agriculture."
                tagLine=""
                image="/home/hero.png"
            />
            <ServicesSection />
            <ProductsSection />
            <Footer />
        </>
    );
}
