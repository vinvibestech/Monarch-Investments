"use client";

const sectors = [
  {
    title: "Education",
    description:
      "Investing in educational initiatives and solutions that encourage knowledge, skill development, innovation, and opportunities for future generations.",
  },
  {
    title: "Tourism",
    description:
      "Supporting sustainable tourism and hospitality opportunities designed to connect people, destinations, cultures, and economic potential.",
  },
  {
    title: "Energy",
    description:
      "Advancing innovative and future-focused energy initiatives that contribute to cleaner, more efficient, and sustainable development.",
  },
  {
    title: "Agriculture",
    description:
      "Supporting modern agriculture, sustainable farming, agribusiness innovation, and initiatives that strengthen food security and responsible resource management.",
  },
];

export default function BusinessSectors() {
  return (
    <section className="bg-white py-5 md:py-10 lg:py-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid gap-16 lg:grid-cols-[340px_1fr] lg:gap-24">
          {/* Left */}
          <div>
            <h2 className="w-[280px] text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:text-[41px] lg:leading-[1.15]">
              Our Business
              <br />
              Sectors
            </h2>
          </div>

          {/* Right */}
          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
            {sectors.map((sector) => (
              <div key={sector.title}>
                <h3 className="text-3xl font-semibold leading-none text-black lg:text-[28px]">
                  {sector.title}
                </h3>

                <p className="mt-5 max-w-[430px] text-lg leading-[2] text-[#1A1A1A] lg:text-[20px] lg:leading-[1.8]">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}