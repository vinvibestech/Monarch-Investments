import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import SectionHeader from "@/components/common/SectionHeader";
import LatestNews from "@/components/home/LatestNews";



export default function page() {
    return (

        <>
            <Highlight
                label="Blog & News"
                title="Insights That Drive Smarter Decisions"
                description="Stay informed with the latest investment insights, business developments, industry trends and company updates from Monarch Global Investments across Education, Agriculture, Energy and Tourism."
                tagLine=""
                image="/blognews/newsblog.png"
            />
            <SectionHeader
                label="Introduction"
                title="Explore Our Latest Stories"
                description="Our Blog & News section brings you valuable insights, market developments and company updates. Discover perspectives on investment, innovation, sustainability and global business to stay informed in a rapidly evolving world."
            />
            <LatestNews
                limit={6}
                source="blog"
            />
            <Footer />
        </>
    );
}
