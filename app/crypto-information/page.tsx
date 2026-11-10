import Footer from "@/components/common/Footer";
import GRNXCoinSection from "@/components/crypto/GRNXCoinSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Information & Digital Assets | Monarch Investments",
  description:
    "Explore information about cryptocurrency, blockchain technology, digital assets and emerging trends in the evolving digital finance landscape.",
  keywords: [
    "cryptocurrency information",
    "digital assets",
    "blockchain technology",
    "crypto education",
    "digital finance trends",
    "blockchain investment information",
  ],
};


export default function page() {
    return (

        <>
            <GRNXCoinSection />
            <Footer />
        </>
    );
}
