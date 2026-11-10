import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { sectors } from "@/data/sector";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Business Sectors | Monarch Investments",
  description:
    "Explore Monarch Investments' business sectors, including agriculture, education, renewable energy and tourism, driving sustainable development.",
  keywords: [
    "Monarch business sectors",
    "agriculture investment",
    "education sector investment",
    "energy development",
    "tourism investment",
    "diversified investment company",
  ],
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SectorDetails({
  params,
}: PageProps) {
  const { slug } = await params;

  const sector = sectors.find(
    (item) => item.label.toLowerCase() === slug.toLowerCase()
  );

  if (!sector) {
    notFound();
  }

  return (
    <main className="">

      {/* Hero Section */}
      <section className="relative min-h-[650px] flex items-center">

        <Image
          src={sector.image}
          alt={sector.label}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute bg-black/60 inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 py-32 text-white">

          <Link
            href="/#businessSector"
            className="inline-flex items-center gap-2 mb-18 text-sm"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <p className="text-[#CD9635] mb-5">
            Our Business Sectors
          </p>

          <h1 className="font-main text-5xl md:text-7xl font-semibold mb-8">
            {sector.label}
          </h1>

          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-white/75">
            {sector.description}
          </p>

        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <p className="text-[#CD9635] mb-4">
           About The Sector 
        </p>

        <h2 className="font-main text-3xl md:text-5xl font-semibold  max-w-3xl mb-8">
          {sector.heading}
        </h2>

        <p className="text-white/75 text-lg leading-8 max-w-4xl">
          {sector.overview}
        </p>

      </section>

      {/* Investment Focus */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-8">

          <p className="text-[#CD9635] mb-4">
             Our Investment Approach
          </p>

          <h2 className="font-main text-3xl md:text-5xl font-semibold  mb-12">
            Our Investment Focus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {sector.focus.map((item, index) => (
              <div
                key={index}
                className="bg-white/[0.025] p-8 rounded-xl border border-white/10 hover:shadow-lg transition-all"
              >
                <span className="text-[#CD9635] text-sm">
                  0{index + 1}
                </span>

                <h3 className="text-xl font-medium mt-5">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <p className="text-[#CD9635] mb-4">
         Our Vision
        </p>

        <h2 className="font-main text-3xl md:text-5xl font-semibold mb-8">
          Building a Sustainable Future.
        </h2>

        <p className="text-white/75 text-lg leading-8 max-w-4xl">
          {sector.vision}
        </p>

      </section>


          <section className="px-4 md:px-8 py-12 md:py-20">
      <div className="relative bg-black min-h-[300px] md:min-h-[300px] overflow-hidden rounded-[28px] bg-[#F4F5F6] flex items-center justify-center">

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-20">
          <h2 className="font-main text-3xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-tight  leading-[1.15] mb-6">
             Creating Value Through
            Strategic Investments.
          </h2>

          <p className="text-sm md:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto mb-3">
              Discover investment opportunities and explore how we
          create long-term value across our business sectors.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-[#C99B45]/50 px-7 py-3.5 text-sm md:text-[16px] font-semibold text-[#E7C477] transition-all duration-300 hover:border-[#C99B45] hover:bg-[#C99B45] hover:text-[#172A45]"
          >
            Contact Our Team

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </div>
    </section>

    </main>
  );
}