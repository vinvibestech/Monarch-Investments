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
                description="Stay informed with the latest company updates, investment trends, industry news, and expert insights across Education, Tourism, Energy, and Agriculture."
                        tagLine=""
                image="/home/hero.png"
            />
         <SectionHeader
                      label="Introduction"
                      title="Explore Our Latest Stories"
                      description="Our Blog & News section keeps you updated with valuable insights, market developments, and company announcements. Discover expert perspectives that help businesses, investors, and professionals stay ahead in a rapidly evolving world."
                  />
                  <LatestNews
               limit={4}
               source="blog"
             />
            <Footer />
        </>
    );
}
