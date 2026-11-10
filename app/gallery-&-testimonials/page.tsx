import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import SectionHeader from "@/components/common/SectionHeader";
import GalleryCategories from "@/components/gallery/GalleryCategories";
import Testimonials from "@/components/gallery/Testimonials";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery & Testimonials | Monarch Investments",
  description:
    "Explore the Monarch Investments gallery, project highlights, business activities and testimonials reflecting our development initiatives.",
  keywords: [
    "Monarch Investments gallery",
    "investment projects",
    "client testimonials",
    "development project gallery",
    "business achievements",
    "Monarch reviews",
  ],
};


export default function page() {
    return (

        <>
            <Highlight
                label="Gallery & Testimonials"
                title="Showcasing Our Journey & Success Stories"
                description="Explore moments that reflect Monarch Global Investments’ commitment to innovation, strategic partnerships and sustainable growth, while hearing from clients, investors and business partners who have experienced our approach."
                tagLine=""
                image="/navbar/galleryimage.png"
            />
            <SectionHeader
                label="Gallery Overview"
                title="Capturing Our Milestones"
                description="Our gallery highlights key moments from corporate events, strategic partnerships, investment projects, industry initiatives and community engagement across Education, Tourism, Energy and Agriculture."
            />
            <GalleryCategories />
            <Testimonials />
            <Footer />
        </>
    );
}
