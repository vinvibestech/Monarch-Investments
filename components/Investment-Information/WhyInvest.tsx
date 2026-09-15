"use client";

import Image from "next/image";

const features = [
  {
    title: "Diversified Investment Focus",
    description:
      "Our interests span multiple high-potential sectors, including Education, Agriculture, Energy and Tourism, creating opportunities for cross-sector collaboration, diversification and sustainable business development.",
  },
  {
    title: "Sustainable Investment Strategy",
    description:
      "Sustainability is integrated into our long-term strategy. We support businesses and initiatives designed to generate meaningful economic value while considering environmental responsibility and positive social impact.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "We collaborate with entrepreneurs, businesses, specialists, organisations and strategic partners to combine complementary expertise, market access, operational capabilities and international networks.",
  },
{
    title: "Long-Term Value Creation",
    description: (
      <>
        Our philosophy prioritises strong foundations and sustainable business
        development over short-term growth. We focus on opportunities capable
        of generating lasting value for businesses, partners, stakeholders and
        communities.
        <br />
        
        This closely follows the four investment propositions already
        established in your PDF—diversification, sustainability, partnerships
        and long-term value creation.
      </>
    ),
  },
];

export default function WhyInvest() {
  return (
    <section className="bg-white py-16 lg:pt-">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[380px_1fr] lg:gap-20">
          {/* Left */}
          <div>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
         Why Monarch

            </span>

            <h2 className="mt-4 max-w-[720px] text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
            Why Partner with 
              
             Monarch Global Investments?
            </h2>

            <div className="relative mt-8 h-[300px] overflow-hidden rounded-[12px] sm:h-[400px] lg:h-[400px]">
              <Image
                src="/Investment/WhyMonarch.png"
                alt="Why Invest"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Right */}
          <div>
            {features.map((item) => (
              <div
                key={item.title}
                className="border-b border-[#E9E9E9] py-8 first:pt-0"
              >
                <h3 className="text-2xl font-semibold leading-tight text-black lg:text-[22px]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[700px] text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[18px] lg:leading-[2]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}