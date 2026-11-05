import BlogFinalCTA from "@/components/blog/BlogFinalCTA";
import FeaturedStories from "@/components/blog/FeaturedStories";
import IndustryFocus from "@/components/blog/IndustryFocus";
import Newsletter from "@/components/blog/Newsletter";
import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import SectionHeader from "@/components/common/SectionHeader";
import LatestNews from "@/components/home/LatestNews";



export default function page() {
    return (

        <>
            <Highlight
                label="Knowledge. Perspectives. Opportunities."
                title="Insights That Shape Tomorrow."
                description="Explore perspectives on global investments, emerging industries, business opportunities and sustainable development."
                tagLine="From industry developments to innovative ideas, Monarch Insights brings together knowledge and perspectives on the sectors shaping the future."
                image="/blog/blogbanner.png"
            />
            <FeaturedStories/>
            <IndustryFocus/>
         
            
            <SectionHeader
                label="Introduction"
                title="Explore Our Latest Stories"
                description="Our Blog & News section brings you valuable insights, market developments and company updates. Discover perspectives on investment, innovation, sustainability and global business to stay informed in a rapidly evolving world."
            />
            <LatestNews
                limit={6}
                source="blog"
            />
               <Newsletter/>
            <BlogFinalCTA/>
            <Footer />
        </>
    );
}
