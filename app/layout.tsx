import type { Metadata } from "next";
import { Mada } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const mada = Mada({
  subsets: ["latin"],
  weight: [
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-mada",
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
    <html lang="en" className={`${mada.variable} h-full antialiased`}>
      <body className={`${mada.className} min-h-full flex flex-col`}>
       
        {children}
         <Navbar/>
      </body>
    </html>
  );
}