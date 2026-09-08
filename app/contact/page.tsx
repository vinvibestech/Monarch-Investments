"use client";
import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import ContactSection from "@/components/contact/ContactSection";
import ContactUs from "@/components/contact/ContactUs";
import VisitOffice from "@/components/contact/VisitOffice";





export default function page() {
    return (

        <>
            <Highlight
                label="Contact Us"
                title="Let's Start a Conversation"
                description="Whether you're looking for investment opportunities, business partnerships, or have a general enquiry, our team is here to help. Get in touch and let's build a successful future together."
                tagLine=""
                image="/home/hero.png"
            />
            <ContactUs />
            <ContactSection />
            <VisitOffice />
            <Footer />
        </>
    );
}
