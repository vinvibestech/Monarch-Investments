"use client";


export default function InvestmentOverview() {
    return (
        <section id="newssection" className={`bg-white py-14 sm:py-16 lg:py-20 mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-26`}>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
                Investment Overview

            </span>

            <h2
                className={`mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15] `}
            >
                Investing with Purpose. Building for the Future.

            </h2>

            <div className={`mt-5 lg:mt-5`}>
                <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                    At Monarch Global Investments, we believe sustainable growth begins with the right opportunity, supported by rigorous analysis, strategic planning and disciplined execution.

                </p>
            </div>
            <div className={`mt-2 lg:mt-2`}>
                <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                    Our investment approach focuses on businesses, projects and partnerships with strong long-term potential. By bringing together capital, expertise, strategic relationships and operational capabilities, we aim to strengthen business foundations and support responsible expansion.


                </p>
            </div>
            <div className={`mt-2 lg:mt-2`}>
                <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                    Our focus extends beyond investment alone. We seek to build an interconnected business ecosystem where innovation, sustainability and commercial opportunity work together to create enduring value.
                </p>
            </div>
        </section>
    );
}