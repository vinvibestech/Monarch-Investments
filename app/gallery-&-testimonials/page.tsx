import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import SectionHeader from "@/components/common/SectionHeader";
import GalleryCategories from "@/components/gallery/GalleryCategories";
import Testimonials from "@/components/gallery/Testimonials";


export default function page() {
    return (

        <>
            <Highlight
                label="Gallery & Testimonials"
                title="Showcasing Our Journey & Success Stories"
                description="Explore moments that reflect our commitment to innovation, strategic partnerships, and sustainable growth while hearing from those who have worked with Monarch Investments."
                image="/home/hero.png"
            />
            <SectionHeader
                label="Gallery Overview"
                title="Capturing Our Milestones"
                description="Our gallery highlights key moments from business events, strategic partnerships, industry initiatives, and projects across Education, Tourism, Energy, and Agriculture."
            />
            <GalleryCategories />
            <Testimonials/>
            <Footer />
        </>
    );
}
