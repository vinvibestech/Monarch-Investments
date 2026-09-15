"use client";

import Image from "next/image";

const products = [
  {
    title: "Research & Analysis",
    description:
      "We study market trends, industry dynamics, business models, competitive environments, operational requirements and growth opportunities to establish a clear understanding of each opportunity.",
    image: "/Investment/ResearchAnalysis.png",

  },
  {
    title: "Strategic Planning",
    description:
      "Insights are translated into practical strategies with defined objectives, priorities and pathways for sustainable business development.",
  image: "/Investment/StrategicPlanning.png",

  },
  {
    title: "Risk Assessment & Management",
    description:
      "We identify potential commercial, operational and strategic risks and incorporate responsible risk-management principles into our decision-making process.",
  image: "/Investment/RiskAssessment.png",
  
  },
    {
    title: "Strategic Partnerships",
    description:
      "Where appropriate, we connect businesses with specialists, organisations, technology providers, market networks and strategic partners that can strengthen execution and expansion.",
  image: "/Investment/StrategicPartnerships.png",
  
  },
    {
    title: "Execution & Development",
    description:
      "Strategy becomes valuable through execution. We support the development of strong operational foundations, effective business structures and scalable growth models.",
  image: "/Investment/ExecutionDevelopment.png",
  
  },
    {
    title: "Sustainable Growth",
    description:
      "Our long-term objective is to help build businesses capable of creating lasting value while adapting to changing markets, technologies and stakeholder expectations.",
  image: "/Investment/SustainableGrowth.png",
  
  },
];

export default function OurInvestment() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20">
        {/* Top */}
 <div className="">
  <div>
    <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
      Our Investment Approach
    </span>

    <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
      Analyse. Plan. Execute. Grow.
    </h2>

    {/* Content below title */}
    <div className="mt-7">
      <h3 className="text-lg font-semibold leading-snug text-black sm:text-xl">
        Every opportunity begins with understanding.
      </h3>

      <p className="mt-4 text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
        Monarch Global Investments applies a structured approach to evaluating
        opportunities, developing strategies and supporting sustainable growth.
      </p>
    </div>
  </div>
</div>

        {/* Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {products.map((item) => (
            <article key={item.title} className="group">
              {/* Image */}
              <div className="relative aspect-[4/2.4] overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-[24px] font-semibold leading-tight text-black">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-[#1A1A1A] lg:text-[20px] lg:leading-[2]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}