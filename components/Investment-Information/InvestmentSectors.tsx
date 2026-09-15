"use client";

const sectors = [
  {
    title: "Education",
    subtitle: "Empowering Knowledge. Creating Opportunity.",
    description: [
      "We support educational initiatives, businesses and innovative solutions that advance knowledge, skills, technology and human development.",
      "Our objective is to contribute to education ecosystems that prepare individuals and communities for emerging opportunities while encouraging innovation and lifelong learning.",
    ],
    focusAreas:
      "Education & Training • Skill Development • Educational Technology • Knowledge Platforms • Future Learning Solutions",
  },
  {
    title: "Agriculture",
    subtitle: "Growing Responsibly. Building Food Security.",
    description: [
      "Agriculture remains fundamental to sustainable economic development.",
      "Monarch Global Investments supports opportunities in modern agriculture, sustainable farming, agribusiness, agricultural technology and responsible resource management.",
      "We seek initiatives that improve productivity, strengthen food security and contribute to more sustainable agricultural ecosystems.",
    ],
    focusAreas:
      "Sustainable Agriculture • Agribusiness • Agri-Innovation • Food Security • Smart Farming • Resource Management",
  },
  {
    title: "Energy",
    subtitle: "Powering Sustainable Progress.",
    description: [
      "The global transition toward cleaner and more efficient energy creates significant opportunities for innovation and responsible investment.",
      "We explore and support renewable, sustainable and future-focused energy initiatives capable of contributing to greater efficiency, environmental responsibility and long-term development.",
    ],
    focusAreas:
      "Renewable Energy • Clean Energy • Energy Innovation • Sustainable Infrastructure • Future Energy Solutions",
  },
  {
    title: "Tourism",
    subtitle: "Connecting Destinations. Creating Economic Opportunity.",
    description: [
      "Tourism connects people, cultures, destinations and economies.",
      "Monarch Global Investments explores opportunities across sustainable tourism, hospitality and destination-focused businesses that have the potential to create memorable experiences while supporting local and regional economic development.",
    ],
    focusAreas:
      "Sustainable Tourism • Hospitality • Destination Development • Tourism Innovation • Travel Ecosystems",
  },
];

export default function InvestmentSectors() {
  return (
    <section className="bg-white py-5 md:py-10 lg:py-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid gap-16 lg:grid-cols-[340px_1fr] lg:gap-24">

          {/* Left */}
          <div>
            <h2 className="w-[420px] text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:text-[41px] lg:leading-[1.15]">
              Investing Across Industries
              <br />
              That Shape Tomorrow
            </h2>

            <p className="mt-4 max-w-[500px] space-y-4 text-lg leading-[1.8] text-[#1A1A1A] lg:text-[18px]">
              Monarch Global Investments focuses on four strategic sectors
              with significant potential for sustainable development and
              long-term economic impact.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
            {sectors.map((sector) => (
              <div key={sector.title}>

                {/* Sector Title */}
                <h3 className="text-3xl font-semibold leading-none text-black lg:text-[28px]">
                  {sector.title}
                </h3>

                {/* Subtitle */}
                <h4 className="mt-5 text-lg font-semibold leading-snug text-black lg:text-[20px]">
                  {sector.subtitle}
                </h4>

                {/* Description */}
                <div className="mt-4 max-w-[500px] space-y-4 text-lg leading-[1.8] text-[#1A1A1A] lg:text-[18px]">
                  {sector.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Focus Areas */}
                <div className="mt-6 max-w-[500px]">
                  <p className="text-sm font-semibold tracking-wide text-black">
                    Focus Areas
                  </p>

                  <p className="mt-2 text-base leading-7 text-[#555]">
                    {sector.focusAreas}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}