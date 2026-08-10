import BusinessSectors from "@/components/about/BusinessSectors";
import CommitmentSection from "@/components/about/CommitmentSection";
import WhoWeAre from "@/components/about/WhoWeAre";
import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";


export default function page() {
    return (

        <>
            <Highlight
                label="About Us"
                title="Building Sustainable Growth Through Strategic Investments"
                description="Monarch Investments is committed to creating long-term value through innovative investments, trusted partnerships, and sustainable business solutions across diverse industries."
                image="/home/hero.png"
            />
            <WhoWeAre/>
            <BusinessSectors/>
            <CommitmentSection/>
            <Footer/>
        </>
    );
}
