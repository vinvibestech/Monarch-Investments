import type { Metadata } from "next";
import { Mada, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const mada = Mada({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-mada",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Monarch Investments | Building Sustainable Growth",
    template: "%s | Monarch Investments",
  },

  description:
    "Monarch Investments drives sustainable growth through strategic investments in education, tourism, energy, agriculture and emerging global opportunities.",

  keywords: [
    "Monarch Investments",
    "Global Investment Company",
    "Investment Opportunities",
    "Strategic Investments",
    "Sustainable Investments",
    "Education Investments",
    "Tourism Investments",
    "Energy Investments",
    "Agriculture Investments",
    "Global Business Opportunities",
  ],

  authors: [{ name: "Monarch Investments" }],

  creator: "Monarch Investments",

  applicationName: "Monarch Investments",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Monarch Investments",
    title: "Monarch Investments | Building Sustainable Growth",
    description:
      "Discover strategic investment opportunities across education, tourism, energy and agriculture with Monarch Investments.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monarch Investments",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Monarch Investments | Building Sustainable Growth",
    description:
      "Discover global investment opportunities with Monarch Investments.",
    images: ["/og-image.jpg"],
  },

  category: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mada.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}