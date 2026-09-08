"use client";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Top Content */}
        <div className="max-w-[1280px]">
          <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
            Who We Are
          </span>

          <h2 className="mt-4 max-w-[720px] text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
            Investing in a Better Future
          </h2>

          <div className="mt-8 max-w-[1280px] lg:mt-10">
            <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              Monarch Global Investments brings businesses, investments, strategic alliances, and emerging opportunities together under a unified corporate structure.
            </p>

            <p className="mt-5 text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              Our activities span Education, Agriculture, Energy, and Tourism, with a strong emphasis on sustainability, innovation, responsible growth, and long-term value creation.

            </p>
            <p className="mt-5 text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              We work closely with businesses, entrepreneurs, partners, and industry specialists to identify opportunities, strengthen business models, establish strategic connections, and support sustainable expansion.

            </p>
            <p className="mt-5 text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              Our approach is built on careful analysis, precise planning, effective execution, and the belief that successful growth requires both vision and the right timing.


            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-14 grid gap-12 sm:gap-14 md:px-8 lg:mt-20 lg:grid-cols-2 lg:gap-20 lg:px-20">
          {/* Mission */}
          <div>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
              Our Mission
            </span>

            <p className="mt-6 max-w-[520px] text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:mt-3 lg:text-[20px] lg:leading-[2]">
              To transform opportunities into sustainable businesses by combining investment, expertise, strategic partnerships, and disciplined execution to create lasting value.

            </p>


          </div>

          {/* Vision */}
          <div>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
              Our Vision
            </span>


            <p className="mt-6 max-w-[520px] text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:mt-3 lg:text-[20px] lg:leading-[2]">
              To shape a sustainable future through strategic investments, innovation, and responsible growth.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}