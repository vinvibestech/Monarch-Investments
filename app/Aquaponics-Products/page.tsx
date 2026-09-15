import AboutAquaponics from "@/components/aquaponics/AboutAquaponics";
import Applications from "@/components/aquaponics/Applications";
import AquaponicsProducts from "@/components/aquaponics/AquaponicsProducts";
import SustainableAgriculture from "@/components/aquaponics/SustainableAgriculture";
import WhyChooseAquaponics from "@/components/aquaponics/WhyChooseAquaponics";
import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";


export default function page() {
    return (

        <>
            <Highlight
                label="Aquaponics Solutions"
                title="Sustainable Farming for a Greener Tomorrow"
                description="Monarch Global Investments supports innovative aquaponics and sustainable farming solutions that integrate aquaculture with hydroponic cultivation to produce fresh crops through an efficient, resource-conscious growing ecosystem."
                tagLine="Innovative food production. Smarter water use. Sustainable growth."
                image="/Investment/InvestmentInformation.png"
            />
     <AboutAquaponics/>
            <WhyChooseAquaponics />
            <AquaponicsProducts />
            <Applications />
            <SustainableAgriculture/>
            <Footer />
        </>
    );
}
