import ApproachSections from "@/components/about/ApproachSections";
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
                description="Monarch Global Investments is a diversified investment and holding company focused on building sustainable businesses, strategic partnerships, and long-term value across high-potential sectors."
                tagLine="Vision. Strategy. Sustainable Growth."
                image="/about/AboutUsHero.png"
            />
            <WhoWeAre/>
            <BusinessSectors/>
            <ApproachSections/>
            <CommitmentSection/>
            <Footer/>
        </>
    );
}
