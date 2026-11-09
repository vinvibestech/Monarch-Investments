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
                label="About Monarch"
                title="Connecting Vision with Opportunity. Building Value for Tomorrow."
                description="Monarch Global Investments is a diversified investment platform focused on identifying opportunities, fostering strategic partnerships and supporting sustainable growth across key industries."
                tagLine="With a forward-looking approach and a commitment to responsible business practices, we bring together vision, expertise and innovation to create meaningful long-term value."
                image="/about/AboutUsHerosction.png"
            />
            <WhoWeAre/>
            <BusinessSectors/>
            <ApproachSections/>
            <CommitmentSection/>
            <Footer/>
        </>
    );
}
