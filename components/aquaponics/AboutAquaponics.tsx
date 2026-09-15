"use client";
export default function AboutAquaponics() {
    return (
        <section id="newssection" className={`bg-white py-14 sm:py-16 lg:py-20 mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-26`}>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
                About Aquaponics

            </span>

            <h2
                className={`mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:mt-5 lg:text-[41px] lg:leading-[1.15] `}
            >
               What is Aquaponics?

            </h2>

            <div className={`mt-5 lg:mt-5`}>
                <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                   Aquaponics is an integrated farming method that combines aquaculture (fish farming) and hydroponics (soil-free plant cultivation) within a connected ecosystem.

                </p>
            </div>
            <div className={`mt-2 lg:mt-2`}>
                <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                   Nutrient-rich water from the aquatic system supports plant growth, while the plants contribute to the natural filtration and recirculation of water within the system.
                </p>
            </div>
            <div className={`mt-2 lg:mt-2`}>
                <p className="text-base leading-7 text-[#1A1A1A] sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[2]">
                   This integrated approach can reduce water requirements while supporting efficient production of vegetables, herbs and leafy greens.
                </p>
            </div>
               <div className="mt-8 border-t border-black/10 pt-6">
                <p className="text-lg font-semibold tracking-tight text-black sm:text-lg lg:text-[20px]">
               Smarter Farming. Efficient Resources. Sustainable Production.

                </p>
              </div>
        </section>
    );
}