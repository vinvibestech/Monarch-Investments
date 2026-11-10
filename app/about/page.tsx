import ApproachSections from "@/components/about/ApproachSections";
import BusinessSectors from "@/components/about/BusinessSectors";
import CommitmentSection from "@/components/about/CommitmentSection";
import WhoWeAre from "@/components/about/WhoWeAre";
import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Monarch Investments | Vision & Global Expertise",
  description:
    "Discover Monarch Investments, our vision, strategic approach and commitment to responsible investment and sustainable development across key industries.",
  keywords: [
    "about Monarch Investments",
    "investment company Dubai",
    "investment vision",
    "global development company",
    "sustainable business growth",
    "strategic investments",
  ],
};


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
