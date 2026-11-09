"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const sectors = [
  {
    number: "01",
    category: "Agriculture",
    title: "Agriculture & Agri-Innovation",
    headline: "Growing Opportunities. Cultivating a Sustainable Future.",
    description:
      "We explore opportunities across modern agriculture, sustainable farming and agricultural innovation. Our focus is on supporting efficient agricultural practices, advancing technology-driven solutions and developing business opportunities that contribute to food security and long-term agricultural development.",
    services: [
      "Smart Agriculture",
      "Hydroponics & Aquaponics",
      "Greenhouse Farming",
      "Agricultural Infrastructure",
      "Agri-Business Development",
      "Sustainable Farming",
    ],
    image: "/service/SerAgriculture.png",
    button: "Explore Agricultural Solutions",
    href: "/services/agriculture",
  },
  {
    number: "02",
    category: "Energy",
    title: "Energy & Sustainable Power",
    headline: "Powering Progress Through Smarter Energy Solutions.",
    description:
      "We recognise the growing importance of reliable, efficient and sustainable energy systems. Our interests in the energy sector focus on exploring opportunities in renewable energy, modern power infrastructure and innovative energy solutions that support long-term development.",
    services: [
      "Solar Energy",
      "Renewable Energy",
      "Power Infrastructure",
      "Energy Storage",
      "Sustainable Energy Development",
    ],
    image: "/service/energy.png",
    button: "Explore Energy Solutions",
    href: "/services/energy",
  },
  {
    number: "03",
    category: "Education",
    title: "Education & Global Learning",
    headline: "Empowering People Through Knowledge and Opportunity.",
    description:
      "Education plays an important role in building capable individuals, stronger institutions and progressive communities. Our interests in the education sector focus on learning opportunities, institutional development, professional training and international education initiatives.",
    services: [
      "Educational Institutions",
      "International Education",
      "Professional Training",
      "Institutional Development",
      "Learning Opportunities",
    ],
    image: "/service/Education.png",
    button: "Explore Education Opportunities",
    href: "/services/education",
  },
  {
    number: "04",
    category: "Tourism",
    title: "Tourism & Hospitality",
    headline: "Creating Experiences. Developing Destinations.",
    description:
      "Tourism and hospitality offer opportunities for economic development, infrastructure growth and meaningful cultural experiences. Our interests in this sector focus on exploring hospitality ventures, destination development and strategic opportunities within the global tourism industry.",
    services: [
      "Hospitality Development",
      "Resort Development",
      "Tourism Infrastructure",
      "Destination Development",
      "Hospitality Partnerships",
      "Sustainable Tourism",
    ],
    image: "/service/Tourism.png",
    button: "Explore Tourism Opportunities",
    href: "/services/tourism",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-[#162B45] py-20 text-white lg:py-28">

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20">

        {/* Section Heading */}
        <div className="mb-20 max-w-[850px] lg:mb-28">

          <span className="text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]">
            Our Business Sectors
          </span>

          <h2 className="font-main mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
            Building Opportunities Across Diverse Industries
          </h2>

          <p className="text-base mt-5 leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
            Monarch Global Investments explores strategic opportunities
            across agriculture, energy, education and tourism, supporting
            sustainable development and long-term growth across industries.
          </p>

        </div>

        {/* Business Sectors */}
        <div className="space-y-24 lg:space-y-36">

          {sectors.map((sector, index) => (

            <article
              key={sector.number}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >

              {/* Image */}
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >

                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div
                className={`${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >

                {/* Category */}
                <span className="text-base font-medium text-[#C99B45]">
                  {sector.category}
                </span>

                {/* Title */}
                <h3 className="font-main mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[40px]">
                  {sector.title}
                </h3>

                {/* Headline */}
                <h4 className="mt-6 text-xl font-medium leading-relaxed text-white/90 lg:text-[22px]">
                  {sector.headline}
                </h4>

                {/* Description */}
                <p className="mt-5 text-base leading-8 text-white/75 lg:text-[17px]">
                  {sector.description}
                </p>

                {/* Services */}
                <div className="mt-8">

                  <h5 className="mb-5 text-sm font-semibold text-white/90">
                    Areas of Focus
                  </h5>

                  <div className="flex flex-wrap gap-3">

                    {sector.services.map((service) => (

                      <span
                        key={service}
                        className="rounded-full border border-white/25 px-4 py-2.5 text-sm text-white/75 transition-all duration-300 hover:border-[#C99B45]  hover:text-[#C99B45]"
                      >
                        {service}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}