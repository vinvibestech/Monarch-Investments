"use client";
import Footer from "@/components/common/Footer";
import Highlight from "@/components/common/Highlight";
import ContactSection from "@/components/contact/ContactSection";
import ContactUs from "@/components/contact/ContactUs";
import VisitOffice from "@/components/contact/VisitOffice";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Monarch Investments | Business Enquiries",
  description:
    "Get in touch with Monarch Investments to discuss investment opportunities, strategic partnerships, business enquiries and development projects.",
  keywords: [
    "contact Monarch Investments",
    "investment enquiry UAE",
    "business partnership Dubai",
    "investment consultation",
    "strategic partnership enquiries",
  ],
};




export default function page() {
    return (

        <>
            <Highlight
                label="Contact Us"
                title="Let's Start a Conversation"
                description="Whether you are exploring investment opportunities, business partnerships, strategic collaborations or general enquiries, the Monarch Global Investments team is ready to assist you. Connect with us to discuss your requirements and explore opportunities for sustainable growth."
                tagLine=""
                image="/contactUs/contactUs.png"
            />
            <ContactUs />
            <ContactSection />
            <VisitOffice />
            <Footer />
        </>
    );
}
