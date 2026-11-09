"use client";


export default function InvestmentOverview() {
    return (
        <section id="newssection" className={`py-14 sm:py-16 lg:py-20 mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-26`}>
            <span className="text-sm font-medium text-[#C99B45] sm:text-base lg:text-[16px]">
                Our Philosophy 


            </span>

            <h2
                className={`font-main mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15] `}
            >
                Beyond Capital. Building Opportunities.

            </h2>

            <div className={`mt-5 lg:mt-5`}>
                <p className="text-base leading-7 sm:text-lg sm:leading-8 lg:text-[20px] text-white/75 lg:leading-[2]">
                 We believe successful investments are built on more than financial resources. They require strategic vision, industry knowledge, strong partnerships and a clear understanding of long-term potential.
                </p>
            </div>
            <div className={`mt-2 lg:mt-2`}>
                <p className="text-base leading-7 sm:text-lg sm:leading-8 text-white/75 lg:text-[20px] lg:leading-[2]">
                   Our approach focuses on recognising emerging opportunities, connecting the right stakeholders and supporting ventures with the potential to create sustainable economic and social value.
                </p>
            </div>
            <div className={`mt-2 lg:mt-2`}>
                <p className="text-base leading-7 sm:text-lg sm:leading-8 text-white/75 lg:text-[20px] lg:leading-[2]">
                    We look beyond immediate possibilities to explore opportunities that can contribute to lasting progress.
                </p>
            </div>
        </section>
    );
}