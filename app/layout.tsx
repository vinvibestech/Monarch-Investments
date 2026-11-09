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
  title: "Monarch Investments",
  description: "Building Sustainable Growth Through Strategic Investments",
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