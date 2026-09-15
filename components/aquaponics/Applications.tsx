"use client";

const sectors = [
  {
    title: "Home Gardening",
    description:
      "Compact aquaponics solutions can provide households with an innovative way to grow selected vegetables, herbs and leafy greens within available spaces.",
  },
  {
    title: "Commercial Farming",
    description:
      "Scalable aquaponics solutions can support businesses and agricultural projects seeking controlled, resource-efficient and sustainable food-production systems.",
  },
  {
    title: "Educational Institutions",
    description:
      "Aquaponics provides a practical learning environment for schools, colleges, universities and research institutions, connecting agriculture, biology, sustainability, water management and environmental science.",
  },
  {
    title: "Community Projects",
    description:
      "Aquaponics can support community-based initiatives focused on local food production, sustainability education, environmental awareness and responsible resource utilisation.",
  },
];

export default function Applications() {
  return (
    <section className="bg-white py-5 md:py-10 lg:py-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid gap-16 lg:grid-cols-[340px_1fr] lg:gap-24">
          {/* Left */}
          <div>
            <span className="text-sm font-medium text-black sm:text-base lg:text-[16px]">
              Why Monarch

            </span>
            <h2 className=" mt-4 w-[380px] text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:text-[41px] lg:leading-[1.15]">
              Aquaponics for Different Growing Environments
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