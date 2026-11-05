import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import SectionHeader from "@/components/common/SectionHeader";
import LatestNews from "@/components/home/LatestNews";



export default function page() {
    return (

        <>
            <Highlight
                label="Blog & News"
                title="Insights That Shape Tomorrow."
                description="Explore perspectives on global investments, emerging industries, business opportunities and sustainable development."
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
