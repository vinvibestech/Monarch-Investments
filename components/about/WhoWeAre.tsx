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

          <div className="mt-8 max-w-[1280px] lg:mt-12">
            <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              Monarch Investments is a diversified investment company dedicated
              to driving sustainable growth through strategic investments in
              Education, Tourism, Energy, and Agriculture. Our mission is to
              identify high-potential opportunities that generate lasting value
              for businesses, investors, and communities.
            </p>

            <p className="mt-6 text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
              By combining industry expertise with a forward-thinking approach,
              we build strong partnerships and deliver innovative solutions that
              contribute to economic development and long-term success.
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

            <h3 className="mt-4 max-w-[400px] text-2xl font-semibold leading-[1.2] text-black sm:text-3xl lg:text-[28px]">
              Creating Value Through Strategic Partnerships
            </h3>

            <p className="mt-6 max-w-[520px] text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:mt-10 lg:text-[20px] lg:leading-[2]">
              Our mission is to empower businesses and investors by providing
              responsible investment solutions, supporting innovation, and
              building partnerships that drive sustainable economic growth and
              positive social impact.
            </p>
          </div>

          {/* Vision */}
          <div>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
              Our Vision
            </span>

            <h3 className="mt-4 max-w-[400px] text-2xl font-semibold leading-[1.2] text-black sm:text-3xl lg:text-[28px]">
              Shaping Tomorrow Through Smart Investments
            </h3>

            <p className="mt-6 max-w-[520px] text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:mt-10 lg:text-[20px] lg:leading-[2]">
              To become a trusted global investment company recognized for
              creating sustainable opportunities, fostering innovation, and
              delivering long-term value across multiple industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}