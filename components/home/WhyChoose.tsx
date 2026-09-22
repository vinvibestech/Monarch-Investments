export default function WhyChoose() {
  return (
    <>
    <section className="bg-white pt-14 sm:pt-16 lg:pt-22">
      <div className="mx-auto w-full w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-26">
        {/* Small Title */}
        <span className="text-base font-medium text-black sm:text-lg lg:text-[16px]">
          Why choose Monarch Investments
        </span>

        {/* Heading */}
        <h2 className="mt-4 w-full max-w-[720px] text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15]">
          Strategic Investment. Sustainable Value.
        </h2>

        {/* Description */}
        <div className="mt-8 max-w-[1380px] lg:mt-10">
          <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
            At Monarch Global Investments, we focus on strategic investment solutions designed to create sustainable value. Through industry expertise, responsible business practices and trusted partnerships, we support businesses and investors in pursuing long-term growth.
          </p>

          <p className="mt-6 text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
            Our diversified presence across Education, Tourism, Energy and Agriculture enables us to explore opportunities across multiple industries while maintaining a strong focus on innovation, transparency and sustainable development.
          </p>
        </div>
      </div>
    </section>

     <section className={`bg-white py-14 sm:py-16 lg:py-24 lg:pb-10 mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-26`}>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
               Oru Approach

            </span>

            <h2
                className={`mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15] `}
            >
               Vision. Strategy. Sustainable Growth.

            </h2>

            <div className={`mt-5 lg:mt-5`}>
                <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                   Every opportunity begins with a clear vision, careful analysis and strategic planning. Monarch Global Investments combines market insight, responsible decision-making and strategic partnerships to support opportunities with long-term potential.

                </p>
            </div>
            <div className={`mt-2 lg:mt-2`}>
                <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                    We believe sustainable growth is built through strong foundations, meaningful partnerships and consistent innovation.
                </p>
            </div>
     
        </section>
    </>
  );
}