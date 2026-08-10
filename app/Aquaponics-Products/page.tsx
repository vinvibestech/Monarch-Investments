import Applications from "@/components/aquaponics/Applications";
import AquaponicsProducts from "@/components/aquaponics/AquaponicsProducts";
import WhyChooseAquaponics from "@/components/aquaponics/WhyChooseAquaponics";
import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import SectionHeader from "@/components/common/SectionHeader";


export default function page() {
    return (

        <>
           <Highlight
                label="Aquaponics Products"
                title="Sustainable Farming for a Greener Tomorrow"
                description="Discover innovative aquaponics solutions that combine aquaculture and hydroponics to produce fresh, healthy crops while conserving water and supporting sustainable agriculture."
                image="/home/hero.png"
            />
          <SectionHeader
                      label="About Aquaponics"
                      title="What is Aquaponics?"
                      description="Aquaponics is an eco-friendly farming system that combines fish farming and hydroponic plant cultivation in a single, sustainable ecosystem. It uses natural biological processes to produce fresh vegetables with significantly less water and minimal environmental impact."
                  />
                  <WhyChooseAquaponics/>
                  <AquaponicsProducts/>
                  <Applications/>
            <Footer />
        </>
    );
}
