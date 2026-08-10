"use client";

import Image from "next/image";

const features = [
  {
    title: "Diversified Investment Portfolio",
    description:
      "Our investments span multiple industries, reducing risk while creating long-term growth opportunities.",
  },
  {
    title: "Sustainable Investment Strategy",
    description:
      "We prioritise investments that generate lasting economic, environmental, and social value.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "We collaborate with trusted organisations and industry leaders to maximise investment potential.",
  },
  {
    title: "Long-Term Value Creation",
    description:
      "Our focus is on building sustainable businesses that deliver consistent growth over time.",
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
              Why Invest
            </span>

            <h2 className="mt-4 max-w-[720px] text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
              Why Invest with
              <br />
              Monarch Investments
            </h2>

            <div className="relative mt-8 h-[300px] overflow-hidden rounded-[12px] sm:h-[400px] lg:h-[400px]">
              <Image
                src="/home/hero.png"
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